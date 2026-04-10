import type { Metadata } from 'next';
import Link from 'next/link';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'What to See in the Santa Margarita Canals',
  description:
    'Discover everything hidden in the Santa Margarita canals from the water. Waterfront houses, wildlife and the most authentic Costa Brava. Private departures from Roses.',
  alternates: {
    canonical: 'https://experienceboat.es/en/santa-margarita-canals-roses/what-to-see',
    languages: {
      'x-default': 'https://experienceboat.es/canales-santa-margarita/que-ver',
      es: 'https://experienceboat.es/canales-santa-margarita/que-ver',
      fr: 'https://experienceboat.es/fr/canaux-santa-margarita/que-voir',
      en: 'https://experienceboat.es/en/santa-margarita-canals-roses/what-to-see',
    },
  },
  openGraph: {
title: 'What to See in the Santa Margarita Canals',
    description:
      'Discover everything hidden in the Santa Margarita canals from the water. Waterfront houses, wildlife and the most authentic Costa Brava. Private departures from Roses.',
    url: 'https://experienceboat.es/en/santa-margarita-canals-roses/what-to-see',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'article',
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: 'Can you visit the Santa Margarita canals on foot?',
    answer:
      'Yes, there is a pedestrian walkway that runs alongside part of the canals, and viewpoints from which you can see the water and the houses. But the experience from the boat is completely different — from the water you access the most interior stretches and see the urbanisation from the perspective its architects originally designed.',
  },
  {
    question: 'How long does it take to cruise the canals by boat?',
    answer:
      'The inner canal route at a relaxed pace takes between 60 and 90 minutes. It combines perfectly with a trip out into the Bay of Roses or to Cap de Creus on the same day.',
  },
  {
    question: 'What is the best time of year to visit the Santa Margarita canals?',
    answer:
      'May, June and September offer the best conditions: calm water, pleasant temperatures, active wildlife and far less boat traffic than peak August. For photography, the first hour of the morning at any time of year is unbeatable.',
  },
  {
    question: 'Can you snorkel in the Santa Margarita canals?',
    answer:
      'The inner canals are not the ideal environment for snorkelling — the water is calmer than crystal-clear in some stretches. For snorkelling we recommend the coves of the Bay of Roses and Cap de Creus, which have much richer seabeds and clearer water.',
  },
  {
    question: 'Are there navigation restrictions in the canals?',
    answer:
      'Yes. The canals have speed limits to protect moored vessels and the tranquillity of the urbanisation. Our boats are perfectly suited to those conditions and before each departure we explain the basic navigation rules for the canals.',
  },
];

/* ─── Schema Markup ──────────────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://experienceboat.es/en' },
      { '@type': 'ListItem', position: 2, name: 'Santa Margarita Canals by Boat', item: 'https://experienceboat.es/en/santa-margarita-canals-roses' },
      { '@type': 'ListItem', position: 3, name: 'What to See in the Santa Margarita Canals', item: 'https://experienceboat.es/en/santa-margarita-canals-roses/what-to-see' },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

/* ─── Page Component ─────────────────────────────────────────────────────── */

