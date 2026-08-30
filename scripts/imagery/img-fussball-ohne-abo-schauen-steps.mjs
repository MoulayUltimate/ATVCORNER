import { make } from "./_make.mjs";

await make({
  card: { x: 290, y: 40, w: 292 },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    de: {
      title: "Frei, kostenpflichtig, gebündelt",
      cardTitle: "Die drei Ebenen",
      lines: ["Frei — Zusammenfassungen, Pokal", "Kostenpflichtig — die reguläre Liga", "Gebündelt — alles in einem Zugang"],
    },
    en: {
      title: "Free, paid, bundled",
      cardTitle: "The three layers",
      lines: ["Free — highlights and cup ties", "Paid — the regular league", "Bundled — all in one access"],
    },
    fr: {
      title: "Gratuit, payant, groupé",
      cardTitle: "Les trois niveaux",
      lines: ["Gratuit — résumés et coupe", "Payant — le championnat régulier", "Groupé — tout en un accès"],
    },
    es: {
      title: "Gratis, de pago, agrupado",
      cardTitle: "Los tres niveles",
      lines: ["Gratis — resúmenes y copa", "De pago — la liga regular", "Agrupado — todo en un acceso"],
    },
    it: {
      title: "Gratis, a pagamento, riunito",
      cardTitle: "I tre livelli",
      lines: ["Gratis — sintesi e coppa", "A pagamento — il campionato regolare", "Riunito — tutto in un accesso"],
    },
  },
});
