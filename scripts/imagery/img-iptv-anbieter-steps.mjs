// DESCRIPTIVE — the four pre-purchase checks. Base: vwIthdobS3o (woman at laptop).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 150, w: 348 },
  pill: null,
  grade: { slope: 1.05, intercept: -0.15, sat: 1.0 },
  str: {
    de: { title: "Vor der Zahlung prüfen", cardTitle: "Vier Fragen, fünf Minuten",
      lines: ["1  Gibt es einen Test ohne Karte?", "2  Antwortet der Support vorab?", "3  Ist der Preis realistisch?", "4  Gibt es eine Rückerstattung?"] },
    en: { title: "Check before you pay", cardTitle: "Four questions, five minutes",
      lines: ["1  Is there a trial, no card?", "2  Does support reply up front?", "3  Is the price realistic?", "4  Is there a refund policy?"] },
    fr: { title: "Vérifier avant de payer", cardTitle: "Quatre questions, cinq minutes",
      lines: ["1  Un essai sans carte ?", "2  Le support répond-il avant ?", "3  Le prix est-il réaliste ?", "4  Y a-t-il un remboursement ?"] },
  },
});
