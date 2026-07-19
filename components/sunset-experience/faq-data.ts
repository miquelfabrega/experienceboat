export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: Record<'es' | 'fr' | 'en' | 'ca', FAQ[]> = {
  ca: [
    {
      question: 'Cal llicència nàutica per al Sunset Experience?',
      answer: 'No necessàriament. Oferim el Sunset Experience en dues modalitats: amb patró inclòs (sense necessitat de cap titulació) i amb vaixell sense llicència per a qui prefereix portar l\'embarcació. Per a l\'experiència més relaxada recomanem l\'opció amb patró, especialment al capvespre quan les condicions de llum canvien constantment.'
    },
    {
      question: 'Es pot reservar el Sunset Experience per a una ocasió especial com un aniversari?',
      answer: 'Sí, és exactament per a aquesta mena de moments. Si voleu preparar alguna cosa especial a bord —una ampolla de cava, decoració, una sorpresa— consulteu-nos en reservar i intentem organitzar-ho. El patró ha organitzat desenes de sortides especials i sap com fer que el moment sigui memorable.'
    },
    {
      question: 'Què passa si el dia del Sunset Experience està ennuvolat?',
      answer: 'Els cels ennuvolats poden donar capvespres espectaculars — alguns dels més bonics passen quan hi ha núvols que filtren la llum del sol. Si la previsió és de pluja o mal temps, ho comuniquem amb antelació i cerquem data alternativa sense cost.'
    },
    {
      question: 'Quantes persones poden venir al Sunset Experience?',
      answer: 'Segons l\'embarcació, entre 4 i 12 persones. És un servei completament privat — l\'embarcació és només per al vostre grup.'
    },
    {
      question: 'Es pot combinar el Sunset Experience amb una excursió de dia complet?',
      answer: 'Sí, tot i que són dues sortides independents que caldria reservar per separat. Alguns grups que són uns quants dies a Roses combinen una excursió al Cap de Creus al matí amb el Sunset Experience al capvespre del mateix dia o de l\'endemà.'
    }
  ],
  es: [
    {
      question: '¿Hace falta licencia náutica para el Sunset Experience?',
      answer: 'No necesariamente. Ofrecemos el Sunset Experience en dos modalidades: con patrón incluido (sin necesidad de ninguna titulación) y con barco sin licencia para quien prefiere llevar la embarcación. Para la experiencia más relajada recomendamos la opción con patrón, especialmente al atardecer cuando las condiciones de luz cambian constantemente.'
    },
    {
      question: '¿Se puede reservar el Sunset Experience para una ocasión especial como un aniversario?',
      answer: 'Sí, es exactamente para ese tipo de momentos. Si queréis preparar algo especial a bordo —una botella de cava, decoración, una sorpresa— consultadnos al reservar e intentamos organizarlo. Salvador y el equipo han organizado decenas de salidas especiales y saben cómo hacer que el momento sea memorable.'
    },
    {
      question: '¿Qué pasa si el día del Sunset Experience está nublado?',
      answer: 'Los cielos nublados pueden dar atardeceres espectaculares — algunos de los más bonitos ocurren cuando hay nubes que filtran la luz del sol. Si la previsión es de lluvia o mal tiempo, lo comunicamos con antelación y buscamos fecha alternativa sin coste.'
    },
    {
      question: '¿Cuántas personas pueden venir al Sunset Experience?',
      answer: 'Dependiendo de la embarcación, entre 4 y 12 personas. Es un servicio completamente privado — la embarcación es solo para vuestro grupo.'
    },
    {
      question: '¿Se puede combinar el Sunset Experience con una excursión de día completo?',
      answer: 'Sí, aunque son dos salidas independientes que habría que reservar por separado. Algunos grupos que están varios días en Roses combinan una excursión al Cap de Creus por la mañana con el Sunset Experience al atardecer del mismo día o del día siguiente.'
    }
  ],
  fr: [
    {
      question: 'Faut-il un permis nautique pour le Sunset Experience ?',
      answer: 'Pas nécessairement. Nous proposons le Sunset Experience en deux formules : avec skipper inclus (sans aucun diplôme requis) et en bateau sans permis pour ceux qui préfèrent conduire eux-mêmes. Pour une expérience plus détendue, nous recommandons l\'option avec skipper, surtout au coucher du soleil quand les conditions de lumière changent constamment.'
    },
    {
      question: 'Peut-on réserver le Sunset Experience pour une occasion spéciale comme un anniversaire de mariage ?',
      answer: 'Oui, c\'est exactement pour ce type de moments. Si vous souhaitez préparer quelque chose de spécial à bord — une bouteille de champagne, une décoration, une surprise — signalez-le lors de la réservation et nous ferons de notre mieux pour l\'organiser. Le skipper a organisé des dizaines de sorties spéciales et sait comment rendre le moment inoubliable.'
    },
    {
      question: 'Que se passe-t-il si le jour du Sunset Experience est nuageux ?',
      answer: 'Les ciels nuageux peuvent donner des couchers de soleil spectaculaires — certains des plus beaux se produisent quand les nuages filtrent la lumière du soleil. Si les prévisions annoncent de la pluie ou du mauvais temps, nous vous prévenons à l\'avance et cherchons une date alternative sans frais supplémentaires.'
    },
    {
      question: 'Combien de personnes peuvent participer au Sunset Experience ?',
      answer: 'Selon l\'embarcation, entre 4 et 12 personnes. C\'est un service entièrement privatif — le bateau est exclusivement pour votre groupe.'
    },
    {
      question: 'Peut-on combiner le Sunset Experience avec une excursion d\'une journée complète ?',
      answer: 'Oui, bien que ce soient deux sorties indépendantes à réserver séparément. Certains groupes qui séjournent plusieurs jours à Roses combinent une excursion au Cap de Creus le matin avec le Sunset Experience le soir du même jour ou du lendemain.'
    }
  ],
  en: [
    {
      question: 'Do I need a boat licence for the Sunset Experience?',
      answer: 'Not necessarily. We offer the Sunset Experience in two options: with skipper included (no qualifications required) and as a no-licence boat for those who prefer to drive themselves. For the most relaxing experience we recommend the skippered option, especially at sunset when the light conditions change constantly.'
    },
    {
      question: 'Can I book the Sunset Experience for a special occasion like a wedding anniversary?',
      answer: 'Yes, it is designed exactly for moments like that. If you want to prepare something special on board — a bottle of champagne, decorations, a surprise — let us know when you book and we will do our best to arrange it. The skipper has organised dozens of special trips and knows how to make the moment truly memorable.'
    },
    {
      question: 'What if the day of the Sunset Experience is cloudy?',
      answer: 'Cloudy skies can produce spectacular sunsets — some of the most beautiful occur when clouds filter the sunlight. If the forecast is for rain or bad weather, we will let you know in advance and find an alternative date at no extra cost.'
    },
    {
      question: 'How many people can join the Sunset Experience?',
      answer: 'Depending on the boat, between 4 and 12 people. It is a fully private service — the boat is exclusively for your group.'
    },
    {
      question: 'Can I combine the Sunset Experience with a full-day excursion?',
      answer: 'Yes, although they are two separate trips that need to be booked independently. Some groups staying several days in Roses combine a Cap de Creus excursion in the morning with the Sunset Experience in the evening of the same or the following day.'
    }
  ]
};

// For backwards compatibility - export the ES version as default
export const faqs = faqData.es;
export const faqsFrSunset = faqData.fr;
export const faqsEnSunset = faqData.en;
