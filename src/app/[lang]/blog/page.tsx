import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/BlogIndex";
import { blogPosts } from "@/data/blog";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const meta = {
  fr: {
    title: "Blog IPTV — Guides, comparatifs et tutoriels | ATV Corner",
    description:
      "Guides experts IPTV : M3U, Xtream Codes, 4K/8K, OTT premium, TiviMate, Smart STB. Tutoriels et comparatifs pour tirer le meilleur de votre abonnement.",
  },
  en: {
    title: "IPTV Blog — Guides, comparisons and tutorials | ATV Corner",
    description:
      "Expert IPTV guides: M3U, Xtream Codes, 4K/8K, premium OTT, TiviMate, Smart STB. Tutorials and comparisons to get the most out of your subscription.",
  },
  de: {
    title: "IPTV-Blog — Guides, Vergleiche und Tutorials | ATV Corner",
    description:
      "Experten-IPTV-Guides: M3U, Xtream Codes, 4K/8K, Premium-OTT, TiviMate, Smart STB. Tutorials und Vergleiche für das Beste aus Ihrem Abo.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = meta[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        "fr-FR": "/fr/blog",
        "en-US": "/en/blog",
        "de-DE": "/de/blog",
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/${lang}/blog`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BlogIndex posts={blogPosts} lang={lang} />;
}
