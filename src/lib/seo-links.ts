// Internal linking graph between the SEO landing ("buy") pages.
// Orphan/dead-end money pages don't get crawled or pass equity — every page
// here links to 3 semantically related siblings with a one-line reason.

import type { Locale } from "@/i18n";
import type { SeoPage } from "./seo-content";

type LinkCopy = { label: string; blurb: string };

const labels: Record<SeoPage, Record<Locale, LinkCopy>> = {
  "iptv-subscription": {
    fr: { label: "Abonnement IPTV", blurb: "Formules 1 à 12 mois, dès 5 €/mois." },
    en: { label: "IPTV Subscription", blurb: "Plans from 1 to 12 months, from $5/mo." },
    de: { label: "IPTV Abonnement", blurb: "Laufzeiten 1 bis 12 Monate, ab 5 €/Monat." },
  },
  "best-iptv-service": {
    fr: { label: "Meilleur service IPTV", blurb: "Comment choisir un fournisseur fiable." },
    en: { label: "Best IPTV Service", blurb: "How to pick a provider that holds up." },
    de: { label: "Bester IPTV Service", blurb: "So wählen Sie einen zuverlässigen Anbieter." },
  },
  "iptv-free-trial": {
    fr: { label: "Essai gratuit 24h", blurb: "Testez sans carte bancaire avant de payer." },
    en: { label: "24h Free Trial", blurb: "Test with no credit card before you pay." },
    de: { label: "24h Gratis-Test", blurb: "Ohne Kreditkarte testen, dann entscheiden." },
  },
  "cable-tv-alternative": {
    fr: { label: "Alternative au câble", blurb: "Jusqu'à 90 % d'économie, sans engagement." },
    en: { label: "Cable TV Alternative", blurb: "Up to 90% savings, with no contract." },
    de: { label: "Kabel-Alternative", blurb: "Bis zu 90 % sparen, ohne Vertrag." },
  },
  "iptv-firestick": {
    fr: { label: "IPTV Firestick", blurb: "Installation sur Fire TV Stick en 5 minutes." },
    en: { label: "IPTV Firestick", blurb: "Fire TV Stick setup in 5 minutes." },
    de: { label: "IPTV Firestick", blurb: "Fire TV Stick in 5 Minuten einrichten." },
  },
  "iptv-smarters-pro": {
    fr: { label: "IPTV Smarters Pro", blurb: "Configurer l'app avec vos identifiants." },
    en: { label: "IPTV Smarters Pro", blurb: "Set the app up with your login." },
    de: { label: "IPTV Smarters Pro", blurb: "Die App mit Ihren Zugangsdaten einrichten." },
  },
  "xtream-codes": {
    fr: { label: "Xtream Codes", blurb: "Host, identifiant, mot de passe expliqués." },
    en: { label: "Xtream Codes", blurb: "Host, username and password explained." },
    de: { label: "Xtream Codes", blurb: "Host, Benutzername und Passwort erklärt." },
  },
  "m3u-playlist": {
    fr: { label: "Playlist M3U", blurb: "Le format universel pour VLC et Kodi." },
    en: { label: "M3U Playlist", blurb: "The universal format for VLC and Kodi." },
    de: { label: "M3U-Playlist", blurb: "Das universelle Format für VLC und Kodi." },
  },
  "iptv-premium": {
    fr: { label: "IPTV Premium", blurb: "Infrastructure Tier 1 et catalogue complet." },
    en: { label: "Premium IPTV", blurb: "Tier 1 infrastructure and the full catalog." },
    de: { label: "IPTV Premium", blurb: "Tier-1-Infrastruktur und voller Katalog." },
  },
  "iptv-4k": {
    fr: { label: "IPTV 4K", blurb: "Ultra HD en direct, sans pixelisation." },
    en: { label: "4K IPTV", blurb: "Live Ultra HD with no pixelation." },
    de: { label: "IPTV 4K", blurb: "Live Ultra HD ohne Pixelierung." },
  },
  "iptv-8k": {
    fr: { label: "IPTV 8K", blurb: "Le niveau au-dessus, encodage HEVC." },
    en: { label: "8K IPTV", blurb: "The next tier up, HEVC encoded." },
    de: { label: "IPTV 8K", blurb: "Die nächste Stufe, HEVC-kodiert." },
  },
  "iptv-sport": {
    fr: { label: "IPTV Sport", blurb: "Toutes les ligues en direct, chaque week-end." },
    en: { label: "IPTV Sport", blurb: "Every league live, every weekend." },
    de: { label: "IPTV Sport", blurb: "Alle Ligen live, jedes Wochenende." },
  },
  "iptv-deutschland": {
    fr: { label: "IPTV Allemagne", blurb: "Chaînes allemandes et Bundesliga en direct." },
    en: { label: "IPTV Germany", blurb: "German channels and Bundesliga live." },
    de: { label: "IPTV Deutschland", blurb: "Deutsche Sender und Bundesliga live." },
  },
  "iptv-roku": {
    fr: { label: "IPTV sur Roku", blurb: "Installer l'IPTV sur un Roku en 5 minutes." },
    en: { label: "IPTV on Roku", blurb: "Set IPTV up on a Roku in 5 minutes." },
    de: { label: "IPTV auf Roku", blurb: "IPTV in 5 Minuten auf Roku einrichten." },
  },
  "iptv-usa": {
    fr: { label: "IPTV USA", blurb: "Chaînes américaines, NFL et NBA en direct." },
    en: { label: "IPTV USA", blurb: "American networks, NFL and NBA live." },
    de: { label: "IPTV USA", blurb: "US-Sender, NFL und NBA live." },
  },
  "iptv-apple-tv": {
    fr: { label: "IPTV sur Apple TV", blurb: "Installation via l'App Store, sans jailbreak." },
    en: { label: "IPTV on Apple TV", blurb: "Installs from the App Store, no jailbreak." },
    de: { label: "IPTV auf Apple TV", blurb: "Installation über den App Store, ohne Jailbreak." },
  },
  "iptv-android-tv": {
    fr: { label: "IPTV sur Android TV", blurb: "Box, Shield ou Smart TV — le plus large choix d'apps." },
    en: { label: "IPTV on Android TV", blurb: "Box, Shield or Smart TV — the widest app choice." },
    de: { label: "IPTV auf Android TV", blurb: "Box, Shield oder Smart TV — größte App-Auswahl." },
  },
  "iptv-mag-box": {
    fr: { label: "IPTV pour MAG Box", blurb: "URL de portail et adresse MAC, sans application." },
    en: { label: "IPTV for MAG Box", blurb: "Portal URL and MAC address, no app needed." },
    de: { label: "IPTV für MAG Box", blurb: "Portal-URL und MAC-Adresse, ohne App." },
  },
  "iptv-canada": {
    fr: { label: "IPTV Canada", blurb: "LNH, NBA et chaînes bilingues en direct." },
    en: { label: "IPTV Canada", blurb: "NHL, NBA and bilingual channels live." },
    de: { label: "IPTV Kanada", blurb: "NHL, NBA und zweisprachige Sender live." },
  },
  "iptv-uk": {
    fr: { label: "IPTV Royaume-Uni", blurb: "Premier League et chaînes britanniques." },
    en: { label: "IPTV UK", blurb: "Premier League and British channels." },
    de: { label: "IPTV UK", blurb: "Premier League und britische Sender." },
  },
  "best-iptv-alternatives": {
    fr: { label: "Alternatives IPTV", blurb: "Comparatif face aux autres services." },
    en: { label: "IPTV Alternatives", blurb: "How we compare to other services." },
    de: { label: "IPTV Alternativen", blurb: "Vergleich mit anderen Diensten." },
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
};

export type RelatedLink = { slug: SeoPage; label: string; blurb: string };

export function getRelatedPages(page: SeoPage, locale: Locale): RelatedLink[] {
  return (related[page] ?? []).map((slug) => ({
    slug,
    label: labels[slug][locale].label,
    blurb: labels[slug][locale].blurb,
  }));
}

export const relatedHeading: Record<Locale, string> = {
  fr: "À découvrir aussi",
  en: "Explore next",
  de: "Das könnte Sie auch interessieren",
};
