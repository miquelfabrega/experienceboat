export const navData = {
  barcosConLicencia: [
    { name: 'Reineta (Jeanneau 595)', price: 195, url: '/barcos/jeanneau-595-reineta', premium: false },
    { name: 'Orange Kiwi 620', price: 235, url: '/barcos/orange-kiwi-620', premium: false },
    { name: 'RAF IV Mano 21,5 Sport Fish', price: 245, url: '/barcos/raf-iv-mano', premium: false },
    { name: 'Spirit of the Sea 675', price: 260, url: '/barcos/spirit-of-the-sea-675', premium: false },
    { name: 'Justi Saura Llaut 850', price: 290, url: '/barcos/justi-saura-llaut-850', premium: true },
  ],
  barcosSinLicencia: [
    { name: 'Dream Point 420', price: 70, url: '/barcos/dream-point-420', premium: false },
    { name: 'Remus 450', price: 90, url: '/barcos/remus-450', premium: false },
    { name: 'Marine Brezze 450', price: 90, url: '/barcos/marine-brezze-450', premium: false },
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
        { name: 'Cap de Creus — 3 Calas', url: '/experiencias-barco-roses/cap-de-creus-calas' },
        { name: 'Excursión a Cadaqués', url: '/experiencias-barco-roses/cadaques' },
        { name: 'Cuevas & Snorkel', url: '/experiencias-barco-roses/cuevas-snorkel' },
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
