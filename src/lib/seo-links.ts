// Internal linking graph between the SEO landing ("buy") pages.
// Orphan/dead-end money pages don't get crawled or pass equity — every page
// here links to 3 semantically related siblings with a one-line reason.

import type { Locale } from "@/i18n";
import type { SeoPage } from "./seo-content";

type LinkCopy = { label: string; blurb: string };

const labels: Record<SeoPage, Partial<Record<Locale, LinkCopy>>> = {
  "iptv-subscription": {
    fr: { label: "Abonnement IPTV", blurb: "Formules 1 à 12 mois, dès 5 €/mois." },
    en: { label: "IPTV Subscription", blurb: "Plans from 1 to 12 months, from $5/mo." },
    de: { label: "IPTV Abonnement", blurb: "Laufzeiten 1 bis 12 Monate, ab 5 €/Monat." },
    es: { label: "Suscripción IPTV", blurb: "Planes de 1 a 12 meses, desde 5 €/mes." },
    it: { label: "Abbonamento IPTV", blurb: "Piani da 1 a 12 mesi, da 5 €/mese." },
  },
  "best-iptv-service": {
    fr: { label: "Meilleur service IPTV", blurb: "Comment choisir un fournisseur fiable." },
    en: { label: "Best IPTV Service", blurb: "How to pick a provider that holds up." },
    de: { label: "Bester IPTV Service", blurb: "So wählen Sie einen zuverlässigen Anbieter." },
    es: { label: "Mejor servicio IPTV", blurb: "Cómo elegir un proveedor fiable." },
    it: { label: "Miglior servizio IPTV", blurb: "Come scegliere un provider affidabile." },
  },
  "iptv-free-trial": {
    fr: { label: "Essai gratuit 24h", blurb: "Testez sans carte bancaire avant de payer." },
    en: { label: "24h Free Trial", blurb: "Test with no credit card before you pay." },
    de: { label: "24h Gratis-Test", blurb: "Ohne Kreditkarte testen, dann entscheiden." },
    es: { label: "Prueba gratis 24 h", blurb: "Pruébalo sin tarjeta antes de pagar." },
    it: { label: "Prova gratuita 24 h", blurb: "Provalo senza carta prima di pagare." },
  },
  "cable-tv-alternative": {
    fr: { label: "Alternative au câble", blurb: "Jusqu'à 90 % d'économie, sans engagement." },
    en: { label: "Cable TV Alternative", blurb: "Up to 90% savings, with no contract." },
    de: { label: "Kabel-Alternative", blurb: "Bis zu 90 % sparen, ohne Vertrag." },
    es: { label: "Alternativa al cable", blurb: "Hasta un 90 % de ahorro, sin permanencia." },
    it: { label: "Alternativa al cavo", blurb: "Fino al 90% di risparmio, senza vincoli." },
  },
  "iptv-firestick": {
    fr: { label: "IPTV Firestick", blurb: "Installation sur Fire TV Stick en 5 minutes." },
    en: { label: "IPTV Firestick", blurb: "Fire TV Stick setup in 5 minutes." },
    de: { label: "IPTV Firestick", blurb: "Fire TV Stick in 5 Minuten einrichten." },
    es: { label: "IPTV en Firestick", blurb: "Instalación en Fire TV Stick en 5 minutos." },
    it: { label: "IPTV su Firestick", blurb: "Installazione su Fire TV Stick in 5 minuti." },
  },
  "iptv-smarters-pro": {
    fr: { label: "IPTV Smarters Pro", blurb: "Configurer l'app avec vos identifiants." },
    en: { label: "IPTV Smarters Pro", blurb: "Set the app up with your login." },
    de: { label: "IPTV Smarters Pro", blurb: "Die App mit Ihren Zugangsdaten einrichten." },
    es: { label: "IPTV Smarters Pro", blurb: "Configura la app con tus credenciales." },
    it: { label: "IPTV Smarters Pro", blurb: "Configura l'app con le tue credenziali." },
  },
  "xtream-codes": {
    fr: { label: "Xtream Codes", blurb: "Host, identifiant, mot de passe expliqués." },
    en: { label: "Xtream Codes", blurb: "Host, username and password explained." },
    de: { label: "Xtream Codes", blurb: "Host, Benutzername und Passwort erklärt." },
    es: { label: "Xtream Codes", blurb: "Host, usuario y contraseña explicados." },
    it: { label: "Xtream Codes", blurb: "Host, nome utente e password spiegati." },
  },
  "m3u-playlist": {
    fr: { label: "Playlist M3U", blurb: "Le format universel pour VLC et Kodi." },
    en: { label: "M3U Playlist", blurb: "The universal format for VLC and Kodi." },
    de: { label: "M3U-Playlist", blurb: "Das universelle Format für VLC und Kodi." },
    es: { label: "Lista M3U", blurb: "El formato universal para VLC y Kodi." },
    it: { label: "Playlist M3U", blurb: "Il formato universale per VLC e Kodi." },
  },
  "iptv-premium": {
    fr: { label: "IPTV Premium", blurb: "Infrastructure Tier 1 et catalogue complet." },
    en: { label: "Premium IPTV", blurb: "Tier 1 infrastructure and the full catalog." },
    de: { label: "IPTV Premium", blurb: "Tier-1-Infrastruktur und voller Katalog." },
    es: { label: "IPTV Premium", blurb: "Infraestructura Tier 1 y catálogo completo." },
    it: { label: "IPTV Premium", blurb: "Infrastruttura Tier 1 e catalogo completo." },
  },
  "iptv-4k": {
    fr: { label: "IPTV 4K", blurb: "Ultra HD en direct, sans pixelisation." },
    en: { label: "4K IPTV", blurb: "Live Ultra HD with no pixelation." },
    de: { label: "IPTV 4K", blurb: "Live Ultra HD ohne Pixelierung." },
    es: { label: "IPTV 4K", blurb: "Ultra HD en directo, sin pixelado." },
    it: { label: "IPTV 4K", blurb: "Ultra HD in diretta, senza pixel." },
  },
  "iptv-8k": {
    fr: { label: "IPTV 8K", blurb: "Le niveau au-dessus, encodage HEVC." },
    en: { label: "8K IPTV", blurb: "The next tier up, HEVC encoded." },
    de: { label: "IPTV 8K", blurb: "Die nächste Stufe, HEVC-kodiert." },
    es: { label: "IPTV 8K", blurb: "Un nivel por encima, códec HEVC." },
    it: { label: "IPTV 8K", blurb: "Un livello superiore, codec HEVC." },
  },
  "iptv-sport": {
    fr: { label: "IPTV Sport", blurb: "Toutes les ligues en direct, chaque week-end." },
    en: { label: "IPTV Sport", blurb: "Every league live, every weekend." },
    de: { label: "IPTV Sport", blurb: "Alle Ligen live, jedes Wochenende." },
    es: { label: "IPTV Deportes", blurb: "Todas las ligas en directo, cada fin de semana." },
    it: { label: "IPTV Sport", blurb: "Tutti i campionati in diretta, ogni weekend." },
  },
  "iptv-deutschland": {
    fr: { label: "IPTV Allemagne", blurb: "Chaînes allemandes et Bundesliga en direct." },
    en: { label: "IPTV Germany", blurb: "German channels and Bundesliga live." },
    de: { label: "IPTV Deutschland", blurb: "Deutsche Sender und Bundesliga live." },
    es: { label: "IPTV Alemania", blurb: "Canales alemanes y Bundesliga en directo." },
    it: { label: "IPTV Germania", blurb: "Canali tedeschi e Bundesliga in diretta." },
  },
  "iptv-roku": {
    fr: { label: "IPTV sur Roku", blurb: "Installer l'IPTV sur un Roku en 5 minutes." },
    en: { label: "IPTV on Roku", blurb: "Set IPTV up on a Roku in 5 minutes." },
    de: { label: "IPTV auf Roku", blurb: "IPTV in 5 Minuten auf Roku einrichten." },
    es: { label: "IPTV en Roku", blurb: "Configura IPTV en un Roku en 5 minutos." },
    it: { label: "IPTV su Roku", blurb: "Configura l'IPTV su Roku in 5 minuti." },
  },
  "iptv-usa": {
    fr: { label: "IPTV USA", blurb: "Chaînes américaines, NFL et NBA en direct." },
    en: { label: "IPTV USA", blurb: "American networks, NFL and NBA live." },
    de: { label: "IPTV USA", blurb: "US-Sender, NFL und NBA live." },
    es: { label: "IPTV Estados Unidos", blurb: "Cadenas americanas, NFL y NBA en directo." },
    it: { label: "IPTV Stati Uniti", blurb: "Reti americane, NFL e NBA in diretta." },
  },
  "iptv-apple-tv": {
    fr: { label: "IPTV sur Apple TV", blurb: "Installation via l'App Store, sans jailbreak." },
    en: { label: "IPTV on Apple TV", blurb: "Installs from the App Store, no jailbreak." },
    de: { label: "IPTV auf Apple TV", blurb: "Installation über den App Store, ohne Jailbreak." },
    es: { label: "IPTV en Apple TV", blurb: "Se instala desde la App Store, sin jailbreak." },
    it: { label: "IPTV su Apple TV", blurb: "Si installa dall'App Store, senza jailbreak." },
  },
  "iptv-android-tv": {
    fr: { label: "IPTV sur Android TV", blurb: "Box, Shield ou Smart TV — le plus large choix d'apps." },
    en: { label: "IPTV on Android TV", blurb: "Box, Shield or Smart TV — the widest app choice." },
    de: { label: "IPTV auf Android TV", blurb: "Box, Shield oder Smart TV — größte App-Auswahl." },
    es: { label: "IPTV en Android TV", blurb: "Box, Shield o Smart TV: la mayor oferta de apps." },
    it: { label: "IPTV su Android TV", blurb: "Box, Shield o Smart TV: più app di tutti." },
  },
  "iptv-mag-box": {
    fr: { label: "IPTV pour MAG Box", blurb: "URL de portail et adresse MAC, sans application." },
    en: { label: "IPTV for MAG Box", blurb: "Portal URL and MAC address, no app needed." },
    de: { label: "IPTV für MAG Box", blurb: "Portal-URL und MAC-Adresse, ohne App." },
    es: { label: "IPTV para MAG Box", blurb: "URL de portal y dirección MAC, sin app." },
    it: { label: "IPTV per MAG Box", blurb: "URL del portale e indirizzo MAC, senza app." },
  },
  "iptv-canada": {
    fr: { label: "IPTV Canada", blurb: "LNH, NBA et chaînes bilingues en direct." },
    en: { label: "IPTV Canada", blurb: "NHL, NBA and bilingual channels live." },
    de: { label: "IPTV Kanada", blurb: "NHL, NBA und zweisprachige Sender live." },
    es: { label: "IPTV Canadá", blurb: "NHL, NBA y canales bilingües en directo." },
    it: { label: "IPTV Canada", blurb: "NHL, NBA e canali bilingui in diretta." },
  },
  "iptv-uk": {
    fr: { label: "IPTV Royaume-Uni", blurb: "Premier League et chaînes britanniques." },
    en: { label: "IPTV UK", blurb: "Premier League and British channels." },
    de: { label: "IPTV UK", blurb: "Premier League und britische Sender." },
    es: { label: "IPTV Reino Unido", blurb: "Premier League y canales británicos." },
    it: { label: "IPTV Regno Unito", blurb: "Premier League e canali britannici." },
  },
  "iptv-france": {
    fr: { label: "IPTV France", blurb: "Ligue 1, chaînes françaises et monde." },
    en: { label: "IPTV France", blurb: "Ligue 1 and French channels live." },
    de: { label: "IPTV Frankreich", blurb: "Ligue 1 und französische Sender." },
    es: { label: "IPTV Francia", blurb: "Ligue 1, canales franceses e internacionales." },
    it: { label: "IPTV Francia", blurb: "Ligue 1, canali francesi e internazionali." },
  },
  "best-iptv-alternatives": {
    fr: { label: "Alternatives IPTV", blurb: "Comparatif face aux autres services." },
    en: { label: "IPTV Alternatives", blurb: "How we compare to other services." },
    de: { label: "IPTV Alternativen", blurb: "Vergleich mit anderen Diensten." },
    es: { label: "Alternativas IPTV", blurb: "Comparativa frente a otros servicios." },
    it: { label: "Alternative IPTV", blurb: "Confronto con gli altri servizi." },
  },
  "iptv-espana": {
    fr: { label: "IPTV Espagne", blurb: "LaLiga, chaînes espagnoles et monde." },
    en: { label: "IPTV Spain", blurb: "LaLiga and Spanish channels live." },
    de: { label: "IPTV Spanien", blurb: "LaLiga und spanische Sender." },
    es: { label: "IPTV España", blurb: "LaLiga, canales españoles e internacionales." },
    it: { label: "IPTV Spagna", blurb: "LaLiga, canali spagnoli e internazionali." },
  },
  "iptv-italia": {
    fr: { label: "IPTV Italie", blurb: "Serie A, chaînes italiennes et monde." },
    en: { label: "IPTV Italy", blurb: "Serie A and Italian channels live." },
    de: { label: "IPTV Italien", blurb: "Serie A und italienische Sender." },
    es: { label: "IPTV Italia", blurb: "Serie A, canales italianos e internacionales." },
    it: { label: "IPTV Italia", blurb: "Serie A, canali italiani e internazionali." },
  },
};

