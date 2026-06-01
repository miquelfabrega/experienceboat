'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, MessageCircle, Home, Anchor, Clock } from 'lucide-react';

type Lang = 'es' | 'en' | 'fr' | 'ca';

const WHATSAPP_URL =
  'https://wa.me/34623995700?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20de%20Experience%20Boat';

type Copy = {
  badge: string;
  title: string;
  lead: string;
  stepsTitle: string;
  steps: string[];
  urgent: string;
  whatsapp: string;
  home: string;
  explore: string;
  homeHref: string;
  boatsHref: string;
};

const COPY: Record<Lang, Copy> = {
  es: {
    badge: 'Solicitud enviada',
    title: '¡Gracias! Hemos recibido tu mensaje',
    lead: 'Tu solicitud ya está en nuestra bandeja. Te responderemos en menos de 24 horas, normalmente mucho antes.',
    stepsTitle: '¿Qué pasa ahora?',
    steps: [
      'Revisamos tu solicitud y la disponibilidad de fechas.',
      'Te escribimos por email o WhatsApp con la propuesta y los detalles.',
      'Reservamos tu barco y nos vemos en la Marina de Santa Margarita.',
    ],
    urgent: '¿Tienes prisa o prefieres hablar ya?',
    whatsapp: 'Escríbenos por WhatsApp',
    home: 'Volver al inicio',
    explore: 'Ver nuestros barcos',
    homeHref: '/',
    boatsHref: '/barcos',
  },
  en: {
    badge: 'Request sent',
    title: 'Thank you! We’ve received your message',
    lead: 'Your request is now in our inbox. We’ll get back to you within 24 hours — usually much sooner.',
    stepsTitle: 'What happens next?',
    steps: [
      'We review your request and check date availability.',
      'We get back to you by email or WhatsApp with a proposal and the details.',
      'We book your boat and see you at Marina de Santa Margarita.',
    ],
    urgent: 'In a hurry or prefer to talk now?',
    whatsapp: 'Message us on WhatsApp',
    home: 'Back to home',
    explore: 'See our boats',
    homeHref: '/en',
    boatsHref: '/en/boats',
  },
  fr: {
    badge: 'Demande envoyée',
    title: 'Merci ! Nous avons bien reçu votre message',
    lead: 'Votre demande est dans notre boîte de réception. Nous vous répondrons sous 24 heures, généralement bien avant.',
    stepsTitle: 'Et maintenant ?',
    steps: [
      'Nous examinons votre demande et vérifions les disponibilités.',
      'Nous vous répondons par e-mail ou WhatsApp avec une proposition et les détails.',
      'Nous réservons votre bateau et nous vous retrouvons à la Marina de Santa Margarita.',
    ],
    urgent: 'Pressé ou vous préférez échanger tout de suite ?',
    whatsapp: 'Écrivez-nous sur WhatsApp',
    home: 'Retour à l’accueil',
    explore: 'Voir nos bateaux',
    homeHref: '/fr',
    boatsHref: '/fr/bateaux',
  },
  ca: {
    badge: 'Sol·licitud enviada',
    title: 'Gràcies! Hem rebut el vostre missatge',
    lead: 'La vostra sol·licitud ja és a la nostra safata d’entrada. Us respondrem en menys de 24 hores, normalment molt abans.',
    stepsTitle: 'Què passa ara?',
    steps: [
      'Revisem la vostra sol·licitud i la disponibilitat de dates.',
      'Us escrivim per correu o WhatsApp amb la proposta i els detalls.',
      'Reservem el vostre vaixell i ens veiem a la Marina de Santa Margarida.',
    ],
    urgent: 'Teniu pressa o preferiu parlar ara mateix?',
    whatsapp: 'Escriviu-nos per WhatsApp',
    home: 'Torna a l’inici',
    explore: 'Veure els nostres vaixells',
    homeHref: '/ca',
    boatsHref: '/ca/embarcacions',
  },
};

export default function GraciasContent({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  // Empuja el evento de conversión a dataLayer para que GTM (GTM-KF823TM7)
  // dispare la conversión de Google Ads / GA4 con un trigger de evento
  // personalizado: "form_thank_you".
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_thank_you',
      form_type: 'contact',
      page_lang: lang,
    });
  }, [lang]);

  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700 ring-1 ring-inset ring-sky-100">
            <CheckCircle2 className="w-4 h-4" aria-hidden />
            {t.badge}
          </span>

          <div className="mx-auto mt-8 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
            <CheckCircle2 className="h-11 w-11 text-sky-600" aria-hidden />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t.title}
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">{t.lead}</p>
        </div>

        {/* Qué pasa ahora */}
        <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <Clock className="w-5 h-5 text-sky-600 shrink-0" aria-hidden />
            {t.stepsTitle}
          </h2>
          <ol className="mt-5 space-y-4">
            {t.steps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTAs */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-5">{t.urgent}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              {t.whatsapp}
            </a>
            <Link
              href={t.boatsHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
            >
              <Anchor className="w-5 h-5" aria-hidden />
              {t.explore}
            </Link>
            <Link
              href={t.homeHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
            >
              <Home className="w-5 h-5" aria-hidden />
              {t.home}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
