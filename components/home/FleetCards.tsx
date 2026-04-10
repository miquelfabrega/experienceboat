import Link from 'next/link';
import { fleet } from '@/lib/data/fleet';
import FleetCard from './FleetCard';

type FleetTranslations = {
  sinLicenciaLabel: string;
  sinLicenciaBadge: string;
  conLicenciaLabel: string;
  conLicenciaBadge: string;
  guideLink: string;
  guideLinkFull: string;
  guideLinkHref: string;
};

const defaultTranslations: FleetTranslations = {
  sinLicenciaLabel: 'Sin Licencia',
  sinLicenciaBadge: 'Ideal debutantes',
  conLicenciaLabel: 'Con Licencia',
  conLicenciaBadge: 'Titulación necesaria',
  guideLink: 'Ver guía completa →',
  guideLinkFull: 'Ver guía completa de alquiler con licencia →',
  guideLinkHref: '/alquiler-barco-con-licencia-roses/',
};

export default function FleetCards({ translations }: { translations?: FleetTranslations } = {}) {
  const t = translations ?? defaultTranslations;
  const sinLicencia = fleet.filter(b => b.categoria === 'sin-licencia');
  const conLicencia = fleet.filter(b => b.categoria === 'con-licencia');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SIN LICENCIA */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.sinLicenciaLabel}</h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">{t.sinLicenciaBadge}</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sinLicencia.map(barco => (
              <FleetCard key={barco.slug} barco={barco} />
            ))}
          </div>
        </div>

        {/* CON LICENCIA */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.conLicenciaLabel}</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">{t.conLicenciaBadge}</span>
            <div className="flex-grow h-px bg-gray-200"></div>
            <Link
              href={t.guideLinkHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              {t.guideLink}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conLicencia.map(barco => (
              <FleetCard key={barco.slug} barco={barco} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              href={t.guideLinkHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              {t.guideLinkFull}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
