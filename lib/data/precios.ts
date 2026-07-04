import type { Locale } from '@/lib/i18n/routes';

/**
 * Copy localizado de la página "Precios y temporadas".
 * Las TABLAS de tarifas se generan desde `fleet.ts` (fuente de verdad); aquí
 * solo vive el texto traducible (intro, encabezados, incluye/no incluye,
 * temporadas, FAQ y CTA). Nativo por idioma, no traducción literal.
 */

export interface PreciosFaq {
  q: string;
  a: string;
}

export interface PreciosSeason {
  name: string;
  months: string;
  note: string;
}

export interface PreciosCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbLabel: string;
  kicker: string;
  h1: string;
  intro: string[];

  sinLicenciaTitle: string;
  sinLicenciaLead: string;
  conLicenciaTitle: string;
  conLicenciaLead: string;

  // Encabezados de columna de las tablas.
  thBoat: string;
  thPax: string;
  th1h: string;
  th2h: string;
  thHalf: string;
  thFull: string;
  th3d: string;
  th7d: string;
  seasonColHint: string; // nota bajo la tabla: "precios temporada baja–alta"
  captainNote: string; // ¹ patrón obligatorio en el llaüt

  includesTitle: string;
  includes: string[];
  excludesTitle: string;
  excludes: string[];

  seasonsTitle: string;
  seasonsLead: string;
  seasons: PreciosSeason[];

  sunsetTitle: string;
  sunsetText: string;

  faqTitle: string;
  faq: PreciosFaq[];

  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;

  relatedTitle: string;
  relatedSinLicencia: string;
  relatedConLicencia: string;
  relatedExperiencias: string;
}

