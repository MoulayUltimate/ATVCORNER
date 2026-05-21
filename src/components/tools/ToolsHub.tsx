import Link from "next/link";
import type { Locale } from "@/i18n";
import { tools, leagues, countries, teams } from "@/data/tools";

const copy = {
  fr: {
    eyebrow: "OUTILS · STREAMING",
    title_a: "Outils",
    title_accent: "Streaming",
    title_b: "ATV Corner",
    intro: "Configurez, comparez, choisissez. Outils interactifs et guides ciblés pour tirer le maximum de votre abonnement football.",
    sec_interactive: "Outils interactifs",
    sec_leagues: "Regarder par championnat",
    sec_countries: "Regarder par pays",
    sec_teams: "Regarder par équipe",
    open: "Ouvrir",
    watch: "Regarder",
  },
  en: {
    eyebrow: "STREAMING TOOLS",
    title_a: "ATV Corner",
    title_accent: "Streaming",
    title_b: "Tools",
    intro: "Set up, compare, decide. Interactive tools and targeted guides to get the most from your football subscription.",
    sec_interactive: "Interactive tools",
    sec_leagues: "Watch by league",
    sec_countries: "Watch by country",
    sec_teams: "Watch by team",
    open: "Open",
    watch: "Watch",
  },
  de: {
    eyebrow: "STREAMING-TOOLS",
    title_a: "ATV-Corner-",
    title_accent: "Streaming",
    title_b: "-Tools",
    intro: "Einrichten, vergleichen, entscheiden. Interaktive Tools und gezielte Guides für das Maximum aus Ihrem Fußball-Abo.",
    sec_interactive: "Interaktive Tools",
    sec_leagues: "Nach Liga schauen",
    sec_countries: "Nach Land schauen",
    sec_teams: "Nach Verein schauen",
    open: "Öffnen",
    watch: "Schauen",
  },
} as const;

export function ToolsHub({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <section className="hero-gradient pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container-luxe text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-6">
            {c.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            {c.title_a}{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              {c.title_accent}
            </span>{" "}
            {c.title_b}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300">{c.intro}</p>
        </div>
      </section>

      {/* Interactive tools */}
      <section className="py-16">
        <div className="container-luxe">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{c.sec_interactive}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/${lang}/tools/${t.slug}`}
                className="glass-card p-6 rounded-2xl hover:ring-emerald-400/40 ring-1 ring-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center mb-4 text-emerald-300">
                  <ToolIcon name={t.icon} />
                </div>
                <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {t.title[lang]}
                </h3>
                <p className="text-sm text-zinc-400">{t.description[lang]}</p>
                <span className="mt-4 inline-block text-emerald-400 text-sm font-semibold">
                  {c.open} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues */}
      <section className="py-12 border-t border-white/5">
        <div className="container-luxe">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{c.sec_leagues}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {leagues.map((l) => (
              <Link
                key={l.slug}
                href={`/${lang}/tools/watch/${l.slug}`}
                className="glass-card p-4 rounded-xl hover:ring-emerald-400/40 ring-1 ring-white/5 transition-all"
              >
                <div className="text-xs text-zinc-400">{l.shortName}</div>
                <div className="text-base font-bold mt-1">{l.name}</div>
                <div className="text-xs text-emerald-400 mt-2">{c.watch} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-12 border-t border-white/5">
        <div className="container-luxe">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{c.sec_countries}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/${lang}/tools/in/${country.slug}`}
                className="glass-card p-4 rounded-xl hover:ring-emerald-400/40 ring-1 ring-white/5 transition-all flex items-center gap-3"
              >
                <span className="text-2xl" aria-hidden>{country.flag}</span>
                <div>
                  <div className="text-sm font-bold">{country.name}</div>
                  <div className="text-xs text-emerald-400">{c.watch} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-12 border-t border-white/5 mb-16">
        <div className="container-luxe">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{c.sec_teams}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/${lang}/tools/team/${team.slug}`}
                className="glass-card p-4 rounded-xl hover:ring-emerald-400/40 ring-1 ring-white/5 transition-all"
              >
                <div className="text-xs text-zinc-400">{team.league}</div>
                <div className="text-base font-bold mt-1">{team.shortName}</div>
                <div className="text-xs text-emerald-400 mt-2">{c.watch} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolIcon({ name }: { name: string }) {
  if (name === "tv")
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  if (name === "gauge")
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
        <path d="M12 12l4-4" strokeLinecap="round" />
      </svg>
    );
  if (name === "sparkles")
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" />
      </svg>
    );
  if (name === "scales")
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M5 7h14M5 7l-2 6h4l-2-6Zm14 0l-2 6h4l-2-6Z" />
      </svg>
    );
  return null;
}
