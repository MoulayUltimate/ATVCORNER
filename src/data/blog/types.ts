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
  | { type: "img"; src: string; alt: string; caption?: string; width?: number; height?: number };

export type BlogPost = {
  slug: string;
  date: string;
  updated?: string;
  author: string;
  keywords: string[];
  cover?: string;
  i18n: Record<Locale, BlogPostLocale>;
};
