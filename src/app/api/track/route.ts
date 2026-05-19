// POST /api/track — public, no auth.
//
// The tracker client `navigator.sendBeacon`s a JSON event here. We enrich
// it with server-side geo (from Vercel/Cloudflare edge headers) and the
// authoritative timestamp, then persist via the store adapter.
//
// We return 204 No Content as fast as possible so the client never waits.

import type { NextRequest } from "next/server";
import type { AnyEvent, EnrichedEvent, EventType } from "@/lib/analytics/types";
import { getStore } from "@/lib/analytics/store";

const ALLOWED_TYPES = new Set<EventType>([
  "pageview",
  "click_plan",
  "click_whatsapp",
  "click_outbound",
  "session_end",
]);

// Hard limits to keep a misbehaving (or malicious) client from filling
// up Redis. These are intentionally generous.
const MAX_STRING = 512;
const MAX_BODY_BYTES = 4 * 1024;

function cap(s: unknown, n = MAX_STRING): string {
  if (typeof s !== "string") return "";
  return s.length > n ? s.slice(0, n) : s;
}

function getCountry(req: NextRequest): string {
  // Each host exposes the visitor's country slightly differently:
  //   - Vercel:     x-vercel-ip-country
  //   - Cloudflare: cf-ipcountry
  //   - Netlify:    x-country (Edge) or x-nf-geo (base64 JSON; we decode below)
  // All return ISO 3166-1 alpha-2 ("FR", "MA", "US"...).
  let v =
    req.headers.get("x-vercel-ip-country") ??
    req.headers.get("cf-ipcountry") ??
    req.headers.get("x-country") ??
    "";

  if (!v) {
    // Netlify packs richer geo into x-nf-geo as base64-encoded JSON.
    const nfGeo = req.headers.get("x-nf-geo");
    if (nfGeo) {
      try {
        const decoded = JSON.parse(
          typeof atob === "function"
            ? atob(nfGeo)
            : Buffer.from(nfGeo, "base64").toString("utf8"),
        );
        if (typeof decoded?.country?.code === "string") {
          v = decoded.country.code;
        }
      } catch {
        /* fall through to "??" */
      }
    }
  }

  const cc = v.toUpperCase();
  if (/^[A-Z]{2}$/.test(cc)) return cc;
  return "??";
}

/** Validate + normalize the client payload into a strict EnrichedEvent.
 *  Returns null if the payload is unusable (we silently drop, never 4xx —
 *  there's no benefit in giving a scraper feedback). */
function buildEvent(
  raw: Partial<AnyEvent> & Record<string, unknown>,
  country: string,
): EnrichedEvent | null {
  if (!raw || typeof raw !== "object") return null;
  const t = raw.t as EventType | undefined;
  if (!t || !ALLOWED_TYPES.has(t)) return null;
  if (typeof raw.sid !== "string" || raw.sid.length < 4) return null;

  const base = {
    sid: cap(raw.sid, 64),
    ts: typeof raw.ts === "number" ? raw.ts : Date.now(),
    lang: cap(raw.lang, 8),
    path: cap(raw.path, 256),
    country,
    serverTs: Date.now(),
  };

  switch (t) {
    case "pageview": {
      const vw = typeof raw.vw === "number" ? Math.min(8192, Math.max(0, raw.vw | 0)) : 0;
      const device = (raw.device === "tablet" || raw.device === "desktop"
        ? raw.device
        : "mobile") as "mobile" | "tablet" | "desktop";
      return { t, ...base, ref: cap(raw.ref, 512), device, vw };
    }
    case "click_plan":
      return { t, ...base, plan: cap(raw.plan, 16), href: cap(raw.href, 512) };
    case "click_whatsapp":
      return {
        t,
        ...base,
        source: cap(raw.source, 32),
        href: cap(raw.href, 512),
      };
    case "click_outbound":
      return {
        t,
        ...base,
        href: cap(raw.href, 512),
        host: cap(raw.host, 128),
      };
    case "session_end": {
      const seconds =
        typeof raw.seconds === "number"
          ? Math.min(60 * 60 * 6, Math.max(0, Math.floor(raw.seconds)))
          : 0;
      return { t, ...base, seconds };
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  // Cheap content-length guard before parsing.
  const len = Number(req.headers.get("content-length") ?? "0");
  if (len > MAX_BODY_BYTES) {
    return new Response(null, { status: 204 });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return new Response(null, { status: 204 });
  }

  const country = getCountry(req);
  const items: Array<Partial<AnyEvent> & Record<string, unknown>> =
    Array.isArray(raw) ? (raw as Array<Partial<AnyEvent> & Record<string, unknown>>) : [raw as Partial<AnyEvent> & Record<string, unknown>];

  // Cap batch size — sendBeacon callers shouldn't be batching more than a handful.
  const trimmed = items.slice(0, 32);

  const store = getStore();
  await Promise.allSettled(
    trimmed
      .map((r) => buildEvent(r, country))
      .filter((e): e is EnrichedEvent => e !== null)
      .map((ev) => store.push(ev)),
  );

  return new Response(null, { status: 204 });
}