/**
 * Related-page graph. Each entry is a small cluster the visitor plausibly wants
 * next: buy pages point to buy pages, setup pages point to setup pages, and
 * every cluster keeps at least one route back to a conversion page.
 */
const related: Record<SeoPage, SeoPage[]> = {
  "iptv-subscription": ["best-iptv-service", "iptv-free-trial", "cable-tv-alternative"],
  "best-iptv-service": ["iptv-subscription", "best-iptv-alternatives", "iptv-free-trial"],
  "iptv-free-trial": ["iptv-subscription", "best-iptv-service", "iptv-premium"],
  "cable-tv-alternative": ["iptv-subscription", "iptv-sport", "best-iptv-service"],
  "iptv-firestick": ["iptv-roku", "iptv-smarters-pro", "iptv-subscription"],
  "iptv-smarters-pro": ["iptv-firestick", "xtream-codes", "m3u-playlist"],
  "xtream-codes": ["m3u-playlist", "iptv-smarters-pro", "iptv-firestick"],
  "m3u-playlist": ["xtream-codes", "iptv-smarters-pro", "iptv-subscription"],
  "iptv-premium": ["iptv-4k", "iptv-8k", "best-iptv-service"],
  "iptv-4k": ["iptv-8k", "iptv-premium", "iptv-sport"],
  "iptv-8k": ["iptv-4k", "iptv-premium", "iptv-subscription"],
  "iptv-sport": ["iptv-4k", "iptv-deutschland", "iptv-subscription"],
  "best-iptv-alternatives": ["best-iptv-service", "cable-tv-alternative", "iptv-subscription"],
  "iptv-deutschland": ["iptv-subscription", "iptv-sport", "iptv-free-trial"],
  "iptv-roku": ["iptv-firestick", "iptv-smarters-pro", "iptv-subscription"],
  "iptv-usa": ["iptv-canada", "iptv-sport", "iptv-subscription"],
  "iptv-apple-tv": ["iptv-android-tv", "iptv-smarters-pro", "iptv-subscription"],
  "iptv-android-tv": ["iptv-apple-tv", "iptv-firestick", "iptv-smarters-pro"],
  "iptv-mag-box": ["xtream-codes", "iptv-android-tv", "iptv-subscription"],
  "iptv-canada": ["iptv-usa", "iptv-sport", "iptv-subscription"],
  "iptv-uk": ["iptv-sport", "iptv-subscription", "cable-tv-alternative"],
  "iptv-france": ["iptv-sport", "iptv-subscription", "iptv-deutschland"],
  "iptv-espana": ["iptv-sport", "iptv-subscription", "iptv-free-trial"],
  "iptv-italia": ["iptv-sport", "iptv-subscription", "iptv-free-trial"],
};

export type RelatedLink = { slug: SeoPage; label: string; blurb: string };

export function getRelatedPages(page: SeoPage, locale: Locale): RelatedLink[] {
  return (related[page] ?? []).map((slug) => {
    const byLocale = labels[slug];
    const copy = byLocale[locale] ?? byLocale.en ?? byLocale.fr ?? Object.values(byLocale)[0]!;
    return { slug, label: copy.label, blurb: copy.blurb };
  });
}

export const relatedHeading: Partial<Record<Locale, string>> = {
  fr: "À découvrir aussi",
  en: "Explore next",
  de: "Das könnte Sie auch interessieren",
  es: "También te puede interesar",
  it: "Potrebbe interessarti anche",
};
