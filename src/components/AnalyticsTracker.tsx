"use client";

// Browser-side analytics tracker. Mounted once at the root layout.
//
// Responsibilities:
//   1. Mint a per-tab session id (sessionStorage, persists across reloads
//      in the same tab) and emit a `pageview` on mount.
//   2. Listen globally for clicks on:
//        - any element with `data-track-plan="<id>"` → click_plan
//        - any anchor pointing at wa.me            → click_whatsapp
//        - any other external http(s) anchor      → click_outbound
//   3. Measure time-on-site with a rolling "alive" timestamp updated on
//      visibility / focus / interaction, and POST a `session_end` event
//      via `sendBeacon` when the tab hides or unloads.

import { useEffect, useRef } from "react";

type TrackerProps = {
  /** Active locale, passed in from the server-rendered layout. */
  lang: string;
};

// Crypto-quality session id, prefixed for grepability in raw event logs.
function newSessionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return "s_" + crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  }
  return "s_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function deviceClass(): "mobile" | "tablet" | "desktop" {
  const w = window.innerWidth;
  if (w < 640) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

function send(event: Record<string, unknown>) {
  const body = JSON.stringify(event);
  // Beacon is fire-and-forget and survives tab close — perfect for unload paths.
  // Fallback to fetch keepalive when the browser doesn't have sendBeacon (rare).
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      const ok = navigator.sendBeacon("/api/track", blob);
      if (ok) return;
    }
  } catch {
    /* ignore — fall through to fetch */
  }
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

const SID_KEY = "atv_sid";
const START_KEY = "atv_sid_start";

function getSession(): { sid: string; startTs: number } {
  let sid = sessionStorage.getItem(SID_KEY);
  let startStr = sessionStorage.getItem(START_KEY);
  if (!sid) {
    sid = newSessionId();
    sessionStorage.setItem(SID_KEY, sid);
  }
  if (!startStr) {
    startStr = String(Date.now());
    sessionStorage.setItem(START_KEY, startStr);
  }
  return { sid, startTs: parseInt(startStr, 10) || Date.now() };
}

export function AnalyticsTracker({ lang }: TrackerProps) {
  // We need stable refs for the unload handler — re-binding it on every
  // render would break removal.
  const sentEnd = useRef(false);
  const lastActive = useRef(Date.now());
  const sessionRef = useRef<{ sid: string; startTs: number } | null>(null);

  useEffect(() => {
    const session = getSession();
    sessionRef.current = session;

    const path = window.location.pathname;

    // 1) Pageview — only one per pathname per session to avoid double-firing
    //    on hot-reload / soft-nav in dev.
    const seenKey = `atv_pv_${session.sid}_${path}`;
    if (!sessionStorage.getItem(seenKey)) {
      sessionStorage.setItem(seenKey, "1");
      send({
        t: "pageview",
        sid: session.sid,
        ts: Date.now(),
        lang,
        path,
        ref: document.referrer || "",
        device: deviceClass(),
        vw: window.innerWidth,
      });
    }

    // 2) Global click delegation. One listener for the whole site.
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || !target.closest) return;

      const path = window.location.pathname;
      const base = {
        sid: session.sid,
        ts: Date.now(),
        lang,
        path,
      };

      // Plan CTA — any element (or descendant) with data-track-plan.
      const planEl = target.closest<HTMLElement>("[data-track-plan]");
      if (planEl) {
        const plan = planEl.getAttribute("data-track-plan") || "";
        const href =
          planEl.tagName === "A" ? (planEl as HTMLAnchorElement).href : "";
        send({ t: "click_plan", ...base, plan, href });
        // Intentionally fall through — a plan CTA can ALSO be a WA link, in
        // which case we want both events for accurate WA conversion counts.
      }

      // WhatsApp link — anywhere on the page.
      const waEl = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (waEl) {
        const source =
          waEl.getAttribute("data-wa-source") ||
          (planEl ? "plan-card" : guessWaSource(waEl));
        send({
          t: "click_whatsapp",
          ...base,
          source,
          href: waEl.href,
        });
        return;
      }

      // Generic outbound link.
      const outEl = target.closest<HTMLAnchorElement>("a[href]");
      if (outEl) {
        try {
          const url = new URL(outEl.href, window.location.href);
          if (url.origin !== window.location.origin && /^https?:$/.test(url.protocol)) {
            send({
              t: "click_outbound",
              ...base,
              href: url.href,
              host: url.hostname,
            });
          }
        } catch {
          /* ignore unparsable hrefs */
        }
      }
    };

    // 3) Liveness — update lastActive on any sign of activity.
    const bump = () => {
      lastActive.current = Date.now();
    };

    // 4) Session end — fired when the tab is hidden/closed.
    const sendEnd = () => {
      if (sentEnd.current) return;
      const session = sessionRef.current;
      if (!session) return;
      const elapsed = Math.max(
        0,
        Math.floor((lastActive.current - session.startTs) / 1000),
      );
      // Skip ultra-short bounces — likely bots or pre-render.
      if (elapsed < 2) return;
      sentEnd.current = true;
      send({
        t: "session_end",
        sid: session.sid,
        ts: Date.now(),
        lang,
        path: window.location.pathname,
        seconds: elapsed,
      });
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") sendEnd();
      else {
        // Tab refocused — reset the "ended" flag so a return visit later
        // in the same session still gets counted on next hide.
        sentEnd.current = false;
        bump();
      }
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", sendEnd);
    window.addEventListener("beforeunload", sendEnd);
    ["scroll", "keydown", "mousemove", "touchstart"].forEach((ev) =>
      window.addEventListener(ev, bump, { passive: true }),
    );

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", sendEnd);
      window.removeEventListener("beforeunload", sendEnd);
      ["scroll", "keydown", "mousemove", "touchstart"].forEach((ev) =>
        window.removeEventListener(ev, bump),
      );
    };
  }, [lang]);

  return null;
}

/** Best-effort label for where on the page a WA click came from, so the
 *  dashboard can tell which surface is converting (FAB vs hero vs marquee). */
function guessWaSource(el: HTMLAnchorElement): string {
  const explicit = el.getAttribute("data-wa-source");
  if (explicit) return explicit;
  const fab = el.closest("[data-wa-fab]");
  if (fab) return "fab";
  const hero = el.closest("[data-section='hero']");
  if (hero) return "hero";
  return "other";
}
