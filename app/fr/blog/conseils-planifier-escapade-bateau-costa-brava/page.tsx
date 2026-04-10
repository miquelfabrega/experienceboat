import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Conseils pour planifier l\'escapade parfaite en bateau sur la Costa Brava',
  description: 'Guide pratique pour planifier votre sortie en bateau sur la Costa Brava : choix de l\'embarcation, itinéraires, météo, sécurité et provisions.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/blog/conseils-planifier-escapade-bateau-costa-brava',
    languages: {
      'x-default': 'https://experienceboat.es/blog/planificar-escapada-barco-costa-brava',
      es: 'https://experienceboat.es/blog/planificar-escapada-barco-costa-brava',
      fr: 'https://experienceboat.es/fr/blog/conseils-planifier-escapade-bateau-costa-brava',
      en: 'https://experienceboat.es/en/blog/tips-planning-boat-trip-costa-brava',
    },
  },
  openGraph: {
    title: 'Conseils pour planifier l\'escapade parfaite en bateau sur la Costa Brava',
    description: 'Guide pratique pour planifier votre sortie en bateau : embarcation, météo, sécurité et provisions.',
    url: 'https://experienceboat.es/fr/blog/conseils-planifier-escapade-bateau-costa-brava',
    locale: 'fr_FR',
    type: 'article',
  },
};

