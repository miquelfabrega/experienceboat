import { Home, Trees, Bird, Map } from 'lucide-react';
import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en' | 'ca';

interface PointOfInterest { title: string; desc: string; }

const t: Record<Lang, { sectionLabel: string; h2: string; items: PointOfInterest[] }> = {
  es: {
    sectionLabel: 'Puntos de interés',
    h2: 'Qué vas a ver navegando por los canales',
    items: [
      { title: 'Casas con embarcadero privado', desc: 'Más de 500 viviendas tienen acceso directo al agua. Desde el barco ves la vida de Santa Margarita desde una perspectiva que ningún turista a pie puede tener.' },
      { title: 'Puentes de piedra', desc: 'Los canales están cruzados por puentes bajos que obligan a navegar despacio. Esa lentitud convierte el recorrido en algo contemplativo y muy fotogénico.' },
      { title: 'Fauna local', desc: 'En los canales es habitual ver aves acuáticas, patos y en ocasiones alguna garceta. Especialmente interesante para familias con niños.' },
      { title: 'La salida a la bahía', desc: 'Cuando los canales se abren al mar, el contraste es espectacular. La bahía de Roses con el Pirineo al fondo y el Cap de Creus al horizonte.' },
    ],
  },
  fr: {
    sectionLabel: 'Points d\'intérêt',
    h2: 'Ce que vous verrez en naviguant dans les canaux',
    items: [
      { title: 'Maisons avec ponton privé', desc: 'Plus de 500 logements ont un accès direct à l\'eau. Depuis le bateau, vous découvrez la vie de Santa Margarita sous un angle qu\'aucun visiteur à pied ne peut avoir.' },
      { title: 'Ponts en pierre', desc: 'Les canaux sont traversés par des ponts bas qui obligent à naviguer lentement. Cette lenteur rend le parcours contemplatif et très photogénique.' },
      { title: 'Faune locale', desc: 'Dans les canaux, il est fréquent de voir des oiseaux aquatiques, des canards et parfois une aigrette. Particulièrement intéressant pour les familles avec enfants.' },
      { title: 'La sortie vers la baie', desc: 'Lorsque les canaux s\'ouvrent sur la mer, le contraste est spectaculaire. La baie de Roses avec les Pyrénées en arrière-plan et le Cap de Creus à l\'horizon.' },
    ],
  },
  en: {
    sectionLabel: 'Points of interest',
    h2: 'What you\'ll see sailing through the canals',
    items: [
      { title: 'Houses with private moorings', desc: 'More than 500 homes have direct access to the water. From the boat you see the life of Santa Margarita from a perspective no visitor on foot can have.' },
      { title: 'Stone bridges', desc: 'The canals are crossed by low bridges that force you to sail slowly. That slowness turns the journey into something contemplative and highly photogenic.' },
      { title: 'Local wildlife', desc: 'In the canals it\'s common to see waterbirds, ducks and occasionally an egret. Especially interesting for families with children.' },
      { title: 'The exit to the bay', desc: 'When the canals open out to the sea, the contrast is spectacular. The bay of Roses with the Pyrenees behind and Cap de Creus on the horizon.' },
    ],
  },
  ca: {
    sectionLabel: 'Punts d\'interès',
    h2: 'Què veureu navegant pels canals',
    items: [
      { title: 'Cases amb embarcador privat', desc: 'Més de 500 habitatges tenen accés directe a l\'aigua. Des del vaixell veureu la vida de Santa Margarida des d\'una perspectiva que cap turista a peu pot tenir.' },
      { title: 'Ponts de pedra', desc: 'Els canals estan creuats per ponts baixos que obliguen a navegar a poc a poc. Aquesta lentitud converteix el recorregut en una cosa contemplativa i molt fotogènica.' },
      { title: 'Fauna local', desc: 'Als canals és habitual veure ocells aquàtics, ànecs i de vegades alguna agró. Especialment interessant per a famílies amb nens.' },
      { title: 'La sortida a la badia', desc: 'Quan els canals s\'obren al mar, el contrast és espectacular. La badia de Roses amb el Pirineu al fons i el Cap de Creus a l\'horitzó.' },
    ],
  },
};

const icons = [Home, Trees, Bird, Map];

export default function QueVasAVer({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const items = tx.items;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl anim-fade-right">
            <Image src="https://picsum.photos/seed/canales-mar/800/600" alt="Casas con embarcadero en los canales de Santa Margarita" fill className="object-cover" />
          </div>
          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">{tx.h2}</h2>
            <div className="space-y-6">
              {items.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div className="flex gap-5 anim-fade-up">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 mt-1"><Icon className="w-5 h-5 text-slate-700" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
