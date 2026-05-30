import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Anchor, Euro, Shield, Sparkles, Users } from 'lucide-react';
import ReviewsSection from '@/components/pillar-experiencias/ReviewsSection';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Excursions privées en bateau à Roses',
  description:
    'Excursions privées en bateau depuis Roses avec skipper inclus. Cap de Creus, criques vierges et baie de Roses. Rien que pour votre groupe. Réservez en ligne.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/excursiones-privadas',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/excursiones-privadas',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
    },
  },
  openGraph: {
title: 'Excursions privées en bateau à Roses',
    description:
      'Excursions privées en bateau depuis Roses avec skipper inclus. Cap de Creus, criques vierges et baie de Roses. Rien que pour votre groupe.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const faqs = [
  {
    q: 'Faut-il un permis nautique pour participer à une excursion ?',
    a: 'Non. Dans les excursions privées avec skipper, l\'un de nos skippers pilote l\'embarcation. Les participants n\'ont besoin d\'aucun titre de navigation — juste l\'envie de profiter de la mer.',
  },
  {
    q: 'Puis-je réserver une excursion privée pour un anniversaire ou un événement spécial ?',
    a: 'Oui. Les excursions privées sont parfaites pour les fêtes, enterrements de vie de garçon ou de jeune fille, anniversaires ou tout autre événement que vous souhaitez rendre mémorable. Contactez-nous et nous adaptons la sortie à l\'occasion.',
  },
  {
    q: 'Peut-on apporter de la nourriture et des boissons à bord ?',
    a: 'Oui. Vous pouvez apporter tout ce que vous voulez pour la journée. Nous recommandons une glacière avec des boissons fraîches, une protection solaire et une tenue de bain. Nous fournissons le bateau, le skipper et le trajet.',
  },
  {
    q: 'Que se passe-t-il en cas de mauvais temps le jour de l\'excursion ?',
    a: 'Nous surveillons les prévisions météorologiques quotidiennement. Si les conditions ne sont pas sûres, nous vous prévenons le plus tôt possible, annulons sans frais et cherchons avec vous une autre date.',
  },
  {
    q: 'L\'excursion est-elle adaptée aux jeunes enfants ?',
    a: 'Oui. Les excursions privées sont particulièrement confortables pour les familles avec enfants car le trajet et le rythme s\'adaptent entièrement à votre groupe. Nous disposons de gilets de sauvetage pour tous les âges.',
  },
];

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
    name: 'Excursions privées en bateau à Roses avec skipper',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
    description: 'Excursion privée en bateau au Cap de Creus, criques et baie de Roses. Skipper inclus, itinéraire adapté au groupe. Demi-journée ou journée complète.',
    duration: 'PT4H',
    inLanguage: 'fr',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
    availableLanguage: [
      { '@type': 'Language', 'name': 'Spanish' },
      { '@type': 'Language', 'name': 'French' },
      { '@type': 'Language', 'name': 'English' },
      { '@type': 'Language', 'name': 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',
    price: '300',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://www.experienceboat.es/reservas',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── BreadcrumbList Schema ───────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Expériences en bateau à Roses',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Excursions privées en bateau à Roses',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ExcursionsPriveesRosesPage() {
  return (
    <>
      <FAQSchema />
      <TouristTripSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        {/* Hero */}
        <section className="relative min-h-[52vh] flex items-end bg-slate-900">
          <Image
            src="/images/experiencias/excursiones-privadas-hero.webp"
            alt="Excursion privée en bateau au mouillage sur des eaux turquoise dans une crique du Cap de Creus, Roses"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 w-full">
            <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-3">
              <Link href="/fr/experiences-bateau-roses" className="hover:underline">
                Expériences en bateau
              </Link>
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Excursions privées en bateau à Roses
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
              Découvrez la Costa Brava nord depuis la mer sans vous préoccuper d&apos;autre chose que de
              profiter. Chez Experience Boat, nous proposons des excursions privées en bateau depuis
              Roses avec skipper inclus : Tomàs ou Max tiennent le gouvernail, connaissent chaque crique
              et chaque itinéraire, et s&apos;adaptent au rythme et aux préférences de votre groupe. Nous
              partons depuis les{' '}
              <Link href="/fr/canaux-santa-margarita" className="text-sky-300 hover:underline">
                canaux de Santa Margarita
              </Link>{' '}
              vers la baie de Roses, le Parc Naturel du Cap de Creus et les criques les plus
              spectaculaires de la Costa Brava nord.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservas"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-lg transition-all"
              >
                Réserver
              </Link>
              <a
                href="https://wa.me/34623995700?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20les%20excursions%20priv%C3%A9es%20en%20bateau%20%C3%A0%20Roses"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-[#25D366] hover:bg-[#1ebe59] text-white transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16 text-slate-600 text-lg leading-relaxed">
          {/* Nos excursions */}
          <section id="services" aria-labelledby="h-services">
            <h2 id="h-services" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Nos excursions depuis Roses
            </h2>
            <p className="mb-8">
              Toutes les sorties sont privées. L&apos;embarcation est exclusivement réservée à votre groupe
              — sans partager l&apos;espace avec d&apos;autres clients, sans horaires rigides et avec l&apos;itinéraire
              adapté à ce que vous souhaitez voir.
            </p>

            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <article className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src="/boats/orange-kiwi-620/orange-kiwi-620-hero.webp"
                    alt="Semi-rigide avec skipper — Orange Kiwi 620"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Semi-rigide avec skipper</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Ex. : Orange Kiwi 620 — jusqu&apos;à 11 personnes. Idéal pour les groupes qui recherchent
                    confort et stabilité.
                  </p>
                  <ul className="text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      Capacité habituelle : jusqu&apos;à 11 pax
                    </li>
                    <li className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-sky-600 shrink-0" />
                      Demi-journée : 300 € · Journée complète : 600 €
                    </li>
                  </ul>
                  <Link
                    href="/reservas"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Réserver
                  </Link>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src="/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-hero.webp"
                    alt="Vedette avec skipper — Spirit of the Sea 675"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vedette avec skipper</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Embarcation premium — confort maximum pour les longues journées au Cap de Creus.
                  </p>
                  <ul className="text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      Capacité : nous consulter selon le modèle
                    </li>
                    <li className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-sky-600 shrink-0" />
                      Demi-journée : 600 € · Journée complète : 1 200 €
                    </li>
                  </ul>
                  <Link
                    href="/reservas"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Réserver
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* Destinations */}
          <section aria-labelledby="h-destinations">
            <h2 id="h-destinations" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Où allez-vous lors de nos excursions ?
            </h2>
            <p className="mb-8">
              Il n&apos;y a pas d&apos;itinéraire fixe. Chaque sortie s&apos;adapte à votre groupe, au temps disponible
              et à ce que vous voulez voir. Voici les destinations les plus fréquentes depuis Roses :
            </p>

            <h3 id="cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Cap de Creus
            </h3>
            <p>
              Le Parc Naturel du Cap de Creus est la destination phare de la région et celle qui revient
              le plus souvent dans les avis de nos clients. Depuis l&apos;eau, le paysage change radicalement :
              falaises volcaniques, criques accessibles uniquement par la mer et une lumière
              méditerranéenne incomparable en photographie. À environ 45-60 minutes de Santa Margarita
              selon les conditions.
            </p>

            <h3 id="criques-cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Criques du Cap de Creus
            </h3>
            <p>
              Le Cap de Creus abrite quelques-unes des criques les plus vierges de toute la Costa Brava.
              Cala Culip, Cala Jugadora, Cala Fredosa — des criques qui n&apos;apparaissent pas dans les
              guides touristiques génériques car elles ne sont accessibles qu&apos;en bateau. Tomàs et Max
              savent lesquelles valent le détour selon la saison et l&apos;état de la mer.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Baie de Roses</h3>
            <p>
              Pour les groupes qui préfèrent des eaux plus calmes ou les sorties avec des enfants en bas
              âge, la{' '}
              <Link href="/fr" className="text-sky-600 hover:underline font-medium">
                baie de Roses
              </Link>{' '}
              offre des arrêts incroyables sans avoir besoin de s&apos;éloigner. Cala Canyelles Petites et
              Cala Almadraba sont deux des plus appréciées et se trouvent à quelques minutes du point de
              départ.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Canaux de Santa Margarita</h3>
            <p>
              La sortie elle-même est déjà une expérience. Les{' '}
              <Link href="/fr/canaux-santa-margarita" className="text-sky-600 hover:underline">
                canaux de Santa Margarita
              </Link>{' '}
              — maisons face à l&apos;eau, ambiance unique — sont le décor du début de toutes nos excursions.
              Beaucoup de clients demandent à prendre le temps d&apos;explorer les canaux avant de gagner la
              haute mer.
            </p>
          </section>

          {/* Comment se passe une excursion */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Comment se déroule une excursion avec Experience Boat ?
            </h2>
            <p className="mb-4">
              Pour vous faire une idée concrète du fonctionnement d&apos;une sortie, voici comment se passe
              habituellement une excursion à la journée :
            </p>
            <p>
              Nous nous retrouvons au point de rendez-vous à la Marina de Santa Margarita à l&apos;heure
              convenue. Tomàs ou Max vous accueillent, vous expliquent le bateau et vous demandent ce que
              vous souhaitez voir. Si vous avez des préférences d&apos;itinéraire, nous les intégrons. Si vous
              préférez la surprise, nous proposons. Nous partons par les canaux vers la baie, puis nous
              traçons la route selon le programme.
            </p>
            <p>
              Pendant la sortie, il y a des arrêts baignade dans les criques, du temps libre dans l&apos;eau
              et une totale flexibilité pour ajuster l&apos;itinéraire si vous trouvez quelque chose qui vous
              plaît. Le retour se fixe avec vous — pas d&apos;heure imposée tant que vous restez dans le temps
              réservé.
            </p>
          </section>

          {/* Tout privé */}
          <section className="rounded-2xl bg-sky-50 border border-sky-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Tout privé — aucun inconnu à bord
            </h2>
            <p className="mb-4">
              C&apos;est la différence la plus importante par rapport aux excursions partagées proposées par
              d&apos;autres entreprises de la région. Lorsque vous réservez avec Experience Boat, l&apos;embarcation
              est exclusivement pour votre groupe. Sans touristes inconnus, sans itinéraire décidé à la
              majorité, sans attendre que d&apos;autres montent ou descendent.
            </p>
            <p>
              Pour les familles avec enfants, c&apos;est particulièrement important : vous pouvez vous arrêter
              quand vous voulez, vous baigner tranquillement et adapter le rythme aux plus petits. Pour
              les groupes d&apos;amis, cela signifie profiter de la journée à votre façon, sans contraintes.
            </p>
          </section>

          {/* Infos pratiques */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Informations pratiques sur les excursions
            </h2>
            <dl className="space-y-6 text-base">
              <div>
                <dt className="font-bold text-slate-900">Combien de personnes peuvent venir ?</dt>
                <dd className="mt-1">
                  Selon l&apos;embarcation, entre 6 et 12 personnes. Si votre groupe est plus nombreux,
                  contactez-nous — nous trouvons la solution la plus adaptée.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Quelle est la durée de l&apos;excursion ?</dt>
                <dd className="mt-1">
                  Nous proposons des excursions demi-journée (environ 4 heures) et journée complète
                  (environ 8 heures). La durée exacte est convenue lors de la réservation.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Qu&apos;est-ce qui est inclus dans l&apos;excursion ?</dt>
                <dd className="mt-1">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Skipper avec connaissance de la zone (Tomàs ou Max)</li>
                    <li>Embarcation privée pour votre groupe</li>
                    <li>Carburant</li>
                    <li>Équipement de sécurité réglementaire</li>
                    <li>Arrêts baignade avec échelle d&apos;accès à l&apos;eau</li>
                    <li>Recommandations d&apos;itinéraire personnalisées</li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Combien de temps à l&apos;avance faut-il réserver ?</dt>
                <dd className="mt-1">
                  En juillet et août, nous recommandons de réserver au moins deux semaines à l&apos;avance.
                  En moyenne saison, 48-72 heures suffisent généralement.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Peut-on personnaliser l&apos;itinéraire ?</dt>
                <dd className="mt-1">
                  Oui, entièrement. Avant de partir, nous discutons avec vous, recueillons vos préférences
                  et construisons l&apos;itinéraire à partir de là. Si vous souhaitez visiter des criques
                  précises, nous essayons de les inclure dans la mesure où les conditions de mer le
                  permettent.
                </dd>
              </div>
            </dl>
          </section>

          {/* Pourquoi choisir */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              Pourquoi choisir une excursion privée avec Experience Boat ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 not-prose">
              {[
                {
                  icon: Users,
                  title: 'Skipper local, pas guide touristique',
                  text: 'Tomàs et Max sont des skippers proches qui connaissent la région de première main. Ils ne récitent pas un discours préparé — ils s\'adaptent à vous et vous emmènent dans les endroits qui valent vraiment le détour.',
                },
                {
                  icon: Shield,
                  title: 'Totale intimité',
                  text: 'L\'embarcation est uniquement pour votre groupe. Sans partager l\'espace, sans itinéraires préfixés, sans dépendre des autres.',
                },
                {
                  icon: Sparkles,
                  title: 'Zone d\'exception',
                  text: 'Le Cap de Creus et la baie de Roses sont deux des environnements naturels les plus singuliers de la Méditerranée. Depuis l\'eau, on découvre des coins inaccessibles depuis la terre.',
                },
                {
                  icon: Anchor,
                  title: 'Départ depuis les canaux',
                  text: 'Le point de départ est déjà différent. Les canaux de Santa Margarita sont un cadre unique que vous ne trouverez dans aucune autre entreprise de la région.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50/80"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Préférez-vous piloter vous-même ? */}
          <section className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Vous préférez piloter le bateau vous-même ?
            </h2>
            <p className="mb-6">
              Si vous avez un permis de navigation et souhaitez la liberté de tracer votre propre
              itinéraire sans skipper, nous avons aussi cette option.
            </p>
            <Link
              href="/fr/location-bateau-avec-permis-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline mb-8"
            >
              Voir la location de bateau avec permis →
            </Link>
            <p className="mb-6">
              Vous n&apos;avez pas de permis mais souhaitez explorer par vous-même ? Nos bateaux sans permis
              sont parfaits pour des sorties autonomes dans la baie et les canaux.
            </p>
            <Link
              href="/fr/location-bateau-sans-permis-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline"
            >
              Voir les bateaux sans permis →
            </Link>
          </section>
        </div>

        <ReviewsSection />

        {/* Où nous trouver */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Où nous trouver — Marina de Santa Margarita, Roses
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            Nous sommes à l&apos;entrée de Roses, au début de la Marina de Santa Margarita. Facile à trouver
            et avec parking à proximité.
          </p>
          <p className="font-semibold text-slate-800 mb-2">
            Av. Clot Franquest Nord, 17480 Roses, Girona (Espagne)
          </p>
          <p className="text-slate-600 mb-6">
            Tél. :{' '}
            <a href="tel:+34623995700" className="text-sky-600 hover:underline">
              +34 623 99 57 00
            </a>
            {' · '}
            <a href="mailto:info@experienceboat.es" className="text-sky-600 hover:underline">
              info@experienceboat.es
            </a>
          </p>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              title="Marina de Santa Margarita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1sfr!2ses!4v1700000000000!5m2!1sfr!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-0">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liens utiles */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Liens utiles</h2>
          <ul className="space-y-2 text-sky-600">
            <li>
              <Link href="/fr/experiences-bateau-roses/canal-tour-santa-margarita" className="hover:underline">
                Canal Tour Santa Margarita
              </Link>
            </li>
            <li>
              <Link href="/fr/location-bateau-avec-permis-roses" className="hover:underline">
                Location de bateau avec permis à Roses
              </Link>
            </li>
            <li>
              <Link href="/fr/location-bateau-sans-permis-roses" className="hover:underline">
                Bateaux sans permis
              </Link>
            </li>
            <li>
              <Link href="/fr/canaux-santa-margarita" className="hover:underline">
                Canaux de Santa Margarita
              </Link>
            </li>
            <li>
              <Link href="/fr/experiences-bateau-roses" className="hover:underline">
                Toutes les expériences en bateau à Roses
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <StickyMobileCTA lang="fr" />
    </>
  );
}
