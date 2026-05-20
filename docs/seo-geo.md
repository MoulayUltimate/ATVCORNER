# SEO & GEO

This site is engineered for both classic search (Google/Bing) and generative answer engines (ChatGPT, Perplexity, Claude, Gemini). GEO = "Generative Engine Optimization" — getting cited by LLM-powered search rather than just ranking on Google.

## Meta tags

Per-page metadata is generated in each route's `generateMetadata()`. The root marketing layout at [`src/app/[lang]/layout.tsx`](../src/app/[lang]/layout.tsx) sets:

- `title.default` / `title.template` — `"%s | ATV Corner"`
- `description` — **from `dict.meta.description`**, NOT from `siteConfig.shortDesc` (which is French-only and was the source of a real bug).
- `alternates.canonical` — `/<lang>` for the current locale
- `alternates.languages` — `fr-FR`, `en-US`, `de-DE`, `x-default: /fr`
- `openGraph` + `twitter` — derived from the same dictionary fields
- `robots: { index: true, follow: true, "max-image-preview": "large" }`

**Admin section** ([`src/app/admin/layout.tsx`](../src/app/admin/layout.tsx)) has `robots: { index: false, follow: false, nocache: true }` to keep it out of search engines entirely.

## Sitemap

[`src/app/sitemap.ts`](../src/app/sitemap.ts) generates `/sitemap.xml` automatically. For every locale × route combination it emits:

```xml
<url>
  <loc>https://atvcorner.com/<lang>/<path></loc>
  <lastmod>...</lastmod>
  <changefreq>...</changefreq>
  <priority>...</priority>
  <xhtml:link rel="alternate" hreflang="fr" href=".../fr/..." />
  <xhtml:link rel="alternate" hreflang="en" href=".../en/..." />
  <xhtml:link rel="alternate" hreflang="de" href=".../de/..." />
</url>
```

Pages currently included:

- Home, pricing, channels, setup, contact, about (`priority` 0.5–1.0)
- SEO landing pages: `iptv-premium`, `iptv-4k`, `iptv-8k`, `iptv-sport`, `m3u-playlist`, `xtream-codes`, `best-iptv-alternatives`
- Legal: `privacy`, `terms`, `refund`, `legal-notice`, `cookies`, `dmca`

Add a new route to the `paths` array in `sitemap.ts` to include it.

## robots.txt

[`src/app/robots.ts`](../src/app/robots.ts) generates `/robots.txt`. Two rule groups:

1. `User-Agent: *` → `Allow: /`, `Disallow: /api/ /admin/ /_next/`
2. **Explicit allow for 15 AI crawlers**:

   `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `Claude-Web`, `anthropic-ai`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Bytespider`, `Amazonbot`, `Meta-ExternalAgent`.

Why explicit allows? Some AI crawlers default to a conservative crawl if not named — listing them removes ambiguity. **Keep this list when adding new `Disallow` rules.**

## JSON-LD (structured data)

Four JSON-LD blocks ship on every locale home page:

| `@type` | Source | Purpose |
|---|---|---|
| `Organization` | `[lang]/layout.tsx` | Brand identity, contact, sameAs, multilingual support |
| `WebSite` | `[lang]/layout.tsx` | Localized site identity (`inLanguage: fr-FR`/`en-US`/`de-DE`) for AI disambiguation |
| `FAQPage` | `[lang]/page.tsx` | Each FAQ entry as Question/Answer |
| `Product` | `[lang]/page.tsx` | Offers per plan (1m/3m/6m/12m) with `aggregateRating` |

SEO landing pages add their own `FAQPage` from `seo-content.ts`.

**Rule of thumb**: when you add a new entity type to the site (Article, Service, BreadcrumbList…), add a JSON-LD block alongside it rather than relying on meta tags alone. LLMs lean heavily on structured data.

## LLM index (llms.txt)

`public/llms.txt` and `public/llms-full.txt` follow the [llmstxt.org](https://llmstxt.org/) convention:

- **`llms.txt`** — Concise table of contents. Title, short summary, sectioned link list. Currently lists every public page across all three locales.
- **`llms-full.txt`** — Long-form business description for context-hungry agents.

Update both when adding/removing pages.

## SEO landing pages

Seven keyword-targeted pages live under `[lang]/iptv-*/`, `[lang]/m3u-playlist/`, `[lang]/xtream-codes/`, `[lang]/best-iptv-alternatives/`. They share a single component, [`src/components/SeoLandingPage.tsx`](../src/components/SeoLandingPage.tsx), which pulls content from [`src/lib/seo-content.ts`](../src/lib/seo-content.ts).

Content shape per page per locale:

```ts
{
  metaTitle, metaDesc,
  eyebrow, h1, h1Accent, intro,
  features: [{ h, p }],
  sections: [{ h, p }],
  faq:      [{ q, a }],
  cta,
}
```

Each page emits its own `FAQPage` JSON-LD from the `faq` array.

## Verifying SEO/GEO health

The [`seo-geo`](https://github.com/ReScienceLab/opc-skills) Claude Code skill is installed at `~/.claude/skills/seo-geo/`. Run after any SEO-touching change:

```bash
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/fr"
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/en"
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/de"
```

The script checks: title/description length, H1 presence, JSON-LD block count, robots.txt for AI bots, sitemap.xml availability, load time.

## Legacy URL redirects

[`next.config.ts`](../next.config.ts) 301s WordPress legacy paths:

```
/home            → /
/home/           → /
/default[/]      → /
/index.php       → /
/index.html      → /
/downloads       → /
/downloads/:path*→ /
```

These run **before** the proxy, so the redirect lands on `/`, which then locale-routes to `/<lang>`.

This was added to clear Google Search Console's "Blocked by robots.txt" complaints on the stale WordPress URL snapshot.

## Google Ads / GA4

Inline in [`src/app/[lang]/layout.tsx`](../src/app/[lang]/layout.tsx):

- GA4 tag: `G-DWS58BCDTL`
- Google Ads: `AW-18142154553`
- Conversion event: `AW-18142154553/CmtNCIfStK4cELme7cpD` — fires on any `wa.me` click anywhere on the site (separate from our first-party analytics).

If you ever rotate these IDs, edit the inline `<Script>` block — they are hardcoded.

## Checklist when adding a new page

- [ ] Add `generateMetadata()` with `title`, `description`, `alternates`
- [ ] Add to `src/app/sitemap.ts`
- [ ] Add to `public/llms.txt` (+ `llms-full.txt` if substantive)
- [ ] Localize copy in all three dictionaries
- [ ] Run `seo_audit.py` for each locale
- [ ] If it has FAQs, emit `FAQPage` JSON-LD
- [ ] If it represents an entity (Product/Article/Service/Person…), emit the appropriate JSON-LD
