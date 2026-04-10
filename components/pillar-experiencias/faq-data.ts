type Lang = 'es' | 'fr' | 'en';

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: Record<Lang, FAQ[]> = {
  es: [
    {
      question: '¿Hace falta experiencia náutica para una experiencia con patrón?',
      answer:
        'No. Cuando reservas una excursión privada o el Sunset Experience, Salvador se encarga de toda la navegación. No necesitas ninguna titulación ni experiencia previa — solo ganas de disfrutar del mar.',
    },
    {
      question: '¿Se puede elegir la ruta de la excursión?',
      answer:
        'Sí. Antes de cada salida hablamos con vosotros para recoger preferencias. Si hay calas concretas que queréis visitar o aspectos de la ruta que queréis priorizar, los incorporamos siempre que las condiciones del mar lo permitan.',
    },
    {
      question: '¿Cuántas personas pueden venir en una experiencia privada?',
      answer:
        'Dependiendo de la embarcación, entre 4 y 12 personas. Todas las salidas son privadas — la embarcación es exclusivamente para vuestro grupo.',
    },
    {
      question: '¿Qué diferencia una experiencia con patrón de un alquiler de barco?',
      answer:
        'En el alquiler, tú llevas la embarcación a tu ritmo y decides la ruta de forma autónoma. En una experiencia con patrón, Salvador lleva el barco y os guía hacia los mejores destinos según el día y las condiciones. Es la opción perfecta para quienes quieren desconectar completamente o para grupos sin experiencia náutica.',
    },
    {
      question: '¿Con cuánta antelación hay que reservar?',
      answer:
        'En temporada alta (julio y agosto) recomendamos reservar con al menos dos semanas. En temporada media, con 48-72 horas suele ser suficiente. Para grupos grandes o fechas especiales, cuanto antes mejor.',
    },
  ],
  fr: [
    {
      question: 'Faut-il une expérience nautique pour une expérience avec skipper ?',
      answer:
        'Non. Quand vous réservez une excursion privée ou le Sunset Experience, le skipper se charge de toute la navigation. Vous n\'avez besoin d\'aucun diplôme ni d\'expérience préalable — il suffit d\'avoir envie de profiter de la mer.',
    },
    {
      question: 'Peut-on choisir l\'itinéraire de l\'excursion ?',
      answer:
        'Oui. Avant chaque sortie, nous échangeons avec vous pour recueillir vos préférences. S\'il y a des criques précises que vous souhaitez visiter ou des aspects de l\'itinéraire à prioriser, nous les intégrons dans la mesure où les conditions de mer le permettent.',
    },
    {
      question: 'Combien de personnes peuvent venir sur une expérience privée ?',
      answer:
        'Selon l\'embarcation, entre 4 et 12 personnes. Toutes les sorties sont privées — le bateau est exclusivement pour votre groupe.',
    },
    {
      question: 'Quelle est la différence entre une expérience avec skipper et une location de bateau ?',
      answer:
        'Avec la location, vous pilotez vous-même l\'embarcation à votre rythme et décidez de l\'itinéraire en toute autonomie. Avec une expérience avec skipper, le skipper conduit le bateau et vous guide vers les meilleurs endroits selon le jour et les conditions. C\'est l\'option parfaite pour ceux qui veulent se déconnecter complètement ou pour les groupes sans expérience nautique.',
    },
    {
      question: 'Combien de temps à l\'avance faut-il réserver ?',
      answer:
        'En haute saison (juillet et août), nous recommandons de réserver au moins deux semaines à l\'avance. En moyenne saison, 48 à 72 heures suffisent en général. Pour les grands groupes ou les dates spéciales, mieux vaut réserver le plus tôt possible.',
    },
  ],
  en: [
    {
      question: 'Do I need sailing experience for a skippered experience?',
      answer:
        'No. When you book a private excursion or the Sunset Experience, the skipper handles all the navigation. You don\'t need any qualifications or previous experience — just come ready to enjoy the sea.',
    },
    {
      question: 'Can we choose the route for the excursion?',
      answer:
        'Yes. Before each departure we talk to you to gather your preferences. If there are specific coves you want to visit or aspects of the route you want to prioritise, we incorporate them as long as sea conditions allow.',
    },
    {
      question: 'How many people can come on a private experience?',
      answer:
        'Depending on the boat, between 4 and 12 people. All departures are private — the boat is exclusively for your group.',
    },
    {
      question: 'What is the difference between a skippered experience and a boat rental?',
      answer:
        'With a rental, you pilot the boat at your own pace and decide the route independently. With a skippered experience, the skipper drives the boat and guides you to the best spots depending on the day and conditions. It\'s the perfect option for those who want to fully switch off or for groups without any nautical experience.',
    },
    {
      question: 'How far in advance do I need to book?',
      answer:
        'In high season (July and August) we recommend booking at least two weeks in advance. In shoulder season, 48–72 hours is usually enough. For large groups or special dates, the earlier the better.',
    },
  ],
};

// Export for backward compatibility
export const faqs = faqData.es;
export const faqsFrExperiencias = faqData.fr;
export const faqsEnExperiencias = faqData.en;
