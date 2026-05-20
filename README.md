# ATV Corner

Premium IPTV marketing site at **[atvcorner.com](https://atvcorner.com)** — Next.js 16, React 19, Tailwind CSS 4, deployed on Netlify (Vercel + Cloudflare compatible).

> **Working on this project? Read [`docs/`](./docs/README.md) first.**
> The full architecture, schemas, conventions, and operational runbooks live there — no need to re-explore the codebase.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, Server Components, Turbopack) |
| UI | React 19, Tailwind CSS 4 (CSS-first `@theme` tokens) |
| Language | TypeScript 5 (strict) |
| Fonts | Montserrat (display) + Inter (body) via `next/font` |
| i18n | Custom — `fr` (primary), `en`, `de`. No external lib. |
| Analytics | First-party (`/api/track` → Upstash Redis or in-memory) |
| Admin auth | HMAC-SHA256 cookie via Web Crypto |
| SEO/GEO | Per-locale meta + JSON-LD (Organization / WebSite / FAQPage / Product) + `llms.txt` + AI bot allow-list |
| Host | Netlify primary; `vercel.json` + `wrangler.toml` for alternatives |

## Quick start

```bash
pnpm install
cp .env.example .env.local      # edit values — see docs/development.md
pnpm dev                        # http://localhost:3000
```

Common commands:

```bash
pnpm build         # production build
pnpm start         # serve production
pnpm lint          # ESLint
pnpm exec tsc --noEmit
```

## Documentation

| Doc | What's in it |
|---|---|
| [docs/architecture.md](./docs/architecture.md) | Stack, directory tree, request lifecycle, two-tree layout |
| [docs/routing-i18n.md](./docs/routing-i18n.md) | Locales, `proxy.ts` detection, dictionary rules |
| [docs/data-models.md](./docs/data-models.md) | TypeScript shapes for plans, channels, events, siteConfig… |
| [docs/components.md](./docs/components.md) | Component catalog (Server vs Client) |
| [docs/analytics-admin.md](./docs/analytics-admin.md) | Event pipeline, Redis schema, admin dashboard |
| [docs/seo-geo.md](./docs/seo-geo.md) | Metadata, sitemap, robots, JSON-LD, llms.txt |
| [docs/deployment.md](./docs/deployment.md) | Netlify, Vercel, Cloudflare, env vars, ops |
| [docs/development.md](./docs/development.md) | Local setup, conventions, troubleshooting |

## Repository layout (top-level)

```
.
├── src/
│   ├── app/                # Next.js App Router (routes)
│   ├── components/         # All UI components
│   ├── data/               # Static data: plans, channels, devices, faqs
│   ├── i18n/dictionaries/  # fr.json (source of truth), en.json, de.json
│   ├── lib/                # site config, analytics, admin auth, SEO copy, promo
│   └── proxy.ts            # Locale routing middleware
├── public/                 # llms.txt, llms-full.txt, images, fonts
├── docs/                   # Project documentation (this is what you want)
├── AGENTS.md / CLAUDE.md   # Guidance for AI agents (Claude Code, Codex)
├── next.config.ts          # Legacy URL 301s + Next.js config
├── vercel.json             # Vercel config (regions + security headers)
├── wrangler.toml           # Cloudflare Pages config
└── package.json            # pnpm-managed
```

## For AI agents

`AGENTS.md` (also loaded by Claude Code as `CLAUDE.md`) covers the critical "this is not the Next.js you know" warning and SEO/GEO conventions. Beyond that, read `docs/README.md` and follow its order.

**Three rules you must not violate:**

1. **No root `src/app/layout.tsx`** — the two roots are `[lang]/layout.tsx` and `admin/layout.tsx`.
2. **Dictionaries are `server-only`** — never import `@/i18n` from a client component. Pass strings as props.
3. **Async APIs** — `params`, `cookies()`, `headers()`, `searchParams` are promises. `await` them.

## License

Proprietary — all rights reserved.
