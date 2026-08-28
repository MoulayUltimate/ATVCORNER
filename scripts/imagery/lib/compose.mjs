/**
 * Shared kit for composite page imagery: raster base + vector explanation layer.
 *
 * The whole technique is three moves:
 *   1. inline a photo into an SVG as a base64 data URI  -> embed()
 *   2. draw the meaning on top in vector, in 600-wide author space -> scaled()
 *   3. rasterise with headless Chromium -> render()
 *
 * render() also runs a layout audit that makes the two bugs this kit exists to
 * prevent — text overflowing its card, and elements falling off canvas —
 * impossible to ship silently. See AUDIT below.
 *
 * PORTABLE BUILD. This copy lives in ~/.claude/skills and is used by projects
 * that know nothing about it, so it must not assume a repo layout:
 *   - the palette and domain come from imagery.config.json in the project (or
 *     fall back to neutral defaults) — see loadBrand()
 *   - Playwright is resolved from the PROJECT's node_modules, not from beside
 *     this file — see launchChromium()
 */

import { mkdir, writeFile, readFile } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

/* ------------------------------------------------------------------ *
 * Project configuration
 *
 * Drop an imagery.config.json anywhere from the working directory up to
 * the filesystem root. Every key is optional:
 *
 *   { "domain": "example.com",
 *     "colors": { "primary": "#003178", "accent": "#ff9800" } }
 *
 * Mirror the values from the project's real design tokens so composites sit
 * next to the rest of the site without a visible seam. Guessing a palette is
 * the fastest way to make an image that reads as clip art.
 * ------------------------------------------------------------------ */

export function findUp(name, from = process.cwd()) {
  let dir = path.resolve(from);
  for (;;) {
    const p = path.join(dir, name);
    if (existsSync(p)) return p;
    const up = path.dirname(dir);
    if (up === dir) return null;
    dir = up;
  }
}

const DEFAULTS = {
  primary: "#123a63",
  primaryLight: "#1d5aa0",
  accent: "#f08a24",
  accentSoft: "#ffe0c2",
  surface: "#ffffff",
  muted: "#f5f7fb",
  ink: "#1a1a1a",
  inkSoft: "#5b6472",
  line: "#c9d3e2",
};

function loadBrand() {
  const p = findUp("imagery.config.json");
  if (!p) return { colors: DEFAULTS, domain: null, configPath: null };
  try {
    const j = JSON.parse(readFileSync(p, "utf8"));
    return {
      colors: { ...DEFAULTS, ...(j.colors || {}) },
      domain: j.domain || null,
      configPath: p,
    };
  } catch (e) {
    throw new Error(`imagery.config.json at ${p} is not valid JSON: ${e.message}`);
  }
}

const BRAND = loadBrand();

/** Palette. Override per project with imagery.config.json → colors. */
export const C = BRAND.colors;

/** Site domain burned into the title bar. Null until configured — titleBar() throws. */
export const DOMAIN = BRAND.domain;

export const CONFIG_PATH = BRAND.configPath;

export const FONT = "Inter, 'Helvetica Neue', Arial, sans-serif";
export const MONO = "'SF Mono', Menlo, Consolas, monospace";

/** Every layer is authored against a 600-wide canvas, whatever the output is. */
export const AUTHOR_W = 600;

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ------------------------------------------------------------------ *
 * Author space
 * ------------------------------------------------------------------ */

/**
 * Wrap a layer in the author->output scale. Author every coordinate against
 * 600 x (600*H/W) and this maps it onto the real canvas. Eyeballing 1820px
 * numbers is how markers end up on the grille.
 */
export function scaled(outW, body) {
  return `<g transform="scale(${outW / AUTHOR_W})">${body}</g>`;
}

/** Author-space canvas height for a given output size. */
export const authorH = (outW, outH) => (outH * AUTHOR_W) / outW;

/* ------------------------------------------------------------------ *
 * Chrome pieces
 * ------------------------------------------------------------------ */

/**
 * Translucent title band across the top. Opacity 0.82-0.90 keeps the photo
 * readable underneath; a solid bar makes the composite look like a slide.
 *
 * The domain is not decoration — when the image is re-embedded elsewhere the
 * attribution travels with the pixels, which is where the links come from.
 */
