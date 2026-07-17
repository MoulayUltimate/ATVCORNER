import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoContent } from "@/lib/seo-content";
import { hasLocale, locales } from "@/i18n";

const SLUG = "cable-tv-alternative" as const;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const c = getSeoContent(SLUG, lang);
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: `/${lang}/${SLUG}`,
      languages: {
        "fr-FR": `/fr/${SLUG}`,
        "en-US": `/en/${SLUG}`,
        "de-DE": `/de/${SLUG}`,
      },
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
  const content = getSeoContent(SLUG, lang);
  return <SeoLandingPage content={content} lang={lang} slug={SLUG} />;
}
