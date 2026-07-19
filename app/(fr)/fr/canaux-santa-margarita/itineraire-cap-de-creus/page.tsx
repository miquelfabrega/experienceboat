import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Bateau de Santa Margarita au Cap de Creus',
  description:
    'L\'itinéraire nautique le plus complet de la Costa Brava nord : des canaux de Santa Margarita au Cap de Creus en bateau privé depuis Roses. Réservez en ligne.',
  alternates: buildAlternates('canalsRoute', 'fr'),
  openGraph: {
title: 'Itinéraire en bateau : canaux de Santa Margarita → Cap de Creus',
    description:
      'L\'itinéraire nautique le plus complet de la Costa Brava nord : des canaux de Santa Margarita au Cap de Creus en bateau privé depuis Roses. Réservez en ligne.',
    url: 'https://www.experienceboat.es/fr/canaux-santa-margarita/itineraire-cap-de-creus',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'article',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: 'Combien de temps dure l\'itinéraire complet des canaux de Santa Margarita au Cap de Creus ?',
    answer:
      'La journée complète dure environ 8 heures, dont 3 heures de navigation active et le reste en temps d\'arrêt dans les criques — baignades, déjeuner à bord et exploration du parc naturel. C\'est une longue journée que nous recommandons aux groupes qui veulent tirer le meilleur parti d\'une journée en mer.',
  },
  {
    question: 'Peut-on faire l\'itinéraire en demi-journée ?',
    answer:
      'Le tronçon jusqu\'au Cap de Creus avec suffisamment de temps pour en profiter nécessite la journée complète. En demi-journée, on peut parcourir les canaux et rejoindre les criques les plus proches de la baie de Roses — une expérience tout aussi précieuse mais différente de l\'itinéraire complet jusqu\'au parc naturel.',
  },
  {
    question: 'Faut-il de l\'expérience nautique pour faire cet itinéraire ?',
    answer:
      'Non, si vous choisissez l\'option avec skipper. Salvador ou son équipe pilotent l\'embarcation pendant toute la journée et connaissent l\'itinéraire dans les moindres détails. Pour l\'option avec permis, un PNB ou un titre équivalent est requis, notamment pour le tronçon du Cap de Creus qui peut présenter des conditions de vent plus exigeantes.',
  },
  {
    question: 'Que se passe-t-il si la tramontane empêche d\'atteindre le Cap de Creus ?',
    answer:
      'C\'est une possibilité réelle, surtout au printemps et en automne. Si les conditions météo ne permettent pas le tronçon du Cap de Creus en toute sécurité, nous adaptons l\'itinéraire aux criques les plus abritées de la baie de Roses ou reprogrammons la sortie sans frais supplémentaires. La sécurité passe toujours avant l\'itinéraire prévu.',
  },
  {
    question: 'Puis-je personnaliser les arrêts de l\'itinéraire ?',
    answer:
      'Oui, tout à fait. Avant chaque sortie, nous nous entendons avec le groupe pour recueillir les préférences de parcours et d\'arrêts. Si vous souhaitez visiter des criques précises ou prioriser certains aspects — plus de temps sur les canaux, plus de temps au Cap, arrêt dans une crique particulière — nous l\'intégrons au programme de la journée.',
  },
];

/* ─── Schema Markup ──────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.experienceboat.es/fr' },
      { '@type': 'ListItem', position: 2, name: 'Canaux de Santa Margarita', item: 'https://www.experienceboat.es/fr/canaux-santa-margarita' },
      { '@type': 'ListItem', position: 3, name: 'Itinéraire Cap de Creus', item: 'https://www.experienceboat.es/fr/canaux-santa-margarita/itineraire-cap-de-creus' },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page Component ─────────────────────────────────────────────────────── */

