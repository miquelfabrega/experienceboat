import { Gauge, Users, Sun, Waves, Lock, Anchor } from 'lucide-react';

const translations = {
  es: {
    title: 'Por qué alquilar tu lancha con nosotros',
    description: 'Flota potente con licencia, salida privada desde marina propia y todo lo que necesitas para una jornada de mar en la Costa Brava.',
    highlights: [
      {
        title: 'Potencia para llegar lejos',
        desc: 'Motores de hasta 250 CV y autonomía de sobra para alcanzar las calas del Cap de Creus y Cadaqués sin prisas. El litoral más espectacular del Mediterráneo, a tu alcance.'
      },
      {
        title: 'Barcos para grupos',
        desc: 'Lanchas amplias con capacidad de hasta 12 personas. Perfectas para salir con la familia o el grupo de amigos y disfrutar todos juntos del mar.'
      },
      {
        title: 'Solárium y comodidad',
        desc: 'Embarcaciones con solárium para tumbarse al sol, espacio para moverse a bordo y darse un baño cómodamente en cada cala donde decidas fondear.'
      },
      {
        title: 'Extras náuticos',
        desc: 'Añade diversión a tu jornada con wakeboard, donut, ski náutico o paddle surf. Actividades contratables para vivir el mar con toda la adrenalina.'
      },
      {
        title: 'Salida privada',
        desc: 'No compartes barco con desconocidos. La lancha es solo para tu grupo: vosotros marcáis el rumbo, las paradas y el ritmo de toda la jornada.'
      },
      {
        title: 'Marina propia en Santa Margarita',
        desc: 'Salida directa desde la marina de Santa Margarita, en Roses. Embarque rápido y cómodo, con todo listo para zarpar nada más llegar.'
      }
    ]
  },
  fr: {
    title: 'Pourquoi louer votre bateau chez nous',
    description: 'Une flotte puissante avec permis, un départ privé depuis notre propre marina et tout ce qu\'il faut pour une journée de mer sur la Costa Brava.',
    highlights: [
      {
        title: 'De la puissance pour aller loin',
        desc: 'Des moteurs jusqu\'à 250 CV et une autonomie largement suffisante pour rejoindre les criques du Cap de Creus et Cadaqués sans vous presser. Le littoral le plus spectaculaire de la Méditerranée, à votre portée.'
      },
      {
        title: 'Des bateaux pour les groupes',
        desc: 'Des bateaux spacieux d\'une capacité allant jusqu\'à 12 personnes. Parfaits pour sortir en famille ou entre amis et profiter de la mer tous ensemble.'
      },
      {
        title: 'Solarium et confort',
        desc: 'Des bateaux avec solarium pour s\'allonger au soleil, de l\'espace pour bouger à bord et se baigner confortablement dans chaque crique où vous décidez de jeter l\'ancre.'
      },
      {
        title: 'Extras nautiques',
        desc: 'Ajoutez du plaisir à votre journée avec le wakeboard, la bouée tractée, le ski nautique ou le paddle. Des activités à réserver pour vivre la mer avec toute l\'adrénaline.'
      },
      {
        title: 'Sortie privée',
        desc: 'Vous ne partagez pas le bateau avec des inconnus. Le bateau n\'est que pour votre groupe : c\'est vous qui fixez le cap, les arrêts et le rythme de toute la journée.'
      },
      {
        title: 'Marina à Santa Margarita',
        desc: 'Départ direct depuis la marina de Santa Margarita, à Roses. Embarquement rapide et confortable, tout prêt pour appareiller dès votre arrivée.'
      }
    ]
  },
  en: {
    title: 'Why rent your boat with us',
    description: 'A powerful licensed fleet, a private departure from our own marina and everything you need for a day at sea on the Costa Brava.',
    highlights: [
      {
        title: 'Power to go far',
        desc: 'Engines of up to 250 HP and plenty of range to reach the coves of Cap de Creus and Cadaqués without rushing. The most spectacular coastline in the Mediterranean, within reach.'
      },
      {
        title: 'Boats for groups',
        desc: 'Roomy boats with capacity for up to 12 people. Perfect for heading out with family or a group of friends and enjoying the sea all together.'
      },
      {
        title: 'Sun deck and comfort',
        desc: 'Boats with a sun deck to lie back in the sun, room to move around on board and swim comfortably in every cove where you choose to drop anchor.'
      },
      {
        title: 'Nautical extras',
        desc: 'Add some fun to your day with wakeboard, donut ride, water ski or paddle surf. Activities you can book to experience the sea with all the adrenaline.'
      },
      {
        title: 'Private outing',
        desc: 'You don\'t share the boat with strangers. The boat is just for your group: you set the course, the stops and the pace for the whole day.'
      },
      {
        title: 'Own marina in Santa Margarita',
        desc: 'Direct departure from the Santa Margarita marina in Roses. Quick, comfortable boarding, with everything ready to set sail the moment you arrive.'
      }
    ]
  },
  ca: {
    title: 'Per què llogar la teva llanxa amb nosaltres',
    description: 'Flota potent amb llicència, sortida privada des de marina pròpia i tot el que necessites per a una jornada de mar a la Costa Brava.',
    highlights: [
      {
        title: 'Potència per arribar lluny',
        desc: 'Motors de fins a 250 CV i autonomia de sobres per arribar a les cales del Cap de Creus i Cadaqués sense presses. El litoral més espectacular de la Mediterrània, al teu abast.'
      },
      {
        title: 'Llanxes per a grups',
        desc: 'Llanxes àmplies amb capacitat de fins a 12 persones. Perfectes per sortir amb la família o el grup d\'amics i gaudir tots junts del mar.'
      },
      {
        title: 'Solàrium i comoditat',
        desc: 'Embarcacions amb solàrium per estirar-se al sol, espai per moure\'s a bord i fer un bany còmodament a cada cala on decideixis fondejar.'
      },
      {
        title: 'Extres nàutics',
        desc: 'Afegeix diversió a la teva jornada amb wakeboard, donut, esquí nàutic o paddle surf. Activitats contractables per viure el mar amb tota l\'adrenalina.'
      },
      {
        title: 'Sortida privada',
        desc: 'No comparteixes barca amb desconeguts. La llanxa és només per al teu grup: vosaltres marqueu el rumb, les parades i el ritme de tota la jornada.'
      },
      {
        title: 'Marina pròpia a Santa Margarida',
        desc: 'Sortida directa des de la marina de Santa Margarida, a Roses. Embarcament ràpid i còmode, amb tot a punt per salpar tan bon punt arribis.'
      }
    ]
  }
};

interface HighlightsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function HighlightsSection({ lang = 'es' }: HighlightsSectionProps) {
  const t = translations[lang];
  const iconMap = [Gauge, Users, Sun, Waves, Lock, Anchor];

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
