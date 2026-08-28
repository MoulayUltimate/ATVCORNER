/**
 * MAIN / cover for "IPTV ruckelt?" — router close-up, LEDs called out.
 * Base: Unsplash 43ak6tfF4Ss (wireless router antennas, status LEDs bottom-centre).
 *   node scripts/imagery/img-iptv-ruckelt-main.mjs <photo> <out.png> <de|en|fr>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, leader, marker, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr>"); process.exit(1); }

const STR = {
  de: {
    title: "IPTV ruckelt? Zuerst hier nachsehen",
    pill: "Erst die Leitung",
    cardTitle: "9 von 10 Fällen: Verbindung oder App",
    lines: ["10 Mbit/s für HD, 25 Mbit/s für 4K —", "gemessen am Gerät, nicht laut Vertrag."],
  },
  en: {
    title: "IPTV buffering? Start here",
    pill: "Check the line first",
    cardTitle: "9 times out of 10: connection or app",
    lines: ["10 Mbps for HD, 25 Mbps for 4K —", "measured at the device, not on paper."],
  },
  fr: {
    title: "L'IPTV rame ? Commencez ici",
    pill: "La ligne d'abord",
    cardTitle: "9 fois sur 10 : connexion ou application",
    lines: ["10 Mbps pour la HD, 25 Mbps pour la 4K —", "mesurés sur l'appareil, pas sur le contrat."],
  },
}[locale];

const W = 1820, H = 1024;
// Status LEDs sit bottom-centre (~x 265, y 328 in 600-space). Point at them.
const LED_X = 265, LED_Y = 322;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + leader(392, 268, LED_X + 14, LED_Y - 6)
  + marker(1, LED_X + 14, LED_Y - 6)
  + pill(452, 262, STR.pill)
  + card({ x: 26, y: 62, w: 350, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) }),
);

const defs = `<defs>${gradeFilter({ slope: 1.2, intercept: -0.1, sat: 1.1 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
