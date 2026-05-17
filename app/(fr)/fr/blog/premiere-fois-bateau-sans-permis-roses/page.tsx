import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Première fois en bateau sans permis à Roses',
  description: 'Tout ce qu\'il faut savoir avant de louer un bateau sans permis à Roses. À quoi s\'attendre, comment ça marche et pourquoi c\'est facile.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/blog/premiere-fois-bateau-sans-permis-roses',
    languages: {
      'x-default': 'https://experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
      es: 'https://experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
      fr: 'https://experienceboat.es/fr/blog/premiere-fois-bateau-sans-permis-roses',
      en: 'https://experienceboat.es/en/blog/first-time-boat-no-licence-roses',
    },
  },
  openGraph: {
    title: 'Première fois en bateau sans permis à Roses',
    description: 'Tout ce que vous devez savoir avant de louer un bateau sans permis à Roses pour la première fois.',
    url: 'https://experienceboat.es/fr/blog/premiere-fois-bateau-sans-permis-roses',
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
  { id: 'permis', label: 'Faut-il un permis ?' },
  { id: 'difficile', label: 'Est-ce difficile ?' },
  { id: 'canaux', label: 'Les canaux de Santa Margarita' },
  { id: 'journee', label: 'Le jour J' },
  { id: 'questions', label: 'Les 6 questions fréquentes' },
  { id: 'apporter', label: 'Quoi apporter' },
  { id: 'saison', label: 'Haute vs. basse saison' },
  { id: 'skipper', label: 'Préférez-vous un skipper ?' },
];

