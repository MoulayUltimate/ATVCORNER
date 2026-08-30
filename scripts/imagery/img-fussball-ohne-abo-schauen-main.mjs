import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 200, w: 320 },
  pill: { x: 440, y: 74 },
  grade: { slope: 1.08, intercept: -0.05, sat: 1.08 },
  str: {
    de: {
      title: "Fußball ohne drei Abos",
      pill: "Ein Zugang",
      cardTitle: "4.200 Sportkanäle, ab 5 €/Monat",
      lines: ["Bundesliga, Champions League und", "internationale Ligen in einem Zugang."],
    },
    en: {
      title: "Football without three subscriptions",
      pill: "One access",
      cardTitle: "4,200 sport channels, from $5/mo",
      lines: ["Domestic league, Champions League and", "international football in one access."],
    },
    fr: {
      title: "Le foot sans trois abonnements",
      pill: "Un seul accès",
      cardTitle: "4 200 chaînes sport, dès 5 €/mois",
      lines: ["Championnat, Champions League et", "football international en un accès."],
    },
    es: {
      title: "Fútbol sin tres abonos",
      pill: "Un solo acceso",
      cardTitle: "4.200 canales, desde 5 €/mes",
      lines: ["Liga nacional, Champions League y", "fútbol internacional en un acceso."],
    },
    it: {
      title: "Calcio senza tre abbonamenti",
      pill: "Un solo accesso",
      cardTitle: "4.200 canali sport, da 5 €/mese",
      lines: ["Campionato nazionale, Champions League e", "calcio internazionale in un accesso."],
    },
  },
});
