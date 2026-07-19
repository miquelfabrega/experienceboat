type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  intro: string;
  h2: string;
  p1: string;
  p2: string;
  p3: string;
}> = {
  es: {
    intro:
      'Hay un rincón de Roses que la mayoría ve desde tierra sin saber que desde el agua es completamente diferente. Los canales de Santa Margarita son una red de vías navegables bordeadas de casas con embarcadero privado, puentes de piedra y una calma que contrasta con el bullicio de la playa. En Experience Boat salimos desde aquí — y la excursión empieza antes de llegar al mar abierto.',
    h2: '¿Qué son los canales de Santa Margarita?',
    p1: 'Santa Margarita es una urbanización náutica única en la Costa Brava, construida sobre un sistema de canales artificiales que conectan con la bahía de Roses. Fue diseñada en los años 60 siguiendo el modelo de las ciudades canal holandesas y hoy es uno de los pocos enclaves de estas características en toda la costa mediterránea española.',
    p2: 'Las casas tienen acceso directo al agua desde su jardín, cada una con su propio embarcadero, y en los canales se concentran unos 1.600 amarres. Los canales se cruzan bajo puentes bajos de piedra blanca y crean una red de 15 kilómetros de vías navegables protegidas del viento y el oleaje.',
    p3: 'Desde tierra, Santa Margarita parece un barrio residencial más de Roses. Desde el agua, es otro mundo.',
  },
  fr: {
    intro:
      'Il existe un coin de Roses que la plupart des gens contemplent depuis la terre sans savoir que, depuis l\'eau, il est tout à fait différent. Les canaux de Santa Margarita forment un réseau de voies navigables bordées de maisons avec ponton privé, de ponts de pierre et d\'un calme qui contraste avec l\'animation de la plage. Chez Experience Boat, nous partons d\'ici — et l\'excursion commence avant même d\'atteindre la pleine mer.',
    h2: 'Que sont les canaux de Santa Margarita ?',
    p1: 'Santa Margarita est un lotissement nautique unique sur la Costa Brava, construit sur un système de canaux artificiels reliés à la baie de Roses. Conçu dans les années 60 sur le modèle des villes-canaux hollandaises, c\'est aujourd\'hui l\'un des rares sites de ce genre sur toute la côte méditerranéenne espagnole.',
    p2: 'Les maisons bénéficient d\'un accès direct à l\'eau depuis leur jardin, chacune avec son propre ponton, et les canaux comptent environ 1 600 anneaux. Ils se croisent sous des ponts bas en pierre blanche et forment un réseau de 15 kilomètres de voies navigables protégées du vent et de la houle.',
    p3: 'Depuis la terre, Santa Margarita ressemble à un quartier résidentiel de plus à Roses. Depuis l\'eau, c\'est un autre monde.',
  },
  en: {
    intro:
      'There is a corner of Roses that most people only ever see from land, without realising how completely different it is from the water. The Santa Margarita canals are a network of navigable waterways lined with houses with private moorings, stone bridges and a stillness that contrasts with the bustle of the beach. At Experience Boat we set off from here — and the trip begins before you even reach the open sea.',
    h2: 'What are the Santa Margarita canals?',
    p1: 'Santa Margarita is a unique nautical development on the Costa Brava, built on a system of artificial canals connected to the Bay of Roses. Designed in the 1960s along the lines of the Dutch canal towns, it is today one of the few enclaves of its kind along the entire Spanish Mediterranean coast.',
    p2: 'The houses have direct water access from their gardens, each with its own mooring, and the canals hold around 1,600 berths in total. They pass under low white stone bridges and form a network of 15 kilometres of waterways sheltered from wind and waves.',
    p3: 'From land, Santa Margarita looks like just another residential neighbourhood in Roses. From the water, it is another world.',
  },
  ca: {
    intro:
      'Hi ha un racó de Roses que la majoria veu des de terra sense saber que des de l\'aigua és completament diferent. Els canals de Santa Margarida són una xarxa de vies navegables vorejades de cases amb embarcador privat, ponts de pedra i una calma que contrasta amb l\'enrenou de la platja. A Experience Boat sortim d\'aquí — i l\'excursió comença abans d\'arribar al mar obert.',
    h2: 'Què són els canals de Santa Margarida?',
    p1: 'Santa Margarida és una urbanització nàutica única a la Costa Brava, construïda sobre un sistema de canals artificials que connecten amb la badia de Roses. Es va dissenyar als anys 60 seguint el model de les ciutats canal holandeses i avui és un dels pocs enclavaments d\'aquestes característiques de tota la costa mediterrània espanyola.',
    p2: 'Les cases tenen accés directe a l\'aigua des del seu jardí, cadascuna amb el seu propi embarcador, i als canals hi conviuen uns 1.600 amarradors. Els canals es creuen sota ponts baixos de pedra blanca i creen una xarxa de 15 quilòmetres de vies navegables protegides del vent i de l\'onatge.',
    p3: 'Des de terra, Santa Margarida sembla un barri residencial més de Roses. Des de l\'aigua, és un altre món.',
  },
};

export default function IntroSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro paragraph */}
        <p className="text-xl text-gray-600 leading-relaxed text-center mb-16">
          {c.intro}
        </p>

        {/* ¿Qué son los canales? */}
        <div id="que-son">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {c.h2}
          </h2>
          <div className="prose prose-lg prose-gray max-w-none space-y-4 text-gray-600">
            <p>{c.p1}</p>
            <p>{c.p2}</p>
            <p className="font-semibold text-gray-800 text-lg">{c.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
