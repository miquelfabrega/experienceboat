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

  canals: {
    es: '/canales-santa-margarita',
    en: '/en/santa-margarita-canals-roses',
    fr: '/fr/canaux-santa-margarita',
    ca: '/ca/canals-santa-margarida',
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

  // Páginas que aún no existen en todos los locales → fallback a ES.
  privacy: { es: '/politica-privacidad', en: null, fr: null, ca: null },
  legalNotice: { es: '/aviso-legal', en: null, fr: null, ca: null },
  cookies: { es: '/cookies', en: null, fr: null, ca: null },
  accessibility: { es: '/accesibilidad', en: null, fr: null, ca: null },
} as const satisfies RouteTable;

/** route-ids válidos. El tipado impide pasar uno inexistente a `localizedHref`. */
export type RouteId = keyof typeof ROUTES;

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
