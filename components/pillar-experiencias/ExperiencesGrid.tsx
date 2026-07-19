import Image from 'next/image';
import Link from 'next/link';
import { Clock, ChevronRight, Euro } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

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
  ca: {
    label: 'Les nostres sortides',
    heading: 'Trieu la vostra experiència',
    subtitle: 'Aquestes són les nostres sortides segons el moment del dia, el pla i les persones que us acompanyen:',
    experiences: [
      {
        id: 'excursions',
        title: 'Excursions privades',
        image: '/images/experiencias/excursiones-privadas-hero.webp',
        desc: 'Exploreu el Cap de Creus, les cales i la badia de Roses amb patró inclòs. Ruta adaptada al vostre grup.',
        duration: 'Mig dia o dia complet',
        price: 'des de 300 €',
        href: '/ca/experiencies-vaixell-roses/excursions-privades',
        ctaText: 'Veure excursions',
      },
      {
        id: 'cap-de-creus-cales',
        title: 'Cap de Creus — 3 Cales',
        image: '/images/hero/cap-de-creus-calas-hero.jpg',
        desc: 'Excursió guiada de 3 a 5 hores fins al Cap de Creus amb bany a 3 cales verges només accessibles per mar.',
        duration: '3 a 5 hores',
        price: 'des de 65 €',
        href: '/ca/experiencies-vaixell-roses/cap-de-creus-cales',
        ctaText: 'Veure excursió Cap de Creus',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarida',
        image: '/santa-margarita/hero-canal-tour.webp',
        desc: 'Convertiu-vos en capità explorant els impressionants canals de Santa Margarida amb les nostres embarcacions sense llicència.',
        duration: '90 minuts',
        price: 'Consultar tarifes',
        href: '/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
        ctaText: 'Veure Canal Tour',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: '/sunset/sunset-experience.jpg',
        desc: 'El capvespre més bonic de Roses vist des de l\'aigua. Una sortida de tarda-vespre pels canals i la badia.',
        duration: 'Aproximadament 2 hores',
        price: 'des de 160 €',
        href: '/ca/experiencies-vaixell-roses/sunset-experience',
        ctaText: 'Veure Sunset Experience',
      },
      {
        id: 'cadaques',
        title: 'Excursió a Cadaqués',
        image: '/cadaques/port-lligat.webp',
        desc: 'Arribeu per mar al poble blanc de Dalí amb visita guiada i temps lliure per passejar o dinar.',
        duration: 'Dia complet',
        price: 'des de 75 €',
        href: '/ca/experiencies-vaixell-roses/cadaques',
        ctaText: 'Veure excursió Cadaqués',
      },
      {
        id: 'coves-esnorquel',
        title: 'Coves i Esnòrquel',
        image: '/images/experiencias/cuevas-snorkel.webp',
        desc: 'Sortida en vaixell per les coves marines del Cap de Creus amb parades per fer esnòrquel. Material inclòs.',
        duration: 'Mig dia',
        price: 'Consultar tarifes',
        href: '/ca/experiencies-vaixell-roses/coves-esnorquel',
        ctaText: 'Veure Coves i Esnòrquel',
      },
    ],
  },
  es: {
    label: 'Nuestras salidas',
    heading: 'Elige tu experiencia',
    subtitle: 'Estas son nuestras salidas según el momento del día, el plan y las personas que vienen contigo:',
    experiences: [
      {
        id: 'excursiones',
        title: 'Excursiones privadas',
        image: '/images/experiencias/excursiones-privadas-hero.webp',
        desc: 'Explora el Cap de Creus, las calas y la bahía de Roses con patrón incluido. Ruta adaptada a tu grupo.',
        duration: 'Medio día o día completo',
        price: 'desde 300 €',
        href: '/experiencias-barco-roses/excursiones-privadas',
        ctaText: 'Ver excursiones',
      },
      {
        id: 'cap-de-creus-calas',
        title: 'Cap de Creus — 3 Calas',
        image: '/images/hero/cap-de-creus-calas-hero.jpg',
        desc: 'Excursión guiada de 3 a 5 horas hasta el Cap de Creus con baño en 3 calas vírgenes solo accesibles por mar.',
        duration: '3 a 5 horas',
        price: 'desde 65 €',
        href: '/experiencias-barco-roses/cap-de-creus-calas',
        ctaText: 'Ver excursión Cap de Creus',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarita',
        image: '/santa-margarita/hero-canal-tour.webp',
        desc: 'Lleva tú el timón por los canales de Santa Margarita en nuestros barcos sin licencia — 90 minutos y sin titulación.',
        duration: '90 minutos',
        price: 'Consultar tarifas',
        href: '/experiencias-barco-roses/canal-tour-santa-margarita',
        ctaText: 'Ver Canal Tour',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: '/sunset/sunset-experience.jpg',
        desc: 'El atardecer más bonito de Roses visto desde el agua. Una salida de tarde-noche por los canales y la bahía.',
        duration: 'Aproximadamente 2 horas',
        price: 'desde 160 €',
        href: '/experiencias-barco-roses/sunset-experience',
        ctaText: 'Ver Sunset Experience',
      },
      {
        id: 'cadaques',
        title: 'Excursión a Cadaqués',
        image: '/cadaques/port-lligat.webp',
        desc: 'Llega por mar al pueblo blanco de Dalí con visita guiada y tiempo libre para pasear o comer.',
        duration: 'Día completo',
        price: 'desde 75 €',
        href: '/experiencias-barco-roses/cadaques',
        ctaText: 'Ver excursión Cadaqués',
      },
      {
        id: 'cuevas-snorkel',
        title: 'Cuevas & Snorkel',
        image: '/images/experiencias/cuevas-snorkel.webp',
        desc: 'Salida en barco por las cuevas marinas del Cap de Creus con paradas para hacer snorkel. Equipo incluido.',
        duration: 'Medio día',
        price: 'Consultar tarifas',
        href: '/experiencias-barco-roses/cuevas-snorkel',
        ctaText: 'Ver Cuevas & Snorkel',
      },
    ],
  },
  fr: {
    label: 'Nos sorties',
    heading: 'Choisissez votre expérience',
    subtitle: 'Nos sorties selon le moment de la journée et ce que vous recherchez\u00a0:',
    experiences: [
      {
        id: 'excursions',
        title: 'Excursions privées',
        image: '/images/experiencias/excursiones-privadas-hero.webp',
        desc: 'Explorez le Cap de Creus, les criques et la baie de Roses avec skipper inclus. Itinéraire adapté à votre groupe.',
        duration: 'Demi-journée ou journée complète',
        price: 'à partir de 300\u00a0€',
        href: '/fr/experiences-bateau-roses/excursions-privees',
        ctaText: 'Voir les excursions',
      },
      {
        id: 'cap-de-creus-criques',
        title: 'Cap de Creus — 3 Criques',
        image: '/images/hero/cap-de-creus-calas-hero.jpg',
        desc: 'Excursion guidée de 3 à 5 heures jusqu’au Cap de Creus avec baignade dans 3 criques vierges accessibles uniquement par la mer.',
        duration: '3 à 5 heures',
        price: 'à partir de 65 €',
        href: '/fr/experiences-bateau-roses/cap-de-creus-criques',
        ctaText: 'Voir l’excursion Cap de Creus',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarita',
        image: '/santa-margarita/hero-canal-tour.webp',
        desc: 'Devenez capitaine et explorez les impressionnants canaux de Santa Margarita à bord de nos bateaux sans permis.',
        duration: '90 minutes',
        price: 'Sur devis',
        href: '/fr/experiences-bateau-roses/canal-tour-santa-margarita',
        ctaText: 'Voir Canal Tour',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: '/sunset/sunset-experience.jpg',
        desc: "Le plus beau coucher de soleil de Roses vu depuis l'eau. Une sortie en soirée dans les canaux et la baie.",
        duration: 'Environ 2 heures',
        price: 'à partir de 160\u00a0€',
        href: '/fr/experiences-bateau-roses/sunset-experience',
        ctaText: 'Voir Sunset Experience',
      },
      {
        id: 'cadaques',
        title: 'Excursion à Cadaqués',
        image: '/cadaques/port-lligat.webp',
        desc: 'Rejoignez par la mer le village blanc de Dalí, avec du temps libre pour vous promener ou déjeuner.',
        duration: 'Journée complète',
        price: 'à partir de 75 €',
        href: '/fr/experiences-bateau-roses/cadaques',
        ctaText: 'Voir l’excursion Cadaqués',
      },
      {
        id: 'grottes-snorkeling',
        title: 'Grottes et Snorkeling',
        image: '/images/experiencias/cuevas-snorkel.webp',
        desc: 'Sortie en bateau dans les grottes marines du Cap de Creus avec arrêts snorkeling. Matériel inclus.',
        duration: 'Demi-journée',
        price: 'Sur devis',
        href: '/fr/experiences-bateau-roses/grottes-snorkeling',
        ctaText: 'Voir Grottes et Snorkeling',
      },
    ],
  },
  en: {
    label: 'Our boat trips',
    heading: 'Choose your experience',
    subtitle: 'Our boat trips depending on the time of day and what you\u2019re looking for:',
    experiences: [
      {
        id: 'private-excursions',
        title: 'Private excursions',
        image: '/images/experiencias/excursiones-privadas-hero.webp',
        desc: 'Explore Cap de Creus, hidden coves and the Bay of Roses with a skipper included. Route tailored to your group.',
        duration: 'Half day or full day',
        price: 'from €300',
        href: '/en/boat-experiences-roses/private-excursions',
        ctaText: 'See excursions',
      },
      {
        id: 'cap-de-creus-coves',
        title: 'Cap de Creus — 3 Coves',
        image: '/images/hero/cap-de-creus-calas-hero.jpg',
        desc: 'Guided 3 to 5 hour trip to Cap de Creus with swimming at 3 unspoilt coves only reachable by sea.',
        duration: '3 to 5 hours',
        price: 'from €65',
        href: '/en/boat-experiences-roses/cap-de-creus-coves',
        ctaText: 'See Cap de Creus trip',
      },
      {
        id: 'canal-tour',
        title: 'Canal Tour Santa Margarita',
        image: '/santa-margarita/hero-canal-tour.webp',
        desc: 'Become the captain and explore the stunning Santa Margarita canals aboard our licence-free boats.',
        duration: '90 minutes',
        price: 'On request',
        href: '/en/boat-experiences-roses/canal-tour-santa-margarita',
        ctaText: 'See Canal Tour',
      },
      {
        id: 'sunset',
        title: 'Sunset Experience',
        image: '/sunset/sunset-experience.jpg',
        desc: 'The most beautiful sunset in Roses seen from the water. An evening trip through the canals and the bay.',
        duration: 'Approximately 2 hours',
        price: 'from €160',
        href: '/en/boat-experiences-roses/sunset-experience',
        ctaText: 'See Sunset Experience',
      },
      {
        id: 'cadaques',
        title: 'Trip to Cadaqués',
        image: '/cadaques/port-lligat.webp',
        desc: 'Reach Dalí’s white village by sea, with free time to wander or have lunch.',
        duration: 'Full day',
        price: 'from €75',
        href: '/en/boat-experiences-roses/cadaques',
        ctaText: 'See Cadaqués trip',
      },
      {
        id: 'caves-snorkeling',
        title: 'Caves and Snorkelling',
        image: '/images/experiencias/cuevas-snorkel.webp',
        desc: 'Boat trip through the sea caves of Cap de Creus with snorkelling stops. Gear included.',
        duration: 'Half day',
        price: 'On request',
        href: '/en/boat-experiences-roses/caves-snorkeling',
        ctaText: 'See Caves and Snorkelling',
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
                      {lang === 'en' ? 'Price: ' : lang === 'fr' ? 'Prix\u00a0: ' : lang === 'ca' ? 'Preu: ' : 'Precio: '}
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
