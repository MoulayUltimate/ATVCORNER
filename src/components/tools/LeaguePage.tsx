import Link from "next/link";
import type { Locale } from "@/i18n";
import type { LeagueData } from "@/data/tools/types";
import { whatsappUrl } from "@/lib/site";

export function LeaguePage({ lang, league }: { lang: Locale; league: LeagueData }) {
  const t = league.i18n[lang];
  const labels = {
    fr: { benefits: "Ce que vous obtenez", whyAtv: "Pourquoi ATV Corner", devices: "Appareils compatibles", countries: "Disponibilité par pays", faq: "Questions fréquentes", cta: "Activer mon abonnement", crumb: "Outils" },
    en: { benefits: "What you get", whyAtv: "Why ATV Corner", devices: "Supported devices", countries: "Country availability", faq: "Frequently asked questions", cta: "Activate my subscription", crumb: "Tools" },
    de: { benefits: "Was Sie bekommen", whyAtv: "Warum ATV Corner", devices: "Unterstützte Geräte", countries: "Länderverfügbarkeit", faq: "Häufige Fragen", cta: "Abo aktivieren", crumb: "Tools" },
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
            <span>{league.name}</span>
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-4">
            {league.shortName}
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
            <Link
              href={`/${lang}/pricing`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 ring-1 ring-white/10 font-semibold hover:bg-white/10 transition-colors"
            >
              Pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">{labels.benefits}</h2>
            <ul className="space-y-2">
              {t.benefits.map((b, i) => (
                <li key={i} className="flex gap-3"><span className="text-emerald-400">✓</span><span className="text-zinc-300">{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-xs font-bold text-emerald-400 tracking-widest">{league.shortName}</div>
            <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
              <div><div className="text-zinc-500">Teams</div><div className="font-bold">{league.teamsCount}</div></div>
              <div><div className="text-zinc-500">Matchdays</div><div className="font-bold">{league.matchdayCount}</div></div>
              <div><div className="text-zinc-500">Season</div><div className="font-bold">{league.startMonth} – {league.endMonth}</div></div>
              <div><div className="text-zinc-500">Country</div><div className="font-bold">{league.countriesCovered.join(", ")}</div></div>
            </div>
            <div className="mt-4 text-xs text-zinc-500 uppercase tracking-widest">Flagship clubs</div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {league.flagship.map((f) => (
                <span key={f} className="px-2.5 py-1 text-xs bg-white/5 rounded-full ring-1 ring-white/10">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-white/5">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-3">{labels.whyAtv}</h2>
            <p className="text-zinc-300 leading-relaxed">{t.whyAtv}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-emerald-300 mb-2">{labels.devices}</h3>
              <p className="text-sm text-zinc-300">{t.devices}</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-emerald-300 mb-2">{labels.countries}</h3>
              <p className="text-sm text-zinc-300">{t.countries}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/5 mb-16">
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
    </div>
  );
}
