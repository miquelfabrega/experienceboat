import Link from 'next/link';
import { Ship, ChevronRight } from 'lucide-react';

const translations = {
  es: {
    title: '¿Prefieres llevar tú el barco?',
    desc: 'Si tienes ganas de llevar el timón y explorar la zona a tu ritmo, también tenemos esa opción. Nuestros barcos de alquiler — con o sin licencia — salen desde los mismos canales de Santa Margarita y llegan a los mismos destinos.',
    noLicenceHref: '/alquiler-barco-sin-licencia-roses',
    noLicenceCta: 'Ver alquiler de barco sin licencia',
    withLicenceHref: '/alquiler-barco-con-licencia-roses',
    withLicenceCta: 'Ver alquiler de barco con licencia',
  },
  en: {
    title: 'Rather skipper the boat yourself?',
    desc: 'If you fancy taking the helm and exploring the area at your own pace, that’s an option too. Our rental boats — with or without a licence — leave from the same Santa Margarita canals and reach the same destinations.',
    noLicenceHref: '/en/boat-rental-without-licence-roses',
    noLicenceCta: 'See boat rental without a licence',
    withLicenceHref: '/en/boat-rental-with-licence-roses',
    withLicenceCta: 'See boat rental with a licence',
  },
  fr: {
    title: 'Vous préférez barrer vous-même ?',
    desc: 'Si vous avez envie de tenir la barre et d’explorer la zone à votre rythme, c’est possible aussi. Nos bateaux de location — avec ou sans permis — partent des mêmes canaux de Santa Margarita et rejoignent les mêmes destinations.',
    noLicenceHref: '/fr/location-bateau-sans-permis-roses',
    noLicenceCta: 'Voir la location de bateau sans permis',
    withLicenceHref: '/fr/location-bateau-avec-permis-roses',
    withLicenceCta: 'Voir la location de bateau avec permis',
  },
  ca: {
    title: 'Preferiu portar vosaltres el vaixell?',
    desc: 'Si teniu ganes de portar el timó i explorar la zona al vostre ritme, també tenim aquesta opció. Els nostres vaixells de lloguer — amb o sense llicència — surten dels mateixos canals de Santa Margarida i arriben als mateixos destins.',
    noLicenceHref: '/ca/lloguer-vaixell-sense-llicencia-roses',
    noLicenceCta: 'Veure el lloguer de vaixell sense llicència',
    withLicenceHref: '/ca/lloguer-vaixell-amb-llicencia-roses',
    withLicenceCta: 'Veure el lloguer de vaixell amb llicència',
  },
};

interface RentAlternativeSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function RentAlternativeSection({ lang = 'es' }: RentAlternativeSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
          <Ship className="w-8 h-8 text-sky-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          {t.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={t.noLicenceHref}
            className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 group"
          >
            {t.noLicenceCta}
            <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={t.withLicenceHref}
            className="flex items-center justify-center gap-2 bg-sky-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-400/30 group"
          >
            {t.withLicenceCta}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
