const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Evita EMFILE: "too many open files" en macOS con el file watcher (Watchpack).
  // Usa polling en desarrollo en lugar de un watcher nativo por cada archivo.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 750, 828, 1080, 1280, 1600],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async redirects() {
    return [
      // ── Silos — URLs antiguas de WordPress ──
      {
        source: '/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-con-licencia/',
        destination: '/alquiler-barco-con-licencia-roses/',
        permanent: true,
      },
      // ── Blog — posts heredados con URLs antiguas (datos de Search Console) ──
      {
        source: '/ruta-en-barco-al-cap-de-creus/:path*',
        destination: '/blog/ruta-barco-cap-de-creus-roses/',
        permanent: true,
      },
      {
        source: '/los-mejores-lugares-para-hacer-snorkel-en-la-costa-brava-explorando-las-maravillas-submarinas-de-la-region/:path*',
        destination: '/blog/mejores-lugares-snorkel-costa-brava/',
        permanent: true,
      },
      {
        source: '/consejos-para-planificar-la-escapada-perfecta-en-barco-en-la-costa-brava/:path*',
        destination: '/blog/planificar-escapada-barco-costa-brava/',
        permanent: true,
      },
      // ── Barcos — fichas inactivas/retiradas → índice ──
      { source: '/barcos/zodiac-medline-i', destination: '/barcos/', permanent: true },
      { source: '/barcos/zodiac-medline-ii', destination: '/barcos/', permanent: true },
      { source: '/barcos/costa-brava-joker', destination: '/barcos/', permanent: true },
      { source: '/barcos/costa-brava-boat', destination: '/barcos/', permanent: true },
      // ── Barcos — slugs antiguos → nuevo slug equivalente (flyer 2026) ──
      { source: '/barcos/tio-marc-mano', destination: '/barcos/raf-iv-mano', permanent: true },
      { source: '/barcos/sessa-marine-c35', destination: '/barcos/justi-saura-llaut-850', permanent: true },
      { source: '/barcos/orange-kiwi', destination: '/barcos/orange-kiwi-620', permanent: true },
      { source: '/barcos/spirit-of-the-sea', destination: '/barcos/spirit-of-the-sea-675', permanent: true },
      { source: '/barcos/marine-breeze', destination: '/barcos/marine-brezze-450', permanent: true },
      { source: '/barcos/dream-line-430', destination: '/barcos/dream-point-420', permanent: true },
      { source: '/barcos/dream-point-boat', destination: '/barcos/dream-point-420', permanent: true },
      { source: '/dream-line-430', destination: '/barcos/dream-point-420', permanent: true },
      // ── Barcos — URLs antiguas en raíz (WordPress) → ficha o índice ──
      { source: '/jeanneau-595-reineta', destination: '/barcos/jeanneau-595-reineta', permanent: true },
      { source: '/sessa-marine-c35', destination: '/barcos/justi-saura-llaut-850', permanent: true },
      { source: '/costa-brava-boat', destination: '/barcos/', permanent: true },
      { source: '/dream-point-boat', destination: '/barcos/dream-point-420', permanent: true },
      { source: '/zodiac-medline-ii', destination: '/barcos/', permanent: true },
      { source: '/zodiac-medline-i', destination: '/barcos/', permanent: true },
      { source: '/tio-marc-mano', destination: '/barcos/raf-iv-mano', permanent: true },
      // ── Experiencia antigua ──
      { source: '/experiencias-barco-roses/calas-cap-de-creus', destination: '/blog/ruta-barco-cap-de-creus-roses/', permanent: true },
      // ── Páginas EN antiguas ──
      { source: '/en/boat-hire-no-licence-roses', destination: '/en/boat-rental-without-licence-roses/', permanent: true },
      { source: '/en/boat-rental-no-licence-roses', destination: '/en/boat-rental-without-licence-roses/', permanent: true },
      { source: '/en/boat-hire-with-licence-roses', destination: '/en/boat-rental-with-licence-roses/', permanent: true },
      { source: '/en/santa-margarita-canals', destination: '/en/santa-margarita-canals-roses/', permanent: true },
      // ── URL ES usada en contexto FR ──
      { source: '/fr/experiencias-barco-roses', destination: '/fr/experiences-bateau-roses/', permanent: true },
      // ── Search Console: 404 y "rastreada sin indexar" — URLs WP heredadas ──
      { source: '/canal-tour-santa-margarita', destination: '/experiencias-barco-roses/canal-tour-santa-margarita/', permanent: true },
      { source: '/politica-de-privacidad', destination: '/politica-privacidad/', permanent: true },
      { source: '/politica-de-cookies-ue', destination: '/cookies/', permanent: true },
      { source: '/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-sin-licencia', destination: '/alquiler-barco-sin-licencia-roses/', permanent: true },
      { source: '/alquiler-de-barcos-con-licencia', destination: '/alquiler-barco-con-licencia-roses/', permanent: true },
      { source: '/alquiler-de-barcos-sin-licencia', destination: '/alquiler-barco-sin-licencia-roses/', permanent: true },
      { source: '/barco-en-roses/excursiones-en-barco-en-roses', destination: '/experiencias-barco-roses/', permanent: true },
      { source: '/excursiones-en-barco-en-roses', destination: '/experiencias-barco-roses/', permanent: true },
      // ── Experiencia jubilada ──
      { source: '/excursion-en-moto-de-agua-a-playa-almadraba', destination: '/experiencias-barco-roses/', permanent: true },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);