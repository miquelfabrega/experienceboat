import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, Anchor, Clock, Shield } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Book a boat in Roses',
  description:
    'Book your boat in Roses with Experience Boat. Without licence, with licence or private excursions. Immediate reply via WhatsApp or email.',
  keywords: [
    'book boat Roses',
    'boat rental Roses',
    'boat booking Costa Brava',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/en/booking',
    languages: {
      'x-default': 'https://www.experienceboat.es/reservas',
      es: 'https://www.experienceboat.es/reservas',
      ca: 'https://www.experienceboat.es/ca/reserves',
      fr: 'https://www.experienceboat.es/fr/reservation',
      en: 'https://www.experienceboat.es/en/booking',
    },
  },
  openGraph: {
    title: 'Book a boat in Roses',
    description:
      'Book your boat in Roses with Experience Boat. Without licence, with licence or private excursions.',
    url: 'https://www.experienceboat.es/en/booking',
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

export default function BookingPageEN() {
  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Book your boat in Roses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you&apos;d like to reach us. We&apos;ll confirm availability and price within
            minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <a
            href="https://wa.me/34623995700?text=Hello%2C%20I%27d%20like%20to%20book%20a%20boat%20in%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
          >
            <MessageCircle className="w-10 h-10 text-[#25D366]" />
            <h2 className="text-xl font-bold text-gray-900">WhatsApp</h2>
            <p className="text-gray-600 text-center text-sm">
              Immediate reply. Tell us the date, time and number of people.
            </p>
            <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white group-hover:bg-[#1ebe59] transition-colors">
              Open WhatsApp
            </span>
          </a>

          <a
            href="tel:+34623995700"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-sky-200 bg-sky-50/50 hover:bg-sky-50 transition-colors group"
          >
            <Phone className="w-10 h-10 text-sky-600" />
            <h2 className="text-xl font-bold text-gray-900">Call</h2>
            <p className="text-gray-600 text-center text-sm">
              Call us directly. We&apos;re available from 8:00 to 20:00 in season.
            </p>
            <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-sky-500 text-white group-hover:bg-sky-400 transition-colors">
              +34 623 99 57 00
            </span>
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-sky-600" />
            <h2 className="text-xl font-bold text-gray-900">Email</h2>
          </div>
          <p className="text-gray-600 mb-4">
            If you prefer to email us, send us a message with your booking details. We reply within
            24 hours.
          </p>
          <a
            href="mailto:info@experienceboat.es"
            className="text-sky-600 hover:text-sky-700 font-semibold hover:underline"
          >
            info@experienceboat.es
          </a>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What do you need to book?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Date and time',
                text: 'Tell us which day you want to sail and how many hours you need.',
              },
              {
                icon: Anchor,
                title: 'Type of boat',
                text: 'Without licence, with licence or a private skippered excursion.',
              },
              {
                icon: Shield,
                title: 'Number of people',
                text: 'So we can recommend the most suitable boat for your group.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100"
              >
                <item.icon className="w-8 h-8 text-sky-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Not sure which boat to choose yet? Browse our fleet or our experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/boats" className="text-sky-600 font-semibold hover:underline">
              See boats
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/en/boat-experiences-roses"
              className="text-sky-600 font-semibold hover:underline"
            >
              See experiences
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/en/contact" className="text-sky-600 font-semibold hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
