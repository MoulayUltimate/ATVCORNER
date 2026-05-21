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
    sec_about_h2: "Comment regarder le football en streaming en Europe",
    sec_about_p1: "ATV Corner agrège les diffuseurs européens du football — Canal+, Sky, DAZN, beIN Sports, Movistar, RMC Sport, BT/TNT Sports, Amazon Prime Ligue 1 — dans une seule application accessible depuis la France, la Belgique, la Suisse, l'Allemagne, l'Italie, l'Espagne, le Portugal, les Pays-Bas, le Royaume-Uni et tous les pays européens. Plus de 8000 chaînes en HD et 4K HDR, avec replay 7 jours, multi-cam sur les grands chocs et commentaires en français, anglais, allemand, espagnol, italien, arabe.",
    sec_about_p2: "Que vous cherchiez à regarder la Premier League en direct depuis Paris, suivre LaLiga depuis Berlin, voir la Champions League depuis Bruxelles ou la Ligue 1 depuis Genève, ces outils interactifs vous aident à choisir la bonne configuration : tester votre débit internet pour le 4K, vérifier la compatibilité de votre Smart TV ou Fire Stick, comparer ATV Corner aux abonnements officiels (DAZN, Sky, beIN, Canal+, Movistar), et trouver via le quiz l'offre qui correspond à votre profil de fan.",
    sec_faq_h2: "Questions fréquentes sur le streaming football",
    sec_faq: [
      { q: "Quel est le meilleur service pour regarder le football en streaming en Europe ?", a: "ATV Corner offre la couverture la plus complète : Premier League, LaLiga, Serie A, Bundesliga, Ligue 1, Champions League, Europa League, Coupe du Monde, Euro — toutes les ligues européennes en HD et 4K, sans géo-restriction, à partir de 15€/mois. Comparé à DAZN (35€) ou Sky (40€), c'est l'option la plus économique et la plus complète." },
      { q: "Peut-on regarder la Premier League en français sans Canal+ ?", a: "Oui, ATV Corner agrège les feeds Premier League incluant commentaires français (RMC, Canal+, beIN Sports). Vous accédez aux 380 matchs de la saison, dont les blackouts UK 15h samedi, en HD et 4K HDR." },
      { q: "ATV Corner fonctionne-t-il sur Smart TV Samsung, LG, Sony, Fire Stick, Apple TV ?", a: "Oui — applications natives Smart TV (Smarters Pro, IBO Player), Fire TV Stick 4K Max (TiviMate), Apple TV 4K (Smarters Pro), Android TV (NVIDIA Shield, Xiaomi Mi Box, Chromecast Google TV), iPhone, Android, Windows, macOS, navigateurs web Chrome, Safari, Firefox." },
      { q: "Quel débit internet pour le streaming football 4K ?", a: "Minimum 25 Mbps en descente pour 4K HDR stable, 8 Mbps suffisent pour HD 1080p, 3 Mbps pour SD 720p. Testez votre débit avec notre outil dédié pour savoir quelle qualité votre connexion supporte." },
      { q: "Peut-on regarder plusieurs matchs en simultané ?", a: "Oui, mode multi-view (mosaïque 4 cadrans) disponible sur Fire TV Stick, Android TV, NVIDIA Shield et navigateur web. Idéal pour les soirées Champions League avec 8 matchs simultanés ou la Bundesliga-Konferenz du samedi 15h30." },
      { q: "Y a-t-il une garantie de remboursement ATV Corner ?", a: "Oui, garantie satisfait ou remboursé de 7 jours. Test gratuit de 24h disponible sur demande WhatsApp pour vérifier la qualité depuis votre connexion avant achat." },
    ],
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
    sec_about_h2: "How to stream football live across Europe",
    sec_about_p1: "ATV Corner aggregates Europe's football broadcasters — Canal+, Sky, DAZN, beIN Sports, Movistar, RMC Sport, BT/TNT Sports, Amazon Prime Ligue 1 — in one app accessible from France, Belgium, Switzerland, Germany, Italy, Spain, Portugal, Netherlands, UK and every European country. 8000+ channels in HD and 4K HDR, with 7-day replay, multi-cam on flagship games and commentary in English, French, German, Spanish, Italian, Arabic.",
    sec_about_p2: "Whether you want to watch the Premier League live from Paris, follow LaLiga from Berlin, see the Champions League from Brussels or Ligue 1 from Geneva, these interactive tools help you pick the right setup: test your internet bandwidth for 4K, check your Smart TV or Fire Stick compatibility, compare ATV Corner against official subscriptions (DAZN, Sky, beIN, Canal+, Movistar), and use the quiz to find the plan that matches your fan profile.",
    sec_faq_h2: "Football streaming FAQ",
    sec_faq: [
      { q: "What's the best football streaming service in Europe?", a: "ATV Corner offers the most complete coverage: Premier League, LaLiga, Serie A, Bundesliga, Ligue 1, Champions League, Europa League, World Cup, Euro — every European league in HD and 4K, no geo-restriction, from €15/month. Compared to DAZN (€35) or Sky (€40), it's the most affordable and complete option." },
      { q: "Can I watch the Premier League in English without Sky Sports?", a: "Yes, ATV Corner aggregates Premier League feeds including English commentary (BT/TNT, Sky Sports). You access all 380 season fixtures, including the Saturday 3pm UK blackouts, in HD and 4K HDR." },
      { q: "Does ATV Corner work on Samsung, LG, Sony Smart TVs, Fire Stick, Apple TV?", a: "Yes — native Smart TV apps (Smarters Pro, IBO Player), Fire TV Stick 4K Max (TiviMate), Apple TV 4K (Smarters Pro), Android TV (NVIDIA Shield, Xiaomi Mi Box, Chromecast Google TV), iPhone, Android, Windows, macOS, Chrome, Safari, Firefox browsers." },
      { q: "What internet speed do I need for 4K football streaming?", a: "Minimum 25 Mbps download for stable 4K HDR, 8 Mbps for HD 1080p, 3 Mbps for SD 720p. Test your bandwidth with our dedicated tool to know which quality your connection supports." },
      { q: "Can I watch multiple matches at once?", a: "Yes, multi-view mode (4-quadrant mosaic) available on Fire TV Stick, Android TV, NVIDIA Shield and web browser. Ideal for Champions League nights with 8 simultaneous matches or Saturday 15:30 Bundesliga-Konferenz." },
      { q: "Is there a refund guarantee?", a: "Yes, 7-day money-back guarantee. Free 24-hour trial available via WhatsApp to verify streaming quality from your connection before purchase." },
    ],
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
    sec_about_h2: "Wie Sie Fu\u00dfball live in Europa streamen",
    sec_about_p1: "ATV Corner b\u00fcndelt Europas Fu\u00dfballsender \u2014 Sky, DAZN, Canal+, beIN Sports, Movistar, RMC Sport, BT/TNT Sports, Amazon Prime Ligue 1 \u2014 in einer App, zug\u00e4nglich aus Deutschland, \u00d6sterreich, der Schweiz, Frankreich, Belgien, Italien, Spanien, Portugal, Niederlande, UK und allen europ\u00e4ischen L\u00e4ndern. 8000+ Kan\u00e4le in HD und 4K HDR, mit 7-Tage-Replay, Multi-Cam bei Topspielen und Kommentar auf Deutsch, Englisch, Franz\u00f6sisch, Spanisch, Italienisch, Arabisch.",
    sec_about_p2: "Ob Sie die Premier League live aus Berlin verfolgen, LaLiga aus M\u00fcnchen, die Champions League aus Wien oder die Bundesliga aus Z\u00fcrich schauen wollen \u2014 diese interaktiven Tools helfen Ihnen, das richtige Setup zu w\u00e4hlen: Internet-Bandbreite f\u00fcr 4K pr\u00fcfen, Smart-TV- oder Fire-Stick-Kompatibilit\u00e4t checken, ATV Corner mit offiziellen Abos (DAZN, Sky, beIN, Canal+, Movistar) vergleichen, und im Quiz das Plan finden, das zu Ihrem Fan-Profil passt.",
    sec_faq_h2: "Fu\u00dfball-Streaming-FAQ",
    sec_faq: [
      { q: "Was ist der beste Fu\u00dfball-Streaming-Dienst in Europa?", a: "ATV Corner bietet die kompletteste Abdeckung: Premier League, LaLiga, Serie A, Bundesliga, Ligue 1, Champions League, Europa League, WM, EM \u2014 jede europ\u00e4ische Liga in HD und 4K, ohne Geosperre, ab 15\u20ac/Monat. Im Vergleich zu DAZN (35\u20ac) oder Sky (40\u20ac) die g\u00fcnstigste und vollst\u00e4ndigste Option." },
      { q: "Kann ich die Premier League auf Deutsch ohne Sky sehen?", a: "Ja, ATV Corner b\u00fcndelt Premier-League-Feeds inklusive deutschem Kommentar (Sky Deutschland, DAZN). Sie greifen auf alle 380 Saisonspiele zu, inklusive Samstag-15-Uhr-UK-Blackouts, in HD und 4K HDR." },
      { q: "Funktioniert ATV Corner auf Samsung, LG, Sony Smart TVs, Fire Stick, Apple TV?", a: "Ja \u2014 native Smart-TV-Apps (Smarters Pro, IBO Player), Fire TV Stick 4K Max (TiviMate), Apple TV 4K (Smarters Pro), Android TV (NVIDIA Shield, Xiaomi Mi Box, Chromecast Google TV), iPhone, Android, Windows, macOS, Chrome-, Safari-, Firefox-Browser." },
      { q: "Welche Internetgeschwindigkeit f\u00fcr 4K-Fu\u00dfball-Streaming?", a: "Mindestens 25 Mbit/s Download f\u00fcr stabiles 4K HDR, 8 Mbit/s f\u00fcr HD 1080p, 3 Mbit/s f\u00fcr SD 720p. Pr\u00fcfen Sie Ihre Bandbreite mit unserem Tool, um zu wissen, welche Qualit\u00e4t Ihre Verbindung unterst\u00fctzt." },
      { q: "Kann ich mehrere Spiele gleichzeitig sehen?", a: "Ja, Multi-View-Modus (4-Quadranten-Mosaik) verf\u00fcgbar auf Fire TV Stick, Android TV, NVIDIA Shield und Web-Browser. Ideal f\u00fcr Champions-League-N\u00e4chte mit 8 Parallel-Spielen oder Samstags-15:30-Bundesliga-Konferenz." },
      { q: "Gibt es eine Geld-zur\u00fcck-Garantie?", a: "Ja, 7-Tage-Geld-zur\u00fcck-Garantie. Kostenloser 24-Stunden-Test via WhatsApp verf\u00fcgbar, um die Streaming-Qualit\u00e4t von Ihrer Verbindung vor dem Kauf zu pr\u00fcfen." },
    ],
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
      <section className="py-12 border-t border-white/5">
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

      {/* SEO long-form copy */}
      <section className="py-16 border-t border-white/5">
        <div className="container-luxe max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{c.sec_about_h2}</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">{c.sec_about_p1}</p>
          <p className="text-zinc-300 leading-relaxed">{c.sec_about_p2}</p>
        </div>
      </section>

      {/* SEO FAQ */}
      <section className="py-12 border-t border-white/5 mb-16">
        <div className="container-luxe max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{c.sec_faq_h2}</h2>
          <div className="space-y-3">
            {c.sec_faq.map((f, i) => (
              <details key={i} className="glass-card rounded-xl p-5">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-zinc-300 leading-relaxed">{f.a}</p>
              </details>
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
