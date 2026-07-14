import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolsHub } from "@/components/tools/ToolsHub";
import { hasLocale, locales } from "@/i18n";

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
      canonical: `/${lang}/tools`,
      languages: {
        "fr-FR": "/fr/tools",
        "en-US": "/en/tools",
        "de-DE": "/de/tools",
      },
    },
    openGraph: { title: m.title, description: m.description, url: `/${lang}/tools`, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ToolsHub lang={lang} />;
}
