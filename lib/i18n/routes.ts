/**
 * Registro único de rutas localizadas para el chrome (Navbar, megamenús, Drawer,
 * CookieBanner). Fuente de verdad de los slugs reales por locale.
 *
 * - i18n por route groups: ES es root sin prefijo; en/fr/ca llevan prefijo.
 * - Los slugs difieren por idioma (no es solo el prefijo).
 * - `null` = esa página no existe en ese locale → el helper hace fallback a ES.
 */

export type Locale = 'es' | 'en' | 'fr' | 'ca';

type RouteTable = Record<string, Record<Locale, string | null>>;

const ROUTES = {
  home: { es: '/', en: '/en', fr: '/fr', ca: '/ca' },

  boatsIndex: {
    es: '/barcos',
    en: '/en/boats',
    fr: '/fr/bateaux',
    ca: '/ca/embarcacions',
  },

  rentalWithLicence: {
    es: '/alquiler-barco-con-licencia-roses',
    en: '/en/boat-rental-with-licence-roses',
    fr: '/fr/location-bateau-avec-permis-roses',
    ca: '/ca/lloguer-vaixell-amb-llicencia-roses',
  },

  rentalWithoutLicence: {
    es: '/alquiler-barco-sin-licencia-roses',
    en: '/en/boat-rental-without-licence-roses',
    fr: '/fr/location-bateau-sans-permis-roses',
    ca: '/ca/lloguer-vaixell-sense-llicencia-roses',
  },

  experiences: {
    es: '/experiencias-barco-roses',
    en: '/en/boat-experiences-roses',
    fr: '/fr/experiences-bateau-roses',
    ca: '/ca/experiencies-vaixell-roses',
  },

  // Página de precios y temporadas (intención comercial: comparar tarifas).
  prices: {
    es: '/precios-alquiler-barco-roses',
    en: '/en/boat-rental-prices-roses',
    fr: '/fr/tarifs-location-bateau-roses',
    ca: '/ca/preus-lloguer-vaixell-roses',
  },

  // Landing de conversión (Google Ads) — alquiler de lancha con licencia.
  lanchaRoses: {
    es: '/alquiler-lancha-roses',
    en: '/en/motorboat-rental-roses',
    fr: '/fr/location-vedette-roses',
    ca: '/ca/lloguer-llanxa-roses',
  },

  canals: {
    es: '/canales-santa-margarita',
    en: '/en/santa-margarita-canals-roses',
    fr: '/fr/canaux-santa-margarita',
    ca: '/ca/canals-santa-margarida',
  },

  canalTour: {
    es: '/experiencias-barco-roses/canal-tour-santa-margarita',
    en: '/en/boat-experiences-roses/canal-tour-santa-margarita',
    fr: '/fr/experiences-bateau-roses/canal-tour-santa-margarita',
    ca: '/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
  },

  blog: { es: '/blog', en: '/en/blog', fr: '/fr/blog', ca: '/ca/blog' },

  contact: {
    es: '/contacto',
    en: '/en/contact',
    fr: '/fr/contact',
    ca: '/ca/contacte',
  },

  about: {
    es: '/sobre-nosotros',
    en: '/en/about',
    fr: '/fr/a-propos',
    ca: '/ca/sobre-nosaltres',
  },

  bookings: {
    es: '/reservas',
    en: '/en/booking',
    fr: '/fr/reservation',
    ca: '/ca/reserves',
  },

  // ─── Sub-páginas de silo (para hreflang recíproco + language switcher exacto) ───
  rentalNoLicenceCanals: {
    es: '/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
    en: '/en/boat-rental-without-licence-roses/santa-margarita-canals',
    fr: '/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
    ca: '/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida',
  },
  rentalNoLicenceCouples: {
    es: '/alquiler-barco-sin-licencia-roses/parejas',
    en: '/en/boat-rental-without-licence-roses/couples',
    fr: '/fr/location-bateau-sans-permis-roses/couples',
    ca: '/ca/lloguer-vaixell-sense-llicencia-roses/parelles',
  },
  rentalLicenceBay: {
    es: '/alquiler-barco-con-licencia-roses/bahia-de-roses',
    en: '/en/boat-rental-with-licence-roses/roses-bay',
    fr: '/fr/location-bateau-avec-permis-roses/baie-de-roses',
    ca: '/ca/lloguer-vaixell-amb-llicencia-roses/badia-de-roses',
  },
  rentalLicenceMotorboat: {
    es: '/alquiler-barco-con-licencia-roses/lancha-costa-brava',
    en: '/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    fr: '/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
    ca: '/ca/lloguer-vaixell-amb-llicencia-roses/llanxa-costa-brava',
  },
  expPrivate: {
    es: '/experiencias-barco-roses/excursiones-privadas',
    en: '/en/boat-experiences-roses/private-excursions',
    fr: '/fr/experiences-bateau-roses/excursions-privees',
    ca: '/ca/experiencies-vaixell-roses/excursions-privades',
  },
  expSunset: {
    es: '/experiencias-barco-roses/sunset-experience',
    en: '/en/boat-experiences-roses/sunset-experience',
    fr: '/fr/experiences-bateau-roses/sunset-experience',
    ca: '/ca/experiencies-vaixell-roses/sunset-experience',
  },
  expCapCreus: {
    es: '/experiencias-barco-roses/cap-de-creus-calas',
    en: '/en/boat-experiences-roses/cap-de-creus-coves',
    fr: '/fr/experiences-bateau-roses/cap-de-creus-criques',
    ca: '/ca/experiencies-vaixell-roses/cap-de-creus-cales',
  },
  expCadaques: {
    es: '/experiencias-barco-roses/cadaques',
    en: '/en/boat-experiences-roses/cadaques',
    fr: '/fr/experiences-bateau-roses/cadaques',
    ca: '/ca/experiencies-vaixell-roses/cadaques',
  },
  expSnorkel: {
    es: '/experiencias-barco-roses/cuevas-snorkel',
    en: '/en/boat-experiences-roses/caves-snorkeling',
    fr: '/fr/experiences-bateau-roses/grottes-snorkeling',
    ca: '/ca/experiencies-vaixell-roses/coves-esnorquel',
  },
  canalsWhatToSee: {
    es: '/canales-santa-margarita/que-ver',
    en: '/en/santa-margarita-canals-roses/what-to-see',
    fr: '/fr/canaux-santa-margarita/que-voir',
    ca: '/ca/canals-santa-margarida/que-veure',
  },
  canalsRoute: {
    es: '/canales-santa-margarita/ruta-cap-de-creus',
    en: '/en/santa-margarita-canals-roses/cap-de-creus-route',
    fr: '/fr/canaux-santa-margarita/itineraire-cap-de-creus',
    ca: '/ca/canals-santa-margarida/ruta-cap-de-creus',
  },
  blogCapCreus: {
    es: '/blog/ruta-barco-cap-de-creus-roses',
    en: '/en/blog/boat-trip-cap-de-creus-from-roses',
    fr: '/fr/blog/itineraire-bateau-cap-de-creus-roses',
    ca: '/ca/blog/ruta-vaixell-cap-de-creus-roses',
  },
  blogSnorkel: {
    es: '/blog/mejores-lugares-snorkel-costa-brava',
    en: '/en/blog/best-snorkeling-spots-costa-brava',
    fr: '/fr/blog/meilleurs-endroits-snorkeling-costa-brava',
    ca: '/ca/blog/millors-llocs-esnorquel-costa-brava',
  },
  blogPlanning: {
    es: '/blog/planificar-escapada-barco-costa-brava',
    en: '/en/blog/tips-planning-boat-trip-costa-brava',
    fr: '/fr/blog/conseils-planifier-escapade-bateau-costa-brava',
    ca: '/ca/blog/planificar-escapada-vaixell-costa-brava',
  },
  blogFirstTime: {
    es: '/blog/primera-vez-barco-sin-licencia-roses',
    en: '/en/blog/first-time-boat-no-licence-roses',
    fr: '/fr/blog/premiere-fois-bateau-sans-permis-roses',
    ca: '/ca/blog/primera-vegada-vaixell-sense-llicencia-roses',
  },

  // ─── Guías de destino (Cluster B) — ES + FR; EN/CA pendientes → fallback ES ───
  capDeCreusGuide: {
    es: '/cap-de-creus-en-barco',
    en: null,
    fr: '/fr/cap-de-creus-en-bateau',
    ca: null,
  },
  calaMontjoi: {
    es: '/cala-montjoi',
    en: null,
    fr: '/fr/cala-montjoi',
    ca: null,
  },
  calaMurtra: {
    es: '/cala-murtra',
    en: null,
    fr: '/fr/cala-murtra',
    ca: null,
  },

  // Páginas que aún no existen en todos los locales → fallback a ES.
  privacy: { es: '/politica-privacidad', en: null, fr: null, ca: null },
  legalNotice: { es: '/aviso-legal', en: null, fr: null, ca: null },
  cookies: { es: '/cookies', en: null, fr: null, ca: null },
  accessibility: { es: '/accesibilidad', en: null, fr: null, ca: null },
} as const satisfies RouteTable;

