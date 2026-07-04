import type { Locale, RouteId } from '@/lib/i18n/routes';

/**
 * Copy de las guías de destino (Cluster B): Cap de Creus, Cala Montjoi,
 * Cala Murtra. Contenido informacional con gancho comercial hacia el alquiler
 * y las excursiones. ES + FR nativos (EN/CA pendientes → la ruta hace fallback).
 */

export interface GuiaSection {
  h2: string;
  body: string[];
}

export interface GuiaFaq {
  q: string;
  a: string;
}

export interface GuiaCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbLabel: string;
  kicker: string;
  h1: string;
  heroAlt: string;
  introLead: string;
  sections: GuiaSection[];
  faqTitle: string;
  faq: GuiaFaq[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  relatedTitle: string;
}

export type DestinoKey = 'capDeCreusGuide' | 'calaMontjoi' | 'calaMurtra';

/** Imagen hero por guía (archivos existentes en /public/images). */
export const DESTINO_HERO: Record<DestinoKey, string> = {
  capDeCreusGuide: '/images/hero/cap-de-creus-calas-hero.jpg',
  calaMontjoi: '/images/experiencias/cap-de-creus-calas.webp',
  calaMurtra: '/images/hero/hero-guillola.webp',
};

/** Enlaces relacionados (mismos para todas las guías, localizados). */
export const GUIA_RELATED: Record<'es' | 'fr', { label: string; routeId: RouteId }[]> = {
  es: [
    { label: 'Excursión Cap de Creus — 3 calas', routeId: 'expCapCreus' },
    { label: 'Alquiler de barco sin licencia', routeId: 'rentalWithoutLicence' },
    { label: 'Precios y temporadas', routeId: 'prices' },
  ],
  fr: [
    { label: 'Excursion Cap de Creus — criques', routeId: 'expCapCreus' },
    { label: 'Location de bateau sans permis', routeId: 'rentalWithoutLicence' },
    { label: 'Tarifs et saisons', routeId: 'prices' },
  ],
};

