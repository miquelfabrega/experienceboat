// ==============================================
// Redirecciones 301 — Experience Boat
// Generado: 2026-04-10
//
// Pegar dentro de next.config.js (o .ts):
//
//   module.exports = {
//     async redirects() {
//       return [ ...redirects ];
//     },
//     // ... resto de tu config
//   };
//
// O si ya tienes redirects(), añade estas al array existente.
// ==============================================

const redirects = [
  // --- Match directo: barcos movidos de /barcos/X a /X/ ---
  { source: "/barcos/remus-450", destination: "/remus-450/", permanent: true },
  { source: "/barcos/spirit-of-the-sea", destination: "/spirit-of-the-sea/", permanent: true },

  // --- Trailing slash: URLs sin barra final ---
  { source: "/remus-450", destination: "/remus-450/", permanent: true },
  { source: "/spirit-of-the-sea", destination: "/spirit-of-the-sea/", permanent: true },
  { source: "/reservas", destination: "/reservas/", permanent: true },

  // --- Barcos retirados bajo /barcos/ → catálogo ---
  { source: "/barcos/tio-marc-mano", destination: "/barcos/", permanent: true },
  { source: "/barcos/dream-point-boat", destination: "/barcos/", permanent: true },
  { source: "/barcos/zodiac-medline-i", destination: "/barcos/", permanent: true },
  { source: "/barcos/zodiac-medline-ii", destination: "/barcos/", permanent: true },
  { source: "/barcos/sessa-marine-c35", destination: "/barcos/", permanent: true },
  { source: "/barcos/jeanneau-595-reineta", destination: "/barcos/", permanent: true },
  { source: "/barcos/costa-brava-boat", destination: "/barcos/", permanent: true },

  // --- Barcos retirados en raíz → catálogo ---
  { source: "/jeanneau-595-reineta", destination: "/barcos/", permanent: true },
  { source: "/sessa-marine-c35", destination: "/barcos/", permanent: true },
  { source: "/costa-brava-boat", destination: "/barcos/", permanent: true },
  { source: "/dream-point-boat", destination: "/barcos/", permanent: true },
  { source: "/zodiac-medline-ii", destination: "/barcos/", permanent: true },
  { source: "/zodiac-medline-i", destination: "/barcos/", permanent: true },
  { source: "/tio-marc-mano", destination: "/barcos/", permanent: true },

  // --- Match semántico: ruta antigua → nueva ---
  { source: "/experiencias-barco-roses/calas-cap-de-creus", destination: "/ruta-en-barco-al-cap-de-creus/", permanent: true },

  // --- EN → ES: páginas inglés eliminadas → equivalente español ---
  { source: "/en/boat-hire-no-licence-roses", destination: "/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-sin-licencia/", permanent: true },
  { source: "/en/boat-hire-with-licence-roses", destination: "/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-con-licencia/", permanent: true },
  { source: "/en/santa-margarita-canals", destination: "/canal-tour/", permanent: true },
];

module.exports = redirects;