export function titleBar(title, { domain = DOMAIN, opacity = 0.86 } = {}) {
  if (!domain) {
    throw new Error(
      "titleBar() needs a domain. Set { \"domain\": \"example.com\" } in imagery.config.json " +
      "at the project root, or pass { domain } explicitly.",
    );
  }
  return (
    `<rect x="0" y="0" width="${AUTHOR_W}" height="34" fill="${C.surface}" opacity="${opacity}"/>` +
    `<text x="26" y="23" font-family="${FONT}" font-size="19" font-weight="700" fill="${C.primary}" data-fit="400">${esc(title)}</text>` +
    `<text x="${AUTHOR_W - 26}" y="23" font-family="${FONT}" font-size="13" font-weight="600" fill="${C.primary}" text-anchor="end">${esc(domain)}</text>`
  );
}

/**
 * White card with an accent spine. `lines` is [{ text, size, weight, fill }].
 * Height is derived from the lines, so adding a line cannot silently overrun.
 */
export function card({ x, y, w, title, lines = [], pad = 18 }) {
  const inner = w - pad * 2;
  let cy = pad + (title ? 12 : 0);
  let body = "";

  if (title) {
    body += `<text x="${x + pad}" y="${y + cy + 14}" font-family="${FONT}" font-size="16" font-weight="700" fill="${C.primary}" data-fit="${inner}">${esc(title)}</text>`;
    cy += 26;
  }
  for (const ln of lines) {
    const size = ln.size ?? 12.5;
    cy += size + 5;
    body += `<text x="${x + pad}" y="${y + cy}" font-family="${FONT}" font-size="${size}" font-weight="${ln.weight ?? 400}" fill="${ln.fill ?? C.inkSoft}" data-fit="${inner}">${esc(ln.text)}</text>`;
  }
  const h = cy + pad - 4;

  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${C.surface}" opacity="0.96"/>` +
    `<rect x="${x}" y="${y}" width="5" height="${h}" rx="2.5" fill="${C.accent}"/>` +
    body
  );
}

/** Numbered accent dot. Draw AFTER its leader so the line end sits under it. */
export function marker(n, x, y, r = 13) {
  return (
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.accent}" stroke="${C.surface}" stroke-width="3"/>` +
    `<text x="${x}" y="${y + r * 0.38}" font-family="${FONT}" font-size="${r * 1.08}" font-weight="700" fill="${C.surface}" text-anchor="middle">${n}</text>`
  );
}

/** Rounded white label. Width tracks the text so it never clips. */
export function pill(cx, cy, text, { size = 14 } = {}) {
  const w = textWidth(text, size, 700) + 26;
  return (
    `<rect x="${cx - w / 2}" y="${cy - 14}" width="${w}" height="28" rx="14" fill="${C.surface}" opacity="0.97"/>` +
    `<text x="${cx}" y="${cy + 5}" font-family="${FONT}" font-size="${size}" font-weight="700" fill="${C.primary}" text-anchor="middle">${esc(text)}</text>`
  );
}

export function leader(x1, y1, x2, y2) {
  return `<path d="M ${x1} ${y1} L ${x2} ${y2}" stroke="${C.accent}" stroke-width="2.4" fill="none"/>`;
}

/**
 * Contrast + saturation lift for the base photo. Most usable stock is flat and
 * cool; without this the subject sinks into its own background.
 *
 * color-interpolation-filters="sRGB" is not optional — Chromium filters in
 * linear space by default and the result comes back washed out.
 */
export function gradeFilter({ id = "grade", slope = 1.16, intercept = -0.08, sat = 1.12 } = {}) {
  const f = (ch) => `<feFunc${ch} type="linear" slope="${slope}" intercept="${intercept}"/>`;
  return (
    `<filter id="${id}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">` +
    `<feComponentTransfer>${f("R")}${f("G")}${f("B")}</feComponentTransfer>` +
    `<feColorMatrix type="saturate" values="${sat}"/></filter>`
  );
}

/* ------------------------------------------------------------------ *
 * Text metrics
 * ------------------------------------------------------------------ */

/**
 * Rough advance-width estimate, used only to size pills and to pre-wrap.
 * Deliberately errs wide. The authoritative check is the render() audit,
 * which measures the real glyphs — never trust this number alone.
 */
export function textWidth(text, size, weight = 400, tracking = 0) {
  const per = weight >= 700 ? 0.53 : 0.5;
  return String(text).length * (size * per + tracking);
}

/** Greedy wrap to a pixel budget in author space. */
export function wrap(text, maxW, size, weight = 400) {
  const words = String(text).split(/\s+/);
  const out = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (textWidth(next, size, weight) > maxW && line) {
      out.push(line);
      line = w;
    } else line = next;
  }
  if (line) out.push(line);
  return out;
}

