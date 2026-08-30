// MAIN — "9 Warnsignale". Base: VO5w2Ida70s (warning triangle on orange wall).
// Triangle fills x145-430; only a pill fits, top-left orange is clear.
import { make } from "./_make.mjs";
await make({
  pill: { x: 108, y: 62 },
  card: { x: 0, y: 0, w: 0 },
  grade: { slope: 1.06, intercept: -0.06, sat: 1.05 },
  str: {
    de: { title: "9 Warnsignale vor dem IPTV-Kauf", pill: "Vorher prüfen" },
    en: { title: "9 warning signs before you buy IPTV", pill: "Check first" },
    fr: { title: "9 signaux avant d'acheter une IPTV", pill: "Vérifier avant" },
    es: {
      title: "9 señales antes de contratar un IPTV",
      pill: "Comprueba antes",
    },
    it: {
      title: "9 segnali prima di comprare un IPTV",
      pill: "Verifica prima",
    },
  },
});