const toc = [
  { id: 'embarcation', label: '1. Choisissez l\'embarcation' },
  { id: 'itineraire', label: '2. Planifiez votre itinéraire' },
  { id: 'meteo', label: '3. La météo' },
  { id: 'securite', label: '4. Le kit de sécurité' },
  { id: 'provisions', label: '5. Préparez des provisions' },
  { id: 'environnement', label: '6. Protégez l\'environnement' },
  { id: 'profitez', label: '7. Profitez du voyage' },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Conseils pour planifier l'escapade parfaite en bateau sur la Costa Brava",
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://experienceboat.es/images/services/sin-licencia.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://experienceboat.es/fr/blog/conseils-planifier-escapade-bateau-costa-brava' },
    inLanguage: 'fr',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticlePlanifierEscapadeFr() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/services/sin-licencia.jpg"
          alt="Couple profitant d'un bateau sur la Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Conseils
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Conseils pour planifier l&apos;escapade parfaite en bateau sur la Costa Brava
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
            5 min de lecture
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Costa Brava
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Guide pratique
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
          <span className="text-gray-600 truncate">Planifier une escapade en bateau</span>
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
              Explorer la Costa Brava en bateau est une expérience inoubliable, pleine de paysages impressionnants, d&apos;eaux cristallines et de criques cachées. Cependant, pour vous assurer que votre escapade soit une réussite totale, il est important de planifier à l&apos;avance.
            </p>
            <p>
              Que ce soit votre première fois en mer ou que vous ayez des années d&apos;expérience, tenir compte de quelques aspects clés fait la différence entre une bonne journée et une journée parfaite. Voici 7 conseils pratiques pour planifier votre prochaine aventure en bateau sur la Costa Brava.
            </p>

            {/* H2 #1 */}
            <h2 id="embarcation">1. Choisissez le bon type d&apos;embarcation</h2>
            <p>
              Avant de larguer les amarres, il est important de sélectionner l&apos;embarcation adaptée à votre voyage. Prenez en compte la taille du groupe, vos compétences de navigation et le type d&apos;expérience que vous souhaitez vivre. Des petites <Link href="/alquiler-barco-sin-licencia-roses">embarcations sans permis</Link> aux vedettes puissantes <Link href="/alquiler-barco-con-licencia-roses">avec permis</Link> et tout le confort, la Costa Brava offre une large variété d&apos;options pour tous les goûts et tous les budgets.
            </p>

            {/* H2 #2 */}
            <h2 id="itineraire">2. Planifiez votre itinéraire</h2>
            <p>
              Une fois votre embarcation choisie, il est temps de planifier votre itinéraire. La Costa Brava nord regorge d&apos;endroits magnifiques à explorer, des tranquilles canaux de Santa Margarita aux impressionnantes formations rocheuses du <Link href="/fr/blog/itineraire-bateau-cap-de-creus-roses">Cap de Creus</Link>.
            </p>
            <p>
              Renseignez-vous sur les différentes options et décidez quelles criques vous aimeriez visiter. Tenez compte des distances de navigation et du temps nécessaire pour vous déplacer entre elles, en vous rappelant toujours qu&apos;en mer, la précipitation n&apos;est jamais une bonne conseillère.
            </p>

            {/* H2 #3 */}
            <h2 id="meteo">3. Consultez les prévisions météo</h2>
            <p>
              La météo et l&apos;état de la mer sont les facteurs les plus déterminants de toute sortie en bateau. Il est fondamental de consulter les prévisions avant de partir, en prêtant une attention particulière aux vents locaux comme la tramontane.
            </p>
            <p>
              Évitez de partir par fort vent ou houle prononcée, et assurez-vous d&apos;avoir un plan B si les conditions se détériorent (comme naviguer à l&apos;abri dans les canaux intérieurs ou rentrer au port). De notre côté, nous annulons ou modifions toujours les réservations sans frais si les conditions météo ne sont pas sûres.
            </p>

            {/* H2 #4 */}
            <h2 id="securite">4. Préparez le kit de sécurité</h2>
            <p>
              La sécurité en mer est primordiale. Assurez-vous que l&apos;embarcation de location comprend un kit de sécurité complet : gilets de sauvetage pour tous les occupants (en particulier des tailles enfant s&apos;il y a des enfants à bord), fusées, trousse de premiers secours et ancre.
            </p>
            <p>
              Lors du <em>briefing</em> avant le départ, familiarisez-vous avec le fonctionnement de chaque élément et assurez-vous que tous les passagers savent où les trouver en cas de besoin.
            </p>

            {/* H2 #5 */}
            <h2 id="provisions">5. Approvisionnez-vous en provisions</h2>
            <p>
              Avant de partir, assurez-vous d&apos;emporter suffisamment de provisions pour toute la traversée. La mer donne faim et soif, alors emportez des aliments légers, des fruits et des boissons en quantité suffisante — et surtout de l&apos;eau douce pour rester hydraté sous le soleil.
            </p>
            <p>
              Une glacière de glace est indispensable en été. Si vous prévoyez de mouiller à midi, un bon pique-nique à bord ou réserver une table dans un bar-restaurant accessible en bateau (comme celui de Cala Pelosa) complètera parfaitement la journée.
            </p>

            {/* H2 #6 */}
            <h2 id="environnement">6. Protégez le milieu marin</h2>
            <p>
              Respectez l&apos;environnement marin et adoptez des pratiques durables pendant la navigation. C&apos;est la responsabilité de chacun :
            </p>
            <ul>
              <li>Évitez de jeter tout type de déchets ou de plastique à la mer (gardez tous vos déchets à bord).</li>
              <li>Ne mouillez JAMAIS à l&apos;ancre sur les herbiers de <strong>posidonie</strong> ; cherchez toujours des fonds sablonneux ou utilisez les bouées de mouillage prévues à cet effet.</li>
              <li>Respectez les zones de protection marine et la vitesse maximale autorisée, surtout en vous approchant de la côte.</li>
            </ul>

            {/* H2 #7 */}
            <h2 id="profitez">7. Profitez du voyage</h2>
            <p>
              Enfin, une fois en mer et avec tout sous contrôle, détendez-vous et profitez. Prenez le temps de contempler les impressionnants paysages côtiers, plongez dans les eaux cristallines pour nager et faire du snorkeling, et explorez les criques qui jalonnent la côte.
            </p>
            <p>
              Rappelez-vous que l&apos;important n&apos;est pas d&apos;arriver vite à une destination précise, mais de profiter de la navigation et de créer des souvenirs inoubliables avec votre groupe.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-10 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Pas de permis ?</p>
                <p className="text-gray-500 text-sm">Aucun problème. Nous avons des bateaux faciles à manœuvrer pour prendre la mer sans expérience préalable.</p>
              </div>
              <Link
                href="/fr/location-bateau-sans-permis-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Voir les bateaux sans permis <ChevronRight className="w-4 h-4" />
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
