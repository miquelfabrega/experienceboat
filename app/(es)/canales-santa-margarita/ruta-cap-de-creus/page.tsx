import type { Metadata } from 'next';
import Link from 'next/link';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Ruta en barco: Santa Margarita al Cap de Creus',
  description:
    'La ruta náutica más completa de la Costa Brava norte: de los canales de Santa Margarita al Cap de Creus en barco privado desde Roses. Reserva online.',
  alternates: {
    canonical: 'https://experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
    languages: {
      'x-default': 'https://experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
      es: 'https://experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
      fr: 'https://experienceboat.es/fr/canaux-santa-margarita/itineraire-cap-de-creus',
      en: 'https://experienceboat.es/en/santa-margarita-canals-roses/cap-de-creus-route',
    },
  },
  openGraph: {
title: 'Ruta en barco: Santa Margarita al Cap de Creus',
    description:
      'La ruta náutica más completa de la Costa Brava norte: de los canales de Santa Margarita al Cap de Creus en barco privado desde Roses. Reserva online.',
    url: 'https://experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
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
    question: '¿Cuánto dura la ruta completa de los canales de Santa Margarita al Cap de Creus?',
    answer:
      'La jornada completa dura aproximadamente 8 horas, de las cuales unas 3 horas son de navegación activa y el resto es tiempo en las calas — baños, comida a bordo y exploración del parque natural. Es una jornada larga y completa que recomendamos para grupos que quieren sacarle el máximo partido a un día en el mar.',
  },
  {
    question: '¿Se puede hacer la ruta en medio día?',
    answer:
      'El tramo hasta el Cap de Creus con tiempo suficiente para disfrutarlo requiere la jornada completa. En medio día se puede hacer el recorrido por los canales y llegar a las calas más cercanas de la bahía de Roses — una experiencia igualmente valiosa pero diferente a la ruta completa hasta el parque natural.',
  },
  {
    question: '¿Hace falta experiencia náutica para hacer esta ruta?',
    answer:
      'No si eliges la opción con patrón. Tomàs o Max llevan la embarcación durante toda la jornada y conocen la ruta en detalle. Para la opción con licencia se requiere PNB o titulación equivalente, especialmente para el tramo del Cap de Creus que puede tener condiciones de viento más exigentes.',
  },
  {
    question: '¿Qué ocurre si la tramuntana no permite llegar al Cap de Creus?',
    answer:
      'Es una posibilidad real, especialmente en primavera y otoño. Si las condiciones meteorológicas no permiten el tramo del Cap de Creus con seguridad, adaptamos la ruta a las calas más protegidas de la bahía de Roses o reprogramamos la salida sin coste adicional. La seguridad siempre está por encima de la ruta prevista.',
  },
  {
    question: '¿Puedo personalizar las paradas de la ruta?',
    answer:
      'Sí, completamente. Antes de cada salida hablamos con el grupo para recoger preferencias de ruta y paradas. Si hay calas concretas que queréis visitar o aspectos de la ruta que queréis priorizar — más tiempo en los canales, más tiempo en el Cap, parada específica en alguna cala — lo incorporamos al plan del día.',
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
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canales de Santa Margarita en barco',
        item: 'https://experienceboat.es/canales-santa-margarita',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ruta barco canales Santa Margarita al Cap de Creus',
        item: 'https://experienceboat.es/canales-santa-margarita/ruta-cap-de-creus',
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

export default function RutaCapDeCreus() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Ruta en barco de los canales de Santa Margarita al Cap de Creus
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Hay una ruta náutica en la Costa Brava norte que lo tiene todo: aguas tranquilas para
              empezar,{' '}
              <Link href="/" className="text-sky-600 hover:underline">
                bahía abierta
              </Link>{' '}
              en el centro y parque natural al final. Empieza en los{' '}
              <Link href="/canales-santa-margarita" className="text-sky-600 hover:underline">
                canales de Santa Margarita
              </Link>{' '}
              — casas sobre el agua, puentes de piedra, calma mediterránea — y termina en el Cap de
              Creus, el punto más oriental de la Península Ibérica y uno de los entornos naturales más
              espectaculares del Mediterráneo. En medio, la bahía de Roses con el Pirineo al fondo y
              las mejores calas de la costa norte. Es la ruta que hacemos en Experience Boat cuando
              queremos mostrar lo mejor de la zona en una sola jornada.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>a]:text-sky-600 [&>a]:hover:underline">
            <h2>La ruta completa — tramo a tramo</h2>
            <p>
              Esta es la descripción detallada de la ruta de día completo desde los canales de Santa
              Margarita hasta el Cap de Creus. Los tiempos son orientativos y se adaptan en función del
              grupo, el ritmo y las condiciones del mar.
            </p>

            <h3>Tramo 1 — Los canales de Santa Margarita (30-45 min)</h3>
            <p>
              La ruta empieza donde está la base de Experience Boat: la Marina de Santa Margarita, en la
              entrada de los canales. Desde el primer minuto la embarcación navega por las vías
              navegables interiores de la urbanización, bordeadas por más de 500 casas con embarcadero
              privado.
            </p>
            <p>
              Es el tramo más tranquilo de la jornada y el más fotogénico. Las aguas están
              completamente en calma, los puentes de piedra blanca se pasan por debajo y el ritmo es
              pausado y contemplativo. Para grupos que nunca han navegado por los canales, este primer
              tramo es a menudo el momento favorito de todo el día — y el más inesperado.
            </p>
            <p>
              A primera hora de la mañana, cuando el sol todavía no ha subido demasiado y los reflejos
              en el agua son perfectos, los canales tienen una luz que no se encuentra en ningún otro
              punto de la Costa Brava.
            </p>

            <h3>Tramo 2 — Salida a la bahía de Roses (15-20 min)</h3>
            <p>
              Cuando los canales interiores se abren al mar, el escenario cambia completamente. La
              bahía de Roses se extiende frente a la embarcación con toda su amplitud: el Pirineo nevado
              al fondo en los meses de invierno y primavera, el pueblo de Roses a la derecha y el
              inicio del macizo del Cap de Creus a la izquierda.
            </p>
            <p>
              Es el momento en que la jornada cobra escala. Lo que empezó como un recorrido íntimo por
              los canales se convierte en una navegación de verdad, con horizonte abierto y viento en
              la cara.
            </p>
            <p>
              En este tramo hacemos la primera parada opcional: si el grupo quiere bañarse antes de
              seguir hacia el Cap, la bahía tiene zonas tranquilas perfectas para un primer chapuzón de
              la mañana.
            </p>

            <h3>Tramo 3 — Costa norte hacia el Cap de Creus (30-40 min)</h3>
            <p>
              Desde la bahía de Roses, la ruta bordea la costa norte en dirección al Cap de Creus. Este
              es el tramo donde el paisaje empieza a cambiar de carácter: la costa se vuelve más
              escarpada, los acantilados más altos y la roca adquiere tonos oscuros que anuncian la
              naturaleza volcánica del parque natural.
            </p>
            <p>
              A lo largo de este tramo pasamos por Cala Canyelles Petites y Cala Almadraba — las dos
              calas más accesibles desde Roses y las favoritas para la parada de media mañana. Aguas
              turquesa, fondo de arena y roca, y espacio suficiente para fondear cómodamente incluso en
              temporada alta.
            </p>
            <p>
              Si el grupo quiere aprovechar el baño de media mañana con calma antes de seguir hacia el
              Cap, Canyelles es la parada ideal. Desde ahí, el Cap de Creus está a menos de 30 minutos
              de navegación.
            </p>

            <h3>Tramo 4 — El Parque Natural del Cap de Creus (tiempo libre)</h3>
            <p>
              La llegada al Parque Natural del Cap de Creus es el momento culminante de la ruta. El
              paisaje cambia drásticamente: la vegetación desaparece, la roca volcánica domina el
              horizonte y las{' '}
              <Link href="/experiencias-barco-roses/calas-cap-de-creus" className="text-sky-600 hover:underline">
                calas del Cap de Creus
              </Link>{' '}
              tienen una transparencia y un color que no se parece a nada que hayáis visto antes en la
              Costa Brava.
            </p>
            <p>
              Las calas interiores del parque — Culip, Jugadora, Fredosa — solo son accesibles en
              barco. No hay caminos que bajen hasta el agua, no hay aparcamiento, no hay servicios. Solo
              la cala, el agua y vuestro grupo.
            </p>
            <p>
              Este es el tramo de tiempo libre de la ruta: fondeo en la cala elegida, baño, comida a
              bordo si habéis traído algo para el mediodía y tiempo para hacer lo que queráis. La mayoría
              de los grupos que llegan hasta aquí por primera vez no quieren irse.
            </p>

            <h3>Tramo 5 — Regreso por la costa sur (45-60 min)</h3>
            <p>
              La vuelta puede hacerse por el mismo camino o bordeando la costa sur del Cap de Creus,
              que tiene un carácter diferente al de la ida: más expuesta al oleaje abierto pero con
              vistas al golfo de León y, en días claros, a las islas Medes en el horizonte.
            </p>
            <p>
              Dependiendo de la hora y del estado del mar, el regreso incluye una parada final en la
              bahía de Roses para el baño de tarde antes de volver a los canales de Santa Margarita.
            </p>
            <p>
              La llegada de vuelta por los canales al atardecer — con la luz cálida del final del día
              sobre el agua y las casas — cierra la jornada de una manera difícilmente mejorable.
            </p>

            <h2>Distancias y tiempos de la ruta</h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 text-sm uppercase tracking-wide">
                    <th className="p-4 border-b border-slate-200 font-semibold">Tramo</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Distancia aprox.</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Tiempo navegación</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-base">
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Canales Santa Margarita</td>
                    <td className="p-4">3-4 km</td>
                    <td className="p-4">30-45 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Bahía de Roses</td>
                    <td className="p-4">8 km</td>
                    <td className="p-4">15-20 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Costa norte hacia Cap de Creus</td>
                    <td className="p-4">12 km</td>
                    <td className="p-4">30-40 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Calas interiores Cap de Creus</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4">Tiempo libre</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Regreso</td>
                    <td className="p-4">20-22 km</td>
                    <td className="p-4">45-60 min</td>
                  </tr>
                  <tr className="bg-slate-50 font-semibold text-slate-800">
                    <td className="p-4">Total navegación</td>
                    <td className="p-4">~45 km</td>
                    <td className="p-4">~3 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              El resto del tiempo — entre 4 y 5 horas en una jornada completa — es tiempo de parada:
              baños en las calas, comida a bordo y exploración del parque natural. La ruta no es una
              travesía de navegación continua sino una jornada donde la navegación es el medio para llegar
              a lugares que de otra forma son inaccesibles.
            </p>

            <h2>Con patrón o con licencia — qué opción elegir para esta ruta</h2>
            <p>
              Esta es la ruta más completa del catálogo de Experience Boat y la que más opciones tiene
              dependiendo del perfil del grupo.
            </p>
            
            <h3>Con patrón (recomendado para esta ruta)</h3>
            <p>
              Para grupos sin experiencia náutica o para quienes simplemente quieren disfrutar sin
              preocuparse de la navegación, la excursión privada con patrón es la opción ideal. Tomàs o
              Max conocen la ruta en detalle, saben cuáles son las mejores calas según la época del año
              y se adaptan completamente al ritmo del grupo. Vosotros solo os preocupáis de disfrutar.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/experiencias-barco-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Excursiones privadas con patrón en Roses &rarr;
              </Link>
            </div>

            <h3>Con licencia (para patrones con titulación)</h3>
            <p>
              Si tienes PNB o titulación equivalente y quieres trazar la ruta a tu manera — a tu ritmo,
              con las paradas que quieras y sin depender de nadie — nuestras embarcaciones con
              licencia son perfectas para esta travesía.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/alquiler-barco-con-licencia-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-800 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                Alquiler de barcos con licencia en Roses &rarr;
              </Link>
            </div>

            <h2>Qué llevar para la ruta completa</h2>
            <p>
              Para una jornada de día completo desde los canales de Santa Margarita al Cap de Creus, la
              lista de lo imprescindible:
            </p>
            <ul>
              <li>
                <strong>Protección solar de factor alto y resistente al agua</strong> — llevaréis horas
                expuestos al sol del Mediterráneo.
              </li>
              <li>
                <strong>Gafas de sol polarizadas</strong> — el reflejo en el agua durante la travesía es
                intenso.
              </li>
              <li>
                <strong>Ropa de baño y toallas</strong> para las paradas en las calas.
              </li>
              <li>
                <strong>Nevera con agua, bebidas frescas y comida</strong> para el mediodía — comer en
                una cala del Cap de Creus es uno de los momentos que más se recuerda.
              </li>
              <li>
                <strong>Calzado con suela antideslizante</strong>.
              </li>
              <li>
                <strong>Cámara o teléfono en funda impermeable</strong> — las calas del Cap de Creus
                merecen las mejores fotos que podáis hacer.
              </li>
              <li>
                <strong>Una capa ligera para la vuelta</strong> — el viento de tarde en la bahía puede
                ser fresco aunque el día haya sido caluroso.
              </li>
            </ul>

            <h2>La mejor época para hacer la ruta completa</h2>
            <p>
              La ruta de los canales de Santa Margarita al Cap de Creus se puede hacer de abril a
              octubre, pero hay momentos especialmente buenos:
            </p>
            <p>
              <strong>Mayo y junio</strong> son los meses más recomendados para quien tiene flexibilidad.
              Las calas del Cap de Creus están tranquilas, las condiciones de navegación son excelentes y
              la luz de primavera en los canales es extraordinaria. La temperatura del agua ya es
              agradable para el baño a partir de finales de mayo.
            </p>
            <p>
              <strong>Julio y agosto</strong> son temporada alta. Las calas tienen más gente y hay que
              salir temprano para llegar antes de que se llenen. A cambio, el ambiente de la bahía de
              Roses en verano tiene una energía propia y los atardeceres de regreso por los canales son
              los más espectaculares del año.
            </p>
            <p>
              <strong>Septiembre</strong> es posiblemente el mejor mes para esta ruta: agua caliente,
              calas tranquilas, condiciones de navegación perfectas y los canales de Santa Margarita en su
              versión más residencial y auténtica, cuando la temporada turística se ha calmado pero el
              verano todavía no ha acabado.
            </p>

            <hr className="my-12 border-slate-200" />

            {/* FAQ Section */}
            <h2 className="!mt-0">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="!mt-0 !mb-3 font-bold text-xl text-slate-900">{faq.question}</h3>
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
                  href="/canales-santa-margarita/que-ver"
                  className="text-sky-600 hover:underline"
                >
                  Qué ver en los canales de Santa Margarita desde el agua
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
            </ul>
          </div>
        </article>

        {/* Silo Navigation */}
        <SiloNavBlock currentPath="/canales-santa-margarita/ruta-cap-de-creus" />
      </main>
    </>
  );
}
