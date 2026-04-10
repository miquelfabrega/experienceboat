import Image from 'next/image';
import { Users, Ruler, Clock, ChevronRight } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en';

interface Boat {
  id: number;
  model: string;
  image: string;
  capacity: number;
  eslora: string;
  halfDay: string;
  fullDay: string;
  badge: string;
  badgeColor: string;
}

const boatsData: Record<Lang, Boat[]> = {
  es: [
    {
      id: 1,
      model: 'Bayliner Element E5',
      image: 'https://picsum.photos/seed/boat1/600/400',
      capacity: 4,
      eslora: '4.6 m',
      halfDay: '200 €',
      fullDay: '350 €',
      badge: 'Ideal parejas',
      badgeColor: 'bg-sky-100 text-sky-700',
    },
    {
      id: 2,
      model: 'Quicksilver 475 Activ',
      image: 'https://picsum.photos/seed/boat2/600/400',
      capacity: 5,
      eslora: '4.7 m',
      halfDay: '220 €',
      fullDay: '380 €',
      badge: 'Más popular',
      badgeColor: 'bg-orange-100 text-orange-700',
    },
    {
      id: 3,
      model: 'Bayliner VR5',
      image: 'https://picsum.photos/seed/boat3/600/400',
      capacity: 6,
      eslora: '5.2 m',
      halfDay: '250 €',
      fullDay: '420 €',
      badge: 'Grupos medianos',
      badgeColor: 'bg-teal-100 text-teal-700',
    },
    {
      id: 4,
      model: 'Quicksilver 605 Open',
      image: 'https://picsum.photos/seed/boat4/600/400',
      capacity: 8,
      eslora: '6.0 m',
      halfDay: '300 €',
      fullDay: '500 €',
      badge: 'Grupos grandes',
      badgeColor: 'bg-violet-100 text-violet-700',
    },
  ],
  fr: [
    {
      id: 1,
      model: 'Bayliner Element E5',
      image: 'https://picsum.photos/seed/boat1/600/400',
      capacity: 4,
      eslora: '4,6 m',
      halfDay: '200 €',
      fullDay: '350 €',
      badge: 'Idéal couples',
      badgeColor: 'bg-sky-100 text-sky-700',
    },
    {
      id: 2,
      model: 'Quicksilver 475 Activ',
      image: 'https://picsum.photos/seed/boat2/600/400',
      capacity: 5,
      eslora: '4,7 m',
      halfDay: '220 €',
      fullDay: '380 €',
      badge: 'Le plus populaire',
      badgeColor: 'bg-orange-100 text-orange-700',
    },
    {
      id: 3,
      model: 'Bayliner VR5',
      image: 'https://picsum.photos/seed/boat3/600/400',
      capacity: 6,
      eslora: '5,2 m',
      halfDay: '250 €',
      fullDay: '420 €',
      badge: 'Groupes moyens',
      badgeColor: 'bg-teal-100 text-teal-700',
    },
    {
      id: 4,
      model: 'Quicksilver 605 Open',
      image: 'https://picsum.photos/seed/boat4/600/400',
      capacity: 8,
      eslora: '6,0 m',
      halfDay: '300 €',
      fullDay: '500 €',
      badge: 'Grands groupes',
      badgeColor: 'bg-violet-100 text-violet-700',
    },
  ],
  en: [
    {
      id: 1,
      model: 'Bayliner Element E5',
      image: 'https://picsum.photos/seed/boat1/600/400',
      capacity: 4,
      eslora: '4.6 m',
      halfDay: '200 €',
      fullDay: '350 €',
      badge: 'Ideal for couples',
      badgeColor: 'bg-sky-100 text-sky-700',
    },
    {
      id: 2,
      model: 'Quicksilver 475 Activ',
      image: 'https://picsum.photos/seed/boat2/600/400',
      capacity: 5,
      eslora: '4.7 m',
      halfDay: '220 €',
      fullDay: '380 €',
      badge: 'Most popular',
      badgeColor: 'bg-orange-100 text-orange-700',
    },
    {
      id: 3,
      model: 'Bayliner VR5',
      image: 'https://picsum.photos/seed/boat3/600/400',
      capacity: 6,
      eslora: '5.2 m',
      halfDay: '250 €',
      fullDay: '420 €',
      badge: 'Medium groups',
      badgeColor: 'bg-teal-100 text-teal-700',
    },
    {
      id: 4,
      model: 'Quicksilver 605 Open',
      image: 'https://picsum.photos/seed/boat4/600/400',
      capacity: 8,
      eslora: '6.0 m',
      halfDay: '300 €',
      fullDay: '500 €',
      badge: 'Large groups',
      badgeColor: 'bg-violet-100 text-violet-700',
    },
  ],
};