const faqs = [
  {
    q: 'Et si je me perds ?',
    a: 'Les canaux de Santa Margarita sont un environnement très reconnaissable et relativement petit. Il est difficile de se perdre. Avant de partir, nous vous orienterons avec une carte et vous aurez notre numéro de téléphone pour toute question pendant la sortie. La baie de Roses offre aussi des repères visuels très clairs — le village de Roses et les Pyrénées en arrière-plan sont visibles depuis n\'importe quel point de la baie.',
  },
  {
    q: 'Et si je percute quelque chose ?',
    a: 'Les petits accrochages font partie de la navigation en canal, surtout lors des premières sorties. Les embarcations sont équipées de défenses latérales précisément pour ça. Pour les incidents plus graves, une couverture est incluse — consultez les conditions exactes lors de la réservation. L\'essentiel est d\'aller doucement et sans se presser, ce que les canaux invitent naturellement à faire.',
  },
  {
    q: 'Puis-je partir seul, sans accompagnateur ?',
    a: 'Oui. Nos embarcations sans permis sont parfaitement maniables par une seule personne. En fait, certaines des sorties les plus tranquilles et les plus agréables que nous ayons sont celles de personnes qui partent seules tôt le matin explorer les canaux.',
  },
  {
    q: 'Faut-il savoir nager ?',
    a: 'Ce n\'est pas obligatoire, mais c\'est recommandé si vous comptez vous baigner dans les criques. Les gilets de sauvetage sont inclus dans la location et nous recommandons de les porter, surtout s\'il y a des enfants à bord.',
  },
  {
    q: 'Peut-on apporter de la nourriture et des boissons ?',
    a: 'Oui, sans problème. Nous le recommandons même pour les sorties à la journée. Une glacière avec des boissons fraîches, quelques snacks et l\'ombre de l\'embarcation font du midi en crique l\'un des meilleurs moments de la journée.',
  },
  {
    q: 'Que faire si le temps se dégrade en cours de sortie ?',
    a: 'Si les prévisions sont mauvaises avant le départ, nous vous avertissons à l\'avance et annulons sans frais. Si le temps se dégrade pendant la sortie, la recommandation est toujours de rentrer au port. Les canaux de Santa Margarita sont un refuge naturel — en cas de vent ou de pluie, les eaux intérieures restent navigables et sûres.',
  },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Première fois en bateau sans permis à Roses — Guide complet',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://experienceboat.es/images/hero/hero-1.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://experienceboat.es/fr/blog/premiere-fois-bateau-sans-permis-roses' },
    inLanguage: 'fr',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticlePremiereFoisFr() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Bateau sans permis naviguant dans les canaux de Santa Margarita à Roses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Guides
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Première fois en bateau sans permis à Roses — tout ce qu&apos;il faut savoir
            </h1>
          </div>
        </div>
      </div>

      {/* Article meta */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 avril 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            8 min de lecture
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
          <span className="text-gray-600 truncate">Première fois en bateau sans permis</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop sticky sidebar */}
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

          {/* Article body */}
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
              Chaque saison, des dizaines de personnes arrivent à Roses avec la même idée en tête : louer un bateau et explorer la côte. Et chaque saison, beaucoup d&apos;entre elles hésitent au dernier moment. Est-ce difficile ? Faut-il un permis ? Que se passe-t-il si on se perd ou si quelque chose tourne mal ?
            </p>
            <p>
              Ce guide existe pour répondre à ces questions honnêtement. Sans exagérer la facilité ni minimiser ce qu&apos;il faut savoir. Après l&apos;avoir lu, vous aurez toutes les informations pour décider si un bateau sans permis est la bonne option pour vous — et si c&apos;est le cas, comment en profiter au maximum dès le premier jour.
            </p>

            {/* H2 #1 */}
            <h2 id="permis">Faut-il un permis pour louer un bateau à Roses ?</h2>
            <p>
              La réponse courte est <strong>non</strong>. En Espagne, la réglementation nautique permet de louer des embarcations jusqu&apos;à 5 mètres de longueur avec des moteurs jusqu&apos;à 15 CV sans aucun titre de navigation. Pas besoin d&apos;avoir fréquenté une école de navigation, pas besoin de carte ni de démarche préalable. La seule condition est que la personne aux commandes soit majeure.
            </p>
            <p>
              Les passagers peuvent avoir n&apos;importe quel âge — d&apos;ailleurs, les familles avec de jeunes enfants sont l&apos;un des groupes qui apprécient le plus ce type de sortie, surtout dans des environnements tranquilles comme les canaux de Santa Margarita.
            </p>
            <p>
              Cette réglementation est spécifique à l&apos;Espagne. Si vous venez d&apos;un pays avec des règles plus strictes, cela peut vous surprendre — mais c&apos;est parfaitement légal et courant sur toute la côte méditerranéenne espagnole.
            </p>

            {/* H2 #2 */}
            <h2 id="difficile">Est-ce difficile de piloter un bateau sans permis ?</h2>
            <p>
              Ça dépend de ce que vous entendez par difficile. Comparé à conduire une voiture en ville, piloter un bateau sans permis dans les canaux de Santa Margarita est considérablement plus facile. Pas de feux rouges, pas de piétons qui traversent et la vitesse maximale dans les canaux intérieurs est très faible.
            </p>
            <p>
              Les bateaux sans permis ont des moteurs de faible puissance qui répondent de façon douce et prévisible. Ils n&apos;accélèrent pas brusquement, n&apos;ont pas d&apos;embrayage et le volant fonctionne de manière intuitive. <strong>La plupart des personnes prennent le coup de main en 10-15 minutes</strong> de navigation dans les canaux.
            </p>
            <p>
              Ce qui demande un peu d&apos;attention, c&apos;est la manœuvre d&apos;amarrage et le passage sous les ponts bas des canaux. Ce sont des moments qui exigent de la concentration, mais avec les instructions du briefing préalable et en allant doucement, ils ne posent aucun problème réel.
            </p>
            <p>
              La clé est de ne pas se presser. Le bateau sans permis n&apos;est pas un véhicule pour aller vite — c&apos;est un véhicule pour profiter tranquillement.
            </p>

            {/* H2 #3 */}
            <h2 id="canaux">Les canaux de Santa Margarita — le meilleur endroit pour commencer</h2>
            <p>
              Tous les environnements ne se valent pas pour une première sortie en bateau. Partir directement en mer ouverte avec des vagues et un trafic nautique intense peut être déstabilisant pour quelqu&apos;un sans expérience. Les canaux de Santa Margarita sont exactement le contraire.
            </p>
            <p>
              Les voies navigables intérieures de Santa Margarita sont des eaux totalement protégées : sans houle, sans courants et avec des limites de vitesse basses. C&apos;est l&apos;environnement idéal pour prendre confiance avec le bateau avant de rejoindre la baie de Roses.
            </p>
            <p>
              Mais ce qui est le plus intéressant, c&apos;est que les canaux ne sont pas seulement un terrain d&apos;entraînement — ils sont une destination en soi. Des deux côtés des voies navigables, plus de 500 maisons ont un accès direct à l&apos;eau depuis leur jardin. Chacune avec son ponton privé, sa terrasse sur le canal et sa petite embarcation amarrée. C&apos;est une image que l&apos;on ne s&apos;attend pas à trouver sur la Costa Brava et qui reste gravée dans la mémoire.
            </p>
            <p>
              Quand vous atteignez la baie de Roses après avoir parcouru les canaux, vous avez déjà navigué 30-40 minutes et la conduite du bateau n&apos;est plus une préoccupation. Vous pouvez vous concentrer sur le plaisir de l&apos;horizon.
            </p>

            {/* H2 #4 */}
            <h2 id="journee">Ce qui se passe exactement le jour de la sortie</h2>
            <p>Pour qu&apos;il n&apos;y ait pas de surprise, voici ce qui se passe depuis votre arrivée jusqu&apos;au retour.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Avant le départ — le briefing</h3>
            <p>
              Nous vous retrouvons à la Marina de Santa Margarita à l&apos;heure convenue. L&apos;un de nos skippers — Tomàs ou Max — vous accueille et consacre 10 à 15 minutes à vous expliquer le fonctionnement du bateau : comment démarrer, accélérer, tourner, arrêter et manœuvrer dans les canaux. Nous vous orienterons également avec une carte de la zone et vous recommanderons un itinéraire selon le temps disponible et les conditions de mer.
            </p>
            <p>Ce n&apos;est pas un cours magistral. C&apos;est une conversation pratique devant le bateau. Si vous avez des questions, c&apos;est le moment de les poser.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Les premières minutes dans les canaux</h3>
            <p>
              La première partie de la sortie se déroule toujours dans les canaux intérieurs. C&apos;est le moment de se familiariser avec le bateau sans pression : vitesse basse, eaux calmes et paysage qui distrait. La plupart des gens quittent les canaux avec le sentiment que c&apos;était plus facile que prévu.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">La baie de Roses et la suite</h3>
            <p>
              Une fois dans la baie, le monde s&apos;ouvre. Vous pouvez rester près et mouiller dans une crique, ou vous aventurer vers les criques du Cap de Creus si les conditions le permettent. Vous décidez du rythme et de l&apos;itinéraire — il n&apos;y a aucune obligation d&apos;aller quelque part en particulier.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Le retour</h3>
            <p>
              Vous revenez à la marina à l&apos;heure convenue selon la formule choisie. Si pendant la sortie une question ou un incident survient, vous disposez de notre numéro de téléphone disponible à tout moment.
            </p>

            {/* H2 #5 — FAQ */}
            <h2 id="questions">Les 6 questions que nous posent le plus souvent les débutants</h2>

            <div className="not-prose space-y-5 my-8">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* H2 #6 */}
            <h2 id="apporter">Quoi apporter le jour de la sortie</h2>
            <p>Liste de base pour une première sortie sans permis depuis Roses :</p>
            <ul>
              <li>Protection solaire à indice élevé — le reflet du soleil sur l&apos;eau multiplie l&apos;exposition</li>
              <li>Lunettes de soleil à protection polarisée</li>
              <li>Maillot de bain et serviette si vous comptez nager</li>
              <li>Chaussures à semelle antidérapante — jamais de tongs plates sans adhérence</li>
              <li>Glacière avec eau et boissons fraîches, surtout en juillet et août</li>
              <li>Téléphone avec coque étanche ou pochette waterproof</li>
              <li>Une couche légère pour le retour si vous partez au coucher du soleil — en mer, il fait plus frais qu&apos;on ne le croit</li>
            </ul>

            {/* H2 #7 */}
            <h2 id="saison">Basse saison vs. haute saison — quand y aller</h2>
            <p>
              C&apos;est une question qui mérite une réponse honnête. Juillet et août à Roses sont des mois spectaculaires mais aussi les plus fréquentés. Les criques ont plus de monde, le trafic nautique dans la baie est plus dense et la disponibilité des embarcations s&apos;épuise des semaines à l&apos;avance.
            </p>
            <p>
              Si vous avez de la flexibilité, <strong>mai, juin et septembre</strong> offrent d&apos;excellentes conditions de navigation avec beaucoup moins de fréquentation. Les eaux sont parfaites pour se baigner, les criques sont tranquilles et l&apos;expérience des canaux de Santa Margarita prend une autre dimension quand on n&apos;a pas à partager l&apos;espace avec des dizaines d&apos;embarcations.
            </p>
            <p>
              Pour les familles avec de jeunes enfants, juin est probablement le mois idéal : eau déjà chaude, longues journées et aucune des foules d&apos;août.
            </p>

            {/* H2 #8 */}
            <h2 id="skipper">Et si vous préférez que quelqu&apos;un d&apos;autre pilote ?</h2>
            <p>
              Si après avoir lu ceci vous décidez que vous préférez profiter de la journée sans vous soucier de la conduite, nous avons aussi cette option. Nos excursions privées avec skipper combinent la traversée des canaux de Santa Margarita avec la sortie vers le Cap de Creus et les criques les plus spectaculaires de la Costa Brava nord. Tomàs ou Max s&apos;occupent de tout — vous vous occupez juste de profiter.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-8 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Excursions privées avec skipper</p>
                <p className="text-gray-500 text-sm">Cap de Creus, criques sauvages et canaux. Le skipper s&apos;occupe de l&apos;itinéraire.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prêt à réserver ?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            L&apos;étape suivante est de voir quelles embarcations sont disponibles et de choisir celle qui convient le mieux à votre groupe. Si vous avez des questions, écrivez-nous — Tomàs ou Max vous répondent personnellement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/alquiler-barco-sin-licencia-roses"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              Voir les bateaux sans permis à Roses →
            </Link>
            <a
              href="https://wa.me/34623995700?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20la%20location%20sans%20permis"
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
