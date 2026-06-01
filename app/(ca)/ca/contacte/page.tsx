import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/contacto/ContactForm';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contacte — Lloguer de vaixells a Roses',
  description:
    'Contacta\'ns per reservar el teu vaixell a Roses o resoldre qualsevol dubte. Som a la Marina de Santa Margarida. Responem en menys de 24 hores.',
  keywords: [
    'contacte lloguer vaixell Roses',
    'reservar vaixell Roses',
    'Experience Boat contacte',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/contacte',
    languages: {
      'x-default': 'https://www.experienceboat.es/contacto',
      es: 'https://www.experienceboat.es/contacto',
      ca: 'https://www.experienceboat.es/ca/contacte',
      fr: 'https://www.experienceboat.es/fr/contact',
      en: 'https://www.experienceboat.es/en/contact',
    },
  },
  openGraph: {
    title: 'Contacte — Lloguer de vaixells a Roses',
    description:
      'Contacta\'ns per reservar el teu vaixell a Roses o resoldre qualsevol dubte. Som a la Marina de Santa Margarida.',
    url: 'https://www.experienceboat.es/ca/contacte',
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

export default function ContactePageCA() {
  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Columna esquerra: textos i dades */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Contacta amb nosaltres, parlem-ne.
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Si tens cap pregunta sobre els nostres vaixells, vols reservar o simplement no saps per on començar, escriu-nos. Et responem ràpid.
            </p>

            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Telèfon / WhatsApp</p>
                  <a href="tel:+34623995700" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                    +34 623 99 57 00
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Disponible de 9:00 a 20:00 · Temporada abril–octubre</p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Correu electrònic</p>
                  <a href="mailto:info@experienceboat.es" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                    info@experienceboat.es
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">On som</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Marina de Santa Margarida<br />
                    Roses, 17480 · Girona
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Horari d&apos;atenció</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    De dilluns a diumenge · 9:00 – 20:00 h<br />
                    <span className="text-sm text-gray-500">(temporada alta)</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna dreta: formulari Google Forms (embed) */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 shadow-sm flex flex-col gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Envia&apos;ns un missatge</h2>
              <p className="text-sm text-gray-600">
                Omple el formulari i et responem aviat. També ens pots{' '}
                <a
                  href="https://wa.me/34623995700?text=Hola%2C%20vull%20informaci%C3%B3%20sobre%20Experience%20Boat"
                  className="text-sky-600 hover:text-sky-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  escriure per WhatsApp
                </a>
                .
              </p>
            </div>

            <ContactForm lang="ca" />

            <p className="text-xs text-gray-500">
              L&apos;enviament es gestiona a través de Google Forms. Consulta la nostra{' '}
              <Link href="/ca/politica-privacitat" className="underline hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                política de privacitat
              </Link>
              .
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Prefereixes trucar directament? Cap problema. Som al moll i ens agrada parlar amb la gent abans que pugi a bord.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Secció del mapa */}
      <section className="w-full bg-gray-100" aria-label="Mapa d'Experience Boat">
        <div className="relative w-full h-[min(60vh,600px)] min-h-[400px] sm:min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.478698802148!2d3.1348328814582076!3d42.26846554393358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775514197510!5m2!1ses!2ses"
            title="Ubicació d'Experience Boat a Google Maps"
            aria-label="Mapa interactiu amb la ubicació d'Experience Boat"
            className="absolute inset-0 block h-full w-full border-0"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            allow="fullscreen; geolocation"
          />
        </div>
      </section>
    </main>
  );
}
