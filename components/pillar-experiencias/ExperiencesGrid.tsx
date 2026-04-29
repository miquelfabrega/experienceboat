import Image from 'next/image';
import Link from 'next/link';
import { Clock, ChevronRight, Euro } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  label: string;
  heading: string;
  subtitle: string;
  experiences: {
    id: string;
    title: string;
    image: string;
    desc: string;
    duration: string;
    price: string;
    href: string;
    ctaText: string;
  }[];
}> = {
  es: {
    label: 'Nuestras salidas',
    heading: 'Elige tu experiencia',
    subtitle: 'Tenemos tres tipos de salida según el momento del día y lo que estés buscando:',
    experiences: [
      {
        id: 'excursiones',
        title: 'Excursiones privadas',
        image: 'https://picsum.photos/seed/excursion-cap-creus/600/400',
        desc: 'Explora el Cap de Creus, las calas y la bahía de Roses con patrón incluido. Ruta adaptada a tu grupo.',
        duration: 'Medio día o día completo',
        price: 'desde 300 €',
        href: '/experiencias-barco-roses/excursiones-privadas',
        ctaText: 'Ver excursiones',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: 'https://picsum.photos/seed/sunset-roses/600/400',
        desc: 'El atardecer más bonito de Roses visto desde el agua. Una salida de tarde-noche por los canales y la bahía.',
        duration: 'Aproximadamente 2 horas',
        price: 'desde 225 €',
        href: '/experiencias-barco-roses/sunset-experience',
        ctaText: 'Ver Sunset Experience',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarita',
        image: 'https://picsum.photos/seed/canal-tour/600/400',
        desc: 'Conviértete en capitán explorando los impresionantes canales de Santa Margarita en nuestros barcos sin licencia.',
        duration: '90 minutos',
        price: 'Consultar tarifas',
        href: '/experiencias-barco-roses/canal-tour-santa-margarita',
        ctaText: 'Ver Canal Tour',
      },
      {
        id: 'cap-de-creus-calas',
        title: 'Cap de Creus — 3 Calas',
        image: 'https://picsum.photos/seed/cap-de-creus-calas/600/400',
        desc: 'Excursión guiada de 3 a 5 horas hasta el Cap de Creus con baño en 3 calas vírgenes solo accesibles por mar.',
        duration: '3 a 5 horas',
        price: 'desde 65 €',
        href: '/experiencias-barco-roses/cap-de-creus-calas',
        ctaText: 'Ver excursión Cap de Creus',
      },
      {
        id: 'cadaques',
        title: 'Excursión a Cadaqués',
        image: 'https://picsum.photos/seed/cadaques-excursion/600/400',
        desc: 'Llega por mar al pueblo blanco de Dalí con visita guiada y tiempo libre para pasear o comer.',
        duration: 'Día completo',
        price: 'desde 75 €',
        href: '/experiencias-barco-roses/cadaques',
        ctaText: 'Ver excursión Cadaqués',
      },
    ],
  },
  fr: {
    label: 'Nos sorties',
    heading: 'Choisissez votre expérience',
    subtitle: 'Trois types de sorties selon le moment de la journée et ce que vous recherchez\u00a0:',
    experiences: [
      {
        id: 'excursions',
        title: 'Excursions privées',
        image: 'https://picsum.photos/seed/excursion-cap-creus/600/400',
        desc: 'Explorez le Cap de Creus, les criques et la baie de Roses avec skipper inclus. Itinéraire adapté à votre groupe.',
        duration: 'Demi-journée ou journée complète',
        price: 'à partir de 300\u00a0€',
        href: '/fr/experiences-bateau-roses/excursions-privees',
        ctaText: 'Voir les excursions',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: 'https://picsum.photos/seed/sunset-roses/600/400',
        desc: "Le plus beau coucher de soleil de Roses vu depuis l'eau. Une sortie en soirée dans les canaux et la baie.",
        duration: 'Environ 2 heures',
        price: 'à partir de 225\u00a0€',
        href: '/fr/experiences-bateau-roses/sunset-experience',
        ctaText: 'Voir Sunset Experience',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarita',
        image: 'https://picsum.photos/seed/canal-tour/600/400',
        desc: 'Devenez capitaine et explorez les impressionnants canaux de Santa Margarita à bord de nos bateaux sans permis.',
        duration: '90 minutes',
        price: 'Sur devis',
        href: '/fr/experiences-bateau-roses/canal-tour-santa-margarita',
        ctaText: 'Voir Canal Tour',
      },
    ],
  },
  en: {
    label: 'Our boat trips',
    heading: 'Choose your experience',
    subtitle: 'Three types of boat trips depending on the time of day and what you\u2019re looking for:',
    experiences: [
      {
        id: 'private-excursions',
        title: 'Private excursions',
        image: 'https://picsum.photos/seed/excursion-cap-creus/600/400',
        desc: 'Explore Cap de Creus, hidden coves and the Bay of Roses with a skipper included. Route tailored to your group.',
        duration: 'Half day or full day',
        price: 'from €300',
        href: '/en/boat-experiences-roses/private-excursions',
        ctaText: 'See excursions',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: 'https://picsum.photos/seed/sunset-roses/600/400',
        desc: 'The most beautiful sunset in Roses seen from the water. An evening trip through the canals and the bay.',
        duration: 'Approximately 2 hours',
        price: 'from €225',
        href: '/en/boat-experiences-roses/sunset-experience',
        ctaText: 'See Sunset Experience',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarita',
        image: 'https://picsum.photos/seed/canal-tour/600/400',
        desc: 'Become the captain and explore the stunning Santa Margarita canals aboard our licence-free boats.',
        duration: '90 minutes',
        price: 'On request',
        href: '/en/boat-experiences-roses/canal-tour-santa-margarita',
        ctaText: 'See Canal Tour',
      },
    ],
  },
};

export default function ExperiencesGrid({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];

  return (
    <section id="experiencias" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.label}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {tx.heading}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">
          {tx.subtitle}
        </p>

        <div className="anim-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tx.experiences.map((exp) => (
            <article
              key={exp.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col anim-fade-up"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-2xl mb-3">{exp.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  {exp.desc}
                </p>

                {/* Specs */}
                <div className="flex flex-col gap-3 mb-6 bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-sky-500" />
                    <span className="text-gray-700 font-medium">{exp.duration}</span>
                  </div>
                  <div className="w-full h-px bg-gray-200" />
                  <div className="flex items-center gap-3">
                    <Euro className="w-5 h-5 text-sky-500" />
                    <span className="text-gray-700 font-medium">
                      {lang === 'en' ? 'Price: ' : lang === 'fr' ? 'Prix\u00a0: ' : 'Precio: '}
                      <strong className="text-gray-900">{exp.price}</strong>
                    </span>
                  </div>
                </div>

                <Link
                  href={exp.href}
                  className="flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-400/30 group/btn"
                >
                  {exp.ctaText}
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