export const PRECIOS_COPY: Record<Locale, PreciosCopy> = {
  es: {
    metaTitle: 'Precios de alquiler de barco en Roses · desde 70€/h',
    metaDescription:
      'Precios claros y sin sorpresas: barco sin licencia desde 70€/h y con licencia desde 195€ el medio día. IVA, briefing y seguro incluidos. Roses, Costa Brava.',
    breadcrumbHome: 'Inicio',
    breadcrumbLabel: 'Precios y temporadas',
    kicker: 'Tarifas transparentes',
    h1: 'Precios de alquiler de barco en Roses',
    intro: [
      'Antes de reservar quieres saber cuánto cuesta, y nosotros preferimos decírtelo claro. El precio depende de tres cosas: el barco, cuántas horas navegues y la temporada. Todo lo que ves aquí incluye chalecos, briefing de seguridad, seguro de responsabilidad civil e IVA. Lo único aparte es el combustible.',
      'Salimos desde la Marina de Santa Margarita, a cinco minutos del centro de Roses, en la bahía más resguardada de la Costa Brava norte. Cada salida es privada: solo tu grupo a bordo. Si dudas entre un barco u otro, o entre temporada media y alta, escríbenos y te ayudamos a elegir.',
    ],
    sinLicenciaTitle: 'Barcos sin licencia',
    sinLicenciaLead:
      'No necesitas titulación. Te damos el briefing, coges el timón y navegas por la bahía y las calas cercanas. Ideales para familias y grupos que salen por primera vez.',
    conLicenciaTitle: 'Barcos con licencia',
    conLicenciaLead:
      'Con tu título (PER/PNB) llegas más lejos: Cap de Creus, Cadaqués o una jornada de pesca. ¿No tienes licencia? Puedes contratar patrón en casi todos.',
    thBoat: 'Barco',
    thPax: 'Pax',
    th1h: '1 h',
    th2h: '2 h',
    thHalf: 'Medio día (4 h)',
    thFull: 'Día completo (8 h)',
    th3d: '3 días',
    th7d: '7 días',
    seasonColHint: 'Rango de precio: temporada baja – temporada alta.',
    captainNote: '¹ Patrón obligatorio: +120€ medio día · +190€ día completo.',
    includesTitle: 'Qué incluye el precio',
    includes: [
      'Chalecos salvavidas para toda la tripulación',
      'Briefing de seguridad y manejo antes de salir',
      'Seguro de responsabilidad civil',
      'Equipo de seguridad reglamentario',
      'IVA incluido',
    ],
    excludesTitle: 'Qué no incluye',
    excludes: [
      'Combustible (consumo orientativo: 5–8 L/h)',
      'Patrón, salvo en el llaüt Justi Saura (obligatorio)',
      'Comida y bebida a bordo',
    ],
    seasonsTitle: 'Temporadas',
    seasonsLead:
      'El precio cambia según la época del año. Las fechas son orientativas; confírmalas al reservar.',
    seasons: [
      { name: 'Temporada baja', months: 'abril, mayo y octubre', note: 'Buen tiempo, mar tranquilo y menos gente en el agua. El mejor precio.' },
      { name: 'Temporada media', months: 'junio y septiembre', note: 'Entrada y salida del verano, temperaturas ideales y precio intermedio.' },
      { name: 'Temporada alta', months: 'julio y agosto', note: 'Pleno verano, días largos y atardeceres espectaculares. Reserva con antelación.' },
    ],
    sunsetTitle: 'Experiencia Sunset',
    sunsetText:
      'Salida al atardecer de 2–3 horas por la bahía de Roses, desde 160€ por grupo. La golden hour desde el agua, con la sierra de Rodes de fondo.',
    faqTitle: 'Preguntas frecuentes sobre precios',
    faq: [
      {
        q: '¿Cuánto cuesta alquilar un barco en Roses?',
        a: 'Desde 70€ la hora en un barco sin licencia para 4 personas. Si buscas un barco más grande o con licencia, desde 195€ el medio día. El precio final depende del barco, las horas y la temporada.',
      },
      {
        q: '¿Cuánta diferencia hay entre temporadas?',
        a: 'La temporada baja (abril, mayo, octubre) es sensiblemente más económica que la alta (julio y agosto); la media (junio y septiembre) queda entre ambas. Si buscas ahorrar sin renunciar a buen tiempo, junio y septiembre son la mejor relación.',
      },
      {
        q: '¿El combustible está incluido?',
        a: 'No, el combustible va aparte y se paga según el consumo real. Como referencia, un barco sin licencia gasta unos 5–8 litros por hora. Te explicamos el repostaje en el briefing.',
      },
      {
        q: '¿Necesito licencia para alquilar?',
        a: 'No para los barcos sin licencia (Dream Point, Remus, Marine Brezze): salen sin titulación tras el briefing. Para los barcos con licencia necesitas el PER/PNB o contratar patrón.',
      },
      {
        q: '¿Hay que dejar fianza?',
        a: 'Sí, se deja una fianza reembolsable que se devuelve al regreso si todo está correcto. El importe depende del barco; te lo confirmamos al reservar, sin sorpresas.',
      },
      {
        q: '¿Puedo contratar patrón?',
        a: 'Sí, en casi todos los barcos con licencia. El suplemento de patrón es de +120€ el medio día y +190€ el día completo. En el llaüt Justi Saura el patrón va siempre incluido en la experiencia.',
      },
    ],
    ctaTitle: 'Reserva tu salida',
    ctaText: 'Elige fecha y barco y confirma tu salida privada en la Marina de Santa Margarita.',
    ctaLabel: 'Consultar disponibilidad y reservar',
    relatedTitle: 'Sigue explorando',
    relatedSinLicencia: 'Alquiler de barco sin licencia en Roses',
    relatedConLicencia: 'Alquiler de barco con licencia en Roses',
    relatedExperiencias: 'Excursiones en barco en Roses',
  },

  fr: {
    metaTitle: 'Tarifs de location de bateau à Roses · dès 70€/h',
    metaDescription:
      'Tarifs clairs et sans surprise : bateau sans permis dès 70€/h et avec permis dès 195€ la demi-journée. TVA, briefing et assurance inclus. Roses, Costa Brava.',
    breadcrumbHome: 'Accueil',
    breadcrumbLabel: 'Tarifs et saisons',
    kicker: 'Tarifs transparents',
    h1: 'Tarifs de location de bateau à Roses',
    intro: [
      'Avant de réserver, vous voulez connaître le prix, et on préfère être clairs. Le tarif dépend de trois choses : le bateau, le nombre d’heures et la saison. Tout ce que vous voyez ici comprend les gilets, le briefing de sécurité, l’assurance responsabilité civile et la TVA. Seul le carburant est en supplément.',
      'On part de la Marina de Santa Margarita, à cinq minutes du centre de Roses, dans la baie la plus abritée du nord de la Costa Brava. Chaque sortie est privée : uniquement votre groupe à bord. Vous hésitez entre deux bateaux ou entre saison moyenne et haute ? Écrivez-nous, on vous aide à choisir.',
    ],
    sinLicenciaTitle: 'Bateaux sans permis',
    sinLicenciaLead:
      'Aucun permis nécessaire. On vous fait le briefing, vous prenez la barre et naviguez dans la baie et les criques proches. Parfaits pour les familles et les groupes qui sortent pour la première fois.',
    conLicenciaTitle: 'Bateaux avec permis',
    conLicenciaLead:
      'Avec votre permis côtier, vous allez plus loin : Cap de Creus, Cadaqués ou une journée de pêche. Pas de permis ? Un skipper est disponible sur presque tous.',
    thBoat: 'Bateau',
    thPax: 'Pers.',
    th1h: '1 h',
    th2h: '2 h',
    thHalf: 'Demi-journée (4 h)',
    thFull: 'Journée (8 h)',
    th3d: '3 jours',
    th7d: '7 jours',
    seasonColHint: 'Fourchette de prix : basse saison – haute saison.',
    captainNote: '¹ Skipper obligatoire : +120€ demi-journée · +190€ journée.',
    includesTitle: 'Ce que le tarif comprend',
    includes: [
      'Gilets de sauvetage pour tout l’équipage',
      'Briefing de sécurité et de prise en main avant le départ',
      'Assurance responsabilité civile',
      'Équipement de sécurité réglementaire',
      'TVA incluse',
    ],
    excludesTitle: 'Ce qui n’est pas compris',
    excludes: [
      'Carburant (consommation indicative : 5–8 L/h)',
      'Skipper, sauf sur le llaüt Justi Saura (obligatoire)',
      'Nourriture et boissons à bord',
    ],
    seasonsTitle: 'Saisons',
    seasonsLead:
      'Le tarif varie selon la période de l’année. Les dates sont indicatives ; confirmez-les à la réservation.',
    seasons: [
      { name: 'Basse saison', months: 'avril, mai et octobre', note: 'Beau temps, mer calme et moins de monde sur l’eau. Le meilleur prix.' },
      { name: 'Moyenne saison', months: 'juin et septembre', note: 'Début et fin d’été, températures idéales et tarif intermédiaire.' },
      { name: 'Haute saison', months: 'juillet et août', note: 'Plein été, longues journées et couchers de soleil spectaculaires. Réservez à l’avance.' },
    ],
    sunsetTitle: 'Expérience Sunset',
    sunsetText:
      'Sortie au coucher du soleil de 2–3 heures dans la baie de Roses, dès 160€ par groupe. La golden hour depuis l’eau, avec la sierra de Rodes en toile de fond.',
    faqTitle: 'Questions fréquentes sur les tarifs',
    faq: [
      {
        q: 'Combien coûte la location d’un bateau à Roses ?',
        a: 'Dès 70€ l’heure sur un bateau sans permis pour 4 personnes. Pour un bateau plus grand ou avec permis, dès 195€ la demi-journée. Le prix final dépend du bateau, des heures et de la saison.',
      },
      {
        q: 'Quelle différence entre les saisons ?',
        a: 'La basse saison (avril, mai, octobre) est nettement moins chère que la haute (juillet et août) ; la moyenne (juin et septembre) se situe entre les deux. Juin et septembre offrent le meilleur rapport qualité-prix.',
      },
      {
        q: 'Le carburant est-il inclus ?',
        a: 'Non, le carburant est en supplément et se paie selon la consommation réelle. À titre indicatif, un bateau sans permis consomme environ 5–8 litres par heure. On vous explique le ravitaillement lors du briefing.',
      },
      {
        q: 'Ai-je besoin d’un permis pour louer ?',
        a: 'Non pour les bateaux sans permis (Dream Point, Remus, Marine Brezze) : ils partent sans titre après le briefing. Pour les bateaux avec permis, vous avez besoin du permis côtier ou d’un skipper.',
      },
      {
        q: 'Faut-il laisser une caution ?',
        a: 'Oui, une caution remboursable est demandée et rendue au retour si tout est en ordre. Le montant dépend du bateau ; on vous le confirme à la réservation, sans surprise.',
      },
      {
        q: 'Puis-je réserver un skipper ?',
        a: 'Oui, sur presque tous les bateaux avec permis. Le supplément skipper est de +120€ la demi-journée et +190€ la journée. Sur le llaüt Justi Saura, le skipper est toujours inclus.',
      },
    ],
    ctaTitle: 'Réservez votre sortie',
    ctaText: 'Choisissez la date et le bateau et confirmez votre sortie privée à la Marina de Santa Margarita.',
    ctaLabel: 'Vérifier les disponibilités et réserver',
    relatedTitle: 'Continuez à explorer',
    relatedSinLicencia: 'Location de bateau sans permis à Roses',
    relatedConLicencia: 'Location de bateau avec permis à Roses',
    relatedExperiencias: 'Excursions en bateau à Roses',
  },

  en: {
    metaTitle: 'Boat rental prices in Roses · from €70/h',
    metaDescription:
      'Clear pricing, no surprises: boat without licence from €70/h and with licence from €195 per half-day. VAT, briefing and insurance included. Roses, Costa Brava.',
    breadcrumbHome: 'Home',
    breadcrumbLabel: 'Prices & seasons',
    kicker: 'Transparent pricing',
    h1: 'Boat rental prices in Roses',
    intro: [
      'Before booking you want to know the price, and we’d rather be upfront. The rate depends on three things: the boat, how many hours you sail and the season. Everything you see here includes life jackets, the safety briefing, civil-liability insurance and VAT. The only extra is fuel.',
      'We depart from Marina de Santa Margarita, five minutes from the centre of Roses, in the most sheltered bay of the northern Costa Brava. Every outing is private — only your group on board. Torn between two boats, or between mid and high season? Message us and we’ll help you choose.',
    ],
    sinLicenciaTitle: 'Boats without licence',
    sinLicenciaLead:
      'No licence needed. We give you the briefing, you take the helm and sail the bay and nearby coves. Ideal for families and groups heading out for the first time.',
    conLicenciaTitle: 'Boats with licence',
    conLicenciaLead:
      'With your licence you reach further: Cap de Creus, Cadaqués or a day’s fishing. No licence? A skipper is available on almost all of them.',
    thBoat: 'Boat',
    thPax: 'Guests',
    th1h: '1 h',
    th2h: '2 h',
    thHalf: 'Half-day (4 h)',
    thFull: 'Full day (8 h)',
    th3d: '3 days',
    th7d: '7 days',
    seasonColHint: 'Price range: low season – high season.',
    captainNote: '¹ Skipper mandatory: +€120 half-day · +€190 full day.',
    includesTitle: 'What the price includes',
    includes: [
      'Life jackets for the whole crew',
      'Safety and handling briefing before departure',
      'Civil-liability insurance',
      'Regulation safety equipment',
      'VAT included',
    ],
    excludesTitle: 'What’s not included',
    excludes: [
      'Fuel (indicative use: 5–8 L/h)',
      'Skipper, except on the Justi Saura llaüt (mandatory)',
      'Food and drink on board',
    ],
    seasonsTitle: 'Seasons',
    seasonsLead:
      'The price changes with the time of year. Dates are approximate; confirm them when booking.',
    seasons: [
      { name: 'Low season', months: 'April, May and October', note: 'Good weather, calm sea and fewer boats out. The best price.' },
      { name: 'Mid season', months: 'June and September', note: 'Start and end of summer, ideal temperatures and a mid-range rate.' },
      { name: 'High season', months: 'July and August', note: 'Peak summer, long days and spectacular sunsets. Book ahead.' },
    ],
    sunsetTitle: 'Sunset Experience',
    sunsetText:
      'A 2–3 hour sunset cruise around the bay of Roses, from €160 per group. Golden hour from the water, with the Rodes range behind you.',
    faqTitle: 'Frequently asked pricing questions',
    faq: [
      {
        q: 'How much does it cost to rent a boat in Roses?',
        a: 'From €70 an hour on a licence-free boat for 4 people. For a bigger or licensed boat, from €195 per half-day. The final price depends on the boat, the hours and the season.',
      },
      {
        q: 'How much do seasons differ?',
        a: 'Low season (April, May, October) is noticeably cheaper than high season (July and August); mid season (June and September) sits in between. June and September offer the best value without giving up good weather.',
      },
      {
        q: 'Is fuel included?',
        a: 'No, fuel is separate and paid according to actual use. As a guide, a licence-free boat uses around 5–8 litres per hour. We explain refuelling during the briefing.',
      },
      {
        q: 'Do I need a licence to rent?',
        a: 'Not for the licence-free boats (Dream Point, Remus, Marine Brezze): they go out with no qualification after the briefing. For licensed boats you need a coastal licence or a skipper.',
      },
      {
        q: 'Is there a deposit?',
        a: 'Yes, a refundable deposit is taken and returned on your return if everything is in order. The amount depends on the boat; we confirm it when booking, with no surprises.',
      },
      {
        q: 'Can I hire a skipper?',
        a: 'Yes, on almost all licensed boats. The skipper supplement is +€120 for a half-day and +€190 for a full day. On the Justi Saura llaüt the skipper is always included.',
      },
    ],
    ctaTitle: 'Book your outing',
    ctaText: 'Pick a date and a boat and confirm your private outing at Marina de Santa Margarita.',
    ctaLabel: 'Check availability and book',
    relatedTitle: 'Keep exploring',
    relatedSinLicencia: 'Boat rental without licence in Roses',
    relatedConLicencia: 'Boat rental with licence in Roses',
    relatedExperiencias: 'Boat trips in Roses',
  },

  ca: {
    metaTitle: 'Preus de lloguer de vaixell a Roses · des de 70€/h',
    metaDescription:
      'Preus clars i sense sorpreses: vaixell sense llicència des de 70€/h i amb llicència des de 195€ el mig dia. IVA, briefing i assegurança inclosos. Roses.',
    breadcrumbHome: 'Inici',
    breadcrumbLabel: 'Preus i temporades',
    kicker: 'Tarifes transparents',
    h1: 'Preus de lloguer de vaixell a Roses',
    intro: [
      'Abans de reservar vols saber quant costa, i nosaltres ho preferim dir clar. El preu depèn de tres coses: el vaixell, quantes hores navegues i la temporada. Tot el que veus aquí inclou armilles, briefing de seguretat, assegurança de responsabilitat civil i IVA. L’únic a part és el combustible.',
      'Sortim de la Marina de Santa Margarida, a cinc minuts del centre de Roses, a la badia més arrecerada del nord de la Costa Brava. Cada sortida és privada: només el teu grup a bord. Dubtes entre un vaixell i un altre, o entre temporada mitjana i alta? Escriu-nos i t’ajudem a triar.',
    ],
    sinLicenciaTitle: 'Vaixells sense llicència',
    sinLicenciaLead:
      'No necessites titulació. Et fem el briefing, agafes el timó i navegues per la badia i les cales properes. Ideals per a famílies i grups que surten per primera vegada.',
    conLicenciaTitle: 'Vaixells amb llicència',
    conLicenciaLead:
      'Amb el teu títol arribes més lluny: Cap de Creus, Cadaqués o una jornada de pesca. No tens llicència? Pots contractar patró en gairebé tots.',
    thBoat: 'Vaixell',
    thPax: 'Pax',
    th1h: '1 h',
    th2h: '2 h',
    thHalf: 'Mig dia (4 h)',
    thFull: 'Dia complet (8 h)',
    th3d: '3 dies',
    th7d: '7 dies',
    seasonColHint: 'Franja de preu: temporada baixa – temporada alta.',
    captainNote: '¹ Patró obligatori: +120€ mig dia · +190€ dia complet.',
    includesTitle: 'Què inclou el preu',
    includes: [
      'Armilles salvavides per a tota la tripulació',
      'Briefing de seguretat i maneig abans de sortir',
      'Assegurança de responsabilitat civil',
      'Equip de seguretat reglamentari',
      'IVA inclòs',
    ],
    excludesTitle: 'Què no inclou',
    excludes: [
      'Combustible (consum orientatiu: 5–8 L/h)',
      'Patró, excepte al llaüt Justi Saura (obligatori)',
      'Menjar i beguda a bord',
    ],
    seasonsTitle: 'Temporades',
    seasonsLead:
      'El preu canvia segons l’època de l’any. Les dates són orientatives; confirma-les en reservar.',
    seasons: [
      { name: 'Temporada baixa', months: 'abril, maig i octubre', note: 'Bon temps, mar tranquil·la i menys gent a l’aigua. El millor preu.' },
      { name: 'Temporada mitjana', months: 'juny i setembre', note: 'Entrada i sortida de l’estiu, temperatures ideals i preu intermedi.' },
      { name: 'Temporada alta', months: 'juliol i agost', note: 'Ple estiu, dies llargs i postes de sol espectaculars. Reserva amb antelació.' },
    ],
    sunsetTitle: 'Experiència Sunset',
    sunsetText:
      'Sortida al capvespre de 2–3 hores per la badia de Roses, des de 160€ per grup. La golden hour des de l’aigua, amb la serra de Rodes de fons.',
    faqTitle: 'Preguntes freqüents sobre preus',
    faq: [
      {
        q: 'Quant costa llogar un vaixell a Roses?',
        a: 'Des de 70€ l’hora en un vaixell sense llicència per a 4 persones. Si busques un vaixell més gran o amb llicència, des de 195€ el mig dia. El preu final depèn del vaixell, les hores i la temporada.',
      },
      {
        q: 'Quina diferència hi ha entre temporades?',
        a: 'La temporada baixa (abril, maig, octubre) és força més econòmica que l’alta (juliol i agost); la mitjana (juny i setembre) queda entremig. Juny i setembre ofereixen la millor relació qualitat-preu.',
      },
      {
        q: 'El combustible està inclòs?',
        a: 'No, el combustible va a part i es paga segons el consum real. Com a referència, un vaixell sense llicència gasta uns 5–8 litres per hora. T’expliquem el repostatge al briefing.',
      },
      {
        q: 'Necessito llicència per llogar?',
        a: 'No per als vaixells sense llicència (Dream Point, Remus, Marine Brezze): surten sense titulació després del briefing. Per als vaixells amb llicència necessites el títol costaner o contractar patró.',
      },
      {
        q: 'Cal deixar fiança?',
        a: 'Sí, es deixa una fiança reemborsable que es retorna en tornar si tot està correcte. L’import depèn del vaixell; t’ho confirmem en reservar, sense sorpreses.',
      },
      {
        q: 'Puc contractar patró?',
        a: 'Sí, en gairebé tots els vaixells amb llicència. El suplement de patró és de +120€ el mig dia i +190€ el dia complet. Al llaüt Justi Saura el patró va sempre inclòs.',
      },
    ],
    ctaTitle: 'Reserva la teva sortida',
    ctaText: 'Tria data i vaixell i confirma la teva sortida privada a la Marina de Santa Margarida.',
    ctaLabel: 'Consultar disponibilitat i reservar',
    relatedTitle: 'Continua explorant',
    relatedSinLicencia: 'Lloguer de vaixell sense llicència a Roses',
    relatedConLicencia: 'Lloguer de vaixell amb llicència a Roses',
    relatedExperiencias: 'Excursions en vaixell a Roses',
  },
};
