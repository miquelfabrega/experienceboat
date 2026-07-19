import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Meilleurs spots snorkeling sur la Costa Brava',
  description: 'Découvrez les criques et réserves marines incontournables pour faire du snorkeling sur la Costa Brava. Cala Montjoi, Cala Murtra, Cap de Creus et plus encore.',
  alternates: buildAlternates('blogSnorkel', 'fr'),
  openGraph: {
title: 'Meilleurs spots snorkeling sur la Costa Brava',
    description: 'Découvrez les criques et réserves marines incontournables pour faire du snorkeling sur la Costa Brava nord.',
    url: 'https://www.experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava',
    locale: 'fr_FR',
    type: 'article',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const toc = [
  { id: 'montjoi', label: 'Cala Montjoi' },
  { id: 'murtra', label: 'Cala Murtra' },
  { id: 'cap-creus', label: 'Cap de Creus' },
  { id: 'joncols', label: 'Cala Jóncols' },
  { id: 'medas', label: 'Et les îles Medes ?' },
  { id: 'conseils', label: 'Conseils de sécurité' },
];

const conseils = [
  'Faites toujours du snorkeling avec un compagnon et ne nagez jamais seul.',
  'Choisissez un endroit adapté à votre niveau et à votre expérience.',
  'Utilisez un équipement adéquat : masque, tuba et palmes bien ajustés.',
  'Restez attentif à votre environnement et méfiez-vous du trafic de bateaux.',
  'Respectez l\'écosystème : ne touchez ni le fond ni la faune, et mouillez toujours en dehors de la posidonie.',
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Meilleurs spots snorkeling sur la Costa Brava',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/services/canales.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava' },
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
              Meilleurs spots snorkeling sur la Costa Brava
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
              Nous naviguons dans la baie de Roses et le Cap de Creus presque tous les jours, et bon nombre de nos arrêts finissent le masque sur le visage. Voici les criques de notre zone où le snorkeling vaut vraiment le coup — toutes accessibles en bateau depuis la Marina de Santa Margarita.
            </p>
            <p>
              On vous dit ce qu&apos;on voit dans chacune, à combien de Roses elle se trouve, et un mot honnête sur les îles Medes, qui ne sont pas dans notre zone mais qu&apos;on nous demande sans arrêt.
            </p>

            {/* H2 #1 */}
            <h2 id="montjoi">1. Cala Montjoi, la valeur sûre</h2>
            <p>
              À une vingtaine de minutes de navigation de Santa Margarita, <strong>Cala Montjoi</strong> est l&apos;arrêt snorkeling le plus accessible de notre zone. Eaux calmes et abritées, fond rocheux avec posidonie et très bonne visibilité presque toute l&apos;année.
            </p>
            <p>
              Sous la surface : poissons de roche, un poulpe caché entre les pierres de temps en temps et des herbiers de posidonie. Par sa taille et sa protection naturelle, c&apos;est celle qu&apos;on recommande d&apos;habitude aux débutants et aux familles — et à terre il y a l&apos;héritage d&apos;elBulli1846, même si le parking en été est une autre affaire.
            </p>

            {/* H2 #2 */}
            <h2 id="murtra">2. Cala Murtra, l&apos;aquarium sans la vitre</h2>
            <p>
              À une dizaine de minutes de navigation, dans la zone de Punta Falconera, <strong>Cala Murtra</strong> est la surprise de la liste. L&apos;accès à pied est si pénible que presque personne ne s&apos;y aventure, et ça se voit dans l&apos;eau : propre, calme, avec un fond de roche plein de vie.
            </p>
            <p>
              Nous mouillons souvent dans son eau peu profonde et le masque sort tout seul : petits poissons entre les rochers, anémones et cette sensation d&apos;aquarium sans vitre que seules donnent les criques désertes. Du snorkeling méditerranéen discret et silencieux.
            </p>

            {/* H2 #3 */}
            <h2 id="cap-creus">3. Cap de Creus : Culip, Jugadora et les grottes</h2>
            <p>
              La côte escarpée du <strong>Parc Naturel du Cap de Creus</strong> offre le snorkeling le plus sauvage de la zone. Cala Culip et Cala Jugadora, abritées près du phare, sont nos arrêts habituels quand la mer le permet ; entre les deux, des grottes et des arches de roche accessibles uniquement par l&apos;eau.
            </p>
            <p>
              L&apos;eau y est particulièrement transparente, filtrée par les herbiers de posidonie. Gardez les yeux ouverts pour repérer murènes, étoiles de mer rouges, oursins et nudibranches sur les fonds rocheux. Comme l&apos;accès par terre est long et compliqué pour la plupart de ces criques, <Link href="/fr/experiences-bateau-roses">arriver en bateau est la meilleure option</Link> — nous y montons avec skipper ou en bateau avec permis selon le jour.
            </p>

            {/* H2 #4 */}
            <h2 id="joncols">4. Cala Jóncols, entre falaises et pins</h2>
            <p>
              Nichée entre falaises et pinèdes sur la route du Cap de Creus, <strong>Cala Jóncols</strong> fait partie de celles qui se méritent par la mer : la piste est si accidentée que la plupart des visiteurs arrivent en bateau. Son fond de galets et de roche garantit une excellente visibilité.
            </p>
            <p>
              Avec moins de pression humaine que les criques de bord de route, on y repère facilement anémones, daurades et poulpes en chasse entre les rochers. Débutant ou habitué du masque, Jóncols récompense le trajet.
            </p>

            {/* H2 #5 */}
            <h2 id="medas">5. Et les îles Medes ?</h2>
            <p>
              On nous pose la question sans arrêt, alors réponse honnête : les <strong>îles Medes</strong>, face à L&apos;Estartit, sont une réserve marine extraordinaire — la richesse de la vie marine y est stupéfiante : mérous énormes, gorgones, bancs de sars — mais <strong>elles sont en dehors de notre zone de location</strong>. Nos bateaux opèrent entre la baie de Roses et le Cap de Creus, et les Medes (comme les criques de Colera ou Portbou, plus au nord) se visitent mieux avec les opérateurs de leur zone. Si cette réserve est votre objectif, partez de L&apos;Estartit ; si vous voulez du snorkeling sauvage sans quitter la région, le Cap de Creus n&apos;a rien à lui envier.
            </p>

            {/* H2 #6 */}
            <h2 id="conseils">Conseils de sécurité et recommandations d&apos;équipement</h2>
            <p>
              Avant de vous mettre à l'eau, quelques règles de base — pour votre sécurité et celle du milieu.
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
              Avec ça et un peu de bon sens, l&apos;eau fait le reste. Si vous sortez avec nous, le matériel de snorkeling est inclus dans l&apos;excursion des grottes — et si vous louez un bateau sans permis, prenez votre masque : Montjoi et Murtra sont à moins d&apos;une demi-heure du ponton.
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
