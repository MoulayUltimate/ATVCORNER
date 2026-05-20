# Deployment

Production is **Netlify** at `https://atvcorner.com` (apex; `www` 301s to apex). The codebase is also Vercel- and Cloudflare-Pages-compatible.

## Production (Netlify)

### One-time setup

1. **Repository**: connect the GitHub repo in Netlify dashboard. Build settings:
   - Build command: `pnpm build`
   - Publish directory: handled by `@netlify/plugin-nextjs` (auto-detected)
   - Node version: 20+
2. **Domain**: set `atvcorner.com` (apex) as primary. Add `www.atvcorner.com` as alias with redirect to apex.
3. **HTTPS**: Netlify provisions via Let's Encrypt automatically.
4. **Environment variables** (Site settings → Environment variables):

   | Key | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://atvcorner.com` |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `447796630011` |
   | `ADMIN_PASSWORD` | strong password (≥ 12 chars) |
   | `ADMIN_SESSION_SECRET` | output of `openssl rand -hex 32` |
   | `UPSTASH_REDIS_REST_URL` | from Upstash console |
   | `UPSTASH_REDIS_REST_TOKEN` | from Upstash console |

5. **Upstash Redis**: create a free database at [console.upstash.com](https://console.upstash.com). Pick the EU region (closest to traffic). Copy the `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` — these are the REST credentials (not the Redis URL).

### Deploying

Every push to `main` triggers an automatic deploy. To force a redeploy (e.g. after rotating env vars):

```bash
git commit --allow-empty -m "chore: trigger Netlify redeploy"
git push
```

### Verifying

After deploy:

```bash
# Locale routing
curl -I https://atvcorner.com                # 307 → /fr
curl -I https://atvcorner.com/en             # 200
curl -I https://www.atvcorner.com            # 301 → apex
curl -I http://atvcorner.com                 # 301 → https

# Robots.txt has the AI bot allow-list
curl -s https://atvcorner.com/robots.txt | grep GPTBot

# Sitemap is complete
curl -s https://atvcorner.com/sitemap.xml | grep -c "<url>"  # should be 60+ (20 routes × 3 locales)

# Admin gate
curl -I https://atvcorner.com/admin          # 307 → /admin/login
```

Run the SEO audit:

```bash
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/fr"
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/en"
python3 ~/.claude/skills/seo-geo/scripts/seo_audit.py "https://atvcorner.com/de"
```

## Geo headers — what works where

Country is detected by reading edge headers. The track endpoint reads them in this order:

| Host | Header |
|---|---|
| Vercel | `x-vercel-ip-country` |
| Cloudflare | `cf-ipcountry` |
| Netlify (Edge fns) | `x-country` |
| Netlify (base64 JSON) | `x-nf-geo` |

If none are present, country becomes `"??"` and the visitor still counts but is excluded from country breakdowns.

## Vercel (alternative)

[`vercel.json`](../vercel.json) is committed. Deploy with:

```bash
vercel --prod
```

Pre-configured:

- Regions: `cdg1` (Paris) + `iad1` (Virginia)
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- Static cache: 1 year + immutable on `/_next/static/*`

## Cloudflare Pages (alternative)

[`wrangler.toml`](../wrangler.toml) is committed.

```bash
pnpm add -D @cloudflare/next-on-pages
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static
```

`compatibility_flags = ["nodejs_compat"]` is set so Web Crypto + Buffer (used by `admin-auth.ts`) work.

## Common operations

### Rotate admin password

1. Generate a strong password.
2. Update `ADMIN_PASSWORD` in Netlify env vars.
3. Trigger a redeploy.
4. Existing admin sessions stay valid until cookie expiry (7 days); to force-logout everyone, also rotate `ADMIN_SESSION_SECRET`.

### Rotate `ADMIN_SESSION_SECRET`

```bash
openssl rand -hex 32
```

Set the output as `ADMIN_SESSION_SECRET`. All existing admin sessions are invalidated immediately.

### Prune analytics

Events expire 60 days after their day bucket (`EXPIRE` set on each write). To wipe everything immediately, run via the Upstash console:

```
FLUSHDB
```

Or selectively delete a day:

```
DEL atv:events:2026-05-19
```

### Add a Stripe payment link

1. Create the link at dashboard.stripe.com → Payments → Payment Links.
2. Paste it into `STRIPE_LINKS` in [`src/data/plans.ts`](../src/data/plans.ts).
3. Commit + push.

### Migrate to a different host

The only host-specific code is the country-header reader in `src/app/api/track/route.ts`. Add the new host's header to `getCountry()` and you're done — everything else is portable.
