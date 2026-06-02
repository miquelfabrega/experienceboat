import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Waves,
  Fish,
  ShieldCheck,
  Sun,
  ChevronRight,
  MessageCircle,
  CalendarDays,
} from 'lucide-react';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

const URL = 'https://www.experienceboat.es/experiencias-barco-roses/cuevas-snorkel';

export const metadata: Metadata = {
  title: 'Cuevas & Snorkel en barco — Costa Brava desde Roses',
  description:
    'Excursión en barco por las cuevas marinas y los mejores spots de snorkel de la Costa Brava desde Roses. Equipo incluido. Reserva por WhatsApp.',
  alternates: {
    canonical: URL,
    languages: { 'x-default': URL, es: URL },
  },
  openGraph: {
    title: 'Cuevas & Snorkel en barco — Costa Brava desde Roses',
    description:
      'Excursión en barco por las cuevas marinas y los mejores spots de snorkel de la Costa Brava desde Roses.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
  },
};

const WHATSAPP =
  'https://wa.me/34623995700?text=' +
  encodeURIComponent('Hola, me interesa la excursión Cuevas & Snorkel en barco. ¿Disponibilidad?');

const HIGHLIGHTS = [
  {
    icon: Waves,
    title: 'Cuevas marinas',
    desc: 'Entramos en cuevas y arcos rocosos del Cap de Creus solo accesibles por mar.',
  },
  {
    icon: Fish,
    title: 'Snorkel guiado',
    desc: 'Paradas en los mejores fondos de la zona: posidonia, peces y rocas.',
  },
  {
    icon: ShieldCheck,
    title: 'Equipo incluido',
    desc: 'Máscara, tubo y aletas para todos los pasajeros, en varias tallas.',
  },
  {
    icon: Sun,
    title: 'Pensado para familias',
    desc: 'Salidas tranquilas, aptas para niños a partir de 6 años con supervisión.',
  },
];

const QUE_INCLUYE = [
  'Patrón profesional a bordo',
  'Equipo completo de snorkel (máscara, tubo, aletas)',
  'Briefing de seguridad antes de cada parada',
  'Chalecos salvavidas y seguro de RC',
  'Paradas en cuevas y calas seleccionadas según el día',
];

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': URL,
    name: 'Excursión Cuevas & Snorkel en barco — Costa Brava desde Roses',
    url: URL,
    description:
      'Excursión guiada en barco por las cuevas marinas del Cap de Creus y los mejores spots de snorkel de la Costa Brava desde Roses. Equipo incluido.',
    inLanguage: 'es',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
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

export default function CuevasSnorkelPage() {
  return (
    <>
      <TouristTripSchema />
      <main id="main-content" className="bg-white">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-blue-600">Inicio</Link></li>
            <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
            <li>
              <Link href="/experiencias-barco-roses" className="hover:text-blue-600">
                Experiencias en barco
              </Link>
            </li>
            <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Cuevas &amp; Snorkel
            </li>
          </ol>
        </nav>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Cuevas &amp; Snorkel
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            Una salida pensada para descubrir el lado más salvaje de la Costa Brava:
            navegación entre cuevas marinas y paradas para hacer snorkel en aguas
            cristalinas. Equipo incluido y patrón a bordo.
          </p>
          <div className="relative aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/experiencias/cuevas-snorkel.webp"
              alt="Excursión en barco por cuevas marinas y snorkel en la Costa Brava desde Roses"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </div>
        </section>

        <section
          id="reservar"
          className="py-12 bg-gradient-to-b from-white to-slate-50 scroll-mt-24"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4">
                <CalendarDays className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Reserva tu salida</h2>
              <p className="text-gray-600 mb-6">
                Estamos integrando la reserva online para esta experiencia. Mientras
                tanto, escríbenos por WhatsApp y te confirmamos disponibilidad y
                precio según fecha y número de personas.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa55] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Qué hace especial esta salida
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

        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ¿Qué incluye?
            </h2>
            <ul className="space-y-3">
              {QUE_INCLUYE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200"
                >
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Recomendamos traer toalla, crema solar y agua. Salidas sujetas a
              condiciones del mar.
            </p>
          </div>
        </section>

        <SiloNavBlock />
      </main>
    </>
  );
}
