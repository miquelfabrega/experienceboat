import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Meilleurs spots snorkeling sur la Costa Brava',
  description: 'Découvrez les criques et réserves marines incontournables pour faire du snorkeling sur la Costa Brava. Cala Montjoi, îles Medas, Cap de Creus et plus encore.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava',
    languages: {
      'x-default': 'https://experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
      es: 'https://experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
      fr: 'https://experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava',
      en: 'https://experienceboat.es/en/blog/best-snorkeling-spots-costa-brava',
    },
  },
  openGraph: {
title: 'Meilleurs spots snorkeling sur la Costa Brava',
    description: 'Découvrez les criques et réserves marines incontournables pour faire du snorkeling sur la Costa Brava nord.',
    url: 'https://experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava',
    locale: 'fr_FR',
    type: 'article',
  },
};

const toc = [
  { id: 'montjoi', label: 'Cala Montjoi' },
  { id: 'medas', label: 'Îles Medas' },
  { id: 'cap-creus', label: 'Cap de Creus' },
  { id: 'joncols', label: 'Cala Jóncols' },
  { id: 'rovellada', label: 'Cala Rovellada' },
  { id: 'conseils', label: 'Conseils de sécurité' },
];

const conseils = [
  'Faites toujours du snorkeling avec un compagnon et ne nagez jamais seul.',
  'Choisissez un endroit adapté à votre niveau et à votre expérience.',
  'Utilisez un équipement adéquat : masque, tuba et palmes bien ajustés.',
  'Restez attentif à votre environnement et méfiez-vous du trafic de bateaux.',
  'Respectez l\'écosystème : évitez de toucher les coraux ou de déranger la vie marine.',
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Meilleurs spots snorkeling sur la Costa Brava | Experience Boat',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://experienceboat.es/images/services/canales.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava' },
    inLanguage: 'fr',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleSnorkelingFr() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/services/canales.jpg"
          alt="Plongée en apnée et snorkeling dans les eaux cristallines de la Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Découvrir
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Meilleurs spots snorkeling sur la Costa Brava | Experience Boat
            </h1>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 avril 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            6 min de lecture
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Costa Brava Nord
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Guide des criques
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
          <Link href="/fr" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/fr/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 truncate">Snorkeling sur la Costa Brava</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop */}
          <aside className="hidden xl:block w-56 shrink-0 sticky top-28 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Dans cet article</p>
            <nav className="space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-500 hover:text-sky-600 transition-colors leading-snug py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Article */}
          <article className="max-w-3xl w-full min-w-0 prose prose-gray prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
            prose-p:leading-relaxed prose-p:text-gray-700
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
          ">

            {/* Intro */}
            <p className="text-xl text-gray-600 leading-relaxed font-normal not-prose mb-10 border-l-4 border-sky-500 pl-5 py-1">
              La Costa Brava, avec sa côte déchiquetée et ses eaux cristallines, est un paradis pour les amateurs de snorkeling. Des criques cachées aux impressionnantes réserves marines, cette région offre une grande variété d&apos;endroits pour plonger et découvrir la fascinante vie marine qui peuple ses eaux.
            </p>
            <p>
              Dans cet article, nous explorerons quelques-uns des meilleurs endroits pour faire du snorkeling sur la Costa Brava nord, quelle vie marine attendre dans chaque zone, et des conseils pratiques pour en tirer le meilleur parti en toute sécurité.
            </p>

            {/* H2 #1 */}
            <h2 id="montjoi">1. Cala Montjoi : Explorer un paradis sous-marin</h2>
            <p>
              Située tout près de Roses, <strong>Cala Montjoi</strong> est l&apos;une des destinations de snorkeling les plus accessibles et les plus populaires. Avec des eaux calmes et protégées, cette baie abrite une grande variété de poissons et de créatures marines.
            </p>
            <p>
              En plongeant dans ses eaux, il est facile de croiser des bancs de poissons colorés, des pieuvres cachées dans les rochers et de petits coraux qui ornent les fonds marins. Grâce à sa taille et à sa protection naturelle, c&apos;est un endroit idéal pour les débutants et les familles.
            </p>

            {/* H2 #2 */}
            <h2 id="medas">2. Îles Medas : Un sanctuaire sous-marin</h2>
            <p>
              Situées face à la côte de L&apos;Estartit, les <strong>îles Medas</strong> forment un archipel qui est réserve marine protégée depuis des décennies. Elles sont considérées comme l&apos;un des meilleurs sites de plongée de toute la Méditerranée.
            </p>
            <p>
              Le niveau de vie marine ici est stupéfiant. En faisant du snorkeling, on peut observer d&apos;énormes mérous, des gorgones, des bancs gigantesques de sars et, avec de la chance, quelques raies. Les eaux cristallines et l&apos;interdiction totale de pêche font des Medas un arrêt incontournable. Pour les atteindre, il est recommandé de louer une embarcation ou de prendre une excursion spécifique.
            </p>

            {/* H2 #3 */}
            <h2 id="cap-creus">3. Cap de Creus : À la découverte de trésors cachés</h2>
            <p>
              La côte escarpée du <strong>Parc Naturel du Cap de Creus</strong> est parsemée de criques cachées et de grottes marines, en faisant l&apos;endroit idéal pour ceux qui cherchent une aventure sauvage.
            </p>
            <p>
              La zone se distingue par la transparence de l&apos;eau, filtrée naturellement par les herbiers de posidonie. Gardez les yeux ouverts pour voir des murènes, des étoiles de mer rouges, des oursins et des nudibranches qui habitent les fonds rocheux. Comme l&apos;accès par terre est long et compliqué pour beaucoup de ses criques, <Link href="/experiencias-barco-roses">arriver en bateau est la meilleure option</Link> pour explorer les meilleurs spots de snorkeling de la réserve.
            </p>

            {/* H2 #4 */}
            <h2 id="joncols">4. Cala Jóncols : Une oasis tranquille</h2>
            <p>
              Isolée entre de hautes falaises rocheuses et des pinèdes, <strong>Cala Jóncols</strong> est une oasis pour échapper aux foules. Son lit marin est principalement de galets et de roche, ce qui garantit une excellente visibilité sous l&apos;eau.
            </p>
            <p>
              Étant plus éloignée et accessible uniquement par une piste très accidentée, la pression humaine y est moindre. On trouve facilement des anémones, des daurades et des pieuvres chassant parmi les rochers. Que vous soyez débutant ou expérimenté, Jóncols offre une expérience très authentique.
            </p>

            {/* H2 #5 */}
            <h2 id="rovellada">5. Cala Rovellada : Joyau caché</h2>
            <p>
              Plus au nord, en s&apos;approchant de Colera et Portbou, on trouve <strong>Cala Rovellada</strong>. Elle est connue pour sa riche biodiversité marine et ses formations rocheuses uniques.
            </p>
            <p>
              Les plongeurs en apnée peuvent explorer les parois rocheuses et les petites crevasses sous-marines où se cachent des hippocampes timides, des sars et des castagnoles. C&apos;est une baie pleine de charme et parfaite pour ceux qui cherchent des eaux immaculées en dehors des circuits habituels.
            </p>

            {/* H2 #6 */}
            <h2 id="conseils">Conseils de sécurité et recommandations d&apos;équipement</h2>
            <p>
              Avant de vous lancer dans une aventure de snorkeling, il est important de garantir votre sécurité et celle de l&apos;environnement.
            </p>

            <ul className="not-prose mt-6 space-y-3">
              {conseils.map((conseil, i) => (
                <li key={i} className="flex gap-3 text-gray-700 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </div>
                  {conseil}
                </li>
              ))}
            </ul>

            <p className="mt-8">
              En suivant ces conseils et en explorant les zones que nous avons passées en revue, vous êtes assuré de vivre une aventure sous-marine inoubliable. Prenez votre masque, embarquez et découvrez les merveilles cachées sous la surface de la Costa Brava.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-10 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Rejoignez les meilleures criques en bateau</p>
                <p className="text-gray-500 text-sm">Louez un bateau sans permis et explorez la côte à votre propre rythme.</p>
              </div>
              <Link
                href="/fr/location-bateau-sans-permis-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Voir les bateaux disponibles <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 border-t border-gray-100 text-center bg-gray-50">
        <Link href="/fr/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-2 font-medium">
          ← Retour au blog
        </Link>
      </div>

    </main>
    </>
  );
}
