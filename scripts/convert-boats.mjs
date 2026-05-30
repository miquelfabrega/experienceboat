import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';

const HEIC = /\.heic$/i;

// sharp's bundled libheif cannot decode HEVC-coded HEIC. Use macOS `sips`
// to transcode HEIC -> JPEG (sips bakes in EXIF orientation), then process
// that JPEG with sharp. Returns a path to a temp JPEG that the caller cleans.
const tmpDir = path.join(os.tmpdir(), 'boat-convert');
let tmpSeq = 0;
function heicToJpeg(srcFull) {
  const out = path.join(tmpDir, `heic-${process.pid}-${tmpSeq++}.jpg`);
  execFileSync('sips', ['-s', 'format', 'jpeg', srcFull, '--out', out], {
    stdio: ['ignore', 'ignore', 'ignore'],
  });
  return out;
}

const REPO = '/Users/gironatour/Desktop/work/experienceboat1';
const SRC_ROOT = path.join(REPO, 'EXPERIENCE BOAT MIQUEL');
const PUB = path.join(REPO, 'public', 'boats');

// slug -> source folder name
const MAP = {
  'dream-point-420': 'DREAM POINT ',
  'marine-brezze-450': 'MARINE BREZZE ',
  'orange-kiwi-620': 'MEDLINE ZODIAC 620',
  'raf-iv-mano': 'RAF IV MANO 21,5 SPORT FISH',
  'jeanneau-595-reineta': 'REINETA BENETEAU 595',
  'remus-450': 'REMUS 450',
  'spirit-of-the-sea-675': 'SPIRIT GOMMO NAUTICA G65',
};

// Target filenames per slug (from boats-gallery.ts), in order.
const TARGETS = {
  'dream-point-420': [
    'dream-point-420-hero',
    'dream-point-420-exterior-01',
    'dream-point-420-exterior-02',
    'dream-point-420-interior-01',
  ],
  'marine-brezze-450': [
    'marine-brezze-450-hero',
    'marine-brezze-450-exterior-01',
    'marine-brezze-450-exterior-02',
    'marine-brezze-450-interior-01',
    'marine-brezze-450-interior-02',
    'marine-brezze-450-experiencia-01',
    'marine-brezze-450-experiencia-02',
  ],
  'orange-kiwi-620': [
    'orange-kiwi-620-hero',
    'orange-kiwi-620-exterior-01',
    'orange-kiwi-620-exterior-02',
    'orange-kiwi-620-interior-01',
    'orange-kiwi-620-interior-02',
    'orange-kiwi-620-experiencia-01',
  ],
  'raf-iv-mano': [
    'raf-iv-mano-hero',
    'raf-iv-mano-exterior-01',
    'raf-iv-mano-exterior-02',
    'raf-iv-mano-cockpit',
    'raf-iv-mano-interior-01',
    'raf-iv-mano-interior-02',
    'raf-iv-mano-experiencia-01',
  ],
  'jeanneau-595-reineta': [
    'jeanneau-595-reineta-hero',
    'jeanneau-595-reineta-exterior-01',
    'jeanneau-595-reineta-exterior-02',
    'jeanneau-595-reineta-interior-01',
    'jeanneau-595-reineta-interior-02',
    'jeanneau-595-reineta-cockpit',
    'jeanneau-595-reineta-experiencia-01',
  ],
  'remus-450': [
    'remus-450-hero',
    'remus-450-exterior-01',
    'remus-450-exterior-02',
    'remus-450-interior-01',
    'remus-450-experiencia-01',
  ],
  'spirit-of-the-sea-675': [
    'spirit-of-the-sea-675-hero',
    'spirit-of-the-sea-675-exterior-01',
    'spirit-of-the-sea-675-exterior-02',
    'spirit-of-the-sea-675-interior-01',
    'spirit-of-the-sea-675-interior-02',
    'spirit-of-the-sea-675-experiencia-01',
  ],
};

const IMG_EXT = /\.(jpe?g|heic|png)$/i;
const IGNORE_EXT = /\.(dng|mov|mp4|aae)$/i;

async function listImages(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }
  const out = [];
  for (const name of entries) {
    if (name.startsWith('.')) continue;
    if (IGNORE_EXT.test(name)) continue;
    if (!IMG_EXT.test(name)) continue;
    const full = path.join(dir, name);
    const st = await fs.stat(full);
    if (!st.isFile()) continue;
    out.push({ name, full, bytes: st.size });
  }
  return out;
}

