import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, MapPin, Waves, Anchor, ChevronRight } from 'lucide-react';
import RegiondoWidget from '@/components/experiencias/RegiondoWidget';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

const URL = 'https://www.experienceboat.es/experiencias-barco-roses/cap-de-creus-calas';

export const metadata: Metadata = {
  title: 'Excursión al Cap de Creus en barco — Baño en 3 calas',
  description:
    'Excursión guiada de 3 a 5 horas al Cap de Creus desde Roses. Baño en 3 calas vírgenes de la Costa Brava. Reserva online y embarca.',
  alternates: buildAlternates('expCapCreus', 'es'),
  openGraph: {
    title: 'Excursión al Cap de Creus en barco — Baño en 3 calas',
    description:
      'Excursión guiada de 3 a 5 horas al Cap de Creus desde Roses. Baño en 3 calas vírgenes de la Costa Brava.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
  },
};

const HIGHLIGHTS = [
  { icon: Clock, title: '3 a 5 horas', desc: 'Excursión completa con tiempo para nadar y disfrutar.' },
  { icon: Waves, title: 'Baño en 3 calas', desc: 'Calas vírgenes accesibles solo en barco.' },
  { icon: MapPin, title: 'Cap de Creus', desc: 'El extremo más oriental de la Península Ibérica.' },
  { icon: Anchor, title: 'Patrón profesional', desc: 'Te lleva a los mejores rincones según el tiempo.' },
];

const PRECIOS = [
  { temporada: 'Temporada baja', precio: '65 €' },
  { temporada: 'Temporada media', precio: '75 €' },
  { temporada: 'Temporada alta', precio: '80 €' },
];

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': URL,
    name: 'Excursión al Cap de Creus en barco — Baño en 3 calas',
    url: URL,
    description:
      'Excursión guiada de 3 a 5 horas al Cap de Creus desde Roses con baño en 3 calas vírgenes de la Costa Brava.',
    duration: 'PT4H',
    inLanguage: 'es',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: 65,
      highPrice: 80,
      availability: 'https://schema.org/InStock',
      url: URL,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CapDeCreusCalasPage() {
  return (
    <>
      <TouristTripSchema />
      <main id="main-content" className="bg-white">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-blue-600">Inicio</Link>
            </li>
            <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
            <li>
              <Link href="/experiencias-barco-roses" className="hover:text-blue-600">
                Experiencias en barco
              </Link>
            </li>
            <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Cap de Creus — 3 Calas
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Excursión al Cap de Creus
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            Navega de 3 a 5 horas hasta el Cap de Creus desde Roses. Tres paradas para
            nadar y bucear en calas vírgenes solo accesibles por mar.
          </p>
          <div className="relative aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero/cap-de-creus-calas-2026.jpg"
              alt="Vista aérea de una cala del Cap de Creus con barcos fondeados en agua turquesa"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </div>
        </section>

        {/* Widget de reserva */}
        <RegiondoWidget
          widgetId="64efcd4f-558b-4769-ab6b-bada1db6f43e"
          title="Reserva tu excursión al Cap de Creus"
          subtitle="Confirmación inmediata. Plazas limitadas por salida."
        />

        {/* Highlights */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Qué incluye la experiencia
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h.title}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                >
                  <h.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{h.title}</h3>
                  <p className="text-sm text-gray-600">{h.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Precios */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tarifas por persona
            </h2>
            <ul className="space-y-3">
              {PRECIOS.map((p) => (
                <li
                  key={p.temporada}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200"
                >
                  <span className="font-medium text-gray-900">{p.temporada}</span>
                  <span className="font-bold text-blue-600">{p.precio}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Bebida y aperitivo no incluidos. Mínimo de plazas según embarcación.
            </p>
          </div>
        </section>

        <SiloNavBlock />
      </main>
    </>
  );
}
