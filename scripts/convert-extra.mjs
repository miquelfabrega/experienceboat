import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const REPO = '/Users/gironatour/Desktop/work/experienceboat1';
const SRC = path.join(REPO, 'EXPERIENCE BOAT MIQUEL');
const PUB = path.join(REPO, 'public');

// [src, dest, width, quality]
const JOBS = [
  ['fotos generales /Guillola PANO .JPG', 'images/hero/hero-guillola.webp', 2400, 70],
  ['fotos generales /barco_drone-23.jpg', 'images/hero/hero-drone-23.webp', 1920, 70],
  ['drone fotos/toto fotos/barco_camara-76.jpg', 'images/team/toto.webp', 900, 74],
];

for (const [rel, dest, width, quality] of JOBS) {
  const srcFull = path.join(SRC, rel);
  const destFull = path.join(PUB, dest);
  await fs.mkdir(path.dirname(destFull), { recursive: true });
  await sharp(srcFull)
    .rotate() // honor EXIF orientation
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destFull);
  const { size } = await fs.stat(destFull);
  const meta = await sharp(destFull).metadata();
  console.log(`${dest}  ${meta.width}x${meta.height}  ${(size / 1024).toFixed(0)} KB`);
}
