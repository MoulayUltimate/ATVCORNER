import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/BlogIndex";
import { blogPosts } from "@/data/blog";
import { hasLocale, locales } from "@/i18n";
import { BuyBandSection } from "@/components/BuyBand";
import { pick } from "@/i18n/pick";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const meta = {
  fr: {
    title: "Blog IPTV — Guides, comparatifs et tutoriels",
    description:
      "Guides experts IPTV : M3U, Xtream Codes, 4K/8K, OTT premium, TiviMate, Smart STB. Tutoriels et comparatifs pour tirer le meilleur de votre abonnement.",
  },
  en: {
    title: "IPTV Blog — Guides, comparisons and tutorials",
    description:
      "Expert IPTV guides: M3U, Xtream Codes, 4K/8K, premium OTT, TiviMate, Smart STB. Tutorials and comparisons to get the most out of your subscription.",
  },
  de: {
    title: "IPTV-Blog — Guides, Vergleiche und Tutorials",
    description:
      "Experten-IPTV-Guides: M3U, Xtream Codes, 4K/8K, Premium-OTT, TiviMate, Smart STB. Tutorials und Vergleiche für das Beste aus Ihrem Abo.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = pick(meta, lang);
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        "fr-FR": "/fr/blog",
        "en-US": "/en/blog",
        "de-DE": "/de/blog",
        "es-ES": "/es/blog",
        "it-IT": "/it/blog",
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
  return (
    <>
      <BlogIndex posts={blogPosts} lang={lang} />
      <BuyBandSection lang={lang} source="blog-index" />
    </>
  );
}