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

export type DestinoKey =
  | 'capDeCreusGuide'
  | 'calaMontjoi'
  | 'calaMurtra'
  | 'queVerRoses'
  | 'cadaquesBarco';

/** Imagen hero por guía (archivos existentes en /public/images). */
export const DESTINO_HERO: Record<DestinoKey, string> = {
  capDeCreusGuide: '/images/hero/cap-de-creus-calas-hero.jpg',
  calaMontjoi: '/images/experiencias/cap-de-creus-calas.webp',
  calaMurtra: '/images/hero/hero-guillola.webp',
  queVerRoses: '/images/hero/hero-2.jpg',
  cadaquesBarco: '/images/hero/cap-de-creus-calas-2026.jpg',
};

/** Enlaces relacionados (mismos para todas las guías, localizados). */
export const GUIA_RELATED: Record<Locale, { label: string; routeId: RouteId }[]> = {
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
  en: [
    { label: 'Cap de Creus 3-coves excursion', routeId: 'expCapCreus' },
    { label: 'Boat rental without licence', routeId: 'rentalWithoutLicence' },
    { label: 'Prices & seasons', routeId: 'prices' },
  ],
  ca: [
    { label: 'Excursió Cap de Creus — 3 cales', routeId: 'expCapCreus' },
    { label: 'Lloguer de vaixell sense llicència', routeId: 'rentalWithoutLicence' },
    { label: 'Preus i temporades', routeId: 'prices' },
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
        'Naviguez au Cap de Creus depuis Roses : criques vierges, le phare et le Parc Naturel. Bateau sans permis pour les criques proches ou sortie privée avec skipper.',
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
    en: {
      metaTitle: 'Cap de Creus by boat: sailing from Roses',
      metaDescription:
        'Sail to Cap de Creus from Roses: pristine coves, the lighthouse and the Natural Park. Licence-free boat for nearby coves or a private excursion with skipper.',
      breadcrumbHome: 'Home',
      breadcrumbLabel: 'Cap de Creus by boat',
      kicker: 'Natural Park',
      h1: 'Cap de Creus by boat: the easternmost point of the Costa Brava',
      heroAlt: 'Cliffs and coves of Cap de Creus seen from the sea',
      introLead:
        'Cap de Creus is the easternmost point of the Iberian Peninsula, where the tramuntana shapes the rock and Dalí found his landscape. From Roses, by boat, you reach almost untouched coves, the iconic lighthouse and crystal-clear waters. Here’s how, when and with whom to go.',
      sections: [
        {
          h2: 'Cap de Creus: where the Iberian Peninsula ends',
          body: [
            'Cap de Creus is the easternmost edge of the Peninsula. The Cap de Creus Natural Park — Catalonia’s first maritime-land park — protects a unique landscape: cliffs sculpted by the tramuntana, rock polished by centuries of wind and sea, and clear-water coves between pine woods.',
            'Salvador Dalí, who lived close by in Portlligat (Cadaqués), drew inspiration from these impossible forms. From our base at Marina de Santa Margarita (Roses), as you sail toward the cape, you’re at the helm — if you don’t need a skipper — or you sit back and let us take the wheel.',
          ],
        },
        {
          h2: 'How to sail from Roses by boat',
          body: [
            'To explore the nearby coves in the bay, you can rent a licence-free boat (from €70/hour): calm cruises, perfect if you want freedom without complications. Drop anchor in clear water, take a swim and move at your own pace.',
            'If your plan is to reach the lighthouse and the more exposed cape, we recommend a licensed boat or — better still — a private excursion with skipper: your group, your rhythm, our knowledge of the place. Sunset departures (from €160) are a classic. It’s a longer journey, but worth every moment.',
          ],
        },
        {
          h2: 'Coves, lighthouse and snorkelling: what to see',
          body: [
            'Cala Culip is one of the most sheltered and popular by sea, with a rocky seabed perfect for snorkelling. Cala Jugadora and s’Encalladora are wilder and quieter: massive rocks and pines down to the shore.',
            'The Cap de Creus lighthouse crowns the sharpest tip of the cape. The whole site is an exceptional snorkelling area, with posidonia — the lung of the Mediterranean — and varied marine life. Respect the Natural Park: take care when anchoring, don’t touch the rocks and leave no trace.',
          ],
        },
        {
          h2: 'Tramuntana, best season and what to bring',
          body: [
            'The tramuntana is real: this north wind can change the sea in minutes. It’s not dangerous if you respect the forecast, but it does decide whether we head to the cape or stick to the sheltered coves.',
            'The best season runs May to October; June and September are ideal. Bring sunscreen, snorkel gear, water and a towel. The Natural Park is not a resort beach: it’s living sea, and that’s exactly what makes it special.',
          ],
        },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Can you reach Cap de Creus by boat from Roses without a skipper?',
          a: 'To the nearby coves in the bay, yes: rent a licence-free boat and you navigate. For the open cape and lighthouse it’s safer and more comfortable with a licence or a skipper. We offer both options depending on your experience.',
        },
        {
          q: 'How long does it take from Roses to the Cap de Creus lighthouse?',
          a: 'A calm sail is around 45–50 minutes. If you stop to swim and snorkel along the way, add a couple of hours. A typical trip to the cape takes about 3–4 hours all told: travel, exploration and return.',
        },
        {
          q: 'Do I need a licence to take a boat to Cap de Creus?',
          a: 'For the nearby coves, no: licence-free boats are enough. For the full cape we recommend a licence or our skipper. If you’re unsure, we’ll sort it out before you book.',
        },
        {
          q: 'When is it not advisable to go because of the tramuntana?',
          a: 'With strong tramuntana we advise against heading to the cape: it’s a wind that comes down from the Pyrenees and can be demanding. On those days we suggest sheltered coves in the bay or a different date.',
        },
      ],
      ctaTitle: 'Book your Cap de Creus outing',
      ctaText: 'Explore the easternmost cape, almost-untouched coves and the lighthouse. Licence-free boat or with skipper, always private.',
      ctaLabel: 'Check availability and book',
      relatedTitle: 'Keep exploring',
    },
    ca: {
      metaTitle: 'Cap de Creus en barca: ruta des de Roses',
      metaDescription:
        'Navega cap a Cap de Creus des de Roses: cales verges, el far i el Parc Natural. Barca sense llicència per a les cales properes o excursió privada amb patró.',
      breadcrumbHome: 'Inici',
      breadcrumbLabel: 'Cap de Creus en barca',
      kicker: 'Parc Natural',
      h1: 'Cap de Creus en barca: la punta més oriental de la Costa Brava',
      heroAlt: 'Penya-segats i cales del Cap de Creus vistos des del mar',
      introLead:
        'Cap de Creus és el punt més oriental de la península ibèrica, on la tramuntana esculpeix la roca i on Dalí va trobar el seu paisatge. Des de Roses, en barca, s’arriba a cales gairebé verges, al far icònic i a aigües transparents. Aquí us expliquem com, quan i amb qui anar-hi.',
      sections: [
        {
          h2: 'Cap de Creus: on acaba la península ibèrica',
          body: [
            'Cap de Creus és l’extrem més oriental de la Península. El Parc Natural de Cap de Creus —el primer marítim-terrestre de Catalunya— protegeix un paisatge únic: penya-segats retorçats per la tramuntana, roca polida per segles de vent i mar, i cales d’aigües clares entre pinedes.',
            'Salvador Dalí, que vivia molt a prop, a Portlligat (Cadaqués), s’inspirava en aquestes formes impossibles. Des de la nostra base a la Marina de Santa Margarida (Roses), navegant cap al cap, sou vosaltres qui porteu el timó —si no necessiteu patró— o qui gaudeix sense preocupacions mentre el portem nosaltres.',
          ],
        },
        {
          h2: 'Com arribar en barca des de Roses',
          body: [
            'Per explorar les cales properes de la badia podeu llogar una barca sense llicència (des de 70 €/hora): navegacions tranquil·les, ideals si busqueu llibertat sense complicacions. Fondegeu en aigua clara, us banyeu i seguiu al vostre ritme.',
            'Si el vostre pla és arribar fins al far i el cap més obert, recomanem una barca amb llicència o, millor, una excursió privada amb patró: el vostre grup, el vostre ritme, el nostre coneixement del lloc. Les sortides al capvespre (des de 160 €) són un clàssic. El trajecte és més llarg, però val la pena.',
          ],
        },
        {
          h2: 'Cales, far i esnòrquel: què veure',
          body: [
            'Cala Culip és de les més arrecerades i visitades per mar, amb un fons rocós perfecte per a l’esnòrquel. Cala Jugadora i s’Encalladora són més salvatges i silencioses: roques enormes i pins fins a la vora.',
            'El far de Cap de Creus corona la punta més afilada del cap. Tot el paratge és zona d’esnòrquel excepcional, amb posidònia —el pulmó de la Mediterrània— i fauna variada. Respecteu el Parc Natural: compte amb el fondeig, no toqueu la roca i no deixeu residus.',
          ],
        },
        {
          h2: 'Tramuntana, millor època i què dur',
          body: [
            'La tramuntana és real: aquest vent del nord pot canviar el mar en minuts. No és perillosa si respecteu la previsió, però sí que condiciona la sortida. Abans de reservar ho consultem amb vosaltres i us indiquem si és dia de cap o millor de cales protegides.',
            'La millor època va de maig a octubre; juny i setembre són òptims. Dueu crema solar, ulleres d’esnòrquel, aigua i tovallola. El Parc Natural no són platges de resort: és mar viu, i aquesta és justament la gràcia.',
          ],
        },
      ],
      faqTitle: 'Preguntes freqüents',
      faq: [
        {
          q: 'Es pot arribar a Cap de Creus en barca des de Roses sense patró?',
          a: 'A les cales més properes de la badia, sí: llogueu una barca sense llicència i navegueu vosaltres. Per al cap obert i el far és més segur i còmode amb llicència o amb patró. Oferim les dues opcions segons la vostra experiència.',
        },
        {
          q: 'Quant es triga des de Roses fins al far de Cap de Creus?',
          a: 'Una navegació tranquil·la ronda els 45–50 minuts. Si pareu a banyar-vos i fer esnòrquel pel camí, sumeu un parell d’hores. Una sortida típica al cap dura unes 3–4 hores entre anada, exploració i tornada.',
        },
        {
          q: 'Necessito llicència per anar en barca a Cap de Creus?',
          a: 'Per a les cales properes, no: n\'hi ha prou amb una barca sense llicència. Per al cap complet recomanem llicència o el nostre patró. Si teniu dubtes, us ho aclarim abans de reservar.',
        },
        {
          q: 'Quan no convé anar-hi per la tramuntana?',
          a: 'Amb tramuntana forta desaconsellem el viatge al cap: és un vent que baixa dels Pirineus i pot ser exigent. Aquells dies proposem cales protegides de la badia o canviar de data.',
        },
      ],
      ctaTitle: 'Reserveu la vostra sortida a Cap de Creus',
      ctaText: 'Explora el cap més oriental, cales gairebé verges i el far. Barca sense llicència o amb patró, sempre privat.',
      ctaLabel: 'Consultar disponibilitat i reservar',
      relatedTitle: 'Continueu explorant',
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
    en: {
      metaTitle: 'Cala Montjoi: how to reach it by boat & snorkel',
      metaDescription:
        'Guide to Cala Montjoi (Roses): crystal-clear waters, snorkelling and the elBulli legacy. How to get there by licence-free boat from Santa Margarita. Book your outing.',
      breadcrumbHome: 'Home',
      breadcrumbLabel: 'Cala Montjoi',
      kicker: 'Bay of Roses',
      h1: 'Cala Montjoi: the crystal-clear cove facing elBulli',
      heroAlt: 'Transparent waters of Cala Montjoi in the Bay of Roses',
      introLead:
        'Cala Montjoi is one of the most beautiful coves in the Bay of Roses, within the Cap de Creus Natural Park. Famous for once hosting the elBulli restaurant, it’s ideal for snorkelling thanks to its transparent waters and rocky seabeds. And the best way to enjoy it without parking queues is to arrive by boat.',
      sections: [
        {
          h2: 'Where Cala Montjoi is and why it’s special',
          body: [
            'Cala Montjoi sits in the Bay of Roses, around 7 km from the centre, within the Cap de Creus Natural Park. It’s not a crowded beach: it’s small, with limited road access and scarce parking, which keeps it relatively peaceful.',
            'Its waters are a transparent blue over rocky seabeds that slope gently, a natural refuge for marine life. Getting there is part of its charm: each visit feels like a small discovery.',
          ],
        },
        {
          h2: 'elBulli: the legend that put Cala Montjoi on the map',
          body: [
            'Ferran Adrià’s elBulli was one of the world’s best restaurants for years, and its location at Cala Montjoi was no accident: the cove’s isolation and surroundings were central to its identity.',
            'Today elBulli1846 operates as a museum-space and gastronomic research centre. Though it no longer serves meals, its legacy still draws visitors from around the world to this corner of the Costa Brava.',
          ],
        },
        {
          h2: 'Getting there by boat from Roses, no licence needed',
          body: [
            'The road to Cala Montjoi exists, but parking is sparse and fills up in summer. We depart from Marina de Santa Margarita, in Roses’ channels, with licence-free boats you can pilot yourself or let us take the helm.',
            'In about 20 minutes you’re sailing to the cove with views of the whole coast. Licence-free rental starts at €70/hour, and if you prefer something more relaxed we run private excursions where we tell you about the cove, its waters and setting.',
          ],
        },
        {
          h2: 'Snorkelling and practical tips',
          body: [
            'Snorkelling here is excellent: rocky seabeds with posidonia, rock fish and the occasional curious octopus, with very good visibility. The best period runs May to September; in spring or autumn a thin wetsuit is welcome.',
            'Anchor carefully to avoid the protected posidonia and respect the Natural Park rules: don’t collect rocks or shells, keep your distance from wildlife and, if you see litter, pick it up.',
          ],
        },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Where exactly is Cala Montjoi?',
          a: 'In the Bay of Roses, around 7 km from the centre, within the Cap de Creus Natural Park. You can reach it by road with limited parking, or — much better — by sea.',
        },
        {
          q: 'Can you get there by boat without a navigation licence?',
          a: 'Yes. We rent licence-free boats from Marina de Santa Margarita: you can pilot or sail as a passenger. The crossing takes about 20 minutes and the boat is easy to handle.',
        },
        {
          q: 'Is Cala Montjoi good for snorkelling?',
          a: 'It’s one of the best spots in the area: rocky seabeds, transparent water and varied wildlife. The ideal time is May to September. Bring your own gear or ask us about options.',
        },
        {
          q: 'What’s the connection between Cala Montjoi and elBulli?',
          a: 'elBulli, Ferran Adrià’s restaurant, was at Cala Montjoi. Today elBulli1846 works as a museum-space. Though it no longer serves meals, its story still draws visitors.',
        },
      ],
      ctaTitle: 'Explore Cala Montjoi by boat',
      ctaText: 'From Marina de Santa Margarita, about 20 minutes away. Rent a licence-free boat or join a private excursion.',
      ctaLabel: 'Check availability and book',
      relatedTitle: 'Keep exploring',
    },
    ca: {
      metaTitle: 'Cala Montjoi: com arribar-hi en barca i snorkel',
      metaDescription:
        'Guia de Cala Montjoi (Roses): aigües transparents, snorkel i l’herència d’elBulli. Com arribar-hi en barca sense llicència des de Santa Margarida. Reserva la teva sortida.',
      breadcrumbHome: 'Inici',
      breadcrumbLabel: 'Cala Montjoi',
      kicker: 'Badia de Roses',
      h1: 'Cala Montjoi: la cala d’aigües cristal·lines davant d’elBulli',
      heroAlt: 'Aigües transparents de Cala Montjoi, a la badia de Roses',
      introLead:
        'Cala Montjoi és una de les cales més boniques de la badia de Roses, dins de l’entorn del Parc Natural de Cap de Creus. Famosa per haver acollit el restaurant elBulli, les seves aigües transparents i els seus fons rocosos la fan ideal per a l’esnòrquel. I la millor manera de gaudir-ne sense cues d’aparcament és arribar-hi en barca.',
      sections: [
        {
          h2: 'On és Cala Montjoi i per què és especial',
          body: [
            'Cala Montjoi és a la badia de Roses, a uns 7 km del centre i dins dels límits del Parc Natural de Cap de Creus. No és una platja massificada: és petita, amb accés per carretera limitat i poc aparcament, cosa que la manté relativament tranquil·la.',
            'Les seves aigües són d’un blau transparent sobre fons rocosos que baixen suaument, un refugi natural per a la vida marina. Arribar-hi forma part del seu encant: cada visita sembla un petit descobriment.',
          ],
        },
        {
          h2: 'elBulli: la llegenda que va posar Cala Montjoi al mapa',
          body: [
            'El restaurant elBulli de Ferran Adrià va ser durant anys un dels millors del món, i la seva ubicació a Cala Montjoi no era casual: la solitud de la cala i l’entorn en formaven part de la identitat.',
            'Avui elBulli1846 funciona com a espai-museu i centre de recerca gastronòmica. Encara que ja no serveix àpats, el seu llegat segueix atraient visitants de tot el món a aquest racó de la Costa Brava.',
          ],
        },
        {
          h2: 'Arribar en barca des de Roses, sense llicència',
          body: [
            'La carretera fins a Cala Montjoi existeix, però l’aparcament és escàs i a l’estiu s’omple. Nosaltres sortim de la Marina de Santa Margarida, als canals de Roses, amb barques sense llicència que podeu pilotar vosaltres mateixos o deixar que us portem.',
            'En uns 20 minuts navegueu fins a la cala amb vistes de tota la costa. El lloguer sense llicència comença als 70 €/hora, i si preferiu més comoditat organitzem excursions privades on us expliquem la cala, les seves aigües i l’entorn.',
          ],
        },
        {
          h2: 'Esnòrquel i consells pràctics',
          body: [
            'L’esnòrquel aquí és excel·lent: fons rocosos amb posidònia, peixos de roca i algun pop curiós, amb molt bona visibilitat. La millor època va de maig a setembre; a la primavera o la tardor, un neoprè fi s’agraeix.',
            'Fondegeu amb compte de no fer-ho sobre la posidònia protegida i respecteu la normativa del Parc Natural: no recolliu roques ni petxines, manteniu la distància amb la fauna i, si veieu brossa, recolliu-la.',
          ],
        },
      ],
      faqTitle: 'Preguntes freqüents',
      faq: [
        {
          q: 'On és exactament Cala Montjoi?',
          a: 'A la badia de Roses, a uns 7 km del centre, dins del Parc Natural de Cap de Creus. S’hi pot arribar per carretera, amb aparcament limitat, o —molt millor— per mar.',
        },
        {
          q: 'Es pot arribar en barca sense llicència de navegació?',
          a: 'Sí. Lloguem barques sense llicència des de la Marina de Santa Margarida: podeu pilotar vosaltres o anar de passatgers. La travessia dura uns 20 minuts i la barca és fàcil de manejar.',
        },
        {
          q: 'Cala Montjoi és bona per fer esnòrquel?',
          a: 'És de les millors de la zona: fons rocosos, aigua transparent i fauna variada. L’ideal és anar-hi de maig a setembre. Porteu el vostre equip o pregunteu-nos per les opcions.',
        },
        {
          q: 'Què té a veure Cala Montjoi amb elBulli?',
          a: 'elBulli, el restaurant de Ferran Adrià, era a Cala Montjoi. Avui funciona elBulli1846 com a espai-museu. Encara que ja no serveix àpats, la seva història segueix atraient visitants.',
        },
      ],
      ctaTitle: 'Exploreu Cala Montjoi en barca',
      ctaText: 'Des de la Marina de Santa Margarida, a uns 20 minuts. Llogueu una barca sense llicència o uniu-vos a una excursió privada.',
      ctaLabel: 'Consultar disponibilitat i reservar',
      relatedTitle: 'Continueu explorant',
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
    en: {
      metaTitle: 'Cala Murtra (Roses): reach it by boat & snorkel',
      metaDescription:
        'Guide to Cala Murtra (Roses): a tranquil cove with clean waters, best reached by boat. Snorkelling, anchoring and tips. Book your outing from Santa Margarita.',
      breadcrumbHome: 'Home',
      breadcrumbLabel: 'Cala Murtra',
      kicker: 'Tranquil cove',
      h1: 'Cala Murtra in Roses: the tranquil cove best enjoyed by boat',
      heroAlt: 'Clean, sheltered waters of Cala Murtra near Roses',
      introLead:
        'Cala Murtra is one of those coves almost nobody sets foot on. Hidden on the Roses coast, with clean waters and barely a crowd, it’s perfect if you want peace and water quality. The reason for its calm: land access is awkward. That’s why, at Experience Boat, we make it a must-stop on our outings.',
      sections: [
        {
          h2: 'What Cala Murtra is and why it’s special',
          body: [
            'Cala Murtra is a small natural cove on the Roses coast, in the Punta Falconera area, near Almadrava. It’s not large, but that’s its charm: while other beaches fill with sunbathers, here there’s space, quiet and clear water that calls you in.',
            'It’s an undeveloped cove, in its natural state, because the walking path is difficult and that keeps it away from mass tourism. The mood is laid-back and calm, drawing people who come to reconnect with the sea rather than look for services.',
          ],
        },
        {
          h2: 'Why reaching it by boat is the best option',
          body: [
            'If you try to get there on foot, you quickly understand why it stays so peaceful: no easy parking, no beach bar, and a long, uneven path. Good for nature, not so much for your comfort.',
            'So the boat is the natural way in. We leave Santa Margarita and in about 10 minutes we anchor in clear, shallow water, ideal for dropping anchor and settling in. A licence-free rental from €70/hour gets you there in minutes, or you can join a private excursion if you’d rather we handle the boat.',
          ],
        },
        {
          h2: 'Swimming and snorkelling in clean water',
          body: [
            'Once anchored, the water speaks for itself: transparency, a pleasant temperature and rocky seabeds full of life. Cala Murtra offers quiet snorkelling: small fish, aquatic plants and that feeling of an aquarium without glass.',
            'Don’t expect coral reefs: it’s pure, discreet Mediterranean nature, which is exactly what you come here for. With mask, snorkel and fins you slip into a corner almost no one visits.',
          ],
        },
        {
          h2: 'Practical tips for your outing',
          body: [
            'Tramuntana: in Roses the north wind rules. Cala Murtra sits relatively sheltered, but it’s worth checking the forecast; on strong-wind days, save it for another time. For anchoring, sand and rock hold well: set anchor a few metres out and pay out the chain properly.',
            'There are no services, so come self-sufficient: water, shade, sunscreen and a towel. And respect the place — it’s a pristine cove because we look after it —: leave no litter and, if you see any, pick it up.',
          ],
        },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Where exactly is Cala Murtra?',
          a: 'On the Roses coast, in the Punta Falconera area near Almadrava, within the bay’s shoreline. Easy to reach by boat from Marina de Santa Margarita, about 10 minutes’ sail.',
        },
        {
          q: 'How do you reach Cala Murtra, on foot or by boat?',
          a: 'On foot the access is difficult, with no clear path or services. Most people arrive by boat: licence-free rental from €70/hour or a private excursion. It’s the most practical way and makes the most of your time in the water.',
        },
        {
          q: 'Is it a tranquil cove? And nudist-friendly?',
          a: 'Yes, it’s tranquil with a relaxed, naturist-friendly feel, precisely because the awkward access keeps crowds away. You’ll find people seeking peace and disconnection.',
        },
        {
          q: 'Can you snorkel at Cala Murtra?',
          a: 'Yes, it’s a good spot: clear waters, rocky seabeds and discreet Mediterranean wildlife. Bring mask, snorkel and fins. It’s nature snorkelling, not reef, but the clean water makes it worthwhile.',
        },
      ],
      ctaTitle: 'Sail to Cala Murtra',
      ctaText: 'Discover the calm of Cala Murtra on a private outing or with a licence-free boat from Santa Margarita.',
      ctaLabel: 'Check availability and book',
      relatedTitle: 'Keep exploring',
    },
    ca: {
      metaTitle: 'Cala Murtra (Roses): arribar-hi en barca i snorkel',
      metaDescription:
        'Guia de Cala Murtra (Roses): una cala tranquil·la d’aigües netes, més accessible en barca. Snorkel, fondeig i consells. Reserva la teva sortida des de Santa Margarida.',
      breadcrumbHome: 'Inici',
      breadcrumbLabel: 'Cala Murtra',
      kicker: 'Cala tranquil·la',
      h1: 'Cala Murtra a Roses: la cala tranquil·la que es gaudeix millor en barca',
      heroAlt: 'Aigües netes i resguardades de Cala Murtra, prop de Roses',
      introLead:
        'Cala Murtra és una d’aquelles cales que gairebé ningú trepitja. Amagada a la costa de Roses, amb aigües netes i sense gairebé aglomeracions, és perfecta si busqueu tranquil·litat i qualitat d’aigua. El motiu de la seva calma: l’accés per terra és incòmode. Per això, a Experience Boat, la considerem una parada obligada de les nostres sortides.',
      sections: [
        {
          h2: 'Què és Cala Murtra i per què és especial',
          body: [
            'Cala Murtra és una petita cala natural a la costa de Roses, a la zona de Punta Falconera, prop de l’Almadrava. No és gran, però aquí hi ha l’encant: mentre altres platges s’omplen de para-sols, aquí hi ha espai, silenci i una aigua transparent que convida a tirar-s’hi.',
            'És una cala poc urbanitzada, en estat natural, perquè el camí a peu és complicat i això la manté allunyada del turisme massiu. L’ambient és relaxat i tranquil, de gent que ve a connectar amb el mar més que a buscar serveis.',
          ],
        },
        {
          h2: 'Per què arribar-hi en barca és la millor opció',
          body: [
            'Si intenteu arribar-hi a peu, enteneu de seguida per què està tan tranquil·la: no hi ha aparcament còmode, ni xiringuito, i el camí és llarg i irregular. Bé per a la natura, no tant per a la vostra comoditat.',
            'Per això la barca és l’accés natural. Sortim de Santa Margarida i en uns 10 minuts fondegem en aigua clara i poc profunda, ideal per ancorar i gaudir. Un lloguer sense llicència des de 70 €/hora us hi deixa en minuts, o podeu venir en una excursió privada si preferiu que portem nosaltres la barca.',
          ],
        },
        {
          h2: 'Bany i esnòrquel en aigües netes',
          body: [
            'Un cop fondejats, l’aigua parla per si sola: transparència, temperatura agradable i fons de roca amb vida marina. Cala Murtra ofereix un esnòrquel silenciós: peixos petits, plantes aquàtiques i aquesta sensació d’aquari sense vidre.',
            'No espereu esculls de corall: és natura mediterrània pura i discreta, que és justament el que es busca aquí. Amb màscara, tub i unes aletes, us endinseu en un racó que gairebé ningú visita.',
          ],
        },
        {
          h2: 'Consells pràctics per a la vostra sortida',
          body: [
            'Tramuntana: a Roses el vent del nord mana. Cala Murtra queda relativament protegida, però convé mirar la previsió; amb vent fort, millor deixar-la per a un altre dia. Per al fondeig, sorra i roca aguanten bé: fondegeu a pocs metres i doneu bé la cadena.',
            'No hi ha serveis, així que veniu autosuficients: aigua, ombra, protecció solar i tovallola. I respecteu l’entorn —és una cala verge perquè es cuida—: no deixeu residus i, si veieu brossa, recolliu-la.',
          ],
        },
      ],
      faqTitle: 'Preguntes freqüents',
      faq: [
        {
          q: 'On és exactament Cala Murtra?',
          a: 'A la costa de Roses, a la zona de Punta Falconera, prop de l’Almadrava, dins del litoral de la badia. S’hi arriba fàcilment en barca des de la Marina de Santa Margarida, a uns 10 minuts de navegació.',
        },
        {
          q: 'Com s’hi va, a peu o en barca?',
          a: 'L’accés a peu és complicat, sense sender clar ni serveis. La majoria hi arriba en barca: lloguer sense llicència des de 70 €/hora o excursió privada. És el més còmode i el que treu més partit al temps a l’aigua.',
        },
        {
          q: 'És una cala tranquil·la? I naturista?',
          a: 'Sí, és tranquil·la i d’ambient naturista relaxat, precisament perquè l’accés difícil manté fora les masses. Hi trobareu gent que busca pau i desconnexió.',
        },
        {
          q: 'Es pot fer esnòrquel a Cala Murtra?',
          a: 'Sí, és un bon lloc: aigües clares, fons rocosos i fauna mediterrània discreta. Porteu màscara, tub i aletes. És esnòrquel de natura, no d’escull, però l’aigua neta fa que valgui la pena.',
        },
      ],
      ctaTitle: 'Navegueu a Cala Murtra',
      ctaText: 'Descobriu la calma de Cala Murtra en una sortida privada o amb una barca sense llicència des de Santa Margarida.',
      ctaLabel: 'Consultar disponibilitat i reservar',
      relatedTitle: 'Continueu explorant',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  queVerRoses: {
    es: {
      metaTitle: 'Qué ver en Roses: guía por tierra y mar',
      metaDescription:
        'Qué ver en Roses: la Ciutadella, el Castell de la Trinitat, el faro y las calas de la bahía. Descubre Roses por tierra y —mejor todavía— desde el mar.',
      breadcrumbHome: 'Inicio',
      breadcrumbLabel: 'Qué ver en Roses',
      kicker: 'Bahía marinera',
      h1: 'Qué ver en Roses: la bahía marinera de la Costa Brava',
      heroAlt: 'Vista de la bahía de Roses desde el mar',
      introLead:
        'Roses es una villa marinera en el extremo norte de la Costa Brava, con siglos de historia y una bahía protegida por el Parc Natural de Cap de Creus. Aquí tienes qué ver sin prisa: el casco antiguo y sus monumentos por tierra y, sobre todo, las calas y los canales que solo se descubren desde el agua.',
      sections: [
        {
          h2: 'Roses de un vistazo',
          body: [
            'Roses no es una playa de resort: es una villa con raíces, de casco antiguo, puerto pesquero vivo, playas largas y calas escondidas. La bahía que la rodea forma parte del Parc Natural de Cap de Creus, así que Roses es también la puerta de entrada a uno de los paisajes más salvajes de Cataluña.',
            'Se viene a Roses a desconectar sin perder autenticidad: pasear por el puerto, comer en una terraza con vistas y subir a la Ciutadella al atardecer.',
          ],
        },
        {
          h2: 'Qué ver en tierra: Ciutadella, Castell de la Trinitat y faro',
          body: [
            'La Ciutadella de Roses es el corazón histórico: un recinto amurallado con restos griegos (la antigua Rhode), romanos y medievales, con un pequeño museo que pone contexto. El Castell de la Trinitat, fortaleza del siglo XVI asomada al mar, regala vistas de toda la bahía; a su lado, el faro de Roses.',
            'Si te tira la prehistoria, el Dolmen de la Creu d’en Cobertella es uno de los megalíticos más grandes de Cataluña. Y el casco antiguo se disfruta paseando sin prisa, entre tiendas locales y bares de pescadores.',
          ],
        },
        {
          h2: 'Qué ver desde el mar',
          body: [
            'Aquí está lo que diferencia una visita normal de una auténtica. Los canales de Santa Margarita, el barrio marinero navegable desde donde salimos, concentran la esencia marinera de Roses. Y a las calas de la bahía —Montjoi, Murtra— solo se llega bien en barco, con aguas transparentes y esa sensación de descubrimiento.',
            'Más allá, el Parc Natural de Cap de Creus levanta acantilados sobre el agua, el paisaje que inspiró a Dalí. Un atardecer desde el mar, con la luz dorada tocando la Ciutadella, es difícil de olvidar.',
          ],
        },
        {
          h2: 'Cuándo ir y cómo verla mejor',
          body: [
            'La mejor época va de mayo a octubre; junio y septiembre traen luz larga y menos gente que agosto. El casco antiguo se recorre a pie, y para las playas grandes hay autobús local.',
            'Pero para ver Roses como es, sube a un barco: alquiler sin licencia desde 70 €/hora en la Marina de Santa Margarita, o una excursión privada al atardecer (desde 160 €). Mira siempre el parte de tramuntana, el viento del norte que aquí manda.',
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Qué se puede ver en Roses en un día?',
          a: 'Por la mañana, la Ciutadella, el Castell de la Trinitat, el faro y el casco antiguo a pie. Por la tarde, las calas de la bahía en barco. Si el día es corto, prioriza el mar: es lo que no se ve igual desde tierra.',
        },
        {
          q: '¿Merece la pena ver Roses desde el mar?',
          a: 'Mucho. Su alma es la bahía: calas, canales y el atardecer sobre la Ciutadella. Una salida en barco te muestra Roses como la ven los marineros.',
        },
        {
          q: '¿Qué calas se visitan desde Roses?',
          a: 'Cala Montjoi o Cala Murtra en la bahía, a pocos minutos de Santa Margarita; las más lejanas —como Cala Culip, hacia Cap de Creus— a unos 45, con barco con licencia o excursión privada.',
        },
        {
          q: '¿Cuándo es mejor visitar Roses?',
          a: 'De mayo a octubre, con junio y septiembre como meses ideales. Evita agosto si buscas tranquilidad y consulta siempre el parte de tramuntana.',
        },
      ],
      ctaTitle: 'Descubre Roses desde el mar',
      ctaText: 'Alquila un barco sin licencia o reserva una excursión privada al atardecer y recorre las calas y los canales de Santa Margarita.',
      ctaLabel: 'Consultar disponibilidad y reservar',
      relatedTitle: 'Sigue explorando',
    },
    fr: {
      metaTitle: 'Que faire à Rosas : à terre et en mer',
      metaDescription:
        'Que faire à Rosas : la Ciutadella, le Castell de la Trinitat, le phare et les criques de la baie. Découvrez Rosas à terre et —mieux encore— depuis la mer.',
      breadcrumbHome: 'Accueil',
      breadcrumbLabel: 'Que faire à Rosas',
      kicker: 'Baie maritime',
      h1: 'Que faire à Rosas : la baie maritime de la Costa Brava',
      heroAlt: 'Vue de la baie de Rosas depuis la mer',
      introLead:
        'Rosas est un village marin à l’extrémité nord de la Costa Brava, riche d’histoire et bordé d’une baie protégée par le Parc Naturel de Cap de Creus. Voici quoi voir sans se presser : la vieille ville et ses monuments à terre et, surtout, les criques et les canaux que l’on ne découvre que depuis l’eau.',
      sections: [
        {
          h2: 'Rosas en un coup d’œil',
          body: [
            'Rosas n’est pas une plage de station balnéaire : c’est un village avec des racines, une vieille ville, un port de pêche vivant, de longues plages et des criques cachées. La baie qui l’entoure fait partie du Parc Naturel de Cap de Creus, ce qui fait de Rosas la porte d’entrée de l’un des paysages les plus sauvages de Catalogne.',
            'On vient à Rosas pour se déconnecter sans perdre l’authenticité : flâner dans le port, manger en terrasse face à la mer et monter à la Ciutadella au coucher du soleil.',
          ],
        },
        {
          h2: 'Que voir à terre : Ciutadella, Castell de la Trinitat et phare',
          body: [
            'La Ciutadella de Rosas est le cœur historique : une enceinte fortifiée aux vestiges grecs (l’ancienne Rhode), romains et médiévaux, avec un petit musée qui remet en contexte. Le Castell de la Trinitat, forteresse du seizième siècle tournée vers la mer, offre une vue sur toute la baie ; juste à côté, le phare de Rosas.',
            'Si la préhistoire vous attire, le Dolmen de la Creu d’en Cobertella est l’un des plus grands mégalithes de Catalogne. Et la vieille ville se savoure à pied, entre boutiques locales et bars de pêcheurs.',
          ],
        },
        {
          h2: 'Que voir depuis la mer',
          body: [
            'Voilà ce qui distingue une visite ordinaire d’une vraie. Les canaux de Sainte-Marguerite, le quartier marin navigable d’où nous partons, concentrent l’âme maritime de Rosas. Et les criques de la baie —Montjoi, Murtra— ne s’atteignent vraiment qu’en bateau, aux eaux transparentes et à ce parfum de découverte.',
            'Plus loin, le Parc Naturel de Cap de Creus dresse ses falaises au-dessus de l’eau, le paysage qui inspira Dalí. Un coucher de soleil depuis la mer, la lumière dorée sur la Ciutadella, ne s’oublie pas.',
          ],
        },
        {
          h2: 'Quand venir et comment mieux la voir',
          body: [
            'La meilleure période va de mai à octobre ; juin et septembre offrent une lumière longue et moins de monde qu’en août. La vieille ville se parcourt à pied, et un bus local dessert les grandes plages.',
            'Mais pour voir Rosas telle qu’elle est, montez à bord : location sans permis dès 70 €/heure à la Marina de Santa Margarita, ou une excursion privée au coucher du soleil (dès 160 €). Consultez toujours le bulletin de tramontane, le vent du nord qui commande ici.',
          ],
        },
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Que peut-on voir à Rosas en une journée ?',
          a: 'Le matin, la Ciutadella, le Castell de la Trinitat, le phare et la vieille ville à pied. L’après-midi, les criques de la baie en bateau. Si la journée est courte, privilégiez la mer : c’est ce qui ne se voit pas pareil de terre.',
        },
        {
          q: 'Vaut-il la peine de voir Rosas depuis la mer ?',
          a: 'Beaucoup. Son âme, c’est la baie : criques, canaux et le coucher de soleil sur la Ciutadella. Une sortie en bateau vous montre Rosas comme la voient les marins.',
        },
        {
          q: 'Quelles criques visiter depuis Rosas ?',
          a: 'Cala Montjoi ou Cala Murtra dans la baie, à quelques minutes de Santa Margarita ; les plus lointaines — comme Cala Culip, vers le Cap de Creus — à 45 minutes environ, en bateau avec permis ou en excursion privée.',
        },
        {
          q: 'Quand est-il préférable de visiter Rosas ?',
          a: 'De mai à octobre, avec juin et septembre comme mois idéaux. Évitez août si vous cherchez le calme et consultez toujours le bulletin de tramontane.',
        },
      ],
      ctaTitle: 'Découvrez Rosas depuis la mer',
      ctaText: 'Louez un bateau sans permis ou réservez une excursion privée au coucher du soleil et parcourez les criques et les canaux de Santa Margarita.',
      ctaLabel: 'Vérifier les disponibilités et réserver',
      relatedTitle: 'Continuez à explorer',
    },
    en: {
      metaTitle: 'What to see in Roses: a guide by land & sea',
      metaDescription:
        'What to see in Roses: the Ciutadella, the Castell de la Trinitat, the lighthouse and the bay’s coves. Discover Roses on foot and — better still — from the sea.',
      breadcrumbHome: 'Home',
      breadcrumbLabel: 'What to see in Roses',
      kicker: 'Maritime bay',
      h1: 'What to see in Roses: the maritime bay of the Costa Brava',
      heroAlt: 'View of the Bay of Roses from the sea',
      introLead:
        'Roses is a seafaring town at the northern tip of the Costa Brava, steeped in history and bordered by a bay sheltered by the Cap de Creus Natural Park. Here’s what to see without rushing: the old town and its monuments on land and, above all, the coves and channels that only reveal themselves from the water.',
      sections: [
        {
          h2: 'Roses at a glance',
          body: [
            'Roses is not a resort beach: it’s a town with roots, an old quarter, a working fishing port, long beaches and hidden coves. The bay around it is part of the Cap de Creus Natural Park, so Roses is also the gateway to one of Catalonia’s wildest landscapes.',
            'You come to Roses to unwind without losing authenticity: stroll the port, eat on a terrace with sea views and climb up to the Ciutadella at sunset.',
          ],
        },
        {
          h2: 'What to see on land: Ciutadella, Castell de la Trinitat and lighthouse',
          body: [
            'The Ciutadella of Roses is the historic heart: a walled site with Greek remains (ancient Rhode), Roman and medieval, with a small museum for context. The Castell de la Trinitat, a sixteenth-century fortress overlooking the sea, rewards you with views of the whole bay; next to it, the Roses lighthouse.',
            'If prehistory appeals to you, the Dolmen de la Creu d’en Cobertella is one of Catalonia’s largest megaliths. And the old town is best enjoyed slowly, among local shops and fishers’ bars.',
          ],
        },
        {
          h2: 'What to see from the sea',
          body: [
            'Here’s what sets an ordinary visit apart from a real one. The Santa Margarita channels, the navigable seafaring quarter we sail from, hold the maritime soul of Roses. And the bay’s coves — Montjoi, Murtra — are best reached by boat, with transparent waters and that sense of discovery.',
            'Beyond them, the Cap de Creus Natural Park raises cliffs above the water, the landscape that inspired Dalí. A sunset from the sea, golden light on the Ciutadella, is hard to forget.',
          ],
        },
        {
          h2: 'When to go and how to see it best',
          body: [
            'The best season runs May to October; June and September bring long daylight and fewer crowds than August. The old town is walkable, and a local bus serves the main beaches.',
            'But to see Roses as it really is, get on a boat: licence-free rental from €70/hour at Marina de Santa Margarita, or a private sunset excursion (from €160). Always check the tramuntana forecast — that north wind rules here.',
          ],
        },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'What can you see in Roses in a day?',
          a: 'In the morning, the Ciutadella, the Castell de la Trinitat, the lighthouse and the old town on foot. In the afternoon, the bay’s coves by boat. Short on time? Prioritise the sea: it’s what you don’t see the same way from land.',
        },
        {
          q: 'Is it worth seeing Roses from the sea?',
          a: 'Very much. Its soul is the bay: coves, channels and sunset over the Ciutadella. A boat outing shows you Roses the way sailors see it.',
        },
        {
          q: 'Which coves can you visit from Roses?',
          a: 'Cala Montjoi or Cala Murtra in the bay, just minutes from Santa Margarita; the further ones — like Cala Culip, toward Cap de Creus — around 45 minutes away, with a licensed boat or a private excursion.',
        },
        {
          q: 'When is the best time to visit Roses?',
          a: 'May to October, with June and September the ideal months. Avoid August if you want quiet, and always check the tramuntana forecast.',
        },
      ],
      ctaTitle: 'Discover Roses from the sea',
      ctaText: 'Rent a licence-free boat or book a private sunset excursion and explore the coves and channels of Santa Margarita.',
      ctaLabel: 'Check availability and book',
      relatedTitle: 'Keep exploring',
    },
    ca: {
      metaTitle: 'Què veure a Roses: guia per terra i mar',
      metaDescription:
        'Què veure a Roses: la Ciutadella, el Castell de la Trinitat, el far i les cales de la badia. Descobreix Roses per terra i —millor encara— des del mar.',
      breadcrumbHome: 'Inici',
      breadcrumbLabel: 'Què veure a Roses',
      kicker: 'Badia marinera',
      h1: 'Què veure a Roses: la badia marinera de la Costa Brava',
      heroAlt: 'Vista de la badia de Roses des del mar',
      introLead:
        'Roses és una vila marinera a l’extrem nord de la Costa Brava, amb segles d’història i una badia protegida pel Parc Natural de Cap de Creus. Aquí teniu què veure sense pressa: el nucli antic i els seus monuments per terra i, sobretot, les cales i els canals que només es descobreixen des de l’aigua.',
      sections: [
        {
          h2: 'Roses d’un cop d’ull',
          body: [
            'Roses no és una platja de resort: és una vila amb arrels, de nucli antic, port pesquer viu, platges llargues i cales amagades. La badia que l’envolta forma part del Parc Natural de Cap de Creus, així que Roses és també la porta d’entrada a un dels paisatges més salvatges de Catalunya.',
            'Es ve a Roses a desconnectar sense perdre autenticitat: passejar pel port, menjar en una terrassa amb vistes i pujar a la Ciutadella al capvespre.',
          ],
        },
        {
          h2: 'Què veure per terra: Ciutadella, Castell de la Trinitat i far',
          body: [
            'La Ciutadella de Roses és el cor històric: un recinte emmurallat amb restes gregues (l’antiga Rhode), romanes i medievals, amb un petit museu que hi posa context. El Castell de la Trinitat, fortalesa del segle XVI abocada al mar, regala vistes de tota la badia; al seu costat, el far de Roses.',
            'Si us atrau la prehistòria, el Dolmen de la Creu d’en Cobertella és un dels megàlits més grans de Catalunya. I el nucli antic es gaudeix passejant sense pressa, entre botigues locals i bars de pescadors.',
          ],
        },
        {
          h2: 'Què veure des del mar',
          body: [
            'Aquí hi ha el que diferencia una visita normal d’una autèntica. Els canals de Santa Margarida, el barri mariner navegable des d’on sortim, concentren l’essència marinera de Roses. I a les cales de la badia —Montjoi, Murtra— només s’hi arriba bé en barca, amb aigües transparents i aquesta sensació de descobriment.',
            'Més enllà, el Parc Natural de Cap de Creus alça penya-segats sobre l’aigua, el paisatge que va inspirar Dalí. Un capvespre des del mar, amb la llum daurada tocant la Ciutadella, és difícil d’oblidar.',
          ],
        },
        {
          h2: 'Quan anar-hi i com veure-la millor',
          body: [
            'La millor època va de maig a octubre; juny i setembre porten llum llarga i menys gent que l’agost. El nucli antic es recorre a peu, i per a les platges grans hi ha autobús local.',
            'Però per veure Roses com és, pugeu a una barca: lloguer sense llicència des de 70 €/hora a la Marina de Santa Margarida, o una excursió privada al capvespre (des de 160 €). Mireu sempre la previsió de tramuntana, el vent del nord que aquí mana.',
          ],
        },
      ],
      faqTitle: 'Preguntes freqüents',
      faq: [
        {
          q: 'Què es pot veure a Roses en un dia?',
          a: 'Al matí, la Ciutadella, el Castell de la Trinitat, el far i el nucli antic a peu. A la tarda, les cales de la badia en barca. Si el dia és curt, prioritzeu el mar: és el que no es veu igual des de terra.',
        },
        {
          q: 'Val la pena veure Roses des del mar?',
          a: 'Molt. La seva ànima és la badia: cales, canals i el capvespre sobre la Ciutadella. Una sortida en barca us mostra Roses com la veuen els mariners.',
        },
        {
          q: 'Quines cales es visiten des de Roses?',
          a: 'Cala Montjoi o Cala Murtra a la badia, a pocs minuts de Santa Margarida; les més llunyanes —com Cala Culip, cap al Cap de Creus— a uns 45 minuts, amb barca amb llicència o excursió privada.',
        },
        {
          q: 'Quan és millor visitar Roses?',
          a: 'De maig a octubre, amb juny i setembre com a mesos ideals. Eviteu l’agost si busqueu tranquil·litat i consulteu sempre la previsió de tramuntana.',
        },
      ],
      ctaTitle: 'Descobriu Roses des del mar',
      ctaText: 'Llogueu una barca sense llicència o reserveu una excursió privada al capvespre i recorreu les cales i els canals de Santa Margarida.',
      ctaLabel: 'Consultar disponibilitat i reservar',
      relatedTitle: 'Continueu explorant',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  cadaquesBarco: {
    es: {
      metaTitle: 'Cadaqués en barco desde Roses: excursión privada',
      metaDescription:
        'Ir a Cadaqués en barco desde Roses: una excursión privada bordeando el Cap de Creus, con paradas en calas para bañarte. El pueblo de Dalí, a tu ritmo.',
      breadcrumbHome: 'Inicio',
      breadcrumbLabel: 'Cadaqués en barco',
      kicker: 'El pueblo de Dalí',
      h1: 'Cadaqués en barco desde Roses: la excursión privada al pueblo de Dalí',
      heroAlt: 'Costa del Cap de Creus camino de Cadaqués',
      introLead:
        'Cadaqués espera al otro lado del Cap de Creus: un pueblo blanco de pescadores ligado para siempre a Salvador Dalí. No somos una línea regular ni un ferry; desde Roses te llevamos en una excursión privada, bordeando acantilados y parando en calas para bañarte antes de llegar al pueblo.',
      sections: [
        {
          h2: 'Qué es Cadaqués y por qué merece la pena',
          body: [
            'Cadaqués es un pueblo costero de casas encaladas que suben desde la orilla hasta la iglesia de Santa Maria. Callejuelas estrechas, galerías de arte, barcas de pesca en la bahía y un ambiente tranquilo y bohemio, muy diferente del turismo de playa masificado.',
            'Su carácter gira en torno a Salvador Dalí, que vivió justo al lado, en Portlligat. Pasear Cadaqués es respirar el paisaje que marcó al artista.',
          ],
        },
        {
          h2: 'Dalí, Portlligat y el pueblo',
          body: [
            'La Casa-Museo Salvador Dalí en Portlligat, a un paso de Cadaqués, fue su hogar y su taller: una arquitectura singular, ampliada durante años, con vistas al Cap de Creus. Conviene consultar horarios y reservar entrada en temporada alta.',
            'En el pueblo, pasea sin prisa hasta la iglesia de Santa Maria, entra en las galerías y come pescado en una terraza frente al mar. El encanto de Cadaqués está en la calma.',
          ],
        },
        {
          h2: 'Cómo llegar en barco desde Roses (excursión privada)',
          body: [
            'Por mar se va bordeando el Parc Natural de Cap de Creus: acantilados, calas y agua clara, sin carretera ni ruido. En nuestra excursión privada vas solo con tu grupo y un patrón que conoce estas aguas; paramos en calas como Guillola o Jugadora para nadar y hacer snorkel, y en Cadaqués tienes tiempo para el pueblo antes de volver.',
            'Es una travesía de mar abierto de algo más de una hora por trayecto, según el estado del mar. Con las paradas para bañarse, la salida ocupa buena parte del día.',
          ],
        },
        {
          h2: 'Con patrón, tramuntana y mejor época',
          body: [
            'Para Cadaqués recomendamos barco con licencia o excursión con patrón: está a unos 20 km por mar abierto y el Cap de Creus exige experiencia. El alquiler sin licencia es para las calas cercanas de la bahía, no para esta ruta.',
            'La tramuntana puede levantar mar con rapidez; consultamos el parte y, si sopla fuerte, cambiamos de plan o de fecha. La mejor época va de mayo a septiembre.',
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Se puede ir a Cadaqués en barco desde Roses?',
          a: 'Sí, bordeando el Parc Natural de Cap de Creus. No es una línea regular: es una excursión privada, solo tu grupo, con patrón y a tu ritmo.',
        },
        {
          q: '¿Cuánto dura la travesía?',
          a: 'Algo más de una hora por trayecto, según el mar. Con paradas en calas para bañarte, la salida ocupa buena parte del día.',
        },
        {
          q: '¿Necesito licencia o patrón?',
          a: 'Para esta ruta recomendamos barco con licencia o con patrón: es mar abierto y hay distancia. El alquiler sin licencia queda para las calas cercanas de la bahía.',
        },
        {
          q: '¿Qué ver en Cadaqués?',
          a: 'El casco antiguo y la iglesia de Santa Maria, las galerías de arte, la playa y, muy cerca, la Casa-Museo de Dalí en Portlligat.',
        },
      ],
      ctaTitle: 'Navega a Cadaqués',
      ctaText: 'Excursión privada desde Roses bordeando el Cap de Creus, con patrón y paradas en calas. El pueblo de Dalí, a tu ritmo.',
      ctaLabel: 'Consultar disponibilidad y reservar',
      relatedTitle: 'Sigue explorando',
    },
    fr: {
      metaTitle: 'Cadaqués en bateau depuis Roses : excursion privée',
      metaDescription:
        'Aller à Cadaqués en bateau depuis Roses : une excursion privée en longeant le Cap de Creus, avec arrêts baignade dans les criques. Le village de Dalí, à votre rythme.',
      breadcrumbHome: 'Accueil',
      breadcrumbLabel: 'Cadaqués en bateau',
      kicker: 'Le village de Dalí',
      h1: 'Cadaqués en bateau depuis Roses : l’excursion privée au village de Dalí',
      heroAlt: 'Côte du Cap de Creus sur la route de Cadaqués',
      introLead:
        'Cadaqués vous attend de l’autre côté du Cap de Creus : un village blanc de pêcheurs lié à jamais à Salvador Dalí. Nous ne sommes ni une ligne régulière ni un ferry ; depuis Roses, nous vous emmenons en excursion privée, en longeant les falaises et en nous arrêtant dans des criques pour vous baigner avant d’arriver au village.',
      sections: [
        {
          h2: 'Qu’est-ce que Cadaqués et pourquoi cela vaut la peine',
          body: [
            'Cadaqués est un village côtier de maisons chaulées qui montent du rivage jusqu’à l’église de Santa Maria. Des ruelles étroites, des galeries d’art, des barques de pêche dans la baie et une ambiance calme et bohème, bien loin du tourisme de plage surpeuplé.',
            'Son caractère tourne autour de Salvador Dalí, qui vivait juste à côté, à Portlligat. Flâner dans Cadaqués, c’est respirer le paysage qui a marqué l’artiste.',
          ],
        },
        {
          h2: 'Dalí, Portlligat et le village',
          body: [
            'La Maison-Musée Salvador Dalí à Portlligat, à deux pas de Cadaqués, fut son foyer et son atelier : une architecture singulière, agrandie au fil des années, avec vue sur le Cap de Creus. Pensez à vérifier les horaires et à réserver en haute saison.',
            'Dans le village, flânez jusqu’à l’église de Santa Maria, poussez la porte des galeries et goûtez le poisson en terrasse face à la mer. Tout le charme de Cadaqués tient dans son calme.',
          ],
        },
        {
          h2: 'Comment y aller en bateau depuis Roses (excursion privée)',
          body: [
            'Par la mer, on longe le Parc Naturel de Cap de Creus : falaises, criques et eau claire, sans route ni bruit. Lors de notre excursion privée, vous êtes seuls avec votre groupe et un skipper qui connaît ces eaux ; nous nous arrêtons dans des criques comme Guillola ou Jugadora pour nager et faire du snorkeling, et à Cadaqués vous avez le temps de découvrir le village avant de rentrer.',
            'C’est une traversée en mer ouverte d’un peu plus d’une heure par trajet, selon l’état de la mer. Avec les arrêts baignade, la sortie occupe une bonne partie de la journée.',
          ],
        },
        {
          h2: 'Avec skipper, tramontane et meilleure période',
          body: [
            'Pour Cadaqués, nous recommandons un bateau avec permis ou une excursion avec skipper : c’est à une vingtaine de kilomètres en mer ouverte et le Cap de Creus demande de l’expérience. La location sans permis est réservée aux criques proches de la baie, pas à cet itinéraire.',
            'La tramontane peut lever la mer rapidement ; nous consultons le bulletin et, si elle souffle fort, nous changeons de plan ou de date. La meilleure période va de mai à septembre.',
          ],
        },
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Peut-on aller à Cadaqués en bateau depuis Roses ?',
          a: 'Oui, en longeant le Parc Naturel de Cap de Creus. Ce n’est pas une ligne régulière : c’est une excursion privée, votre groupe seul, avec skipper et à votre rythme.',
        },
        {
          q: 'Combien de temps dure la traversée ?',
          a: 'Un peu plus d’une heure par trajet, selon la mer. Avec les arrêts baignade dans les criques, la sortie occupe une bonne partie de la journée.',
        },
        {
          q: 'Ai-je besoin d’un permis ou d’un skipper ?',
          a: 'Pour cet itinéraire, nous recommandons un bateau avec permis ou avec skipper : c’est de la mer ouverte et il y a de la distance. La location sans permis reste pour les criques proches de la baie.',
        },
        {
          q: 'Que voir à Cadaqués ?',
          a: 'Le centre ancien et l’église de Santa Maria, les galeries d’art, la plage et, tout près, la Maison-Musée de Dalí à Portlligat.',
        },
      ],
      ctaTitle: 'Naviguez vers Cadaqués',
      ctaText: 'Excursion privée depuis Roses en longeant le Cap de Creus, avec skipper et arrêts dans les criques. Le village de Dalí, à votre rythme.',
      ctaLabel: 'Vérifier les disponibilités et réserver',
      relatedTitle: 'Continuez à explorer',
    },
    en: {
      metaTitle: 'Cadaqués by boat from Roses: private excursion',
      metaDescription:
        'Go to Cadaqués by boat from Roses: a private excursion skirting Cap de Creus, with stops in coves to swim. Dalí’s village, at your own pace.',
      breadcrumbHome: 'Home',
      breadcrumbLabel: 'Cadaqués by boat',
      kicker: 'Dalí’s village',
      h1: 'Cadaqués by boat from Roses: the private excursion to Dalí’s village',
      heroAlt: 'Coast of Cap de Creus heading toward Cadaqués',
      introLead:
        'Cadaqués waits on the far side of Cap de Creus: a white fishing village forever linked to Salvador Dalí. We’re not a scheduled service or a ferry; from Roses we take you on a private excursion, skirting cliffs and stopping in coves to swim before we reach the village.',
      sections: [
        {
          h2: 'What Cadaqués is and why it’s worth the trip',
          body: [
            'Cadaqués is a coastal village of whitewashed houses rising from the shore to the Church of Santa Maria. Narrow lanes, art galleries, fishing boats in the bay and a calm, bohemian feel, far from crowded beach tourism.',
            'Its character revolves around Salvador Dalí, who lived right next door in Portlligat. Walking through Cadaqués means breathing in the landscape that shaped the artist.',
          ],
        },
        {
          h2: 'Dalí, Portlligat and the village',
          body: [
            'The Salvador Dalí House-Museum in Portlligat, a stone’s throw from Cadaqués, was his home and studio: singular architecture, extended over the years, with views of Cap de Creus. It’s worth checking opening times and booking ahead in high season.',
            'In the village, wander unhurried up to the Church of Santa Maria, step into the galleries and eat fresh fish on a terrace facing the sea. Cadaqués’ charm lies in its calm.',
          ],
        },
        {
          h2: 'How to get there by boat from Roses (private excursion)',
          body: [
            'By sea you sail skirting the Cap de Creus Natural Park: cliffs, coves and clear water, no road and no noise. On our private excursion it’s just your group and a skipper who knows these waters; we stop at coves like Guillola or Jugadora to swim and snorkel, and in Cadaqués you have time for the village before heading back.',
            'It’s an open-sea crossing of just over an hour each way, depending on conditions. With the stops for swimming, the outing takes up a good part of the day.',
          ],
        },
        {
          h2: 'With a skipper, tramuntana and best season',
          body: [
            'For Cadaqués we recommend a licensed boat or a skipper-led excursion: it’s about 20 km across open sea and Cap de Creus demands experience. Licence-free rental is for the bay’s nearby coves, not this route.',
            'The tramuntana can raise the sea quickly; we check the forecast and, if it’s blowing hard, we change the plan or the date. The best season runs May to September.',
          ],
        },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Can you reach Cadaqués by boat from Roses?',
          a: 'Yes, skirting the Cap de Creus Natural Park. It’s not a scheduled service: it’s a private excursion, your group alone, with a skipper and at your pace.',
        },
        {
          q: 'How long is the crossing?',
          a: 'Just over an hour each way, depending on sea conditions. With stops in coves to swim, the outing takes up a good part of the day.',
        },
        {
          q: 'Do I need a licence or a skipper?',
          a: 'For this route we recommend a licensed boat or a skipper: it’s open sea with distance to cover. Licence-free rental is reserved for the bay’s nearby coves.',
        },
        {
          q: 'What is there to see in Cadaqués?',
          a: 'The old town and the Church of Santa Maria, the art galleries, the beach and, very close by, the Dalí House-Museum in Portlligat.',
        },
      ],
      ctaTitle: 'Sail to Cadaqués',
      ctaText: 'A private excursion from Roses skirting Cap de Creus, with a skipper and stops in coves. Dalí’s village, at your pace.',
      ctaLabel: 'Check availability and book',
      relatedTitle: 'Keep exploring',
    },
    ca: {
      metaTitle: 'Cadaqués en barca des de Roses: excursió privada',
      metaDescription:
        'Anar a Cadaqués en barca des de Roses: una excursió privada vorejant el Cap de Creus, amb parades a cales per banyar-t’hi. El poble de Dalí, al teu ritme.',
      breadcrumbHome: 'Inici',
      breadcrumbLabel: 'Cadaqués en barca',
      kicker: 'El poble de Dalí',
      h1: 'Cadaqués en barca des de Roses: l’excursió privada al poble de Dalí',
      heroAlt: 'Costa del Cap de Creus camí de Cadaqués',
      introLead:
        'Cadaqués us espera a l’altre costat del Cap de Creus: un poble blanc de pescadors lligat per sempre a Salvador Dalí. No som una línia regular ni un ferry; des de Roses us portem en una excursió privada, vorejant penya-segats i parant a cales per banyar-vos-hi abans d’arribar al poble.',
      sections: [
        {
          h2: 'Què és Cadaqués i per què val la pena',
          body: [
            'Cadaqués és un poble costaner de cases encalades que pugen des de la vora fins a l’església de Santa Maria. Carrerons estrets, galeries d’art, barques de pesca a la badia i un ambient tranquil i bohemi, molt diferent del turisme de platja massificat.',
            'El seu caràcter gira al voltant de Salvador Dalí, que vivia just al costat, a Portlligat. Passejar per Cadaqués és respirar el paisatge que va marcar l’artista.',
          ],
        },
        {
          h2: 'Dalí, Portlligat i el poble',
          body: [
            'La Casa-Museu Salvador Dalí a Portlligat, a tocar de Cadaqués, va ser la seva llar i el seu taller: una arquitectura singular, ampliada durant anys, amb vistes al Cap de Creus. Convé consultar horaris i reservar entrada a la temporada alta.',
            'Al poble, passegeu sense pressa fins a l’església de Santa Maria, entreu a les galeries i mengeu peix en una terrassa davant del mar. L’encant de Cadaqués rau en la calma.',
          ],
        },
        {
          h2: 'Com arribar-hi en barca des de Roses (excursió privada)',
          body: [
            'Per mar s’hi va vorejant el Parc Natural de Cap de Creus: penya-segats, cales i aigua clara, sense carretera ni soroll. A la nostra excursió privada aneu només amb el vostre grup i un patró que coneix aquestes aigües; parem a cales com Guillola o Jugadora per nedar i fer esnòrquel, i a Cadaqués teniu temps per al poble abans de tornar.',
            'És una travessia de mar obert de poc més d’una hora per trajecte, segons l’estat del mar. Amb les parades per banyar-se, la sortida ocupa bona part del dia.',
          ],
        },
        {
          h2: 'Amb patró, tramuntana i millor època',
          body: [
            'Per a Cadaqués recomanem barca amb llicència o excursió amb patró: és a uns 20 km per mar obert i el Cap de Creus exigeix experiència. El lloguer sense llicència és per a les cales properes de la badia, no per a aquesta ruta.',
            'La tramuntana pot aixecar el mar ràpidament; consultem la previsió i, si bufa fort, canviem de pla o de data. La millor època va de maig a setembre.',
          ],
        },
      ],
      faqTitle: 'Preguntes freqüents',
      faq: [
        {
          q: 'Es pot anar a Cadaqués en barca des de Roses?',
          a: 'Sí, vorejant el Parc Natural de Cap de Creus. No és una línia regular: és una excursió privada, només el vostre grup, amb patró i al vostre ritme.',
        },
        {
          q: 'Quant dura la travessia?',
          a: 'Poc més d’una hora per trajecte, segons el mar. Amb parades a cales per banyar-vos-hi, la sortida ocupa bona part del dia.',
        },
        {
          q: 'Necessito llicència o patró?',
          a: 'Per a aquesta ruta recomanem barca amb llicència o amb patró: és mar obert i hi ha distància. El lloguer sense llicència queda per a les cales properes de la badia.',
        },
        {
          q: 'Què veure a Cadaqués?',
          a: 'El nucli antic i l’església de Santa Maria, les galeries d’art, la platja i, molt a prop, la Casa-Museu de Dalí a Portlligat.',
        },
      ],
      ctaTitle: 'Navegueu a Cadaqués',
      ctaText: 'Excursió privada des de Roses vorejant el Cap de Creus, amb patró i parades a cales. El poble de Dalí, al vostre ritme.',
      ctaLabel: 'Consultar disponibilitat i reservar',
      relatedTitle: 'Continueu explorant',
    },
  },
};
