import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecommenderQuiz } from "@/components/tools/RecommenderQuiz";
import { tools } from "@/data/tools";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = tools.find((x) => x.slug === "recommender")!;
  return {
    title: t.metaTitle[lang],
    description: t.metaDesc[lang],
    alternates: {
      canonical: `/${lang}/tools/recommender`,
      languages: { "fr-FR": "/fr/tools/recommender", "en-US": "/en/tools/recommender", "de-DE": "/de/tools/recommender" },
    },
    openGraph: { title: t.metaTitle[lang], description: t.metaDesc[lang], url: `/${lang}/tools/recommender`, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <RecommenderQuiz lang={lang} />;
}
