# Routing & i18n

The site is multilingual with French as the default. All marketing routes live under `[lang]` so the URL always carries the locale.

## Locales

| Code | Label | Currency | x-default |
|---|---|---|---|
| `fr` | Français | EUR | ✅ |
| `en` | English | USD | |
| `de` | Deutsch | EUR | |

Defined in [`src/i18n/index.ts`](../src/i18n/index.ts):

```ts
export const locales: Locale[] = ["fr", "en", "de"];
export const defaultLocale: Locale = "fr";
```

## Route shape

```
/                       → 307 redirect by proxy to /<locale>
/fr                     → home (French)
/en                     → home (English)
/de                     → home (German)
/<locale>/pricing
/<locale>/channels
/<locale>/setup
/<locale>/contact
/<locale>/about
/<locale>/iptv-premium  → SEO landing
/<locale>/iptv-4k
/<locale>/iptv-8k
/<locale>/iptv-sport
/<locale>/m3u-playlist
/<locale>/xtream-codes
/<locale>/best-iptv-alternatives
/<locale>/{privacy,terms,refund,cookies,dmca,legal-notice}
```

Routes outside `[lang]`:
- `/admin/*` — analytics dashboard (own root layout, not localized)
- `/api/*` — route handlers
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`

## Proxy (locale detection)

[`src/proxy.ts`](../src/proxy.ts) acts as middleware. It runs on every request matched by:

```ts
matcher: ["/((?!_next|api|admin|.*\\..*).*)"]
```

Detection priority:

1. **Cookie** `NEXT_LOCALE` (set by the language switcher) — wins if valid.
2. **CDN country header**: `cf-ipcountry` (Cloudflare) or `x-vercel-ip-country` (Vercel) → mapped via `countryToLocale`.
3. **`Accept-Language`** header — first matching primary tag.
4. **Fallback**: `fr`.

Country → locale mapping ([proxy.ts:8–36](../src/proxy.ts)):

- `de` → DE, AT, CH, LI, LU
- `en` → US, GB, IE, CA, AU, NZ, ZA, IN, NG, KE, GH
- `fr` → FR, BE, MC, MA, DZ, TN, SN, CI (and anything unmapped)

When a path is already locale-prefixed (`/<locale>/...` or `/<locale>`), proxy returns `next()` — no redirect loop.

## Dictionary system

Server-only typed dictionaries in [`src/i18n/dictionaries/`](../src/i18n/dictionaries/):

```ts
import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";

const dictionaries = { fr, en, de } as const;
export type Dictionary = typeof fr;   // type is inferred from fr.json
```

Rules:

- **`fr.json` is the source of truth for the type.** When you add a key, add it to `fr.json` first; TypeScript then forces you to add it to `en.json` and `de.json` (or any consumer breaks at compile time).
- Dictionaries are imported in **server components only** (`"server-only"` directive at top of `index.ts`).
- For client components that need strings, pass them as props from a server parent.
- **Meta description** must come from `dict.meta.description` — not from `siteConfig.shortDesc` (French-only). See [seo-geo.md](./seo-geo.md).

Top-level dictionary keys (see [`fr.json`](../src/i18n/dictionaries/fr.json)):

```
nav, hero, sports, vod, pricing, devices, how, faq, cta, reviews,
stats, wa_fab, footer, meta, pricing_page, channels_page, setup_page,
contact_page, about_page, ...
```

## Language switcher

[`src/components/LanguageSwitcher.tsx`](../src/components/LanguageSwitcher.tsx):

1. User picks a locale from the dropdown.
2. Sets `NEXT_LOCALE=<code>` cookie (`Max-Age=1y`, `SameSite=Lax`).
3. Swaps the first path segment (`/fr/pricing` → `/de/pricing`) and `router.push()`.
4. `router.refresh()` re-runs the server tree with the new locale.

## Generating routes

Each `[lang]/<route>/page.tsx` exports:

```ts
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
```

This pre-renders one HTML per locale at build time. Combined with the proxy, requests are served as static HTML with edge locale negotiation.

## `params` is async in Next 16

```ts
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;          // ← await is mandatory
  if (!hasLocale(lang)) notFound();
  ...
}
```

Same goes for `cookies()`, `headers()`, `searchParams`.

## Adding a new locale

1. Create `src/i18n/dictionaries/<code>.json` (copy `fr.json`, translate).
2. Add the code to `locales` in `src/i18n/index.ts`.
3. Add country→locale mappings in `src/proxy.ts`.
4. Add `ogLocaleMap[<code>]` in `src/app/[lang]/layout.tsx`.
5. Add a currency mapping in `src/data/plans.ts` (`currencyByLocale`).
6. Add the locale to `alternates.languages` in every page's `generateMetadata`.
7. Update `public/llms.txt` with the locale's page URLs.
