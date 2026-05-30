import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Com planificar la teva escapada en vaixell per la Costa Brava',
  description:
    'Guia pràctica per organitzar un dia perfecte de navegació per la Costa Brava: què emportar-vos, millors horaris, cales imprescindibles i consells per llogar vaixell a Roses.',
  keywords: [
    'escapada vaixell Costa Brava',
    'lloguer vaixell Roses',
    'navegar Costa Brava',
    'planificar sortida vaixell',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/blog/planificar-escapada-vaixell-costa-brava',
    languages: {
      'x-default': 'https://www.experienceboat.es/blog/planificar-escapada-barco-costa-brava',
      es: 'https://www.experienceboat.es/blog/planificar-escapada-barco-costa-brava',
      fr: 'https://www.experienceboat.es/fr/blog/conseils-planifier-escapade-bateau-costa-brava',
      en: 'https://www.experienceboat.es/en/blog/tips-planning-boat-trip-costa-brava',
      ca: 'https://www.experienceboat.es/ca/blog/planificar-escapada-vaixell-costa-brava',
    },
  },
  openGraph: {
    title: 'Com planificar la teva escapada en vaixell per la Costa Brava',
    description:
      'Guia pràctica per organitzar un dia perfecte de navegació per la Costa Brava.',
    url: 'https://www.experienceboat.es/ca/blog/planificar-escapada-vaixell-costa-brava',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'article',
    images: ['/images/blog/escapada-costa-brava.jpg'],
  },
};

export default function ArticlePage() {
  return (
    <main id="main-content" className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/ca" className="hover:text-blue-600">Inici</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li><Link href="/ca/blog" className="hover:text-blue-600">Blog</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li className="text-gray-900 font-medium" aria-current="page">Planificar escapada</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-blue-100 text-blue-700">
            Guies
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Com planificar la teva escapada en vaixell per la Costa Brava
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />15 de gener de 2026</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />6 min de lectura</span>
          </div>
        </header>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-slate-100">
          <Image src="/images/blog/escapada-costa-brava.jpg" alt="Escapada en vaixell per la Costa Brava" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-p:text-gray-700 prose-li:text-gray-700">
          <p className="lead text-xl text-gray-600 font-medium">
            Planificar una escapada en vaixell per la Costa Brava no requereix ser un expert. Amb una mica d&apos;organització, el vostre dia al mar es pot convertir en el millor record de les vacances.
          </p>

          <h2>1. Trieu el tipus d&apos;embarcació segons el vostre pla</h2>
          <p>
            El primer és decidir quin tipus d&apos;embarcació encaixa amb el vostre pla. Si busqueu alguna cosa senzilla per moure-vos per la <Link href="/ca/canals-santa-margarida">zona dels canals de Santa Margarida</Link> o la badia, un <Link href="/ca/lloguer-vaixell-sense-llicencia-roses">vaixell sense llicència</Link> és més que suficient.
          </p>
          <p>
            Si en canvi voleu arribar fins al <Link href="/ca/canals-santa-margarida/ruta-cap-de-creus">Cap de Creus</Link> o explorar cales més allunyades, necessitareu un <Link href="/ca/lloguer-vaixell-amb-llicencia-roses">vaixell amb llicència</Link> amb una mica més de potència.
          </p>

          <h2>2. Consulteu la previsió del temps i el mar</h2>
          <p>
            El Mediterrani sol estar tranquil a l&apos;estiu, però convé revisar el vent (especialment la tramuntana, típica de l&apos;Empordà) i l&apos;estat del mar la vigília i el mateix matí de la sortida.
          </p>

          <h2>3. Què emportar-vos a bord</h2>
          <ul>
            <li>Protecció solar (crema, gorra i ulleres de sol)</li>
            <li>Aigua i alguna cosa de menjar o pícnic</li>
            <li>Tovallola i roba de recanvi</li>
            <li>Calçat antilliscant o anar descalços</li>
            <li>Càmera o mòbil amb funda estanca</li>
          </ul>

          <h2>4. Reserveu amb antelació</h2>
          <p>
            En temporada alta (juliol i agost) les embarcacions volen. Us recomanem <Link href="/ca/reserves">reservar amb antelació</Link> per assegurar la disponibilitat, sobretot si voleu sortir un cap de setmana o un dia concret.
          </p>

          <h2>5. Respecteu l&apos;entorn</h2>
          <p>
            La Costa Brava és un tresor natural. Fondegeu sempre en zones permeses, eviteu les praderies de posidònia i no deixeu residus. Si feu <Link href="/ca/blog/millors-llocs-esnorquel-costa-brava">esnòrquel</Link>, no toqueu ni us emporteu res del fons marí.
          </p>

          <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">A punt per a la vostra escapada?</h3>
            <p className="text-gray-600 mb-4">Exploreu la nostra flota i reserveu el vostre vaixell a Roses. Amb o sense llicència, tenim l&apos;embarcació perfecta per al vostre dia al mar.</p>
            <Link href="/ca/embarcacions" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
              Veure la nostra flota <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
