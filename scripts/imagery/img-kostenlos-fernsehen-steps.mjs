/**
 * DESCRIPTIVE in-body image for "Kostenlos fernsehen" — the three free routes
 * and the gap they share. Base: Unsplash qyMLSH9DMmo (aerial + dish, open sky).
 * Aerial mast sits at ~x 95, y 120; dish at ~x 250, y 130 in 600-space.
 *   node scripts/imagery/img-kostenlos-fernsehen-steps.mjs <photo> <out.png> <de|en|fr>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, leader, marker, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr>"); process.exit(1); }

const STR = {
  de: {
    title: "Die drei kostenlosen Wege",
    cardTitle: "Was jede Option abdeckt",
    lines: ["1  DVB-T2-Antenne — ohne Internet", "2  Mediatheken — zeitlich begrenzt", "3  Werbe-Streaming — mit Werbeblöcken", "✕  Live-Sport: bei keiner dabei"],
    pill: "Antenne = gratis",
  },
  en: {
    title: "The three free routes",
    cardTitle: "What each option covers",
    lines: ["1  Aerial broadcast — no internet needed", "2  Catch-up players — time limited", "3  Ad-supported TV — unskippable ads", "✕  Live sport: in none of them"],
    pill: "Aerial = free",
  },
  fr: {
    title: "Les trois voies gratuites",
    cardTitle: "Ce que couvre chaque option",
    lines: ["1  Antenne TNT — sans internet", "2  Replay — durée limitée", "3  Streaming pub — coupures imposées", "✕  Sport en direct : dans aucune"],
    pill: "Antenne = gratuit",
  },
}[locale];

const W = 1820, H = 1024;
const AERIAL_X = 96, AERIAL_Y = 118;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + leader(AERIAL_X + 10, AERIAL_Y, 168, 62)
  + marker(1, AERIAL_X + 10, AERIAL_Y)
  + pill(210, 56, STR.pill)
  + card({ x: 300, y: 150, w: 282, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) }),
);

const defs = `<defs>${gradeFilter({ slope: 1.1, intercept: -0.05, sat: 1.05 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
