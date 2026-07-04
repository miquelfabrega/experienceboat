import type { MetadataRoute } from 'next';
import { getBarcoSlugs } from '@/lib/data/fleet';
import { alternatesForPath } from '@/lib/i18n/routes';

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
  const languages = alternatesForPath(path);
  return {
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(languages ? { alternates: { languages } } : {}),
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
    url('/alquiler-lancha-roses', 0.9, 'monthly'),

    // ─── SILO 3 — Experiencias / excursiones ────────────────────────────────
    url('/experiencias-barco-roses', 0.9, 'monthly'),
    url('/experiencias-barco-roses/excursiones-privadas', 0.8, 'monthly'),
    url('/experiencias-barco-roses/sunset-experience', 0.8, 'monthly'),
    url('/experiencias-barco-roses/canal-tour-santa-margarita', 0.8, 'monthly'),
    url('/experiencias-barco-roses/cap-de-creus-calas', 0.8, 'monthly'),
    url('/experiencias-barco-roses/cadaques', 0.8, 'monthly'),
    url('/experiencias-barco-roses/cuevas-snorkel', 0.8, 'monthly'),

    // ─── SILO 4 — Canales Santa Margarita ───────────────────────────────────
    url('/canales-santa-margarita', 0.9, 'monthly'),
    url('/canales-santa-margarita/que-ver', 0.8, 'monthly'),
    url('/canales-santa-margarita/ruta-cap-de-creus', 0.8, 'monthly'),

    // ─── Precios y temporadas ───────────────────────────────────────────────
    url('/precios-alquiler-barco-roses', 0.85, 'monthly'),

    // ─── Guías de destino (Cluster B) ───────────────────────────────────────
    url('/cap-de-creus-en-barco', 0.8, 'monthly'),
    url('/cala-montjoi', 0.7, 'monthly'),
    url('/cala-murtra', 0.7, 'monthly'),
    url('/que-ver-en-roses', 0.75, 'monthly'),
    url('/cadaques-en-barco', 0.75, 'monthly'),

    // ─── Flota ──────────────────────────────────────────────────────────────
    url('/barcos', 0.7, 'monthly'),
    ...getBarcoSlugs().map((slug) => url(`/barcos/${slug}`, 0.6, 'monthly')),

    // ─── Blog ───────────────────────────────────────────────────────────────
    url('/blog', 0.7, 'weekly', BLOG_DATE),
    url('/blog/ruta-barco-cap-de-creus-roses', 0.6, 'yearly', BLOG_DATE),
    url('/blog/mejores-lugares-snorkel-costa-brava', 0.6, 'yearly', BLOG_DATE),
    url('/blog/planificar-escapada-barco-costa-brava', 0.6, 'yearly', BLOG_DATE),
    url('/blog/primera-vez-barco-sin-licencia-roses', 0.6, 'yearly', BLOG_DATE),

    // ─── Empresa ────────────────────────────────────────────────────────────
    url('/sobre-nosotros', 0.5, 'yearly'),
    url('/contacto', 0.6, 'monthly'),
    url('/reservas', 0.7, 'monthly'),

    // ─── Legales ───────────────────────────────────────────────────────────
    url('/accesibilidad', 0.2, 'yearly'),
    url('/politica-privacidad', 0.2, 'yearly'),
    url('/aviso-legal', 0.2, 'yearly'),
    url('/cookies', 0.2, 'yearly'),

    // ─── CA — Inici (mirror complet d'ES) ───────────────────────────────────
    url('/ca', 0.9, 'weekly', NOW),

    // ─── CA — Lloguer sense llicència ───────────────────────────────────────
    url('/ca/lloguer-vaixell-sense-llicencia-roses', 0.85, 'monthly'),
    url('/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida', 0.75, 'monthly'),
    url('/ca/lloguer-vaixell-sense-llicencia-roses/parelles', 0.75, 'monthly'),

    // ─── CA — Lloguer amb llicència ─────────────────────────────────────────
    url('/ca/lloguer-vaixell-amb-llicencia-roses', 0.85, 'monthly'),
    url('/ca/lloguer-vaixell-amb-llicencia-roses/badia-de-roses', 0.75, 'monthly'),
    url('/ca/lloguer-vaixell-amb-llicencia-roses/llanxa-costa-brava', 0.75, 'monthly'),
    url('/ca/lloguer-llanxa-roses', 0.75, 'monthly'),

    // ─── CA — Experiències / excursions ─────────────────────────────────────
    url('/ca/experiencies-vaixell-roses', 0.85, 'monthly'),
    url('/ca/experiencies-vaixell-roses/excursions-privades', 0.75, 'monthly'),
    url('/ca/experiencies-vaixell-roses/sunset-experience', 0.75, 'monthly'),
    url('/ca/experiencies-vaixell-roses/canal-tour-santa-margarida', 0.75, 'monthly'),
    url('/ca/experiencies-vaixell-roses/cap-de-creus-cales', 0.75, 'monthly'),
    url('/ca/experiencies-vaixell-roses/cadaques', 0.75, 'monthly'),
    url('/ca/experiencies-vaixell-roses/coves-esnorquel', 0.75, 'monthly'),

    // ─── CA — Canals Santa Margarida ────────────────────────────────────────
    url('/ca/canals-santa-margarida', 0.85, 'monthly'),
    url('/ca/canals-santa-margarida/que-veure', 0.75, 'monthly'),
    url('/ca/canals-santa-margarida/ruta-cap-de-creus', 0.75, 'monthly'),

    // ─── CA — Preus i temporades ────────────────────────────────────────────
    url('/ca/preus-lloguer-vaixell-roses', 0.8, 'monthly'),

    // ─── CA — Guies de destí ────────────────────────────────────────────────
    url('/ca/cap-de-creus-en-vaixell', 0.75, 'monthly'),
    url('/ca/cala-montjoi', 0.7, 'monthly'),
    url('/ca/cala-murtra', 0.7, 'monthly'),
    url('/ca/que-veure-a-roses', 0.7, 'monthly'),
    url('/ca/cadaques-en-vaixell', 0.7, 'monthly'),

    // ─── CA — Flota ─────────────────────────────────────────────────────────
    url('/ca/embarcacions', 0.65, 'monthly'),
    ...getBarcoSlugs().map((slug) => url(`/ca/embarcacions/${slug}`, 0.55, 'monthly')),

    // ─── CA — Blog ──────────────────────────────────────────────────────────
    url('/ca/blog', 0.6, 'weekly', BLOG_DATE),
    url('/ca/blog/ruta-vaixell-cap-de-creus-roses', 0.5, 'yearly', BLOG_DATE),
    url('/ca/blog/millors-llocs-esnorquel-costa-brava', 0.5, 'yearly', BLOG_DATE),
    url('/ca/blog/planificar-escapada-vaixell-costa-brava', 0.5, 'yearly', BLOG_DATE),
    url('/ca/blog/primera-vegada-vaixell-sense-llicencia-roses', 0.5, 'yearly', BLOG_DATE),

    // ─── CA — Empresa ───────────────────────────────────────────────────────
    url('/ca/sobre-nosaltres', 0.45, 'yearly'),
    url('/ca/contacte', 0.6, 'monthly'),
    url('/ca/reserves', 0.7, 'monthly'),

    // ─── CA — Legals: PENDENTS de revisió jurídica, no publicats encara ──────
    // url('/ca/accessibilitat', 0.2, 'yearly'),
    // url('/ca/politica-privacitat', 0.2, 'yearly'),
    // url('/ca/avis-legal', 0.2, 'yearly'),
    // url('/ca/cookies', 0.2, 'yearly'),

    // ─── FR — Location bateau sans permis ───────────────────────────────────
    url('/fr', 0.8, 'weekly', NOW),
    url('/fr/location-bateau-sans-permis-roses', 0.8, 'monthly'),
    url('/fr/location-bateau-sans-permis-roses/canaux-santa-margarita', 0.7, 'monthly'),
    url('/fr/location-bateau-sans-permis-roses/couples', 0.7, 'monthly'),

    // ─── FR — Location bateau avec permis ───────────────────────────────────
    url('/fr/location-bateau-avec-permis-roses', 0.8, 'monthly'),
    url('/fr/location-bateau-avec-permis-roses/baie-de-roses', 0.7, 'monthly'),
    url('/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage', 0.7, 'monthly'),
    url('/fr/location-vedette-roses', 0.7, 'monthly'),

    // ─── FR — Expériences bateau ─────────────────────────────────────────────
    url('/fr/experiences-bateau-roses', 0.8, 'monthly'),
    url('/fr/experiences-bateau-roses/excursions-privees', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/sunset-experience', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/canal-tour-santa-margarita', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/cap-de-creus-criques', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/cadaques', 0.7, 'monthly'),
    url('/fr/experiences-bateau-roses/grottes-snorkeling', 0.7, 'monthly'),

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
    url('/fr/reservation', 0.7, 'monthly'),
    url('/fr/tarifs-location-bateau-roses', 0.8, 'monthly'),
    url('/fr/cap-de-creus-en-bateau', 0.8, 'monthly'),
    url('/fr/cala-montjoi', 0.7, 'monthly'),
    url('/fr/cala-murtra', 0.7, 'monthly'),
    url('/fr/que-faire-a-rosas', 0.75, 'monthly'),
    url('/fr/cadaques-en-bateau', 0.75, 'monthly'),
    url('/fr/bateaux', 0.5, 'monthly'),
    ...getBarcoSlugs().map((slug) => url(`/fr/bateaux/${slug}`, 0.45, 'monthly')),

    // ─── EN — Boat rental ────────────────────────────────────────────────────
    url('/en', 0.7, 'weekly', NOW),
    url('/en/boat-rental-without-licence-roses', 0.7, 'monthly'),
    url('/en/boat-rental-without-licence-roses/santa-margarita-canals', 0.6, 'monthly'),
    url('/en/boat-rental-without-licence-roses/couples', 0.6, 'monthly'),
    url('/en/boat-rental-with-licence-roses', 0.7, 'monthly'),
    url('/en/boat-rental-with-licence-roses/roses-bay', 0.6, 'monthly'),
    url('/en/boat-rental-with-licence-roses/motorboat-costa-brava', 0.6, 'monthly'),
    url('/en/motorboat-rental-roses', 0.6, 'monthly'),

    // ─── EN — Boat experiences ───────────────────────────────────────────────
    url('/en/boat-experiences-roses', 0.7, 'monthly'),
    url('/en/boat-experiences-roses/private-excursions', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/sunset-experience', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/canal-tour-santa-margarita', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/cap-de-creus-coves', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/cadaques', 0.6, 'monthly'),
    url('/en/boat-experiences-roses/caves-snorkeling', 0.6, 'monthly'),

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

    // ─── EN — Prices ─────────────────────────────────────────────────────────
    url('/en/boat-rental-prices-roses', 0.8, 'monthly'),

    // ─── EN — Destination guides ─────────────────────────────────────────────
    url('/en/cap-de-creus-by-boat', 0.75, 'monthly'),
    url('/en/cala-montjoi', 0.7, 'monthly'),
    url('/en/cala-murtra', 0.7, 'monthly'),
    url('/en/what-to-see-in-roses', 0.7, 'monthly'),
    url('/en/cadaques-by-boat', 0.7, 'monthly'),

    // ─── EN — About / Contact ────────────────────────────────────────────────
    url('/en/about', 0.4, 'yearly'),
    url('/en/boats', 0.5, 'monthly'),
    ...getBarcoSlugs().map((slug) => url(`/en/boats/${slug}`, 0.45, 'monthly')),
    url('/en/contact', 0.6, 'monthly'),
    url('/en/booking', 0.7, 'monthly'),

    // ─── EXCLUIDAS: /test/ (bloqueada en robots.ts) — NO aparece en este sitemap.
  ];
}
