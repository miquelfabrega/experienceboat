import type { Metadata } from 'next';
import Link from 'next/link';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Qué ver en los canales de Santa Margarita',
  description:
    'Descubre todo lo que esconden los canales de Santa Margarita desde el agua. Casas, fauna y la Costa Brava más auténtica. Salidas privadas desde Roses.',
  alternates: {
    canonical: 'https://www.experienceboat.es/canales-santa-margarita/que-ver',
    languages: {
      'x-default': 'https://www.experienceboat.es/canales-santa-margarita/que-ver',
      es: 'https://www.experienceboat.es/canales-santa-margarita/que-ver',
      fr: 'https://www.experienceboat.es/fr/canaux-santa-margarita/que-voir',
      en: 'https://www.experienceboat.es/en/santa-margarita-canals-roses/what-to-see',
    },
  },
  openGraph: {
title: 'Qué ver en los canales de Santa Margarita',
    description:
      'Descubre todo lo que esconden los canales de Santa Margarita desde el agua. Casas, fauna y la Costa Brava más auténtica. Salidas privadas desde Roses.',
    url: 'https://www.experienceboat.es/canales-santa-margarita/que-ver',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'article',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: '¿Se puede visitar los canales de Santa Margarita a pie?',
    answer:
      'Sí, hay un paseo peatonal que bordea parte de los canales y miradores desde los que se puede ver el agua y las casas. Pero la experiencia desde el barco es completamente diferente — desde el agua se accede a los tramos más interiores y se ve la urbanización desde la perspectiva que sus arquitectos diseñaron originalmente.',
  },
  {
    question: '¿Cuánto tiempo lleva recorrer los canales en barco?',
    answer:
      'El recorrido por los canales interiores a ritmo tranquilo dura entre 60 y 90 minutos. Es perfectamente combinable con una salida a la bahía de Roses o al Cap de Creus en la misma jornada.',
  },
  {
    question: '¿Cuál es la mejor época para visitar los canales de Santa Margarita?',
    answer:
      'Mayo, junio y septiembre ofrecen las mejores condiciones: aguas tranquilas, temperatura agradable, fauna activa y mucho menos tráfico náutico que en pleno agosto. Para fotografía, la primera hora de la mañana en cualquier época del año es imbatible.',
  },
  {
    question: '¿Se puede hacer snorkel en los canales de Santa Margarita?',
    answer:
      'Los canales interiores no son el entorno ideal para el snorkel — las aguas son más tranquilas que cristalinas en algunos tramos. Para snorkel recomendamos las calas de la bahía de Roses y el Cap de Creus, que tienen fondos mucho más ricos y agua más transparente.',
  },
  {
    question: '¿Hay restricciones de navegación en los canales?',
    answer:
      'Sí. Los canales tienen límite de velocidad para proteger las embarcaciones amarradas y la tranquilidad de la urbanización. Nuestras embarcaciones están perfectamente adaptadas a esas condiciones y antes de cada salida explicamos las normas básicas de navegación en los canales.',
  },
];

/* ─── Schema Markup ──────────────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canales de Santa Margarita en barco',
        item: 'https://www.experienceboat.es/canales-santa-margarita',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Qué ver en los canales de Santa Margarita',
        item: 'https://www.experienceboat.es/canales-santa-margarita/que-ver',
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

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page Component ─────────────────────────────────────────────────────── */

