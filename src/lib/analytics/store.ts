// Storage adapter for analytics events.
//
// Two implementations behind one interface:
//   - Upstash Redis via REST (used in prod when env vars are set)
//   - In-memory ring buffer (used in local dev and as a graceful fallback)
//
// Why Upstash REST and not the SDK? Zero new dependencies, works in node
// and edge runtimes, and one HTTPS call per write is fine for an analytics
// firehose at this site's traffic volume.

import type { EnrichedEvent } from "./types";

// ---------- Day key helpers ----------

/** Returns the day bucket key for a given ms epoch, in UTC. */
export function dayKey(ts: number): string {
  const d = new Date(ts);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Returns the list of day bucket keys covering the last N days, oldest first. */
export function dayKeysForLastDays(days: number, now = Date.now()): string[] {
  const out: string[] = [];
  for (let i = days - 1; i >= 0; i--) {
    out.push(dayKey(now - i * 24 * 60 * 60 * 1000));
  }
  return out;
}

// ---------- Public Store interface ----------

export interface AnalyticsStore {
  push(event: EnrichedEvent): Promise<void>;
  /** Returns every event stored across the given day keys. */
  rangeByDays(days: string[]): Promise<EnrichedEvent[]>;
}

// ---------- Upstash Redis (REST) implementation ----------

// Layout in Redis:
//   key:   `atv:events:YYYY-MM-DD`
//   type:  LIST (RPUSH on write, LRANGE on read)
//   value: JSON-stringified EnrichedEvent
//
// Daily LISTs keep us O(N) per range query with no SCAN, and let us
// expire old data with a single TTL command if we ever want to prune.

class UpstashStore implements AnalyticsStore {
  constructor(
    private url: string,
    private token: string,
  ) {}

  private async cmd(args: (string | number)[]): Promise<unknown> {
    // Upstash REST: POST {URL} with body = JSON array [cmd, ...args].
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
      // No cache — analytics writes/reads must be fresh.
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(
        `Upstash ${args[0]} failed: ${res.status} ${await res.text()}`,
      );
    }
    const json = (await res.json()) as { result?: unknown; error?: string };
    if (json.error) throw new Error(`Upstash error: ${json.error}`);
    return json.result;
  }

  async push(event: EnrichedEvent): Promise<void> {
    const key = `atv:events:${dayKey(event.serverTs)}`;
    await this.cmd(["RPUSH", key, JSON.stringify(event)]);
    // 60-day rolling retention — keeps storage trivially small and dashboards relevant.
    await this.cmd(["EXPIRE", key, 60 * 24 * 60 * 60]);
  }

  async rangeByDays(days: string[]): Promise<EnrichedEvent[]> {
    if (days.length === 0) return [];
    // Pipeline all LRANGE calls in one request to amortize HTTP cost.
    const pipelineUrl = this.url.replace(/\/?$/, "") + "/pipeline";
    const body = days.map((d) => ["LRANGE", `atv:events:${d}`, 0, -1]);
    const res = await fetch(pipelineUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(
        `Upstash pipeline failed: ${res.status} ${await res.text()}`,
      );
    }
    const json = (await res.json()) as Array<{
      result?: string[];
      error?: string;
    }>;
    const events: EnrichedEvent[] = [];
    for (const entry of json) {
      if (entry.error) continue; // a missing day key isn't fatal
      for (const raw of entry.result ?? []) {
        try {
          events.push(JSON.parse(raw) as EnrichedEvent);
        } catch {
          /* skip malformed */
        }
      }
    }
    return events;
  }
}

// ---------- In-memory implementation ----------

// Survives only for the lifetime of the server process — that's fine for
// `next dev` and as a soft fallback in prod. Capped at MEM_MAX_PER_DAY
// events per day so a runaway client can't OOM the box.

const MEM_MAX_PER_DAY = 50_000;

class MemoryStore implements AnalyticsStore {
  // Stored on globalThis so HMR doesn't blow it away between edits in dev.
  private buckets: Map<string, EnrichedEvent[]>;

  constructor() {
    const g = globalThis as unknown as {
      __atvAnalyticsMem?: Map<string, EnrichedEvent[]>;
    };
    if (!g.__atvAnalyticsMem) g.__atvAnalyticsMem = new Map();
    this.buckets = g.__atvAnalyticsMem;
  }

  async push(event: EnrichedEvent): Promise<void> {
    const key = dayKey(event.serverTs);
    let list = this.buckets.get(key);
    if (!list) {
      list = [];
      this.buckets.set(key, list);
    }
    if (list.length >= MEM_MAX_PER_DAY) list.shift();
    list.push(event);
  }

  async rangeByDays(days: string[]): Promise<EnrichedEvent[]> {
    const out: EnrichedEvent[] = [];
    for (const d of days) {
      const list = this.buckets.get(d);
      if (list) out.push(...list);
    }
    return out;
  }
}

// ---------- Factory ----------

let cached: AnalyticsStore | null = null;

export function getStore(): AnalyticsStore {
  if (cached) return cached;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    cached = new UpstashStore(url, token);
  } else {
    cached = new MemoryStore();
  }
  return cached;
}

/** Pretty label for the active backend — surfaced in the admin UI so the
 *  operator can tell at a glance whether they're looking at real persisted
 *  data or a process-local memory bucket. */
export function activeBackend(): "upstash" | "memory" {
  return process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
    ? "upstash"
    : "memory";
}
