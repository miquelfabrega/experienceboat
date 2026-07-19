import { Anchor, ShieldCheck, HeartHandshake } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  tag: string; h2: string; p: string;
  v1t: string; v1d: string; v2t: string; v2d: string; v3t: string; v3d: string;
}> = {
  ca: {
    tag: 'Els nostres valors',
    h2: 'Els principis que guien cada sortida al mar',
    p: 'Tres coses en què no cedim, surti qui surti a navegar.',
    v1t: 'Vaixells a punt, sempre',
    v1d: 'Vuit vaixells propis que revisem nosaltres mateixos: llanxes, pneumàtiques tipus Zodiac i vaixells sense llicència. Si alguna cosa no està perfecta, aquell vaixell no surt — així de simple.',
    v2t: 'El mar mana',
    v2d: 'Totes les embarcacions porten l\'equipament homologat, i abans de cada sortida mirem el vent. Amb tramuntana forta preferim canviar-vos la data que no pas que passeu una mala estona a l\'aigua.',
    v3t: 'Cada grup és diferent',
    v3d: 'Primera vegada en un vaixell? Us ho expliquem amb calma al pantalà. Excursió privada? La ruta s\'adapta al vostre grup, no al revés. Sortir amb nosaltres ha de ser fàcil de principi a fi.',
  },
  es: {
    tag: 'Nuestros valores',
    h2: 'Los principios que guían cada salida al mar',
    p: 'Tres cosas en las que no cedemos, salga quien salga a navegar.',
    v1t: 'Barcos a punto, siempre',
    v1d: 'Ocho barcos propios que revisamos nosotros mismos: lanchas, neumáticas tipo Zodiac y barcos sin licencia. Si algo no está perfecto, ese barco no sale — así de simple.',
    v2t: 'El mar manda',
    v2d: 'Todas las embarcaciones llevan el equipamiento homologado, y antes de cada salida miramos el viento. Con tramuntana fuerte preferimos cambiarte la fecha antes que hacerte pasar un mal rato en el agua.',
    v3t: 'Cada grupo es distinto',
    v3d: '¿Primera vez en un barco? Te lo explicamos con calma en el pantalán. ¿Excursión privada? La ruta se adapta a tu grupo, no al revés. Salir con nosotros tiene que ser fácil de principio a fin.',
  },
  fr: {
    tag: 'Nos valeurs',
    h2: 'Les principes qui guident chaque sortie en mer',
    p: 'Trois choses sur lesquelles nous ne transigeons pas, quel que soit le groupe qui embarque.',
    v1t: 'Des bateaux prêts, toujours',
    v1d: "Huit bateaux en propre que nous révisons nous-mêmes : vedettes, pneumatiques type Zodiac et bateaux sans permis. Si quelque chose n'est pas parfait, ce bateau ne sort pas — c'est aussi simple que ça.",
    v2t: 'La mer commande',
    v2d: "Tous les bateaux embarquent l'équipement homologué, et avant chaque sortie nous regardons le vent. Par forte tramontane, nous préférons vous changer la date plutôt que de vous faire passer un mauvais moment sur l'eau.",
    v3t: 'Chaque groupe est différent',
    v3d: "Première fois sur un bateau ? On vous explique tout calmement au ponton. Excursion privée ? L'itinéraire s'adapte à votre groupe, pas l'inverse. Sortir avec nous doit être simple du début à la fin.",
  },
  en: {
    tag: 'Our values',
    h2: 'The principles behind every trip out to sea',
    p: "Three things we don't compromise on, whoever steps aboard.",
    v1t: 'Boats ready, always',
    v1d: "Eight boats of our own that we service ourselves: motorboats, Zodiac-style inflatables and no-licence boats. If something isn't right, that boat doesn't go out — simple as that.",
    v2t: 'The sea calls the shots',
    v2d: "Every boat carries approved safety gear, and before each departure we check the wind. In a strong tramuntana we'd rather move your date than have you spend a rough day on the water.",
    v3t: 'Every group is different',
    v3d: "First time on a boat? We talk you through it calmly on the pontoon. Private excursion? The route adapts to your group, not the other way round. Going out with us should be easy from start to finish.",
  },
};

export default function ValuesSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const values = [
    { icon: Anchor, title: tx.v1t, desc: tx.v1d },
    { icon: ShieldCheck, title: tx.v2t, desc: tx.v2d },
    { icon: HeartHandshake, title: tx.v3t, desc: tx.v3d },
  ];
  return (
    <section className="py-24 bg-slate-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
            {tx.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{tx.h2}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{tx.p}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
