# Development

## Prerequisites

- **Node.js** 20 or later
- **pnpm** 9+ (`corepack enable && corepack prepare pnpm@latest --activate`)
- Optional: an Upstash Redis instance for testing the persistent analytics path

## First-time setup

```bash
git clone <repo>
cd lumixstream
pnpm install
cp .env.example .env.local       # then edit values — see below
pnpm dev                         # http://localhost:3000
```

## Environment variables

| Var | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URL used by metadata, sitemap, llms.txt |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | no | Overrides `siteConfig.whatsapp.number` if set |
| `ADMIN_PASSWORD` | yes (for /admin) | Plain password compared with `timingSafeEqual` |
| `ADMIN_SESSION_SECRET` | yes (for /admin) | ≥16 chars; use `openssl rand -hex 32` |
| `UPSTASH_REDIS_REST_URL` | no | If set + token set → use Upstash; else MemoryStore |
| `UPSTASH_REDIS_REST_TOKEN` | no | Same |

`.env.local` is gitignored. `.env.example` is the template.

## Common commands

```bash
pnpm dev          # Next.js dev server with Turbopack and HMR
pnpm build        # Production build (static generation + sitemap + robots)
pnpm start        # Serve the production build locally
pnpm lint         # ESLint (next/core-web-vitals + custom rules)

# Type-check without emitting:
pnpm exec tsc --noEmit
```

## Quick verification routes

After `pnpm dev`:

```
http://localhost:3000              → redirect to /fr (or your Accept-Language)
http://localhost:3000/fr           → French home
http://localhost:3000/en           → English home
http://localhost:3000/de           → German home
http://localhost:3000/robots.txt   → includes AI bot allow-list
http://localhost:3000/sitemap.xml  → 60+ URLs across 3 locales
http://localhost:3000/admin        → redirect to /admin/login
```

## Local admin testing

1. Put a dev password in `.env.local`:
   ```
   ADMIN_PASSWORD=admin1234
   ADMIN_SESSION_SECRET=dev-only-secret-please-replace-in-production-32chars
   ```
2. Browse to `/admin/login`, sign in.
3. Without Upstash env vars, the dashboard shows the **In-memory** badge — events live only for this dev server's lifetime.

To seed test events without using the UI:

```bash
for c in "FR" "DE" "EN"; do
  curl -X POST http://localhost:3000/api/track \
    -H "Content-Type: application/json" \
    -H "x-vercel-ip-country: $c" \
    -d "{\"t\":\"pageview\",\"sid\":\"s_test_$c\",\"ts\":$(date +%s)000,\"lang\":\"fr\",\"path\":\"/fr\",\"ref\":\"https://google.com\",\"device\":\"desktop\",\"vw\":1280}"
done
```

## Conventions

### Next.js 16 async APIs

`cookies()`, `headers()`, `params`, `searchParams` are all promises:

```ts
const { lang } = await params;
const jar = await cookies();
```

The linter won't always catch missing `await` — read the [Next.js docs in `node_modules`](../node_modules/next/dist/docs/) if you hit a runtime "must be awaited" error.

### Server vs Client

- Default to **Server Components**.
- Add `"use client"` only when state, effects, browser APIs, or event handlers are required.
- Never import `@/i18n` from a client component — dictionaries are `"server-only"`. Pass strings as props.

### Dictionary changes

1. Add the key to `src/i18n/dictionaries/fr.json` first.
2. TypeScript will fail on missing keys in `en.json` and `de.json` — add them.
3. Don't add per-locale conditional strings in components when a dictionary field would do.

### Styling

- Tailwind CSS 4 with `@theme` tokens in `src/app/globals.css`.
- Reuse the shared classes: `container-luxe`, `glass-card`, `text-display`, `text-headline`, `gold-glow`, `hero-gradient`, `animate-marquee`.
- Don't hardcode hex colors that should be tokens.

### Components

- Keep new components in `src/components/` (flat, no subfolders unless count justifies it).
- Files are PascalCase, one component per file.
- Receive `lang` and `dict` as props from layout/page, don't import them.

### Analytics tagging

When you add a CTA that matters:

```tsx
<a href={stripeLink} data-track-plan="6m">Subscribe</a>
<a href={whatsappUrl(...)} data-wa-source="<surface-name>">Chat</a>
```

The tracker auto-detects outbound links; for **plans** and **WhatsApp** you need the data attributes for attribution.

### Commits

Format used in this repo:

```
<scope>: <imperative summary>

<optional body>

Co-Authored-By: ...
```

Scopes used: `seo`, `analytics`, `admin`, `feat`, `fix`, `ux`, `chore`, `docs`.

Examples:

```
seo/geo: localize meta descriptions, allow AI crawlers, add WebSite JSON-LD
feat(analytics): detect visitor country on Netlify too
fix(admin): redirect /admin/login → /admin on success
```

## Troubleshooting

### "Missing `<html>` and `<body>` tags in the root layout"

This site has **no** `src/app/layout.tsx`. The two roots are `[lang]/layout.tsx` and `admin/layout.tsx`. Any new route segment that's not under one of those two must either nest under them or declare its own root with `<html>`/`<body>`.

### `/admin` keeps getting locale-prefixed → 404

The proxy must skip `/admin`. Both checks must be in place ([proxy.ts](../src/proxy.ts)):

```ts
// 1. Skip list inside proxy():
if (pathname.startsWith("/admin")) return NextResponse.next();

// 2. Matcher must exclude it too:
matcher: ["/((?!_next|api|admin|.*\\..*).*)"]
```

### "ADMIN_SESSION_SECRET env var must be set" thrown at runtime

The secret must be set and ≥16 chars in every environment that runs admin routes — including local dev. Put one in `.env.local`.

### Country shows `"??"` in the dashboard

You're running locally without a CDN header, or the geo header for your host isn't recognized. Add a `?cc=XX` style override only for debugging; in prod the header should always be present.

### Pageview fires twice in dev

HMR / soft-nav double-fires are deduped by `(sid, path)` via sessionStorage — you should see only one. If you see two, clear sessionStorage and reload.

### Build fails on dictionary types

You added a key to `fr.json` but not to `en.json` / `de.json`. The `Dictionary` type is `typeof fr` — TS infers from FR. Keep all three in sync.

## Useful files when changing things

| I want to change | Edit |
|---|---|
| A pricing plan / amount | `src/data/plans.ts` |
| The Stripe links | `src/data/plans.ts` (`STRIPE_LINKS`) |
| The WhatsApp number | `src/lib/site.ts` |
| The promo code | `src/lib/promo.ts` |
| A label / heading | `src/i18n/dictionaries/*.json` |
| An SEO landing page | `src/lib/seo-content.ts` |
| The sitemap | `src/app/sitemap.ts` |
| Robots / AI bots | `src/app/robots.ts` |
| The JSON-LD blocks | `src/app/[lang]/layout.tsx` + `[lang]/page.tsx` |
| Locale routing rules | `src/proxy.ts` |
| Admin password / secret | env vars only — never commit |