export const DESTINOS_COPY: Record<DestinoKey, Partial<Record<Locale, GuiaCopy>>> = {
  // ─────────────────────────────────────────────────────────────────────────
  capDeCreusGuide: {
    es: {
      metaTitle: 'Cap de Creus en barco: ruta desde Roses',
      metaDescription:
        'Navega a Cap de Creus desde Roses: calas vírgenes, el faro y el Parc Natural. Barco sin licencia para las calas cercanas o excursión privada con patrón.',
      breadcrumbHome: 'Inicio',
      breadcrumbLabel: 'Cap de Creus en barco',
      kicker: 'Parc Natural',
      h1: 'Cap de Creus en barco: la punta más oriental de la Costa Brava',
      heroAlt: 'Acantilados y calas del Cap de Creus vistos desde el mar',
      introLead:
        'Cap de Creus es el punto más oriental de la península ibérica, donde la tramuntana esculpe la roca y Dalí encontró su paisaje. Desde Roses, en barco, se llega a calas casi vírgenes, al faro icónico y a aguas transparentes. Aquí te contamos cómo, cuándo y con quién ir.',
      sections: [
        {
          h2: 'Cap de Creus: donde termina la península ibérica',
          body: [
            'Cap de Creus es el extremo más oriental de la Península. El Parc Natural de Cap de Creus —el primero marítimo-terrestre de Cataluña— protege un paisaje único: acantilados retorcidos por la tramuntana, roca pulida por siglos de viento y mar, y calas de aguas claras entre pinares.',
            'Salvador Dalí, que vivía muy cerca en Portlligat (Cadaqués), se inspiraba en estas formas imposibles. Desde nuestra base en la Marina de Santa Margarita (Roses), navegando hacia el cabo, eres tú quien lleva el timón —si no necesitas patrón— o quien disfruta sin preocuparse mientras lo llevamos nosotros.',
          ],
        },
        {
          h2: 'Cómo llegar en barco desde Roses',
          body: [
            'Para explorar las calas cercanas de la bahía puedes alquilar un barco sin licencia (desde 70 €/hora): navegaciones tranquilas, ideales si buscas libertad sin complicaciones. Fondeas en agua clara, te bañas y sigues a tu ritmo.',
            'Si tu plan es llegar hasta el faro y el cabo más abierto, recomendamos un barco con licencia o, mejor, una excursión privada con patrón: tu grupo, vuestro ritmo, nuestro conocimiento del lugar. Las salidas al atardecer (desde 160 €) son un clásico. El trayecto es más largo, pero lo vale.',
          ],
        },
        {
          h2: 'Calas, faro y snorkel: qué ver',
          body: [
            'Cala Culip es de las más resguardadas y visitadas por mar, con fondo rocoso perfecto para el snorkel. Cala Jugadora y s’Encalladora son más salvajes y silenciosas: rocas enormes y pinos hasta la orilla.',
            'El faro de Cap de Creus corona la punta más afilada del cabo. Todo el paraje es zona de snorkel excepcional, con posidonia —el pulmón del Mediterráneo— y fauna variada. Respeta el Parc Natural: cuidado con el fondeo, no toques la roca y no dejes residuos.',
          ],
        },
        {
          h2: 'Tramuntana, mejor época y qué llevar',
          body: [
            'La tramuntana es real: este viento del norte puede cambiar el mar en minutos. No es peligroso si respetas el parte, pero sí condiciona la salida. Antes de reservar lo consultamos contigo y te decimos si es día de cabo o mejor de calas protegidas.',
            'La mejor época va de mayo a octubre; junio y septiembre son óptimos. Lleva crema solar, gafas de snorkel, agua y toalla. El Parc Natural no son playas de resort: es mar vivo, y esa es justo la gracia.',
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Se puede llegar a Cap de Creus en barco desde Roses sin patrón?',
          a: 'A las calas más cercanas de la bahía, sí: alquilas un barco sin licencia y navegas tú. Para el cabo abierto y el faro es más seguro y cómodo con licencia o con patrón. Ofrecemos ambas opciones según tu experiencia.',
        },
        {
          q: '¿Cuánto se tarda desde Roses hasta el faro de Cap de Creus?',
          a: 'Una navegación tranquila ronda los 45–50 minutos. Si paras a bañarte y hacer snorkel por el camino, suma un par de horas. Una salida típica al cabo dura unas 3–4 horas entre ida, exploración y vuelta.',
        },
        {
          q: '¿Necesito licencia para ir en barco a Cap de Creus?',
          a: 'Para las calas cercanas no: los barcos sin licencia bastan. Para el cabo completo recomendamos licencia o patrón nuestro. Si tienes dudas, te lo aclaramos antes de reservar.',
        },
        {
          q: '¿Cuándo no conviene ir por la tramuntana?',
          a: 'Con tramuntana fuerte desaconsejamos el viaje al cabo: es un viento que baja de los Pirineos y puede ser exigente. En esos días proponemos calas protegidas de la bahía o cambiar de fecha.',
        },
      ],
      ctaTitle: 'Reserva tu salida a Cap de Creus',
      ctaText: 'Explora el cabo más oriental, calas casi vírgenes y el faro. Barco sin licencia o con patrón, siempre privado.',
      ctaLabel: 'Consultar disponibilidad y reservar',
      relatedTitle: 'Sigue explorando',
    },
    fr: {
      metaTitle: 'Cap de Creus en bateau depuis Roses',
      metaDescription:
        'Naviguez à Cap de Creus depuis Roses : criques vierges, le phare et le Parc Naturel. Bateau sans permis pour les criques proches ou sortie privée avec skipper.',
      breadcrumbHome: 'Accueil',
      breadcrumbLabel: 'Cap de Creus en bateau',
      kicker: 'Parc Naturel',
      h1: 'Cap de Creus en bateau : la pointe la plus orientale de la Costa Brava',
      heroAlt: 'Falaises et criques du Cap de Creus vues depuis la mer',
      introLead:
        'Cap de Creus est le point le plus oriental de la péninsule ibérique, où la tramontane sculpte la roche et c’est là que Dalí a trouvé son paysage. Depuis Roses, en bateau, on atteint des criques presque vierges, le phare emblématique et des eaux transparentes. Voici comment, quand et avec qui y aller.',
      sections: [
        {
          h2: 'Cap de Creus : là où finit la péninsule ibérique',
          body: [
            'Cap de Creus est l’extrémité la plus orientale de la Péninsule. Le Parc Naturel de Cap de Creus —le premier parc marin et terrestre de Catalogne— protège un paysage unique : des falaises tordues par la tramontane, de la roche polie par des siècles de vent et de mer, et des criques aux eaux claires entre les pins.',
            'Salvador Dalí, qui vivait tout près à Portlligat (Cadaqués), s’inspirait de ces formes impossibles. Depuis notre base à la Marina de Santa Margarita (Roses), en naviguant vers le cap, c’est vous qui tenez la barre —si vous n’avez pas besoin de skipper— ou vous profitez sans souci pendant que nous la menons.',
          ],
        },
        {
          h2: 'Comment y aller en bateau depuis Roses',
          body: [
            'Pour explorer les criques proches de la baie, vous pouvez louer un bateau sans permis (dès 70 €/heure) : des navigations tranquilles, idéales si vous cherchez la liberté sans complications. Vous mouillez dans une eau claire, vous vous baignez et vous continuez à votre rythme.',
            'Si vous envisagez d’atteindre le phare et le cap plus ouvert, nous recommandons un bateau avec permis ou, mieux, une sortie privée avec skipper : votre groupe, votre rythme, notre connaissance des lieux. Les sorties au coucher du soleil (dès 160 €) sont un classique. Le trajet est plus long, mais il en vaut la peine.',
          ],
        },
        {
          h2: 'Criques, phare et snorkeling : que voir',
          body: [
            'Cala Culip est l’une des plus abritées et fréquentées par mer, avec un fond rocheux parfait pour le snorkeling. Cala Jugadora et s’Encalladora sont plus sauvages et silencieuses : d’énormes roches et des pins jusqu’au rivage.',
            'Le phare de Cap de Creus couronne la pointe la plus acérée du cap. Tout le site est une zone de snorkeling exceptionnelle, avec de la posidonie —le poumon de la Méditerranée— et une faune variée. Respectez le Parc Naturel : attention au mouillage, ne touchez pas la roche et ne laissez pas de déchets.',
          ],
        },
        {
          h2: 'Tramontane, meilleure période et quoi apporter',
          body: [
            'La tramontane est bien réelle : ce vent du nord peut changer la mer en quelques minutes. Ce n’est pas dangereux si l’on respecte le bulletin, mais cela conditionne la sortie. Avant de réserver, on le vérifie avec vous et on vous dit si c’est un jour pour le cap ou plutôt pour les criques abritées.',
            'La meilleure période va de mai à octobre ; juin et septembre sont optimaux. Apportez votre crème solaire, un masque de snorkeling, de l’eau et une serviette. Le Parc Naturel n’est pas une plage de station balnéaire : c’est la mer vivante, et c’est justement tout son charme.',
          ],
        },
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Peut-on rejoindre Cap de Creus en bateau depuis Roses sans skipper ?',
          a: 'Vers les criques les plus proches de la baie, oui : vous louez un bateau sans permis et vous naviguez vous-même. Pour le cap ouvert et le phare, c’est plus sûr et confortable avec permis ou avec skipper. Nous proposons les deux selon votre expérience.',
        },
        {
          q: 'Combien de temps depuis Roses jusqu’au phare de Cap de Creus ?',
          a: 'Une navigation tranquille prend environ 45 à 50 minutes. Si vous vous arrêtez pour vous baigner et faire du snorkeling en chemin, ajoutez deux heures. Une sortie typique au cap dure environ 3 à 4 heures, aller, exploration et retour compris.',
        },
        {
          q: 'Ai-je besoin d’un permis pour aller à Cap de Creus en bateau ?',
          a: 'Pour les criques proches, non : les bateaux sans permis suffisent. Pour le cap complet, nous recommandons le permis ou notre skipper. En cas de doute, on vous l’explique avant la réservation.',
        },
        {
          q: 'Quand vaut-il mieux éviter à cause de la tramontane ?',
          a: 'Par forte tramontane, nous déconseillons le trajet vers le cap : c’est un vent qui descend des Pyrénées et peut être exigeant. Ces jours-là, nous proposons les criques abritées de la baie ou un changement de date.',
        },
      ],
      ctaTitle: 'Réservez votre sortie à Cap de Creus',
      ctaText: 'Explorez le cap le plus oriental, des criques presque vierges et le phare. Bateau sans permis ou avec skipper, toujours privé.',
      ctaLabel: 'Vérifier les disponibilités et réserver',
      relatedTitle: 'Continuez à explorer',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  calaMontjoi: {
    es: {
      metaTitle: 'Cala Montjoi: cómo llegar en barco y snorkel',
      metaDescription:
        'Guía de Cala Montjoi (Roses): aguas transparentes, snorkel y el legado de elBulli. Cómo llegar en barco sin licencia desde Santa Margarita. Reserva tu salida.',
      breadcrumbHome: 'Inicio',
      breadcrumbLabel: 'Cala Montjoi',
      kicker: 'Bahía de Roses',
      h1: 'Cala Montjoi: la cala de aguas cristalinas frente a elBulli',
      heroAlt: 'Aguas transparentes de Cala Montjoi, en la bahía de Roses',
      introLead:
        'Cala Montjoi es una de las calas más bonitas de la bahía de Roses, dentro del entorno del Parc Natural de Cap de Creus. Famosa por haber acogido el restaurante elBulli, sus aguas transparentes y sus fondos rocosos la convierten en un sitio ideal para el snorkel. Y la mejor forma de disfrutarla sin colas de aparcamiento es llegar en barco.',
      sections: [
        {
          h2: 'Dónde está Cala Montjoi y por qué es especial',
          body: [
            'Cala Montjoi está en la bahía de Roses, a unos 7 km del centro y dentro de los límites del Parc Natural de Cap de Creus. No es una playa masificada: es pequeña, con acceso por carretera limitado y poco aparcamiento, lo que la mantiene relativamente tranquila.',
            'Sus aguas son de un azul transparente sobre fondos rocosos que descienden suavemente, un refugio natural para la vida marina. Llegar forma parte de su encanto: cada visita se siente como un pequeño descubrimiento.',
          ],
        },
        {
          h2: 'elBulli: la leyenda que puso Cala Montjoi en el mapa',
          body: [
            'El restaurante elBulli de Ferran Adrià fue durante años uno de los mejores del mundo, y su ubicación en Cala Montjoi no era casual: la soledad de la cala y el entorno formaban parte de su identidad.',
            'Hoy elBulli1846 funciona como espacio-museo y centro de investigación gastronómica. Aunque ya no sirve comidas, la historia sigue atrayendo a visitantes de todo el mundo a este rincón de la Costa Brava.',
          ],
        },
        {
          h2: 'Llegar en barco desde Roses, sin licencia',
          body: [
            'La carretera hasta Cala Montjoi existe, pero el aparcamiento es escaso y en verano se llena. Nosotros salimos desde la Marina de Santa Margarita, en los canales de Roses, con barcos sin licencia que puedes pilotar tú mismo o dejar que te llevemos.',
            'En unos 20 minutos navegas hasta la cala con vistas de toda la costa. El alquiler sin licencia arranca en 70 €/hora, y si prefieres algo más cómodo organizamos excursiones privadas donde te contamos la cala, sus aguas y el entorno.',
          ],
        },
        {
          h2: 'Snorkel y consejos prácticos',
          body: [
            'El snorkel aquí es excelente: fondos rocosos con posidonia, peces de roca y algún pulpo curioso, con muy buena visibilidad. La mejor época va de mayo a septiembre; en primavera u otoño, un neopreno fino se agradece.',
            'Fondea con cuidado de no hacerlo sobre la posidonia protegida y respeta la normativa del Parc Natural: no recojas rocas ni conchas, mantén distancia con la fauna y, si ves basura, recógela.',
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Dónde está exactamente Cala Montjoi?',
          a: 'En la bahía de Roses, a unos 7 km del centro, dentro del Parc Natural de Cap de Creus. Se puede llegar por carretera, con aparcamiento limitado, o —mucho mejor— por mar.',
        },
        {
          q: '¿Se puede llegar en barco sin licencia de navegación?',
          a: 'Sí. Alquilamos barcos sin licencia desde la Marina de Santa Margarita: puedes pilotar tú o ir como pasajero. La travesía dura unos 20 minutos y el barco es fácil de manejar.',
        },
        {
          q: '¿Es Cala Montjoi buena para hacer snorkel?',
          a: 'Es de los mejores sitios de la zona: fondos rocosos, agua transparente y fauna variada. Lo ideal es ir de mayo a septiembre. Lleva tu equipo o pregúntanos por las opciones.',
        },
        {
          q: '¿Qué tiene que ver Cala Montjoi con elBulli?',
          a: 'elBulli, el restaurante de Ferran Adrià, estuvo en Cala Montjoi. Hoy funciona elBulli1846 como espacio-museo. Aunque ya no sirve comidas, su historia sigue atrayendo visitantes.',
        },
      ],
      ctaTitle: 'Explora Cala Montjoi en barco',
      ctaText: 'Desde la Marina de Santa Margarita, a unos 20 minutos. Alquila un barco sin licencia o únete a una excursión privada.',
      ctaLabel: 'Consultar disponibilidad y reservar',
      relatedTitle: 'Sigue explorando',
    },
    fr: {
      metaTitle: 'Cala Montjoi : accès en bateau et snorkeling',
      metaDescription:
        'Guide de Cala Montjoi (Roses) : eaux transparentes, snorkeling et l’héritage d’elBulli. Comment y aller en bateau sans permis depuis Sainte-Marguerite.',
      breadcrumbHome: 'Accueil',
      breadcrumbLabel: 'Cala Montjoi',
      kicker: 'Baie de Roses',
      h1: 'Cala Montjoi : la crique aux eaux cristallines face à elBulli',
      heroAlt: 'Eaux transparentes de Cala Montjoi, dans la baie de Roses',
      introLead:
        'Cala Montjoi est l’une des plus belles criques de la baie de Roses, au cœur du Parc Naturel de Cap de Creus. Célèbre pour avoir accueilli le restaurant elBulli, elle est idéale pour le snorkeling grâce à ses eaux transparentes et ses fonds rocheux. Et la meilleure façon d’en profiter sans file d’attente au parking, c’est d’y arriver en bateau.',
      sections: [
        {
          h2: 'Où se trouve Cala Montjoi et pourquoi elle est spéciale',
          body: [
            'Cala Montjoi se situe dans la baie de Roses, à environ 7 km du centre et dans les limites du Parc Naturel de Cap de Creus. Ce n’est pas une plage surpeuplée : elle est petite, avec un accès routier limité et peu de stationnement, ce qui la garde relativement tranquille.',
            'Ses eaux sont d’un bleu transparent sur des fonds rocheux qui descendent doucement, un refuge naturel pour la vie marine. Y arriver fait partie de son charme : chaque visite ressemble à une petite découverte.',
          ],
        },
        {
          h2: 'elBulli : la légende qui a mis Cala Montjoi sur la carte',
          body: [
            'Le restaurant elBulli de Ferran Adrià a été pendant des années l’un des meilleurs du monde, et son emplacement à Cala Montjoi n’était pas un hasard : l’isolement de la crique et l’environnement faisaient partie de son identité.',
            'Aujourd’hui, elBulli1846 fonctionne comme espace-musée et centre de recherche gastronomique. Même s’il ne sert plus de repas, son héritage attire toujours des visiteurs du monde entier dans ce coin de la Costa Brava.',
          ],
        },
        {
          h2: 'Y aller en bateau depuis Roses, sans permis',
          body: [
            'La route vers Cala Montjoi existe, mais le stationnement est rare et se remplit en été. Nous partons de la Marina de Santa Margarita, dans les canaux de Roses, avec des bateaux sans permis que vous pouvez piloter vous-même ou nous laisser mener.',
            'En une vingtaine de minutes, vous naviguez jusqu’à la crique avec vue sur toute la côte. La location sans permis démarre à 70 €/heure, et si vous préférez plus de confort, nous organisons des excursions privées où l’on vous raconte la crique, ses eaux et son environnement.',
          ],
        },
        {
          h2: 'Snorkeling et conseils pratiques',
          body: [
            'Le snorkeling y est excellent : fonds rocheux avec posidonie, poissons de roche et parfois une pieuvre curieuse, avec une très bonne visibilité. La meilleure période va de mai à septembre ; au printemps ou en automne, une combinaison fine est appréciable.',
            'Mouillez en évitant la posidonie protégée et respectez la réglementation du Parc Naturel : ne ramassez ni roches ni coquillages, gardez vos distances avec la faune et, si vous voyez des déchets, ramassez-les.',
          ],
        },
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Où se trouve exactement Cala Montjoi ?',
          a: 'Dans la baie de Roses, à environ 7 km du centre, au sein du Parc Naturel de Cap de Creus. On peut y accéder par la route, avec un parking limité, ou —bien mieux— par la mer.',
        },
        {
          q: 'Peut-on y aller en bateau sans permis de navigation ?',
          a: 'Oui. Nous louons des bateaux sans permis depuis la Marina de Santa Margarita : vous pilotez vous-même ou voyagez comme passager. La traversée dure une vingtaine de minutes et le bateau est facile à manœuvrer.',
        },
        {
          q: 'Cala Montjoi est-elle bonne pour le snorkeling ?',
          a: 'C’est l’un des meilleurs spots du secteur : fonds rocheux, eau transparente et faune variée. L’idéal est d’y aller de mai à septembre. Apportez votre équipement ou demandez-nous les options.',
        },
        {
          q: 'Quel est le lien entre Cala Montjoi et elBulli ?',
          a: 'elBulli, le restaurant de Ferran Adrià, se trouvait à Cala Montjoi. Aujourd’hui, elBulli1846 fonctionne comme espace-musée. Même s’il ne sert plus de repas, son histoire attire toujours des visiteurs.',
        },
      ],
      ctaTitle: 'Explorez Cala Montjoi en bateau',
      ctaText: 'Depuis la Marina de Santa Margarita, à une vingtaine de minutes. Louez un bateau sans permis ou rejoignez une excursion privée.',
      ctaLabel: 'Vérifier les disponibilités et réserver',
      relatedTitle: 'Continuez à explorer',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  calaMurtra: {
    es: {
      metaTitle: 'Cala Murtra (Roses): llegar en barco y snorkel',
      metaDescription:
        'Guía de Cala Murtra (Roses): una cala tranquila de aguas limpias, mejor accesible en barco. Snorkel, fondeo y consejos. Reserva tu salida desde Santa Margarita.',
      breadcrumbHome: 'Inicio',
      breadcrumbLabel: 'Cala Murtra',
      kicker: 'Cala tranquila',
      h1: 'Cala Murtra en Roses: la cala tranquila que se disfruta mejor en barco',
      heroAlt: 'Aguas limpias y resguardadas de Cala Murtra, cerca de Roses',
      introLead:
        'Cala Murtra es una de esas calas que casi nadie pisa. Escondida en la costa de Roses, con aguas limpias y sin apenas aglomeraciones, es perfecta si buscas tranquilidad y calidad de agua. El motivo de su calma: el acceso por tierra es incómodo. Por eso desde Experience Boat la consideramos parada obligada en nuestras salidas.',
      sections: [
        {
          h2: 'Qué es Cala Murtra y por qué es especial',
          body: [
            'Cala Murtra es una pequeña cala natural en la costa de Roses, en la zona de Punta Falconera, cerca de la Almadrava. No es grande, pero ahí está su encanto: mientras otras playas se llenan de sombrillas, aquí hay espacio, silencio y un agua transparente que invita a tirarse.',
            'Es una cala poco urbanizada, en estado natural, porque el camino a pie es complicado y eso la mantiene lejos del turismo masivo. El ambiente es relajado y tranquilo, de gente que viene a conectar con el mar más que a buscar servicios.',
          ],
        },
        {
          h2: 'Por qué llegar en barco es la mejor opción',
          body: [
            'Si intentas llegar a pie, entiendes rápido por qué está tan tranquila: no hay aparcamiento cómodo, ni chiringuito, y el camino es largo e irregular. Bien para la naturaleza, no tanto para tu comodidad.',
            'Por eso el barco es el acceso natural. Salimos de Santa Margarita y en unos 10 minutos fondeamos en agua clara y poco profunda, ideal para anclar y disfrutar. Un alquiler sin licencia desde 70 €/hora te deja aquí en minutos, o puedes venir en una excursión privada si prefieres que llevemos nosotros el barco.',
          ],
        },
        {
          h2: 'Baño y snorkel en aguas limpias',
          body: [
            'Una vez fondeado, el agua habla por sí sola: transparencia, temperatura agradable y fondos de roca con vida marina. Cala Murtra es un snorkel silencioso, de peces pequeños, plantas acuáticas y esa sensación de acuario sin cristal.',
            'No esperes arrecifes de coral: es naturaleza mediterránea pura y discreta, que es justo lo que se busca aquí. Con máscara, tubo y unas aletas te sumerges en un rincón que casi nadie visita.',
          ],
        },
        {
          h2: 'Consejos prácticos para tu salida',
          body: [
            'Tramuntana: en Roses el viento del norte manda. Cala Murtra queda relativamente protegida, pero conviene mirar el parte; con viento fuerte, mejor dejarla para otro día. Para el fondeo, arena y roca dan buen agarre: fondea a pocos metros y da bien la cadena.',
            'No hay servicios, así que ven autosuficiente: agua, sombra, protección solar y toalla. Y respeta el entorno —es una cala virgen porque se cuida—: no dejes residuos y, si ves basura, recógela.',
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Dónde está exactamente Cala Murtra?',
          a: 'En la costa de Roses, en la zona de Punta Falconera, cerca de la Almadrava, dentro del litoral de la bahía. Se llega fácil en barco desde la Marina de Santa Margarita, a unos 10 minutos de navegación.',
        },
        {
          q: '¿Cómo se llega a Cala Murtra, a pie o en barco?',
          a: 'El acceso a pie es complicado, sin sendero claro ni servicios. La mayoría llega en barco: alquiler sin licencia desde 70 €/hora o excursión privada. Es lo más cómodo y lo que más partido saca al tiempo en el agua.',
        },
        {
          q: '¿Es una cala tranquila? ¿Y naturista?',
          a: 'Sí, es tranquila y de ambiente naturista relajado, precisamente porque el acceso difícil mantiene fuera a las masas. Encontrarás gente que busca paz y desconexión.',
        },
        {
          q: '¿Se puede hacer snorkel en Cala Murtra?',
          a: 'Sí, es un buen sitio: aguas claras, fondos rocosos y fauna mediterránea discreta. Lleva máscara, tubo y aletas. Es snorkel de naturaleza, no de arrecife, pero el agua limpia lo hace valer la pena.',
        },
      ],
      ctaTitle: 'Navega a Cala Murtra',
      ctaText: 'Descubre la calma de Cala Murtra en una salida privada o con un barco sin licencia desde Santa Margarita.',
      ctaLabel: 'Consultar disponibilidad y reservar',
      relatedTitle: 'Sigue explorando',
    },
    fr: {
      metaTitle: 'Cala Murtra (Roses) : accès en bateau',
      metaDescription:
        'Guide de Cala Murtra (Roses) : une crique tranquille aux eaux claires, plus accessible en bateau. Snorkeling, mouillage et conseils. Réservez votre sortie.',
      breadcrumbHome: 'Accueil',
      breadcrumbLabel: 'Cala Murtra',
      kicker: 'Crique tranquille',
      h1: 'Cala Murtra à Roses : la crique tranquille qui se savoure en bateau',
      heroAlt: 'Eaux claires et abritées de Cala Murtra, près de Roses',
      introLead:
        'Cala Murtra est l’une de ces criques que presque personne ne foule. Cachée sur la côte de Roses, aux eaux claires et sans affluence, elle est parfaite si vous cherchez le calme et la qualité de l’eau. La raison de sa tranquillité : l’accès par la terre est peu commode. Chez Experience Boat, nous en faisons un arrêt incontournable de nos sorties.',
      sections: [
        {
          h2: 'Qu’est-ce que Cala Murtra et pourquoi elle est spéciale',
          body: [
            'Cala Murtra est une petite crique naturelle sur la côte de Roses, dans la zone de Punta Falconera, près de l’Almadrava. Elle n’est pas grande, mais c’est là son charme : tandis que d’autres plages se couvrent de parasols, ici règnent l’espace, le silence et une eau transparente qui donne envie de plonger.',
            'C’est une crique peu urbanisée, restée naturelle, parce que le chemin à pied est compliqué et cela la tient à l’écart du tourisme de masse. L’ambiance y est détendue, elle attire ceux qui viennent se reconnecter à la mer plus que chercher des services.',
          ],
        },
        {
          h2: 'Pourquoi arriver en bateau est la meilleure option',
          body: [
            'Si vous tentez d’y aller à pied, vous comprenez vite pourquoi elle reste si calme : pas de parking commode, pas de bar de plage, et un sentier long et irrégulier. Bien pour la nature, moins pour votre confort.',
            'Le bateau est donc l’accès naturel. Nous partons de Santa Margarita et, en une dizaine de minutes, nous mouillons dans une eau claire et peu profonde, idéale pour jeter l’ancre et profiter. Une location sans permis dès 70 €/heure vous y dépose en minutes, ou vous pouvez venir en excursion privée si vous préférez que nous menions le bateau.',
          ],
        },
        {
          h2: 'Baignade et snorkeling dans des eaux claires',
          body: [
            'Une fois au mouillage, l’eau parle d’elle-même : transparence, température agréable et fonds rocheux pleins de vie. Cala Murtra offre un snorkeling silencieux : petits poissons, plantes aquatiques et cette sensation d’aquarium sans vitre.',
            'N’attendez pas de récifs coralliens : c’est la nature méditerranéenne pure et discrète, ce que l’on vient justement chercher ici. Avec masque, tuba et palmes, vous plongez dans un coin que presque personne ne visite.',
          ],
        },
        {
          h2: 'Conseils pratiques pour votre sortie',
          body: [
            'Tramontane : à Roses, le vent du nord commande. Cala Murtra est relativement abritée, mais mieux vaut consulter le bulletin ; par vent fort, gardez-la pour un autre jour. Pour le mouillage, sable et roche tiennent bien : mouillez à quelques mètres et donnez bien la chaîne.',
            'Il n’y a pas de services, alors venez en autonomie : eau, ombre, crème solaire et serviette. Et respectez les lieux —c’est une crique vierge parce qu’on en prend soin— : ne laissez pas de déchets et, si vous en voyez, ramassez-les.',
          ],
        },
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Où se trouve exactement Cala Murtra ?',
          a: 'Sur la côte de Roses, dans la zone de Punta Falconera, près de l’Almadrava, au sein du littoral de la baie. On y accède facilement en bateau depuis la Marina de Santa Margarita, à une dizaine de minutes de navigation.',
        },
        {
          q: 'Comment rejoindre Cala Murtra, à pied ou en bateau ?',
          a: 'L’accès à pied est compliqué, sans sentier clair ni services. La plupart y arrivent en bateau : location sans permis dès 70 €/heure ou excursion privée. C’est le plus pratique et ce qui profite le mieux du temps dans l’eau.',
        },
        {
          q: 'Est-ce une crique tranquille ? Et naturiste ?',
          a: 'Oui, elle est tranquille et d’ambiance naturiste détendue, justement parce que l’accès difficile tient les foules à l’écart. Vous y trouverez des gens en quête de paix et de déconnexion.',
        },
        {
          q: 'Peut-on faire du snorkeling à Cala Murtra ?',
          a: 'Oui, c’est un bon spot : eaux claires, fonds rocheux et faune méditerranéenne discrète. Apportez masque, tuba et palmes. C’est du snorkeling de nature, pas de récif, mais l’eau claire en vaut la peine.',
        },
      ],
      ctaTitle: 'Naviguez vers Cala Murtra',
      ctaText: 'Découvrez le calme de Cala Murtra en sortie privée ou avec un bateau sans permis depuis Santa Margarita.',
      ctaLabel: 'Vérifier les disponibilités et réserver',
      relatedTitle: 'Continuez à explorer',
    },
  },
};
