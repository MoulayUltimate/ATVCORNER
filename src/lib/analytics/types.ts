// Analytics event schemas — what the client sends and what we persist.
// Keep these JSON-serializable; everything goes through `JSON.stringify`
// before hitting the store.

export type EventType =
  | "pageview"
  | "click_plan"
  | "click_whatsapp"
  | "click_outbound"
  | "session_end";

export type BaseEvent = {
  t: EventType;
  /** Stable per-tab session id minted on the client. */
  sid: string;
  /** ms epoch when the client emitted the event. */
  ts: number;
  /** Active locale at event time: "fr" | "en" | "de" | string. */
  lang: string;
  /** Current pathname (no query/hash). */
  path: string;
};

export type PageviewEvent = BaseEvent & {
  t: "pageview";
  /** document.referrer at first paint, "" if none/direct. */
  ref: string;
  /** Best-guess device class from UA / viewport. */
  device: "mobile" | "tablet" | "desktop";
  /** Viewport width in CSS px. */
  vw: number;
};

export type ClickPlanEvent = BaseEvent & {
  t: "click_plan";
  /** Plan id, e.g. "1m" | "3m" | "6m" | "12m". */
  plan: string;
  /** Optional destination URL (Stripe / WA). */
  href?: string;
};

export type ClickWhatsAppEvent = BaseEvent & {
  t: "click_whatsapp";
  /** Where on the page the WA click happened (fab, hero, plan-card, etc.). */
  source: string;
  href?: string;
};

export type ClickOutboundEvent = BaseEvent & {
  t: "click_outbound";
  href: string;
  /** Hostname of href, denormalized for cheap aggregations. */
  host: string;
};

export type SessionEndEvent = BaseEvent & {
  t: "session_end";
  /** Seconds the user spent on the site this session. */
  seconds: number;
};

export type AnyEvent =
  | PageviewEvent
  | ClickPlanEvent
  | ClickWhatsAppEvent
  | ClickOutboundEvent
  | SessionEndEvent;

/** Server enriches client events with these before persisting. */
export type EnrichedEvent = AnyEvent & {
  /** ISO 3166-1 alpha-2 from Vercel / CF headers. "??" when unknown. */
  country: string;
  /** Server timestamp — authoritative. */
  serverTs: number;
};

export type Range = "today" | "7d" | "30d";

export type CountryBucket = { country: string; visitors: number };
export type RefererBucket = { host: string; visitors: number };
export type PlanBucket = { plan: string; clicks: number };

export type Stats = {
  range: Range;
  visitors: number;
  visitorsExcludingMA: number;
  pageviews: number;
  totalClicks: number;
  whatsappClicks: number;
  planClicks: PlanBucket[];
  avgSessionSeconds: number;
  medianSessionSeconds: number;
  topCountries: CountryBucket[];
  topReferrers: RefererBucket[];
  perDay: { day: string; visitors: number; whatsappClicks: number }[];
  /** Total events stored — useful for sanity-checking. */
  totalEvents: number;
};
