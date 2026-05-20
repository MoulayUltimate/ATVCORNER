# ATV Corner — Project Documentation

This folder is the **single source of truth** for the codebase. It is written so that any new developer (or AI agent: Claude Code, Codex, Cursor, etc.) can become productive without re-exploring every file.

Read in this order for a complete mental model:

1. **[architecture.md](./architecture.md)** — Stack, directory tree, request lifecycle, two-tree layout.
2. **[routing-i18n.md](./routing-i18n.md)** — Locale routing (`fr` / `en` / `de`), `proxy.ts` detection priority, dictionary rules.
3. **[data-models.md](./data-models.md)** — Every TypeScript shape: plans, channels, devices, events, siteConfig, SEO content.
4. **[components.md](./components.md)** — Component catalog with Server vs Client classification.
5. **[analytics-admin.md](./analytics-admin.md)** — Event pipeline, Upstash/MemoryStore schema, admin auth, dashboard.
6. **[seo-geo.md](./seo-geo.md)** — Metadata, sitemap, robots, JSON-LD, llms.txt — for both Google and LLM crawlers.
7. **[deployment.md](./deployment.md)** — Netlify (prod), Vercel/Cloudflare alternatives, env vars, geo headers.
8. **[development.md](./development.md)** — Local setup, conventions, troubleshooting, "useful files when changing X" table.

## TL;DR for an AI agent dropped into this repo

- **Framework**: Next.js 16 App Router + React 19 + TypeScript 5 strict + Tailwind CSS 4. Read `node_modules/next/dist/docs/` before writing Next.js code — APIs have breaking changes.
- **Two roots**: there is **no** `src/app/layout.tsx`. The roots are `[lang]/layout.tsx` (marketing) and `admin/layout.tsx` (admin). Any new top-level segment must nest under one of those or declare its own `<html>`/`<body>`.
- **Async APIs**: `params`, `cookies()`, `headers()`, `searchParams` are all promises. `await` them.
- **i18n**: dictionaries at `src/i18n/dictionaries/{fr,en,de}.json`. `Dictionary` type = `typeof fr`. Add new keys to `fr.json` first; TS will fail on the others.
- **Locale routing**: `src/proxy.ts` is the middleware (re-exports from `middleware.ts`). Detection order: `NEXT_LOCALE` cookie → CDN country header → `Accept-Language` → `fr`.
- **Server-first**: default to Server Components. `"use client"` only when state/effects/events/browser APIs are needed. **Never** import `@/i18n` from a client component — dictionaries are `"server-only"`.
- **Analytics**: first-party, beacon → `/api/track` → Upstash Redis (REST) or in-memory store. Tracker is `src/components/AnalyticsTracker.tsx`.
- **Admin**: HMAC-SHA256 cookie via Web Crypto (no JWT lib). Routes under `/admin`. Excluded from locale routing.
- **Host**: production on Netlify at `https://atvcorner.com`. Code is host-portable — only `src/app/api/track/route.ts` reads host-specific geo headers.

## Doing things — fastest lookups

| I want to… | Read |
|---|---|
| Change a price or plan | [data-models.md § Plans](./data-models.md#plans) |
| Add a new locale | [routing-i18n.md § Adding a new locale](./routing-i18n.md#adding-a-new-locale) |
| Add a new page | [seo-geo.md § Checklist when adding a new page](./seo-geo.md#checklist-when-adding-a-new-page) |
| Add a new component | [components.md § Adding a new component](./components.md#adding-a-new-component) |
| Track a new CTA | [analytics-admin.md § Adding tracked elements](./analytics-admin.md) and [development.md § Analytics tagging](./development.md#analytics-tagging) |
| Rotate admin password | [deployment.md § Rotate admin password](./deployment.md#rotate-admin-password) |
| Debug "country shows ??" | [development.md § Troubleshooting](./development.md#troubleshooting) |
| Run an SEO audit | [seo-geo.md § Verifying SEO/GEO health](./seo-geo.md#verifying-seogeo-health) |

## What is intentionally *not* documented here

- **Git history** — use `git log` / `git blame`.
- **Generated files** — `.next/`, `node_modules/`, build artifacts.
- **One-off bug fixes** — captured in commit messages, not docs.

## Keeping these docs honest

When you change code, update the affected doc in the same PR. Stale docs are worse than no docs — they teach the wrong mental model. If you add a doc, link it from this index.
