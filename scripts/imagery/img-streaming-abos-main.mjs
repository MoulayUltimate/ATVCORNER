// MAIN — the subscription stack. Base: b4xDJk0g7so (man reviewing at a laptop).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 52, w: 336 },
  pill: null,
  grade: { slope: 1.06, intercept: -0.14, sat: 1.02 },
  str: {
    de: { title: "Zu viele Streaming-Abos?", cardTitle: "40–100 € im Monat, verteilt",
      lines: ["Vier kleine Abbuchungen fallen nicht auf —", "die Jahressumme dagegen schon."] },
    en: { title: "Too many streaming subscriptions?", cardTitle: "$45–110 a month, spread out",
      lines: ["Four small charges go unnoticed —", "the yearly total does not."] },
    fr: { title: "Trop d'abonnements streaming ?", cardTitle: "40–100 € par mois, dispersés",
      lines: ["Quatre petits prélèvements passent inaperçus —", "le total annuel, beaucoup moins."] },
    es: {
      title: "¿Demasiadas suscripciones de streaming?",
      cardTitle: "40-80 € al mes, repartidos",
      lines: ["Cuatro cargos pequeños pasan desapercibidos —", "el total anual, no."],
    },
    it: {
      title: "Troppi abbonamenti streaming?",
      cardTitle: "40-80 € al mese, sparsi",
      lines: ["Quattro piccoli addebiti passano inosservati —", "il totale annuo no."],
    },
  },
});