export default function QueVerCanalesSantaMargarita() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Qué ver en los canales de Santa Margarita desde el agua
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Los{' '}
              <Link href="/canales-santa-margarita" className="text-sky-600 hover:underline">
                canales de Santa Margarita
              </Link>{' '}
              se pueden recorrer a pie o desde los miradores que hay repartidos por la urbanización.
              Pero ninguna de esas perspectivas se parece a lo que se ve desde el agua. Desde un barco,
              los canales revelan una dimensión completamente diferente: las casas se muestran desde su
              cara más íntima y el ritmo del recorrido — lento, tranquilo, sin ninguna prisa — convierte
              el paseo en algo que no se parece a ninguna otra experiencia en la Costa Brava.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>a]:text-sky-600 [&>a]:hover:underline">
            <h2>Las casas sobre el agua — arquitectura única en la Costa Brava</h2>
            <p>
              La imagen más característica de los canales de Santa Margarita es la de las casas con
              embarcadero privado. Más de 500 viviendas tienen acceso directo al agua desde su jardín —
              cada una con su pequeño muelle, su barca amarrada y su terraza asomada al canal.
            </p>
            <p>
              Desde tierra, estas casas se ven desde atrás — la fachada principal da a la calle. Desde el
              barco, las ves desde delante: jardines con palmeras, terrazas con sombrillas,
              propietarios tomando café a primera hora de la mañana con los pies casi en el agua. Es la
              cara privada de Santa Margarita que la mayoría de turistas nunca llega a ver.
            </p>
            <p>
              La arquitectura varía considerablemente de una casa a otra. Hay chalets de los años 60
              con el estilo mediterráneo original, reformas modernas con grandes ventanales sobre el
              canal y algunas casas que han mantenido intacto el diseño de cuando se construyó la
              urbanización. Para quien le interesa la arquitectura residencial, el recorrido por los
              canales es un catálogo único en la Costa Brava.
            </p>

            <h2>El ritmo del recorrido — lento por naturaleza</h2>
            <p>
              Los canales obligan a navegar a velocidad reducida. Esa lentitud no es un inconveniente:
              es precisamente lo que hace especial el trayecto. En un entorno de aguas tranquilas y
              protegidas, el tiempo se estira y el paisaje se aprecia con detalle.
            </p>
            <p>
              Esa calma obligada es, paradójicamente, uno de los aspectos más valorados del recorrido:
              en un mundo de ritmos acelerados, los canales de Santa Margarita invitan a ir despacio y
              mirar.
            </p>
            <p>
              Para quien navega por primera vez, los tramos rectos, las curvas suaves y los referentes
              visuales de la urbanización — fachadas, embarcaderos, vegetación — ayudan a orientarse sin
              prisa. El recorrido es reconocible en cualquier momento.
            </p>

            <h2>La fauna de los canales — lo que no esperas encontrar</h2>
            <p>
              Los canales de Santa Margarita no son solo arquitectura. Las aguas tranquilas y protegidas
              de las vías navegables interiores son el hábitat de una fauna que sorprende a quien no la
              espera.
            </p>
            <p>
              Las aves son las protagonistas. Garzas reales apostadas en los embarcaderos privados,
              martines pescadores que cruzan los canales como flechas de color azul eléctrico, patos
              que nadan entre las embarcaciones amarradas sin inmutarse por el paso de los barcos de
              alquiler. Para familias con niños, el avistamiento de fauna durante el recorrido por los
              canales es uno de los momentos más recordados de la salida.
            </p>
            <p>
              En las paredes sumergidas de los muelles y embarcaderos, cuando el agua está
              especialmente clara, se pueden ver peces pequeños moviéndose entre las algas. No es el Cap
              de Creus — pero tiene su propio ecosistema tranquilo que vale la pena observar.
            </p>

            <h2>Los canales al amanecer y al atardecer — la luz que lo cambia todo</h2>
            <p>
              Los canales de Santa Margarita son uno de esos lugares donde la luz del día importa tanto
              como el lugar en sí. A primera hora de la mañana, cuando el sol todavía está bajo y los
              reflejos en el agua son largos y dorados, los canales tienen una calidad casi irreal. Las
              casas se duplican en el agua, la luz dibuja sombras largas en las fachadas y hay una quietud
              que no dura más allá de las 10 de la mañana.
            </p>
            <p>
              Al atardecer, la transformación es diferente pero igual de espectacular. La luz cálida del
              final del día tiñe las fachadas de naranja y rosa, el agua se vuelve un espejo perfecto y el
              ambiente se llena de esa melancolía mediterránea que es difícil de describir pero
              inmediatamente reconocible.
            </p>
            <p>
              Es exactamente para estos momentos para los que existe el{' '}
              <Link
                href="/experiencias-barco-roses/sunset-experience"
                className="text-sky-600 hover:underline"
              >
                Sunset Experience
              </Link>{' '}
              de Experience Boat: una salida al atardecer por los canales de Santa Margarita que empieza
              con la última luz del día sobre el agua y termina cuando el sol desaparece tras el horizonte
              de la{' '}
              <Link href="/" className="text-sky-600 hover:underline">
                bahía de Roses
              </Link>
              .
            </p>

            <div className="my-10 flex justify-center sm:justify-start">
              <Link
                href="/experiencias-barco-roses/sunset-experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Ver Sunset Experience &rarr;
              </Link>
            </div>

            <h2>Los canales en cada época del año</h2>
            <p>
              Los canales de Santa Margarita cambian con las estaciones de una manera que pocas zonas
              turísticas de la Costa Brava pueden igualar.
            </p>
            <ul className="mb-8">
              <li>
                <strong>En primavera (abril, mayo, junio)</strong> — es la época más tranquila y
                posiblemente la más bonita. Los jardines de las casas están en flor, la vegetación que
                bordea algunos tramos del canal está en su punto más exuberante y la fauna es más
                activa que en pleno verano. Las aguas están limpias y tranquilas. Para quien quiere vivir
                los canales en su versión más auténtica, la primavera es el momento.
              </li>
              <li>
                <strong>En verano (julio, agosto)</strong> — los canales tienen más vida y más color.
                Los propietarios están en sus casas, las terrazas tienen actividad y el ambiente de la
                urbanización es el de una pequeña ciudad costera en plena temporada. Hay más
                embarcaciones en los canales pero también más ambiente. La primera hora de la mañana
                sigue siendo el mejor momento para salir antes de que el calor apriete.
              </li>
              <li>
                <strong>En septiembre y octubre</strong> — la temporada ideal para los que prefieren
                los canales sin aglomeraciones. Las aguas siguen cálidas para el baño, los turistas han
                reducido considerablemente y los canales recuperan esa quietud de principios de
                temporada. Muchos propietarios siguen en sus casas durante septiembre, lo que da al
                recorrido el ambiente residencial que lo hace único.
              </li>
            </ul>

            <h2>Cómo llegar a los canales de Santa Margarita</h2>
            <p>
              Los canales de Santa Margarita están en el extremo norte de Roses, a menos de 5 minutos en
              coche desde el centro del pueblo. Desde nuestra base en la Marina de Santa Margarita, el
              acceso al inicio de los canales navegables es inmediato — la salida en barco empieza en
              el primer canal desde el primer minuto.
            </p>
            <p>
              Para llegar a la Marina de Santa Margarita desde Roses centro, toma la Avinguda de Rhode
              hacia el norte y sigue las indicaciones a la Marina. Hay aparcamiento gratuito disponible
              cerca del punto de embarque.
            </p>
            <p className="font-semibold text-slate-800">
              Av. Clot Franquest Nord, 17480 Roses, Girona
            </p>

            {/* Google Maps Embed */}
            <div className="my-10 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de la Marina de Santa Margarita"
              ></iframe>
            </div>

            <hr className="my-12 border-slate-200" />

            {/* FAQ Section */}
            <h2 className="!mt-0">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 mb-0">{faq.answer}</p>
                </div>
              ))}
            </div>

            <hr className="my-12 border-slate-200" />

            {/* Enlaces de interés */}
            <h2>Enlaces de interés</h2>
            <ul className="mb-0">
              <li>
                <Link href="/canales-santa-margarita" className="text-sky-600 hover:underline">
                  Guía principal: los canales de Santa Margarita en barco
                </Link>
              </li>
              <li>
                <Link
                  href="/canales-santa-margarita/ruta-cap-de-creus"
                  className="text-sky-600 hover:underline"
                >
                  Ruta en barco: canales de Santa Margarita al Cap de Creus
                </Link>
              </li>
              <li>
                <Link
                  href="/alquiler-barco-sin-licencia-roses"
                  className="text-sky-600 hover:underline"
                >
                  Alquilar un barco sin licencia en Roses
                </Link>
              </li>
              <li>
                <Link
                  href="/experiencias-barco-roses"
                  className="text-sky-600 hover:underline"
                >
                  Experiencias con patrón en Roses
                </Link>
              </li>
            </ul>
          </div>
        </article>

        {/* Silo Navigation */}
        <SiloNavBlock currentPath="/canales-santa-margarita/que-ver" />
      </main>
    </>
  );
}
