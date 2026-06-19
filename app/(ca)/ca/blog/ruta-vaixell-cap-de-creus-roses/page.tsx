import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Ruta en vaixell pel Cap de Creus des de Roses',
  description:
    'L\'itinerari complet per descobrir el parc natural del Cap de Creus navegant des de Roses: parades, cales secretes, temps i consells pràctics.',
  keywords: [
    'ruta vaixell Cap de Creus',
    'navegar Cap de Creus des de Roses',
    'cales Cap de Creus',
    'excursió vaixell Roses',
  ],
  alternates: buildAlternates('blogCapCreus', 'ca'),
  openGraph: {
    title: 'Ruta en vaixell pel Cap de Creus des de Roses',
    description:
      'L\'itinerari complet per descobrir el Cap de Creus navegant des de Roses.',
    url: 'https://www.experienceboat.es/ca/blog/ruta-vaixell-cap-de-creus-roses',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'article',
    images: ['/images/blog/cap-de-creus.jpg'],
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
          <li className="text-gray-900 font-medium" aria-current="page">Ruta Cap de Creus</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-purple-100 text-purple-700">
            Rutes
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ruta en vaixell pel Cap de Creus des de Roses
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />5 de gener de 2026</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />7 min de lectura</span>
          </div>
        </header>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-slate-100">
          <Image src="/images/blog/cap-de-creus.jpg" alt="Ruta en vaixell pel Cap de Creus" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-p:text-gray-700 prose-li:text-gray-700">
          <p className="lead text-xl text-gray-600 font-medium">
            Navegar fins al Cap de Creus és una de les experiències més espectaculars que podeu viure a la Costa Brava. El punt més oriental de la península ibèrica us espera amb cales verges i paisatges d&apos;un altre planeta.
          </p>

          <h2>Punt de sortida: Roses</h2>
          <p>La ruta comença a <Link href="/ca/canals-santa-margarida">Roses</Link>, on recolliu el vostre vaixell. Des d&apos;aquí, poseu rumb nord vorejant la costa.</p>

          <h2>Primera parada: Cala Montjoi</h2>
          <p>A uns 20 minuts de navegació, ideal per a un primer bany abans de seguir cap al parc natural.</p>

          <h2>Cala Jugadora i Cala Culip</h2>
          <p>El cor del <Link href="/ca/canals-santa-margarida/ruta-cap-de-creus">Cap de Creus</Link>. Dues cales amb aigües turquesa envoltades de roca esculpida per la tramuntana.</p>

          <h2>El far del Cap de Creus</h2>
          <p>El punt més oriental de la península. Les vistes des del mar són inoblidables, amb el far coronant els penya-segats.</p>

          <h2>Consells per a la ruta</h2>
          <ul>
            <li>Sortiu d&apos;hora per evitar el vent de la tarda</li>
            <li>Emporteu-vos combustible suficient (consulteu l&apos;autonomia)</li>
            <li>Respecteu les zones protegides del parc natural</li>
            <li>No oblideu l&apos;equip d&apos;esnòrquel</li>
          </ul>

          <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Feu aquesta ruta amb el vostre propi vaixell</h3>
            <p className="text-gray-600 mb-4">Llogueu un vaixell amb llicència a Roses i navegueu fins al Cap de Creus al vostre aire.</p>
            <Link href="/ca/lloguer-vaixell-amb-llicencia-roses" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
              Veure vaixells amb llicència <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
