export const navData = {
  barcosConLicencia: [
    { name: 'Jeanneau 595 Reineta', price: 195, url: '/barcos', premium: false },
    { name: 'Zodiac Medline I', price: 181, url: '/barcos', premium: false },
    { name: 'Zodiac Medline II', price: 235, url: '/barcos', premium: false },
    { name: 'Spirit of the Sea', price: 260, url: '/barcos', premium: false },
    { name: 'Costa Brava Boat', price: 320, url: '/barcos', premium: false },
    { name: 'Tio Marc Mano', price: 245, url: '/barcos', premium: false },
    { name: 'Sessa Marine C35', price: 618, url: '/barcos', premium: true },
  ],
  barcosSinLicencia: [
    { name: 'Remus 450', price: 90, url: '/barcos', premium: false },
    { name: 'Dream Point Boat', price: 71, url: '/barcos', premium: false },
  ],
  /** Menú de experiencias por idioma. */
  experiencias: {
    es: {
      navLabel: 'Experiencias',
      pillar: '/experiencias-barco-roses',
      items: [
        { name: 'Salidas privadas con patrón', url: '/experiencias-barco-roses/excursiones-privadas' },
        { name: 'Sunset Experience', url: '/experiencias-barco-roses/sunset-experience' },
        { name: 'Canal Tour Santa Margarita', url: '/experiencias-barco-roses/canal-tour-santa-margarita' },
      ],
    },
    fr: {
      navLabel: 'Expériences',
      pillar: '/fr/experiences-bateau-roses',
      items: [
        { name: 'Sorties privées avec skipper', url: '/fr/experiences-bateau-roses/excursions-privees' },
        { name: 'Sunset Experience', url: '/fr/experiences-bateau-roses/sunset-experience' },
        { name: 'Canal Tour Santa Margarita', url: '/fr/experiences-bateau-roses/canal-tour-santa-margarita' },
      ],
    },
    en: {
      navLabel: 'Experiences',
      pillar: '/en/boat-experiences-roses',
      items: [
        { name: 'Private excursions with skipper', url: '/en/boat-experiences-roses/private-excursions' },
        { name: 'Sunset Experience', url: '/en/boat-experiences-roses/sunset-experience' },
        { name: 'Canal Tour Santa Margarita', url: '/en/boat-experiences-roses/canal-tour-santa-margarita' },
      ],
    },
  },
  links: [
    { name: 'Canales Santa Margarita', url: '/canales-santa-margarita' },
    { name: 'Blog', url: '/blog' },
  ],
  pillars: {
    conLicencia: '/alquiler-barco-con-licencia-roses',
    sinLicencia: '/alquiler-barco-sin-licencia-roses',
  },
  /** Página índice de toda la flota */
  barcosIndex: '/barcos',
};
