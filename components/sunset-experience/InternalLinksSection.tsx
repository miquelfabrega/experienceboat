import Link from 'next/link';
import { ArrowRight, Compass, Key, Anchor } from 'lucide-react';

const translations = {
  es: {
    heading: 'También te puede interesar',
    links: [
      {
        title: 'Excursiones privadas de día',
        desc: 'Para explorar el Cap de Creus y las calas más espectaculares de la Costa Brava norte con toda la jornada por delante.',
        href: '/experiencias-barco-roses',
        icon: Compass,
      },
      {
        title: 'Alquiler sin licencia',
        desc: 'Para quienes quieren salir a su ritmo sin patrón y sin necesidad de titulación náutica.',
        href: '/alquiler-barco-sin-licencia-roses',
        icon: Key,
      },
      {
        title: 'Los canales de Santa Margarita',
        desc: 'Si el recorrido nocturno por los canales te ha llamado la atención, descubre todo lo que esconden en su versión de día.',
        href: '/canales-santa-margarita',
        icon: Anchor,
      },
    ]
  },
  fr: {
    heading: 'Cela pourrait aussi vous intéresser',
    links: [
      {
        title: 'Excursions privées de jour',
        desc: 'Pour explorer le Cap de Creus et les criques les plus spectaculaires de la Côte Brava nord avec toute la journée devant vous.',
        href: '/fr/experiences-bateau-roses',
        icon: Compass,
      },
      {
        title: 'Location sans permis',
        desc: 'Pour ceux qui veulent sortir à leur propre rythme sans skipper et sans permis nautique.',
        href: '/fr/location-bateau-sans-permis-roses',
        icon: Key,
      },
      {
        title: 'Les canaux de Santa Margarita',
        desc: 'Si la visite nocturne des canaux vous a intéressé, découvrez tout ce qu\'ils cachent dans leur version de jour.',
        href: '/fr/canaux-santa-margarita',
        icon: Anchor,
      },
    ]
  },
  en: {
    heading: 'You might also be interested in',
    links: [
      {
        title: 'Private day excursions',
        desc: 'To explore Cap de Creus and the most spectacular coves of the northern Costa Brava with the whole day ahead of you.',
        href: '/en/boat-experiences-roses',
        icon: Compass,
      },
      {
        title: 'No-licence rental',
        desc: 'For those who want to go at their own pace without a skipper and without a boat licence.',
        href: '/en/boat-rental-without-licence-roses',
        icon: Key,
      },
      {
        title: 'Santa Margarita canals',
        desc: 'If the night tour of the canals caught your attention, discover all the wonders they hold in their daytime version.',
        href: '/en/santa-margarita-canals-roses',
        icon: Anchor,
      },
    ]
  },
  ca: {
    heading: 'També us pot interessar',
    links: [
      {
        title: 'Excursions privades de dia',
        desc: 'Per explorar el Cap de Creus i les cales més espectaculars de la Costa Brava nord amb tota la jornada per endavant.',
        href: '/ca/experiencies-vaixell-roses',
        icon: Compass,
      },
      {
        title: 'Lloguer sense llicència',
        desc: 'Per a qui vol sortir al seu ritme sense patró i sense necessitat de titulació nàutica.',
        href: '/ca/lloguer-vaixell-sense-llicencia-roses',
        icon: Key,
      },
      {
        title: 'Els canals de Santa Margarida',
        desc: 'Si el recorregut nocturn pels canals us ha cridat l\'atenció, descobriu tot el que amaguen en la seva versió de dia.',
        href: '/ca/canals-santa-margarida',
        icon: Anchor,
      },
    ]
  }
};

interface InternalLinksSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function InternalLinksSection({ lang = 'es' }: InternalLinksSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
          {t.heading}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {t.links.map((link, i) => {
            const Icon = link.icon;
            return (
              <Link 
                key={i}
                href={link.href}
                className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all flex flex-col h-full block"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-sky-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {link.desc}
                </p>
                <div className="flex items-center text-sky-600 font-semibold text-sm uppercase tracking-wide">
                  <span>{lang === 'es' ? 'Ver opción' : lang === 'fr' ? 'Voir l\'option' : lang === 'ca' ? 'Veure opció' : 'View option'}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
