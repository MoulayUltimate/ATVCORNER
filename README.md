# LumixStream — Premium IPTV (Next.js 16)

Modern rebuild of [lumixstream.com](https://lumixstream.com) on Next.js 16 + Tailwind CSS 4, replacing the previous WordPress installation. Deploy-ready for **Vercel** or **Cloudflare Pages**.

## Stack

- **Framework:** Next.js 16 (App Router, Server Components, Turbopack)
- **Styling:** Tailwind CSS 4 (CSS-first `@theme` design tokens)
- **Fonts:** Montserrat (display) + Inter (body) via `next/font`
- **SEO:** built-in `sitemap.ts`, `robots.ts`, OpenGraph metadata, JSON-LD (Organization / Product / FAQPage)
- **Language:** French (primary), English (secondary)

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve production
```

## Project structure

```
src/
├── app/                    # Next.js routes
│   ├── layout.tsx          # Root layout — Nav, Footer, WhatsApp FAB, JSON-LD
│   ├── page.tsx            # Home — hero, categories, sports, VOD, pricing, FAQ
│   ├── pricing/            # 4 subscription tiers + comparison
│   ├── channels/           # Channel categories + sports + VOD highlights
│   ├── setup/              # Install guides for 6 platforms
│   ├── contact/            # WhatsApp + email + Telegram
│   ├── privacy / terms / refund / not-found
│   ├── sitemap.ts          # /sitemap.xml
│   └── robots.ts           # /robots.txt
├── components/             # Navbar, Footer, WhatsAppFab, PricingGrid, etc.
├── data/                   # plans, channels, faqs, devices (single source of truth)
└── lib/site.ts             # siteConfig + WhatsApp helper
```

## Configuration

Update `src/lib/site.ts` with:
- Your **WhatsApp number** (E.164 without leading `+`) — currently a placeholder
- Your **domain** (currently `https://lumixstream.com`)
- Your **email** and social links

## Deploy

### Vercel (recommended)

```bash
vercel --prod
```

Configuration is in `vercel.json`. Sets EU (`cdg1`) + US (`iad1`) regions and security headers.

### Cloudflare Pages

```bash
pnpm add -D @cloudflare/next-on-pages
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static
```

Or connect the GitHub repo in the Cloudflare dashboard. Configuration is in `wrangler.toml`.

## SEO checklist

- [x] Per-page `<title>` + `<meta description>`
- [x] OpenGraph + Twitter cards in root layout
- [x] JSON-LD: Organization, Product, FAQPage
- [x] `sitemap.xml` + `robots.txt` auto-generated
- [x] Canonical URLs
- [x] French language declared (`lang="fr"`, `locale: "fr_FR"`)
- [x] Mobile-first, semantic HTML, accessible labels

## Migrating content from the WordPress (WPVivid) backup

The WPVivid backup zips contain:
- `*.sql` — full WP database (posts, products, users)
- `wp-content/uploads/` — media files

To extract product data from the SQL dump:

```bash
unzip lumixstream.com_wpvivid-*.part001.zip -d wp-backup
unzip lumixstream.com_wpvivid-*.part002.zip -d wp-backup
# Then import into a local MySQL to query wp_posts / wp_postmeta
# or use mysqldump-to-json to convert
```

The current `src/data/*` files mirror the production pricing and channel structure from the live site — adjust if your backup contains different data.

## What's *not* WordPress anymore

- No PHP runtime
- No MySQL
- No plugin attack surface
- Pure static generation → ~100 Lighthouse score
- Edge-deployable → < 50ms TTFB worldwide
- Versionable in git, AI-augmentable content pipeline ready
