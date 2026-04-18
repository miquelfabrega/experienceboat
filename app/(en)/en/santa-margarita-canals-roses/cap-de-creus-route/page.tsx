import type { Metadata } from 'next';
import Link from 'next/link';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Boat Route: Santa Margarita Canals to Cap de Creus',
  description:
    'The most complete nautical route on the northern Costa Brava: from the Santa Margarita canals to Cap de Creus by private boat from Roses. Book online.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/santa-margarita-canals-roses/cap-de-creus-route',
    languages: {
      'x-default': 'https://www.experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
      es: 'https://www.experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
      fr: 'https://www.experienceboat.es/fr/canaux-santa-margarita/itineraire-cap-de-creus',
      en: 'https://www.experienceboat.es/en/santa-margarita-canals-roses/cap-de-creus-route',
    },
  },
  openGraph: {
title: 'Boat Route: Santa Margarita Canals to Cap de Creus',
    description:
      'The most complete nautical route on the northern Costa Brava: from the Santa Margarita canals to Cap de Creus by private boat from Roses.',
    url: 'https://www.experienceboat.es/en/santa-margarita-canals-roses/cap-de-creus-route',
    siteName: 'Experience Boat',
    locale: 'en_GB',
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
    question: 'How long does the full route from Santa Margarita canals to Cap de Creus take?',
    answer:
      'The full-day trip lasts approximately 8 hours, of which around 3 hours are active navigation and the rest is time in the coves — swimming, lunch on board and exploring the natural park. It is a long, full day that we recommend for groups who want to make the most of a day at sea.',
  },
  {
    question: 'Can you do the route in half a day?',
    answer:
      'The stretch to Cap de Creus with enough time to enjoy it requires a full day. In half a day you can cruise the canals and reach the nearest coves in the Bay of Roses — an equally valuable experience but different from the full route to the natural park.',
  },
  {
    question: 'Do you need sailing experience to do this route?',
    answer:
      'Not if you choose the skippered option. Tomàs or Max skipper the vessel throughout the day and know the route in detail. For the with-licence option a PNB or equivalent qualification is required, especially for the Cap de Creus stretch which can have more demanding wind conditions.',
  },
  {
    question: 'What happens if the tramuntana wind prevents reaching Cap de Creus?',
    answer:
      'It is a real possibility, especially in spring and autumn. If weather conditions do not allow the Cap de Creus stretch safely, we adapt the route to the more sheltered coves of the Bay of Roses, or reschedule the departure at no extra cost. Safety always comes before the planned route.',
  },
  {
    question: 'Can I customise the stops on the route?',
    answer:
      'Yes, completely. Before each departure we talk with the group to collect route and stop preferences. If there are specific coves you want to visit or aspects of the route you want to prioritise — more time in the canals, more time at the Cap, a specific cove stop — we incorporate it into the day\'s plan.',
  },
];

