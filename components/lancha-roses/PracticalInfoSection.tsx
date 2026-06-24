import { Award, MapPin, Users, CalendarDays, Euro } from 'lucide-react';

const translations = {
  es: {
    title: 'Información práctica y Detalles',
    description: 'Todo lo que necesitas saber antes de alquilar tu lancha con licencia en Roses.',
    items: [
      {
        title: 'Titulación',
        desc: 'Necesitas una licencia de navegación o el PER para llevar el timón. Pídenos consejo si tienes dudas sobre tu titulación.'
      },
      {
        title: 'Salida',
        desc: 'Todas las salidas se realizan desde la Marina de Santa Margarita, en Roses (Costa Brava), nuestro punto de partida único.'
      },
      {
        title: 'Capacidad',
        desc: 'Según la lancha que elijas, navegarás cómodamente de 6 a 12 personas. Te ayudamos a escoger el barco que mejor se adapte a tu grupo.'
      },
      {
        title: 'Temporada',
        desc: 'La temporada de alquiler abarca de abril a octubre, los meses ideales para disfrutar del mar en la bahía de Roses.'
      },
      {
        title: 'Tarifas',
        desc: 'El alquiler arranca desde 195 €. El precio varía según el barco y la temporada; consúltanos la disponibilidad para tu fecha.'
      }
    ]
  },
  fr: {
    title: 'Informations pratiques et détails',
    description: 'Tout ce que vous devez savoir avant de louer votre bateau avec permis à Roses.',
    items: [
      {
        title: 'Permis',
        desc: 'Un permis de navigation ou le PER est nécessaire pour prendre la barre. Demandez-nous conseil si vous avez un doute sur votre titre.'
      },
      {
        title: 'Départ',
        desc: 'Tous les départs se font depuis la Marina de Santa Margarita, à Roses (Costa Brava), notre point de départ unique.'
      },
      {
        title: 'Capacité',
        desc: 'Selon le bateau choisi, vous naviguerez confortablement de 6 à 12 personnes. Nous vous aidons à choisir le bateau adapté à votre groupe.'
      },
      {
        title: 'Saison',
        desc: 'La saison de location s\'étend d\'avril à octobre, les mois idéaux pour profiter de la mer dans la baie de Roses.'
      },
      {
        title: 'Tarifs',
        desc: 'La location démarre à partir de 195 €. Le prix varie selon le bateau et la saison ; consultez-nous la disponibilité pour votre date.'
      }
    ]
  },
  en: {
    title: 'Practical Information and Details',
    description: 'Everything you need to know before renting your licensed boat in Roses.',
    items: [
      {
        title: 'Licence',
        desc: 'You need a boating licence or the PER to take the helm. Ask us for advice if you have any doubts about your qualification.'
      },
      {
        title: 'Departure',
        desc: 'All departures are from Santa Margarita Marina, in Roses (Costa Brava), our single starting point.'
      },
      {
        title: 'Capacity',
        desc: 'Depending on the boat you choose, you\'ll sail comfortably with 6 to 12 people. We help you pick the boat that best suits your group.'
      },
      {
        title: 'Season',
        desc: 'The rental season runs from April to October, the ideal months to enjoy the sea in Roses Bay.'
      },
      {
        title: 'Rates',
        desc: 'Rental starts from €195. The price varies depending on the boat and the season; check availability with us for your date.'
      }
    ]
  },
  ca: {
    title: 'Informació pràctica i detalls',
    description: 'Tot el que necessiteu saber abans de llogar la vostra llanxa amb llicència a Roses.',
    items: [
      {
        title: 'Titulació',
        desc: 'Necessiteu una llicència de navegació o el PER per dur el timó. Demaneu-nos consell si teniu dubtes sobre la vostra titulació.'
      },
      {
        title: 'Sortida',
        desc: 'Totes les sortides es fan des de la Marina de Santa Margarida, a Roses (Costa Brava), el nostre punt de partida únic.'
      },
      {
        title: 'Capacitat',
        desc: 'Segons la llanxa que trieu, navegareu còmodament de 6 a 12 persones. Us ajudem a escollir el vaixell que millor s\'adapti al vostre grup.'
      },
      {
        title: 'Temporada',
        desc: 'La temporada de lloguer va d\'abril a octubre, els mesos ideals per gaudir del mar a la badia de Roses.'
      },
      {
        title: 'Tarifes',
        desc: 'El lloguer arrenca des de 195 €. El preu varia segons el vaixell i la temporada; consulteu-nos la disponibilitat per a la vostra data.'
      }
    ]
  }
};

interface PracticalInfoSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function PracticalInfoSection({ lang = 'es' }: PracticalInfoSectionProps) {
  const t = translations[lang];
  const iconMap = [Award, MapPin, Users, CalendarDays, Euro];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
