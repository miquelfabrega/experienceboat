import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  tag: string; h2: string; p1: string; p2: string; quote: string; imgAlt: string; hostRole: string;
}> = {
  ca: {
    tag: 'Qui és en Toto',
    h2: 'El mar em ve de família',
    p1: 'Em dic <strong>Salvador Vidal, «Toto»</strong>. Vaig créixer en un poble de costa de Castelló, amb el mar a la porta de casa, i això de navegar em ve de lluny: el meu avi va ser <strong>capità de la Marina Mercant</strong> i es va passar la vida recorrent el món per mar. Jo he acabat sent capità de iot, amb moltes hores de navegació a l\'esquena.',
    p2: 'No vaig néixer a Roses, i no us ho vendré com si fos així: el que sé d\'aquesta costa ho he après <strong>temporada rere temporada</strong>, navegant la badia i el Cap de Creus gairebé cada dia. Quan no soc al vaixell, també soc a l\'aigua — kitesurf, surf, moto d\'aigua — i a l\'hivern, a la muntanya. Darrere meu hi ha l\'equip fundador d\'Experience Boat, que fa que els <strong>8 vaixells propis</strong> surtin cada dia a punt de la Marina de Santa Margarida.',
    quote: 'Vull que navegueu com si sortíssiu amb un amic que coneix la costa, no com en una excursió d\'agència.',
    imgAlt: 'Toto, patró i amfitrió d\'Experience Boat, a bord a la badia de Roses',
    hostRole: 'Patró i amfitrió',
  },
  es: {
    tag: 'Quién es Toto',
    h2: 'El mar me viene de familia',
    p1: 'Me llamo <strong>Salvador Vidal, «Toto»</strong>. Crecí en un pueblo de costa de Castellón, con el mar en la puerta de casa, y lo de navegar me viene de lejos: mi abuelo fue <strong>capitán de la Marina Mercante</strong> y se pasó la vida recorriendo el mundo por mar. Yo he acabado siendo capitán de yate, con muchas horas de navegación a la espalda.',
    p2: 'No nací en Roses, y no te lo voy a vender como si fuera así: lo que sé de esta costa lo he aprendido <strong>temporada tras temporada</strong>, navegando la bahía y el Cap de Creus casi a diario. Cuando no estoy en el barco, también estoy en el agua — kitesurf, surf, moto de agua — y en invierno, en la montaña. Detrás de mí está el equipo fundador de Experience Boat, que hace que los <strong>8 barcos propios</strong> salgan cada día a punto de la Marina de Santa Margarita.',
    quote: 'Quiero que navegues como si salieras con un amigo que conoce la costa, no como en una excursión de agencia.',
    imgAlt: 'Toto, patrón y anfitrión de Experience Boat, a bordo en la bahía de Roses',
    hostRole: 'Patrón y anfitrión',
  },
  fr: {
    tag: 'Qui est Toto',
    h2: 'La mer, une histoire de famille',
    p1: "Je m'appelle <strong>Salvador Vidal, « Toto »</strong>. J'ai grandi dans un village côtier de la région de Castellón, la mer au pas de la porte, et la navigation me vient de loin : mon grand-père était <strong>capitaine de la marine marchande</strong> et a passé sa vie à parcourir le monde par la mer. Moi, je suis devenu capitaine de yacht, avec de nombreuses heures de navigation derrière moi.",
    p2: "Je ne suis pas né à Roses, et je ne vais pas vous le vendre comme tel : ce que je sais de cette côte, je l'ai appris <strong>saison après saison</strong>, en naviguant la baie et le Cap de Creus presque tous les jours. Quand je ne suis pas sur le bateau, je suis quand même sur l'eau — kitesurf, surf, jet-ski — et en hiver, à la montagne. Derrière moi, il y a l'équipe fondatrice d'Experience Boat, qui fait que nos <strong>8 bateaux en propre</strong> partent chaque jour prêts depuis la Marina de Santa Margarita.",
    quote: 'Je veux que vous naviguiez comme si vous sortiez avec un ami qui connaît la côte, pas comme dans une excursion d\'agence.',
    imgAlt: 'Toto, skipper et hôte d\'Experience Boat, à bord dans la baie de Roses',
    hostRole: 'Skipper et hôte',
  },
  en: {
    tag: 'Who Toto is',
    h2: 'The sea runs in the family',
    p1: "My name is <strong>Salvador Vidal — «Toto»</strong>. I grew up in a coastal village in the Castellón region with the sea on my doorstep, and sailing goes back generations: my grandfather was a <strong>Merchant Navy captain</strong> who spent his life crossing the world by sea. I ended up a qualified yacht captain, with a lot of hours on the water behind me.",
    p2: "I wasn't born in Roses, and I won't pretend otherwise: what I know about this coast I've learned <strong>season after season</strong>, sailing the bay and Cap de Creus almost daily. When I'm not on the boat I'm still on the water — kitesurfing, surfing, jet skiing — and in winter, up in the mountains. Behind me is the founding team of Experience Boat, who make sure our <strong>8 boats</strong> leave the Marina de Santa Margarita ready every single day.",
    quote: "I want you to sail as if you were out with a friend who knows the coast — not on an agency tour.",
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