/** route-ids válidos. El tipado impide pasar uno inexistente a `localizedHref`. */
export type RouteId = keyof typeof ROUTES;

/** Host canónico (www). Fuente única para canonicals y hreflang absolutos. */
export const SITE_URL = 'https://www.experienceboat.es';

/** Convierte un path interno ('/', '/fr', '/barcos') en URL absoluta canónica. */
export function absUrl(path: string): string {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path}`;
}

/**
 * Genera el bloque `alternates` (canonical + hreflang recíproco) para un route-id
 * canónico, en el locale dado. Emite hreflang SOLO para los locales donde la página
 * existe realmente (entradas `null` en la tabla se omiten → sin reciprocidad falsa).
 * `x-default` apunta a ES (mercado primario).
 *
 * Uso en una page: `alternates: buildAlternates('canals', 'fr')`.
 */
export function buildAlternates(
  routeId: RouteId,
  locale: Locale,
): { canonical: string; languages: Record<string, string> } {
  const table = ROUTES[routeId];
  const languages: Record<string, string> = {
    'x-default': absUrl(table.es ?? '/'),
  };
  for (const loc of LOCALES) {
    const p = table[loc];
    if (p) languages[loc] = absUrl(p);
  }
  return {
    canonical: absUrl(table[locale] ?? table.es ?? '/'),
    languages,
  };
}

/**
 * Busca el route-id cuyo path (en algún locale) coincide con `path` y devuelve el
 * mapa de hreflang (`languages`) para anotarlo en el sitemap. `undefined` si el path
 * no está en la tabla (fichas de barco dinámicas, legales es-only).
 */
export function alternatesForPath(path: string): Record<string, string> | undefined {
  const norm = path === '/' ? '/' : path.replace(/\/+$/, '');
  for (const [id, table] of Object.entries(ROUTES)) {
    for (const loc of LOCALES) {
      if (table[loc] === norm) return buildAlternates(id as RouteId, loc).languages;
    }
  }
  return undefined;
}

/**
 * Devuelve la URL del route-id en el locale dado.
 * Fallback a ES si la página no existe en ese locale (decisión de producto).
 */
export function localizedHref(routeId: RouteId, locale: Locale): string {
  return ROUTES[routeId][locale] ?? ROUTES[routeId].es;
}

/**
 * URL de la ficha individual de un barco.
 * La ficha de detalle existe en ES y CA; en EN/FR aún no, así que enlaza al
 * índice de flota localizado (ruta que sí existe).
 */
export function boatHref(slug: string, locale: Locale): string {
  if (locale === 'es') return `/barcos/${slug}`;
  if (locale === 'ca') return `/ca/embarcacions/${slug}`;
  return localizedHref('boatsIndex', locale);
}

const LOCALES: readonly Locale[] = ['es', 'en', 'fr', 'ca'];

/** Quita la barra final salvo en la raíz, para comparar contra la tabla de rutas. */
function normalizePath(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

/**
 * Dada la ruta actual, devuelve su equivalente en `target`.
 *
 * Lo usa el selector de idioma para mantener al usuario en la misma página al
 * cambiar de idioma, en vez de mandarlo siempre a la home.
 *
 * Estrategia:
 *  1. Coincidencia exacta en la tabla de rutas → página equivalente.
 *  2. Si no (sub-páginas con slug propio: artículos de blog, sub-experiencias,
 *     ficha de barco), se busca el route-id cuyo path es el prefijo más largo y
 *     se enlaza a su índice localizado (que sí existe en el otro idioma).
 *  3. Sin coincidencia → home del idioma destino.
 */
export function equivalentPath(pathname: string, target: Locale): string {
  const path = normalizePath(pathname);

  // 0. Ficha individual de barco. La detalle existe en ES y CA; en EN/FR no, así
  //    que boatHref enlaza al índice de flota localizado. Detectamos el slug del
  //    barco para mantener al usuario en la MISMA ficha al cambiar a ES/CA.
  const boatMatch =
    path.match(/^\/barcos\/([^/]+)$/) ||
    path.match(/^\/ca\/embarcacions\/([^/]+)$/);
  if (boatMatch) return boatHref(boatMatch[1], target);

  // 1. Coincidencia exacta.
  for (const [id, table] of Object.entries(ROUTES)) {
    for (const loc of LOCALES) {
      if (table[loc] === path) return localizedHref(id as RouteId, target);
    }
  }

  // 2. Prefijo más largo (sub-páginas → índice del silo correspondiente).
  let best: { id: RouteId; len: number } | null = null;
  for (const [id, table] of Object.entries(ROUTES)) {
    for (const loc of LOCALES) {
      const p = table[loc];
      if (p && p !== '/' && path.startsWith(`${p}/`)) {
        if (!best || p.length > best.len) best = { id: id as RouteId, len: p.length };
      }
    }
  }
  if (best) return localizedHref(best.id, target);

  // 3. Fallback: home del idioma destino.
  return localizedHref('home', target);
}
