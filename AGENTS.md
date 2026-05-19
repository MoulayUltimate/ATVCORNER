<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO & GEO (AI visibility)

This project ships visibility for both classic SEO and generative answer engines (ChatGPT, Perplexity, Claude, Gemini).

- **Meta descriptions** must be localized — pull from `dict.meta.description`, not `siteConfig.shortDesc` (which is French-only).
- **Robots rules** live in `src/app/robots.ts` and include explicit `Allow` rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). Keep that list when adding new disallows.
- **Structured data** at `src/app/[lang]/layout.tsx` and `src/app/[lang]/page.tsx`: `Organization`, `WebSite`, `FAQPage`, `Product`. Add JSON-LD for any new entity types (Article, Service, etc.) rather than relying on meta tags alone.
- **LLM index** is `public/llms.txt` + `public/llms-full.txt` (llmstxt.org convention). Update when adding/removing pages.

## Auditing

The `seo-geo` Claude Code skill is installed at `~/.claude/skills/seo-geo/`. Run:

```
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/<lang>"
```

It checks title/description length, H1, JSON-LD count, robots.txt for AI bots, sitemap, and load time. Run against each locale (`/fr`, `/en`, `/de`) when shipping SEO-touching changes.
