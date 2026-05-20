# Data models

All "data" in this project is static TS modules + JSON dictionaries — no database. This file lists every shape.

## Plans

[`src/data/plans.ts`](../src/data/plans.ts).

```ts
type PlanId = "1m" | "3m" | "6m" | "12m";
type Currency = "EUR" | "USD";
type FeatureKey = keyof Dictionary["pricing"]["feature"];

type Plan = {
  id: PlanId;
  priceEur: number;
  priceUsd: number;
  features: FeatureKey[];
  highlighted?: boolean;     // "best seller" badge (12m)
  stripeLink?: string;       // empty string = WhatsApp-only checkout
  outOfStock?: boolean;      // hides CTAs, shows out-of-stock state
};
```

Current values:

| id | EUR | USD | Stripe | Notes |
|---|---|---|---|---|
| `1m` | 15 € | $16 | — | Out of stock by default |
| `3m` | 30 € | $33 | yes | |
| `6m` | 50 € | $55 | yes | |
| `12m` | 60 € | $65 | yes | `highlighted: true` — best seller |

**Stripe Payment Links** are hardcoded in `STRIPE_LINKS`. Update them when you rotate Stripe products.

Helpers:

- `currencyForLocale(lang)` — `fr`/`de` → EUR, `en` → USD
- `priceFor(plan, currency)` — pick the right price field
- `formatPrice(plan, lang)` — `"60 €"` (EUR, suffix) or `"$60"` (USD, prefix)
- `formatPerMonth(plan, lang)` — `"5 €/mois"` / `"≈ 8,30 €/Monat"` / `"$5/mo"`
- `basePerMonth(lang)` — per-month for the 1m plan, used as the anchor for strikethroughs

## Channel categories

[`src/data/channels.ts`](../src/data/channels.ts).

```ts
type ChannelCategory = {
  id: string;
  name: string;        // French; UI uses dictionary for translated labels
  icon: string;        // Material icon name (legacy — Stitch design system)
  count: number;
  highlights: string[];
};
```

Six categories: `sports`, `movies`, `series`, `intl`, `kids`, `news`.

Also exports:
- `vodHighlights` — array of `{ title, tag, category, poster }` for the home VOD marquee
- `sportsHighlights` — `{ league, country, color }` for the leagues grid
- `whatsappReviews` — `{ id, image }` for the reviews marquee. **Real screenshots from `public/stitch/reviews/`** — no fabricated quotes.

## FAQs

[`src/data/faqs.ts`](../src/data/faqs.ts) — 9 entries in `{ q, a }` shape (French strings; UI uses dictionary).

Currently the homepage uses `dict.faq.items` from dictionaries (not this file). `faqs.ts` is kept for any legacy import — verify before deleting.

## Devices

[`src/data/devices.ts`](../src/data/devices.ts).

```ts
type Device = {
  id: string;
  name: string;
  icon: string;
  steps: string[];     // ordered install steps, French
};
```

Six devices: `smart-tv`, `firestick`, `android`, `ios`, `mag`, `windows`.

## Analytics events

See [analytics-admin.md](./analytics-admin.md#event-types) for the full schema. Quick reference of the union:

```ts
type BaseEvent = {
  t: EventType;
  sid: string;     // "s_<16 hex chars>"
  ts: number;      // client ms epoch
  lang: string;    // "fr" | "en" | "de"
  path: string;    // pathname only
};

type EnrichedEvent = AnyEvent & {
  country: string;   // ISO-3166-1 alpha-2 or "??"
  serverTs: number;  // authoritative ms epoch
};
```

Stats output shape ([`src/lib/analytics/types.ts`](../src/lib/analytics/types.ts)):

```ts
type Stats = {
  range: "today" | "7d" | "30d";
  visitors: number;
  visitorsExcludingMA: number;
  pageviews: number;
  totalClicks: number;
  whatsappClicks: number;
  planClicks: { plan: string; clicks: number }[];
  avgSessionSeconds: number;
  medianSessionSeconds: number;
  topCountries: { country: string; visitors: number }[];
  topReferrers: { host: string; visitors: number }[];
  perDay: { day: string; visitors: number; whatsappClicks: number }[];
  totalEvents: number;
};
```

## siteConfig

[`src/lib/site.ts`](../src/lib/site.ts).

```ts
{
  name: "ATV Corner",
  tagline, shortDesc,          // shortDesc is French — use dict.meta.description per locale instead
  url: "https://atvcorner.com",
  locale: "fr_FR",
  defaultLanguage: "fr",
  whatsapp: {
    number: "447796630011",    // E.164 without leading +
    text: "...",               // generic prefill
    prefill: { fr, en, de },   // per-locale prefilled message
  },
  email: "support@atvcorner.com",
  social: { facebook, instagram, telegram },
  brand: { headline, valueProps },
}
```

`whatsappUrl(message?, lang?)` builds `https://wa.me/<number>?text=<encoded>`. Lang picks the locale-appropriate prefill.

## Promo

[`src/lib/promo.ts`](../src/lib/promo.ts):

```ts
export const PROMO_CODE = "ATV10";
export const PROMO_PERCENT = 10;
```

Surfaced in the PromoPopup and home hero. Change here to roll a new code.

## SEO landing copy

[`src/lib/seo-content.ts`](../src/lib/seo-content.ts). One entry per landing page per locale:

```ts
type Page =
  | "iptv-premium"
  | "iptv-8k"
  | "iptv-4k"
  | "m3u-playlist"
  | "xtream-codes"
  | "iptv-sport"
  | "best-iptv-alternatives";

type SeoContent = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;       // gradient-highlighted span
  intro: string;
  features: { h: string; p: string }[];
  sections: { h: string; p: string }[];
  faq: { q: string; a: string }[];
  cta: string;
};

getSeoContent(page, lang): SeoContent;
```

To add a landing page: extend the `Page` union, fill `content[page]` for all three locales, create `src/app/[lang]/<slug>/page.tsx` modelled on `iptv-premium/page.tsx`, add to `sitemap.ts` and `llms.txt`.
