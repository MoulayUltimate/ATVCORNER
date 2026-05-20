# Analytics & Admin

Self-hosted analytics + a password-protected dashboard at `/admin`. Zero external services beyond Upstash Redis (REST). No JS tracking library, no cookie banner needed — events are first-party and anonymous.

## Event pipeline

```
Browser (AnalyticsTracker.tsx)
    │   navigator.sendBeacon(JSON event)
    ▼
POST /api/track  (public, no auth)
    │   • Validate type ∈ whitelist
    │   • Cap strings at 512 chars, body at 4 KB
    │   • Read country from cf-ipcountry / x-vercel-ip-country / x-country / x-nf-geo
    │   • Add serverTs (authoritative timestamp)
    ▼
store.push(EnrichedEvent)
    │
    ├─ UpstashStore (when UPSTASH_REDIS_REST_URL+TOKEN set)
    │     RPUSH atv:events:YYYY-MM-DD <json>
    │     EXPIRE atv:events:YYYY-MM-DD 60d
    │
    └─ MemoryStore (dev fallback, capped at 50k/day, kept on globalThis for HMR)

Response: 204 No Content
```

The client never waits for a response — `sendBeacon` is fire-and-forget. If `sendBeacon` is unavailable, `fetch(..., { keepalive: true })` is the fallback.

## Event types

Defined in [`src/lib/analytics/types.ts`](../src/lib/analytics/types.ts).

| Type | Fired when | Extra fields |
|---|---|---|
| `pageview` | Tracker mounts on a new path | `ref` (document.referrer), `device` (mobile/tablet/desktop), `vw` |
| `click_plan` | User clicks `[data-track-plan="<id>"]` | `plan`, optional `href` |
| `click_whatsapp` | User clicks any `a[href*="wa.me/"]` | `source` (fab/plan-card/hero/...), `href` |
| `click_outbound` | User clicks any external `<a>` | `href`, `host` |
| `session_end` | Tab hidden / pagehide / beforeunload | `seconds` (capped at 6h) |

All events share `BaseEvent`: `t`, `sid` (per-tab UUID prefix `s_`), `ts`, `lang`, `path`. Server-enriched events add `country` (ISO 3166-1 alpha-2, `"??"` if unknown) and `serverTs`.

## Client tracker

[`src/components/AnalyticsTracker.tsx`](../src/components/AnalyticsTracker.tsx). Mounted once in `src/app/[lang]/layout.tsx`. Responsibilities:

- **Session id**: minted with `crypto.randomUUID()`, stored in `sessionStorage` (`atv_sid`).
- **Pageview dedup**: one pageview per `(sid, path)` to silence HMR/soft-nav double-fires in dev.
- **Click delegation**: one capture-phase listener on `document`. A plan-CTA can also be a WA link — both events fire (this is intentional, for accurate WA conversion counts).
- **Liveness**: bumps a `lastActive` timestamp on scroll/keydown/mousemove/touchstart.
- **Session end**: posted on `visibilitychange=hidden`, `pagehide`, `beforeunload`. Ultra-short bounces (< 2s) are dropped — usually bots or pre-renders.

### Tagging conventions

For `click_plan` to attribute a click:

```tsx
<a href={stripeLink} data-track-plan="12m">Subscribe 12 months</a>
```

For `click_whatsapp` to know which surface converted:

```tsx
<a href={whatsappUrl(...)} data-wa-source="fab">          {/* FAB */}
<a href={whatsappUrl(...)} data-wa-source="plan-card">    {/* pricing cards */}
<a href={whatsappUrl(...)} data-wa-source="hero">         {/* hero section */}
```

`guessWaSource()` provides defaults but explicit `data-wa-source` is preferred.

## Storage

[`src/lib/analytics/store.ts`](../src/lib/analytics/store.ts).

**Upstash Redis layout**:

```
key:   atv:events:YYYY-MM-DD     (UTC day buckets)
type:  LIST  (RPUSH on write, LRANGE on read)
value: JSON-stringified EnrichedEvent
TTL:   60 days
```

Why daily LISTs:

- O(N) range queries with no `SCAN`.
- TTL per day means storage caps automatically.
- Range queries pipeline `LRANGE` calls for cheap reads.

Why REST and not the SDK:

- Zero new dependencies.
- Works in node + edge runtimes uniformly.
- One HTTPS call per write is fine at this site's traffic.

**MemoryStore** is keyed on `globalThis.__atvAnalyticsMem` so HMR doesn't blow it away in dev. Capped at 50,000 events/day, oldest evicted first.

