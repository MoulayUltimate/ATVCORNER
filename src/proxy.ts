import { NextResponse, type NextRequest } from "next/server";

const locales = ["fr", "en", "de"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "fr";

// IP-based country → language fallback. French is the default for everyone else.
const countryToLocale: Record<string, Locale> = {
  // German-speaking
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  LU: "de",
  // English-speaking
  US: "en",
  GB: "en",
  IE: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  ZA: "en",
  IN: "en",
  NG: "en",
  KE: "en",
  GH: "en",
  // French-speaking (explicit for clarity, falls back to default anyway)
  FR: "fr",
  BE: "fr",
  MC: "fr",
  MA: "fr",
  DZ: "fr",
  TN: "fr",
  SN: "fr",
  CI: "fr",
};

function parseAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const entries = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? parseFloat(qParam.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of entries) {
    const primary = tag.split("-")[0];
    if ((locales as readonly string[]).includes(primary)) {
      return primary as Locale;
    }
  }
  return null;
}

function detectLocale(request: NextRequest): Locale {
  // 1. Manual override via cookie (set by language switcher)
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale as Locale;
  }

  // 2. Country code from CDN edge (Cloudflare / Vercel)
  const country =
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-vercel-ip-country") ??
    null;
  if (country && countryToLocale[country.toUpperCase()]) {
    return countryToLocale[country.toUpperCase()];
  }

  // 3. Accept-Language header
  const headerLocale = parseAcceptLanguage(request.headers.get("accept-language"));
  if (headerLocale) return headerLocale;

  // 4. Fallback
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets, API routes, and the admin section (which lives
  // outside the [lang] tree and must not be locale-rewritten).
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".") // /favicon.ico, /robots.txt, /sitemap.xml, /stitch/...
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = (locales as readonly string[]).some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};
