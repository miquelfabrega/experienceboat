import { ShieldCheck, Eye, Anchor } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

interface Feature { title: string; desc: string; }

const t: Record<Lang, { sectionLabel: string; h2: string; features: Feature[] }> = {
  es: {
    sectionLabel: 'Tranquilidad total',
    h2: 'Por qué los canales son ideales para navegar sin licencia',
    features: [
      { title: 'Navegación segura y sin tráfico', desc: 'Las vías navegables interiores son estrechas, protegidas y con tráfico náutico muy limitado. No hay oleaje, no hay corrientes y los límites de velocidad son bajos. Es el entorno ideal para coger confianza con el barco antes de salir al mar.' },
      { title: 'La mejor forma de empezar', desc: 'Cuando se alquila un barco sin licencia por primera vez, la principal preocupación es siempre la misma: ¿seré capaz de manejarlo? Los canales de Santa Margarita eliminan esa incertidumbre desde el primer minuto.' },
      { title: 'Un paisaje único en sí mismo', desc: 'Además, el recorrido por los canales ya justifica la salida por sí solo. No hace falta llegar al Cap de Creus para tener una experiencia memorable — el propio paisaje de los canales, con las casas asomadas al agua, es algo que no se olvida.' },
    ],
  },
  fr: {
    sectionLabel: 'Tranquillité totale',
    h2: 'Pourquoi les canaux sont idéaux pour naviguer sans permis',
    features: [
      { title: 'Navigation sûre et sans trafic', desc: 'Les voies navigables intérieures sont étroites, protégées et avec un trafic nautique très limité. Pas de houle, pas de courants et des limites de vitesse basses. C\'est le cadre idéal pour prendre confiance avec le bateau avant de gagner la mer.' },
      { title: 'La meilleure façon de commencer', desc: 'Lorsqu\'on loue un bateau sans permis pour la première fois, la principale inquiétude est toujours la même : serai-je capable de le manœuvrer ? Les canaux de Santa Margarita lèvent cette incertitude dès la première minute.' },
      { title: 'Un paysage unique en soi', desc: 'De plus, le parcours dans les canaux justifie à lui seul la sortie. Nul besoin d\'atteindre le Cap de Creus pour vivre une expérience mémorable — le paysage des canaux lui-même, avec les maisons penchées sur l\'eau, est inoubliable.' },
    ],
  },
  en: {
    sectionLabel: 'Complete calm',
    h2: 'Why the canals are ideal for sailing without a licence',
    features: [
      { title: 'Safe, traffic-free sailing', desc: 'The inland waterways are narrow, sheltered and with very limited boat traffic. No swell, no currents and low speed limits. It\'s the ideal setting to gain confidence with the boat before heading out to sea.' },
      { title: 'The best way to start', desc: 'When you rent a no-licence boat for the first time, the main worry is always the same: will I be able to handle it? The Santa Margarita canals remove that uncertainty from the very first minute.' },
      { title: 'A landscape that stands on its own', desc: 'What\'s more, the journey through the canals already makes the trip worthwhile on its own. You don\'t need to reach Cap de Creus for a memorable experience — the canal scenery itself, with houses leaning over the water, is unforgettable.' },
    ],
  },
  ca: {
    sectionLabel: 'Tranquil·litat total',
    h2: 'Per què els canals són ideals per navegar sense llicència',
    features: [
      { title: 'Navegació segura i sense trànsit', desc: 'Les vies navegables interiors són estretes, protegides i amb un trànsit nàutic molt limitat. No hi ha onatge, no hi ha corrents i els límits de velocitat són baixos. És l\'entorn ideal per agafar confiança amb el vaixell abans de sortir al mar.' },
      { title: 'La millor manera de començar', desc: 'Quan llogueu un vaixell sense llicència per primera vegada, la principal preocupació sempre és la mateixa: seré capaç de manejar-lo? Els canals de Santa Margarida eliminen aquesta incertesa des del primer minut.' },
      { title: 'Un paisatge únic en si mateix', desc: 'A més, el recorregut pels canals ja justifica la sortida per si sol. No cal arribar al Cap de Creus per viure una experiència memorable — el mateix paisatge dels canals, amb les cases abocades a l\'aigua, és una cosa que no s\'oblida.' },
    ],
  },
};

const icons = [ShieldCheck, Anchor, Eye];

export default function PorQueCanales({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const features = tx.features;
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto">{tx.h2}</h2>
        </div>
        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx}  className="anim-stagger bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6"><Icon className="w-7 h-7 text-sky-500" /></div>
                <h3 className="font-bold text-gray-900 text-xl mb-4 leading-snug">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
