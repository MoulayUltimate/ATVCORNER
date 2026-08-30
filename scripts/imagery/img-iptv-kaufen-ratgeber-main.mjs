import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 460, y: 300 },
  grade: { slope: 1.12, intercept: -0.08, sat: 1.05 },
  str: {
    de: {
      title: "IPTV kaufen — erst prüfen, dann zahlen",
      pill: "10 Minuten",
      cardTitle: "7 Punkte vor dem Bezahlen",
      lines: ["Realistisch sind 5 bis 15 €/Monat.", "Wer weit darunter liegt, spart woanders."],
    },
    en: {
      title: "Buying IPTV — check first, pay second",
      pill: "10 minutes",
      cardTitle: "7 checks before you pay",
      lines: ["Realistic is $5 to $16 a month.", "Far below that, something is being cut."],
    },
    fr: {
      title: "Acheter une IPTV — vérifier puis payer",
      pill: "10 minutes",
      cardTitle: "7 points avant de payer",
      lines: ["Le réaliste : 5 à 15 €/mois.", "Bien en dessous, on économise ailleurs."],
    },
    es: {
      title: "Comprar IPTV: comprobar y luego pagar",
      pill: "10 minutos",
      cardTitle: "7 comprobaciones antes de pagar",
      lines: ["Lo realista son 5 a 15 € al mes.", "Muy por debajo, algo se está recortando."],
    },
    it: {
      title: "Comprare IPTV: verificare e poi pagare",
      pill: "10 minuti",
      cardTitle: "7 verifiche prima di pagare",
      lines: ["Il realistico è 5-15 € al mese.", "Molto sotto, qualcosa viene tagliato."],
    },
  },
});
