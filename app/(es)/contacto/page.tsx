import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/contacto/ContactForm';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contacto — Alquiler de barcos en Roses',
  description: 'Contáctanos para reservar tu barco en Roses o resolver cualquier duda. Estamos en la Marina de Santa Margarita. Respondemos en menos de 24 horas.',
  alternates: buildAlternates('contact', 'es'),
  openGraph: {
    title: 'Contacto — Alquiler de barcos en Roses',
    description: 'Contáctanos para reservar tu barco en Roses o resolver cualquier duda. Estamos en la Marina de Santa Margarita. Respondemos en menos de 24 horas.',
    url: 'https://www.experienceboat.es/contacto',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function ContactoPage() {
  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Columna Izquierda: Textos y Datos */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Contacta con nosotros, hablemos.
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Si tienes alguna pregunta sobre nuestros barcos, quieres reservar o simplemente no sabes por dónde empezar, escríbenos. Te respondemos rápido.
            </p>

            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Teléfono / WhatsApp</p>
                  <a href="tel:+34623995700" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                    +34 623 99 57 00
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Disponible de 9:00 a 20:00 · Temporada abril–octubre</p>
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
                  <p className="font-semibold text-gray-900 text-lg">Dónde estamos</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Marina de Santa Margarita<br />
                    Roses, 17480 · Girona
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Horario de atención</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Lunes a domingo · 9:00 – 20:00 h<br />
                    <span className="text-sm text-gray-500">(temporada alta)</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna Derecha: formulario Google Forms (embed) */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 shadow-sm flex flex-col gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Envíanos un mensaje</h2>
              <p className="text-sm text-gray-600">
                Completa el formulario y te respondemos pronto. También puedes{' '}
                <a
                  href="https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Experience%20Boat"
                  className="text-sky-600 hover:text-sky-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  escribirnos por WhatsApp
                </a>
                .
              </p>
            </div>

            <ContactForm lang="es" />

            <p className="text-xs text-gray-500">
              El envío se gestiona a través de Google Forms. Consulta nuestra{' '}
              <Link href="/politica-privacidad" className="underline hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                política de privacidad
              </Link>
              .
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                ¿Prefieres llamar directamente? Sin problema. Estamos en el muelle y nos gusta hablar con la gente antes de que suba a bordo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sección del Mapa — contenedor con altura explícita para que el iframe no colapse */}
      <section className="w-full bg-gray-100" aria-label="Mapa de Experience Boat">
        <div className="relative w-full h-[min(60vh,600px)] min-h-[400px] sm:min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.478698802148!2d3.1348328814582076!3d42.26846554393358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775514197510!5m2!1ses!2ses"
            title="Ubicación de Experience Boat en Google Maps"
            aria-label="Mapa interactivo con la ubicación de Experience Boat"
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
