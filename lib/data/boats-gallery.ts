/**
 * Galería de fotos por barco.
 *
 * Las rutas apuntan al DESTINO previsto en /public/boats/<slug>/...
 * Las imágenes físicas aún NO existen: las generará el paso de conversión
 * (HEIC/JPG originales → formato final) tras la decisión del Director.
 *
 * Convención de nombres de archivo:
 *   <slug>-hero.<ext>        → imagen principal (apaisada, alta resolución)
 *   <slug>-exterior-NN.<ext> → exteriores / aéreas
 *   <slug>-interior-NN.<ext> → interior, cubierta, asientos
 *   <slug>-cockpit.<ext>     → puesto de mando / timón
 *   <slug>-experiencia-NN.<ext> → fotos de uso (bañadores, calas…)
 *
 * La extensión (.webp / .jpg) la fija el Director al elegir vía de conversión.
 * Se usa .webp por defecto aquí; si se opta por la vía B (sips→JPG), basta
 * un find/replace de `.webp` → `.jpg`.
 */

export interface GalleryImage {
  src: string;
  alt: string;
}

const ZONA = 'en Roses, Costa Brava';

export const boatsGallery: Record<string, GalleryImage[]> = {
  // ──────────────────────────────────────────────────────────────
  // DREAM POINT 420  (origen: "DREAM POINT ", 4 fotos JPG 2048px)
  // ──────────────────────────────────────────────────────────────
  'dream-point-420': [
    {
      src: '/boats/dream-point-420/dream-point-420-hero.webp',
      alt: `Lancha sin licencia Dream Point 420 amarrada en puerto ${ZONA}`,
    },
    {
      src: '/boats/dream-point-420/dream-point-420-exterior-01.webp',
      alt: `Dream Point 420 vista exterior navegando ${ZONA}`,
    },
    {
      src: '/boats/dream-point-420/dream-point-420-exterior-02.webp',
      alt: `Dream Point 420 de perfil sobre el agua ${ZONA}`,
    },
    {
      src: '/boats/dream-point-420/dream-point-420-interior-01.webp',
      alt: `Interior y bañera de la Dream Point 420 ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // MARINE BREZZE 450  (origen: "MARINE BREZZE ", 14 fotos)
  // ──────────────────────────────────────────────────────────────
  'marine-brezze-450': [
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-hero.webp',
      alt: `Lancha Marine Brezze 450 vista aérea con bañistas a bordo ${ZONA}`,
    },
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-exterior-01.webp',
      alt: `Marine Brezze 450 navegando frente a la costa ${ZONA}`,
    },
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-exterior-02.webp',
      alt: `Marine Brezze 450 fondeada en aguas turquesa ${ZONA}`,
    },
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-interior-01.webp',
      alt: `Cubierta y solárium de la Marine Brezze 450 ${ZONA}`,
    },
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-interior-02.webp',
      alt: `Asientos y bañera de la Marine Brezze 450 ${ZONA}`,
    },
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-experiencia-01.webp',
      alt: `Día de navegación a bordo de la Marine Brezze 450 ${ZONA}`,
    },
    {
      src: '/boats/marine-brezze-450/marine-brezze-450-experiencia-02.webp',
      alt: `Baño en cala desde la Marine Brezze 450 ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // ORANGE KIWI 620  (origen: "MEDLINE ZODIAC 620", 9 fotos: 2 JPG + 7 HEIC)
  // ──────────────────────────────────────────────────────────────
  'orange-kiwi-620': [
    {
      src: '/boats/orange-kiwi-620/orange-kiwi-620-hero.webp',
      alt: `Neumática Orange Kiwi 620 vista aérea sobre aguas turquesa ${ZONA}`,
    },
    {
      src: '/boats/orange-kiwi-620/orange-kiwi-620-exterior-01.webp',
      alt: `Orange Kiwi 620 fondeada frente a una cala ${ZONA}`,
    },
    {
      src: '/boats/orange-kiwi-620/orange-kiwi-620-exterior-02.webp',
      alt: `Orange Kiwi 620 amarrada en puerto ${ZONA}`,
    },
    {
      src: '/boats/orange-kiwi-620/orange-kiwi-620-interior-01.webp',
      alt: `Cubierta y consola de la neumática Orange Kiwi 620 ${ZONA}`,
    },
    {
      src: '/boats/orange-kiwi-620/orange-kiwi-620-interior-02.webp',
      alt: `Asientos y solárium de la Orange Kiwi 620 ${ZONA}`,
    },
    {
      src: '/boats/orange-kiwi-620/orange-kiwi-620-experiencia-01.webp',
      alt: `Excursión en barco a bordo de la Orange Kiwi 620 ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // RAF IV MANO  (origen: "RAF IV MANO 21,5 SPORT FISH", 11 fotos 1920px)
  // ──────────────────────────────────────────────────────────────
  'raf-iv-mano': [
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-hero.webp',
      alt: `Lancha Raf IV Mano 21,5 Sport Fish navegando ${ZONA}`,
    },
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-exterior-01.webp',
      alt: `Raf IV Mano de perfil sobre el agua ${ZONA}`,
    },
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-exterior-02.webp',
      alt: `Raf IV Mano fondeada frente a la costa ${ZONA}`,
    },
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-cockpit.webp',
      alt: `Puesto de mando y timón de la Raf IV Mano Sport Fish ${ZONA}`,
    },
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-interior-01.webp',
      alt: `Cubierta y asientos de la Raf IV Mano ${ZONA}`,
    },
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-interior-02.webp',
      alt: `Detalle de la bañera de la Raf IV Mano Sport Fish ${ZONA}`,
    },
    {
      src: '/boats/raf-iv-mano/raf-iv-mano-experiencia-01.webp',
      alt: `Jornada de pesca y navegación con la Raf IV Mano ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // JEANNEAU 595 REINETA  (origen: "REINETA BENETEAU 595", 11 fotos: 3 JPG + 8 HEIC)
  // ──────────────────────────────────────────────────────────────
  'jeanneau-595-reineta': [
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-hero.webp',
      alt: `Lancha Jeanneau 595 Reineta navegando ${ZONA}`,
    },
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-exterior-01.webp',
      alt: `Jeanneau 595 Reineta fondeada frente a una cala ${ZONA}`,
    },
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-exterior-02.webp',
      alt: `Jeanneau 595 Reineta de perfil sobre el agua ${ZONA}`,
    },
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-interior-01.webp',
      alt: `Bañera con toldo y mesa de la Jeanneau 595 Reineta ${ZONA}`,
    },
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-interior-02.webp',
      alt: `Asientos y solárium de la Jeanneau 595 Reineta ${ZONA}`,
    },
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-cockpit.webp',
      alt: `Puesto de mando de la Jeanneau 595 Reineta ${ZONA}`,
    },
    {
      src: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-experiencia-01.webp',
      alt: `Aperitivo a bordo de la Jeanneau 595 Reineta en una cala ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // REMUS 450  (origen: "REMUS 450", 7 fotos — IMG_1378 duplicada)
  // ──────────────────────────────────────────────────────────────
  'remus-450': [
    {
      src: '/boats/remus-450/remus-450-hero.webp',
      alt: `Lancha sin licencia Remus 450 navegando ${ZONA}`,
    },
    {
      src: '/boats/remus-450/remus-450-exterior-01.webp',
      alt: `Remus 450 de perfil sobre el agua ${ZONA}`,
    },
    {
      src: '/boats/remus-450/remus-450-exterior-02.webp',
      alt: `Remus 450 vista aérea fondeada ${ZONA}`,
    },
    {
      src: '/boats/remus-450/remus-450-interior-01.webp',
      alt: `Bañera y asientos de la Remus 450 ${ZONA}`,
    },
    {
      src: '/boats/remus-450/remus-450-experiencia-01.webp',
      alt: `Salida en barco sin licencia a bordo de la Remus 450 ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // SPIRIT OF THE SEA 675  (origen: "SPIRIT GOMMO NAUTICA G65", 7 fotos)
  // ──────────────────────────────────────────────────────────────
  'spirit-of-the-sea-675': [
    {
      src: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-hero.webp',
      alt: `Neumática Spirit of the Sea 675 vista aérea sobre aguas turquesa ${ZONA}`,
    },
    {
      src: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-exterior-01.webp',
      alt: `Spirit of the Sea 675 navegando frente a la costa ${ZONA}`,
    },
    {
      src: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-exterior-02.webp',
      alt: `Spirit of the Sea 675 fondeada en una cala ${ZONA}`,
    },
    {
      src: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-interior-01.webp',
      alt: `Cubierta y solárium de la neumática Spirit of the Sea 675 ${ZONA}`,
    },
    {
      src: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-interior-02.webp',
      alt: `Asientos y consola de la Spirit of the Sea 675 ${ZONA}`,
    },
    {
      src: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-experiencia-01.webp',
      alt: `Excursión en neumática a bordo de la Spirit of the Sea 675 ${ZONA}`,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // JUSTI SAURA LLAUT 850  (CARPETA VACÍA: sin fotos propias → placeholder)
  // ──────────────────────────────────────────────────────────────
  'justi-saura-llaut-850': [
    {
      src: '/boats/generic/hero.webp',
      alt: `Llaüt Justi Saura 850 con patrón ${ZONA}`,
    },
  ],
};

export const getGallery = (slug: string): GalleryImage[] =>
  boatsGallery[slug] ?? [];
