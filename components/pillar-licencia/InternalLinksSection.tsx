import { ChevronRight, Ship, Users } from 'lucide-react';

const translations = {
  es: {
    experiencesHref: '/experiencias-barco-roses',
    noLicenceHref: '/alquiler-barco-sin-licencia-roses',
    skipperKicker: '¿Prefieres salir con patrón?',
    skipperTitle: 'Excursiones privadas con patrón',
    skipperDesc:
      'Si tienes licencia pero prefieres que alguien más se encargue del barco para disfrutar al máximo, también tenemos esa opción. Salen desde los mismos canales de Santa Margarita.',
    skipperCta: 'Ver excursiones privadas con patrón',
    noLicenceKicker: 'Sin titulación náutica',
    noLicenceTitle: 'Alquiler de barco sin licencia',
    noLicenceDesc:
      'Si alguien de tu grupo no tiene titulación náutica, no hay problema. Tenemos embarcaciones sin licencia perfectas para cualquier perfil, desde debutantes hasta grupos mixtos.',
    noLicenceCta: 'Ver barcos sin licencia',
  },
  en: {
    experiencesHref: '/en/boat-experiences-roses',
    noLicenceHref: '/en/boat-rental-without-licence-roses',
    skipperKicker: 'Rather have a skipper aboard?',
    skipperTitle: 'Private trips with a skipper',
    skipperDesc:
      'If you hold a licence but would rather someone else handle the boat so you can just enjoy the day, that’s an option too. These trips leave from the same Santa Margarita canals.',
    skipperCta: 'See private trips with a skipper',
    noLicenceKicker: 'No boat licence needed',
    noLicenceTitle: 'Boat rental without a licence',
    noLicenceDesc:
      'If someone in your group doesn’t have a boat licence, no problem. We have licence-free boats that suit any group, from first-timers to mixed crews.',
    noLicenceCta: 'See licence-free boats',
  },
  fr: {
    experiencesHref: '/fr/experiences-bateau-roses',
    noLicenceHref: '/fr/location-bateau-sans-permis-roses',
    skipperKicker: 'Vous préférez partir avec un skipper ?',
    skipperTitle: 'Sorties privées avec skipper',
    skipperDesc:
      'Si vous avez le permis mais préférez que quelqu’un s’occupe du bateau pour profiter à fond, c’est possible aussi. Ces sorties partent des mêmes canaux de Santa Margarita.',
    skipperCta: 'Voir les sorties privées avec skipper',
    noLicenceKicker: 'Sans permis bateau',
    noLicenceTitle: 'Location de bateau sans permis',
    noLicenceDesc:
      'Si quelqu’un de votre groupe n’a pas le permis, aucun souci. Nous avons des bateaux sans permis parfaits pour tous les profils, des débutants aux groupes mixtes.',
    noLicenceCta: 'Voir les bateaux sans permis',
  },
  ca: {
    experiencesHref: '/ca/experiencies-vaixell-roses',
    noLicenceHref: '/ca/lloguer-vaixell-sense-llicencia-roses',
    skipperKicker: 'Preferiu sortir amb patró?',
    skipperTitle: 'Excursions privades amb patró',
    skipperDesc:
      'Si teniu llicència però preferiu que algú altre s’encarregui del vaixell per gaudir al màxim, també tenim aquesta opció. Surten des dels mateixos canals de Santa Margarida.',
    skipperCta: 'Veure excursions privades amb patró',
    noLicenceKicker: 'Sense titulació nàutica',
    noLicenceTitle: 'Lloguer de vaixell sense llicència',
    noLicenceDesc:
      'Si algú del vostre grup no té titulació nàutica, cap problema. Tenim embarcacions sense llicència perfectes per a qualsevol perfil, des de debutants fins a grups mixtos.',
    noLicenceCta: 'Veure vaixells sense llicència',
  },
};

interface InternalLinksSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function InternalLinksSection({ lang = 'es' }: InternalLinksSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Excursiones con patrón */}
          <a
            href={t.experiencesHref}
            className="group flex gap-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-7 text-white hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-xl anim-fade-right"
          >
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <p className="text-sky-300 text-xs font-semibold uppercase tracking-wider mb-1">{t.skipperKicker}</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">
                {t.skipperTitle}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.skipperDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sky-300 font-semibold text-sm group-hover:gap-2 transition-all">
                {t.skipperCta} <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Alquiler sin licencia */}
          <a
            href={t.noLicenceHref}
            className="group flex gap-5 bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl p-7 text-white hover:from-sky-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-sky-500/20 anim-fade-left anim-delay-1"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sky-100 text-xs font-semibold uppercase tracking-wider mb-1">{t.noLicenceKicker}</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">
                {t.noLicenceTitle}
              </h3>
              <p className="text-sky-100 text-sm leading-relaxed mb-4">
                {t.noLicenceDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-white font-semibold text-sm group-hover:gap-2 transition-all">
                {t.noLicenceCta} <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
