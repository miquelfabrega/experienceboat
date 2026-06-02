/**
 * Datos NO localizables del chrome: nombres de barco y precios (idénticos en
 * todos los idiomas). Las URLs se resuelven con `boatHref(slug, locale)` y los
 * labels de menú con el diccionario `CHROME` — ver lib/i18n/.
 */

export interface NavBoat {
  name: string;
  price: number;
  slug: string;
  premium: boolean;
}

export const navData: { barcosConLicencia: NavBoat[]; barcosSinLicencia: NavBoat[] } = {
  barcosConLicencia: [
    { name: 'Reineta (Jeanneau 595)', price: 195, slug: 'jeanneau-595-reineta', premium: false },
    { name: 'Orange Kiwi 620', price: 235, slug: 'orange-kiwi-620', premium: false },
    { name: 'RAF IV Mano 21,5 Sport Fish', price: 245, slug: 'raf-iv-mano', premium: false },
    { name: 'Spirit of the Sea 675', price: 260, slug: 'spirit-of-the-sea-675', premium: false },
    { name: 'Justi Saura Llaut 850', price: 290, slug: 'justi-saura-llaut-850', premium: true },
  ],
  barcosSinLicencia: [
    { name: 'Dream Point 420', price: 70, slug: 'dream-point-420', premium: false },
    { name: 'Remus 450', price: 90, slug: 'remus-450', premium: false },
    { name: 'Marine Brezze 450', price: 90, slug: 'marine-brezze-450', premium: false },
  ],
};
