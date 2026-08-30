import { make } from "./_make.mjs";

await make({
  card: { x: 288, y: 40, w: 292 },
  pill: { x: 140, y: 300 },
  grade: { slope: 1.08, intercept: -0.14, sat: 1.0 },
  str: {
    de: {
      title: "Sechs Prüfpunkte vor dem Kauf",
      pill: "In 10 Minuten prüfbar",
      cardTitle: "Woran Sie Seriosität erkennen",
      lines: ["1  Reguläre Zahlungswege", "2  HTTPS statt ungesichert", "3  Erreichbarer Support", "4  Test vor dem Kauf"],
    },
    en: {
      title: "Six checks before you buy",
      pill: "Checkable in 10 minutes",
      cardTitle: "How to spot a real operation",
      lines: ["1  Regulated payment methods", "2  HTTPS, not unsecured", "3  Reachable support", "4  A trial before purchase"],
    },
    fr: {
      title: "Six vérifications avant l'achat",
      pill: "Vérifiable en 10 min",
      cardTitle: "Comment repérer le sérieux",
      lines: ["1  Paiements régulés", "2  HTTPS, pas non sécurisé", "3  Support joignable", "4  Essai avant achat"],
    },
    es: {
      title: "Seis comprobaciones antes de comprar",
      pill: "Comprobable en 10 min",
      cardTitle: "Cómo reconocer la seriedad",
      lines: ["1  Pagos regulados", "2  HTTPS, no sin cifrar", "3  Soporte localizable", "4  Prueba antes de comprar"],
    },
    it: {
      title: "Sei verifiche prima di comprare",
      pill: "Verificabile in 10 min",
      cardTitle: "Come riconoscere la serietà",
      lines: ["1  Pagamenti regolamentati", "2  HTTPS, non in chiaro", "3  Assistenza raggiungibile", "4  Prova prima dell'acquisto"],
    },
  },
});
