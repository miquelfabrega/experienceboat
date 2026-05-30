import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Primera vegada en vaixell sense llicència: tot el que cal saber',
  description:
    'Sense experiència prèvia. Us expliquem com funciona el lloguer de vaixell sense llicència a Roses, què podeu fer, què no i tots els consells per a la primera vegada.',
  keywords: [
    'vaixell sense llicència Roses',
    'lloguer sense llicència',
    'primera vegada vaixell',
    'navegar sense titulació',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/blog/primera-vegada-vaixell-sense-llicencia-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
      es: 'https://www.experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
      fr: 'https://www.experienceboat.es/fr/blog/premiere-fois-bateau-sans-permis-roses',
      en: 'https://www.experienceboat.es/en/blog/first-time-boat-no-licence-roses',
      ca: 'https://www.experienceboat.es/ca/blog/primera-vegada-vaixell-sense-llicencia-roses',
    },
  },
  openGraph: {
    title: 'Primera vegada en vaixell sense llicència: tot el que cal saber',
    description:
      'Com funciona el lloguer de vaixell sense llicència a Roses per a principiants.',
    url: 'https://www.experienceboat.es/ca/blog/primera-vegada-vaixell-sense-llicencia-roses',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'article',
    images: ['/images/blog/primera-vez-barco.jpg'],
  },
};

export default function ArticlePage() {
  return (
    <main id="main-content" className="bg-white min-h-screen">
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/ca" className="hover:text-blue-600">Inici</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li><Link href="/ca/blog" className="hover:text-blue-600">Blog</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li className="text-gray-900 font-medium" aria-current="page">Primera vegada sense llicència</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-amber-100 text-amber-700">
            Consells
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            La teva primera vegada en vaixell sense llicència: tot el que cal saber
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />28 de desembre de 2025</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />5 min de lectura</span>
          </div>
        </header>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-slate-100">
          <Image src="/images/blog/primera-vez-barco.jpg" alt="Primera vegada en vaixell sense llicència" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-p:text-gray-700 prose-li:text-gray-700">
          <p className="lead text-xl text-gray-600 font-medium">
            No heu portat mai un vaixell? No us amoïneu. Llogar un vaixell sense llicència a Roses és més fàcil del que penseu, i no necessiteu cap experiència prèvia.
          </p>

          <h2>Què és un vaixell sense llicència?</h2>
          <p>Són embarcacions amb motor de fins a 15 CV que, per normativa, podeu manejar sense titulació nàutica. Qualsevol persona major de 18 anys pot portar-les.</p>

          <h2>Què necessito per llogar?</h2>
          <ul>
            <li>Ser major de 18 anys</li>
            <li>DNI o passaport en vigor</li>
            <li>Una fiança (es retorna en lliurar el vaixell)</li>
            <li>Ganes de passar-ho bé</li>
          </ul>

          <h2>Fins on puc navegar?</h2>
          <p>Amb un <Link href="/ca/lloguer-vaixell-sense-llicencia-roses">vaixell sense llicència</Link> podeu moure-vos per la badia de Roses i la zona dels <Link href="/ca/canals-santa-margarida">canals de Santa Margarida</Link>, sempre dins de les milles permeses des de la costa.</p>

          <h2>Abans de sortir: el briefing</h2>
          <p>Abans de salpar us donem una explicació completa de com manejar el vaixell, les normes bàsiques de seguretat i la zona de navegació. En 15 minuts estareu a punt.</p>

          <h2>Consells per a la primera vegada</h2>
          <ul>
            <li>Navegueu a poc a poc fins a agafar confiança</li>
            <li>Mantingueu distància amb altres embarcacions</li>
            <li>Respecteu les zones de bany (boies grogues)</li>
            <li>No us allunyeu més del permès</li>
          </ul>

          <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Us animeu a provar-ho?</h3>
            <p className="text-gray-600 mb-4">Reserveu el vostre primer vaixell sense llicència a Roses. Us ho expliquem tot abans de sortir.</p>
            <Link href="/ca/lloguer-vaixell-sense-llicencia-roses" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
              Veure vaixells sense llicència <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
