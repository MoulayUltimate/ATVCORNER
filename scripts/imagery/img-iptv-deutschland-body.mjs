// DESCRIPTIVE — what the DE lineup covers. Base: -MOGreUeELE (stadium seats).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 110, w: 352 },
  pill: null,
  grade: { slope: 1.06, intercept: -0.12, sat: 1.04 },
  str: {
    de: { title: "Was in Deutschland enthalten ist", cardTitle: "Sender, Sport und Katalog",
      lines: ["Öffentlich-rechtlich & privat, regional", "4.200 Sportkanäle: Bundesliga, CL, F1", "70.000+ Filme, 18.000+ Serien in 4K/8K"] },
    en: { title: "What the German lineup covers", cardTitle: "Channels, sport and catalogue",
      lines: ["Public-service & commercial, regional", "4,200 sport channels: Bundesliga, CL, F1", "70,000+ films, 18,000+ series in 4K/8K"] },
    fr: { title: "Ce que couvre l'offre allemande", cardTitle: "Chaînes, sport et catalogue",
      lines: ["Service public & privé, régionales", "4 200 chaînes sport : Bundesliga, CL, F1", "70 000+ films, 18 000+ séries en 4K/8K"] },
  },
});
