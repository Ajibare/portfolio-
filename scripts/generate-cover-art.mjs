/**
 * Generates the abstract project-cover artwork used across the portfolio.
 *
 * Output: 1600x1000 WebP files in /public/work/ (sharp rasterises the SVGs).
 * Source art is generated deterministically so the covers stay consistent
 * between runs. Replace these with real screenshots when available.
 *
 * Run: node scripts/generate-cover-art.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "work");
const srcDir = join(__dirname, "cover-art");
mkdirSync(outDir, { recursive: true });
mkdirSync(srcDir, { recursive: true });

const W = 1600;
const H = 1000;
const BG = "#050505";
const LINE = "#262626";
const FAINT = "#1a1a1a";
const ACCENT = "#a6b92d";

/**
 * Deterministic PRNG so renders are repeatable.
 */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Concentric "wireframe orbit" lattice — a restrained 3D-ish line art.
 */
function orbitLines(cx, cy, r, layers, seed, accentSlice = 0) {
  const rand = mulberry32(seed);
  let out = "";
  const start = rand() * Math.PI * 2;

  for (let i = 1; i <= layers; i++) {
    const radius = (r * i) / layers;
    const rot = start + rand() * 2;
    const pointCount = Math.max(6, Math.round((i * Math.PI * radius) / 90));
    const preview = [];

    for (let p = 0; p < pointCount; p++) {
      const a = rot + (p / pointCount) * Math.PI * 2;
      const rx = Math.cos(a);
      const ry = Math.sin(a);
      // Tilt the rings into an isometric "sphere"
      const x = cx + rx * radius;
      const y = cy + ry * radius * 0.42;
      preview.push([x.toFixed(1), y.toFixed(1)]);
    }

    for (let p = 0; p < pointCount; p++) {
      const [x1, y1] = preview[p];
      const [x2, y2] = preview[(p + 1) % pointCount];
      const isAccent = accentSlice > 0 && i === layers && p >= pointCount - 2 && p <= pointCount + accentSlice;
      const color = isAccent ? ACCENT : LINE;
      out += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1"/>`;
    }
  }

  // Longitude seams across the rings
  for (let seam = 0; seam < 6; seam++) {
    const a = start + (seam / 6) * Math.PI;
    const x1 = cx + Math.cos(a) * r;
    const y1 = cy + Math.sin(a) * r * 0.42;
    const x2 = cx - Math.cos(a) * r;
    const y2 = cy - Math.sin(a) * r * 0.42;
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${FAINT}" stroke-width="1"/>`;
  }

  return out;
}

/**
 * Subtle technical grid background.
 */
function grid() {
  let out = "";
  const step = 80;
  for (let x = step; x < W; x += step) {
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${FAINT}" stroke-width="1"/>`;
  }
  for (let y = step; y < H; y += step) {
    out += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${FAINT}" stroke-width="1"/>`;
  }
  return out;
}

function cover({ seed, accentSlice, cx = W / 2, cy = H * 0.52, r = 560, layers = 10 }) {
  const rand = mulberry32(seed);
  // Frame inset
  const frame = `<rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="none" stroke="${LINE}" stroke-width="1"/>`;
  // Sparse accent dots
  let dots = "";
  const dotCount = 22;
  for (let i = 0; i < dotCount; i++) {
    const x = 60 + rand() * (W - 120);
    const y = 60 + rand() * (H - 120);
    const accent = i < 3;
    const c = accent ? ACCENT : "#3a3a3a";
    dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${accent ? 2.5 : 1}" fill="${c}"/>`;
  }
  // Center "planet" glow
  const glow = `<circle cx="${cx}" cy="${cy}" r="${r * 0.16}" fill="${ACCENT}" opacity="0.12"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  ${grid()}
  ${dots}
  ${glow}
  ${frame}
  <g opacity="0.9">${orbitLines(cx, cy, r, layers, seed, accentSlice)}</g>
</svg>`;

  return svg;
}

const projects = [
  { slug: "trading-bolt", seed: 11, accentSlice: 3, r: 600, cy: H * 0.52 },
  { slug: "epilux", seed: 47, accentSlice: 5, r: 560, cy: H * 0.42, cx: W * 0.58 },
  { slug: "vastcare", seed: 89, accentSlice: 2, r: 640, cy: H * 0.6, cx: W * 0.46 },
  { slug: "hms", seed: 133, accentSlice: 4, r: 520, cy: H * 0.48, cx: W * 0.5 },
  { slug: "ibm-capstone", seed: 202, accentSlice: 4, r: 620, cy: H * 0.5, cx: W * 0.5 },
  { slug: "cardily", seed: 55, accentSlice: 6, r: 560, cy: H * 0.44, cx: W * 0.56 },
  { slug: "excefort", seed: 99, accentSlice: 2, r: 600, cy: H * 0.58, cx: W * 0.46 },
];

for (const project of projects) {
  const svg = cover(project);
  const source = join(srcDir, `${project.slug}.svg`);
  const target = join(outDir, `${project.slug}.webp`);
  writeFileSync(source, svg);
  await sharp(Buffer.from(svg))
    .resize(W, H)
    .webp({ quality: 85, effort: 6 })
    .toFile(target);
  console.log(`wrote ${target}`);
}

// The SVGs are build inputs kept in scripts/cover-art for re-rendering.
console.log("covers generated.");