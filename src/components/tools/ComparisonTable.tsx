import Link from "next/link";
import type { Locale } from "@/i18n";
import type { ComparisonProvider } from "@/data/tools/types";
import { whatsappUrl } from "@/lib/site";
import { pick } from "@/i18n/pick";

const COPY = {
  fr: {
    h1: "Meilleur abonnement streaming football en Europe — Comparatif 2026",
    intro: "ATV Corner vs DAZN, Sky Sports, beIN, Canal+, Movistar+. Comparaison honnête sur le prix, les championnats couverts, la qualité d'image, les appareils et la disponibilité par pays.",
    cols: { name: "Service", price: "Prix/mois", leagues: "Championnats", quality: "Qualité", devices: "Appareils", countries: "Pays", support: "Support" },
    intent: "Pourquoi ATV Corner gagne",
    intentBody: "Un seul abonnement à 15€ pour TOUS les championnats européens — Premier League, Champions League, LaLiga, Serie A, Bundesliga, Ligue 1, Europa League. Aucun concurrent ne fait l'équivalent sous 70€/mois.",
    cta: "Activer ATV Corner",
    faq: "Questions fréquentes",
    faqItems: [
      { q: "ATV Corner est-il vraiment moins cher que DAZN ?", a: "Oui : 15€/mois contre 35€ chez DAZN, pour 6× plus de championnats couverts. Comparaison de mai 2026, vérifiable sur les sites officiels." },
      { q: "Quel concurrent offre le plus de championnats ?", a: "Avec 50+ championnats internationaux, ATV Corner est le plus large. DAZN couvre ~8 ligues, Sky ~6, beIN ~10. Aucun ne dépasse 15 ligues pour le sport." },
      { q: "Tous les concurrents sont-ils accessibles dans toute l'Europe ?", a: "Non. Movistar+ : Espagne uniquement. Canal+ Sport : France/Belgique/Suisse. Sky Sports : UK/DE/IT. ATV Corner : partout en Europe." },
      { q: "Quelle est la différence entre IPTV et OTT premium ?", a: "OTT premium désigne les services type Netflix/DAZN avec apps officielles. IPTV désigne le protocole de streaming qui peut agréger plusieurs sources. ATV Corner combine les deux : qualité OTT + couverture IPTV." },
    ],
  },
  en: {
    h1: "Best Football Streaming Service in Europe — 2026 Comparison",
    intro: "ATV Corner vs DAZN, Sky Sports, beIN, Canal+, Movistar+. Honest comparison on price, leagues covered, picture quality, devices, and country availability.",
    cols: { name: "Service", price: "Price/mo", leagues: "Leagues", quality: "Quality", devices: "Devices", countries: "Countries", support: "Support" },
    intent: "Why ATV Corner wins",
    intentBody: "One €15 subscription for EVERY European league — Premier League, Champions League, LaLiga, Serie A, Bundesliga, Ligue 1, Europa League. No competitor delivers the same package under €70/month.",
    cta: "Activate ATV Corner",
    faq: "Frequently asked questions",
    faqItems: [
      { q: "Is ATV Corner really cheaper than DAZN?", a: "Yes: €15/month vs €35 at DAZN, for 6× more league coverage. Comparison from May 2026, verifiable on each provider's site." },
      { q: "Which competitor offers the most leagues?", a: "With 50+ international leagues, ATV Corner is the broadest. DAZN covers ~8 leagues, Sky ~6, beIN ~10. None of the others exceeds 15 sport leagues." },
      { q: "Are all competitors accessible everywhere in Europe?", a: "No. Movistar+: Spain only. Canal+ Sport: France/Belgium/Switzerland. Sky Sports: UK/DE/IT. ATV Corner: Europe-wide." },
      { q: "What's the difference between IPTV and premium OTT?", a: "Premium OTT means services like Netflix/DAZN with official apps. IPTV is the streaming protocol that can aggregate multiple sources. ATV Corner combines both: OTT quality + IPTV coverage." },
    ],
  },
  de: {
    h1: "Bester Fußball-Streaming-Dienst in Europa — Vergleich 2026",
    intro: "ATV Corner gegen DAZN, Sky Sports, beIN, Canal+, Movistar+. Ehrlicher Vergleich zu Preis, Ligen, Bildqualität, Geräten und Länderverfügbarkeit.",
    cols: { name: "Dienst", price: "Preis/Mon.", leagues: "Ligen", quality: "Qualität", devices: "Geräte", countries: "Länder", support: "Support" },
    intent: "Warum ATV Corner gewinnt",
    intentBody: "Ein einziges 15€-Abo für JEDE europäische Liga — Premier League, Champions League, LaLiga, Serie A, Bundesliga, Ligue 1, Europa League. Kein Wettbewerber liefert dasselbe Paket unter 70€/Monat.",
    cta: "ATV Corner aktivieren",
    faq: "Häufige Fragen",
    faqItems: [
      { q: "Ist ATV Corner wirklich günstiger als DAZN?", a: "Ja: 15€/Monat statt 35€ bei DAZN, für 6× mehr Liga-Abdeckung. Vergleich Mai 2026, prüfbar auf den Anbieter-Websites." },
      { q: "Welcher Wettbewerber bietet die meisten Ligen?", a: "Mit 50+ internationalen Ligen ist ATV Corner am breitesten. DAZN ca. 8, Sky ca. 6, beIN ca. 10. Kein anderer überschreitet 15 Sport-Ligen." },
      { q: "Sind alle Wettbewerber europaweit zugänglich?", a: "Nein. Movistar+: nur Spanien. Canal+ Sport: Frankreich/Belgien/Schweiz. Sky Sports: UK/DE/IT. ATV Corner: europaweit." },
      { q: "Was ist der Unterschied zwischen IPTV und Premium-OTT?", a: "Premium-OTT meint Dienste wie Netflix/DAZN mit offiziellen Apps. IPTV ist das Streaming-Protokoll, das mehrere Quellen bündeln kann. ATV Corner kombiniert beides: OTT-Qualität plus IPTV-Abdeckung." },
    ],
  },
  es: {
    h1: "Mejor servicio de fútbol en streaming en Europa — comparativa 2026",
    intro: "ATV Corner frente a DAZN, Sky Sports, beIN, Canal+ y Movistar+. Comparativa honesta de precio, ligas, calidad de imagen, dispositivos y disponibilidad por país.",
    cols: { name: "Servicio", price: "Precio/mes", leagues: "Ligas", quality: "Calidad", devices: "Dispositivos", countries: "Países", support: "Soporte" },
    intent: "Por qué gana ATV Corner",
    intentBody: "Una sola suscripción de 15 € para TODAS las ligas europeas: LaLiga, Premier League, Champions League, Serie A, Bundesliga, Ligue 1 y Europa League. Ningún competidor ofrece el mismo paquete por debajo de 70 €/mes.",
    cta: "Activar ATV Corner",
    faq: "Preguntas frecuentes",
    faqItems: [
      { q: "¿Es ATV Corner realmente más barato que DAZN?", a: "Sí: 15 €/mes frente a 35 € de DAZN, con seis veces más cobertura de ligas. Comparación de mayo de 2026, verificable en las webs de cada proveedor." },
      { q: "¿Qué competidor ofrece más ligas?", a: "Con más de 50 ligas internacionales, ATV Corner es el más amplio. DAZN ronda las 8, Sky las 6 y beIN las 10. Ningún otro supera las 15 ligas deportivas." },
      { q: "¿Son todos los competidores accesibles en toda Europa?", a: "No. Movistar+: solo España. Canal+ Sport: Francia, Bélgica y Suiza. Sky Sports: Reino Unido, Alemania e Italia. ATV Corner: toda Europa." },
      { q: "¿Cuál es la diferencia entre IPTV y OTT premium?", a: "OTT premium designa servicios como Netflix o DAZN con aplicaciones oficiales. El IPTV es el protocolo de streaming que puede agrupar varias fuentes. ATV Corner combina ambas cosas: calidad OTT y cobertura IPTV." },
    ],
  },
  it: {
    h1: "Miglior servizio di calcio in streaming in Europa — confronto 2026",
    intro: "ATV Corner contro DAZN, Sky Sports, beIN, Canal+ e Movistar+. Confronto onesto su prezzo, campionati, qualità dell'immagine, dispositivi e disponibilità per paese.",
    cols: { name: "Servizio", price: "Prezzo/mese", leagues: "Campionati", quality: "Qualità", devices: "Dispositivi", countries: "Paesi", support: "Assistenza" },
    intent: "Perché vince ATV Corner",
    intentBody: "Un unico abbonamento da 15 € per TUTTI i campionati europei: Serie A, Premier League, Champions League, LaLiga, Bundesliga, Ligue 1 ed Europa League. Nessun concorrente offre lo stesso pacchetto sotto i 70 €/mese.",
    cta: "Attiva ATV Corner",
    faq: "Domande frequenti",
    faqItems: [
      { q: "ATV Corner è davvero più economico di DAZN?", a: "Sì: 15 €/mese contro i 35 € di DAZN, con sei volte più copertura di campionati. Confronto di maggio 2026, verificabile sui siti dei singoli fornitori." },
      { q: "Quale concorrente offre più campionati?", a: "Con oltre 50 campionati internazionali, ATV Corner è il più ampio. DAZN si aggira sugli 8, Sky sui 6 e beIN sui 10. Nessun altro supera i 15 campionati sportivi." },
      { q: "Tutti i concorrenti sono accessibili in tutta Europa?", a: "No. Movistar+: solo Spagna. Canal+ Sport: Francia, Belgio e Svizzera. Sky Sports: Regno Unito, Germania e Italia. ATV Corner: tutta Europa." },
      { q: "Qual è la differenza tra IPTV e OTT premium?", a: "OTT premium indica servizi come Netflix o DAZN con app ufficiali. L'IPTV è il protocollo di streaming che può riunire più sorgenti. ATV Corner combina entrambe le cose: qualità OTT e copertura IPTV." },
    ],
  },
};

