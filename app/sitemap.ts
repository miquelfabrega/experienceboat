import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.experienceboat.es';

// Fecha de última modificación para cada grupo
const NOW = new Date();
const PILLAR_DATE = new Date('2025-06-01');
const BLOG_DATE = new Date('2025-09-01');

type SitemapEntry = MetadataRoute.Sitemap[number];

function url(
  path: string,
  priority: number,
  changeFrequency: SitemapEntry['changeFrequency'],
  lastModified: Date = PILLAR_DATE,
): SitemapEntry {
  return {
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─── HOME ───────────────────────────────────────────────────────────────
    url('/', 1.0, 'weekly', NOW),

    // ─── SILO 1 — Alquiler sin licencia ─────────────────────────────────────
    url('/alquiler-barco-sin-licencia-roses', 0.9, 'monthly'),
    url('/alquiler-barco-sin-licencia-roses/canales-santa-margarita', 0.8, 'monthly'),
    url('/alquiler-barco-sin-licencia-roses/parejas', 0.8, 'monthly'),

    // ─── SILO 2 — Alquiler con licencia ─────────────────────────────────────
    url('/alquiler-barco-con-licencia-roses', 0.9, 'monthly'),
    url('/alquiler-barco-con-licencia-roses/bahia-de-roses', 0.8, 'monthly'),
    url('/alquiler-barco-con-licencia-roses/lancha-costa-brava', 0.8, 'monthly'),

    // ─── SILO 3 — Experiencias / excursiones ────────────────────────────────
    url('/experiencias-barco-roses', 0.9, 'monthly'),
    url('/experiencias-barco-roses/excursiones-privadas', 0.8, 'monthly'),
    url('/experiencias-barco-roses/sunset-experience', 0.8, 'monthly'),
    url('/experiencias-barco-roses/canal-tour-santa-margarita', 0.8, 'monthly'),

    // ─── SILO 4 — Canales Santa Margarita ───────────────────────────────────
    url('/canales-santa-margarita', 0.9, 'monthly'),
    url('/canales-santa-margarita/que-ver', 0.8, 'monthly'),
    url('/canales-santa-margarita/ruta-cap-de-creus', 0.8, 'monthly'),

    // ─── Flota ──────────────────────────────────────────────────────────────
    url('/barcos', 0.7, 'monthly'),

    // ─── Blog ───────────────────────────────────────────────────────────────
    url('/blog', 0.7, 'weekly', BLOG_DATE),
    url('/blog/ruta-barco-cap-de-creus-roses', 0.6, 'yearly', BLOG_DATE),
    url('/blog/mejores-lugares-snorkel-costa-brava', 0.6, 'yearly', BLOG_DATE),
    url('/blog/planificar-escapada-barco-costa-brava', 0.6, 'yearly', BLOG_DATE),
    url('/blog/primera-vez-barco-sin-licencia-roses', 0.6, 'yearly', BLOG_DATE),

    // ─── Empresa ────────────────────────────────────────────────────────────
    url('/sobre-nosotros', 0.5, 'yearly'),
    url('/contacto', 0.6, 'monthly'),

    // ─── FR — Location bateau sans permis ───────────────────────────────────
    url('/fr', 0.8, 'weekly', NOW),
    url('/fr/location-bateau-sans-permis-roses', 0.8, 'monthly'),
    url('/fr/location-bateau-sans-permis-roses/canaux-santa-margarita', 0.7, 'monthly'),
    url('/fr/location-bateau-sans-permis-roses/couples', 0.7, 'monthly'),

    // ─── FR — Location bateau avec permis ───────────────────────────────────
    url('/fr/location-bateau-avec-permis-roses', 0.8, 'monthly'),
    url('/fr/location-bateau-avec-permis-roses/baie-de-roses', 0.7, 'monthly'),
    url('/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage', 0.7, 'monthly'),

    // ─── FR — Expériences bateau ─────────────────────────────────────────────
    url('/fr/experiences-bateau-roses', 0.8, 'monthly'),
    url('/fr/experiences-bateau-roses/excursions-privees', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/sunset-experience', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/canal-tour-santa-margarita', 0.7, 'monthly'),

    // ─── FR — Canaux Santa Margarita ─────────────────────────────────────────
    url('/fr/canaux-santa-margarita', 0.8, 'monthly'),
    url('/fr/canaux-santa-margarita/que-voir', 0.7, 'monthly'),
    url('/fr/canaux-santa-margarita/itineraire-cap-de-creus', 0.7, 'monthly'),

    // ─── FR — Blog ───────────────────────────────────────────────────────────
    url('/fr/blog', 0.6, 'weekly', BLOG_DATE),
    url('/fr/blog/itineraire-bateau-cap-de-creus-roses', 0.5, 'yearly', BLOG_DATE),
    url('/fr/blog/meilleurs-endroits-snorkeling-costa-brava', 0.5, 'yearly', BLOG_DATE),
    url('/fr/blog/conseils-planifier-escapade-bateau-costa-brava', 0.5, 'yearly', BLOG_DATE),
    url('/fr/blog/premiere-fois-bateau-sans-permis-roses', 0.5, 'yearly', BLOG_DATE),

    // ─── FR — Empresa ────────────────────────────────────────────────────────
    url('/fr/a-propos', 0.4, 'yearly'),
    url('/fr/contact', 0.6, 'monthly'),

    // ─── EN — Boat rental ────────────────────────────────────────────────────
    url('/en', 0.7, 'weekly', NOW),
    url('/en/boat-rental-without-licence-roses', 0.7, 'monthly'),
    url('/en/boat-rental-without-licence-roses/santa-margarita-canals', 0.6, 'monthly'),
    url('/en/boat-rental-without-licence-roses/couples', 0.6, 'monthly'),
    url('/en/boat-rental-with-licence-roses', 0.7, 'monthly'),
    url('/en/boat-rental-with-licence-roses/roses-bay', 0.6, 'monthly'),
    url('/en/boat-rental-with-licence-roses/motorboat-costa-brava', 0.6, 'monthly'),

    // ─── EN — Boat experiences ───────────────────────────────────────────────
    url('/en/boat-experiences-roses', 0.7, 'monthly'),
    url('/en/boat-experiences-roses/private-excursions', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/sunset-experience', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/canal-tour-santa-margarita', 0.6, 'monthly'),

    // ─── EN — Santa Margarita Canals ─────────────────────────────────────────
    url('/en/santa-margarita-canals-roses', 0.7, 'monthly'),
    url('/en/santa-margarita-canals-roses/what-to-see', 0.6, 'monthly'),
    url('/en/santa-margarita-canals-roses/cap-de-creus-route', 0.6, 'monthly'),

    // ─── EN — Blog ───────────────────────────────────────────────────────────
    url('/en/blog', 0.5, 'weekly', BLOG_DATE),
    url('/en/blog/boat-trip-cap-de-creus-from-roses', 0.5, 'yearly', BLOG_DATE),
    url('/en/blog/best-snorkeling-spots-costa-brava', 0.5, 'yearly', BLOG_DATE),
    url('/en/blog/tips-planning-boat-trip-costa-brava', 0.5, 'yearly', BLOG_DATE),
    url('/en/blog/first-time-boat-no-licence-roses', 0.5, 'yearly', BLOG_DATE),

    // ─── EN — About / Contact ────────────────────────────────────────────────
    url('/en/about', 0.4, 'yearly'),
    url('/en/boats', 0.5, 'monthly'),
    url('/en/contact', 0.6, 'monthly'),

    // ─── EXCLUIDAS (noindex): /test/, /accesibilidad/, /aviso-legal/,
    //     /cookies/, /politica-privacidad/ — NO aparecen en este sitemap.
  ];
}
