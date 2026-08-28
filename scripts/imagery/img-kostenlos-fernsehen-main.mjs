/**
 * MAIN / cover for "Kostenlos fernsehen".
 * Base: Unsplash G0hS-5j0sT0 (person watching on a laptop on the sofa).
 *   node scripts/imagery/img-kostenlos-fernsehen-main.mjs <photo> <out.png> <de|en|fr>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr>"); process.exit(1); }

const STR = {
  de: {
    title: "Kostenlos fernsehen — was wirklich geht",
    pill: "Legal & gratis",
    cardTitle: "Gratis deckt viel ab, aber nicht alles",
    lines: ["Antenne, Mediatheken und Werbe-Streaming:", "Live-Sport fehlt bei allen dreien."],
  },
  en: {
    title: "Free TV — what actually works",
    pill: "Legal & free",
    cardTitle: "Free covers a lot, but not everything",
    lines: ["Aerial, catch-up players and ad-supported TV:", "live sport is missing from all three."],
  },
  fr: {
    title: "TV gratuite — ce qui marche vraiment",
    pill: "Légal & gratuit",
    cardTitle: "Le gratuit couvre beaucoup, pas tout",
    lines: ["Antenne, replay et streaming publicitaire :", "le sport en direct manque aux trois."],
  },
}[locale];

const W = 1820, H = 1024;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + card({ x: 24, y: 60, w: 346, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) })
  + pill(470, 268, STR.pill),
);

const defs = `<defs>${gradeFilter({ slope: 1.08, intercept: -0.14, sat: 1.05 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
