import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, Anchor, Clock, Shield } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Reservar barco en Roses',
  description:
    'Reserva tu barco en Roses con Experience Boat. Sin licencia, con licencia o excursiones privadas. Respuesta inmediata por WhatsApp o email.',
  alternates: {
    canonical: 'https://experienceboat.es/reservas',
    languages: {
      'x-default': 'https://experienceboat.es/reservas',
      es: 'https://experienceboat.es/reservas',
    },
  },
  openGraph: {
    title: 'Reservar barco en Roses',
    description:
      'Reserva tu barco en Roses con Experience Boat. Sin licencia, con licencia o excursiones privadas.',
    url: 'https://experienceboat.es/reservas',
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

export default function ReservasPage() {
  return (
    <main id="main-content" className="bg-white min-h-[70vh]">
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Reserva tu barco en Roses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige cómo quieres contactar con nosotros. Te confirmamos disponibilidad y precio en
            minutos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <a
            href="https://wa.me/34623995700?text=Hola%2C%20quiero%20reservar%20un%20barco%20en%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
          >
            <MessageCircle className="w-10 h-10 text-[#25D366]" />
            <h2 className="text-xl font-bold text-gray-900">WhatsApp</h2>
            <p className="text-gray-600 text-center text-sm">
              Respuesta inmediata. Dinos fecha, horario y número de personas.
            </p>
            <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white group-hover:bg-[#1ebe59] transition-colors">
              Abrir WhatsApp
            </span>
          </a>

          <a
            href="tel:+34623995700"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-sky-200 bg-sky-50/50 hover:bg-sky-50 transition-colors group"
          >
            <Phone className="w-10 h-10 text-sky-600" />
            <h2 className="text-xl font-bold text-gray-900">Llamar</h2>
            <p className="text-gray-600 text-center text-sm">
              Llámanos directamente. Atendemos de 8:00 a 20:00 en temporada.
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
            Si prefieres escribirnos por correo, envíanos un email con los detalles de tu reserva.
            Respondemos en menos de 24 horas.
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
            ¿Qué necesitas para reservar?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Fecha y horario',
                text: 'Dinos qué día quieres salir y cuántas horas necesitas.',
              },
              {
                icon: Anchor,
                title: 'Tipo de barco',
                text: 'Sin licencia, con licencia o excursión privada con patrón.',
              },
              {
                icon: Shield,
                title: 'Número de personas',
                text: 'Para recomendarte la embarcación más adecuada a tu grupo.',
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
            ¿Aún no sabes qué barco elegir? Consulta nuestra flota o nuestras experiencias.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/barcos"
              className="text-sky-600 font-semibold hover:underline"
            >
              Ver barcos
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/experiencias-barco-roses"
              className="text-sky-600 font-semibold hover:underline"
            >
              Ver experiencias
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/contacto"
              className="text-sky-600 font-semibold hover:underline"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
