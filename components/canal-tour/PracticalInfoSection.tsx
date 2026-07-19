import { Clock, Navigation, CheckCircle2, Euro, Anchor, MapPin } from 'lucide-react';

const translations = {
  es: {
    title: 'Información práctica y Detalles',
    description: 'Todo lo que necesitas saber antes de subir a bordo.',
    items: [
      {
        icon: Clock,
        title: '¿Cuánto dura el paseo?',
        desc: 'Cada recorrido tiene una duración aproximada de 90 minutos. Es el tiempo ideal para navegar con calma y disfrutar de las vistas.'
      },
      {
        icon: Navigation,
        title: 'Horarios',
        desc: 'Salimos todos los días de 9:00 a 20:00. A media mañana hay menos tráfico en los canales; a última hora de la tarde la luz es mejor para las fotos.'
      },
      {
        icon: Anchor,
        title: 'Nuestros Barcos',
        desc: 'Contamos con embarcaciones de 4,3 m a 4,5 m de eslora con motor Mercury 15 CV. Tienen capacidad para un máximo de 5 personas, solárium y chalecos salvavidas incluidos.'
      },
      {
        icon: CheckCircle2,
        title: '¿Se necesita licencia?',
        desc: 'No. Los barcos del Canal Tour se llevan sin titulación; te enseñamos lo básico en el pantalán, antes de zarpar.'
      },
      {
        icon: MapPin,
        title: 'Punto de encuentro',
        desc: 'La salida se realiza desde la Av. Clot Franquest Nord, 17480 Roses, Girona.'
      },
      {
        icon: Euro,
        title: 'Precios',
        desc: 'Desde 90 € la salida, según temporada y modelo de barco. En el calendario de esta página ves el precio exacto y las horas libres del día que elijas.'
      }
    ]
  },
  fr: {
    title: 'Informations pratiques et détails',
    description: 'Tout ce que vous devez savoir avant d\'embarquer.',
    items: [
      {
        icon: Clock,
        title: 'Quelle est la durée de la promenade ?',
        desc: 'Chaque parcours dure environ 90 minutes. C\'est le temps idéal pour naviguer tranquillement et profiter des vues.'
      },
      {
        icon: Navigation,
        title: 'Horaires',
        desc: 'Nous sortons tous les jours de 9h à 20h. En milieu de matinée l\'eau est plus calme ; en fin d\'après-midi la lumière est meilleure pour les photos.'
      },
      {
        icon: Anchor,
        title: 'Nos bateaux',
        desc: 'Nous disposons de bateaux de 4,3 m à 4,5 m avec moteur Mercury 15 ch. Ils peuvent accueillir jusqu\'à 5 personnes, avec solarium et gilets de sauvetage inclus.'
      },
      {
        icon: CheckCircle2,
        title: 'Un permis est-il nécessaire ?',
        desc: 'Non, nos bateaux de Canal Tour sont conçus pour être conduits sans qualification. Nous vous apprendrons le nécessaire avant de partir.'
      },
      {
        icon: MapPin,
        title: 'Point de rendez-vous',
        desc: 'Le départ se fait depuis Av. Clot Franquest Nord, 17480 Roses, Girona.'
      },
      {
        icon: Euro,
        title: 'Tarifs',
        desc: 'Dès 90 € la sortie, selon la saison et le modèle de bateau. Le calendrier de cette page affiche le prix exact et les créneaux libres du jour choisi.'
      }
    ]
  },
  en: {
    title: 'Practical Information and Details',
    description: 'Everything you need to know before you step aboard.',
    items: [
      {
        icon: Clock,
        title: 'How long is the tour?',
        desc: 'Each tour lasts approximately 90 minutes. It\'s the ideal amount of time to cruise at an easy pace and enjoy the views.'
      },
      {
        icon: Navigation,
        title: 'Hours',
        desc: 'We go out every day from 9:00 to 20:00. Mid-morning the water is calmer; late afternoon gives you the better light for photos.'
      },
      {
        icon: Anchor,
        title: 'Our Boats',
        desc: 'We have boats ranging from 4.3 m to 4.5 m long with Mercury 15 HP engines. They can accommodate up to 5 people, with sun deck and life jackets included.'
      },
      {
        icon: CheckCircle2,
        title: 'Is a licence required?',
        desc: 'No, our Canal Tour boats are designed to be driven without qualifications. We\'ll teach you the basics before you set off.'
      },
      {
        icon: MapPin,
        title: 'Meeting Point',
        desc: 'Departure is from Av. Clot Franquest Nord, 17480 Roses, Girona.'
      },
      {
        icon: Euro,
        title: 'Prices',
        desc: 'From €90 per trip, depending on the season and the boat. The calendar on this page shows the exact price and the slots left on the day you pick.'
      }
    ]
  },
  ca: {
    title: 'Informació pràctica i detalls',
    description: 'Tot el que necessiteu saber abans de pujar a bord.',
    items: [
      {
        icon: Clock,
        title: 'Quant dura el passeig?',
        desc: 'Cada recorregut té una durada aproximada de 90 minuts. És el temps ideal per navegar amb calma i gaudir de les vistes.'
      },
      {
        icon: Navigation,
        title: 'Horaris',
        desc: 'Sortim cada dia de 9:00 a 20:00. A mig matí l\'aigua està més tranquil·la; a última hora de la tarda la llum és millor per a les fotos.'
      },
      {
        icon: Anchor,
        title: 'Les nostres embarcacions',
        desc: 'Disposem d\'embarcacions de 4,3 m a 4,5 m d\'eslora amb motor Mercury 15 CV. Tenen capacitat per a un màxim de 5 persones, solàrium i armilles salvavides incloses.'
      },
      {
        icon: CheckCircle2,
        title: 'Cal llicència?',
        desc: 'No. Les llanxes del Canal Tour estan pensades per governar-les sense titulació. Us ensenyem el bàsic al pantalà, abans de salpar.'
      },
      {
        icon: MapPin,
        title: 'Punt de trobada',
        desc: 'La sortida es fa des de l\'Av. Clot Franquest Nord, 17480 Roses, Girona.'
      },
      {
        icon: Euro,
        title: 'Preus',
        desc: 'Des de 90 € la sortida, segons temporada i model de vaixell. Al calendari d\'aquesta pàgina veieu el preu exacte i les hores lliures del dia que trieu.'
      }
    ]
  }
};

interface PracticalInfoSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function PracticalInfoSection({ lang = 'es' }: PracticalInfoSectionProps) {
  const t = translations[lang];
  const iconMap = [Clock, Navigation, Anchor, CheckCircle2, MapPin, Euro];

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
