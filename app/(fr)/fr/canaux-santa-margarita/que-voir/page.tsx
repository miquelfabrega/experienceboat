import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Que voir sur les canaux de Santa Margarita',
  description:
    'Découvrez tout ce que cachent les canaux de Santa Margarita depuis l\'eau. Maisons, faune et la Costa Brava la plus authentique. Sorties privées depuis Roses.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/canaux-santa-margarita/que-voir',
    languages: {
      'x-default': 'https://experienceboat.es/canales-santa-margarita/que-ver',
      es: 'https://experienceboat.es/canales-santa-margarita/que-ver',
      fr: 'https://experienceboat.es/fr/canaux-santa-margarita/que-voir',
      en: 'https://experienceboat.es/en/santa-margarita-canals-roses/what-to-see',
    },
  },
  openGraph: {
title: 'Que voir sur les canaux de Santa Margarita',
    description:
      'Découvrez tout ce que cachent les canaux de Santa Margarita depuis l\'eau. Maisons, faune et la Costa Brava la plus authentique. Sorties privées depuis Roses.',
    url: 'https://experienceboat.es/fr/canaux-santa-margarita/que-voir',
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
    question: 'Peut-on visiter les canaux de Santa Margarita à pied ?',
    answer:
      'Oui, il existe une promenade piétonne qui longe une partie des canaux et des belvédères depuis lesquels on peut voir l\'eau et les maisons. Mais l\'expérience depuis le bateau est totalement différente — depuis l\'eau, on accède aux tronçons les plus intérieurs et on voit le lotissement sous l\'angle que ses architectes avaient imaginé à l\'origine.',
  },
  {
    question: 'Combien de temps faut-il pour parcourir les canaux en bateau ?',
    answer:
      'Le parcours des canaux intérieurs à un rythme tranquille dure entre 60 et 90 minutes. Il se combine parfaitement avec une sortie vers la baie de Roses ou le Cap de Creus dans la même journée.',
  },
  {
    question: 'Quelle est la meilleure saison pour visiter les canaux de Santa Margarita ?',
    answer:
      'Mai, juin et septembre offrent les meilleures conditions : eaux calmes, température agréable, faune active et beaucoup moins de trafic nautique qu\'en plein août. Pour la photographie, la première heure du matin à n\'importe quelle époque de l\'année est imbattable.',
  },
  {
    question: 'Peut-on faire du snorkeling dans les canaux de Santa Margarita ?',
    answer:
      'Les canaux intérieurs ne sont pas l\'environnement idéal pour le snorkeling — les eaux sont plus calmes que cristallines sur certains tronçons. Pour le snorkeling, nous recommandons les criques de la baie de Roses et du Cap de Creus, dont les fonds sont bien plus riches et l\'eau plus transparente.',
  },
  {
    question: 'Y a-t-il des restrictions de navigation sur les canaux ?',
    answer:
      'Oui. Les canaux ont une limite de vitesse pour protéger les bateaux amarrés et la tranquillité du lotissement. Nos embarcations sont parfaitement adaptées à ces conditions et avant chaque sortie, nous expliquons les règles de navigation de base sur les canaux.',
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
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
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
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://experienceboat.es/fr' },
      { '@type': 'ListItem', position: 2, name: 'Canaux de Santa Margarita', item: 'https://experienceboat.es/fr/canaux-santa-margarita' },
      { '@type': 'ListItem', position: 3, name: 'Que voir', item: 'https://experienceboat.es/fr/canaux-santa-margarita/que-voir' },
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

export default function QueVoirCanauxSantaMargarita() {
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
              <span className="text-slate-900 font-medium">Que voir</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Que voir sur les canaux de Santa Margarita depuis l&apos;eau
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Les{' '}
              <Link href="/fr/canaux-santa-margarita" className="text-sky-600 hover:underline">
                canaux de Santa Margarita
              </Link>{' '}
              peuvent se parcourir à pied ou depuis les belvédères dispersés dans le lotissement. Mais
              aucune de ces perspectives ne ressemble à ce que l&apos;on voit depuis l&apos;eau. Depuis un
              bateau, les canaux révèlent une dimension totalement différente : les maisons se montrent
              sous leur angle le plus intime et le rythme du parcours — lent, tranquille, sans aucune
              hâte — transforme la balade en quelque chose qui ne ressemble à aucune autre expérience sur
              la Costa Brava.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3">

            <h2>Les maisons sur l&apos;eau — une architecture unique sur la Costa Brava</h2>
            <p>
              L&apos;image la plus caractéristique des canaux de Santa Margarita est celle des maisons avec
              leur embarcadère privé. Plus de 500 habitations ont un accès direct à l&apos;eau depuis leur
              jardin — chacune avec son petit ponton, son bateau amarré et sa terrasse donnant sur le canal.
            </p>
            <p>
              Depuis la terre, ces maisons se voient par derrière — la façade principale donne sur la rue.
              Depuis le bateau, on les voit par devant : jardins avec palmiers, terrasses avec parasols,
              propriétaires prenant leur café le matin avec les pieds presque dans l&apos;eau. C&apos;est la face
              privée de Santa Margarita que la plupart des touristes ne voient jamais.
            </p>
            <p>
              L&apos;architecture varie considérablement d&apos;une maison à l&apos;autre. Il y a des villas des années 60
              avec le style méditerranéen d&apos;origine, des rénovations modernes avec de grandes baies vitrées
              sur le canal et quelques maisons qui ont conservé intact le design de la construction du
              lotissement. Pour les amateurs d&apos;architecture résidentielle, le parcours des canaux est un
              catalogue unique sur la Costa Brava.
            </p>

            <h2>Le rythme du parcours — lent par nature</h2>
            <p>
              Les canaux imposent une navigation à vitesse réduite. Cette lenteur n&apos;est pas un défaut :
              c&apos;est précisément ce qui rend le trajet spécial. Dans un cadre d&apos;eaux calmes et protégées,
              le temps s&apos;étire et le paysage se découvre en détail.
            </p>
            <p>
              Cette lenteur imposée est, paradoxalement, l&apos;un des aspects les plus appréciés du parcours :
              dans un monde où tout va vite, les canaux de Santa Margarita invitent à ralentir et à regarder.
            </p>
            <p>
              Pour ceux qui naviguent pour la première fois, les tronçons droits, les courbes douces et
              les repères visuels du lotissement — façades, embarcadères, végétation — aident à s&apos;orienter
              sans se presser. Le parcours reste reconnaissable à tout moment.
            </p>

            <h2>La faune des canaux — ce que vous n&apos;attendez pas trouver</h2>
            <p>
              Les canaux de Santa Margarita ne sont pas que de l&apos;architecture. Les eaux calmes et
              protégées des voies navigables intérieures abritent une faune qui surprend ceux qui ne
              s&apos;y attendent pas.
            </p>
            <p>
              Les oiseaux sont les stars du spectacle. Des hérons cendrés perchés sur les embarcadères
              privés, des martins-pêcheurs qui traversent les canaux comme des flèches bleu électrique,
              des canards qui nagent entre les bateaux amarrés sans se soucier du passage des embarcations
              de location. Pour les familles avec enfants, l&apos;observation de la faune pendant le parcours
              est souvent l&apos;un des moments les plus mémorables de la sortie.
            </p>
            <p>
              Sur les parois submergées des pontons et des embarcadères, quand l&apos;eau est particulièrement
              claire, on peut apercevoir de petits poissons se déplaçant entre les algues. Ce n&apos;est pas le
              Cap de Creus — mais cela a son propre écosystème tranquille qui mérite l&apos;attention.
            </p>

            <h2>Les canaux à l&apos;aube et au coucher du soleil — la lumière qui change tout</h2>
            <p>
              Les canaux de Santa Margarita sont l&apos;un de ces endroits où la lumière du jour compte autant
              que le lieu lui-même. En début de matinée, quand le soleil est encore bas et que les reflets
              sur l&apos;eau sont longs et dorés, les canaux ont une qualité presque irréelle. Les maisons se
              doublent dans l&apos;eau, la lumière étire les ombres sur les façades et il règne une quiétude qui
              ne dure pas au-delà de 10 heures du matin.
            </p>
            <p>
              Au coucher du soleil, la transformation est différente mais tout aussi spectaculaire. La
              lumière chaude de fin de journée teinte les façades d&apos;orange et de rose, l&apos;eau devient un
              miroir parfait et l&apos;atmosphère s&apos;emplit de cette mélancolie méditerranéenne difficile à
              décrire mais immédiatement reconnaissable.
            </p>
            <p>
              C&apos;est précisément pour ces moments qu&apos;existe le{' '}
              <Link
                href="/fr/experiences-bateau-roses/sunset-experience"
                className="text-sky-600 hover:underline"
              >
                Sunset Experience
              </Link>{' '}
              d&apos;Experience Boat : une sortie au coucher du soleil sur les canaux de Santa Margarita qui
              commence avec la dernière lumière du jour sur l&apos;eau et se termine quand le soleil disparaît
              derrière l&apos;horizon de la baie de Roses.
            </p>

            <div className="my-10 flex justify-center sm:justify-start">
              <Link
                href="/fr/experiences-bateau-roses/sunset-experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Voir le Sunset Experience &rarr;
              </Link>
            </div>

            <h2>Les canaux selon les saisons</h2>
            <p>
              Les canaux de Santa Margarita changent avec les saisons d&apos;une façon que peu de zones
              touristiques de la Costa Brava peuvent égaler.
            </p>
            <ul className="mb-8">
              <li>
                <strong>Au printemps (avril, mai, juin)</strong> — c&apos;est la période la plus calme et
                sans doute la plus belle. Les jardins des maisons sont en fleurs, la végétation qui
                borde certains tronçons du canal est à son point le plus exubérant et la faune est
                plus active qu&apos;en plein été. Les eaux sont claires et tranquilles. Pour ceux qui veulent
                vivre les canaux dans leur version la plus authentique, le printemps est le moment idéal.
              </li>
              <li>
                <strong>En été (juillet, août)</strong> — les canaux sont plus animés et plus colorés.
                Les propriétaires sont dans leurs maisons, les terrasses ont de l&apos;activité et l&apos;ambiance
                du lotissement est celle d&apos;une petite ville côtière en pleine saison. Il y a plus de
                bateaux sur les canaux mais aussi plus d&apos;animation. La première heure du matin reste
                le meilleur moment pour sortir avant que la chaleur ne s&apos;installe.
              </li>
              <li>
                <strong>En septembre et octobre</strong> — la saison idéale pour ceux qui préfèrent
                les canaux sans foule. Les eaux restent chaudes pour se baigner, les touristes ont
                considérablement diminué et les canaux retrouvent cette quiétude du début de saison.
                Beaucoup de propriétaires sont encore dans leurs maisons en septembre, ce qui donne
                au parcours l&apos;atmosphère résidentielle qui le rend si unique.
              </li>
            </ul>

            <h2>Comment rejoindre les canaux de Santa Margarita</h2>
            <p>
              Les canaux de Santa Margarita se trouvent à l&apos;extrémité nord de Roses, à moins de
              5 minutes en voiture depuis le centre du village. Depuis notre base à la Marina de Santa
              Margarita, l&apos;accès au début des canaux navigables est immédiat — la sortie en bateau
              commence sur les canaux dès la première minute.
            </p>
            <p>
              Pour rejoindre la Marina de Santa Margarita depuis le centre de Roses, prenez l&apos;Avinguda
              de Rhode vers le nord et suivez les indications vers la Marina. Un parking gratuit est
              disponible à proximité du point d&apos;embarquement.
            </p>
            <p className="font-semibold text-slate-800">
              Av. Clot Franquest Nord, 17480 Roses, Girona (Espagne)
            </p>

            <div className="my-10 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1sfr!2ses!4v1700000000000!5m2!1sfr!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de la Marina de Santa Margarita"
              />
            </div>

            <hr className="my-12 border-slate-200" />

            <h2 className="!mt-0">Questions fréquentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{faq.question}</h3>
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
                <Link href="/fr/canaux-santa-margarita/itineraire-cap-de-creus" className="text-sky-600 hover:underline">
                  Itinéraire en bateau : des canaux de Santa Margarita au Cap de Creus
                </Link>
              </li>
              <li>
                <Link href="/fr/location-bateau-sans-permis-roses" className="text-sky-600 hover:underline">
                  Louer un bateau sans permis à Roses
                </Link>
              </li>
              <li>
                <Link href="/fr/experiences-bateau-roses" className="text-sky-600 hover:underline">
                  Expériences en bateau avec skipper à Roses
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
