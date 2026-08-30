import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeviceChecker } from "@/components/tools/DeviceChecker";
import { devices, tools } from "@/data/tools";
import { hasLocale, locales } from "@/i18n";
import { BuyBandSection } from "@/components/BuyBand";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = tools.find((x) => x.slug === "device-compatibility")!;
  return {
    title: t.metaTitle[lang],
    description: t.metaDesc[lang],
    alternates: {
      canonical: `/${lang}/tools/device-compatibility`,
      languages: {
        "fr-FR": "/fr/tools/device-compatibility",
        "en-US": "/en/tools/device-compatibility",
        "de-DE": "/de/tools/device-compatibility",
        "es-ES": "/es/tools/esvice-compatibility",
        "it-IT": "/it/tools/itvice-compatibility",
      },
    },
    openGraph: { title: t.metaTitle[lang], description: t.metaDesc[lang], url: `/${lang}/tools/device-compatibility`, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <>
      <DeviceChecker lang={lang} devices={devices} />
      <BuyBandSection lang={lang} source="tool-device-check" />
    </>
  );
}