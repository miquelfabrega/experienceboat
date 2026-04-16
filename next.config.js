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
      // ── Barcos — fichas movidas de /barcos/X a raíz ──
      { source: '/barcos/remus-450', destination: '/barcos/', permanent: true },
      { source: '/barcos/spirit-of-the-sea', destination: '/barcos/', permanent: true },
      { source: '/barcos/tio-marc-mano', destination: '/barcos/', permanent: true },
      { source: '/barcos/dream-point-boat', destination: '/barcos/', permanent: true },
      { source: '/barcos/zodiac-medline-i', destination: '/barcos/', permanent: true },
      { source: '/barcos/zodiac-medline-ii', destination: '/barcos/', permanent: true },
      { source: '/barcos/sessa-marine-c35', destination: '/barcos/', permanent: true },
      { source: '/barcos/jeanneau-595-reineta', destination: '/barcos/', permanent: true },
      { source: '/barcos/costa-brava-boat', destination: '/barcos/', permanent: true },
      // ── Barcos — URLs antiguas en raíz (WordPress) ──
      { source: '/jeanneau-595-reineta', destination: '/barcos/', permanent: true },
      { source: '/sessa-marine-c35', destination: '/barcos/', permanent: true },
      { source: '/costa-brava-boat', destination: '/barcos/', permanent: true },
      { source: '/dream-point-boat', destination: '/barcos/', permanent: true },
      { source: '/zodiac-medline-ii', destination: '/barcos/', permanent: true },
      { source: '/zodiac-medline-i', destination: '/barcos/', permanent: true },
      { source: '/tio-marc-mano', destination: '/barcos/', permanent: true },
      // ── Experiencia antigua ──
      { source: '/experiencias-barco-roses/calas-cap-de-creus', destination: '/blog/ruta-barco-cap-de-creus-roses/', permanent: true },
      // ── Páginas EN antiguas ──
      { source: '/en/boat-hire-no-licence-roses', destination: '/en/boat-rental-without-licence-roses/', permanent: true },
      { source: '/en/boat-rental-no-licence-roses', destination: '/en/boat-rental-without-licence-roses/', permanent: true },
      { source: '/en/boat-hire-with-licence-roses', destination: '/en/boat-rental-with-licence-roses/', permanent: true },
      { source: '/en/santa-margarita-canals', destination: '/en/santa-margarita-canals-roses/', permanent: true },
      // ── URL ES usada en contexto FR ──
      { source: '/fr/experiencias-barco-roses', destination: '/fr/experiences-bateau-roses/', permanent: true },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);