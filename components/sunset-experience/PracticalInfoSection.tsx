import { Clock, Navigation, CheckCircle2, GlassWater, Euro } from 'lucide-react';

const translations = {
  es: {
    title: 'Información práctica',
    description: 'Todo lo que necesitas saber sobre la salida Sunset Experience.',
    infoItems: [
      {
        icon: Clock,
        title: '¿Cuánto dura el Sunset Experience?',
        desc: 'Aproximadamente 2 horas. La salida se planifica para estar en la bahía en el momento exacto del atardecer y volver por los canales al anochecer.'
      },
      {
        icon: Navigation,
        title: '¿A qué hora sale la embarcación?',
        desc: 'Depende de la época del año. Calculamos la hora según la puesta de sol del día de la reserva. Al confirmar os indicamos la hora exacta.'
      },
      {
        icon: CheckCircle2,
        title: '¿Qué incluye?',
        desc: 'Embarcación privada para vuestro grupo, patrón incluido (opción con patrón), combustible, equipo de seguridad y ruta optimizada para el atardecer.'
      },
      {
        icon: GlassWater,
        title: '¿Qué podéis traer?',
        desc: 'Todo lo que queráis. Muchas parejas y grupos traen cava o champán para el atardecer. Las copas y la nevera son bienvenidas.'
      },
      {
        icon: Euro,
        title: 'Precio',
        desc: 'Opción sin licencia desde 200 €. Opción con patrón (neumática) desde 300 €. (Precio por embarcación, no por persona).'
      }
    ],
    recommendation: 'Ofrecemos modalidades con patrón y sin licencia. Para una experiencia más relajada, recomendamos con patrón.',
    bookBtn: 'Reservar Sunset Experience',
    whatsappText: 'Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Sunset%20Experience'
  },
  fr: {
    title: 'Informations pratiques',
    description: 'Tout ce que vous devez savoir sur la sortie Sunset Experience.',
    infoItems: [
      {
        icon: Clock,
        title: 'Combien de temps dure le Sunset Experience ?',
        desc: 'Environ 2 heures. La sortie est planifiée pour être dans la baie au moment exact du coucher de soleil et revenir par les canaux à la tombée de la nuit.'
      },
      {
        icon: Navigation,
        title: 'À quelle heure l\'embarcation part-elle ?',
        desc: 'Cela dépend de la saison. Nous calculons l\'heure en fonction du coucher de soleil du jour de votre réservation. À la confirmation, nous vous indiquons l\'heure exacte.'
      },
      {
        icon: CheckCircle2,
        title: 'Qu\'est-ce qui est inclus ?',
        desc: 'Embarcation privée pour votre groupe, skipper inclus (option avec skipper), carburant, équipement de sécurité et itinéraire optimisé pour le coucher de soleil.'
      },
      {
        icon: GlassWater,
        title: 'Que pouvez-vous apporter ?',
        desc: 'Tout ce que vous voulez. De nombreux couples et groupes apportent du champagne ou du vin mousseux pour le coucher de soleil. Les verres et le refroidisseur sont les bienvenus.'
      },
      {
        icon: Euro,
        title: 'Prix',
        desc: 'Option sans permis à partir de 200 €. Option avec skipper (pneumatique) à partir de 300 €. (Prix par embarcation, pas par personne).'
      }
    ],
    recommendation: 'Nous proposons des modalités avec skipper et sans permis. Pour une expérience plus détendue, nous recommandons avec skipper.',
    bookBtn: 'Réserver le Sunset Experience',
    whatsappText: 'Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20Sunset%20Experience'
  },
  en: {
    title: 'Practical Information',
    description: 'Everything you need to know about the Sunset Experience trip.',
    infoItems: [
      {
        icon: Clock,
        title: 'How long does the Sunset Experience last?',
        desc: 'Approximately 2 hours. The trip is planned to be in the bay at the exact moment of sunset and return through the canals at dusk.'
      },
      {
        icon: Navigation,
        title: 'What time does the boat depart?',
        desc: 'It depends on the time of year. We calculate the time based on the sunset of your booking day. Upon confirmation, we will give you the exact time.'
      },
      {
        icon: CheckCircle2,
        title: 'What is included?',
        desc: 'Private boat for your group, skipper included (skipper option), fuel, safety equipment, and optimized route for the sunset.'
      },
      {
        icon: GlassWater,
        title: 'What can you bring?',
        desc: 'Anything you want. Many couples and groups bring champagne or sparkling wine for the sunset. Glasses and a cooler are welcome.'
      },
      {
        icon: Euro,
        title: 'Price',
        desc: 'No-licence option from 200 €. Skipper option (inflatable) from 300 €. (Price per boat, not per person).'
      }
    ],
    recommendation: 'We offer skippered and no-licence options. For a more relaxing experience, we recommend the skippered option.',
    bookBtn: 'Book the Sunset Experience',
    whatsappText: 'Hello%2C%20I%27d%20like%20information%20about%20the%20Sunset%20Experience'
  }
};

interface PracticalInfoSectionProps {
  lang?: 'es' | 'fr' | 'en';
}

export default function PracticalInfoSection({ lang = 'es' }: PracticalInfoSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {t.infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 ${index === t.infoItems.length - 1 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium mb-6">
            {t.recommendation}
          </p>
          <a
            href={`https://wa.me/34623995700?text=${t.whatsappText}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {t.bookBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
