import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Els 7 millors llocs per fer esnòrquel a la Costa Brava',
  description:
    'Descobriu les cales i racons amb les aigües més cristal·lines per fer esnòrquel a prop de Roses i el Cap de Creus. Guia amb els millors spots de la Costa Brava.',
  keywords: [
    'esnòrquel Costa Brava',
    'cales Roses',
    'snorkel Cap de Creus',
    'millors cales Costa Brava',
  ],
  alternates: buildAlternates('blogSnorkel', 'ca'),
  openGraph: {
    title: 'Els 7 millors llocs per fer esnòrquel a la Costa Brava',
    description:
      'Descobriu les cales amb les aigües més cristal·lines per fer esnòrquel a prop de Roses.',
    url: 'https://www.experienceboat.es/ca/blog/millors-llocs-esnorquel-costa-brava',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'article',
    images: ['/images/blog/snorkel-costa-brava.jpg'],
  },
};

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Els 7 millors llocs per fer esnòrquel a la Costa Brava',
    datePublished: '2026-01-10',
    dateModified: '2026-01-10',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/blog/snorkel-costa-brava.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/ca/blog/millors-llocs-esnorquel-costa-brava' },
    inLanguage: 'ca',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticlePage() {
  return (
    <main id="main-content" className="bg-white min-h-screen">
      <ArticleSchema />
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/ca" className="hover:text-blue-600">Inici</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li><Link href="/ca/blog" className="hover:text-blue-600">Blog</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li className="text-gray-900 font-medium" aria-current="page">Millors llocs esnòrquel</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-emerald-100 text-emerald-700">
            Destinacions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Els 7 millors llocs per fer esnòrquel a la Costa Brava
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />10 de gener de 2026</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />5 min de lectura</span>
          </div>
        </header>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-slate-100">
          <Image src="/images/blog/snorkel-costa-brava.jpg" alt="Esnòrquel a la Costa Brava" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-p:text-gray-700 prose-li:text-gray-700">
          <p className="lead text-xl text-gray-600 font-medium">
            Naveguem la badia de Roses i el Cap de Creus gairebé cada dia, i moltes de les nostres parades acaben amb les ulleres posades. Aquestes són les set cales de la nostra zona on l&apos;esnòrquel val més la pena — totes a l&apos;abast en vaixell des de la Marina de Santa Margarida.
          </p>

          <h2>1. Cala Montjoi</h2>
          <p>A uns 20 minuts de navegació, és la parada més accessible de la llista: aigües tranquil·les, fons rocós amb posidònia i molt bona visibilitat. És la que solem recomanar a famílies i a qui s&apos;estrena amb les ulleres.</p>

          <h2>2. Cala Jugadora</h2>
          <p>Ja al <Link href="/ca/canals-santa-margarida/ruta-cap-de-creus">Cap de Creus</Link>, arrecerada prop del far. Aigua turquesa, molta vida marina i aquell paisatge de roca nua del parc natural. Hi parem sovint quan el mar ho permet.</p>

          <h2>3. Cala Murtra</h2>
          <p>A uns 10 minuts, a la zona de Punta Falconera. L&apos;accés per terra és tan incòmode que gairebé ningú la trepitja, i això es nota a l&apos;aigua: netíssima i amb fons de roca ple de vida. La sensació d&apos;aquari sense vidre de la llista.</p>

          <h2>4. Cala Jóncols</h2>
          <p>Entre penya-segats i pins, camí del Cap de Creus. La pista de terra és tan accidentada que la majoria hi arriba en barca, i el fons de còdols i roca dona una visibilitat excel·lent.</p>

          <h2>5. Cala Bona</h2>
          <p>Petita i protegida, amb aigües poc profundes perfectes per a famílies amb canalla: els peixos s&apos;acosten a la vora i no cal allunyar-se de la barca.</p>

          <h2>6. Cala Culip</h2>
          <p>En ple Cap de Creus, de les més arrecerades del cap, envoltada de paisatge lunar. Aigües més fresques però increïblement clares, amb fons rocós perfecte per a l&apos;esnòrquel.</p>

          <h2>7. Punta Falconera</h2>
          <p>A prop de Roses, amb coves i parets submarines que canvien completament el paisatge de sota l&apos;aigua. Un clàssic per als amants de l&apos;esnòrquel i el busseig.</p>

          <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Arribeu a aquestes cales en vaixell</h3>
            <p className="text-gray-600 mb-4">Moltes d&apos;aquestes cales només són accessibles per mar. Llogueu un vaixell a Roses i descobriu-les al vostre ritme.</p>
            <Link href="/ca/embarcacions" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
              Veure embarcacions disponibles <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