const t: Record<Lang, Record<string, string>> = {
  es: {
    badge: 'Flota con licencia',
    title: 'Nuestros barcos con licencia en Roses',
    description:
      'Disponemos de embarcaciones con licencia para distintos tamaños de grupo. Todas salen desde la Marina de Santa Margarita. Reserva por medio día o día completo según tu plan.',
    capacity: 'Capacidad:',
    people: 'personas',
    eslora: 'Eslora:',
    halfDayLabel: 'Medio día (4h)',
    fullDayLabel: 'Día completo (8h)',
    cta: 'Ver disponibilidad',
    ctaAriaLabel: 'Ver disponibilidad del {{model}}',
  },
  fr: {
    badge: 'Flotte avec permis',
    title: 'Nos bateaux avec permis à Roses',
    description:
      'Nous disposons d\'embarcations avec permis pour différentes tailles de groupe. Toutes partent depuis la Marina de Santa Margarita. Réservez pour une demi-journée ou une journée complète selon votre programme.',
    capacity: 'Capacité:',
    people: 'personnes',
    eslora: 'Eslora:',
    halfDayLabel: 'Demi-journée (4h)',
    fullDayLabel: 'Journée complète (8h)',
    cta: 'Voir disponibilité',
    ctaAriaLabel: 'Voir disponibilité du {{model}}',
  },
  en: {
    badge: 'Licensed fleet',
    title: 'Our licensed boats in Roses',
    description:
      'We have licensed vessels for different group sizes. All depart from Marina de Santa Margarita. Book for a half-day or full-day rental according to your plan.',
    capacity: 'Capacity:',
    people: 'people',
    eslora: 'Length:',
    halfDayLabel: 'Half-day (4h)',
    fullDayLabel: 'Full day (8h)',
    cta: 'Check availability',
    ctaAriaLabel: 'Check availability of the {{model}}',
  },
};


export default function BoatGrid({ lang = 'es' }: { lang?: Lang }) {
  const boats = boatsData[lang];
  const texts = t[lang];
  const sectionId = lang === 'fr' ? 'bateaux' : 'barcos';
  const whatsappBaseUrl = 'https://wa.me/34623995700?text=';
  const whatsappTexts = {
    es: 'Hola%2C%20me%20interesa%20el%20',
    fr: 'Bonjour%2C%20je%20suis%20intéressé%20par%20le%20',
    en: 'Hello%2C%20I%20am%20interested%20in%20the%20',
  };
  const whatsappEnding = '%20con%20licencia%20en%20Roses';

  return (
    <section id={sectionId} className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{texts.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{texts.title}</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">{texts.description}</p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {boats.map((boat) => (
            <article
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col anim-fade-up"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={boat.image}
                  alt={`${lang === 'es' ? 'Barco' : lang === 'fr' ? 'Bateau' : 'Boat'} ${boat.model} ${lang === 'es' ? 'disponible para alquiler con licencia en Roses' : lang === 'fr' ? 'disponible à la location avec permis à Roses' : 'available for rent with licence in Roses'}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${boat.badgeColor}`}>
                  {boat.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">{boat.model}</h3>

                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>
                      {texts.capacity} <strong className="text-gray-900">{boat.capacity} {texts.people}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>
                      {texts.eslora} <strong className="text-gray-900">{boat.eslora}</strong>
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 mb-4 flex gap-3 justify-between text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-gray-500 text-xs">{texts.halfDayLabel}</div>
                      <div className="font-extrabold text-gray-900 text-base">{boat.halfDay}</div>
                    </div>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-gray-500 text-xs">{texts.fullDayLabel}</div>
                      <div className="font-extrabold text-gray-900 text-base">{boat.fullDay}</div>
                    </div>
                  </div>
                </div>

                <a
                  href={`${whatsappBaseUrl}${whatsappTexts[lang]}${encodeURIComponent(boat.model)}${whatsappEnding}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-400/30 group/btn"
                  aria-label={texts.ctaAriaLabel.replace('{{model}}', boat.model)}
                >
                  {texts.cta}
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
