import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { LeaguePage } from "@/components/tools/LeaguePage";
import { getLeague, leagueSlugs } from "@/data/tools";
import { getLeagueExtras } from "@/data/tools/seoExtras";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.flatMap((lang) => leagueSlugs.map((league) => ({ lang, league })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; league: string }>;
}): Promise<Metadata> {
  const { lang, league } = await params;
  if (!hasLocale(lang)) return {};
  const data = getLeague(league);
  if (!data) return {};
  const t = data.i18n[lang];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `/${lang}/tools/watch/${league}`,
      languages: {
        "fr-FR": `/fr/tools/watch/${league}`,
        "en-US": `/en/tools/watch/${league}`,
        "de-DE": `/de/tools/watch/${league}`,
      },
    },
    openGraph: { title: t.metaTitle, description: t.metaDesc, url: `/${lang}/tools/watch/${league}`, type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; league: string }>;
}) {
  const { lang, league } = await params;
  if (!hasLocale(lang)) notFound();
  const data = getLeague(league);
  if (!data) notFound();
  const t = data.i18n[lang];
  const extras = getLeagueExtras(league, lang);
  const allFaq = [...t.faq, ...(extras?.extraFaq ?? [])];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `/${lang}` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `/${lang}/tools` },
      { "@type": "ListItem", position: 3, name: data.name, item: `/${lang}/tools/watch/${league}` },
    ],
  };

  return (
    <>
      <Script id={`ld-faq-${league}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id={`ld-bc-${league}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <LeaguePage lang={lang} league={data} />
    </>
  );
}
