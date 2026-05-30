type Lang = 'es' | 'fr' | 'en' | 'ca';

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: Record<Lang, FAQ[]> = {
  es: [
    {
      question: '¿Qué licencia necesito para alquilar un barco con licencia en Roses?',
      answer:
        'Se requiere como mínimo la titulación PNB (Patrón de Navegación Básica) o equivalente reconocido en España. Si tienes una titulación extranjera, consúltanos y verificamos si es válida para nuestras embarcaciones.',
    },
    {
      question: '¿Puedo navegar hasta el Cap de Creus con un barco de alquiler?',
      answer:
        'Sí. Nuestras embarcaciones con licencia están habilitadas para navegar por la bahía de Roses y el Parque Natural del Cap de Creus. La travesía desde Santa Margarita hasta el cabo es de aproximadamente 45-60 minutos según las condiciones.',
    },
    {
      question: '¿Se puede alquilar un barco con licencia para un grupo grande?',
      answer:
        'Depende del modelo. Tenemos embarcaciones con capacidad para distintos tamaños de grupo. Si sois más de 12 personas, consúltanos y buscamos la mejor opción para vuestro grupo.',
    },
    {
      question: '¿Qué pasa si el tiempo empeora durante la navegación?',
      answer:
        'En caso de condiciones meteorológicas adversas durante la salida, recomendamos regresar a puerto. Monitorizamos el tiempo diariamente y si la previsión es mala desde el inicio, cancelamos la salida sin coste y buscamos otra fecha.',
    },
    {
      question: '¿Puedo hacer paradas para bañarme en las calas?',
      answer:
        'Sí. Todas las embarcaciones llevan escalera de baño. Las paradas son decisión tuya — puedes anclar en las calas que quieras durante la ruta.',
    },
  ],
  fr: [
    {
      question: 'Quel permis faut-il pour louer un bateau avec permis à Roses ?',
      answer:
        'Il faut au minimum le PNB (Patron de Navigation de Base) ou un équivalent reconnu en Espagne. Si vous avez un permis étranger, contactez-nous et nous vérifierons s\'il est valide pour nos embarcations.',
    },
    {
      question: 'Peut-on naviguer jusqu\'au Cap de Creus avec un bateau de location ?',
      answer:
        'Oui. Nos embarcations avec permis sont habilitées à naviguer dans la baie de Roses et dans le Parc Naturel du Cap de Creus. La traversée depuis Santa Margarita jusqu\'au cap dure environ 45 à 60 minutes selon les conditions.',
    },
    {
      question: 'Peut-on louer un bateau avec permis pour un grand groupe ?',
      answer:
        'Cela dépend du modèle. Nous disposons d\'embarcations pour différentes tailles de groupe. Si vous êtes plus de 12, contactez-nous et nous trouverons la meilleure option pour votre groupe.',
    },
    {
      question: 'Que se passe-t-il si le temps se dégrade pendant la navigation ?',
      answer:
        'En cas de conditions météorologiques défavorables, nous recommandons de rentrer au port. Nous suivons les prévisions météo quotidiennement et si les conditions sont mauvaises dès le départ, nous annulons la sortie sans frais et cherchons une autre date.',
    },
    {
      question: 'Peut-on s\'arrêter pour se baigner dans les criques ?',
      answer:
        'Oui. Toutes les embarcations sont équipées d\'une échelle de bain. Les arrêts sont à votre discrétion — vous pouvez mouiller dans les criques de votre choix tout au long de la route.',
    },
  ],
  en: [
    {
      question: 'What nautical licence is required to rent a boat in Roses?',
      answer:
        'As a general rule, for boats up to 8 metres and an inboard or outboard motor, the Basic Navigation Skipper (PNB) licence or equivalent is sufficient. If you hold a foreign licence, get in touch before booking and we will confirm it is valid.',
    },
    {
      question: 'Where exactly do boats depart from?',
      answer:
        'All our boats depart from the Marina de Santa Margarita, at the entrance to Roses. The address is Av. Clot Franquest Nord, 17480 Roses. There is parking nearby.',
    },
    {
      question: 'How far in advance do I have to book?',
      answer:
        'In high season (July and August) we recommend booking at least 2 weeks ahead. In spring and September, 48 to 72 hours is usually enough. For groups of 5 or more, we always advise booking ahead.',
    },
    {
      question: 'Is fuel included in the rental price?',
      answer:
        'In most cases, yes — a full tank is included for a half-day or full-day rental within the normal range of destinations. If you plan a particularly long route, we will clarify before booking whether fuel has any additional cost.',
    },
    {
      question: 'Can I go to Cap de Creus on a rental boat?',
      answer:
        'Yes. The Bay of Roses and Cap de Creus Natural Park are within the normal navigation area for our licensed boats. Cap de Creus is about 45 to 60 minutes from Santa Margarita depending on the boat.',
    },
    {
      question: 'What happens if the weather is bad?',
      answer:
        'If sea conditions make sailing unsafe or uncomfortable, we will reschedule your trip at no cost. Your safety and experience are our priority. If you are hiring with a licence, we may ask about your experience and level of confidence with the conditions.',
    },
  ],
  ca: [
    {
      question: 'Quina llicència necessito per llogar un vaixell amb llicència a Roses?',
      answer:
        'Es requereix com a mínim la titulació PNB (Patró de Navegació Bàsica) o equivalent reconegut a Espanya. Si teniu una titulació estrangera, consulteu-nos i verifiquem si és vàlida per a les nostres embarcacions.',
    },
    {
      question: 'Puc navegar fins al Cap de Creus amb un vaixell de lloguer?',
      answer:
        'Sí. Les nostres embarcacions amb llicència estan habilitades per navegar per la badia de Roses i el Parc Natural del Cap de Creus. La travessia des de Santa Margarida fins al cap és d\'aproximadament 45-60 minuts segons les condicions.',
    },
    {
      question: 'Es pot llogar un vaixell amb llicència per a un grup gran?',
      answer:
        'Depèn del model. Tenim embarcacions amb capacitat per a diferents mides de grup. Si sou més de 12 persones, consulteu-nos i cerquem la millor opció per al vostre grup.',
    },
    {
      question: 'Què passa si el temps empitjora durant la navegació?',
      answer:
        'En cas de condicions meteorològiques adverses durant la sortida, recomanem tornar a port. Monitoritzem el temps diàriament i si la previsió és dolenta des de l\'inici, cancel·lem la sortida sense cost i cerquem una altra data.',
    },
    {
      question: 'Puc fer parades per banyar-me a les cales?',
      answer:
        'Sí. Totes les embarcacions porten escala de bany. Les parades són decisió vostra — podeu fondejar a les cales que vulgueu durant la ruta.',
    },
  ],
};

// Export for backward compatibility with direct imports
export const faqs = faqData.es;
export const faqsFr = faqData.fr;