async function withMeta(files) {
  const out = [];
  for (const f of files) {
    try {
      // For HEIC, transcode via sips first so sharp can read/process it.
      const decodePath = HEIC.test(f.name) ? heicToJpeg(f.full) : f.full;
      const m = await sharp(decodePath).rotate().metadata();
      // After .rotate() metadata reflects oriented dimensions
      const w = m.width || 0;
      const h = m.height || 0;
      out.push({ ...f, decodePath, w, h, area: w * h, landscape: w >= h });
    } catch (e) {
      console.warn(`  ! skip (meta fail): ${f.name} — ${e.message}`);
    }
  }
  return out;
}

function dedupe(files) {
  const seen = new Set();
  const out = [];
  for (const f of files) {
    if (seen.has(f.bytes)) continue;
    seen.add(f.bytes);
    out.push(f);
  }
  return out;
}

async function convert(srcDecodePath, destFull, width, quality) {
  await fs.mkdir(path.dirname(destFull), { recursive: true });
  await sharp(srcDecodePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destFull);
}

const report = {};

await fs.mkdir(tmpDir, { recursive: true });

for (const [slug, folder] of Object.entries(MAP)) {
  const dir = path.join(SRC_ROOT, folder);
  let files = await listImages(dir);
  files = await withMeta(files);
  files = dedupe(files);

  // Hero: largest landscape; fallback to largest overall if no landscape
  const landscapes = files.filter((f) => f.landscape).sort((a, b) => b.area - a.area);
  const all = [...files].sort((a, b) => b.area - a.area);
  const hero = landscapes[0] || all[0];

  const rest = all.filter((f) => f !== hero);
  const ordered = hero ? [hero, ...rest] : [];

  const targets = TARGETS[slug];
  const n = Math.min(targets.length, ordered.length);

  const produced = [];
  for (let i = 0; i < n; i++) {
    const t = targets[i];
    const src = ordered[i];
    const dest = path.join(PUB, slug, `${t}.webp`);
    const isHero = i === 0;
    await convert(src.decodePath, dest, isHero ? 1920 : 1200, isHero ? 85 : 80);
    produced.push({ target: `${t}.webp`, src: src.name, w: src.w, h: src.h });
  }

  report[slug] = {
    folder,
    available: ordered.length,
    targetsCount: targets.length,
    produced,
    hero: hero ? hero.name : null,
    truncated: n < targets.length ? targets.length - n : 0,
  };
  console.log(`\n[${slug}] folder="${folder}" available=${ordered.length} produced=${produced.length}/${targets.length}`);
  console.log(`  HERO: ${hero ? hero.name : '(none)'} ${hero ? hero.w + 'x' + hero.h : ''}`);
  for (const p of produced) console.log(`   - ${p.target}  <=  ${p.src} (${p.w}x${p.h})`);
}

// Generic hero from drone/general aerial
async function genericHero() {
  const candidates = [
    path.join(SRC_ROOT, 'drone fotos', 'ExperienceBoat'),
    path.join(SRC_ROOT, 'drone fotos'),
    path.join(SRC_ROOT, 'fotos generales'),
  ];
  let pool = [];
  for (const dir of candidates) {
    let f = await listImages(dir);
    f = await withMeta(f);
    pool = pool.concat(f);
  }
  pool = dedupe(pool);
  // Prefer actual drone aerials (filename contains "drone") if available.
  const drone = pool.filter((f) => /drone/i.test(f.name) && f.landscape)
    .sort((a, b) => b.area - a.area);
  const landscapes = pool.filter((f) => f.landscape).sort((a, b) => b.area - a.area);
  const pick = drone[0] || landscapes[0] || pool.sort((a, b) => b.area - a.area)[0];
  if (!pick) {
    console.warn('No generic hero candidate found!');
    return;
  }
  const dest = path.join(PUB, 'generic', 'hero.webp');
  await convert(pick.decodePath, dest, 1920, 85);
  console.log(`\n[generic] HERO: ${pick.name} (${pick.w}x${pick.h}) -> /boats/generic/hero.webp`);
  report['generic'] = { hero: pick.name, w: pick.w, h: pick.h };
}

await genericHero();

await fs.writeFile(path.join(REPO, 'scripts', 'convert-report.json'), JSON.stringify(report, null, 2));

// Clean up temp HEIC->JPEG files
try {
  await fs.rm(tmpDir, { recursive: true, force: true });
} catch {}

console.log('\nDONE. Report written.');
