import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { CountryPage } from "@/components/tools/CountryPage";
import { getCountry, countrySlugs } from "@/data/tools";
import { getCountryExtras } from "@/data/tools/seoExtras";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.flatMap((lang) => countrySlugs.map((country) => ({ lang, country })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}): Promise<Metadata> {
  const { lang, country } = await params;
  if (!hasLocale(lang)) return {};
  const data = getCountry(country);
  if (!data) return {};
  const t = data.i18n[lang];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `/${lang}/tools/in/${country}`,
      languages: {
        "fr-FR": `/fr/tools/in/${country}`,
        "en-US": `/en/tools/in/${country}`,
        "de-DE": `/de/tools/in/${country}`,
      },
    },
    openGraph: { title: t.metaTitle, description: t.metaDesc, url: `/${lang}/tools/in/${country}`, type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}) {
  const { lang, country } = await params;
  if (!hasLocale(lang)) notFound();
  const data = getCountry(country);
  if (!data) notFound();
  const t = data.i18n[lang];
  const extras = getCountryExtras(country, lang);
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
      { "@type": "ListItem", position: 3, name: data.name, item: `/${lang}/tools/in/${country}` },
    ],
  };

  return (
    <>
      <Script id={`ld-faq-${country}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id={`ld-bc-${country}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <CountryPage lang={lang} country={data} />
    </>
  );
}
