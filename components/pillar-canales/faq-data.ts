type Lang = 'es' | 'fr' | 'ca';

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: Record<Lang, FAQ[]> = {
  ca: [
    {
      question: 'Què són exactament els canals de Santa Margarida?',
      answer:
        'Els canals de Santa Margarida són una xarxa de vies navegables artificials a Roses (Costa Brava) construïda als anys 60. Centenars d\'habitatges tenen accés directe a l\'aigua des del seu embarcador privat. És un dels pocs enclavaments d\'aquest tipus a la costa mediterrània espanyola i només es pot descobrir del tot des de l\'aigua.',
    },
    {
      question: 'Es pot navegar pels canals de Santa Margarida sense llicència?',
      answer:
        'Sí. Els nostres vaixells sense llicència són perfectes per explorar els canals. Les aigües interiors són tranquil·les, sense onatge i sense corrents, cosa que els converteix en l\'entorn ideal per a debutants i famílies amb canalla.',
    },
    {
      question: 'Quant dura la visita als canals?',
      answer:
        'El recorregut pels canals interiors dura entre 60 i 90 minuts. Si el combineu amb una sortida a la badia de Roses o al Cap de Creus, podeu passar des d\'un mig dia fins a una jornada completa a l\'aigua.',
    },
    {
      question: 'Els canals de Santa Margarida són només per a turistes o també hi viu gent?',
      answer:
        'És una urbanització residencial activa. Les cases tenen propietaris que hi viuen tot l\'any o de temporada. Això és precisament el que fa el recorregut tan especial: no és un decorat, és un barri real vist des de l\'aigua.',
    },
    {
      question: 'D\'on surten les embarcacions d\'Experience Boat?',
      answer:
        'Sortim de la Marina de Santa Margarida, a l\'Av. Clot Franquest Nord, 17480 Roses. És el punt d\'entrada als canals, cosa que significa que el recorregut per les vies navegables comença des del primer minut de la sortida.',
    },
  ],
  es: [
    {
      question: '¿Qué son exactamente los canales de Santa Margarita?',
      answer:
        'Los canales de Santa Margarita son una red de vías navegables artificiales en Roses (Costa Brava) construida en los años 60. Cientos de viviendas tienen acceso directo al agua desde su embarcadero privado. Es uno de los pocos enclaves de este tipo en la costa mediterránea española y solo se puede descubrir completamente desde el agua.',
    },
    {
      question: '¿Se puede navegar por los canales de Santa Margarita sin licencia?',
      answer:
        'Sí. Nuestros barcos sin licencia son perfectos para explorar los canales. Las aguas interiores son tranquilas, sin oleaje y sin corrientes, lo que los convierte en el entorno ideal para debutantes y familias con niños.',
    },
    {
      question: '¿Cuánto tiempo dura la visita a los canales?',
      answer:
        'El recorrido por los canales interiores dura entre 60 y 90 minutos. Si lo combinas con una salida a la bahía de Roses o al Cap de Creus, puedes pasar desde un medio día hasta una jornada completa en el agua.',
    },
    {
      question: '¿Los canales de Santa Margarita son solo para turistas o también viven personas allí?',
      answer:
        'Es una urbanización residencial activa. Las casas tienen propietarios que viven allí durante todo el año o en temporada. Eso es precisamente lo que hace el recorrido tan especial: no es un decorado, es un barrio real visto desde el agua.',
    },
    {
      question: '¿Desde dónde salen las embarcaciones de Experience Boat?',
      answer:
        'Salimos desde la Marina de Santa Margarita, en Av. Clot Franquest Nord, 17480 Roses. Es el punto de entrada a los canales, lo que significa que el recorrido por las vías navegables empieza desde el primer minuto de la salida.',
    },
  ],
  fr: [
    {
      question: 'Que sont exactement les canaux de Santa Margarita ?',
      answer:
        'Les canaux de Santa Margarita sont un réseau de voies navigables artificielles à Roses (Costa Brava), construit dans les années 60. Des centaines de maisons ont un accès direct à l\'eau depuis leur ponton privé. C\'est l\'un des rares endroits de ce type sur la côte méditerranéenne espagnole et il ne peut être découvert pleinement que depuis l\'eau.',
    },
    {
      question: 'Peut-on naviguer sur les canaux de Santa Margarita sans permis ?',
      answer:
        'Oui. Nos bateaux sans permis sont parfaits pour explorer les canaux. Les eaux intérieures sont calmes, sans vagues ni courants, ce qui en fait l\'environnement idéal pour les débutants et les familles avec enfants.',
    },
    {
      question: 'Combien de temps dure la visite des canaux ?',
      answer:
        'Le parcours des canaux intérieurs dure entre 60 et 90 minutes. Si vous le combinez avec une sortie vers la baie de Roses ou le Cap de Creus, vous pouvez passer d\'une demi-journée à une journée entière sur l\'eau.',
    },
    {
      question: 'Les canaux de Santa Margarita sont-ils uniquement pour les touristes ou y habite-t-on ?',
      answer:
        'C\'est un lotissement résidentiel actif. Les maisons ont des propriétaires qui y vivent toute l\'année ou en saison. C\'est précisément ce qui rend le parcours si spécial : ce n\'est pas un décor, c\'est un vrai quartier vu depuis l\'eau.',
    },
    {
      question: 'D\'où partent les bateaux Experience Boat ?',
      answer:
        'Nous partons de la Marina de Santa Margarita, Av. Clot Franquest Nord, 17480 Roses. C\'est le point d\'entrée des canaux, ce qui signifie que le parcours sur les voies navigables commence dès la première minute de la sortie.',
    },
  ],
};

// Export for backward compatibility
export const faqs = faqData.es;
export const faqsFr = faqData.fr;
