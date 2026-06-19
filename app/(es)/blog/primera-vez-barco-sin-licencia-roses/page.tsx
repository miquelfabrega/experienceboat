import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Primera vez en barco sin licencia en Roses',
  description: 'Todo lo que necesitas saber antes de alquilar un barco sin licencia en Roses por primera vez. Qué esperar, cómo funciona y por qué es más fácil de lo que crees.',
  alternates: buildAlternates('blogFirstTime', 'es'),
  openGraph: {
    title: 'Primera vez en barco sin licencia en Roses',
    description: 'Todo lo que necesitas saber antes de alquilar un barco sin licencia en Roses por primera vez.',
    url: 'https://www.experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
    locale: 'es_ES',
    type: 'article',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const toc = [
  { id: 'licencia', label: '¿Se necesita licencia?' },
  { id: 'dificil', label: '¿Es difícil llevarlo?' },
  { id: 'canales', label: 'Los canales de Santa Margarita' },
  { id: 'dia-salida', label: 'El día de la salida' },
  { id: 'preguntas', label: 'Las 6 preguntas frecuentes' },
  { id: 'que-llevar', label: 'Qué llevar' },
  { id: 'temporada', label: 'Temporada media vs. alta' },
  { id: 'patron', label: '¿Prefieres ir con patrón?' },
];

const faqs = [
  {
    q: '¿Qué pasa si me pierdo?',
    a: 'Los canales de Santa Margarita son un entorno muy reconocible y relativamente pequeño. Difícilmente te perderás. Aun así, antes de salir te orientamos con un mapa y tienes nuestro teléfono para cualquier consulta durante la salida. La bahía de Roses también es un entorno con referencias visuales muy claras — el pueblo de Roses y los Pirineos al fondo son puntos de orientación que se ven desde cualquier punto de la bahía.',
  },
  {
    q: '¿Qué pasa si choco contra algo?',
    a: 'Los pequeños roces son parte habitual de la navegación de canal, especialmente en las primeras salidas. Las embarcaciones tienen defensas laterales precisamente para eso. Para incidencias más graves existe cobertura incluida — consulta las condiciones exactas al reservar. Lo importante es ir despacio y sin prisas, que es exactamente lo que los canales invitan a hacer.',
  },
  {
    q: '¿Puedo salir solo, sin acompañantes?',
    a: 'Sí. Nuestras embarcaciones sin licencia son perfectamente manejables por una sola persona. De hecho, algunas de las salidas más tranquilas y disfrutables que tenemos son de personas que salen solas por la mañana temprano a explorar los canales.',
  },
  {
    q: '¿Hay que saber nadar?',
    a: 'No es obligatorio, pero sí recomendable si pensáis bañaros en las calas. Los chalecos salvavidas están incluidos en el alquiler y recomendamos llevarlos puestos especialmente si hay niños a bordo.',
  },
  {
    q: '¿Se puede llevar comida y bebida?',
    a: 'Sí, sin problema. De hecho lo recomendamos para las salidas de día completo. Una nevera con bebidas frescas, algo de picar y la sombra de la embarcación hacen del mediodía en las calas uno de los mejores momentos de la jornada.',
  },
  {
    q: '¿Qué hago si el tiempo empeora durante la salida?',
    a: 'Si la previsión es mala antes de salir, avisamos con antelación y cancelamos sin coste. Si el tiempo empeora durante la salida, la recomendación siempre es volver a puerto. Los canales de Santa Margarita son un refugio natural — en caso de viento o lluvia, las aguas interiores siguen siendo navegables y seguras.',
  },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Primera vez en barco sin licencia en Roses — Guía completa',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/hero/hero-1.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/blog/primera-vez-barco-sin-licencia-roses' },
    inLanguage: 'es',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticlePrimeraVez() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Barco sin licencia navegando por los canales de Santa Margarita en Roses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Guías
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Primera vez en barco sin licencia en Roses — todo lo que necesitas saber
            </h1>
          </div>
        </div>
      </div>

      {/* Article meta */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 de abril de 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            8 min de lectura
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Intención informacional
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-600 transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 truncate">Primera vez en barco sin licencia</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop sticky sidebar */}
          <aside className="hidden xl:block w-56 shrink-0 sticky top-28 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">En este artículo</p>
            <nav className="space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-500 hover:text-sky-600 transition-colors leading-snug py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Article body */}
          <article className="max-w-3xl w-full min-w-0 prose prose-gray prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
            prose-p:leading-relaxed prose-p:text-gray-700
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
          ">

            {/* Intro */}
            <p className="text-xl text-gray-600 leading-relaxed font-normal not-prose mb-10 border-l-4 border-sky-500 pl-5 py-1">
              Cada temporada, decenas de personas llegan a Roses con la misma idea en la cabeza: alquilar un barco y explorar la costa. Y cada temporada, muchas de esas personas dudan en el último momento. ¿Será difícil? ¿Necesito algún tipo de licencia? ¿Qué pasa si me pierdo o si algo va mal?
            </p>
            <p>
              Esta guía existe para responder a esas preguntas con honestidad. Sin exagerar lo fácil que es ni minimizar lo que hay que saber. Después de leerla, tendrás toda la información para decidir si un barco sin licencia es la opción adecuada para ti — y si lo es, cómo sacarle el máximo partido desde el primer día.
            </p>

            {/* H2 #1 */}
            <h2 id="licencia">¿Se necesita licencia para alquilar un barco en Roses?</h2>
            <p>
              La respuesta corta es <strong>no</strong>. En España, la normativa náutica permite alquilar embarcaciones de hasta 5 metros de eslora con motores de hasta 15 CV sin ninguna titulación. No hace falta haber pisado una escuela náutica, no hace falta ningún carnet y no hace falta ningún trámite previo. La única condición es que quien lleve el barco sea mayor de edad.
            </p>
            <p>
              Los pasajeros pueden ser de cualquier edad — de hecho, las familias con niños pequeños son uno de los grupos que más disfrutan de este tipo de salidas, especialmente en entornos tranquilos como los canales de Santa Margarita.
            </p>
            <p>
              Esta normativa es específica de España. Si vienes de otro país y estás acostumbrado a regulaciones más restrictivas, puede sorprenderte — pero es completamente legal y habitual en toda la costa mediterránea española.
            </p>

            {/* H2 #2 */}
            <h2 id="dificil">¿Es difícil llevar un barco sin licencia?</h2>
            <p>
              Depende de qué entiendas por difícil. Si lo comparas con conducir un coche en ciudad, llevar un barco sin licencia por los canales de Santa Margarita es considerablemente más fácil. No hay semáforos, no hay peatones cruzando y la velocidad máxima en los canales interiores es muy baja.
            </p>
            <p>
              Los barcos sin licencia tienen motores de baja potencia que responden de forma suave y predecible. No aceleran bruscamente, no tienen embrague y el volante funciona de manera intuitiva. <strong>La mayoría de las personas cogen el manejo en los primeros 10-15 minutos</strong> de navegación por los canales.
            </p>
            <p>
              Lo que sí requiere un poco de atención es la maniobra de amarre y el paso bajo los puentes bajos de los canales. Son momentos que piden concentración, pero con las indicaciones previas del briefing y yendo despacio, no suponen ningún problema real.
            </p>
            <p>
              La clave es no tener prisa. El barco sin licencia no es un vehículo para ir rápido — es un vehículo para disfrutar despacio.
            </p>

            {/* H2 #3 */}
            <h2 id="canales">Los canales de Santa Margarita — el mejor sitio para empezar</h2>
            <p>
              No todos los entornos son iguales para una primera salida en barco. Salir directamente al mar abierto con olas y tráfico náutico intenso puede ser abrumador para alguien sin experiencia. Los canales de Santa Margarita son exactamente lo contrario.
            </p>
            <p>
              Las vías navegables interiores de Santa Margarita son aguas completamente protegidas: sin oleaje, sin corrientes y con límites de velocidad bajos. Es el entorno ideal para coger confianza con el barco antes de salir a la bahía de Roses.
            </p>
            <p>
              Pero lo más interesante es que los canales no son solo un campo de prácticas — son un destino en sí mismos. A ambos lados de las vías navegables, más de 500 casas tienen acceso directo al agua desde su jardín. Cada una con su embarcadero privado, su terraza sobre el canal y su pequeña embarcación amarrada. Es una imagen que no esperas encontrar en la Costa Brava y que se queda grabada.
            </p>
            <p>
              Para cuando llegas a la bahía de Roses tras recorrer los canales, ya llevas 30-40 minutos navegando y el manejo del barco ya no es una preocupación. Puedes dedicarte a disfrutar del horizonte.
            </p>

            {/* H2 #4 */}
            <h2 id="dia-salida">Qué pasa exactamente el día de la salida</h2>
            <p>Para que no haya ninguna sorpresa, esto es lo que ocurre desde que llegas hasta que vuelves.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Antes de salir — el briefing</h3>
            <p>
              Quedamos en la Marina de Santa Margarita a la hora acordada. Uno de nuestros patrones — Tomàs o Max — te recibe y dedica entre 10 y 15 minutos a explicarte el funcionamiento del barco: cómo arrancar, cómo acelerar, cómo girar, cómo parar y cómo maniobrar en los canales. También te orientamos con un mapa de la zona y te recomendamos ruta según el tiempo disponible y las condiciones del mar.
            </p>
            <p>No es una clase magistral. Es una conversación práctica frente al barco. Si tienes preguntas, ese es el momento de hacerlas.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Los primeros minutos en los canales</h3>
            <p>
              La primera parte de la salida discurre siempre por los canales interiores. Es el momento de familiarizarse con el barco sin presión: velocidad baja, aguas tranquilas y paisaje que entretiene. La mayoría de la gente sale de los canales con la sensación de que era más fácil de lo que esperaba.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">La bahía de Roses y lo que viene después</h3>
            <p>
              Una vez en la bahía, el mundo se abre. Puedes quedarte cerca y fondear en alguna cala, o aventurarte hacia las calas del Cap de Creus si las condiciones acompañan. Tú decides el ritmo y la ruta — no hay obligación de ir a ningún sitio concreto.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">El regreso</h3>
            <p>
              Vuelves a la marina a la hora acordada según la modalidad contratada. Si durante la salida surge alguna duda o incidencia, tenéis nuestro número de teléfono disponible en todo momento.
            </p>

            {/* H2 #5 — FAQ */}
            <h2 id="preguntas">Las 6 preguntas que más nos hacen los debutantes</h2>

            <div className="not-prose space-y-5 my-8">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* H2 #6 */}
            <h2 id="que-llevar">Qué llevar el día de la salida</h2>
            <p>Lista básica para una primera salida sin licencia desde Roses:</p>
            <ul>
              <li>Protección solar de factor alto — el reflejo del sol en el agua multiplica la exposición</li>
              <li>Gafas de sol con protección polarizada</li>
              <li>Ropa de baño y toalla si pensáis bañaros</li>
              <li>Calzado con suela antideslizante — nunca chanclas planas sin agarre</li>
              <li>Nevera con agua y bebidas frescas, especialmente en julio y agosto</li>
              <li>Teléfono con funda impermeable o bolsa estanca</li>
              <li>Una capa ligera para la vuelta si salís al atardecer — en el mar refresca más de lo que parece</li>
            </ul>

            {/* H2 #7 */}
            <h2 id="temporada">Temporada media vs. temporada alta — cuándo ir</h2>
            <p>
              Esta es una pregunta que merece una respuesta honesta. Julio y agosto en Roses son meses espectaculares pero también los más masificados. Las calas tienen más gente, el tráfico náutico en la bahía es mayor y la disponibilidad de embarcaciones se agota con semanas de antelación.
            </p>
            <p>
              Si tienes flexibilidad, <strong>mayo, junio y septiembre</strong> ofrecen condiciones de navegación excelentes con mucha menos masificación. Las aguas están perfectas para el baño, las calas están tranquilas y la experiencia de los canales de Santa Margarita tiene otra dimensión cuando no hay que compartir el espacio con decenas de embarcaciones.
            </p>
            <p>
              Para las familias con niños pequeños, junio es probablemente el mes ideal: agua ya cálida, días largos y ninguna de las aglomeraciones de agosto.
            </p>

            {/* H2 #8 */}
            <h2 id="patron">¿Y si prefieres que alguien más lleve el barco?</h2>
            <p>
              Si después de leer esto decides que prefieres disfrutar del día sin preocuparte del manejo, también tenemos esa opción. Nuestras excursiones privadas con patrón combinan el recorrido por los canales de Santa Margarita con la salida al Cap de Creus y las calas más espectaculares de la Costa Brava norte. Tomàs o Max se encargan de todo — tú solo te preocupas de disfrutar.
            </p>

            {/* Inline CTA — con patrón */}
            <div className="not-prose my-8 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Excursiones privadas con patrón</p>
                <p className="text-gray-500 text-sm">Cap de Creus, calas vírgenes y canales. Salvador se encarga de la ruta.</p>
              </div>
              <Link
                href="/experiencias-barco-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Ver experiencias <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Closing CTAs */}
      <div className="bg-gray-900 py-16 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para reservar?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            El siguiente paso es ver qué embarcaciones tenemos disponibles y elegir la que mejor encaja con tu grupo. Si tienes alguna duda, escríbenos — Tomàs o Max te responden personalmente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/alquiler-barco-sin-licencia-roses"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              Ver barcos sin licencia en Roses →
            </Link>
            <a
              href="https://wa.me/34623995700?text=Hola%2C%20tengo%20una%20duda%20sobre%20el%20alquiler%20sin%20licencia"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe59] transition-colors shadow-md"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 text-center">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-2">
          ← Volver al blog
        </Link>
      </div>

    </main>
    </>
  );
}
