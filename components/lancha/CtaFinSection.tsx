import { Anchor, Compass, ArrowRight } from 'lucide-react';

type Lang = 'es' | 'fr';

interface CtaFinSectionProps {
  lang?: Lang;
}

const t: Record<Lang, Record<string, string>> = {
  es: {
    title: 'Elige tu experiencia',
    subtitle: 'Dos formas de navegar la Costa Brava norte. Las dos salen desde los canales de Santa Margarita. Las dos son privadas.',
    buttonLicense: 'Con licencia',
    buttonSkipper: 'Con patrón',
    licenseLink: '/alquiler-barco-con-licencia-roses',
    skipperLink: '/experiencias-barco-roses',
  },
  fr: {
    title: 'Prêt à partir ?',
    subtitle: 'Consultez la disponibilité pour votre date et choisissez l\'embarcation qui correspond à votre groupe. Toutes les sorties sont privées.',
    buttonLicense: 'Voir les bateaux disponibles',
    buttonSkipper: 'Nous écrire sur WhatsApp',
    licenseLink: '/fr/location-bateau-avec-permis-roses/#bateaux',
    skipperLink: 'https://wa.me/34623995700?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server%20une%20vedette%20%C3%A0%20Roses',
  },
};

export default function CtaFinSection({ lang = 'es' }: CtaFinSectionProps) {
  const labels = t[lang];
  const isES = lang === 'es';

  if (isES) {
    return (
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #0b1f3a 0%, #0d4a47 50%, #1a5f8a 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 50% at 50% 100%, #22d3ee, transparent)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {labels.title}
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            {labels.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={labels.licenseLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#0b1f3a] font-bold px-7 py-4 rounded-xl transition-colors text-base"
            >
              <Anchor size={18} />
              {labels.buttonLicense}
              <ArrowRight size={16} />
            </a>
            <a
              href={labels.skipperLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d7d6e] hover:bg-[#0a9980] text-white font-bold px-7 py-4 rounded-xl transition-colors text-base"
            >
              <Compass size={18} />
              {labels.buttonSkipper}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {labels.title}
        </h2>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          {labels.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={labels.licenseLink}
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/30 transition-all hover:scale-105 text-base"
          >
            {labels.buttonLicense}
            <ArrowRight size={18} />
          </a>
          <a
            href={labels.skipperLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-8 py-4 rounded-2xl transition-all text-base"
          >
            {labels.buttonSkipper}
          </a>
        </div>
      </div>
    </section>
  );
}
