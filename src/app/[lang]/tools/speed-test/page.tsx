import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpeedTest } from "@/components/tools/SpeedTest";
import { tools } from "@/data/tools";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = tools.find((x) => x.slug === "speed-test")!;
  return {
    title: t.metaTitle[lang],
    description: t.metaDesc[lang],
    alternates: {
      canonical: `/${lang}/tools/speed-test`,
      languages: { "fr-FR": "/fr/tools/speed-test", "en-US": "/en/tools/speed-test", "de-DE": "/de/tools/speed-test" },
    },
    openGraph: { title: t.metaTitle[lang], description: t.metaDesc[lang], url: `/${lang}/tools/speed-test`, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SpeedTest lang={lang} />;
}
