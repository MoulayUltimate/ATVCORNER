# Architecture

High-level map of the codebase. Read this first.

## Stack

| Layer | Tech |
|---|---|
| Framework | **Next.js 16.2.6** (App Router, Server Components, Turbopack) |
| Runtime | **React 19.2.4**, Node 20+ |
| Language | **TypeScript 5** (strict mode) |
| Styling | **Tailwind CSS 4** (CSS-first `@theme`), `globals.css` |
| Fonts | Montserrat (display) + Inter (body) via `next/font` |
| i18n | Custom — three locale dictionaries, no library |
| Analytics store | Upstash Redis (REST) in prod, in-memory fallback in dev |
| Hosting | Netlify (primary), Vercel-compatible, Cloudflare Pages-compatible |
| Package manager | **pnpm** (lockfile committed) |

> ⚠️ Next.js 16 has breaking changes vs. earlier majors. `cookies()`, `params`, `searchParams`, `headers()` are all **async** — always `await` them. See [`AGENTS.md`](../AGENTS.md). When in doubt, consult `node_modules/next/dist/docs/`.

## Directory layout

```
lumixstream/
├── AGENTS.md                # Agent-facing rules (Next 16 breaking changes, SEO/GEO)
├── CLAUDE.md                # @AGENTS.md (alias)
├── README.md                # User-facing entry point
├── docs/                    # This folder — full project documentation
├── next.config.ts           # 301 redirects, image remote patterns
├── vercel.json              # Vercel deploy config (regions + security headers)
├── wrangler.toml            # Cloudflare Pages config
├── public/
│   ├── llms.txt             # Short LLM index (llmstxt.org)
│   ├── llms-full.txt        # Long-form LLM description
│   └── stitch/              # Marketing imagery (VOD posters, review screenshots)
└── src/
    ├── proxy.ts             # Middleware-equivalent: locale detection + redirect
    ├── i18n/
    │   ├── index.ts         # Locale registry, getDictionary()
    │   └── dictionaries/    # fr.json, en.json, de.json
    ├── lib/
    │   ├── site.ts          # siteConfig, whatsappUrl()
    │   ├── promo.ts         # PROMO_CODE, PROMO_PERCENT
    │   ├── admin-auth.ts    # HMAC cookie auth for /admin
    │   ├── seo-content.ts   # Per-locale SEO landing page copy
    │   └── analytics/
    │       ├── types.ts     # Event schemas + Stats type
    │       ├── store.ts     # Upstash + in-memory adapters
    │       └── aggregate.ts # Pure event→Stats reducer
    ├── data/                # Static content (plans, channels, FAQs, devices)
    ├── components/          # All UI components (Server + Client)
    └── app/
        ├── globals.css      # Tailwind directives + design tokens
        ├── icon.svg         # Favicon
        ├── robots.ts        # /robots.txt — includes AI bot allow-list
        ├── sitemap.ts       # /sitemap.xml — all locales + landing pages
        ├── [lang]/          # Locale-scoped marketing site
        │   ├── layout.tsx   # <html>, fonts, Navbar, Footer, Tracker, JSON-LD
        │   ├── page.tsx     # Home
        │   ├── pricing/
        │   ├── channels/
        │   ├── setup/
        │   ├── contact/
        │   ├── about/
        │   ├── iptv-{premium,4k,8k,sport}/  # SEO landing pages
        │   ├── m3u-playlist/
        │   ├── xtream-codes/
        │   ├── best-iptv-alternatives/
        │   ├── {privacy,terms,refund,cookies,dmca,legal-notice}/
        │   └── not-found.tsx
        ├── admin/           # Outside [lang] — its own root layout
        │   ├── layout.tsx   # Declares <html>/<body> independently
        │   ├── page.tsx     # Server gate: isAdminAuthed() or redirect
        │   ├── AdminDashboard.tsx
        │   └── login/page.tsx
        └── api/
            ├── track/route.ts             # POST event ingest (public)
            └── admin/
                ├── login/route.ts         # POST password → cookie
                ├── logout/route.ts        # POST clears cookie
                └── stats/route.ts         # GET aggregated stats (protected)
```

## Request lifecycle

```
Browser → Next.js 16
            │
            ▼
       src/proxy.ts (matches /((?!_next|api|admin|.*\..*).*))
            │
            ├─ if path = /<locale>/...           → next()
            ├─ if cookie NEXT_LOCALE set         → redirect to /<cookie>/path
            ├─ if cf-ipcountry/x-vercel-ip-country matches → redirect
            ├─ else parse Accept-Language        → redirect
            └─ else                              → redirect to /fr/path
            │
            ▼
   App Router resolves route in src/app/[lang]/...
            │
            ▼
   Server component renders → streams HTML → hydrate
```

`next.config.ts` redirects (`/home`, `/index.php`, `/downloads/*`, …) run **before** the proxy, so legacy WordPress URLs 301 to `/`, which then locale-routes.

## Two layout trees

There is **no root** `src/app/layout.tsx`. Two independent trees declare their own `<html>`/`<body>`:

| Tree | Layout | Purpose |
|---|---|---|
| `[lang]/layout.tsx` | Marketing site | Locale, fonts, Navbar, Footer, WhatsApp FAB, JSON-LD, analytics tracker, Google Ads/GA |
| `admin/layout.tsx` | Admin dashboard | Chrome-free, `robots: noindex`, no analytics (so it doesn't pollute its own data) |

This is why **`/admin` must be excluded** from the proxy matcher and skip list — otherwise it gets locale-prefixed and 404s.

## Data flow

- **Static content** (plans, channels, FAQs, devices, SEO copy) lives in `src/data/` and `src/lib/seo-content.ts`. No DB. Everything is module-level constants imported into Server Components.
- **Dictionaries** (`src/i18n/dictionaries/*.json`) are typed by inferring from `fr.json` — see [routing-i18n.md](./routing-i18n.md).
- **Analytics events** flow client → `/api/track` → store. Read path: admin → `/api/admin/stats` → `aggregate()` → JSON. See [analytics-admin.md](./analytics-admin.md).

## Where to look next

- [routing-i18n.md](./routing-i18n.md) — Locale routing, dictionary system, language switcher
- [analytics-admin.md](./analytics-admin.md) — Tracker, store, dashboard, auth
- [seo-geo.md](./seo-geo.md) — SEO/GEO conventions, AI bot rules, JSON-LD
- [components.md](./components.md) — Component catalog
- [data-models.md](./data-models.md) — Plans, FAQ, channels, event schemas
- [deployment.md](./deployment.md) — Netlify, Vercel, Cloudflare instructions
- [development.md](./development.md) — Local dev workflow, env vars, conventions