export default function ItineraireCapDeCreus() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/fr" className="hover:text-sky-600 transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/fr/canaux-santa-margarita" className="hover:text-sky-600 transition-colors">Canaux de Santa Margarita</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Itinéraire Cap de Creus</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Itinéraire en bateau des canaux de Santa Margarita au Cap de Creus
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Il existe un itinéraire nautique sur la Costa Brava nord qui a tout pour lui : des eaux
              calmes pour commencer,{' '}
              <Link href="/fr" className="text-sky-600 hover:underline">
                une baie ouverte
              </Link>{' '}
              au centre et un parc naturel à la fin. Il commence sur les{' '}
              <Link href="/fr/canaux-santa-margarita" className="text-sky-600 hover:underline">
                canaux de Santa Margarita
              </Link>{' '}
              — maisons sur l&apos;eau, ponts en pierre, sérénité méditerranéenne — et se termine au
              Cap de Creus, le point le plus oriental de la péninsule Ibérique et l&apos;un des environnements
              naturels les plus spectaculaires de la Méditerranée. Entre les deux, la baie de Roses
              avec les Pyrénées en toile de fond et les plus belles criques de la côte nord.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3">

            <h2>L&apos;itinéraire complet — tronçon par tronçon</h2>
            <p>
              Voici la description détaillée de l&apos;itinéraire de journée complète des canaux de Santa
              Margarita au Cap de Creus. Les temps sont indicatifs et s&apos;adaptent selon le groupe,
              le rythme et les conditions de mer.
            </p>

            <h3>Tronçon 1 — Les canaux de Santa Margarita (30–45 min)</h3>
            <p>
              L&apos;itinéraire commence là où se trouve la base d&apos;Experience Boat : la Marina de Santa
              Margarita, à l&apos;entrée des canaux. Dès la première minute, l&apos;embarcation navigue sur les
              voies navigables intérieures du lotissement, bordées de des centaines de maisons avec ponton privé.
            </p>
            <p>
              C&apos;est le tronçon le plus tranquille de la journée et le plus photogénique. Les eaux sont
              totalement calmes, les ponts en pierre blanche se passent par en dessous et le rythme est
              lent et contemplatif. Pour les groupes qui n&apos;ont jamais navigué sur les canaux, ce premier
              tronçon est souvent le moment préféré de toute la journée — et le plus inattendu.
            </p>
            <p>
              En début de matinée, quand le soleil n&apos;est pas encore trop haut et que les reflets sur
              l&apos;eau sont parfaits, les canaux ont une lumière que l&apos;on ne trouve nulle part ailleurs sur
              la Costa Brava.
            </p>

            <h3>Tronçon 2 — Sortie vers la baie de Roses (15–20 min)</h3>
            <p>
              Quand les canaux intérieurs s&apos;ouvrent sur la mer, le décor change complètement. La baie de
              Roses s&apos;étend devant l&apos;embarcation dans toute son ampleur : les Pyrénées enneigées en toile
              de fond en hiver et au printemps, le village de Roses à droite et le début du massif du Cap
              de Creus à gauche.
            </p>
            <p>
              C&apos;est le moment où la journée prend de l&apos;ampleur. Ce qui avait commencé comme une promenade
              intime sur les canaux se transforme en une vraie navigation, avec un horizon ouvert et du
              vent dans le visage.
            </p>
            <p>
              Sur ce tronçon, nous faisons le premier arrêt optionnel : si le groupe veut se baigner
              avant de continuer vers le Cap, la baie offre des zones tranquilles parfaites pour une
              première trempette matinale.
            </p>

            <h3>Tronçon 3 — Côte nord vers le Cap de Creus (30–40 min)</h3>
            <p>
              Depuis la baie de Roses, l&apos;itinéraire longe la côte nord en direction du Cap de Creus.
              C&apos;est le tronçon où le paysage commence à changer de caractère : la côte devient plus
              escarpée, les falaises plus hautes et la roche prend des teintes sombres qui annoncent la
              nature volcanique du parc naturel.
            </p>
            <p>
              Tout au long de ce tronçon, nous passons par Cala Canyelles Petites et Cala Almadraba —
              les deux criques les plus accessibles depuis Roses et les préférées pour la pause de milieu
              de matinée. Eaux turquoise, fond de sable et de roche, et suffisamment d&apos;espace pour mouiller
              confortablement même en haute saison.
            </p>

            <h3>Tronçon 4 — Le Parc Naturel du Cap de Creus (temps libre)</h3>
            <p>
              L&apos;arrivée au Parc Naturel du Cap de Creus est le point culminant de l&apos;itinéraire. Le paysage
              change radicalement : la végétation disparaît, la roche volcanique domine l&apos;horizon et les
              criques du Cap de Creus ont une transparence et une couleur qui ne ressemblent à rien de
              ce que vous avez vu auparavant sur la Costa Brava.
            </p>
            <p>
              Les criques intérieures du parc — Culip, Jugadora, Fredosa — ne sont accessibles que par
              bateau. Il n&apos;y a pas de chemins qui descendent jusqu&apos;à l&apos;eau, pas de parking, pas de
              services. Juste la crique, l&apos;eau et votre groupe.
            </p>
            <p>
              C&apos;est le tronçon de temps libre de l&apos;itinéraire : mouillage dans la crique choisie, baignade,
              déjeuner à bord si vous avez apporté quelque chose pour le midi et temps libre pour faire
              ce que vous souhaitez. La plupart des groupes qui arrivent ici pour la première fois ne
              veulent plus repartir.
            </p>

            <h3>Tronçon 5 — Retour par la côte sud (45–60 min)</h3>
            <p>
              Le retour peut se faire par le même chemin ou en longeant la côte sud du Cap de Creus, qui
              a un caractère différent de l&apos;aller : plus exposée à la houle ouverte mais avec des vues
              sur le golfe du Lion et, par temps clair, sur les îles Medes à l&apos;horizon.
            </p>
            <p>
              Selon l&apos;heure et l&apos;état de la mer, le retour comprend un dernier arrêt dans la baie de
              Roses pour la baignade du soir avant de revenir sur les canaux de Santa Margarita.
            </p>
            <p>
              L&apos;arrivée sur les canaux au coucher du soleil — avec la lumière chaude de fin de journée
              sur l&apos;eau et les maisons — clôt la journée d&apos;une manière difficilement surpassable.
            </p>

            <h2>Distances et temps de l&apos;itinéraire</h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 text-sm uppercase tracking-wide">
                    <th className="p-4 border-b border-slate-200 font-semibold">Tronçon</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Distance approx.</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Temps de navigation</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-base">
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Canaux de Santa Margarita</td>
                    <td className="p-4">3–4 km</td>
                    <td className="p-4">30–45 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Baie de Roses</td>
                    <td className="p-4">8 km</td>
                    <td className="p-4">15–20 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Côte nord vers Cap de Creus</td>
                    <td className="p-4">12 km</td>
                    <td className="p-4">30–40 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Criques intérieures Cap de Creus</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4">Temps libre</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Retour</td>
                    <td className="p-4">20–22 km</td>
                    <td className="p-4">45–60 min</td>
                  </tr>
                  <tr className="bg-slate-50 font-semibold text-slate-800">
                    <td className="p-4">Total navigation</td>
                    <td className="p-4">~45 km</td>
                    <td className="p-4">~3 heures</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Le reste du temps — entre 4 et 5 heures dans une journée complète — est du temps d&apos;arrêt :
              baignades dans les criques, déjeuner à bord et exploration du parc naturel. L&apos;itinéraire
              n&apos;est pas une traversée de navigation continue mais une journée où la navigation est le
              moyen d&apos;atteindre des endroits autrement inaccessibles.
            </p>

            <h2>Avec skipper ou avec permis — quelle option choisir pour cet itinéraire</h2>

            <h3>Avec skipper (recommandé pour cet itinéraire)</h3>
            <p>
              Pour les groupes sans expérience nautique ou pour ceux qui veulent simplement profiter
              sans se soucier de la navigation, l&apos;excursion privée avec skipper est l&apos;option idéale.
              Salvador ou son équipe connaissent l&apos;itinéraire dans ses moindres détails, savent quelles sont les
              meilleures criques selon la saison et s&apos;adaptent complètement au rythme du groupe.
              Vous ne vous occupez que de profiter.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/fr/experiences-bateau-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Excursions privées avec skipper à Roses &rarr;
              </Link>
            </div>

            <h3>Avec permis (pour les navigateurs diplômés)</h3>
            <p>
              Si vous avez un PNB ou un titre équivalent et souhaitez tracer l&apos;itinéraire à votre manière
              — à votre rythme, avec les arrêts que vous voulez et sans dépendre de personne — nos
              embarcations avec permis sont parfaites pour cette traversée.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/fr/location-bateau-avec-permis-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-800 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                Location de bateau avec permis à Roses &rarr;
              </Link>
            </div>

            <h2>Ce qu&apos;il faut emporter pour l&apos;itinéraire complet</h2>
            <ul>
              <li><strong>Protection solaire haute protection et résistante à l&apos;eau</strong> — vous serez exposés pendant des heures au soleil méditerranéen.</li>
              <li><strong>Lunettes de soleil polarisées</strong> — le reflet sur l&apos;eau pendant la traversée est intense.</li>
              <li><strong>Maillots de bain et serviettes</strong> pour les arrêts dans les criques.</li>
              <li><strong>Glacière avec eau, boissons fraîches et nourriture</strong> pour le midi — déjeuner dans une crique du Cap de Creus est l&apos;un des moments dont on se souvient le plus.</li>
              <li><strong>Chaussures à semelles antidérapantes</strong>.</li>
              <li><strong>Appareil photo ou téléphone dans une housse imperméable</strong> — les criques du Cap de Creus méritent les meilleures photos que vous puissiez faire.</li>
              <li><strong>Une couche légère pour le retour</strong> — le vent de l&apos;après-midi dans la baie peut être frais même si la journée a été chaude.</li>
            </ul>

            <h2>La meilleure saison pour faire l&apos;itinéraire complet</h2>
            <p>
              <strong>Mai et juin</strong> sont les mois les plus recommandés pour ceux qui ont de la
              flexibilité. Les criques du Cap de Creus sont tranquilles, les conditions de navigation sont
              excellentes et la lumière de printemps sur les canaux est extraordinaire.
            </p>
            <p>
              <strong>Juillet et août</strong> sont la haute saison. Les criques sont plus fréquentées et
              il faut partir tôt pour arriver avant qu&apos;elles se remplissent. En contrepartie, l&apos;ambiance
              de la baie de Roses en été a une énergie particulière et les couchers de soleil au retour
              sur les canaux sont les plus spectaculaires de l&apos;année.
            </p>
            <p>
              <strong>Septembre</strong> est sans doute le meilleur mois pour cet itinéraire : eau chaude,
              criques tranquilles, conditions de navigation parfaites et les canaux de Santa Margarita
              dans leur version la plus résidentielle et authentique.
            </p>

            <hr className="my-12 border-slate-200" />

            <h2 className="!mt-0">Questions fréquentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="!mt-0 !mb-3 font-bold text-xl text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600 mb-0">{faq.answer}</p>
                </div>
              ))}
            </div>

            <hr className="my-12 border-slate-200" />

            <h2>Liens utiles</h2>
            <ul className="mb-0">
              <li>
                <Link href="/fr/canaux-santa-margarita" className="text-sky-600 hover:underline">
                  Guide principal : les canaux de Santa Margarita en bateau
                </Link>
              </li>
              <li>
                <Link href="/fr/canaux-santa-margarita/que-voir" className="text-sky-600 hover:underline">
                  Que voir sur les canaux de Santa Margarita depuis l&apos;eau
                </Link>
              </li>
              <li>
                <Link href="/fr/location-bateau-sans-permis-roses" className="text-sky-600 hover:underline">
                  Louer un bateau sans permis à Roses
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
