# Article blueprint (BlogPost)

The shape every new blog article follows. Clone an existing post in
`src/data/blog/posts/` (e.g. `xtream-codes-explained.ts`) and refill it.

## File

`src/data/blog/posts/<slug>.ts` exporting a `BlogPost`:

```ts
import type { BlogPost } from "../types";

export const <camelSlug>: BlogPost = {
  slug: "<kebab-slug>",
  date: "YYYY-MM-DD",          // absolute; convert relative dates
  author: "ATV Corner",
  keywords: ["primary kw", "de kw", "en kw", "fr kw"],
  cover: "/blog/<slug>-main.png",   // MAIN image (page-imagery); omit until built
  i18n: { de: {…}, en: {…}, fr: {…} },  // author de first, then en, then fr
};
```

Each locale = `{ title, metaTitle, metaDesc, excerpt, category, readMinutes, body, faq }`.

## Body block order (aim ~1,000–1,600 words)

1. `p` — the quick answer (first ~100 words; this is what AI search quotes).
2. `h2` "What is / how" + `p`.
3. `h2` mechanism + `p`, with an `h3` pair for sub-points.
4. `img` — the DESCRIPTIVE in-body image (diagram/labelled), beside the section it explains.
5. `h2` "what you need" + `ul`.
6. `h2` comparison (cable vs / vs alternative) + `p`, then a `quote`.
7. `h2` legality / trust + `p`.
8. `h2` "how fast to start" + `p`.
9. `cta` — closing push to free trial + a plan, with the real numbers.

## Non-negotiables

- **Numbers only from the Phase-0 A table** in SKILL.md (66,000+ / 70,000+ /
  18,000+ / 4,200 / 4K-8K / €15-30-50-60 / €5-mo / 7-day / <5 min / 4.9-2,800-12,000).
- **metaTitle without " | ATV Corner"** (layout template appends it).
- **≥2 images**, and the cover ≠ the in-body image in meaning.
- Cross-link: 1–2 related articles + the matching landing page (e.g.
  /iptv-subscription, /best-iptv-service, /cable-tv-alternative).
- 4–6 FAQ → FAQPage JSON-LD is auto-emitted by `BlogArticle.tsx`.

## Register + verify

1. `src/data/blog/index.ts` — import + add to `blogPosts[]`.
2. `public/llms.txt` — add a line under each of the FR / English / Deutsch blog blocks.
3. `npx tsc --noEmit`; dev server → `/{de,en,fr}/blog/<slug>` return 200.
4. Confirm the slug appears in `/sitemap.xml` (auto from `blogPosts`).
