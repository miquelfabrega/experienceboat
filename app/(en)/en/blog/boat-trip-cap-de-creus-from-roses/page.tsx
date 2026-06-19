import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Boat trip to Cap de Creus from Roses',
  description: 'Guide to the boat route from the Santa Margarita canals to Cap de Creus. Coves, food stops and everything you need to know before setting off.',
  alternates: buildAlternates('blogCapCreus', 'en'),
  openGraph: {
    title: 'Boat trip to Cap de Creus from Roses',
    description: 'Guide to the boat route from the Santa Margarita canals to Cap de Creus. Coves, stops and all you need to know.',
    url: 'https://www.experienceboat.es/en/blog/boat-trip-cap-de-creus-from-roses',
    locale: 'en_GB',
    type: 'article',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const toc = [
  { id: 'why', label: 'Why Cap de Creus' },
  { id: 'departure', label: 'The departure point' },
  { id: 'route', label: 'The route step by step' },
  { id: 'coves', label: 'The essential coves' },
  { id: 'beach-bar', label: 'The Cala Pelosa beach bar' },
  { id: 'know', label: 'What you should know' },
  { id: 'option', label: 'With or without a licence?' },
];

const calas = [
  {
    name: 'Cala Pelosa',
    desc: 'Small and sheltered, with fine sandy bottom and intense turquoise water. It\'s the best-known stop on the route and the only one with a restaurant directly on the beach. Perfect for anchoring and swimming.',
    highlight: 'Gastronomy stop',
  },
  {
    name: 'Cala Rostella',
    desc: 'Better protected from the north wind than other coves in the area. Its waters are particularly clear thanks to posidonia seagrass beds, which filter the water and give it that characteristic emerald green colour.',
    highlight: 'Exceptional snorkelling',
  },
  {
    name: 'Cala Jóncols',
    desc: 'One of the largest coves on the route, difficult to access by land but perfectly reachable by boat. Its waters are ideal for family swimming. The setting of pine trees reaching down to the shore makes it especially photogenic.',
    highlight: 'Great for families',
  },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Boat trip to Cap de Creus from Roses — Complete guide',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/hero/hero-2.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/en/blog/boat-trip-cap-de-creus-from-roses' },
    inLanguage: 'en',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleCapDeCreusEn() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Boat trip to Cap de Creus from Roses, northern Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Routes
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Boat trip to Cap de Creus from Roses — exploring the northern Costa Brava
            </h1>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 April 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            7 min read
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Roses → Cap de Creus
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Informational
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/en/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 truncate">Boat trip to Cap de Creus</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop */}
          <aside className="hidden xl:block w-56 shrink-0 sticky top-28 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">In this article</p>
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
              Cap de Creus is the easternmost point of the Iberian Peninsula and one of the wildest seascapes on the entire Costa Brava. Seen from land, it impresses. Seen from the water, aboard a boat, it&apos;s something else entirely.
            </p>
            <p>
              This guide describes the route we regularly follow from the Santa Margarita canals to the coves of Cap de Creus: what to expect at each stage, the best stops, where to eat and what to know before setting off. Whether you plan to rent a boat independently or prefer to come with a skipper, this information will be useful.
            </p>

            {/* H2 #1 */}
            <h2 id="why">Why Cap de Creus is the best destination from Roses by boat</h2>
            <p>
              From Roses, Cap de Creus is about 45–60 minutes by boat depending on the model and sea conditions. It&apos;s a perfect distance: far enough for the trip to feel substantial, close enough to enjoy without rushing.
            </p>
            <p>
              What makes this route special isn&apos;t only the destination — it&apos;s the journey. The northern Costa Brava coastline between Roses and Cap de Creus is a landscape of cliffs, hidden coves and water clarity that is hard to find anywhere in the western Mediterranean. Most of these coves are <strong>inaccessible by land</strong> or require long hikes on mountain paths. By boat, you arrive directly.
            </p>
            <p>
              Moreover, the entire area falls within the <strong>Cap de Creus Natural Park</strong>, meaning the waters are protected, fishing is regulated and the marine ecosystem is in exceptional condition. It&apos;s no coincidence that snorkelling here is among the best on the Costa Brava.
            </p>

            {/* H2 #2 */}
            <h2 id="departure">The departure point — the Santa Margarita canals</h2>
            <p>
              We always depart from the Santa Margarita Marina at the entrance to Roses. The first minutes of the route pass through the canals themselves — a 20–25-minute journey along inland waterways that are already a spectacle in their own right.
            </p>
            <p>
              On both sides of the canals, over 500 homes have direct water access with their own private pontoons. It&apos;s an environment completely different from what you&apos;d expect of the Costa Brava, and one that many visitors discover for the first time on this route. For those who don&apos;t know the canals, this first section tends to be one of the highlights of the day.
            </p>
            <p>
              On leaving the canals, you enter the Bay of Roses. From here, Cap de Creus appears in the distance and the northward route is unmistakable.
            </p>

            {/* H2 #3 */}
            <h2 id="route">The route step by step — from the canals to Cap de Creus</h2>
            <p>
              There is no single fixed route. The journey adapts to sea conditions, available time and each group&apos;s preferences. But there is a sequence that works well for most departures:
            </p>
            <ol>
              <li><strong>Santa Margarita canals</strong> — Depart from the marina, navigate the inner canals to the Bay of Roses. Low speed, sheltered waters, ideal for warming up.</li>
              <li><strong>Bay of Roses</strong> — Cross the bay northward. The landscape begins to change: the Pyrenees in the background, the coastline grows more dramatic and the water more transparent.</li>
              <li><strong>First cove</strong> — Depending on conditions, the first stop is usually Cala Jóncols or Cala Rostella. Anchor, swim, snorkel.</li>
              <li><strong>Cala Pelosa</strong> — Lunch stop if the day allows. The Cala Pelosa beach bar serves until sold out, so the earlier you arrive the better.</li>
              <li><strong>Cap de Creus</strong> — The final point. The landscape here is completely different: bare rock, impossibly coloured water and the feeling of being at the edge of something.</li>
              <li><strong>Return</strong> — The journey back usually takes place with the sun already low. The snow-capped Pyrenees (in spring) or the silhouette of Roses in the distance make the return just as beautiful as the outward trip.</li>
            </ol>

            {/* H2 #4 — Coves */}
            <h2 id="coves">The essential coves on the route</h2>
            <p>
              Between Roses and Cap de Creus there are dozens of coves. These three are the ones we include in almost every route:
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
            <h2 id="beach-bar">The Cala Pelosa beach bar — unmissable food stop</h2>
            <p>
              Cala Pelosa has a beach bar that has been a fixed stop on Cap de Creus routes for years. The cuisine is product-driven Mediterranean: rice dishes, fideuà and fresh fish cooked to order, with boats anchored just a few metres away.
            </p>
            <p>
              This isn&apos;t a place to rush. The experience is sitting on the terrace over the water, with the boat tied up nearby and as much time as you need. It&apos;s exactly the kind of pause a day on the water should include.
            </p>
            <p>
              <strong>One important note:</strong> the beach bar doesn&apos;t take reservations and space is limited. In July and August, if you arrive after 14:00, you&apos;ll likely have to wait or find it full. In shoulder season (May, June, September) it&apos;s far less of an issue.
            </p>

            {/* H2 #6 */}
            <h2 id="know">What you should know before heading to Cap de Creus</h2>
            <p>
              The Cap de Creus route is stunning, but it has a few particularities worth knowing before you set off.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The Tramuntana wind</h3>
            <p>
              Cap de Creus is one of the most exposed areas of the Costa Brava to the Tramuntana, the north wind that can whip up the sea within hours. On days with Tramuntana forecast, we cancel or modify the route at no cost. It&apos;s not a decision we take lightly — it&apos;s a safety matter.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Posidonia seagrass</h3>
            <p>
              The posidonia meadows are responsible for the exceptional clarity of the water around Cap de Creus. It&apos;s a protected species and a fundamental ecosystem. In posidonia zones you cannot anchor — there are moorings (fixed mooring buoys) in the coves designated for this purpose.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Submerged rocks</h3>
            <p>
              The Cap de Creus coastline has many rocks at shallow depth, especially at cove entrances. If you&apos;re going on your own boat, always navigate slowly when approaching the coast and consult the nautical chart. If you&apos;re coming with our skippered service, the skipper knows this coast inside out and handles all navigation.
            </p>

            {/* H2 #7 */}
            <h2 id="option">With a licence, without a licence or with a skipper?</h2>
            <p>
              The Cap de Creus route can be done in three different ways:
            </p>
            <ul>
              <li>
                <strong>No-licence boat</strong> — No-licence boats are perfect for the Santa Margarita canals and the Bay of Roses. To reach Cap de Creus, sea conditions need to be favourable. In good conditions, it&apos;s perfectly possible to reach the first coves of the route.
              </li>
              <li>
                <strong>Licensed boat</strong> — With a more powerful vessel and a nautical licence, the full Cap de Creus route is entirely accessible. Greater range, higher speed and more route options.
              </li>
              <li>
                <strong>Private excursion with skipper</strong> — The option where you don&apos;t worry about anything. The skipper knows every cove and every rock on this coast. The route adapts to the group and the day. It&apos;s the most comfortable way to do the full route, especially if it&apos;s your first time in the area.
              </li>
            </ul>

            {/* Inline CTA */}
            <div className="not-prose my-8 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Private excursion to Cap de Creus with skipper</p>
                <p className="text-gray-500 text-sm">The skipper takes you to the coves. You just enjoy. Route tailored to your group.</p>
              </div>
              <Link
                href="/en/boat-experiences-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                See experiences <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Closing CTAs */}
      <div className="bg-gray-900 py-16 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to head to Cap de Creus?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Choose the option that suits your group best — licensed boat, no-licence boat or private excursion with skipper. If you&apos;re not sure, write to us and we&apos;ll help you decide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/en/boat-experiences-roses"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              See skippered excursions →
            </Link>
            <a
              href="https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20the%20Cap%20de%20Creus%20boat%20trip"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe59] transition-colors shadow-md"
            >
              Write to us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 text-center">
        <Link href="/en/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-2">
          ← Back to blog
        </Link>
      </div>

    </main>
    </>
  );
}
