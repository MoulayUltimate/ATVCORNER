import type { Locale } from "@/i18n";

export type BlogPostLocale = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  body: BlogBlock[];
  faq: { q: string; a: string }[];
  /** Locale-specific featured/OG image (labels in this language). Falls back to BlogPost.cover. */
  cover?: string;
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string; width?: number; height?: number }
  /** Internal links out to landing/tool pages. `href` is locale-relative, e.g. "/iptv-subscription". */
  | { type: "links"; items: { href: string; label: string; text?: string }[] };

export type BlogPost = {
  slug: string;
  date: string;
  updated?: string;
  author: string;
  keywords: string[];
  cover?: string;
  i18n: Partial<Record<Locale, BlogPostLocale>>;
};

/** Fallback chain used when a locale's translation has not landed yet. */
const FALLBACK: Record<Locale, Locale[]> = {
  fr: ["en"],
  en: ["fr"],
  de: ["en", "fr"],
  es: ["en", "fr"],
  it: ["en", "fr"],
};

/** Resolve a post's copy for a locale, falling back rather than throwing. */
export function localeOf(post: BlogPost, locale: Locale): BlogPostLocale {
  const hit = post.i18n[locale];
  if (hit) return hit;
  for (const alt of FALLBACK[locale] ?? []) {
    const f = post.i18n[alt];
    if (f) return f;
  }
  return Object.values(post.i18n)[0] as BlogPostLocale;
}
