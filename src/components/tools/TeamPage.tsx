import Link from "next/link";
import type { Locale } from "@/i18n";
import type { TeamData } from "@/data/tools/types";
import { whatsappUrl } from "@/lib/site";
import { getTeamExtras } from "@/data/tools/seoExtras";
import { SeoSections } from "./SeoSections";

export function TeamPage({ lang, team }: { lang: Locale; team: TeamData }) {
  const t = team.i18n[lang];
  const extras = getTeamExtras(team.slug, lang);
  const labels = {
    fr: { whyFollow: "Pourquoi suivre", whereToWatch: "Où regarder", faq: "Questions fréquentes", cta: "Activer mon abonnement", crumb: "Outils", founded: "Fondé", stadium: "Stade", competitions: "Compétitions" },
    en: { whyFollow: "Why follow", whereToWatch: "Where to watch", faq: "Frequently asked questions", cta: "Activate my subscription", crumb: "Tools", founded: "Founded", stadium: "Stadium", competitions: "Competitions" },
    de: { whyFollow: "Warum verfolgen", whereToWatch: "Wo schauen", faq: "Häufige Fragen", cta: "Abo aktivieren", crumb: "Tools", founded: "Gegründet", stadium: "Stadion", competitions: "Wettbewerbe" },
  }[lang];

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <section className="hero-gradient pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-luxe">
          <nav className="text-xs text-zinc-400 mb-4">
            <Link href={`/${lang}`} className="hover:text-emerald-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${lang}/tools`} className="hover:text-emerald-300">{labels.crumb}</Link>
            <span className="mx-2">/</span>
            <span>{team.name}</span>
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-4">
            {team.league} · {team.country}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">{t.h1}</h1>
          <p className="mt-6 max-w-2xl text-zinc-300 leading-relaxed">{t.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors"
            >
              {labels.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl lg:col-span-2">
            <h2 className="text-xl font-bold mb-3">{labels.whyFollow}</h2>
            <p className="text-zinc-300 leading-relaxed">{t.whyFollow}</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-xs font-bold text-emerald-400 tracking-widest">{team.shortName}</div>
            <div className="space-y-3 mt-3 text-sm">
              <div><div className="text-zinc-500">{labels.founded}</div><div className="font-bold">{team.founded}</div></div>
              <div><div className="text-zinc-500">{labels.stadium}</div><div className="font-bold">{team.stadium}</div></div>
              <div><div className="text-zinc-500">{labels.competitions}</div><div className="font-bold">{team.competitions.join(", ")}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-white/5">
        <div className="container-luxe max-w-3xl glass-card p-6 sm:p-8 rounded-2xl ring-1 ring-emerald-400/20">
          <h2 className="text-2xl font-bold text-emerald-300 mb-3">{labels.whereToWatch}</h2>
          <p className="text-zinc-200 leading-relaxed">{t.whereToWatch}</p>
        </div>
      </section>

      <section className="py-12 border-t border-white/5">
        <div className="container-luxe max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{labels.faq}</h2>
          <div className="space-y-3">
            {t.faq.map((f, i) => (
              <details key={i} className="glass-card rounded-xl p-5">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-zinc-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {extras && <SeoSections lang={lang} extras={extras} langPrefix={`/${lang}`} />}
      <div className="pb-16" />
    </div>
  );
}
