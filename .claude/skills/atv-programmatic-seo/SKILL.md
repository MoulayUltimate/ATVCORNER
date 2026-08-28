---
name: atv-programmatic-seo
description: Build data-grounded SEO pages and articles at scale FOR THIS REPO (ATV Corner / atvcorner.com). Adaptation of the global `programmatic-seo-pages` skill, wired to this project's real stack, real numbers, and real components. Use whenever asked to create, scale, refresh, or plan IPTV landing pages or blog articles. Finds buy-intent keywords via the DataForSEO MCP (`dfs-mcp`), reuses ONLY the existing UI primitives, never fabricates a number, ships ≥2 stock+label images per article via the `page-imagery` skill, and wires every URL into the sitemap, llms.txt, blog index and IndexNow.
---

# ATV Corner — programmatic SEO (project-local)

This is the project adaptation of the global `programmatic-seo-pages` skill. The
global skill owns the *method*; this file pins every "discover it per project"
blank to the concrete answer for **this repo**, so a build never re-derives them.

Read the global skill for the full rationale
(`~/.claude/skills/programmatic-seo-pages/SKILL.md`). Everything below overrides
or fills in its project-specific slots.

## 🔒 Hard rule #0 — the UI is FROZEN (unchanged from global)

Produce DATA + CONTENT only. Never invent layout/components/CSS. New work
renders through the primitives that already exist here:

- **Landing pages** (money/keyword pages): `src/components/SeoLandingPage.tsx`
  driven by an entry in `src/lib/seo-content.ts` + a thin
  `src/app/[lang]/<slug>/page.tsx` wrapper. See existing:
  `iptv-subscription`, `iptv-firestick`, `best-iptv-service`, `cable-tv-alternative`.
- **Articles** (blog): `src/data/blog/posts/<slug>.ts` (a `BlogPost`), rendered by
  `src/components/BlogArticle.tsx`, indexed in `src/data/blog/index.ts`.
- Cards, FAQ accordion, CTA bands, pricing grid, league/broadcaster strips all
  already exist — clone their shape, never restyle.

If a task seems to need a new visual component, STOP and ask.

## Phase 0 — the data sources are ALREADY discovered (do not re-ask)

Two ground-truth sources, both first-party / owned:

**A. Real product numbers (the no-fabrication allow-list).** Every statistic in
copy MUST come from here — never model memory, never a competitor's number:

| Fact | Value | Source of truth |
|---|---|---|
| Live channels | **66,000+** | `src/data/channels.ts` (`intl` 66k) + stats |
| VOD movies | **70,000+** | `channels.ts` movies |
| Series | **18,000+** | `channels.ts` series |
| Sports channels | **4,200** | `channels.ts` sports |
| Quality | **4K / 8K Ultra HD** | site-wide |
| Prices | **€15 / €30 / €50 / €60** (1/3/6/12 mo); annual ≈ **€5/mo**; USD $16/$33/$55/$65 | `src/data/plans.ts` |
| Guarantee | **7-day money-back** | site-wide |
| Support | **24/7**, replies < 5 min on WhatsApp | site-wide |
| Activation | **< 5 minutes**, credentials by WhatsApp | site-wide |
| Rating / proof | **4.9/5 · 2,800+ reviews · 12,000+ subscribers** | homepage |
| Delivery | **Xtream Codes** creds or **M3U** link | site-wide |
| Devices | Smart TV (Samsung/LG/Android TV), Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS, Linux | `src/data/devices.ts` |
| Apps | TiviMate, IBO Player, IPTV Smarters Pro, VLC | site-wide |
| Checkout | **WhatsApp** (all plan CTAs → wa.me with prefilled plan+price) | `PricingGrid.tsx` |

If a new fact is needed that isn't here, ASK the operator — do not invent it.

**B. Keyword demand — DataForSEO MCP (`dfs-mcp`).** This is how we pick what to
build. Load the tools via ToolSearch, then:

- `dataforseo_labs_google_keyword_ideas` — seed 2–3 terms, get relevant ideas +
  volume + CPC + competition + `keyword_properties.keyword_difficulty`. Large
  responses spill to a file — parse with `jq`:
  `jq -r '.items[] | select(.keyword_info.search_volume>=200) | select((.keyword_properties.keyword_difficulty//100)<=40) | [.keyword_info.search_volume,(.keyword_properties.keyword_difficulty//"-"),.keyword_info.competition_level,.keyword] | @tsv' FILE | sort -rn`
- `dataforseo_labs_search_intent` — classify informational/commercial/transactional.
- `dataforseo_labs_bulk_keyword_difficulty` — KD for a shortlist.
- Markets/locales in priority order: **Germany/de → United States/en → France/fr**
  (`location_name` + `language_code`). Target **KD ≤ ~35, volume ≥ ~300, buy or
  problem intent**. Exclude: competitor brand names, hardware (encoders), adult,
  Turkish/other-language noise ("iptv satın al"), pure navigational TV-guide terms.

## One page per intent + cannibalization check

Before building, grep existing routes and blog slugs so a new page doesn't
compete with one we already rank/own:

```
ls src/app/[lang]/            # landing routes
ls src/data/blog/posts/       # existing articles
grep -n '"' src/lib/seo-content.ts | grep -i <term>
```