`activeBackend()` returns `"upstash"` or `"memory"` — surfaced in the dashboard so the operator knows what they're looking at.

## Aggregation

[`src/lib/analytics/aggregate.ts`](../src/lib/analytics/aggregate.ts) is a **pure function** that turns an event stream into a `Stats` payload. No Next imports, no fetch — trivially unit-testable.

Output ([`Stats` type](../src/lib/analytics/types.ts)):

```ts
{
  range: "today" | "7d" | "30d",
  visitors,                  // unique sids that produced ≥1 pageview
  visitorsExcludingMA,       // ↑ minus visitors with country=MA (operator filters home traffic)
  pageviews,
  totalClicks,
  whatsappClicks,
  planClicks: [{ plan, clicks }],
  avgSessionSeconds,
  medianSessionSeconds,
  topCountries: [{ country, visitors }],
  topReferrers: [{ host, visitors }],
  perDay: [{ day, visitors, whatsappClicks }],
  totalEvents,               // sanity check
}
```

Attribution rules:

- **Country/referrer** is taken from the **first pageview** of each session (later page loads don't override).
- **Session duration** is capped at 1h per session to keep avgs robust to idle tabs.
- **MA exclusion** is a hard-coded filter for the operator's own country — adjust the constant in `aggregate.ts` if needed.

## Admin auth

[`src/lib/admin-auth.ts`](../src/lib/admin-auth.ts). HMAC-signed cookie, single admin.

Flow:

```
POST /api/admin/login { password }
    │   • timing-safe compare with ADMIN_PASSWORD
    │   • ~300ms artificial delay (timing-oracle defense)
    │   • signToken({ exp: now + 7d }) → HMAC-SHA256(ADMIN_SESSION_SECRET)
    │   • Set-Cookie atv_admin=<payload>.<sig>  HttpOnly Secure SameSite=Lax  Max-Age=7d
    ▼
Subsequent requests
    │   isAdminAuthed() → cookies().get("atv_admin") → verifyToken()
    │   • Constant-time signature check
    │   • exp > now check
    ▼
/admin/* and GET /api/admin/stats
```

No JWT library, no DB session table. Web Crypto (`crypto.subtle.importKey` + `sign`) does the work.

### Cookie

| Field | Value |
|---|---|
| Name | `atv_admin` |
| Format | `b64url(JSON({ exp }))` + `.` + `b64url(HMAC-SHA256(payload, secret))` |
| HttpOnly | yes |
| Secure | yes in production |
| SameSite | `lax` |
| Max-Age | 7 days |

### Env vars required

```
ADMIN_PASSWORD=<≥4 chars>
ADMIN_SESSION_SECRET=<≥16 random chars; openssl rand -hex 32>
```

If `ADMIN_SESSION_SECRET` is missing or too short, the lib throws on first use — fail loud rather than accept forgeable cookies.

## Dashboard

[`src/app/admin/AdminDashboard.tsx`](../src/app/admin/AdminDashboard.tsx) (~326 lines). Client component.

| Block | Source |
|---|---|
| KPI cards: Visitors, Pageviews, WhatsApp clicks, Avg time | `stats.visitors{,ExcludingMA}`, `pageviews`, `whatsappClicks`, `avgSessionSeconds` |
| Plan clicks | `stats.planClicks` |
| Top countries | `stats.topCountries` |
| Traffic sources | `stats.topReferrers` |
| Per-day | `stats.perDay` |
| Backend badge | `activeBackend()` — emerald "Persistent" / amber "In-memory" |
| Range switch | today / 7d / 30d → `?range=...` on `/api/admin/stats` |

### Routes

| Path | Method | Auth | Purpose |
|---|---|---|---|
| `/admin` | GET | cookie | Server gate, redirects to `/admin/login` if unauthed |
| `/admin/login` | GET | none | Single-input password form |
| `/api/admin/login` | POST | none | Verifies password, sets cookie |
| `/api/admin/logout` | POST | cookie | Clears cookie |
| `/api/admin/stats` | GET | cookie | Returns `{ ok, backend, stats }` |

## Adding a new event type

1. Add the type to the `EventType` union in `src/lib/analytics/types.ts`.
2. Add a discriminated variant (with extra fields) to `AnyEvent`.
3. Add it to `ALLOWED_TYPES` in `src/app/api/track/route.ts` and extend the `switch` in `buildEvent()`.
4. Emit it from the client (`AnalyticsTracker.tsx` or via a direct `send()` call).
5. Surface it in `aggregate()` and add a panel in `AdminDashboard.tsx`.
