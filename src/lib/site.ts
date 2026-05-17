export const siteConfig = {
  name: "ATV Corner",
  tagline: "Meilleur Abonnement de Streaming en Europe",
  shortDesc:
    "Profitez de plus de 66 000 chaînes internationales en 4K/8K. Sports en direct, films et séries illimités avec une stabilité exceptionnelle.",
  url: "https://atvcorner.com",
  locale: "fr_FR",
  defaultLanguage: "fr",
  whatsapp: {
    // E.164 without leading + (UK number)
    number: "447796630011",
    text: "Hi, I want to buy an IPTV subscription from ATV Corner. Please send me the plans and payment methods.",
  },
  email: "support@atvcorner.com",
  social: {
    facebook: "https://facebook.com/atvcorner",
    instagram: "https://instagram.com/atvcorner",
    telegram: "https://t.me/atvcorner",
  },
  brand: {
    headline: "Meilleur Abonnement de Streaming en Europe",
    valueProps: ["8K Ultra HD", "Zéro coupure", "Support 24/7"],
  },
};

export function whatsappUrl(message?: string) {
  const msg = encodeURIComponent(message ?? siteConfig.whatsapp.text);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/channels", label: "Chaînes & VOD" },
  { href: "/setup", label: "Installation" },
  { href: "/contact", label: "Support" },
];
