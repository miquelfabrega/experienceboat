import { Anchor, Compass, Wrench, MessageCircle } from 'lucide-react';

const translations = {
  es: {
    label: 'Nuestra diferencia',
    title: '¿Por qué alquilar con licencia en Experience Boat?',
    subtitle: 'Cuatro razones por las que nuestros clientes repiten temporada tras temporada.',
    reasons: [
      {
        icon: Anchor,
        title: 'Salida desde Santa Margarita',
        desc: 'Partimos desde los canales de Santa Margarita, un enclave único en la Costa Brava. No saldrás desde un puerto masificado — saldrás desde uno de los rincones más singulares de Roses.',
        highlight: 'Propuesta de valor única',
      },
      {
        icon: Compass,
        title: 'Zona de navegación excepcional',
        desc: 'La bahía de Roses y el Parque Natural del Cap de Creus son dos de los entornos náuticos más valorados del Mediterráneo occidental. Aguas protegidas, calas vírgenes y paisaje de referencia.',
        highlight: 'Cap de Creus a 45 min',
      },
      {
        icon: Wrench,
        title: 'Flota bien mantenida',
        desc: 'Nuestras embarcaciones no son nuevas, pero están en perfectas condiciones de uso. Funcionales, seguras y adecuadas para el tipo de navegación que ofrece la zona.',
        highlight: 'Seguridad garantizada',
      },
      {
        icon: MessageCircle,
        title: 'Reserva directa sin intermediarios',
        desc: 'Hablas con Tomàs o Max directamente, y si necesitas ajustar algo — fecha, duración, modelo — lo resolvemos sin burocracia.',
        highlight: 'Atención personalizada',
      },
    ],
  },
  en: {
    label: 'What sets us apart',
    title: 'Why rent with a licence at Experience Boat?',
    subtitle: 'Four reasons our guests come back season after season.',
    reasons: [
      {
        icon: Anchor,
        title: 'Departing from Santa Margarita',
        desc: 'We cast off from the Santa Margarita canals, a spot you won’t find anywhere else on the Costa Brava. No packed harbour — you leave from one of the quietest corners of Roses.',
        highlight: 'Where nobody else starts',
      },
      {
        icon: Compass,
        title: 'Exceptional cruising ground',
        desc: 'The Bay of Roses and the Cap de Creus Natural Park are two of the most prized sailing areas in the western Mediterranean. Sheltered water, unspoilt coves and a landscape that sets the standard.',
        highlight: 'Cap de Creus in 45 min',
      },
      {
        icon: Wrench,
        title: 'A well-kept fleet',
        desc: 'Our boats aren’t brand new, but they’re in perfect working order. Practical, safe and suited to the kind of sailing this coast asks for.',
        highlight: 'Safety comes first',
      },
      {
        icon: MessageCircle,
        title: 'Book direct, no middlemen',
        desc: 'You talk to Salvador and the team directly, and if you need to tweak something — the date, the hours, the boat — we sort it out without any red tape.',
        highlight: 'A real person answers',
      },
    ],
  },
  fr: {
    label: 'Notre différence',
    title: 'Pourquoi louer avec permis chez Experience Boat ?',
    subtitle: 'Quatre raisons pour lesquelles nos clients reviennent saison après saison.',
    reasons: [
      {
        icon: Anchor,
        title: 'Départ depuis Santa Margarita',
        desc: 'Nous partons des canaux de Santa Margarita, un endroit unique sur la Costa Brava. Pas de port bondé — vous larguez les amarres depuis l’un des coins les plus tranquilles de Roses.',
        highlight: 'Un départ à part',
      },
      {
        icon: Compass,
        title: 'Une zone de navigation exceptionnelle',
        desc: 'La baie de Roses et le parc naturel du Cap de Creus comptent parmi les plans d’eau les plus appréciés de la Méditerranée occidentale. Eaux abritées, criques préservées et un paysage de référence.',
        highlight: 'Cap de Creus à 45 min',
      },
      {
        icon: Wrench,
        title: 'Une flotte bien entretenue',
        desc: 'Nos bateaux ne sont pas neufs, mais ils sont en parfait état de marche. Pratiques, sûrs et adaptés au type de navigation qu’offre cette côte.',
        highlight: 'La sécurité d’abord',
      },
      {
        icon: MessageCircle,
        title: 'Réservation directe, sans intermédiaire',
        desc: 'Vous échangez directement avec Salvador et l’équipe, et si vous devez ajuster quelque chose — la date, la durée, le modèle — on le règle sans paperasse.',
        highlight: 'Une vraie personne vous répond',
      },
    ],
  },
  ca: {
    label: 'La nostra diferència',
    title: 'Per què llogar amb llicència a Experience Boat?',
    subtitle: 'Quatre raons per les quals els nostres clients repeteixen temporada rere temporada.',
    reasons: [
      {
        icon: Anchor,
        title: 'Sortida des de Santa Margarida',
        desc: 'Salpem des dels canals de Santa Margarida, un indret únic a la Costa Brava. No sortireu d’un port massificat — salpareu des d’un dels racons més tranquils de Roses.',
        highlight: 'Un punt de sortida diferent',
      },
      {
        icon: Compass,
        title: 'Una zona de navegació excepcional',
        desc: 'La badia de Roses i el Parc Natural del Cap de Creus són dos dels entorns nàutics més valorats de la Mediterrània occidental. Aigües arrecerades, cales verges i un paisatge de referència.',
        highlight: 'Cap de Creus a 45 min',
      },
      {
        icon: Wrench,
        title: 'Una flota ben mantinguda',
        desc: 'Les nostres embarcacions no són noves, però estan en perfectes condicions d’ús. Funcionals, segures i adequades per al tipus de navegació que ofereix aquesta costa.',
        highlight: 'La seguretat primer',
      },
      {
        icon: MessageCircle,
        title: 'Reserva directa, sense intermediaris',
        desc: 'Parleu directament amb en Salvador i l’equip, i si heu d’ajustar alguna cosa — la data, la durada, el model — ho resolem sense burocràcia.',
        highlight: 'Us respon una persona de veritat',
      },
    ],
  },
};

interface WhyUsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function WhyUsSection({ lang = 'es' }: WhyUsSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{t.label}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
          {t.subtitle}
        </p>

        <div className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="anim-stagger bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center mb-4 transition-colors shadow-md shadow-sky-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-sky-600 font-semibold uppercase tracking-wider mb-2 block">
                  {reason.highlight}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
