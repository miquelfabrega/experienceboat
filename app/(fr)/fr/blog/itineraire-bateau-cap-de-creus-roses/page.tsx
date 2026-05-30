import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Itinéraire bateau Cap de Creus depuis Roses',
  description: 'Itinéraire en bateau des canaux de Santa Margarita au Cap de Creus. Criques, haltes et tout ce qu\'il faut savoir avant de partir.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/blog/itineraire-bateau-cap-de-creus-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/blog/ruta-barco-cap-de-creus-roses',
      es: 'https://www.experienceboat.es/blog/ruta-barco-cap-de-creus-roses',
      fr: 'https://www.experienceboat.es/fr/blog/itineraire-bateau-cap-de-creus-roses',
      en: 'https://www.experienceboat.es/en/blog/boat-trip-cap-de-creus-from-roses',
    },
  },
  openGraph: {
    title: 'Itinéraire bateau Cap de Creus depuis Roses',
    description: 'Guide de l\'itinéraire en bateau depuis les canaux de Santa Margarita jusqu\'au Cap de Creus. Criques, haltes et tout ce qu\'il faut savoir.',
    url: 'https://www.experienceboat.es/fr/blog/itineraire-bateau-cap-de-creus-roses',
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
  { id: 'pourquoi', label: 'Pourquoi le Cap de Creus' },
  { id: 'depart', label: 'Le point de départ' },
  { id: 'itineraire', label: 'L\'itinéraire étape par étape' },
  { id: 'criques', label: 'Les criques incontournables' },
  { id: 'chiringuito', label: 'Le bar de Cala Pelosa' },
  { id: 'savoir', label: 'Ce qu\'il faut savoir' },
  { id: 'option', label: 'Avec ou sans permis ?' },
];

