// Pure functions that turn a flat event stream into the dashboard payload.
// Kept separate from the store so they're trivially unit-testable and
// runtime-agnostic (no Next imports, no fetch).

import type {
  CountryBucket,
  EnrichedEvent,
  PlanBucket,
  RefererBucket,
  Range,
  Stats,
} from "./types";
import { dayKey, dayKeysForLastDays } from "./store";

/** Map a range token to the number of UTC days it covers. */
export function daysForRange(range: Range): number {
  if (range === "today") return 1;
  if (range === "7d") return 7;
  return 30;
}

/** Day keys for the given range, oldest first. */
export function rangeDays(range: Range, now = Date.now()): string[] {
  return dayKeysForLastDays(daysForRange(range), now);
}

function topN<T extends { visitors?: number; clicks?: number }>(
  arr: T[],
  n: number,
  key: "visitors" | "clicks",
): T[] {
  return arr
    .slice()
    .sort((a, b) => (b[key] ?? 0) - (a[key] ?? 0))
    .slice(0, n);
}

function median(nums: number[]): number {
  if (nums.length === 0) return 0;
  const sorted = nums.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
    : sorted[mid];
}

export function aggregate(events: EnrichedEvent[], range: Range): Stats {
  const visitorsBySession = new Map<string, EnrichedEvent>();
  const visitorsByCountry = new Map<string, Set<string>>();
  const visitorsByRef = new Map<string, Set<string>>();
  const sessionDurations: number[] = [];
  const planClicks = new Map<string, number>();
  const perDayVisitors = new Map<string, Set<string>>();
  const perDayWa = new Map<string, number>();

  let pageviews = 0;
  let totalClicks = 0;
  let whatsappClicks = 0;

  for (const ev of events) {
    const d = dayKey(ev.serverTs);

    if (ev.t === "pageview") {
      pageviews += 1;
      // First pageview per session wins for country/referrer attribution.
      if (!visitorsBySession.has(ev.sid)) {
        visitorsBySession.set(ev.sid, ev);

        const cset =
          visitorsByCountry.get(ev.country) ??
          visitorsByCountry.set(ev.country, new Set()).get(ev.country)!;
        cset.add(ev.sid);

        const host = refererHost(ev.ref);
        const rset =
          visitorsByRef.get(host) ??
          visitorsByRef.set(host, new Set()).get(host)!;
        rset.add(ev.sid);

        const dset =
          perDayVisitors.get(d) ??
          perDayVisitors.set(d, new Set()).get(d)!;
        dset.add(ev.sid);
      }
    } else if (ev.t === "click_plan") {
      totalClicks += 1;
      planClicks.set(ev.plan, (planClicks.get(ev.plan) ?? 0) + 1);
    } else if (ev.t === "click_whatsapp") {
      totalClicks += 1;
      whatsappClicks += 1;
      perDayWa.set(d, (perDayWa.get(d) ?? 0) + 1);
    } else if (ev.t === "click_outbound") {
      totalClicks += 1;
    } else if (ev.t === "session_end") {
      // Cap absurd durations (idle tabs left open for hours) so the avg
      // doesn't get yanked by outliers.
      const capped = Math.min(Math.max(0, ev.seconds), 60 * 60);
      if (capped > 0) sessionDurations.push(capped);
    }
  }

  const visitors = visitorsBySession.size;
  const visitorsExcludingMA = visitors - (visitorsByCountry.get("MA")?.size ?? 0);

  const topCountries: CountryBucket[] = topN(
    [...visitorsByCountry.entries()].map(([country, set]) => ({
      country: country || "??",
      visitors: set.size,
    })),
    20,
    "visitors",
  );

  const topReferrers: RefererBucket[] = topN(
    [...visitorsByRef.entries()].map(([host, set]) => ({
      host,
      visitors: set.size,
    })),
    15,
    "visitors",
  );

  const planBuckets: PlanBucket[] = [...planClicks.entries()]
    .map(([plan, clicks]) => ({ plan, clicks }))
    .sort((a, b) => b.clicks - a.clicks);

  const avgSessionSeconds =
    sessionDurations.length === 0
      ? 0
      : Math.round(
          sessionDurations.reduce((s, n) => s + n, 0) / sessionDurations.length,
        );

  const allDays = rangeDays(range);
  const perDay = allDays.map((day) => ({
    day,
    visitors: perDayVisitors.get(day)?.size ?? 0,
    whatsappClicks: perDayWa.get(day) ?? 0,
  }));

  return {
    range,
    visitors,
    visitorsExcludingMA,
    pageviews,
    totalClicks,
    whatsappClicks,
    planClicks: planBuckets,
    avgSessionSeconds,
    medianSessionSeconds: median(sessionDurations),
    topCountries,
    topReferrers,
    perDay,
    totalEvents: events.length,
  };
}

/** Normalize a referrer URL into a bare host. "" → "direct". */
function refererHost(ref: string): string {
  if (!ref) return "direct";
  try {
    const u = new URL(ref);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return "direct";
  }
}
