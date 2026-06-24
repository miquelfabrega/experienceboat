import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, Anchor, Clock, Shield } from 'lucide-react';
import RegiondoCatalogWidget from '@/components/experiencias/RegiondoCatalogWidget';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Réserver un bateau à Roses',
  description:
    'Réservez votre bateau à Roses avec Experience Boat. Sans permis, avec permis ou excursions privées. Réponse immédiate par WhatsApp ou email.',
  keywords: [
    'réserver bateau Roses',
    'location bateau Roses',
    'réservation bateau Costa Brava',
  ],
  alternates: buildAlternates('bookings', 'fr'),
  openGraph: {
    title: 'Réserver un bateau à Roses',
    description:
      'Réservez votre bateau à Roses avec Experience Boat. Sans permis, avec permis ou excursions privées.',
    url: 'https://www.experienceboat.es/fr/reservation',
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

export default function ReservationPageFR() {
  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Réservez votre bateau à Roses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez comment nous contacter. Nous vous confirmons la disponibilité et le prix en
            quelques minutes.
          </p>
        </div>

        <RegiondoCatalogWidget />

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <a
            href="https://wa.me/34623995700?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20bateau%20%C3%A0%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
          >
            <MessageCircle className="w-10 h-10 text-[#25D366]" />
            <h2 className="text-xl font-bold text-gray-900">WhatsApp</h2>
            <p className="text-gray-600 text-center text-sm">
              Réponse immédiate. Indiquez-nous la date, l&apos;horaire et le nombre de personnes.
            </p>
            <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white group-hover:bg-[#1ebe59] transition-colors">
              Ouvrir WhatsApp
            </span>
          </a>

          <a
            href="tel:+34623995700"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-sky-200 bg-sky-50/50 hover:bg-sky-50 transition-colors group"
          >
            <Phone className="w-10 h-10 text-sky-600" />
            <h2 className="text-xl font-bold text-gray-900">Appeler</h2>
            <p className="text-gray-600 text-center text-sm">
              Appelez-nous directement. Nous répondons de 8h00 à 20h00 en saison.
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
            Si vous préférez nous écrire par courriel, envoyez-nous un email avec les détails de
            votre réservation. Nous répondons en moins de 24 heures.
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
            Que faut-il pour réserver ?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Date et horaire',
                text: 'Dites-nous quel jour vous voulez partir et combien d’heures vous avez besoin.',
              },
              {
                icon: Anchor,
                title: 'Type de bateau',
                text: 'Sans permis, avec permis ou excursion privée avec skipper.',
              },
              {
                icon: Shield,
                title: 'Nombre de personnes',
                text: 'Pour vous recommander le bateau le plus adapté à votre groupe.',
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
            Vous ne savez pas encore quel bateau choisir ? Consultez notre flotte ou nos expériences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fr/bateaux" className="text-sky-600 font-semibold hover:underline">
              Voir les bateaux
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/fr/experiences-bateau-roses"
              className="text-sky-600 font-semibold hover:underline"
            >
              Voir les expériences
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/fr/contact" className="text-sky-600 font-semibold hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
