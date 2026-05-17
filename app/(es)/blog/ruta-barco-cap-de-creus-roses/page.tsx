import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Ruta en barco al Cap de Creus desde Roses',
  description: 'Guía de la ruta en barco desde los canales de Santa Margarita hasta el Cap de Creus. Calas, paradas, chiringuito y todo lo que necesitas saber antes de salir.',
  alternates: {
    canonical: 'https://experienceboat.es/blog/ruta-barco-cap-de-creus-roses',
    languages: {
      'x-default': 'https://experienceboat.es/blog/ruta-barco-cap-de-creus-roses',
      es: 'https://experienceboat.es/blog/ruta-barco-cap-de-creus-roses',
      fr: 'https://experienceboat.es/fr/blog/itineraire-bateau-cap-de-creus-roses',
      en: 'https://experienceboat.es/en/blog/boat-trip-cap-de-creus-from-roses',
    },
  },
  openGraph: {
    title: 'Ruta en barco al Cap de Creus desde Roses',
    description: 'Guía de la ruta en barco desde los canales de Santa Margarita hasta el Cap de Creus. Calas, paradas y todo lo que necesitas saber.',
    url: 'https://experienceboat.es/blog/ruta-barco-cap-de-creus-roses',
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
  { id: 'por-que', label: 'Por qué el Cap de Creus' },
  { id: 'salida', label: 'El punto de salida' },
  { id: 'ruta', label: 'La ruta paso a paso' },
  { id: 'calas', label: 'Las calas imprescindibles' },
  { id: 'chiringuito', label: 'El chiringuito de Cala Pelosa' },
  { id: 'saber', label: 'Lo que debes saber' },
  { id: 'opcion', label: '¿Con o sin licencia?' },
];