Existing articles (do NOT duplicate): `4k-vs-8k-iptv`, `m3u-playlist-guide`,
`ott-premium-vs-iptv`, `smart-stb-portal-url`, `tivimate-vs-smarters`,
`xtream-codes-explained`. Existing landing pages own: premium, 8k, 4k, m3u,
xtream, sport, alternatives, free-trial, best-service, subscription, firestick,
smarters-pro, cable-tv-alternative, plus /tools/* and /tools/in/<country>.

**Articles are informational/tutorial companions that LINK to the money landing
pages — they must not restate them.** Differentiate on angle (how-to,
troubleshooting, buyer checklist, churn/"cancel X") and cross-link.

## Depth + on-page (articles)

- ~1,000–1,600 words of unique prose, answer the query in the first ~100 words.
- `BlogPost` shape (`src/data/blog/types.ts`): `slug`, `date`, `author`,
  `keywords[]`, `cover`, `i18n[locale]` with `{title, metaTitle, metaDesc,
  excerpt, category, readMinutes, body: BlogBlock[], faq[]}`.
- `BlogBlock` now includes an **`img`** block — use it for the in-body
  descriptive image (see image rule). Body should carry ~8–12 `h2`/`h3`
  sections, lists, one `quote`, one `cta`.
- metaTitle: do NOT append " | ATV Corner" (the layout template adds it — adding
  it here double-brands, a bug we already fixed once).
- FAQ array → FAQPage JSON-LD is emitted by the renderer. Keep 4–6 Q/A.
- Author/E-E-A-T: use a real byline; link to related articles + the relevant
  landing page.

## 🖼 Hard rule — every article ships ≥ 2 images (stock photo + vector labels)

Use the **`page-imagery`** skill (`~/.claude/skills/page-imagery/`). NOT AI
generation — a real photo underneath, meaning drawn on top in SVG.

1. **MAIN / cover** — `BlogPost.cover`, the featured/OG image. One subject up
   close + one call-out naming the specific thing the article is about.
2. **≥1 DESCRIPTIVE** — an `img` body block beside the section it explains:
   numbered call-outs or a labelled diagram (how IPTV works, setup steps,
   cable-vs-IPTV, device ports).
   The two images must not say the same thing.

Setup (once): `imagery.config.json` at repo root already mirrors our tokens
(bg `#0c0e12`, accent `#25d366`, ink `#e2e2e8`, domain `atvcorner.com`).
Requires `UNSPLASH_ACCESS_KEY` in `.env.local` and
`npm i -D playwright-core && npx playwright install chromium`. Composites are rendered as PNG then **converted to JPEG** before committing —
a 1820x1024 PNG is ~1.8 MB, the JPEG ~300 KB with no visible loss on the text:
`sips -s format jpeg -s formatOptions 88 x.png --out x.jpg && rm x.png`.
Committing the PNGs put 68 MB in one commit and stalled the push. Final files go to
`public/blog/<slug>-main-<loc>.jpg` and `public/blog/<slug>-steps-<loc>.jpg`; keyword-bearing
filenames + descriptive, localized `alt`. Candidate frames stay in `tmp/`
(gitignored, third-party licensed) — only the finished composite is committed.

## Wire every URL into ALL index feeds (identically)

A page is not "shipped" until it appears in every feed:

1. `src/data/blog/index.ts` — register the new `BlogPost` (articles).
2. `src/app/sitemap.ts` — blog posts auto-added from `blogPosts`; landing pages
   need an explicit `paths` entry. Verify in `/sitemap.xml`.
3. `public/llms.txt` — add FR (+ EN/DE) entries under the right section.
4. Internal links: footer "IPTV Guides" column (`Footer.tsx`) for landing
   pages; article↔article + article→landing cross-links in body.
5. IndexNow: the Netlify `onSuccess` plugin (`netlify/plugins/indexnow`)
   auto-submits the live sitemap on every production deploy — no manual step.

## Locales — DE-primary

Author **de first, then en, then fr** (operator's current priority). All three
are required per page; hreflang alternates already handled by the wrappers /
sitemap. German uses "." thousands (66.000+), FR uses space (66 000+), EN comma.

## Post-generation gates (in order)

1. `avoid-ai-writing` pass on every draft (skill: `avoid-ai-writing`).
2. Number-validation: every digit in prose traces to the Phase-0 A table.
3. `page-imagery` layout audit passes (no text overflow) on both images.
4. `npx tsc --noEmit` clean + dev server renders 200 + FAQPage JSON-LD present.
5. Run `python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "http://localhost:3000/<lang>/blog/<slug>"` per locale when SEO-touching.

## Ship hygiene

- Deploy target is **Netlify only** (no Vercel). Commit as the `MoulayUltimate`
  GitHub account. Push only when the operator asks.
- Keep this skill and `tmp/` out of product commits; commit only app files
  (blog data, components, sitemap, llms.txt, public/blog/*.png).
- Don't touch pages that already rank; new work is additive.

## References
- `references/article-blueprint.md` — the BlogPost section skeleton + a worked example.
- Global skill: `~/.claude/skills/programmatic-seo-pages/` (method, variants, validation).
- `~/.claude/skills/page-imagery/` (image compositing), `~/.claude/skills/avoid-ai-writing/`.