export default function WhatToSeeCanals() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              What to See in the Santa Margarita Canals from the Water
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              The{' '}
              <Link href="/en/santa-margarita-canals-roses" className="text-sky-600 hover:underline">
                Santa Margarita canals
              </Link>{' '}
              can be visited on foot or from the viewpoints scattered around the urbanisation. But none of
              those perspectives comes close to what you see from the water. From a boat the canals reveal
              a completely different dimension: the houses show their most intimate face, and the pace of
              the trip — slow, calm, unhurried — turns the outing into something quite unlike anything
              else on the Costa Brava.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3">

            <h2>Waterfront houses — unique architecture on the Costa Brava</h2>
            <p>
              The most characteristic image of the Santa Margarita canals is that of houses with private
              jetties. More than 500 homes have direct water access from their gardens — each with its own
              small dock, a moored dinghy and a terrace overlooking the canal.
            </p>
            <p>
              From land, you see these houses from behind — the main facade faces the street. From the
              boat you see them from the front: gardens with palm trees, terraces with sunshades,
              owners drinking coffee first thing in the morning with their feet almost in the water. It is
              the private face of Santa Margarita that most tourists never get to see.
            </p>
            <p>
              The architecture varies considerably from house to house. There are 1960s villas with the
              original Mediterranean style, modern renovations with large windows overlooking the canal,
              and some homes that have kept the design intact since the urbanisation was built. For anyone
              interested in residential architecture, the canal route is a unique catalogue on the Costa
              Brava.
            </p>

            <h2>The pace of the route — slow by nature</h2>
            <p>
              The canals require you to navigate at reduced speed. That slowness is not an inconvenience —
              it is precisely what makes the journey special. In an environment of calm, sheltered water,
              time stretches and the scenery can be appreciated in detail.
            </p>
            <p>
              That enforced calm is, paradoxically, one of the most appreciated aspects of the route: in a
              fast-paced world, the Santa Margarita canals invite you to go slowly and look.
            </p>
            <p>
              For first-time sailors, the straight stretches, the gentle bends and the visual landmarks of
              the urbanisation — facades, jetties, vegetation — make it easy to orientate yourself
              without any rush. The route is easy to follow at any point.
            </p>

            <h2>Canal wildlife — what you do not expect to find</h2>
            <p>
              The Santa Margarita canals are not just about architecture. The calm, sheltered waters of the
              inland waterways are home to wildlife that surprises those who do not expect it.
            </p>
            <p>
              Birds are the stars. Grey herons perched on private jetties, kingfishers crossing the canals
              like electric-blue arrows, ducks swimming between moored boats without being bothered at all
              by passing hire craft. For families with children, spotting wildlife during the canal route
              is often one of the most remembered moments of the trip.
            </p>
            <p>
              On the submerged walls of the docks and jetties, when the water is particularly clear, you
              can see small fish moving among the algae. It is not Cap de Creus — but it has its own quiet
              ecosystem that is well worth observing.
            </p>

            <h2>The canals at dawn and dusk — the light that changes everything</h2>
            <p>
              The Santa Margarita canals are one of those places where the light of the day matters as much
              as the place itself. First thing in the morning, when the sun is still low and the reflections
              on the water are long and golden, the canals have an almost unreal quality. The houses are
              doubled in the water, the light draws long shadows on the facades and there is a stillness
              that does not last beyond ten in the morning.
            </p>
            <p>
              At sunset the transformation is different but equally spectacular. The warm late-afternoon
              light tints the facades in orange and pink, the water becomes a perfect mirror and the
              atmosphere fills with that Mediterranean melancholy that is hard to describe but immediately
              recognisable.
            </p>
            <p>
              It is exactly for these moments that Experience Boat&apos;s{' '}
              <Link href="/en/boat-experiences-roses/sunset-experience" className="text-sky-600 hover:underline">
                Sunset Experience
              </Link>{' '}
              exists: a sunset trip along the Santa Margarita canals that starts with the last light of
              the day on the water and ends when the sun disappears below the horizon of the{' '}
              <Link href="/en" className="text-sky-600 hover:underline">
                Bay of Roses
              </Link>
              .
            </p>

            <div className="my-10 flex justify-center sm:justify-start">
              <Link
                href="/en/boat-experiences-roses/sunset-experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                See Sunset Experience &rarr;
              </Link>
            </div>

            <h2>The canals through the seasons</h2>
            <p>
              The Santa Margarita canals change with the seasons in a way few tourist areas on the Costa
              Brava can match.
            </p>
            <ul className="mb-8">
              <li>
                <strong>In spring (April, May, June)</strong> — the quietest time and possibly the most
                beautiful. The house gardens are in bloom, the vegetation bordering some canal stretches
                is at its most lush and the wildlife is more active than in high summer. The water is
                clean and calm. For anyone wanting to experience the canals in their most authentic form,
                spring is the time.
              </li>
              <li>
                <strong>In summer (July, August)</strong> — the canals are livelier and more colourful.
                Owners are in their houses, the terraces are busy and the urbanisation has the feel of a
                small seaside resort in full swing. There are more boats in the canals but also more
                atmosphere. The first hour of the morning is still the best time to set out before the
                heat builds.
              </li>
              <li>
                <strong>In September and October</strong> — the ideal season for those who prefer the
                canals without crowds. The water is still warm enough for swimming, tourist numbers have
                dropped considerably and the canals recover the quietness of early season. Many owners
                are still in their houses during September, giving the route the residential atmosphere
                that makes it unique.
              </li>
            </ul>

            <h2>How to get to the Santa Margarita canals</h2>
            <p>
              The Santa Margarita canals are at the northern edge of Roses, less than 5 minutes by car
              from the town centre. From our base at Marina de Santa Margarita, access to the start of
              the navigable canals is immediate — your boat trip begins with the first canal from the
              very first minute.
            </p>
            <p>
              To reach Marina de Santa Margarita from Roses town centre, take Avinguda de Rhode
              northwards and follow signs for the Marina. Free parking is available near the boarding
              point.
            </p>
            <p className="font-semibold text-slate-800">
              Av. Clot Franquest Nord, 17480 Roses, Girona
            </p>

            <div className="my-10 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Marina de Santa Margarita"
              />
            </div>

            <hr className="my-12 border-slate-200" />

            <h2 className="!mt-0">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 mb-0">{faq.answer}</p>
                </div>
              ))}
            </div>

            <hr className="my-12 border-slate-200" />

            <h2>Related links</h2>
            <ul className="mb-0">
              <li>
                <Link href="/en/santa-margarita-canals-roses" className="text-sky-600 hover:underline">
                  Main guide: Santa Margarita canals by boat
                </Link>
              </li>
              <li>
                <Link href="/en/santa-margarita-canals-roses/cap-de-creus-route" className="text-sky-600 hover:underline">
                  Boat route: Santa Margarita canals to Cap de Creus
                </Link>
              </li>
              <li>
                <Link href="/en/boat-rental-without-licence-roses" className="text-sky-600 hover:underline">
                  Rent a boat without a licence in Roses
                </Link>
              </li>
              <li>
                <Link href="/en/boat-experiences-roses" className="text-sky-600 hover:underline">
                  Skippered experiences in Roses
                </Link>
              </li>
            </ul>
          </div>
        </article>

        <SiloNavBlock currentPath="/en/santa-margarita-canals-roses/what-to-see/" />
      </main>
    </>
  );
}
