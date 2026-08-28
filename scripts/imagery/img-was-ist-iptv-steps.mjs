/**
 * DESCRIPTIVE in-body image for "Was ist IPTV?" — the 3-step setup (de/en/fr).
 * Base: Unsplash BBmycUz7cns (person watching video on a tablet, top-down).
 *   node scripts/imagery/img-was-ist-iptv-steps.mjs <photo> <out.png> <de|en|fr>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, leader, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr>"); process.exit(1); }

const STR = {
  de: {
    title: "So funktioniert IPTV — in 3 Schritten",
    cardTitle: "Startklar in unter 5 Minuten",
    lines: ["1  Abo → Zugangsdaten per WhatsApp", "2  App öffnen (TiviMate / Smarters)", "3  Eingeben → 66.000+ Sender live"],
    pill: "Auf jedem Gerät",
  },
  en: {
    title: "How IPTV works — in 3 steps",
    cardTitle: "Up and running in under 5 minutes",
    lines: ["1  Subscribe → credentials via WhatsApp", "2  Open the app (TiviMate / Smarters)", "3  Enter them → 66,000+ channels live"],
    pill: "On every device",
  },
  fr: {
    title: "Comment marche l'IPTV — en 3 étapes",
    cardTitle: "Prêt en moins de 5 minutes",
    lines: ["1  Abonnement → identifiants par WhatsApp", "2  Ouvrir l'app (TiviMate / Smarters)", "3  Saisir → 66 000+ chaînes en direct"],
    pill: "Sur chaque appareil",
  },
}[locale];

const W = 1820, H = 1024;
const TAB_X = 470, TAB_Y = 180;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + card({ x: 40, y: 132, w: 352, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) })
  + leader(TAB_X, TAB_Y, 528, 116)
  + pill(528, 108, STR.pill),
);

const defs = `<defs>${gradeFilter({ slope: 1.17, intercept: -0.05, sat: 1.12 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
