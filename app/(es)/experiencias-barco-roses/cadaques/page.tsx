import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Compass, MapPin, Camera, ChevronRight, MessageCircle, CalendarDays } from 'lucide-react';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

const URL = 'https://experienceboat.es/experiencias-barco-roses/cadaques';

export const metadata: Metadata = {
  title: 'Excursión a Cadaqués en barco desde Roses',
  description:
    'Navega desde Roses hasta Cadaqués en barco. Visita el pueblo de Dalí con tiempo libre para pasear y comer. Reserva por WhatsApp.',
  alternates: {
    canonical: URL,
    languages: { 'x-default': URL, es: URL },
  },
  openGraph: {
    title: 'Excursión a Cadaqués en barco desde Roses',
    description:
      'Navega desde Roses hasta Cadaqués en barco. Visita el pueblo de Dalí con tiempo libre para pasear y comer.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
  },
};

const WHATSAPP =
  'https://wa.me/34623995700?text=' +
  encodeURIComponent('Hola, me interesa la excursión a Cadaqués en barco. ¿Disponibilidad?');

const HIGHLIGHTS = [
  { icon: Compass, title: 'Visita al pueblo', desc: 'Cadaqués, el pueblo blanco de los pintores y de Salvador Dalí.' },
  { icon: Clock, title: 'Tiempo libre', desc: 'Pasea, come o bebé un café con vistas al Mediterráneo.' },
  { icon: MapPin, title: 'Ruta por la Costa Brava', desc: 'Bordea el Cap de Creus en el camino de ida y vuelta.' },
  { icon: Camera, title: 'Paisaje único', desc: 'Una de las costas más fotogénicas del Mediterráneo.' },
];

const PRECIOS = [
  { temporada: 'Temporada baja', precio: '75 €' },
  { temporada: 'Temporada media', precio: '85 €' },
  { temporada: 'Temporada alta', precio: '95 €' },
];

const touristTripSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  '@id': URL,
  name: 'Excursión a Cadaqués en barco desde Roses',
  url: URL,
  description:
    'Navega desde Roses hasta Cadaqués bordeando el Cap de Creus. Visita el pueblo de Dalí con tiempo libre para pasear y comer.',
  inLanguage: 'es',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
  },
  availableLanguage: [
    { '@type': 'Language', name: 'Spanish' },
    { '@type': 'Language', name: 'French' },
    { '@type': 'Language', name: 'English' },
    { '@type': 'Language', name: 'Catalan' },
  ],
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '75',
    highPrice: '95',
    priceCurrency: 'EUR',
    offerCount: 3,
    availability: 'https://schema.org/InStock',
    url: 'https://experienceboat.es/reservas',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://experienceboat.es' },
    { '@type': 'ListItem', position: 2, name: 'Experiencias en barco en Roses', item: 'https://experienceboat.es/experiencias-barco-roses' },
    { '@type': 'ListItem', position: 3, name: 'Excursión a Cadaqués en barco desde Roses', item: URL },
  ],
};

export default function CadaquesPage() {
  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
            Cadaqués
          </li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Excursión a Cadaqués en barco
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          Sal desde Roses y llega por mar al pueblo blanco de Cadaqués, el rincón más
          bohemio del Cap de Creus. Visita guiada y tiempo libre incluidos.
        </p>
        <div className="relative aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/cadaques/port-lligat.webp"
            alt="Vista aérea de Port Lligat, en el Cap de Creus cerca de Cadaqués (Costa Brava)"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>
      </section>

      {/* Reserva — placeholder hasta tener widget */}
      <section
        id="reservar"
        className="py-12 bg-gradient-to-b from-white to-slate-50 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4">
              <CalendarDays className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Reserva tu excursión</h2>
            <p className="text-gray-600 mb-6">
              Estamos integrando la reserva online para esta experiencia. Mientras
              tanto, escríbenos por WhatsApp y te confirmamos disponibilidad al momento.
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
            Qué incluye la experiencia
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => (
              <li key={h.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
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
            Visita y tiempo libre incluidos. Comida y bebida no incluidas.
          </p>
        </div>
      </section>

      <SiloNavBlock />
    </main>
  );
}
