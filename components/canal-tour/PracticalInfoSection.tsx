import { Clock, Navigation, CheckCircle2, Euro, Anchor, MapPin } from 'lucide-react';

const translations = {
  es: {
    title: 'Información práctica y Detalles',
    description: 'Todo lo que necesitas saber antes de embarcarte en tu aventura por los canales.',
    items: [
      {
        icon: Clock,
        title: '¿Cuánto dura el paseo?',
        desc: 'Cada recorrido tiene una duración aproximada de 90 minutos. Es el tiempo ideal para navegar con calma y disfrutar de las vistas.'
      },
      {
        icon: Navigation,
        title: 'Horarios',
        desc: 'Estamos disponibles todos los días de 9:00 am a 20:00 pm. Puedes elegir el momento del día que mejor se adapte a ti.'
      },
      {
        icon: Anchor,
        title: 'Nuestros Barcos',
        desc: 'Contamos con embarcaciones de 4,3m a 4,5m de eslora con motor Mercury 15 C.V. Tienen capacidad para 4 a 6 personas, solarium y chalecos salvavidas incluidos.'
      },
      {
        icon: CheckCircle2,
        title: '¿Se necesita licencia?',
        desc: 'No, nuestros barcos para el Canal Tour están diseñados para ser conducidos sin titulación. Te enseñaremos lo básico antes de zarpar.'
      },
      {
        icon: MapPin,
        title: 'Punto de encuentro',
        desc: 'La salida se realiza desde la Av. Clot Franquest Nord, 17480 Roses, Girona.'
      },
      {
        icon: Euro,
        title: 'Precios',
        desc: 'Para consultar las tarifas actualizadas y disponibilidad, por favor revisa nuestra página de reservas.'
      }
    ]
  },
  fr: {
    title: 'Informations pratiques et détails',
    description: 'Tout ce que vous devez savoir avant de vous embarquer pour votre aventure sur les canaux.',
    items: [
      {
        icon: Clock,
        title: 'Quelle est la durée de la promenade?',
        desc: 'Chaque parcours dure environ 90 minutes. C\'est le temps idéal pour naviguer tranquillement et profiter des vues.'
      },
      {
        icon: Navigation,
        title: 'Horaires',
        desc: 'Nous sommes disponibles tous les jours de 9h à 20h. Vous pouvez choisir le moment de la journée qui vous convient le mieux.'
      },
      {
        icon: Anchor,
        title: 'Nos bateaux',
        desc: 'Nous disposons d\'embarcations de 4,3 m à 4,5 m avec moteur Mercury 15 ch. Ils peuvent accueillir 4 à 6 personnes, avec solarium et gilets de sauvetage inclus.'
      },
      {
        icon: CheckCircle2,
        title: 'Un permis est-il nécessaire?',
        desc: 'Non, nos bateaux de Canal Tour sont conçus pour être conduits sans qualification. Nous vous apprendrons le nécessaire avant de partir.'
      },
      {
        icon: MapPin,
        title: 'Point de rencontre',
        desc: 'Le départ se fait depuis Av. Clot Franquest Nord, 17480 Roses, Girona.'
      },
      {
        icon: Euro,
        title: 'Tarifs',
        desc: 'Pour connaître les tarifs actualisés et la disponibilité, veuillez consulter notre page de réservation.'
      }
    ]
  },
  en: {
    title: 'Practical Information and Details',
    description: 'Everything you need to know before embarking on your canal adventure.',
    items: [
      {
        icon: Clock,
        title: 'How long is the tour?',
        desc: 'Each tour lasts approximately 90 minutes. It\'s the ideal amount of time to sail leisurely and enjoy the views.'
      },
      {
        icon: Navigation,
        title: 'Hours',
        desc: 'We are available every day from 9:00 am to 8:00 pm. You can choose the time of day that works best for you.'
      },
      {
        icon: Anchor,
        title: 'Our Boats',
        desc: 'We have boats ranging from 4.3 m to 4.5 m long with Mercury 15 HP engines. They can accommodate 4 to 6 people, with sun deck and life jackets included.'
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
        desc: 'To check updated rates and availability, please visit our booking page.'
      }
    ]
  }
};

interface PracticalInfoSectionProps {
  lang?: 'es' | 'fr' | 'en';
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
