import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const dynamic = 'force-static';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdCwfeIbzLGgn9ZOOS_VjvfMQukSazdarJJvKj1J9lqUssISw/viewform?embedded=true';

export const metadata: Metadata = {
  title: 'Contact Experience Boat — Boat Hire in Roses',
  description:
    'Contact us to book your boat in Roses or to answer any questions. We are at Marina de Santa Margarita. We respond within 24 hours.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/contact',
    languages: {
      'x-default': 'https://www.experienceboat.es/contacto',
      es: 'https://www.experienceboat.es/contacto',
      fr: 'https://www.experienceboat.es/fr/contact',
      en: 'https://www.experienceboat.es/en/contact',
    },
  },
  openGraph: {
    title: 'Contact Experience Boat — Boat Hire in Roses',
    description:
      'Contact us to book your boat in Roses or to answer any questions. We are at Marina de Santa Margarita. We respond within 24 hours.',
    url: 'https://www.experienceboat.es/en/contact',
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

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.experienceboat.es/en' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.experienceboat.es/en/contact' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ContactEnPage() {
  return (
    <>
      <BreadcrumbSchema />
      <main id="main-content" className="bg-white min-h-[70vh]">
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left column: text and contact details */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Contact us — let&apos;s talk.
              </h1>
              <p className="text-lg text-gray-600 mb-12">
                If you have any questions about our boats, want to make a booking or simply
                don&apos;t know where to start, write to us. We respond quickly.
              </p>

              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Phone / WhatsApp</p>
                    <a href="tel:+34623995700" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                      +34 623 99 57 00
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available 9:00–20:00 · Season April–October</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Email</p>
                    <a href="mailto:info@experienceboat.es" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                      info@experienceboat.es
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Where we are</p>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      Marina de Santa Margarita<br />
                      Roses, 17480 · Girona
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Opening hours</p>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      Monday to Sunday · 9:00 – 20:00<br />
                      <span className="text-sm text-gray-500">(high season)</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right column: contact form */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 shadow-sm flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h2>
                <p className="text-sm text-gray-600">
                  Fill in the form and we will get back to you shortly. You can also{' '}
                  <a
                    href="https://wa.me/34623995700?text=Hello%2C%20I%27d%20like%20information%20about%20Experience%20Boat"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    write to us on WhatsApp
                  </a>
                  .
                </p>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  title="Contact form — Contact details (Google Forms)"
                  width="100%"
                  height={600}
                  className="block w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-center text-sm">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdCwfeIbzLGgn9ZOOS_VjvfMQukSazdarJJvKj1J9lqUssISw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 underline"
                >
                  Open the form in a new tab
                </a>
              </p>

              <p className="text-xs text-gray-500">
                The submission is handled via Google Forms. See our{' '}
                <Link href="/politica-privacidad" className="underline hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                  privacy policy
                </Link>
                .
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Prefer to call directly? No problem. We are at the marina and we love talking to
                  people before they come on board.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Map section */}
        <section className="w-full bg-gray-100" aria-label="Map of Experience Boat">
          <div className="relative w-full h-[min(60vh,600px)] min-h-[400px] sm:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.478698802148!2d3.1348328814582076!3d42.26846554393358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775514197510!5m2!1ses!2ses"
              title="Location of Experience Boat on Google Maps"
              aria-label="Interactive map showing the location of Experience Boat"
              className="absolute inset-0 block h-full w-full border-0"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              allow="fullscreen; geolocation"
            />
          </div>
        </section>
      </main>
    </>
  );
}
