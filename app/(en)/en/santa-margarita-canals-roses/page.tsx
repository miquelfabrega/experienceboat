import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Santa Margarita Canals by Boat — Roses',
  description:
    'Explore the Santa Margarita canals from the water. Waterfront houses and the most authentic Costa Brava. Private departures from Roses.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/canales-santa-margarita',
      es: 'https://www.experienceboat.es/canales-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/canaux-santa-margarita',
      en: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
    },
  },
  openGraph: {
title: 'Santa Margarita Canals by Boat — Roses',
    description:
      'Explore the Santa Margarita canals from the water. Waterfront houses and the most authentic Costa Brava. Private departures from Roses.',
    url: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
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

/* ─── FAQ data ───────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: 'Do I need a nautical licence to explore the canals?',
    answer:
      'No. You can navigate the Santa Margarita canals with one of our no-licence boats. No prior experience is needed — Tomàs or Max will give you a brief explanation before you set off.',
  },
  {
    question: 'How long does the canal tour take?',
    answer:
      'The canal route itself takes around 60 to 90 minutes. You can combine it with a trip into the Bay of Roses for a complete half-day or full-day experience on the water.',
  },
  {
    question: 'Is it suitable for families with young children?',
    answer:
      'It is one of the safest environments for families with children. The water is calm, speed is low, and the scenery keeps younger passengers entertained throughout.',
  },
  {
    question: 'What is the best time to visit the canals?',
    answer:
      'Early morning gives you the calmest water and the best light for photos. At sunset the reflections on the water are equally stunning. May, June and September are quieter than August.',
  },
  {
    question: 'Can we reach Cap de Creus from the canals?',
    answer:
      'Yes, in good conditions. Our no-licence boats can reach the closest coves of Cap de Creus when the sea is calm. For a deeper exploration of the Natural Park, we recommend one of our private excursions with a skipper.',
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

function TouristAttractionSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Santa Margarita Canals — Boat Tour',
    description:
      'Boat tour through the navigable Santa Margarita canals in Roses, Costa Brava. Private departures with and without licence from the Marina de Santa Margarita.',
    url: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
    touristType: 'Families, couples, groups of friends',
    inLanguage: 'en',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.2713962,
      longitude: 3.1343284,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Clot Franquest Nord',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
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
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.experienceboat.es/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Santa Margarita Canals by boat',
        item: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
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

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function SantaMargaritaCanalsRosesPage() {
  return (
    <>
      <FAQSchema />
      <TouristAttractionSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://picsum.photos/seed/canales-roses-hero/1600/900"
            alt="Boat navigating the Santa Margarita canals in Roses, Costa Brava"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 max-w-4xl">
              The Santa Margarita Canals by boat — the most singular experience in Roses
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#options"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
              >
                See available options
              </Link>
              <a
                href="https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20a%20boat%20trip%20on%20the%20Santa%20Margarita%20canals%20in%20Roses"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
              >
                Message us on WhatsApp
              </a>
            </div>
            <p className="text-sm text-gray-300 font-medium">
              500+ trips · 5★ Google · Departure from Marina de Santa Margarita
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The perfect start to your first time on the water
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            The Santa Margarita canals are the ideal environment for anyone renting a boat for the first time. Calm water, no waves, no currents — and a landscape you wouldn&apos;t expect to find on the Costa Brava: houses with private moorings, low stone bridges, and a stillness that contrasts sharply with the open sea.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Setting off from the canals is already an experience in itself. More than 500 waterfront homes line the canal network, each with direct water access. Seen from a boat, life in Santa Margarita takes on a perspective no walking tourist ever gets.
          </p>
        </section>

        {/* ── Options ── */}
        <section id="options" className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              How to explore the canals
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Choose your option
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1 */}
              <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
                <p className="text-sky-600 text-xs font-bold uppercase tracking-widest mb-2">No licence needed</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Self-drive boat rental
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                  Rent one of our no-licence boats and explore the canals and the Bay of Roses at your own pace. No prior experience required. Boats for 4–6 people.
                </p>
                <div className="mb-6 space-y-1 text-sm text-slate-700">
                  <p><span className="font-semibold">Half day (4h):</span> from €165</p>
                  <p><span className="font-semibold">Full day (8h):</span> from €225</p>
                </div>
                <Link
                  href="/en/boat-rental-without-licence-roses"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                >
                  See no-licence boats
                </Link>
              </article>

              {/* Option 2 */}
              <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
                <p className="text-sky-600 text-xs font-bold uppercase tracking-widest mb-2">Skipper included</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Private excursion with skipper
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                  Tomàs or Max will take you through the canals and on to Cap de Creus. You relax, they navigate. Perfect for groups who want to focus entirely on enjoying the experience.
                </p>
                <div className="mb-6 space-y-1 text-sm text-slate-700">
                  <p><span className="font-semibold">Half day (4h):</span> from €300</p>
                  <p><span className="font-semibold">Full day (8h):</span> from €600</p>
                </div>
                <Link
                  href="/en/boat-experiences-roses"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                >
                  See private excursions
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ── What you will see ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Points of interest
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            What you will see on the canal tour
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Houses with private moorings',
                desc: 'More than 500 homes have direct water access. From the boat you see life in Santa Margarita from an angle no land-based visitor can reach.',
              },
              {
                title: 'Low stone bridges',
                desc: 'The canals are crossed by low bridges that require slow, careful navigation. This slowness transforms the route into something contemplative — and very photogenic.',
              },
              {
                title: 'Local wildlife',
                desc: 'Herons, ducks and occasionally egrets can be seen in the canals. Particularly engaging for families with children.',
              },
              {
                title: 'The opening to the bay',
                desc: 'When the canals open onto the sea, the contrast is striking. The Bay of Roses stretches ahead with the Pyrenees in the background and Cap de Creus on the horizon.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-sky-200 pl-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why it works for beginners ── */}
        <section className="bg-sky-50 border-y border-sky-100 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Total peace of mind
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why the canals are ideal for no-licence boating
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Inland waterways are narrow, sheltered and see very little boat traffic. No waves, no currents, and low speed limits throughout. It is the ideal setting to build confidence on the water before heading out to sea.
              </p>
              <p>
                When renting a boat for the first time, the main concern is always the same: <em>will I be able to handle it?</em> The Santa Margarita canals eliminate that uncertainty from the very first minute.
              </p>
              <p>
                And the canal route justifies the trip on its own. You don&apos;t need to go as far as Cap de Creus for an unforgettable experience — the scenery of the canals, with houses right on the water, is something you don&apos;t forget.
              </p>
            </div>
          </div>
        </section>

        {/* ── Practical info ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Practical information</h2>
          <dl className="space-y-6 text-base">
            <div>
              <dt className="font-bold text-slate-900">How long does the canal tour take?</dt>
              <dd className="mt-1 text-slate-600">
                The canal route itself takes around 60–90 minutes. You can combine it with a trip into the Bay of Roses for a half-day or full-day experience.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-900">Is it suitable for families with children?</dt>
              <dd className="mt-1 text-slate-600">
                Yes — the canals are one of the safest and most family-friendly environments for boating. Calm water, low speed, engaging scenery.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-900">Best time to visit</dt>
              <dd className="mt-1 text-slate-600">
                Early morning for the best light and calmest water. May, June and September are quieter than August. Sunset on the canals is particularly atmospheric.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-900">Prices</dt>
              <dd className="mt-1 text-slate-600">
                Half day (4h): from €165 · Full day (8h): from €225. Prices vary by boat model and season.
              </dd>
            </div>
          </dl>
          <div className="mt-10">
            <a
              href="https://wa.me/34623995700?text=Hello%2C%20I%27d%20like%20to%20book%20a%20boat%20trip%20on%20the%20Santa%20Margarita%20canals"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-green-500 hover:bg-green-400 text-white transition-colors"
            >
              Check availability on WhatsApp
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where to find us ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Where to find us — Marina de Santa Margarita, Roses
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            We are at the entrance to Roses, at the beginning of the Marina de Santa Margarita. Easy to find, with parking nearby.
          </p>
          <p className="font-semibold text-slate-800 mb-2">Av. Clot Franquest Nord, 17480 Roses, Girona</p>
          <p className="text-slate-600 mb-8">
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
              title="Marina de Santa Margarita, Roses"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </>
  );
}
