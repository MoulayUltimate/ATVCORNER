import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 330 },
  grade: { slope: 1.1, intercept: -0.1, sat: 1.0 },
  str: {
    de: {
      title: "Die Prüfliste vor dem Kauf",
      cardTitle: "In dieser Reihenfolge",
      lines: ["1  Zahlungswege und Impressum", "2  Support anschreiben, Zeit messen", "3  Rückerstattungsregel lesen", "4  Kostenlos testen, dann zahlen"],
    },
    en: {
      title: "The pre-purchase checklist",
      cardTitle: "In this order",
      lines: ["1  Payment methods and company details", "2  Message support, time the reply", "3  Read the refund policy", "4  Test free, then pay"],
    },
    fr: {
      title: "La liste avant l'achat",
      cardTitle: "Dans cet ordre",
      lines: ["1  Paiements et mentions légales", "2  Écrire au support, chronométrer", "3  Lire la règle de remboursement", "4  Tester gratuitement, puis payer"],
    },
    es: {
      title: "La lista antes de comprar",
      cardTitle: "En este orden",
      lines: ["1  Pagos y datos de empresa", "2  Escribir al soporte y cronometrar", "3  Leer la política de reembolso", "4  Probar gratis y después pagar"],
    },
    it: {
      title: "La lista prima di comprare",
      cardTitle: "In quest'ordine",
      lines: ["1  Pagamenti e dati aziendali", "2  Scrivere all'assistenza e cronometrare", "3  Leggere la politica di rimborso", "4  Provare gratis e poi pagare"],
    },
  },
});
