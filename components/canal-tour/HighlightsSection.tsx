import { Eye, Navigation, Home, ShieldCheck } from 'lucide-react';

const translations = {
  es: {
    title: 'Qué tiene de distinto salir por los canales',
    description: 'Sin licencia, sin patrón a bordo y por un recorrido que no se puede hacer a pie. Esto es lo que te encuentras.',
    highlights: [
      {
        title: 'Llevas tú el timón',
        desc: 'No hace falta ninguna titulación. Te explicamos el gas, el rumbo y cómo atracar en cinco minutos en el pantalán, y a partir de ahí decides tú a qué velocidad vas y dónde te paras.'
      },
      {
        title: 'Solo se ve desde el agua',
        desc: 'Los canales se entienden navegándolos: desde la calle ves tapias, desde la lancha ves los jardines, los amarres privados y la marina abriéndose en cada curva.'
      },
      {
        title: 'Casas con el barco en la puerta',
        desc: 'Chalets y villas con amarre propio a los dos lados del canal. Cada tramo tiene su estilo, y en algunos amarres hay barcos que cuestan más que la casa.'
      },
      {
        title: 'Va bien con niños',
        desc: 'El agua de los canales está siempre plana y se navega despacio, así que es una salida tranquila. Chalecos incluidos para todos los que suben.'
      }
    ]
  },
  fr: {
    title: 'Ce qui change quand on passe par les canaux',
    description: 'Sans permis, sans skipper à bord et sur un parcours qu\'on ne peut pas faire à pied. Voilà ce que ça donne.',
    highlights: [
      {
        title: 'C\'est vous à la barre',
        desc: 'Aucun permis requis. On vous montre les gaz, le cap et l\'accostage en cinq minutes au ponton, et ensuite c\'est vous qui décidez de l\'allure et des arrêts.'
      },
      {
        title: 'Ça ne se voit que depuis l\'eau',
        desc: 'Les canaux se comprennent en les naviguant : de la route on voit des murs, du bateau on voit les jardins, les pontons privés et la marina qui s\'ouvre à chaque virage.'
      },
      {
        title: 'Des maisons avec le bateau devant la porte',
        desc: 'Villas et maisons avec anneau privé des deux côtés du canal. Chaque section a son style, et certains bateaux amarrés là valent plus cher que la maison.'
      },
      {
        title: 'Ça se passe très bien avec des enfants',
        desc: 'L\'eau des canaux est toujours plate et on avance doucement : c\'est une sortie calme. Gilets de sauvetage inclus pour tout le monde à bord.'
      }
    ]
  },
  en: {
    title: 'What\'s different about going out through the canals',
    description: 'No licence, no skipper on board and a route you can\'t do on foot. Here\'s what it actually looks like.',
    highlights: [
      {
        title: 'You take the helm',
        desc: 'No qualification needed. We go over the throttle, the steering and how to come alongside in five minutes on the pontoon, and after that you set the pace and decide where to stop.'
      },
      {
        title: 'You only see it from the water',
        desc: 'The canals make sense once you\'re on them: from the road you see walls, from the boat you see back gardens, private pontoons and the marina opening up at every bend.'
      },
      {
        title: 'Houses with the boat at the front door',
        desc: 'Villas and houses with their own mooring on both sides of the canal. Each stretch has its own style, and some of the boats tied up there cost more than the house.'
      },
      {
        title: 'It works with children',
        desc: 'Canal water is always flat and you go slowly, so it\'s a calm outing. Life jackets included for everyone on board.'
      }
    ]
  },
  ca: {
    title: 'Què té de diferent sortir pels canals',
    description: 'Sense llicència, sense patró a bord i per un recorregut que no es pot fer a peu. Això és el que us trobareu.',
    highlights: [
      {
        title: 'Porteu vosaltres el timó',
        desc: 'No cal cap titulació. Us expliquem el gas, el rumb i com amarrar en cinc minuts al pantalà, i a partir d\'aquí decidiu vosaltres a quina velocitat aneu i on us atureu.'
      },
      {
        title: 'Només es veu des de l\'aigua',
        desc: 'Els canals s\'entenen navegant-los: des del carrer veieu tanques, des de la llanxa veieu els jardins, els amarradors privats i la marina obrint-se a cada revolt.'
      },
      {
        title: 'Cases amb el vaixell a la porta',
        desc: 'Xalets i cases amb amarrador propi als dos costats del canal. Cada tram té el seu estil, i en alguns amarradors hi ha vaixells que costen més que la casa.'
      },
      {
        title: 'Va bé amb canalla',
        desc: 'L\'aigua dels canals sempre és plana i s\'hi navega a poc a poc, així que és una sortida tranquil·la. Armilles incloses per a tothom qui puja.'
      }
    ]
  }
};

interface HighlightsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function HighlightsSection({ lang = 'es' }: HighlightsSectionProps) {
  const t = translations[lang];
  const iconMap = [Navigation, Eye, Home, ShieldCheck];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.highlights.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
