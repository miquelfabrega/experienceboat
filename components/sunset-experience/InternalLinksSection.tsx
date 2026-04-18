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
        href: '/experiencias-barco-roses',
        icon: Compass,
      },
      {
        title: 'Location sans permis',
        desc: 'Pour ceux qui veulent sortir à leur propre rythme sans skipper et sans permis nautique.',
        href: '/alquiler-barco-sin-licencia-roses',
        icon: Key,
      },
      {
        title: 'Les canaux de Santa Margarita',
        desc: 'Si la visite nocturne des canaux vous a intéressé, découvrez tout ce qu\'ils cachent dans leur version de jour.',
        href: '/canales-santa-margarita',
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
        href: '/experiencias-barco-roses',
        icon: Compass,
      },
      {
        title: 'No-licence rental',
        desc: 'For those who want to go at their own pace without a skipper and without a boat licence.',
        href: '/alquiler-barco-sin-licencia-roses',
        icon: Key,
      },
      {
        title: 'Santa Margarita canals',
        desc: 'If the night tour of the canals caught your attention, discover all the wonders they hold in their daytime version.',
        href: '/canales-santa-margarita',
        icon: Anchor,
      },
    ]
  }
};

interface InternalLinksSectionProps {
  lang?: 'es' | 'fr' | 'en';
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
                  <span>{lang === 'es' ? 'Ver opción' : lang === 'fr' ? 'Voir l\'option' : 'View option'}</span>
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
