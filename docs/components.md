# Components

Catalog of every component in [`src/components/`](../src/components/). Indicates whether each is a Server Component (default) or marked `"use client"`.

## Layout / chrome

| Component | Type | Purpose |
|---|---|---|
| `Navbar.tsx` | client | Sticky top navigation, mobile drawer, scroll-to-solid transition. Receives `lang` + `dict`. |
| `Footer.tsx` | server | 4-column grid with logo, tagline, nav links, legal links, contact. Reads `siteConfig`. |
| `Logo.tsx` | server | Brand wordmark, sizes `sm`/`md`/`lg`. Optional `href` makes it a Link. |
| `LanguageSwitcher.tsx` | client | Dropdown that sets `NEXT_LOCALE` cookie and swaps the locale segment in the URL. |
| `WhatsAppFab.tsx` | server | Floating action button bottom-right. `data-wa-source="fab"` for analytics. |
| `PromoPopup.tsx` | client | Triggers after scroll > 300px AND ≥10s. One-shot per session (sessionStorage). |
| `SalesNotification.tsx` | client | Slim social-proof pill bottom-left. **Currently mounted only on `de`.** Capped at 3/session. |

## Home page sections

| Component | Type | Purpose |
|---|---|---|
| `HeroMockup.tsx` | server | TV mockup illustration for the hero column. |
| `SectionHeading.tsx` | server | Standardized eyebrow + H2 + description block used on every section. |
| `LeagueCard.tsx` | server | Sports league tile with country flag. |
| `LeagueLogos.tsx` | server | SVG league emblems (Premier League, La Liga, etc.). |
| `BroadcasterLogos.tsx` | server | Broadcaster wordmarks (Sky, DAZN, beIN, Canal+, …) in a flex strip. |
| `WhatsAppMarquee.tsx` | client | Auto-scrolling marquee of WhatsApp review screenshots. |
| `DeviceBrandIcon.tsx` | server | Switches on `kind` ("Samsung", "Fire TV", …) to render the right glyph. |

## Pricing

| Component | Type | Purpose |
|---|---|---|
| `PricingGrid.tsx` | client | 4-card grid with currency-aware prices, per-month line, Stripe + WhatsApp CTAs. Adds `data-track-plan` for analytics. |
| `CheckIcon.tsx` | server | Consistent green check used in feature lists. |
| `FaqAccordion.tsx` | client | Accessible disclosure list. Drives the FAQ section. |

## SEO landing pages

| Component | Type | Purpose |
|---|---|---|
| `SeoLandingPage.tsx` | server | Generic landing template — hero, features grid, sections, FAQ, CTA + FAQPage JSON-LD. Consumed by `[lang]/iptv-*` etc. |

## Analytics

| Component | Type | Purpose |
|---|---|---|
| `AnalyticsTracker.tsx` | client | Pageview + click + session_end emitter. See [analytics-admin.md](./analytics-admin.md). |

## Admin

| File | Type | Purpose |
|---|---|---|
| `src/app/admin/AdminDashboard.tsx` | client | KPI cards, plan/country/referrer/per-day tables, range switcher, backend badge. |
| `src/app/admin/login/page.tsx` | client | Single-input password form. |

## Server vs Client decision matrix

Default to **Server Component**. Add `"use client"` only when you need:

- React state / effects (`useState`, `useEffect`, `useRef`)
- Browser-only APIs (`window`, `document`, `sessionStorage`, `crypto.randomUUID`)
- Event handlers (`onClick`, `onChange`)
- `usePathname`, `useRouter`, `useSearchParams`

Passing props from a server parent to a client child is fine — pass the localized strings as plain props, never import dictionaries from client code.

## Styling primitives

Tailwind CSS 4 with CSS-first `@theme` tokens (defined in [`src/app/globals.css`](../src/app/globals.css)). Conventions used across components:

- **Container**: `container-luxe` (max-width + horizontal padding)
- **Card**: `glass-card` (translucent border + glassmorphism)
- **Typography**: `text-display` (Montserrat heavy), `text-headline` (Montserrat semibold), body inherits Inter
- **Accent color**: `text-emerald-400` for the CTA gold-green
- **Background**: `bg-[#0c0e12]` (deep navy) with radial accent gradients

Custom utilities visible in components:
- `gold-glow` — emerald box-shadow halo on CTAs
- `hero-gradient` — radial gradient backdrop used on landing pages
- `animate-marquee` — infinite horizontal scroll for VOD/review strips

## Adding a new component

1. Drop it in `src/components/`.
2. Server by default. Add `"use client"` only if necessary.
3. Receive `lang` + `dict` props from the layout/page rather than importing dictionaries directly.
4. For interactive elements that should be tracked, add `data-track-plan="..."`, `data-wa-source="..."`, or rely on the outbound-link auto-tracker.
5. Match the Tailwind tokens above; avoid hardcoding hex colors.
