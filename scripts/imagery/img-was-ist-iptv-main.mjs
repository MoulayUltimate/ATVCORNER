/**
 * MAIN / cover image for the "Was ist IPTV?" article (de/en/fr).
 * Base: Unsplash EOQhsfFBhRk (hand + streaming remote pointing at a TV).
 *   node scripts/imagery/img-was-ist-iptv-main.mjs <photo> <out.png> <de|en|fr|es|it>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, leader, marker, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr|es|it>"); process.exit(1); }

const STR = {
  de: {
    title: "Was ist IPTV? Fernsehen über das Internet",
    pill: "LIVE 4K/8K",
    cardTitle: "66.000+ Sender über das Internet",
    lines: ["Live-TV, Sport, Filme & Serien in einer App —", "auf jedem Bildschirm, ganz ohne Kabel."],
  },
  en: {
    title: "What is IPTV? Television over the internet",
    pill: "LIVE 4K/8K",
    cardTitle: "66,000+ channels over the internet",
    lines: ["Live TV, sport, movies & series in one app —", "on every screen, with no cable."],
  },
  fr: {
    title: "Qu'est-ce que l'IPTV ? La TV par internet",
    pill: "LIVE 4K/8K",
    cardTitle: "66 000+ chaînes par internet",
    lines: ["TV en direct, sport, films & séries en une app —", "sur chaque écran, sans câble."],
  },
  es: {
    title: "¿Qué es el IPTV? La televisión por internet",
    pill: "LIVE 4K/8K",
    cardTitle: "66.000+ canales por internet",
    lines: ["TV en directo, deporte, cine y series en una app —", "en cualquier pantalla, sin cable."],
  },
  it: {
    title: "Che cos'è l'IPTV? La TV via internet",
    pill: "LIVE 4K/8K",
    cardTitle: "66.000+ canali via internet",
    lines: ["TV in diretta, sport, film e serie in un'app —", "su ogni schermo, senza cavo."],
  },
}[locale];

const W = 1820, H = 1024;
const TV_X = 180, TV_Y = 150;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + leader(TV_X, TV_Y, 300, 214)
  + pill(TV_X, TV_Y, STR.pill)
  + card({ x: 26, y: 214, w: 352, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) })
  + marker(1, 300, 214),
);

const defs = `<defs>${gradeFilter({ slope: 1.16, intercept: -0.06, sat: 1.12 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
