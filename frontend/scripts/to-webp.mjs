/**
 * One-off: convert the site's raster artwork to WebP.
 *
 * Writes a .webp beside each source and leaves the original in place, so any
 * markup still pointing at the .png/.jpg keeps working. Nothing is deleted.
 *
 *   node scripts/to-webp.mjs
 */
import sharp from "sharp";
import { readdir, stat, access } from "node:fs/promises";
import path from "node:path";

const ROOTS = [
  "public/assets/media/Assets/Projectimg",
  "public/assets/img/mobile_projects",
  "public/assets/media/Assets",
  "public/assets/img/bg",
  "public/assets/img/normal",
];

const EXT = /\.(png|jpe?g)$/i;
const QUALITY = 82;
/* Nothing on the site displays wider than ~1600px, and most of these run to
   2000–4000px. Capping the long edge is where most of the saving comes from. */
const MAX_EDGE = 1600;

const walk = async (dir, out = []) => {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (EXT.test(e.name)) out.push(p);
  }
  return out;
};

const exists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

let before = 0;
let after = 0;
let done = 0;
let skipped = 0;

for (const root of ROOTS) {
  const files = await walk(root);
  for (const file of files) {
    const target = file.replace(EXT, ".webp");
    if (await exists(target)) {
      skipped++;
      continue;
    }
    try {
      const src = await stat(file);
      await sharp(file)
        .rotate()
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(target);
      const dst = await stat(target);
      before += src.size;
      after += dst.size;
      done++;
    } catch (err) {
      console.warn("skip", file, err.message);
    }
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(`converted ${done} files (${skipped} already had a .webp)`);
console.log(`${mb(before)} -> ${mb(after)}`);
if (before > 0) {
  console.log(`saved ${mb(before - after)} (${Math.round((1 - after / before) * 100)}%)`);
}
