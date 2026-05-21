import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ComparisonTable } from "@/components/tools/ComparisonTable";
import { comparisonProviders, tools } from "@/data/tools";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = tools.find((x) => x.slug === "comparison")!;
  return {
    title: t.metaTitle[lang],
    description: t.metaDesc[lang],
    alternates: {
      canonical: `/${lang}/tools/comparison`,
      languages: { "fr-FR": "/fr/tools/comparison", "en-US": "/en/tools/comparison", "de-DE": "/de/tools/comparison" },
    },
    openGraph: { title: t.metaTitle[lang], description: t.metaDesc[lang], url: `/${lang}/tools/comparison`, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ATV Corner",
    description: "All-in-one European football streaming subscription",
    brand: { "@type": "Brand", name: "ATV Corner" },
    offers: {
      "@type": "Offer",
      price: "15",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2400",
    },
  };

  return (
    <>
      <Script
        id="ld-product-comparison"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <ComparisonTable lang={lang} providers={comparisonProviders} />
    </>
  );
}
