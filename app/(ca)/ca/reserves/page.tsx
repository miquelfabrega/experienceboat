import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, Anchor, Clock, Shield } from 'lucide-react';
import RegiondoCatalogWidget from '@/components/experiencias/RegiondoCatalogWidget';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Reservar vaixell a Roses',
  description:
    'Reserva el teu vaixell a Roses amb Experience Boat. Sense llicència, amb llicència o excursions privades. Resposta immediata per WhatsApp o correu.',
  keywords: [
    'reservar vaixell Roses',
    'lloguer vaixell Roses',
    'reserves vaixell Costa Brava',
  ],
  alternates: buildAlternates('bookings', 'ca'),
  openGraph: {
    title: 'Reservar vaixell a Roses',
    description:
      'Reserva el teu vaixell a Roses amb Experience Boat. Sense llicència, amb llicència o excursions privades.',
    url: 'https://www.experienceboat.es/ca/reserves',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function ReservesPageCA() {
  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Reserva el teu vaixell a Roses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tria com vols contactar amb nosaltres. Et confirmem disponibilitat i preu en minuts.
          </p>
        </div>

        <RegiondoCatalogWidget />

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <a
            href="https://wa.me/34623995700?text=Hola%2C%20vull%20reservar%20un%20vaixell%20a%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
          >
            <MessageCircle className="w-10 h-10 text-[#25D366]" />
            <h2 className="text-xl font-bold text-gray-900">WhatsApp</h2>
            <p className="text-gray-600 text-center text-sm">
              Resposta immediata. Digues-nos data, horari i nombre de persones.
            </p>
            <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white group-hover:bg-[#1ebe59] transition-colors">
              Obrir WhatsApp
            </span>
          </a>

          <a
            href="tel:+34623995700"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-sky-200 bg-sky-50/50 hover:bg-sky-50 transition-colors group"
          >
            <Phone className="w-10 h-10 text-sky-600" />
            <h2 className="text-xl font-bold text-gray-900">Trucar</h2>
            <p className="text-gray-600 text-center text-sm">
              Truca&apos;ns directament. Atenem de 8:00 a 20:00 en temporada.
            </p>
            <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-sky-500 text-white group-hover:bg-sky-400 transition-colors">
              +34 623 99 57 00
            </span>
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-sky-600" />
            <h2 className="text-xl font-bold text-gray-900">Correu electrònic</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Si prefereixes escriure&apos;ns per correu, envia&apos;ns un email amb els detalls de la teva reserva. Responem en menys de 24 hores.
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
            Què necessites per reservar?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Data i horari',
                text: 'Digues-nos quin dia vols sortir i quantes hores necessites.',
              },
              {
                icon: Anchor,
                title: 'Tipus de vaixell',
                text: 'Sense llicència, amb llicència o excursió privada amb patró.',
              },
              {
                icon: Shield,
                title: 'Nombre de persones',
                text: 'Per recomanar-te l\'embarcació més adequada per al teu grup.',
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
            Encara no saps quin vaixell triar? Consulta la nostra flota o les nostres experiències.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ca/embarcacions"
              className="text-sky-600 font-semibold hover:underline"
            >
              Veure vaixells
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/ca/experiencies-vaixell-roses"
              className="text-sky-600 font-semibold hover:underline"
            >
              Veure experiències
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/ca/contacte"
              className="text-sky-600 font-semibold hover:underline"
            >
              Contacte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
