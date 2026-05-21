import Link from "next/link";
import type { Locale } from "@/i18n";
import type { CountryData } from "@/data/tools/types";
import { whatsappUrl } from "@/lib/site";
import { getCountryExtras } from "@/data/tools/seoExtras";
import { SeoSections } from "./SeoSections";

export function CountryPage({ lang, country }: { lang: Locale; country: CountryData }) {
  const t = country.i18n[lang];
  const extras = getCountryExtras(country.slug, lang);
  const labels = {
    fr: { leagues: "Championnats les plus populaires", teams: "Équipes locales", devices: "Appareils compatibles", faq: "Questions fréquentes", cta: "Activer mon abonnement", crumb: "Outils" },
    en: { leagues: "Most popular leagues", teams: "Local teams", devices: "Supported devices", faq: "Frequently asked questions", cta: "Activate my subscription", crumb: "Tools" },
    de: { leagues: "Beliebteste Ligen", teams: "Lokale Vereine", devices: "Unterstützte Geräte", faq: "Häufige Fragen", cta: "Abo aktivieren", crumb: "Tools" },
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
            <span>{country.name}</span>
          </nav>
          <div className="text-4xl mb-2" aria-hidden>{country.flag}</div>
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
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-lg font-bold mb-3">{labels.leagues}</h2>
            <p className="text-sm text-zinc-300">{t.popularLeagues}</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-lg font-bold mb-3">{labels.teams}</h2>
            <p className="text-sm text-zinc-300">{t.popularTeams}</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-lg font-bold mb-3">{labels.devices}</h2>
            <p className="text-sm text-zinc-300">{t.devices}</p>
          </div>
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
