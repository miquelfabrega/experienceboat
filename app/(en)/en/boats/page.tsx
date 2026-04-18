import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const BoatsClient = dynamic(() => import('./BoatsClient'), {
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

export const metadata: Metadata = {
title: 'Our Fleet in Roses — With & Without Licence',
  description: 'Browse the full Experience Boat fleet in Roses. Boats with licence, without licence and premium options. Departing from Marina de Santa Margarita, Costa Brava.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boats',
    languages: {
      'x-default': 'https://www.experienceboat.es/barcos',
      es: 'https://www.experienceboat.es/barcos',
      fr: 'https://www.experienceboat.es/fr/bateaux',
      en: 'https://www.experienceboat.es/en/boats',
    },
  },
  openGraph: {
title: 'Our Fleet in Roses — With & Without Licence',
    description: 'Browse the full Experience Boat fleet in Roses. Boats with licence, without licence and premium options. Departing from Marina de Santa Margarita, Costa Brava.',
    url: 'https://www.experienceboat.es/en/boats',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function BoatsPage() {
  return (
    <main id="main-content" className="bg-gray-50 min-h-screen">
      <BoatsClient lang="en" />
    </main>
  );
}
