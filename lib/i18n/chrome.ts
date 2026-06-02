/**
 * Textos (labels) del chrome de navegación por locale.
 * Las URLs viven en `routes.ts`; aquí solo el copy traducible del Navbar,
 * megamenús y Drawer. Footer tiene su propio COPY interno.
 */

import type { Locale } from './routes';

export interface ChromeCopy {
  boats: string;            // "Barcos"
  allBoats: string;         // "Todos los barcos →"
  withLicence: string;      // "Con licencia"
  withoutLicence: string;   // "Sin licencia"
  fromPrice: string;        // "desde" (precede al precio)
  noLicenceTitle: string;   // tarjeta megamenú: "¿No tienes licencia?"
  noLicenceCta: string;     // "Descubre las experiencias con patrón"
  experiences: string;      // navLabel "Experiencias"
  allExperiences: string;   // "Todas las experiencias →"
  canals: string;           // link "Canales Santa Margarita"
  blog: string;             // link "Blog"
  book: string;             // CTA "Reservar →"
  menu: string;             // drawer "Menú"
  openMenu: string;
  closeMenu: string;
  expandBoats: string;
  collapseBoats: string;
}

export const CHROME: Record<Locale, ChromeCopy> = {
  es: {
    boats: 'Barcos',
    allBoats: 'Todos los barcos →',
    withLicence: 'Con licencia',
    withoutLicence: 'Sin licencia',
    fromPrice: 'desde',
    noLicenceTitle: '¿No tienes licencia?',
    noLicenceCta: 'Descubre las experiencias con patrón',
    experiences: 'Experiencias',
    allExperiences: 'Todas las experiencias →',
    canals: 'Canales Santa Margarita',
    blog: 'Blog',
    book: 'Reservar',
    menu: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    expandBoats: 'Expandir submenú Barcos',
    collapseBoats: 'Contraer submenú Barcos',
  },
  ca: {
    boats: 'Embarcacions',
    allBoats: 'Totes les embarcacions →',
    withLicence: 'Amb llicència',
    withoutLicence: 'Sense llicència',
    fromPrice: 'des de',
    noLicenceTitle: 'No teniu llicència?',
    noLicenceCta: 'Descobriu les experiències amb patró',
    experiences: 'Experiències',
    allExperiences: 'Totes les experiències →',
    canals: 'Canals Santa Margarida',
    blog: 'Blog',
    book: 'Reservar',
    menu: 'Menú',
    openMenu: 'Obrir menú',
    closeMenu: 'Tancar menú',
    expandBoats: 'Desplegar submenú Embarcacions',
    collapseBoats: 'Plegar submenú Embarcacions',
  },
  fr: {
    boats: 'Bateaux',
    allBoats: 'Tous les bateaux →',
    withLicence: 'Avec permis',
    withoutLicence: 'Sans permis',
    fromPrice: 'à partir de',
    noLicenceTitle: "Vous n'avez pas de permis ?",
    noLicenceCta: 'Découvrez les expériences avec skipper',
    experiences: 'Expériences',
    allExperiences: 'Toutes les expériences →',
    canals: 'Canaux Santa Margarita',
    blog: 'Blog',
    book: 'Réserver',
    menu: 'Menu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    expandBoats: 'Développer le sous-menu Bateaux',
    collapseBoats: 'Réduire le sous-menu Bateaux',
  },
  en: {
    boats: 'Boats',
    allBoats: 'All boats →',
    withLicence: 'With licence',
    withoutLicence: 'Without licence',
    fromPrice: 'from',
    noLicenceTitle: "No licence?",
    noLicenceCta: 'Discover our skippered experiences',
    experiences: 'Experiences',
    allExperiences: 'All experiences →',
    canals: 'Santa Margarita Canals',
    blog: 'Blog',
    book: 'Book',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    expandBoats: 'Expand Boats submenu',
    collapseBoats: 'Collapse Boats submenu',
  },
};

/**
 * Submenú de experiencias por locale: cada item con su route-id de página y
 * label traducido. Los slugs los resuelve `localizedHref` desde routes.ts…
 * salvo las sub-landings, cuyos slugs completos difieren por idioma y se
 * declaran aquí (algunas no existen en EN/FR todavía → no se listan ahí).
 */
export interface ExpItem {
  label: string;
  href: string;
}

export const EXPERIENCES_MENU: Record<Locale, ExpItem[]> = {
  es: [
    { label: 'Salidas privadas con patrón', href: '/experiencias-barco-roses/excursiones-privadas' },
    { label: 'Sunset Experience', href: '/experiencias-barco-roses/sunset-experience' },
    { label: 'Canal Tour Santa Margarita', href: '/experiencias-barco-roses/canal-tour-santa-margarita' },
    { label: 'Cap de Creus — 3 Calas', href: '/experiencias-barco-roses/cap-de-creus-calas' },
    { label: 'Excursión a Cadaqués', href: '/experiencias-barco-roses/cadaques' },
    { label: 'Cuevas & Snorkel', href: '/experiencias-barco-roses/cuevas-snorkel' },
  ],
  ca: [
    { label: 'Sortides privades amb patró', href: '/ca/experiencies-vaixell-roses/excursions-privades' },
    { label: 'Sunset Experience', href: '/ca/experiencies-vaixell-roses/sunset-experience' },
    { label: 'Canal Tour Santa Margarida', href: '/ca/experiencies-vaixell-roses/canal-tour-santa-margarida' },
    { label: 'Cap de Creus — 3 Cales', href: '/ca/experiencies-vaixell-roses/cap-de-creus-cales' },
    { label: 'Excursió a Cadaqués', href: '/ca/experiencies-vaixell-roses/cadaques' },
    { label: 'Coves & Snorkel', href: '/ca/experiencies-vaixell-roses/coves-esnorquel' },
  ],
  fr: [
    { label: 'Sorties privées avec skipper', href: '/fr/experiences-bateau-roses/excursions-privees' },
    { label: 'Sunset Experience', href: '/fr/experiences-bateau-roses/sunset-experience' },
    { label: 'Canal Tour Santa Margarita', href: '/fr/experiences-bateau-roses/canal-tour-santa-margarita' },
    { label: 'Cap de Creus — Criques', href: '/fr/experiences-bateau-roses/cap-de-creus-criques' },
    { label: 'Excursion à Cadaqués', href: '/fr/experiences-bateau-roses/cadaques' },
    { label: 'Grottes & Snorkeling', href: '/fr/experiences-bateau-roses/grottes-snorkeling' },
  ],
  en: [
    { label: 'Private excursions with skipper', href: '/en/boat-experiences-roses/private-excursions' },
    { label: 'Sunset Experience', href: '/en/boat-experiences-roses/sunset-experience' },
    { label: 'Canal Tour Santa Margarita', href: '/en/boat-experiences-roses/canal-tour-santa-margarita' },
    { label: 'Cap de Creus — Coves', href: '/en/boat-experiences-roses/cap-de-creus-coves' },
    { label: 'Trip to Cadaqués', href: '/en/boat-experiences-roses/cadaques' },
    { label: 'Caves & Snorkeling', href: '/en/boat-experiences-roses/caves-snorkeling' },
  ],
};
