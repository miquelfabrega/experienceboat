import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Escapada perfecta en barco por la Costa Brava',
  description: 'Guía práctica para planificar tu salida en barco en la Costa Brava: elección de embarcación, rutas, clima, seguridad y todo lo que necesitas saber.',
  alternates: buildAlternates('blogPlanning', 'es'),
  openGraph: {
title: 'Escapada perfecta en barco por la Costa Brava',
    description: 'Guía práctica para planificar tu salida en barco: embarcación, clima, seguridad y provisiones.',
    url: 'https://www.experienceboat.es/blog/planificar-escapada-barco-costa-brava',
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
  { id: 'embarcacion', label: '1. Elige la embarcación' },
  { id: 'ruta', label: '2. Planifica tu ruta' },
  { id: 'clima', label: '3. El pronóstico del tiempo' },
  { id: 'seguridad', label: '4. El kit de seguridad' },
  { id: 'provisiones', label: '5. Prepara provisiones' },
  { id: 'entorno', label: '6. Protege el entorno' },
  { id: 'disfruta', label: '7. Disfruta del viaje' },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Escapada perfecta en barco por la Costa Brava',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/services/sin-licencia.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/blog/planificar-escapada-barco-costa-brava' },
    inLanguage: 'es',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticlePlanificarEscapada() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/services/sin-licencia.jpg"
          alt="Pareja disfrutando de un barco en la Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Consejos
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Escapada perfecta en barco por la Costa Brava
            </h1>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 de abril de 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            5 min de lectura
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Costa Brava
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Guía práctica
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
          <span className="text-gray-600 truncate">Planificar escapada en barco</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop */}
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

          {/* Article */}
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
              Nos pasamos la temporada ayudando a grupos a montar su día de barco en esta costa, así que estos son los consejos que damos de verdad en el pantalán: qué barco encaja con tu plan, qué llevar a bordo y lo que todo el mundo subestima — el viento.
            </p>
            <p>
              Da igual si es tu primera vez o llevas años navegando: estos 7 puntos marcan la diferencia entre un buen día y una jornada perfecta en la Costa Brava.
            </p>

            {/* H2 #1 */}
            <h2 id="embarcacion">1. Elige el tipo de embarcación adecuado</h2>
            <p>
              La pregunta que hacemos siempre primero: ¿cuántos sois y hasta dónde queréis llegar? Para moverse por los canales y la bahía con hasta 5 personas, una <Link href="/alquiler-barco-sin-licencia-roses">embarcación sin licencia</Link> sobra. Si tienes titulación y quieres plantarte en el Cap de Creus con margen, mejor una lancha <Link href="/alquiler-barco-con-licencia-roses">con licencia</Link>. Y si nadie quiere llevar el timón, para eso están las excursiones con patrón.
            </p>

            {/* H2 #2 */}
            <h2 id="ruta">2. Planifica tu ruta</h2>
            <p>
              Una vez que hayas elegido tu embarcación, es hora de planificar tu ruta. La Costa Brava norte tiene mucho donde elegir, de los canales de Santa Margarita a la roca pelada del <Link href="/blog/ruta-barco-cap-de-creus-roses">Cap de Creus</Link>.
            </p>
            <p>
              Nuestro consejo de siempre: menos calas y más rato en cada una. Con medio día da para canales, un baño en Cala Murtra y comer fondeado en Montjoi sin mirar el reloj; querer verlo todo en cuatro horas es la receta para no disfrutar nada. En el mar las prisas nunca son buenas consejeras.
            </p>

            {/* H2 #3 */}
            <h2 id="clima">3. Consulta el pronóstico del tiempo</h2>
            <p>
              El clima y el estado del mar son los factores más determinantes de cualquier salida en barco. Es fundamental consultar el pronóstico del tiempo antes de salir, prestando especial atención a los vientos locales como la Tramontana.
            </p>
            <p>
              Evita zarpar en días de fuertes vientos o marejada pronunciada, y asegúrate de tener un plan B en caso de que las condiciones empeoren (como navegar protegido por los canales interiores o regresar a puerto). En nuestro caso, siempre cancelamos o modificamos reservas sin coste si la meteorología no es segura.
            </p>

            {/* H2 #4 */}
            <h2 id="seguridad">4. Prepara el kit de seguridad</h2>
            <p>
              La seguridad en el mar es primordial. Asegúrate de que la embarcación de alquiler incluye un kit de seguridad completo que incluya chalecos salvavidas para todos los ocupantes (especialmente de tallas infantiles si hay niños a bordo), bengalas, botiquín de primeros auxilios y ancla.
            </p>
            <p>
              En el <em>briefing</em> antes de salir, familiarízate con el funcionamiento de cada elemento y asegúrate de que todos los pasajeros sepan dónde encontrarlos en caso de necesidad.
            </p>

            {/* H2 #5 */}
            <h2 id="provisiones">5. Abastécete de provisiones</h2>
            <p>
              Antes de partir, asegúrate de llevar provisiones suficientes para toda la travesía. El mar da hambre y sed, así que lleva comida ligera, fruta y bebida en cantidad adecuada — muy especialmente agua dulce para manteneros hidratados bajo el sol.
            </p>
            <p>
              Una nevera de hielo es imprescindible en los meses de verano. Si planeas fondear al mediodía, un buen picnic a bordo o reservar mesa en algún chiringuito accesible en barco (como el de Cala Pelosa) redondeará la jornada.
            </p>

            {/* H2 #6 */}
            <h2 id="entorno">6. Protege el medio ambiente marino</h2>
            <p>
              Respeta el entorno marino y sigue prácticas sostenibles mientras navegas. Es responsabilidad de todos:
            </p>
            <ul>
              <li>Evita arrojar cualquier tipo de basura o plástico al mar (guarda todos tus residuos a bordo).</li>
              <li>No ancles NUNCA sobre las praderas de <strong>posidonia</strong> oceánica; busca siempre fondos de arena o utiliza las boyas habilitadas.</li>
              <li>Respeta las zonas de protección marina y la velocidad máxima permitida, especialmente al acercarte a la costa.</li>
            </ul>

            {/* H2 #7 */}
            <h2 id="disfruta">7. Disfruta del viaje</h2>
            <p>
              Finalmente, una vez que estés en el mar y con todo bajo control, relájate y disfruta. Toma tiempo para contemplar los impresionantes paisajes costeros, sumérgete en las aguas cristalinas para nadar y hacer snorkel, y explora las calas que salpican la costa.
            </p>
            <p>
              Recuerda que lo importante no es llegar rápido a un destino concreto, sino disfrutar del día a tu ritmo, con tu grupo y sin el horario de nadie más.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-10 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">¿No tienes licencia?</p>
                <p className="text-gray-500 text-sm">No es un problema. Tenemos barcos fáciles de manejar para que salgas al mar sin experiencia previa.</p>
              </div>
              <Link
                href="/alquiler-barco-sin-licencia-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Ver barcos sin licencia <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 border-t border-gray-100 text-center bg-gray-50">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-2 font-medium">
          ← Volver al índice del blog
        </Link>
      </div>

    </main>
    </>
  );
}
