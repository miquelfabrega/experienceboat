type Lang = 'es' | 'fr' | 'ca';

interface BahiaUnicaSectionProps {
  lang?: Lang;
}

const t: Record<
  Lang,
  {
    titlePre: string;
    titleHi: string;
    introPre: string;
    introLink: string;
    introHref: string;
    introPost: string;
    p2pre: string;
    p2km: string;
    p2post: string;
    quotePre: string;
    quoteWord: string;
    quotePost: string;
    cards: { icon: string; title: string; desc: string }[];
  }
> = {
  es: {
    titlePre: 'La bahía de Roses desde el agua —',
    titleHi: 'qué hace única esta zona',
    introPre:
      'Si estás planificando una jornada completa por la bahía con tu licencia en Roses, consulta primero nuestra página de ',
    introLink: 'alquiler de barco con licencia en Roses',
    introHref: '/alquiler-barco-con-licencia-roses',
    introPost:
      ': allí encontrarás toda la flota disponible, precios por temporada y cómo reservar para la Costa Brava.',
    p2pre: 'La bahía de Roses mide aproximadamente ',
    p2km: '15 kilómetros de costa',
    p2post:
      ' y está delimitada por dos de los entornos naturales más singulares de Cataluña: el Parque Natural de los Aiguamolls del Empordà al sur y el Parque Natural del Cap de Creus al norte. Desde el agua, esa combinación de naturaleza protegida, costa escarpada y aguas mediterráneas transparentes crea un escenario que muy pocos lugares del litoral español pueden igualar.',
    quotePre:
      'Para un patrón con licencia, la bahía de Roses ofrece algo que no abunda en la Costa Brava: ',
    quoteWord: 'espacio',
    quotePost:
      '. Puedes alejarte de la costa, trazar rutas largas, explorar el Cap de Creus en profundidad o simplemente navegar durante horas sin cruzarte con nadie más que alguna barca de pesca local. Esa libertad de movimiento — sin límites de zona ni de tiempo de navegación — es el argumento principal para elegir una embarcación con licencia frente a otras opciones.',
    cards: [
      { icon: '🌊', title: 'Costa protegida', desc: 'Dos parques naturales enmarcan la bahía' },
      { icon: '⚓', title: 'Fondeos libres', desc: 'Calas volcánicas acceso libre por mar' },
      { icon: '🧭', title: 'Rutas sin límite', desc: 'Navega a Cap de Creus, Llançà y más' },
    ],
  },
  fr: {
    titlePre: 'La bahía de Roses desde el agua —',
    titleHi: 'qué hace única esta zona',
    introPre:
      'Si estás planificando una jornada completa por la bahía con tu licencia en Roses, consulta primero nuestra página de ',
    introLink: 'alquiler de barco con licencia en Roses',
    introHref: '/fr/location-bateau-avec-permis-roses',
    introPost:
      ': allí encontrarás toda la flota disponible, precios por temporada y cómo reservar para la Costa Brava.',
    p2pre: 'La bahía de Roses mide aproximadamente ',
    p2km: '15 kilómetros de costa',
    p2post:
      ' y está delimitada por dos de los entornos naturales más singulares de Cataluña: el Parque Natural de los Aiguamolls del Empordà al sur y el Parque Natural del Cap de Creus al norte. Desde el agua, esa combinación de naturaleza protegida, costa escarpada y aguas mediterráneas transparentes crea un escenario que muy pocos lugares del litoral español pueden igualar.',
    quotePre:
      'Para un patrón con licencia, la bahía de Roses ofrece algo que no abunda en la Costa Brava: ',
    quoteWord: 'espacio',
    quotePost:
      '. Puedes alejarte de la costa, trazar rutas largas, explorar el Cap de Creus en profundidad o simplemente navegar durante horas sin cruzarte con nadie más que alguna barca de pesca local. Esa libertad de movimiento — sin límites de zona ni de tiempo de navegación — es el argumento principal para elegir una embarcación con licencia frente a otras opciones.',
    cards: [
      { icon: '🌊', title: 'Costa protegida', desc: 'Dos parques naturales enmarcan la bahía' },
      { icon: '⚓', title: 'Fondeos libres', desc: 'Calas volcánicas acceso libre por mar' },
      { icon: '🧭', title: 'Rutas sin límite', desc: 'Navega a Cap de Creus, Llançà y más' },
    ],
  },
  ca: {
    titlePre: 'La badia de Roses des de l\'aigua —',
    titleHi: 'què fa única aquesta zona',
    introPre:
      'Si esteu planificant una jornada completa per la badia amb la vostra llicència a Roses, consulteu primer la nostra pàgina de ',
    introLink: 'lloguer de vaixell amb llicència a Roses',
    introHref: '/ca/lloguer-vaixell-amb-llicencia-roses',
    introPost:
      ': allà hi trobareu tota la flota disponible, preus per temporada i com reservar per a la Costa Brava.',
    p2pre: 'La badia de Roses fa aproximadament ',
    p2km: '15 quilòmetres de costa',
    p2post:
      ' i està delimitada per dos dels entorns naturals més singulars de Catalunya: el Parc Natural dels Aiguamolls de l\'Empordà al sud i el Parc Natural del Cap de Creus al nord. Des de l\'aigua, aquesta combinació de natura protegida, costa escarpada i aigües mediterrànies transparents crea un escenari que molt pocs llocs del litoral espanyol poden igualar.',
    quotePre:
      'Per a un patró amb llicència, la badia de Roses ofereix una cosa que no abunda a la Costa Brava: ',
    quoteWord: 'espai',
    quotePost:
      '. Podeu allunyar-vos de la costa, traçar rutes llargues, explorar el Cap de Creus en profunditat o simplement navegar durant hores sense creuar-vos amb ningú més que alguna barca de pesca local. Aquesta llibertat de moviment — sense límits de zona ni de temps de navegació — és l\'argument principal per triar una embarcació amb llicència davant d\'altres opcions.',
    cards: [
      { icon: '🌊', title: 'Costa protegida', desc: 'Dos parcs naturals emmarquen la badia' },
      { icon: '⚓', title: 'Fondeigs lliures', desc: 'Cales volcàniques accés lliure per mar' },
      { icon: '🧭', title: 'Rutes sense límit', desc: 'Navegueu a Cap de Creus, Llançà i més' },
    ],
  },
};

export default function BahiaUnicaSection({ lang = 'es' }: BahiaUnicaSectionProps) {
  const labels = t[lang];
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
          {labels.titlePre}{' '}
          <span className="text-[#0d4a47]">{labels.titleHi}</span>
        </h2>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            {labels.introPre}
            <a
              href={labels.introHref}
              className="text-[#0d4a47] font-medium underline underline-offset-2 hover:text-[#0b1f3a] transition-colors"
            >
              {labels.introLink}
            </a>
            {labels.introPost}
          </p>
          <p>
            {labels.p2pre}
            <strong className="text-slate-800 font-semibold">{labels.p2km}</strong>
            {labels.p2post}
          </p>

          <div className="relative pl-6 border-l-4 border-cyan-400">
            <p className="text-slate-700">
              {labels.quotePre}
              <strong className="text-slate-900 text-xl font-bold">{labels.quoteWord}</strong>
              {labels.quotePost}
            </p>
          </div>
        </div>

        {/* Visual accent */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {labels.cards.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <span className="text-3xl mb-3">{item.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