/* ─── Schema Markup ──────────────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.experienceboat.es/en' },
      { '@type': 'ListItem', position: 2, name: 'Santa Margarita Canals by Boat', item: 'https://www.experienceboat.es/en/santa-margarita-canals-roses' },
      { '@type': 'ListItem', position: 3, name: 'Boat Route: Canals to Cap de Creus', item: 'https://www.experienceboat.es/en/santa-margarita-canals-roses/cap-de-creus-route' },
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

export default function CapDeCreusRouteEn() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Boat Route from the Santa Margarita Canals to Cap de Creus
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              There is a nautical route on the northern Costa Brava that has it all: calm water to start,{' '}
              <Link href="/en" className="text-sky-600 hover:underline">
                open bay
              </Link>{' '}
              in the middle and a natural park at the end. It begins in the{' '}
              <Link href="/en/santa-margarita-canals-roses" className="text-sky-600 hover:underline">
                Santa Margarita canals
              </Link>{' '}
              — waterfront houses, stone bridges, Mediterranean calm — and ends at Cap de Creus, the
              easternmost point of the Iberian Peninsula and one of the most spectacular natural
              environments in the Mediterranean. In between: the Bay of Roses with the Pyrenees in the
              background and the best coves of the northern coast. It is the route we do at Experience
              Boat when we want to show the best of the area in a single day.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3">

            <h2>The full route — stretch by stretch</h2>
            <p>
              This is the detailed description of the full-day route from the Santa Margarita canals to
              Cap de Creus. Times are indicative and adapt to the group, the pace and sea conditions.
            </p>

            <h3>Stretch 1 — The Santa Margarita canals (30–45 min)</h3>
            <p>
              The route begins where Experience Boat is based: Marina de Santa Margarita, at the entrance
              to the canals. From the first minute the boat navigates through the inland waterways of the
              urbanisation, lined by more than 500 houses with private jetties.
            </p>
            <p>
              This is the quietest stretch of the day and the most photogenic. The water is completely
              calm, the low stone bridges are passed underneath and the pace is slow and contemplative.
              For groups who have never navigated the canals, this opening stretch is often the favourite
              moment of the entire day — and the most unexpected.
            </p>
            <p>
              Early in the morning, when the sun is not yet too high and the reflections on the water are
              perfect, the canals have a quality of light found nowhere else on the Costa Brava.
            </p>

            <h3>Stretch 2 — Out into the Bay of Roses (15–20 min)</h3>
            <p>
              When the inner canals open out to sea, the scene changes completely. The Bay of Roses
              stretches ahead with its full breadth: the snow-capped Pyrenees in the background in winter
              and spring, the town of Roses to the right and the start of the Cap de Creus massif to the
              left.
            </p>
            <p>
              This is the moment the day gains scale. What began as an intimate trip through the canals
              becomes a real sea voyage, with open horizon and wind in your face.
            </p>

            <h3>Stretch 3 — Northern coast towards Cap de Creus (30–40 min)</h3>
            <p>
              From the Bay of Roses the route follows the northern coastline towards Cap de Creus. This
              is the stretch where the landscape begins to change character: the coastline becomes more
              rugged, the cliffs taller and the rock takes on dark tones that announce the volcanic nature
              of the natural park.
            </p>
            <p>
              Along this stretch we pass Cala Canyelles Petites and Cala Almadraba — the two coves most
              accessible from Roses and the favourites for a mid-morning stop. Turquoise water, sand and
              rock seabed, and enough space to anchor comfortably even in high season.
            </p>

            <h3>Stretch 4 — Cap de Creus Natural Park (free time)</h3>
            <p>
              Arriving at the Cap de Creus Natural Park is the highlight of the route. The landscape
              changes dramatically: vegetation disappears, volcanic rock dominates the horizon and the
              coves of Cap de Creus have a transparency and colour unlike anything you have seen before
              on the Costa Brava.
            </p>
            <p>
              The inner coves of the park — Culip, Jugadora, Fredosa — are only accessible by boat. No
              paths lead down to the water, no car park, no facilities. Just the cove, the water and your
              group.
            </p>

            <h3>Stretch 5 — Return along the southern coast (45–60 min)</h3>
            <p>
              The return can be made along the same route or by skirting the southern coast of Cap de
              Creus, which has a different character: more exposed to open swell but with views over the
              Gulf of Lion and, on clear days, the Medes Islands on the horizon.
            </p>
            <p>
              Depending on the time and sea state, the return includes a final stop in the Bay of Roses
              for an afternoon swim before heading back to the Santa Margarita canals.
            </p>

            <h2>Route distances and times</h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 text-sm uppercase tracking-wide">
                    <th className="p-4 border-b border-slate-200 font-semibold">Stretch</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Approx. distance</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Navigation time</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-base">
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Santa Margarita canals</td>
                    <td className="p-4">3–4 km</td>
                    <td className="p-4">30–45 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Bay of Roses</td>
                    <td className="p-4">8 km</td>
                    <td className="p-4">15–20 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Northern coast to Cap de Creus</td>
                    <td className="p-4">12 km</td>
                    <td className="p-4">30–40 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Inner coves of Cap de Creus</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4">Free time</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Return</td>
                    <td className="p-4">20–22 km</td>
                    <td className="p-4">45–60 min</td>
                  </tr>
                  <tr className="bg-slate-50 font-semibold text-slate-800">
                    <td className="p-4">Total navigation</td>
                    <td className="p-4">~45 km</td>
                    <td className="p-4">~3 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>With skipper or with licence — which option to choose</h2>

            <h3>With skipper (recommended for this route)</h3>
            <p>
              For groups without sailing experience or for those who simply want to enjoy without
              worrying about navigation, the private excursion with skipper is the ideal choice.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/en/boat-experiences-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Private Boat Excursions in Roses &rarr;
              </Link>
            </div>

            <h3>With licence (for qualified skippers)</h3>
            <p>
              If you hold a PNB or equivalent qualification and want to plan your own route, our
              with-licence boats are perfect for this crossing.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/en/boat-rental-with-licence-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-800 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                Boat Rental with Licence in Roses &rarr;
              </Link>
            </div>

            <h2>What to bring for the full route</h2>
            <ul>
              <li><strong>High-factor, water-resistant sunscreen</strong> — you will be exposed to Mediterranean sun for hours.</li>
              <li><strong>Polarised sunglasses</strong> — the glare off the water during the crossing is intense.</li>
              <li><strong>Swimwear and towels</strong> for the cove stops.</li>
              <li><strong>Cool box with water, cold drinks and food</strong> — eating in a Cap de Creus cove is one of the most memorable moments.</li>
              <li><strong>Non-slip footwear</strong>.</li>
              <li><strong>Camera or phone in a waterproof case</strong> — the Cap de Creus coves deserve the best photos you can take.</li>
              <li><strong>A light layer for the return</strong> — the afternoon wind in the bay can be cool even after a warm day.</li>
            </ul>

            <h2>Best time of year for the full route</h2>
            <p>
              <strong>May and June</strong> are the most recommended months for those with flexibility.
              The Cap de Creus coves are quiet, navigation conditions are excellent and the spring light
              on the canals is extraordinary. Water temperature is pleasant for swimming from late May.
            </p>
            <p>
              <strong>July and August</strong> are high season. The coves are busier and you need to set
              off early to arrive before they fill up. In return, the atmosphere of the Bay of Roses in
              summer has its own energy and the sunsets on the return through the canals are the most
              spectacular of the year.
            </p>
            <p>
              <strong>September</strong> is possibly the best month for this route: warm water, quiet
              coves, perfect navigation conditions and the Santa Margarita canals in their most
              residential and authentic form, when the tourist season has calmed but summer is not yet
              over.
            </p>

            <hr className="my-12 border-slate-200" />

            <h2 className="!mt-0">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="!mt-0 !mb-3 font-bold text-xl text-slate-900">{faq.question}</h3>
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
                <Link href="/en/santa-margarita-canals-roses/what-to-see" className="text-sky-600 hover:underline">
                  What to see in the Santa Margarita canals from the water
                </Link>
              </li>
              <li>
                <Link href="/en/boat-rental-without-licence-roses" className="text-sky-600 hover:underline">
                  Rent a boat without a licence in Roses
                </Link>
              </li>
            </ul>
          </div>
        </article>

        <SiloNavBlock currentPath="/en/santa-margarita-canals-roses/cap-de-creus-route" />
      </main>
    </>
  );
}