const calas = [
  {
    name: 'Cala Pelosa',
    desc: 'Petite et intime, avec un fond de sable fin et des eaux couleur turquoise intense. C\'est l\'arrêt le plus connu de l\'itinéraire et le seul avec un service de restaurant directement sur la plage. Parfait pour mouiller et se baigner.',
    highlight: 'Halte gastronomique',
  },
  {
    name: 'Cala Rostella',
    desc: 'Mieux protégée du vent du nord que d\'autres criques de la zone. Ses eaux sont particulièrement transparentes grâce aux fonds de posidonie marine, qui filtrent l\'eau et lui donnent cette couleur vert émeraude caractéristique.',
    highlight: 'Snorkeling exceptionnel',
  },
  {
    name: 'Cala Jóncols',
    desc: 'L\'une des plus grandes criques de l\'itinéraire, difficile d\'accès par terre mais parfaitement accessible en bateau. Ses eaux sont idéales pour se baigner en famille. Le cadre de pins qui descendent jusqu\'au rivage la rend particulièrement photogénique.',
    highlight: 'Idéal pour les familles',
  },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Itinéraire en bateau au Cap de Creus depuis Roses — Guide complet',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/hero/hero-2.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/fr/blog/itineraire-bateau-cap-de-creus-roses' },
    inLanguage: 'fr',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleCapDeCreusFr() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Itinéraire en bateau au Cap de Creus depuis Roses, Costa Brava nord"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Itinéraires
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Itinéraire en bateau au Cap de Creus depuis Roses — explorer la côte nord de la Costa Brava
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
            7 min de lecture
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Roses → Cap de Creus
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Intention informationnelle
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
          <span className="text-gray-600 truncate">Itinéraire en bateau au Cap de Creus</span>
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
              Le Cap de Creus est le point le plus à l&apos;est de la péninsule Ibérique et l&apos;un des paysages marins les plus sauvages de toute la Costa Brava. Vu depuis la terre, il impressionne. Vu depuis l&apos;eau, à bord d&apos;un bateau, c&apos;est une toute autre chose.
            </p>
            <p>
              Ce guide décrit l&apos;itinéraire que nous empruntons habituellement depuis les canaux de Santa Margarita jusqu&apos;aux criques du Cap de Creus : ce qu&apos;il faut attendre à chaque étape, quels sont les meilleurs arrêts, où manger et ce qu&apos;il faut savoir avant de partir. Que vous envisagiez de louer un bateau par vous-même ou que vous préfériez venir avec un skipper, ces informations vous seront utiles.
            </p>

            {/* H2 #1 */}
            <h2 id="pourquoi">Pourquoi le Cap de Creus est la meilleure destination depuis Roses en bateau ?</h2>
            <p>
              Depuis Roses, le Cap de Creus est à environ 45-60 minutes en bateau selon le modèle et les conditions de mer. C&apos;est une distance parfaite : suffisamment loin pour que la sortie ait de la consistance, suffisamment proche pour profiter sans se presser.
            </p>
            <p>
              Ce qui rend cet itinéraire spécial, ce n&apos;est pas seulement la destination — c&apos;est le trajet. La côte nord de la Costa Brava entre Roses et le Cap de Creus est un paysage de falaises, de criques cachées et d&apos;eaux d&apos;une transparence difficile à trouver en Méditerranée occidentale. La plupart de ces criques sont <strong>inaccessibles par terre</strong> ou nécessitent de longues randonnées sur des chemins de montagne. Depuis le bateau, vous arrivez directement.
            </p>
            <p>
              De plus, toute cette zone fait partie du <strong>Parc Naturel du Cap de Creus</strong>, ce qui signifie que les eaux sont protégées, la pêche est réglementée et l&apos;écosystème marin se maintient dans un état exceptionnel. Ce n&apos;est pas un hasard si le snorkeling ici est parmi les meilleurs de la Costa Brava.
            </p>

            {/* H2 #2 */}
            <h2 id="depart">Le point de départ — les canaux de Santa Margarita</h2>
            <p>
              Nous partons toujours depuis la Marina de Santa Margarita, à l&apos;entrée de Roses. Les premières minutes de l&apos;itinéraire se déroulent dans les canaux eux-mêmes — un trajet de 20-25 minutes par des voies navigables intérieures qui sont déjà en elles-mêmes un spectacle.
            </p>
            <p>
              Des deux côtés des canaux, plus de 500 maisons ont un accès direct à l&apos;eau avec leurs pontons privés. C&apos;est un environnement complètement différent de ce à quoi on s&apos;attend de la Costa Brava et que de nombreux visiteurs découvrent pour la première fois lors de cet itinéraire. Pour ceux qui ne connaissent pas les canaux, cette première partie est souvent l&apos;une des préférées de la journée.
            </p>
            <p>
              En sortant des canaux, on entre dans la baie de Roses. De là, le Cap de Creus se profile au fond et l&apos;itinéraire vers le nord ne peut plus se rater.
            </p>

            {/* H2 #3 */}
            <h2 id="itineraire">L&apos;itinéraire étape par étape — des canaux au Cap de Creus</h2>
            <p>
              Il n&apos;y a pas d&apos;itinéraire unique. Le parcours s&apos;adapte aux conditions de mer, au temps disponible et aux préférences de chaque groupe. Mais il y a une séquence qui fonctionne bien pour la plupart des sorties :
            </p>
            <ol>
              <li><strong>Canaux de Santa Margarita</strong> — Départ depuis la marina, parcours dans les canaux intérieurs jusqu&apos;à la baie de Roses. Vitesse basse, eaux protégées, idéal pour s&apos;échauffer.</li>
              <li><strong>Baie de Roses</strong> — Traversée de la baie vers le nord. Le paysage commence à changer : les Pyrénées en arrière-plan, la côte devient plus abrupte et l&apos;eau plus transparente.</li>
              <li><strong>Première crique</strong> — Selon les conditions, le premier arrêt est généralement Cala Jóncols ou Cala Rostella. Mouillage, baignade, snorkeling.</li>
              <li><strong>Cala Pelosa</strong> — Arrêt pour déjeuner si la journée le permet. Le bar de Cala Pelosa sert jusqu&apos;à épuisement des stocks, donc plus vous arrivez tôt, mieux c&apos;est.</li>
              <li><strong>Cap de Creus</strong> — Le point final. Le paysage ici est complètement différent : roche vive, eau aux couleurs impossibles et la sensation d&apos;être à l&apos;extrémité de quelque chose.</li>
              <li><strong>Retour</strong> — Le chemin du retour se fait généralement avec le soleil déjà bas. Les Pyrénées enneigées (au printemps) ou la silhouette de Roses en fond font que le retour est aussi beau que l&apos;aller.</li>
            </ol>

            {/* H2 #4 — Criques */}
            <h2 id="criques">Les criques incontournables de l&apos;itinéraire</h2>
            <p>
              Entre Roses et le Cap de Creus, il y a des dizaines de criques. Ces trois-là sont celles que nous incluons presque toujours dans l&apos;itinéraire :
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-5 my-8">
              {calas.map((cala) => (
                <div key={cala.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <span className="inline-block text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full mb-3">
                    {cala.highlight}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{cala.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cala.desc}</p>
                </div>
              ))}
            </div>

            {/* H2 #5 */}
            <h2 id="chiringuito">Le bar de Cala Pelosa — halte gastronomique obligatoire</h2>
            <p>
              Cala Pelosa possède un bar-restaurant qui fait depuis des années partie des arrêts fixes des itinéraires vers le Cap de Creus. La cuisine est méditerranéenne de produit : riz, fideuà et poisson frais préparé sur le moment, avec les embarcations mouillées à quelques mètres.
            </p>
            <p>
              Ce n&apos;est pas un endroit pour aller à la hâte. L&apos;expérience, c&apos;est de s&apos;installer sur la terrasse surplombant l&apos;eau, avec le bateau amarré près et autant de temps qu&apos;il faut. C&apos;est exactement le type de pause qu&apos;une journée en bateau devrait inclure.
            </p>
            <p>
              <strong>Un avertissement important :</strong> le bar n&apos;accepte pas de réservations et la place est limitée. En juillet et août, si vous arrivez après 14h, il est probable que vous deviez attendre ou qu&apos;il n&apos;y ait plus de place. En basse saison (mai, juin, septembre), c&apos;est beaucoup moins problématique.
            </p>

            {/* H2 #6 */}
            <h2 id="savoir">Ce qu&apos;il faut savoir avant de partir vers le Cap de Creus</h2>
            <p>
              L&apos;itinéraire vers le Cap de Creus est magnifique, mais il a quelques particularités qu&apos;il convient de connaître avant de partir.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">La tramontane</h3>
            <p>
              Le Cap de Creus est l&apos;une des zones de la Costa Brava les plus exposées à la tramontane, le vent du nord qui peut agiter la mer en quelques heures. Les jours avec des prévisions de tramontane, nous annulons ou modifions l&apos;itinéraire sans frais. Ce n&apos;est pas une décision que nous prenons à la légère — c&apos;est une question de sécurité.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">La posidonie</h3>
            <p>
              Le lit de posidonie est responsable de la transparence de l&apos;eau du Cap de Creus. C&apos;est une espèce protégée et un écosystème fondamental. Dans les zones avec de la posidonie, il n&apos;est pas permis de mouiller à l&apos;ancre — il y a des corps morts (bouées de mouillage fixes) dans les criques habilitées à cet effet.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Les roches immergées</h3>
            <p>
              La côte du Cap de Creus a de nombreuses roches à faible profondeur, surtout aux entrées des criques. Si vous y allez avec votre propre bateau, naviguez toujours lentement en vous approchant de la côte et consultez la carte nautique. Si vous venez avec notre service avec skipper, celui-ci connaît cette côte palme à palme et se charge de la navigation.
            </p>

            {/* H2 #7 */}
            <h2 id="option">Avec permis, sans permis ou avec skipper ?</h2>
            <p>
              L&apos;itinéraire vers le Cap de Creus peut se faire de trois manières différentes :
            </p>
            <ul>
              <li>
                <strong>Avec bateau sans permis</strong> — Les bateaux sans permis sont parfaits pour les canaux de Santa Margarita et la baie de Roses. Pour atteindre le Cap de Creus, les conditions de mer doivent être favorables. Avec de bonnes conditions, il est tout à fait possible d&apos;atteindre les premières criques de l&apos;itinéraire.
              </li>
              <li>
                <strong>Avec bateau à permis</strong> — Avec une embarcation plus puissante et un titre de navigation, l&apos;itinéraire complet vers le Cap de Creus est totalement accessible. Plus d&apos;autonomie, plus de vitesse et plus d&apos;options d&apos;itinéraire.
              </li>
              <li>
                <strong>Avec excursion privée avec skipper</strong> — L&apos;option où vous ne vous souciez de rien. Le skipper connaît chaque crique, chaque rocher de cette côte. L&apos;itinéraire s&apos;adapte au groupe et à la journée. C&apos;est la façon la plus confortable de faire l&apos;itinéraire complet, surtout si c&apos;est la première fois dans la zone.
              </li>
            </ul>

            {/* Inline CTA */}
            <div className="not-prose my-8 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Excursion privée au Cap de Creus avec skipper</p>
                <p className="text-gray-500 text-sm">Le skipper vous emmène aux criques. Vous profitez simplement. Itinéraire adapté à votre groupe.</p>
              </div>
              <Link
                href="/fr/experiences-bateau-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Voir les expériences <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Closing CTAs */}
      <div className="bg-gray-900 py-16 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à partir vers le Cap de Creus ?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Choisissez l&apos;option qui convient le mieux à votre groupe — bateau avec permis, sans permis ou excursion privée avec skipper. Si vous avez des doutes, écrivez-nous et nous vous aidons à décider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/fr/experiences-bateau-roses"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              Voir les excursions avec skipper →
            </Link>
            <a
              href="https://wa.me/34623995700?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27itin%C3%A9raire%20au%20Cap%20de%20Creus"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe59] transition-colors shadow-md"
            >
              Écrivez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 text-center">
        <Link href="/fr/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-2">
          ← Retour au blog
        </Link>
      </div>

    </main>
    </>
  );
}
