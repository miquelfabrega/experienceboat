import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  tag: string; h2: string; p1: string; p2: string; quote: string; imgAlt: string; hostRole: string;
}> = {
  ca: {
    tag: 'Sobre Experience Boat',
    h2: 'Naveguem per la Costa Brava amb passió i coneixement local',
    p1: 'Som Experience Boat, <strong>la teva empresa de vaixells a Roses</strong>. Operem des de la Marina de Santa Margarida amb <strong>8 embarcacions pròpies</strong>, el punt de partida perfecte per explorar un dels litorals més espectaculars de la Mediterrània.',
    p2: 'El nostre propòsit va néixer d\'una convicció senzilla: <strong>el mar de la Costa Brava mereix que tothom en gaudeixi</strong>. Per això oferim vaixells amb i sense llicència, excursions privades al Cap de Creus i passejos tranquils pels canals de Santa Margarida. Sigui quina sigui la teva experiència nàutica, tenim l\'embarcació i el servei adequats per a tu.',
    quote: 'Ens assegurem que cada client gaudeixi al màxim del seu temps al gran oceà de la Costa Brava.',
    imgAlt: 'Toto, patró i amfitrió d\'Experience Boat, a bord a la badia de Roses',
    hostRole: 'Patró i amfitrió',
  },
  es: {
    tag: 'Acerca de Experience Boat',
    h2: 'Navegamos la Costa Brava con pasión y conocimiento local',
    p1: 'Somos Experience Boat, <strong>tu empresa de barcos en Roses</strong>. Operamos desde la Marina de Santa Margarita con <strong>8 embarcaciones propias</strong>, el punto de partida perfecto para explorar uno de los litorales más espectaculares del Mediterráneo.',
    p2: 'Nuestro propósito nació de una convicción sencilla: <strong>el mar de la Costa Brava merece ser disfrutado por todos</strong>. Por eso ofrecemos barcos con y sin licencia, excursiones privadas al Cap de Creus y paseos tranquilos por los canales de Santa Margarita. Sea cual sea tu experiencia náutica, tenemos la embarcación y el servicio adecuados para ti.',
    quote: 'Nos aseguramos de que cada cliente disfrute al máximo su tiempo en el gran océano de la Costa Brava.',
    imgAlt: 'Toto, patrón y anfitrión de Experience Boat, a bordo en la bahía de Roses',
    hostRole: 'Patrón y anfitrión',
  },
  fr: {
    tag: 'À propos d\'Experience Boat',
    h2: 'Nous naviguons sur la Costa Brava avec passion et expertise locale',
    p1: "Nous sommes Experience Boat, <strong>votre spécialiste de la location de bateaux à Roses</strong>. Nous opérons depuis la Marina de Santa Margarita avec <strong>8 embarcations en propre</strong> — point de départ idéal pour explorer l'un des littoraux les plus spectaculaires de la Méditerranée.",
    p2: "Notre mission repose sur une conviction simple : <strong>la mer de la Costa Brava mérite d'être savourée par tous</strong>. C'est pourquoi nous proposons des bateaux avec et sans permis, des excursions privées au Cap de Creus et des balades dans les canaux de Santa Margarita. Quelle que soit votre expérience nautique, nous avons l'embarcation et le service qui vous correspondent.",
    quote: 'Nous veillons à ce que chaque client profite au maximum de son temps sur le grand océan de la Costa Brava.',
    imgAlt: 'Toto, skipper et hôte d\'Experience Boat, à bord dans la baie de Roses',
    hostRole: 'Skipper et hôte',
  },
  en: {
    tag: 'About Experience Boat',
    h2: 'Navigating the Costa Brava with passion and local expertise',
    p1: "We are Experience Boat, <strong>your boat rental company in Roses</strong>. We operate from the Marina de Santa Margarita with <strong>8 boats of our own</strong> — the perfect departure point for exploring one of the most spectacular coastlines in the Mediterranean.",
    p2: "Our purpose grew from a simple belief: <strong>the Costa Brava sea is there to be enjoyed by everyone</strong>. That's why we offer boats with and without a licence, private excursions to Cap de Creus and peaceful cruises through the Santa Margarita canals. Whatever your nautical experience, we have the right boat and service for you.",
    quote: 'We make sure every guest gets the most out of their time on the great ocean of the Costa Brava.',
    imgAlt: 'Toto, skipper and host at Experience Boat, on board in the Bay of Roses',
    hostRole: 'Skipper & host',
  },
};

export default function IntroSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm block">
              {tx.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {tx.h2}
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: tx.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: tx.p2 }} />
            </div>
            <div className="pl-6 border-l-4 border-sky-500 mt-8 py-2">
              <p className="text-xl italic font-semibold text-gray-900 leading-relaxed">
                &quot;{tx.quote}&quot;
              </p>
            </div>
          </div>
          <figure className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/toto.webp"
                alt={tx.imgAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={74}
                className="object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="block text-white text-xl font-bold">Toto</span>
                <span className="block text-sky-200 text-sm font-medium">{tx.hostRole}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
