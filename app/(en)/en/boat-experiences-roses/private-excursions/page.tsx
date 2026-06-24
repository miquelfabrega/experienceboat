import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Image from 'next/image';
import Link from 'next/link';
import { Anchor, Shield, Sparkles, Users } from 'lucide-react';
import ReviewsSection from '@/components/pillar-experiencias/ReviewsSection';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';
import RegiondoWidget from '@/components/experiencias/RegiondoWidget';
import ExcursionesVideoCard from '@/components/experiencias/ExcursionesVideoCard';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Private Boat Excursions in Roses',
  description:
    'Private boat excursions from Roses with skipper included. Cap de Creus, unspoilt coves and Roses Bay. Your group only on board. Book online now.',
  alternates: buildAlternates('expPrivate', 'en'),
  openGraph: {
title: 'Private Boat Excursions in Roses',
    description:
      'Private boat excursions from Roses with skipper included. Cap de Creus, unspoilt coves and Roses Bay. Your group only on board.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
    siteName: 'Experience Boat',
    locale: 'en_GB',
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
    q: 'Do I need a boat licence to join a private excursion?',
    a: 'No. On private excursions with skipper, one of our skippers handles the boat at all times. No nautical licence is required from participants — just come ready to enjoy the sea.',
  },
  {
    q: 'Can I book a private excursion for a birthday or special event?',
    a: 'Absolutely. Private excursions are perfect for celebrations, hen and stag parties, birthdays or any occasion you want to make memorable. Get in touch and we will tailor the trip around your event.',
  },
  {
    q: 'Can we bring food and drinks on board?',
    a: 'Yes. Feel free to bring whatever you like for the day. We recommend a cool box with cold drinks, sun protection and your swimming gear. We provide the boat, the skipper and the route.',
  },
  {
    q: 'What happens if the weather is bad on the day of our excursion?',
    a: 'We monitor forecasts daily. If conditions are not safe, we will let you know as early as possible, cancel at no charge and work with you to find another date.',
  },
  {
    q: 'Is the excursion suitable for young children?',
    a: 'Yes. Private excursions are especially comfortable for families with children because the pace and itinerary adapt entirely to your group. We have life jackets for all ages.',
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
    '@id': 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
    name: 'Private boat excursions in Roses with skipper',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
    description: 'Private boat excursion to Cap de Creus, hidden coves and the Bay of Roses. Skipper included, route tailored to your group. Half day or full day.',
    duration: 'PT4H',
    inLanguage: 'en',
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
    price: 300,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://www.experienceboat.es/en/booking',
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
        name: 'Home',
        item: 'https://www.experienceboat.es/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Boat experiences in Roses',
        item: 'https://www.experienceboat.es/en/boat-experiences-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Private boat excursions in Roses',
        item: 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
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

export default function PrivateExcursionsRosesPage() {
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
            alt="Private boat trip anchored over turquoise water in a Cap de Creus cove, Roses"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 w-full">
            <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-3">
              <Link href="/en/boat-experiences-roses" className="hover:underline">
                Boat experiences
              </Link>
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Private boat excursions in Roses
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
              Discover the northern Costa Brava from the sea without worrying about anything other than
              enjoying the moment. At Experience Boat we offer private boat excursions from Roses with
              skipper included: Tomàs or Max take the helm, know every cove and every route, and adapt
              to the pace and preferences of your group. We depart from the{' '}
              <Link href="/en/santa-margarita-canals" className="text-sky-300 hover:underline">
                Santa Margarita canals
              </Link>{' '}
              towards Roses Bay, the Cap de Creus Natural Park and the most spectacular coves of the
              northern Costa Brava.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/en/booking"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-lg transition-all"
              >
                Book now
              </Link>
              <a
                href="https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20private%20boat%20excursion%20in%20Roses"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-[#25D366] hover:bg-[#1ebe59] text-white transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Regiondo booking widget */}
        <RegiondoWidget
          widgetId="2ee25594-04e1-46b6-9407-da60041379da"
          title="Book your private excursion"
          subtitle="Instant confirmation. Only your group on board."
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16 text-slate-600 text-lg leading-relaxed">
          {/* Our excursions */}
          <section id="excursions" aria-labelledby="h-excursions">
            <h2 id="h-excursions" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Our excursions from Roses
            </h2>
            <p className="mb-8">
              Every trip is private. The boat is exclusively reserved for your group — no sharing
              space with other customers, no rigid timetables and the itinerary tailored to what you
              want to see.
            </p>

          </section>

          <ExcursionesVideoCard lang="en" />

          {/* Destinations */}
          <section aria-labelledby="h-destinations">
            <h2 id="h-destinations" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Where do our excursions go?
            </h2>
            <p className="mb-8">
              There is no fixed itinerary. Every trip adapts to your group, the time available and what
              you want to see. Here are the most popular destinations from Roses:
            </p>

            <h3 id="cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Cap de Creus
            </h3>
            <p>
              The Cap de Creus Natural Park is the standout destination of the region and the one that
              comes up most often in our customers&apos; reviews. From the water, the landscape changes
              completely: volcanic cliffs, coves only reachable by sea and an incomparable Mediterranean
              light for photography. Around 45–60 minutes from Santa Margarita depending on conditions.
            </p>

            <h3 id="cap-de-creus-coves" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Cap de Creus coves
            </h3>
            <p>
              Cap de Creus is home to some of the most unspoilt coves on the entire Costa Brava. Cala
              Culip, Cala Jugadora, Cala Fredosa — inlets that don&apos;t appear in generic tourist guides
              because they are only reachable by boat. Tomàs and Max know which ones are worth the trip
              depending on the season and sea conditions.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Roses Bay</h3>
            <p>
              For groups that prefer calmer waters or trips with young children,{' '}
              <Link href="/en" className="text-sky-600 hover:underline font-medium">
                Roses Bay
              </Link>{' '}
              offers stunning stops without needing to venture far. Cala Canyelles Petites and Cala
              Almadraba are two of the most popular and are just a few minutes from the departure
              point.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Santa Margarita canals</h3>
            <p>
              The trip itself is already an experience. The{' '}
              <Link href="/en/santa-margarita-canals" className="text-sky-600 hover:underline">
                Santa Margarita canals
              </Link>{' '}
              — waterfront houses, a unique atmosphere — set the scene for the start of every
              excursion. Many customers ask to take their time exploring the canals before heading out
              to open sea.
            </p>
          </section>

          {/* How it works */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              What is an excursion with Experience Boat like?
            </h2>
            <p className="mb-4">
              To give you a clear picture of how a trip works, here is how a typical full-day
              excursion usually unfolds:
            </p>
            <p>
              We meet at the agreed time at the departure point in Marina de Santa Margarita. Tomàs or
              Max greet you, walk you through the boat and ask what you would like to see. If you have
              specific route preferences, we work them in. If you prefer to be surprised, we suggest.
              We head out through the canals towards the bay and then plot the course according to the
              plan.
            </p>
            <p>
              During the trip there are swimming stops in the coves, free time in the water and total
              flexibility to adjust the route if you find something you love. The return time is agreed
              with you — no fixed deadline as long as you stay within your booked time slot.
            </p>
          </section>

          {/* Fully private */}
          <section className="rounded-2xl bg-sky-50 border border-sky-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Fully private — no strangers on board
            </h2>
            <p className="mb-4">
              This is the most important difference compared with the shared excursions offered by
              other companies in the area. When you book with Experience Boat, the vessel is
              exclusively for your group. No unknown tourists, no majority-vote itinerary, no waiting
              for other passengers to embark or disembark.
            </p>
            <p>
              For families with young children this is especially valuable: you can stop whenever you
              want, swim at your own pace and adjust the rhythm around the little ones. For groups of
              friends it means spending the day exactly as you like, without constraints.
            </p>
          </section>

          {/* Practical info */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Practical information about the excursions
            </h2>
            <dl className="space-y-6 text-base">
              <div>
                <dt className="font-bold text-slate-900">How many people can come?</dt>
                <dd className="mt-1">
                  Depending on the vessel, between 6 and 12 people. If your group is larger, get in
                  touch — we will find the best solution for you.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">How long does the excursion last?</dt>
                <dd className="mt-1">
                  We offer half-day excursions (approximately 4 hours) and full-day excursions
                  (approximately 8 hours). The exact duration is agreed at the time of booking.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">What is included in the excursion?</dt>
                <dd className="mt-1">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Local skipper with first-hand knowledge of the area (Tomàs or Max)</li>
                    <li>Private vessel for your group</li>
                    <li>Fuel</li>
                    <li>Mandatory safety equipment</li>
                    <li>Swimming stops with water-access ladder</li>
                    <li>Personalised route recommendations</li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">How far in advance should I book?</dt>
                <dd className="mt-1">
                  In July and August we recommend booking at least two weeks ahead. In shoulder season,
                  48–72 hours&apos; notice is usually enough.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Can we customise the itinerary?</dt>
                <dd className="mt-1">
                  Yes, entirely. Before departure we talk with you, gather your preferences and build
                  the itinerary from there. If you want to visit specific coves, we do our best to
                  include them subject to sea conditions.
                </dd>
              </div>
            </dl>
          </section>

          {/* Why choose */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              Why choose a private excursion with Experience Boat?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 not-prose">
              {[
                {
                  icon: Users,
                  title: 'Local skipper, not a tour guide',
                  text: 'Tomàs and Max are approachable skippers who know the area first-hand. They do not recite a prepared script — they adapt to you and take you to the places genuinely worth visiting.',
                },
                {
                  icon: Shield,
                  title: 'Total privacy',
                  text: 'The vessel is exclusively for your group. No sharing space, no preset itineraries, no depending on others.',
                },
                {
                  icon: Sparkles,
                  title: 'An exceptional setting',
                  text: 'Cap de Creus and Roses Bay are two of the most singular natural environments in the Mediterranean. From the water you discover corners that are simply unreachable from land.',
                },
                {
                  icon: Anchor,
                  title: 'Departure from the canals',
                  text: 'The departure point itself is special. The Santa Margarita canals are a one-of-a-kind backdrop you will not find with any other company in the area.',
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

          {/* Prefer to skipper yourself? */}
          <section className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Prefer to skipper the boat yourself?
            </h2>
            <p className="mb-6">
              If you hold a boating licence and want the freedom to set your own itinerary without a
              skipper, we have that option too.
            </p>
            <Link
              href="/en/boat-hire-with-licence-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline mb-8"
            >
              See boat hire with licence →
            </Link>
            <p className="mb-6">
              No licence but want to explore independently? Our no-licence boats are perfect for
              self-guided trips around the bay and canals.
            </p>
            <Link
              href="/en/boat-hire-no-licence-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline"
            >
              See no-licence boats →
            </Link>
          </section>
        </div>

        <ReviewsSection />

        {/* Where to find us */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Where to find us — Marina de Santa Margarita, Roses
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            We are at the entrance to Roses, at the start of the Marina de Santa Margarita. Easy to
            find with parking nearby.
          </p>
          <p className="font-semibold text-slate-800 mb-2">
            Av. Clot Franquest Nord, 17480 Roses, Girona (Spain)
          </p>
          <p className="text-slate-600 mb-6">
            Tel:{' '}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
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
              Frequently asked questions
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

        {/* Useful links */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Useful links</h2>
          <ul className="space-y-2 text-sky-600">
            <li>
              <Link
                href="/en/boat-experiences-roses/canal-tour-santa-margarita"
                className="hover:underline"
              >
                Canal Tour Santa Margarita
              </Link>
            </li>
            <li>
              <Link href="/en/boat-hire-with-licence-roses" className="hover:underline">
                Boat hire with licence in Roses
              </Link>
            </li>
            <li>
              <Link href="/en/boat-hire-no-licence-roses" className="hover:underline">
                No-licence boats
              </Link>
            </li>
            <li>
              <Link href="/en/santa-margarita-canals" className="hover:underline">
                Santa Margarita canals
              </Link>
            </li>
            <li>
              <Link href="/en/boat-experiences-roses" className="hover:underline">
                All boat experiences in Roses
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <StickyMobileCTA lang="en" />
    </>
  );
}
