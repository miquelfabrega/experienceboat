import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const REPO = '/Users/gironatour/Desktop/work/experienceboat1';
const SRC = path.join(REPO, 'EXPERIENCE BOAT MIQUEL', 'SANTA MARGARITA');
const OUT = path.join(REPO, 'public', 'santa-margarita');

// Selección de tomas de dron (atardecer, canales de Santa Margarita, Roses).
// kind: 'hero'    -> width 1920, quality 82
//       'section' -> width 1600, quality 80
const JOBS = [
  { src: 'DJI_20260408183138_0201_D.JPG', out: 'hero-canales.webp',     kind: 'hero' },
  { src: 'DJI_20260408183109_0196_D.JPG', out: 'hero-canal-tour.webp',  kind: 'hero' },
  { src: 'DJI_20260408183131_0198_D.JPG', out: 'marina-descubre.webp',  kind: 'section' },
  { src: 'DJI_20260408183109_0195_D.JPG', out: 'canal-tour-card.webp',  kind: 'section' },
];

const CFG = {
  hero:    { width: 1920, quality: 82 },
  section: { width: 1600, quality: 80 },
};

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  for (const job of JOBS) {
    const { width, quality } = CFG[job.kind];
    const srcFull = path.join(SRC, job.src);
    const outFull = path.join(OUT, job.out);
    await sharp(srcFull)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outFull);
    const { size } = await fs.stat(outFull);
    const meta = await sharp(outFull).metadata();
    console.log(
      `${job.out.padEnd(22)} ${meta.width}x${meta.height}  ${(size / 1024).toFixed(0)} KB  (from ${job.src})`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
