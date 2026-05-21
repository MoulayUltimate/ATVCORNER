import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { TeamPage } from "@/components/tools/TeamPage";
import { getTeam, teamSlugs } from "@/data/tools";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.flatMap((lang) => teamSlugs.map((team) => ({ lang, team })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; team: string }>;
}): Promise<Metadata> {
  const { lang, team } = await params;
  if (!hasLocale(lang)) return {};
  const data = getTeam(team);
  if (!data) return {};
  const t = data.i18n[lang];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `/${lang}/tools/team/${team}`,
      languages: {
        "fr-FR": `/fr/tools/team/${team}`,
        "en-US": `/en/tools/team/${team}`,
        "de-DE": `/de/tools/team/${team}`,
      },
    },
    openGraph: { title: t.metaTitle, description: t.metaDesc, url: `/${lang}/tools/team/${team}`, type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; team: string }>;
}) {
  const { lang, team } = await params;
  if (!hasLocale(lang)) notFound();
  const data = getTeam(team);
  if (!data) notFound();
  const t = data.i18n[lang];

  const sportsTeamLd = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: data.name,
    sport: "Football",
    foundingDate: String(data.founded),
    location: { "@type": "Place", name: data.country },
    memberOf: { "@type": "SportsOrganization", name: data.league },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
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
      { "@type": "ListItem", position: 3, name: data.name, item: `/${lang}/tools/team/${team}` },
    ],
  };

  return (
    <>
      <Script id={`ld-team-${team}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsTeamLd) }} />
      <Script id={`ld-faq-team-${team}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id={`ld-bc-team-${team}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <TeamPage lang={lang} team={data} />
    </>
  );
}