/* ------------------------------------------------------------------ *
 * IO
 * ------------------------------------------------------------------ */

/** Inline a local image as a data URI. Keeps the SVG self-contained — Playwright
 *  gets no file:// access, so a plain href to disk renders blank. */
export async function embed(file) {
  const bin = await readFile(file);
  const ext = path.extname(file).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : ext === ".webp" ? "image/webp" : "image/png";
  return `data:${mime};base64,${bin.toString("base64")}`;
}

/**
 * Resolve Playwright from the PROJECT, not from beside this file.
 *
 * This skill is installed at user level, so a bare `import "playwright-core"`
 * would look in ~/.claude/node_modules and fail. Resolving against the working
 * directory means whichever copy the project already depends on is the one that
 * runs, which is also the copy whose browser binaries are known to be present.
 */
export async function launchChromium() {
  const req = createRequire(path.join(process.cwd(), "package.json"));
  const tried = [];

  for (const pkg of ["playwright-core", "playwright"]) {
    let mod;
    try {
      mod = await import(pathToFileURL(req.resolve(pkg)).href);
    } catch {
      tried.push(pkg);
      continue;
    }
    const chromium = mod.chromium ?? mod.default?.chromium;
    if (!chromium) { tried.push(`${pkg} (no chromium export)`); continue; }

    try {
      return await chromium.launch();
    } catch (e) {
      // playwright-core ships no browser binaries. Borrow the system Chrome
      // rather than making the caller run `playwright install`.
      try {
        return await chromium.launch({ channel: "chrome" });
      } catch {
        throw new Error(
          `${pkg} resolved but no browser could start.\n${e.message}\n` +
          `Fix: npx playwright install chromium — or install Google Chrome.`,
        );
      }
    }
  }

  throw new Error(
    `Playwright not found in this project (looked for: ${tried.join(", ")}).\n` +
    `Fix: npm i -D playwright-core && npx playwright install chromium\n` +
    `Resolved from cwd: ${process.cwd()}`,
  );
}

/**
 * Rasterise an SVG string and audit the result.
 *
 * AUDIT — this is the point of routing every image through here:
 *  - any <text data-fit="N"> whose measured width exceeds N is reported
 *  - any <text> whose box falls outside the canvas is reported
 * Both are the failure modes that survive a code review and only show up when
 * a human looks at the PNG. `strict: true` turns them into a thrown error.
 *
 * `audit: false` is for tooling output only (the grid overlay labels its own
 * frame edges on purpose). Never disable it for a shipping asset.
 */
export async function render({ svg, w, h, out, scale = 1, strict = true, audit = true }) {
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out.replace(/\.png$/, ".svg"), svg, "utf8");

  const browser = await launchChromium();
  try {
    const page = await browser.newPage({ deviceScaleFactor: scale });
    await page.setViewportSize({ width: w, height: h });
    await page.setContent(`<html><body style="margin:0">${svg}</body></html>`, { waitUntil: "networkidle" });

    const problems = !audit ? [] : await page.evaluate(({ w, h }) => {
      const found = [];
      for (const t of document.querySelectorAll("text")) {
        const label = (t.textContent || "").slice(0, 46);
        let b;
        try { b = t.getBBox(); } catch { continue; }

        const budget = t.dataset.fit ? parseFloat(t.dataset.fit) : null;
        if (budget != null && b.width > budget + 0.5) {
          found.push(`overflow: "${label}" is ${b.width.toFixed(1)}u wide, budget ${budget}u`);
        }
        const r = t.getBoundingClientRect();
        if (r.width && (r.left < -1 || r.top < -1 || r.right > w + 1 || r.bottom > h + 1)) {
          found.push(`offcanvas: "${label}" at [${r.left.toFixed(0)},${r.top.toFixed(0)},${r.right.toFixed(0)},${r.bottom.toFixed(0)}] vs ${w}x${h}`);
        }
      }
      return found;
    }, { w, h });

    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: w, height: h } });

    if (problems.length) {
      const msg = `layout audit failed (${problems.length}):\n  ` + problems.join("\n  ");
      if (strict) throw new Error(msg);
      console.warn("⚠ " + msg);
    }
    console.log(`✓ ${path.basename(out)}  ${w * scale}×${h * scale}`);
    return { out, problems };
  } finally {
    await browser.close();
  }
}
