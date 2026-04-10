import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';

const BarcosClient = nextDynamic(() => import('./BarcosClient'), {
  loading: () => (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <div className="h-10 w-56 bg-gray-200 rounded-xl mx-auto mb-6 animate-pulse" />
      <div className="h-6 w-96 bg-gray-100 rounded-lg mx-auto mb-16 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-pulse">
            <div className="aspect-[4/3] bg-gray-200" />
            <div className="p-6 space-y-3">
              <div className="h-5 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Nuestros barcos en Roses — Con y sin licencia',
  description: 'Consulta toda la flota de Experience Boat en Roses. Barcos con licencia, sin licencia y opciones premium. Salimos desde la Marina de Santa Margarita, Costa Brava.',
  alternates: {
    canonical: 'https://experienceboat.es/barcos',
    languages: {
      'x-default': 'https://experienceboat.es/barcos',
      es: 'https://experienceboat.es/barcos',
      fr: 'https://experienceboat.es/fr/bateaux',
      en: 'https://experienceboat.es/en/boats',
    },
  },
  openGraph: {
title: 'Nuestros barcos en Roses — Con y sin licencia',
    description: 'Consulta toda la flota de Experience Boat en Roses. Barcos con licencia, sin licencia y opciones premium. Salimos desde la Marina de Santa Margarita, Costa Brava.',
    url: 'https://experienceboat.es/barcos',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function BarcosPage() {
  return (
    <main id="main-content" className="bg-gray-50 min-h-screen">
      <BarcosClient lang="es" />
    </main>
  );
}
