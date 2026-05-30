import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Anchor,
  Euro,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import ReviewsSection from '@/components/pillar-experiencias/ReviewsSection';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Excursiones privadas en barco en Roses',
  description:
    'Excursiones privadas en barco desde Roses con patrón incluido. Cap de Creus, calas vírgenes y bahía de Roses. Solo tu grupo a bordo. Reserva online ya.',
  alternates: {
    canonical: 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
    languages: {
      'x-default': 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
      es: 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
      fr: 'https://experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
      en: 'https://experienceboat.es/en/boat-experiences-roses/private-excursions',
    },
  },
  openGraph: {
title: 'Excursiones privadas en barco en Roses',
    description:
      'Excursiones privadas en barco desde Roses con patrón incluido. Cap de Creus, calas vírgenes y bahía de Roses. Solo tu grupo a bordo.',
    url: 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
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

const faqs = [
  {
    q: '¿Hace falta licencia náutica para participar en una excursión?',
    a: 'No. En las excursiones privadas con patrón, uno de nuestros patrones lleva la embarcación. Los participantes no necesitan ninguna titulación náutica — solo ganas de disfrutar del mar.',
  },
  {
    q: '¿Puedo reservar una excursión privada para un cumpleaños o evento especial?',
    a: 'Sí. Las excursiones privadas son perfectas para celebraciones, despedidas de soltero, aniversarios o cualquier evento que quieras hacer especial. Consúltanos y adaptamos la salida a la ocasión.',
  },
  {
    q: '¿Podemos llevar comida y bebida al barco?',
    a: 'Sí. Podéis traer lo que queráis para el día. Recomendamos traer nevera con bebidas frescas, protección solar y ropa de baño. Nosotros ponemos el barco, el patrón y la ruta.',
  },
  {
    q: '¿Qué pasa si hay mal tiempo el día de la excursión?',
    a: 'Monitorizamos la previsión meteorológica diariamente. Si las condiciones no son seguras para salir, avisamos con la máxima antelación posible, cancelamos sin coste y buscamos contigo una fecha alternativa.',
  },
  {
    q: '¿Es apta para niños pequeños?',
    a: 'Sí. Las excursiones privadas son especialmente cómodas para familias con niños porque la ruta y el ritmo se adaptan completamente al grupo. Disponemos de chalecos salvavidas para todas las edades.',
  },
];

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
    name: 'Excursiones privadas en barco en Roses con patrón',
    url: 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
    description: 'Excursión privada en barco por el Cap de Creus, calas y bahía de Roses. Patrón incluido, ruta adaptada al grupo. Medio día o día completo.',
    duration: 'PT4H',
    inLanguage: 'es',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
  },
    availableLanguage: [
      { '@type': 'Language', 'name': 'Spanish' },
      { '@type': 'Language', 'name': 'French' },
      { '@type': 'Language', 'name': 'English' },
      { '@type': 'Language', 'name': 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',
    price: '300',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://experienceboat.es/reservas',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiencias en barco en Roses',
        item: 'https://experienceboat.es/experiencias-barco-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Excursiones privadas en barco en Roses',
        item: 'https://experienceboat.es/experiencias-barco-roses/excursiones-privadas',
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ExcursionesPrivadasBarcoRosesPage() {
  return (
    <>
      <FAQSchema />
      <TouristTripSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <section className="relative min-h-[52vh] flex items-end bg-slate-900">
          <Image
            src="/images/experiencias/excursiones-privadas-hero.webp"
            alt="Excursión privada en barco fondeado sobre aguas turquesa en una cala del Cap de Creus, Roses"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 w-full">
            <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-3">
              <Link href="/experiencias-barco-roses" className="hover:underline">
                Experiencias en barco
              </Link>
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Excursiones privadas en barco en Roses
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
              Descubre la Costa Brava norte desde el mar sin preocuparte de nada más que disfrutar. En
              Experience Boat ofrecemos excursiones privadas en barco desde Roses con patrón incluido:
              Tomàs o Max llevan el timón, conocen cada cala y cada ruta, y se adaptan al ritmo y las
              preferencias de tu grupo. Salimos desde los{' '}
              <Link href="/canales-santa-margarita" className="text-sky-300 hover:underline">
                canales de Santa Margarita
              </Link>{' '}
              hacia la bahía de Roses, el Parque Natural del Cap de Creus y las calas más espectaculares
              de la Costa Brava norte.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservas"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-lg transition-all"
              >
                Reservar
              </Link>
              <a
                href="https://wa.me/34623995700?text=Hola%2C%20me%20interesan%20las%20excursiones%20privadas%20en%20barco%20en%20Roses"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-[#25D366] hover:bg-[#1ebe59] text-white transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16 text-slate-600 text-lg leading-relaxed">
          <section id="servicios" aria-labelledby="h-servicios">
            <h2 id="h-servicios" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Nuestras excursiones desde Roses
            </h2>
            <p className="mb-8">
              Todas las salidas son privadas. La embarcación es exclusivamente para tu grupo — sin
              compartir espacio con otros clientes, sin horarios rígidos y con la ruta adaptada a lo que
              quieras ver.
            </p>

            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <article className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src="/images/boats/orange-kiwi.jpg"
                    alt="Neumática con patrón — Orange Kiwi 620"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Neumáticas con patrón</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Ej.: Orange Kiwi 620 — hasta 11 personas. Ideal para grupos que buscan comodidad y
                    estabilidad.
                  </p>
                  <ul className="text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      Capacidad habitual: hasta 11 pax
                    </li>
                    <li className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-sky-600 shrink-0" />
                      Medio día: 300 € · Día completo: 600 €
                    </li>
                  </ul>
                  <Link
                    href="/reservas"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Reservar
                  </Link>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src="/images/boats/spirit.jpg"
                    alt="Lancha con patrón — Spirit of the Sea 675"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Lancha con patrón</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Embarcación premium — máxima comodidad para jornadas largas en el Cap de Creus.
                  </p>
                  <ul className="text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      Capacidad: consultar según modelo
                    </li>
                    <li className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-sky-600 shrink-0" />
                      Medio día: 600 € · Día completo: 1.200 €
                    </li>
                  </ul>
                  <Link
                    href="/reservas"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Reservar
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <section aria-labelledby="h-destinos">
            <h2 id="h-destinos" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              ¿A dónde vas en nuestras excursiones?
            </h2>
            <p className="mb-8">
              No hay una ruta fija. Cada salida se adapta a tu grupo, al tiempo disponible y a lo que
              quieras ver. Estos son los destinos más habituales desde Roses:
            </p>

            <h3 id="cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Cap de Creus
            </h3>
            <p>
              El Parque Natural del Cap de Creus es el destino estrella de la zona y el que más repite
              en las reseñas de nuestros clientes. Desde el agua, el paisaje cambia completamente:
              acantilados volcánicos, calas de acceso exclusivo por mar y una luz mediterránea que en
              fotografía no tiene igual. A unos 45-60 minutos desde Santa Margarita según las
              condiciones.
            </p>

            <h3 id="calas-cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Calas del Cap de Creus
            </h3>
            <p>
              El Cap de Creus esconde algunas de las calas más vírgenes de toda la Costa Brava. Cala
              Culip, Cala Jugadora, Cala Fredosa — calas que no aparecen en las guías turísticas
              genéricas porque solo se llegan en barco. Tomàs y Max conocen cuáles merecen la pena según
              la época del año y las condiciones del mar.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Bahía de Roses</h3>
            <p>
              Para grupos que prefieren aguas más tranquilas o salidas con niños pequeños, la{' '}
              <Link href="/" className="text-sky-600 hover:underline font-medium">
                bahía de Roses
              </Link>{' '}
              ofrece paradas increíbles sin necesidad de alejarse demasiado. Cala Canyelles Petites y
              Cala Almadraba son dos de las más valoradas y están a pocos minutos desde el punto de
              salida.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Canales de Santa Margarita</h3>
            <p>
              La propia salida ya es una experiencia. Los{' '}
              <Link href="/canales-santa-margarita" className="text-sky-600 hover:underline">
                canales de Santa Margarita
              </Link>{' '}
              — casas frente al agua, ambiente único — son el escenario de inicio de todas nuestras
              excursiones. Muchos clientes piden parar a explorar los canales antes de salir a mar
              abierto.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              ¿Cómo es una excursión con Experience Boat?
            </h2>
            <p className="mb-4">
              Para que te hagas una idea real de cómo funciona una salida, así es como transcurre
              habitualmente una excursión de día completo:
            </p>
            <p>
              Quedamos en el punto de encuentro en la Marina de Santa Margarita a la hora acordada.
              Tomàs o Max os reciben, os explican el barco y preguntamos qué queréis ver. Si tenéis
              preferencias de ruta, las incorporamos. Si preferís que os sorprendamos, proponemos
              nosotros. Salimos por los canales hacia la bahía y desde ahí trazamos rumbo según el plan.
            </p>
            <p>
              Durante la salida hay paradas para el baño en calas, tiempo libre en el agua y flexibilidad
              total para ajustar la ruta si encontráis algo que os gusta. El regreso lo acordamos con
              vosotros — no hay hora fija mientras estéis dentro del tiempo contratado.
            </p>
          </section>

          <section className="rounded-2xl bg-sky-50 border border-sky-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Todo privado — ningún desconocido a bordo
            </h2>
            <p className="mb-4">
              Esta es la diferencia más importante respecto a las excursiones compartidas que ofrecen
              otras empresas de la zona. Cuando reservas con Experience Boat, la embarcación es
              exclusivamente para vuestro grupo. Sin turistas desconocidos, sin ruta decidida por
              mayoría, sin esperar a que otros se suban o bajen.
            </p>
            <p>
              Para familias con niños es especialmente relevante: podéis parar cuando queráis, bañaros
              con calma y adaptar el ritmo al de los más pequeños. Para grupos de amigos, significa que
              podéis disfrutar del día a vuestra manera sin condicionantes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Información práctica de las excursiones
            </h2>
            <dl className="space-y-6 text-base">
              <div>
                <dt className="font-bold text-slate-900">¿Cuántas personas pueden venir?</dt>
                <dd className="mt-1">
                  Dependiendo de la embarcación, entre 6 y 12 personas. Si sois un grupo más numeroso,
                  consúltanos — buscamos la solución más adecuada.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">¿Cuánto dura la excursión?</dt>
                <dd className="mt-1">
                  Ofrecemos excursiones de medio día (aproximadamente 4 horas) y día completo
                  (aproximadamente 8 horas). La duración exacta se acuerda en la reserva.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">¿Qué incluye la excursión?</dt>
                <dd className="mt-1">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Patrón con conocimiento de la zona (Tomàs o Max)</li>
                    <li>Embarcación privada para tu grupo</li>
                    <li>Combustible</li>
                    <li>Equipamiento de seguridad reglamentario</li>
                    <li>Paradas para el baño con escalera de acceso al agua</li>
                    <li>Recomendaciones de ruta personalizadas</li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">¿Con cuánta antelación hay que reservar?</dt>
                <dd className="mt-1">
                  En julio y agosto recomendamos reservar con al menos dos semanas. En temporada media,
                  con 48-72 horas suele ser suficiente.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">¿Se puede personalizar la ruta?</dt>
                <dd className="mt-1">
                  Sí, completamente. Antes de salir hablamos con vosotros, recogemos vuestras preferencias
                  y construimos la ruta a partir de ahí. Si hay calas concretas que queréis visitar,
                  intentamos incluirlas siempre que las condiciones del mar lo permitan.
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              ¿Por qué elegir una excursión privada con Experience Boat?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 not-prose">
              {[
                {
                  icon: Users,
                  title: 'Patrón local, no guía turístico',
                  text: 'Tomàs y Max son patrones con perfil cercano que conocen la zona de primera mano. No recitan un guión — se adaptan a vosotros y os llevan a los sitios que de verdad merecen la pena.',
                },
                {
                  icon: Shield,
                  title: 'Privacidad total',
                  text: 'La embarcación es solo para vuestro grupo. Sin compartir espacio, sin rutas prefijadas, sin depender de otros.',
                },
                {
                  icon: Sparkles,
                  title: 'Zona de referencia',
                  text: 'El Cap de Creus y la bahía de Roses son dos de los entornos naturales más singulares del Mediterráneo. Desde el agua se descubren rincones que desde tierra son inaccesibles.',
                },
                {
                  icon: Anchor,
                  title: 'Salida desde los canales',
                  text: 'El punto de partida ya es diferente. Los canales de Santa Margarita son un escenario único que no encontrarás en ninguna otra empresa de la zona.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50/80"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              ¿Prefieres llevar tú el barco?
            </h2>
            <p className="mb-6">
              Si tienes licencia de navegación y quieres la libertad de trazar tu propia ruta sin
              patrón, también tenemos esa opción.
            </p>
            <Link
              href="/alquiler-barco-con-licencia-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline mb-8"
            >
              Ver alquiler de barco con licencia →
            </Link>
            <p className="mb-6">
              ¿No tienes licencia pero quieres explorar por tu cuenta? Nuestros barcos sin licencia son
              perfectos para salidas autónomas por la bahía y los canales.
            </p>
            <Link
              href="/alquiler-barco-sin-licencia-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline"
            >
              Ver barcos sin licencia →
            </Link>
          </section>
        </div>

        <ReviewsSection />

        <SiloNavBlock currentPath="/experiencias-barco-roses/excursiones-privadas" />

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Dónde encontrarnos — Marina de Santa Margarita, Roses
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            Estamos en la entrada de Roses, al inicio de la Marina de Santa Margarita. Fácil de
            encontrar y con aparcamiento cercano.
          </p>
          <p className="font-semibold text-slate-800 mb-2">
            Av. Clot Franquest Nord, 17480 Roses, Girona
          </p>
          <p className="text-slate-600 mb-6">
            Tel:{' '}
            <a href="tel:+34623995700" className="text-sky-600 hover:underline">
              +34 623 99 57 00
            </a>
            {' · '}
            <a href="mailto:info@experienceboat.es" className="text-sky-600 hover:underline">
              info@experienceboat.es
            </a>
          </p>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              title="Marina de Santa Margarita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-0">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Enlaces de interés</h2>
          <ul className="space-y-2 text-sky-600">
            <li>
              <Link href="/experiencias-barco-roses/canal-tour-santa-margarita" className="hover:underline">
                Canal tour Santa Margarita
              </Link>
            </li>
            <li>
              <Link href="/alquiler-barco-con-licencia-roses" className="hover:underline">
                Alquiler de barco con licencia en Roses
              </Link>
            </li>
            <li>
              <Link href="/alquiler-barco-sin-licencia-roses" className="hover:underline">
                Barcos sin licencia
              </Link>
            </li>
            <li>
              <Link href="/canales-santa-margarita" className="hover:underline">
                Canales de Santa Margarita
              </Link>
            </li>
            <li>
              <Link href="/canales-santa-margarita/ruta-cap-de-creus" className="hover:underline">
                Parque Natural del Cap de Creus
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Bahía de Roses
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <StickyMobileCTA />
    </>
  );
}
