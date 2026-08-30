import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolsHub } from "@/components/tools/ToolsHub";
import { hasLocale, locales } from "@/i18n";
import { BuyBandSection } from "@/components/BuyBand";
import { pick } from "@/i18n/pick";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const meta = {
  fr: {
    title: "Outils streaming football — Compatibilité, débit, comparatifs",
    description:
      "Outils interactifs ATV Corner : vérificateur de compatibilité d'appareils, test de débit streaming, comparatif d'abonnements, guides par championnat et par pays.",
  },
  en: {
    title: "Football Streaming Tools — Compatibility, Speed, Comparison",
    description:
      "ATV Corner interactive tools: device compatibility checker, streaming speed test, subscription comparison, league and country guides.",
  },
  de: {
    title: "Fußball-Streaming-Tools — Kompatibilität, Speed, Vergleich",
    description:
      "ATV-Corner-Tools: Gerätekompatibilität, Streaming-Speedtest, Abo-Vergleich, Liga- und Länder-Guides.",
  },
  es: {
    title: "Herramientas de fútbol en streaming — compatibilidad, velocidad y comparativa",
    description:
      "Herramientas de ATV Corner: compatibilidad de dispositivos, test de velocidad para streaming, comparativa de suscripciones y guías por liga y por país.",
  },
  it: {
    title: "Strumenti per il calcio in streaming — compatibilità, velocità e confronto",
    description:
      "Strumenti di ATV Corner: compatibilità dei dispositivi, test di velocità per lo streaming, confronto degli abbonamenti e guide per campionato e per paese.",
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
      canonical: `/${lang}/tools`,
      languages: {
        "fr-FR": "/fr/tools",
        "en-US": "/en/tools",
        "de-DE": "/de/tools",
        "es-ES": "/es/tools",
        "it-IT": "/it/tools",
      },
    },
    openGraph: { title: m.title, description: m.description, url: `/${lang}/tools`, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <>
      <ToolsHub lang={lang} />
      <BuyBandSection lang={lang} source="tools-hub" />
    </>
  );
}