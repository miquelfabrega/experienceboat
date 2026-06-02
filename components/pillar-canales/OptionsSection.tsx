import { ChevronRight, Ship, Users, Sailboat } from 'lucide-react';
import { localizedHref } from '@/lib/i18n/routes';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  intro: string;
  options: {
    iconKey: 'ship' | 'users' | 'sailboat';
    tagColor: string;
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    hrefId: 'rentalWithoutLicence' | 'experiences' | 'rentalWithLicence';
    cta: string;
    gradient: string;
    shadowColor: string;
    hoverGradient: string;
  }[];
}> = {
  es: {
    eyebrow: 'Reserva tu salida',
    h2: 'Canales de Santa Margarita en barco — opciones disponibles',
    intro:
      'Puedes explorar los canales de Santa Margarita de tres maneras distintas según tu experiencia y lo que busques.',
    options: [
      {
        iconKey: 'ship',
        tagColor: 'bg-sky-100 text-sky-700',
        badge: 'Más popular',
        title: 'Barco sin licencia',
        subtitle: 'Explora los canales a tu ritmo',
        desc: 'La opción más popular para familias y grupos sin experiencia náutica. Nuestros barcos sin licencia son perfectos para navegar por los canales interiores y la bahía de Roses. No necesitas titulación, no necesitas experiencia previa. Salís solos y marcáis el ritmo vosotros.',
        hrefId: 'rentalWithoutLicence',
        cta: 'Ver barcos sin licencia',
        gradient: 'from-sky-600 to-cyan-500',
        shadowColor: 'shadow-sky-500/20',
        hoverGradient: 'hover:from-sky-500 hover:to-cyan-400',
      },
      {
        iconKey: 'users',
        tagColor: 'bg-slate-100 text-slate-700',
        badge: 'Experiencia completa',
        title: 'Experiencias en barco en Roses',
        subtitle: 'DÉJATE LLEVAR',
        desc: 'Salidas privadas desde los canales de Santa Margarita. Salvador se encarga de la navegación — tú solo de disfrutar. El Cap de Creus, la bahía de Roses y las calas más vírgenes de la Costa Brava, solo para tu grupo.',
        hrefId: 'experiences',
        cta: 'Ver experiencias →',
        gradient: 'from-slate-900 to-slate-800',
        shadowColor: 'shadow-slate-900/20',
        hoverGradient: 'hover:from-slate-800 hover:to-slate-700',
      },
      {
        iconKey: 'sailboat',
        tagColor: 'bg-teal-100 text-teal-700',
        badge: 'Total libertad',
        title: 'Barco con licencia',
        subtitle: 'Para navegantes con titulación',
        desc: 'Si tienes licencia náutica y quieres total libertad de ruta, nuestras embarcaciones con licencia te permiten salir desde los canales y llegar tan lejos como quieras. La Costa Brava norte está a tu disposición.',
        hrefId: 'rentalWithLicence',
        cta: 'Ver barcos con licencia',
        gradient: 'from-teal-600 to-emerald-500',
        shadowColor: 'shadow-teal-500/20',
        hoverGradient: 'hover:from-teal-500 hover:to-emerald-400',
      },
    ],
  },
  fr: {
    eyebrow: 'Réservez votre sortie',
    h2: 'Les canaux de Santa Margarita en bateau — options disponibles',
    intro:
      'Vous pouvez explorer les canaux de Santa Margarita de trois façons différentes selon votre expérience et ce que vous recherchez.',
    options: [
      {
        iconKey: 'ship',
        tagColor: 'bg-sky-100 text-sky-700',
        badge: 'Le plus populaire',
        title: 'Bateau sans permis',
        subtitle: 'Explorez les canaux à votre rythme',
        desc: 'L\'option la plus prisée des familles et des groupes sans expérience nautique. Nos bateaux sans permis sont parfaits pour naviguer dans les canaux intérieurs et la baie de Roses. Aucun permis requis, aucune expérience préalable nécessaire. Vous partez seuls et fixez votre propre rythme.',
        hrefId: 'rentalWithoutLicence',
        cta: 'Voir les bateaux sans permis',
        gradient: 'from-sky-600 to-cyan-500',
        shadowColor: 'shadow-sky-500/20',
        hoverGradient: 'hover:from-sky-500 hover:to-cyan-400',
      },
      {
        iconKey: 'users',
        tagColor: 'bg-slate-100 text-slate-700',
        badge: 'Expérience complète',
        title: 'Expériences en bateau à Roses',
        subtitle: 'LAISSEZ-VOUS GUIDER',
        desc: 'Sorties privées au départ des canaux de Santa Margarita. Salvador s\'occupe de la navigation — vous n\'avez qu\'à profiter. Le Cap de Creus, la baie de Roses et les criques les plus sauvages de la Costa Brava, rien que pour votre groupe.',
        hrefId: 'experiences',
        cta: 'Voir les expériences →',
        gradient: 'from-slate-900 to-slate-800',
        shadowColor: 'shadow-slate-900/20',
        hoverGradient: 'hover:from-slate-800 hover:to-slate-700',
      },
      {
        iconKey: 'sailboat',
        tagColor: 'bg-teal-100 text-teal-700',
        badge: 'Liberté totale',
        title: 'Bateau avec permis',
        subtitle: 'Pour les navigateurs diplômés',
        desc: 'Si vous possédez un permis bateau et souhaitez une liberté totale d\'itinéraire, nos embarcations avec permis vous permettent de partir des canaux et d\'aller aussi loin que vous le désirez. La Costa Brava nord est à votre disposition.',
        hrefId: 'rentalWithLicence',
        cta: 'Voir les bateaux avec permis',
        gradient: 'from-teal-600 to-emerald-500',
        shadowColor: 'shadow-teal-500/20',
        hoverGradient: 'hover:from-teal-500 hover:to-emerald-400',
      },
    ],
  },
  en: {
    eyebrow: 'Book your trip',
    h2: 'The Santa Margarita canals by boat — available options',
    intro:
      'You can explore the Santa Margarita canals in three different ways depending on your experience and what you are looking for.',
    options: [
      {
        iconKey: 'ship',
        tagColor: 'bg-sky-100 text-sky-700',
        badge: 'Most popular',
        title: 'Boat without a licence',
        subtitle: 'Explore the canals at your own pace',
        desc: 'The most popular option for families and groups with no boating experience. Our licence-free boats are perfect for cruising the inner canals and the Bay of Roses. No licence required, no prior experience needed. You head out on your own and set your own pace.',
        hrefId: 'rentalWithoutLicence',
        cta: 'See licence-free boats',
        gradient: 'from-sky-600 to-cyan-500',
        shadowColor: 'shadow-sky-500/20',
        hoverGradient: 'hover:from-sky-500 hover:to-cyan-400',
      },
      {
        iconKey: 'users',
        tagColor: 'bg-slate-100 text-slate-700',
        badge: 'Full experience',
        title: 'Boat experiences in Roses',
        subtitle: 'SIT BACK AND ENJOY',
        desc: 'Private trips from the Santa Margarita canals. Salvador takes care of the navigation — you just enjoy the ride. Cap de Creus, the Bay of Roses and the most unspoilt coves on the Costa Brava, just for your group.',
        hrefId: 'experiences',
        cta: 'See experiences →',
        gradient: 'from-slate-900 to-slate-800',
        shadowColor: 'shadow-slate-900/20',
        hoverGradient: 'hover:from-slate-800 hover:to-slate-700',
      },
      {
        iconKey: 'sailboat',
        tagColor: 'bg-teal-100 text-teal-700',
        badge: 'Total freedom',
        title: 'Boat with a licence',
        subtitle: 'For qualified skippers',
        desc: 'If you hold a boating licence and want complete freedom of route, our licensed boats let you set off from the canals and go as far as you like. The northern Costa Brava is at your disposal.',
        hrefId: 'rentalWithLicence',
        cta: 'See licensed boats',
        gradient: 'from-teal-600 to-emerald-500',
        shadowColor: 'shadow-teal-500/20',
        hoverGradient: 'hover:from-teal-500 hover:to-emerald-400',
      },
    ],
  },
  ca: {
    eyebrow: 'Reserva la teva sortida',
    h2: 'Canals de Santa Margarida en vaixell — opcions disponibles',
    intro:
      'Podeu explorar els canals de Santa Margarida de tres maneres diferents segons la vostra experiència i el que busqueu.',
    options: [
      {
        iconKey: 'ship',
        tagColor: 'bg-sky-100 text-sky-700',
        badge: 'Més popular',
        title: 'Vaixell sense llicència',
        subtitle: 'Explora els canals al teu ritme',
        desc: 'L\'opció més popular per a famílies i grups sense experiència nàutica. Els nostres vaixells sense llicència són perfectes per navegar pels canals interiors i la badia de Roses. No necessiteu titulació, no necessiteu experiència prèvia. Sortiu sols i marqueu el ritme vosaltres.',
        hrefId: 'rentalWithoutLicence',
        cta: 'Veure vaixells sense llicència',
        gradient: 'from-sky-600 to-cyan-500',
        shadowColor: 'shadow-sky-500/20',
        hoverGradient: 'hover:from-sky-500 hover:to-cyan-400',
      },
      {
        iconKey: 'users',
        tagColor: 'bg-slate-100 text-slate-700',
        badge: 'Experiència completa',
        title: 'Experiències en vaixell a Roses',
        subtitle: 'DEIXEU-VOS PORTAR',
        desc: 'Sortides privades des dels canals de Santa Margarida. En Salvador s\'encarrega de la navegació — vosaltres només de gaudir. El Cap de Creus, la badia de Roses i les cales més verges de la Costa Brava, només per al vostre grup.',
        hrefId: 'experiences',
        cta: 'Veure experiències →',
        gradient: 'from-slate-900 to-slate-800',
        shadowColor: 'shadow-slate-900/20',
        hoverGradient: 'hover:from-slate-800 hover:to-slate-700',
      },
      {
        iconKey: 'sailboat',
        tagColor: 'bg-teal-100 text-teal-700',
        badge: 'Llibertat total',
        title: 'Vaixell amb llicència',
        subtitle: 'Per a navegants amb titulació',
        desc: 'Si teniu llicència nàutica i voleu total llibertat de ruta, les nostres embarcacions amb llicència us permeten sortir dels canals i arribar tan lluny com vulgueu. La Costa Brava nord està a la vostra disposició.',
        hrefId: 'rentalWithLicence',
        cta: 'Veure vaixells amb llicència',
        gradient: 'from-teal-600 to-emerald-500',
        shadowColor: 'shadow-teal-500/20',
        hoverGradient: 'hover:from-teal-500 hover:to-emerald-400',
      },
    ],
  },
};

const iconMap = { ship: Ship, users: Users, sailboat: Sailboat };

export default function OptionsSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section id="opciones" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{c.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {c.h2}
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          {c.intro}
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {c.options.map((option) => {
            const Icon = iconMap[option.iconKey];
            return (
              <a
                key={option.title}
                href={localizedHref(option.hrefId, lang)}
                className={`group flex flex-col bg-gradient-to-br ${option.gradient} ${option.hoverGradient} rounded-3xl p-7 text-white transition-all duration-300 shadow-xl ${option.shadowColor} hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${option.tagColor}`}>
                    {option.badge}
                  </span>
                </div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
                  {option.subtitle}
                </p>
                <h3 className="font-bold text-xl mb-3 leading-snug">{option.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">{option.desc}</p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                  {option.cta}
                  {!option.cta.trim().endsWith('→') ? <ChevronRight className="w-4 h-4" /> : null}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