export function ComparisonTable({ lang, providers }: { lang: Locale; providers: ComparisonProvider[] }) {
  const c = pick(COPY, lang);
  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <section className="hero-gradient pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-luxe text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-6">
            TOOLS · COMPARISON
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{c.h1}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-zinc-300">{c.intro}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-zinc-400 border-b border-white/10">
                <th className="py-3 pr-4 font-semibold">{c.cols.name}</th>
                <th className="py-3 pr-4 font-semibold">{c.cols.price}</th>
                <th className="py-3 pr-4 font-semibold">{c.cols.leagues}</th>
                <th className="py-3 pr-4 font-semibold">{c.cols.quality}</th>
                <th className="py-3 pr-4 font-semibold">{c.cols.devices}</th>
                <th className="py-3 pr-4 font-semibold">{c.cols.countries}</th>
                <th className="py-3 pr-4 font-semibold">{c.cols.support}</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p) => (
                <tr
                  key={p.id}
                  className={`border-b border-white/5 ${p.isAtv ? "bg-emerald-400/5" : ""}`}
                >
                  <td className="py-4 pr-4">
                    <div className="font-bold">{p.name}</div>
                    {p.isAtv && p.highlight && (
                      <div className="text-xs text-emerald-300 mt-0.5">{pick(p.highlight, lang)}</div>
                    )}
                  </td>
                  <td className="py-4 pr-4 font-bold text-emerald-300 whitespace-nowrap">
                    €{p.monthlyPrice}
                  </td>
                  <td className="py-4 pr-4">{p.leagues}+</td>
                  <td className="py-4 pr-4 whitespace-nowrap">{p.quality}</td>
                  <td className="py-4 pr-4 whitespace-nowrap">{p.devices}</td>
                  <td className="py-4 pr-4 whitespace-nowrap">{p.countries}</td>
                  <td className="py-4 pr-4">{p.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe max-w-3xl glass-card p-6 sm:p-8 rounded-2xl ring-1 ring-emerald-400/30">
          <h2 className="text-2xl font-bold text-emerald-300">{c.intent}</h2>
          <p className="mt-3 text-zinc-200 leading-relaxed">{c.intentBody}</p>
          <a
            href={whatsappUrl(undefined, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-full bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors"
          >
            {c.cta}
          </a>
          <Link
            href={`/${lang}/pricing`}
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 ml-3 rounded-full bg-white/5 ring-1 ring-white/10 font-semibold hover:bg-white/10 transition-colors"
          >
            Pricing →
          </Link>
        </div>
      </section>

      <section className="py-12 border-t border-white/5 mb-16">
        <div className="container-luxe max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{c.faq}</h2>
          <div className="space-y-3">
            {c.faqItems.map((f, i) => (
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