const calas = [
  {
    name: 'Cala Pelosa',
    desc: 'Pequeña y recogida, con fondo de arena fina y aguas de color turquesa intenso. Es la parada más conocida de la ruta y la única con servicio de restaurante directamente en la playa. Perfecta para fondear y bañarse.',
    highlight: 'Parada gastronómica',
  },
  {
    name: 'Cala Rostella',
    desc: 'Más protegida del viento del norte que otras calas de la zona. Sus aguas son especialmente transparentes gracias a los fondos de posidonia marina, que filtran el agua y le dan ese color verde esmeralda característico.',
    highlight: 'Snorkel excepcional',
  },
  {
    name: 'Cala Jóncols',
    desc: 'Una de las calas más amplias de la ruta, con acceso difícil por tierra pero perfectamente accesible en barco. Sus aguas son ideales para bañarse en familia. El entorno de pinos que llegan hasta la orilla la hace especialmente fotogénica.',
    highlight: 'Ideal para familias',
  },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Ruta en barco al Cap de Creus desde Roses — Guía completa',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://experienceboat.es/images/hero/hero-2.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://experienceboat.es/blog/ruta-barco-cap-de-creus-roses' },
    inLanguage: 'es',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleCapDeCreus() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Ruta en barco al Cap de Creus desde Roses, Costa Brava norte"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Rutas
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ruta en barco al Cap de Creus desde Roses — explorando la costa norte de la Costa Brava
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
            7 min de lectura
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Roses → Cap de Creus
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
          <span className="text-gray-600 truncate">Ruta en barco al Cap de Creus</span>
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
              El Cap de Creus es el punto más oriental de la Península Ibérica y uno de los paisajes marinos más salvajes de toda la Costa Brava. Visto desde tierra, impresiona. Visto desde el agua, a bordo de un barco, es otra cosa completamente distinta.
            </p>
            <p>
              Esta guía describe la ruta que hacemos habitualmente desde los canales de Santa Margarita hasta las calas del Cap de Creus: qué esperar en cada tramo, cuáles son las mejores paradas, dónde comer y qué tener en cuenta antes de salir. Tanto si piensas alquilar un barco por tu cuenta como si prefieres venir con patrón, esta información te será útil.
            </p>

            {/* H2 #1 */}
            <h2 id="por-que">¿Por qué el Cap de Creus es el mejor destino desde Roses en barco?</h2>
            <p>
              Desde Roses, el Cap de Creus está a unos 45-60 minutos en barco dependiendo del modelo y las condiciones del mar. Es una distancia perfecta: suficientemente lejos para que la salida tenga entidad, suficientemente cerca para poder disfrutar sin prisas.
            </p>
            <p>
              Lo que hace especial esta ruta no es solo el destino — es el recorrido. La costa norte de la Costa Brava entre Roses y el Cap de Creus es un paisaje de acantilados, calas escondidas y aguas con una transparencia difícil de encontrar en el Mediterráneo occidental. La mayor parte de estas calas son <strong>inaccesibles por tierra</strong> o requieren caminatas largas por caminos de montaña. Desde el barco, llegas directo.
            </p>
            <p>
              Además, toda esta zona está integrada dentro del <strong>Parque Natural del Cap de Creus</strong>, lo que significa que las aguas están protegidas, la pesca está regulada y el ecosistema marino se mantiene en un estado excepcional. No es casualidad que el snorkel aquí sea de los mejores de la Costa Brava.
            </p>

            {/* H2 #2 */}
            <h2 id="salida">El punto de salida — los canales de Santa Margarita</h2>
            <p>
              Salimos siempre desde la Marina de Santa Margarita, en la entrada de Roses. Los primeros minutos de la ruta discurren por los propios canales — un trayecto de 20-25 minutos por vías navegables interiores que ya de por sí son un espectáculo.
            </p>
            <p>
              A ambos lados de los canales, más de 500 casas tienen acceso directo al agua con sus embarcaderos privados. Es un entorno completamente diferente a lo que se espera de la Costa Brava y que muchos visitantes descubren por primera vez en esta ruta. Para los que no conocen los canales, esta primera parte suele ser una de las favoritas del día.
            </p>
            <p>
              Al salir de los canales, se entra en la bahía de Roses. Desde aquí, el Cap de Creus asoma al fondo y la ruta hacia el norte ya no tiene pérdida.
            </p>

            {/* H2 #3 */}
            <h2 id="ruta">La ruta paso a paso — de los canales al Cap de Creus</h2>
            <p>
              No hay una ruta única. El recorrido se adapta a las condiciones del mar, al tiempo disponible y a las preferencias de cada grupo. Pero hay una secuencia que funciona bien en la mayoría de las salidas:
            </p>
            <ol>
              <li><strong>Canales de Santa Margarita</strong> — Salida desde la marina, recorrido por los canales interiores hasta la bahía de Roses. Velocidad baja, aguas protegidas, ideal para calentar motores.</li>
              <li><strong>Bahía de Roses</strong> — Cruce de la bahía hacia el norte. El paisaje empieza a cambiar: los Pirineos al fondo, la costa se vuelve más abrupta y el agua más transparente.</li>
              <li><strong>Primera cala</strong> — Dependiendo de las condiciones, la primera parada suele ser Cala Jóncols o Cala Rostella. Fondeo, baño, snorkel.</li>
              <li><strong>Cala Pelosa</strong> — Parada para comer si la jornada lo permite. El chiringuito de Cala Pelosa sirve hasta agotar existencias, así que cuanto antes llegues, mejor.</li>
              <li><strong>Cap de Creus</strong> — El punto final. El paisaje aquí es completamente diferente: roca viva, agua de colores imposibles y la sensación de estar en el extremo de algo.</li>
              <li><strong>Regreso</strong> — El camino de vuelta suele hacerse con el sol ya bajando. Los Pirineos nevados (en primavera) o la silueta de Roses al fondo hacen que el regreso sea tan bonito como la ida.</li>
            </ol>

            {/* H2 #4 — Calas */}
            <h2 id="calas">Las calas imprescindibles de la ruta</h2>
            <p>
              Entre Roses y el Cap de Creus hay docenas de calas. Estas tres son las que casi siempre incluimos en la ruta:
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-5 my-8">
              {calas.map((cala) => (
                <div key={cala.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <span className="inline-block text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full mb-3">
                    {cala.highlight}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{cala.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cala.desc}</p>
                </div>
              ))}
            </div>

            {/* H2 #5 */}
            <h2 id="chiringuito">El chiringuito de Cala Pelosa — parada gastronómica obligatoria</h2>
            <p>
              Cala Pelosa tiene un chiringuito que lleva años siendo parada fija en las rutas al Cap de Creus. La cocina es mediterránea de producto: arroces, fideuà y pescado fresco cocinado en el momento, con las embarcaciones fondeadas a pocos metros.
            </p>
            <p>
              No es un sitio para ir con prisa. La experiencia es sentarse en la terraza sobre el agua, con el barco amarrado cerca y el tiempo que sea necesario. Es exactamente el tipo de pausa que una jornada en barco debería incluir.
            </p>
            <p>
              <strong>Un aviso importante:</strong> el chiringuito no acepta reservas y el espacio es limitado. En julio y agosto, si llegas después de las 14:00, es probable que tengas que esperar o que ya no quede sitio. En temporada media (mayo, junio, septiembre), hay mucho menos problema.
            </p>

            {/* H2 #6 */}
            <h2 id="saber">Lo que debes saber antes de salir hacia el Cap de Creus</h2>
            <p>
              La ruta al Cap de Creus es preciosa, pero tiene algunas particularidades que conviene conocer antes de salir.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">La tramontana</h3>
            <p>
              El Cap de Creus es una de las zonas de la Costa Brava más expuestas a la tramontana, el viento del norte que puede levantar el mar en pocas horas. En los días con previsión de tramontana, cancelamos o modificamos la ruta sin coste. No es una decisión que tomamos a la ligera — es una cuestión de seguridad.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">La posidonia</h3>
            <p>
              La pradera de posidonia es la responsable de que el agua del Cap de Creus sea tan transparente. Es una especie protegida y un ecosistema fundamental. En las zonas con posidonia no se puede fondear con ancla — hay muertos (boyas de fondeo fijas) en las calas habilitadas para ello.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Las rocas sumergidas</h3>
            <p>
              La costa del Cap de Creus tiene muchas rocas a poca profundidad, especialmente en las entradas a las calas. Si vas con barco propio, navega siempre despacio al acercarte a la costa y consulta la carta náutica. Si vas con nuestro servicio con patrón, Salvador conoce palmo a palmo esta costa y se encarga de la navegación.
            </p>

            {/* H2 #7 */}
            <h2 id="opcion">¿Con licencia, sin licencia o con patrón?</h2>
            <p>
              La ruta al Cap de Creus se puede hacer de tres maneras distintas:
            </p>
            <ul>
              <li>
                <strong>Con barco sin licencia</strong> — Los barcos sin licencia son perfectos para los canales de Santa Margarita y la bahía de Roses. Para llegar hasta el Cap de Creus, las condiciones del mar tienen que ser favorables. Con buenas condiciones, es perfectamente posible llegar a las primeras calas de la ruta.
              </li>
              <li>
                <strong>Con barco con licencia</strong> — Con una embarcación más potente y con titulación náutica, la ruta completa al Cap de Creus es totalmente accesible. Mayor autonomía, mayor velocidad y más opciones de ruta.
              </li>
              <li>
                <strong>Con excursión privada con patrón</strong> — La opción en la que tú no te preocupas de nada. Salvador conoce cada cala, cada roca y cada quirófano de esta costa. La ruta se adapta al grupo y al día. Es la manera más cómoda de hacer la ruta completa, especialmente si es la primera vez en la zona.
              </li>
            </ul>

            {/* Inline CTA — excursiones */}
            <div className="not-prose my-8 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Excursión privada al Cap de Creus con patrón</p>
                <p className="text-gray-500 text-sm">Salvador os lleva a las calas. Vosotros solo disfrutáis. Ruta adaptada a vuestro grupo.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para salir hacia el Cap de Creus?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Elige la opción que mejor encaje con tu grupo — barco con licencia, sin licencia o excursión privada con patrón. Si tienes dudas, escríbenos y te ayudamos a decidir.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/experiencias-barco-roses"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              Ver excursiones con patrón →
            </Link>
            <a
              href="https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20la%20ruta%20al%20Cap%20de%20Creus%20en%20barco"
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
