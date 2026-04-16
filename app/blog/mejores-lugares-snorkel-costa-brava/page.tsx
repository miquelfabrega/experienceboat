import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Mejores lugares de snorkel en Costa Brava',
  description: 'Descubre las calas y reservas marinas imprescindibles para hacer snorkel en la Costa Brava. Cala Montjoi, Islas Medas, Cap de Creus y más.',
  alternates: {
    canonical: 'https://www.experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
    languages: {
      'x-default': 'https://www.experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
      es: 'https://www.experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
      fr: 'https://www.experienceboat.es/fr/blog/meilleurs-endroits-snorkeling-costa-brava',
      en: 'https://www.experienceboat.es/en/blog/best-snorkeling-spots-costa-brava',
    },
  },
  openGraph: {
    title: 'Mejores lugares de snorkel en Costa Brava',
    description: 'Descubre las calas y reservas marinas imprescindibles para hacer snorkel en la Costa Brava norte.',
    url: 'https://www.experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
    locale: 'es_ES',
    type: 'article',
  },
};

const toc = [
  { id: 'montjoi', label: 'Cala Montjoi' },
  { id: 'medas', label: 'Islas Medas' },
  { id: 'cap-creus', label: 'Cap de Creus' },
  { id: 'joncols', label: 'Cala Jóncols' },
  { id: 'rovellada', label: 'Cala Rovellada' },
  { id: 'consejos', label: 'Consejos de seguridad' },
];

const consejos = [
  'Siempre haz snorkel con un compañero y nunca nades solo.',
  'Elige un lugar que coincida con tu nivel de habilidad y experiencia.',
  'Usa equipo adecuado: máscara, tubo y aletas ajustadas.',
  'Mantente atento a tu entorno y ten cuidado con el tráfico de barcos.',
  'Respeta el ecosistema: evita tocar corales o molestar a la vida marina.',
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Los mejores lugares para hacer snorkel en la Costa Brava',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/services/canales.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/blog/mejores-lugares-snorkel-costa-brava' },
    inLanguage: 'es',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleSnorkel() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/services/canales.jpg"
          alt="Buceo y snorkel en las aguas cristalinas de la Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Descubrir
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Los mejores lugares para hacer snorkel en la Costa Brava
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
            6 min de lectura
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Costa Brava Norte
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Guía de calas
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
          <span className="text-gray-600 truncate">Snorkel en la Costa Brava</span>
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
              La Costa Brava, con su costa escarpada y sus aguas cristalinas, es un paraíso para los amantes del snorkel. Desde calas escondidas hasta impresionantes reservas marinas, esta región ofrece una amplia variedad de lugares para sumergirse y descubrir la fascinante vida marina que habita en sus aguas.
            </p>
            <p>
              En este artículo exploraremos algunos de los mejores lugares para hacer snorkel en la Costa Brava norte, qué vida marina esperar en cada zona, y consejos prácticos para sacarle el máximo provecho de forma segura.
            </p>

            {/* H2 #1 */}
            <h2 id="montjoi">1. Cala Montjoi: Explorando un paraíso submarino</h2>
            <p>
              Situada muy cerca de Roses, <strong>Cala Montjoi</strong> es uno de los destinos de snorkel más accesibles y populares. Con aguas tranquilas y protegidas, esta bahía es el hogar de una gran variedad de peces y criaturas marinas.
            </p>
            <p>
              Al sumergirse en sus aguas, es fácil encontrarse con bancos de peces de colores, pulpos escondidos en las rocas y pequeños corales que adornan el fondo marino. Gracias a su tamaño y protección natural, es un sitio ideal para principiantes y familias.
            </p>

            {/* H2 #2 */}
            <h2 id="medas">2. Islas Medas: Un santuario submarino</h2>
            <p>
              Ubicadas frente a la costa de L&apos;Estartit, las <strong>Islas Medas</strong> forman un archipiélago que es reserva marina protegida desde hace décadas. Es considerado uno de los mejores puntos de inmersión de todo el Mediterráneo.
            </p>
            <p>
              El nivel de vida marina aquí es asombroso. Haciendo snorkel se pueden observar meros enormes, abanicos de mar (gorgonias), bancos gigantes de sargos y, con suerte, alguna raya. Las aguas cristalinas y la prohibición total de pesca hacen de las Medas una parada obligatoria. Para llegar a ellas, lo más recomendable es alquilar una embarcación o contratar una excursión específica.
            </p>

            {/* H2 #3 */}
            <h2 id="cap-creus">3. Cap de Creus: Descubriendo tesoros escondidos</h2>
            <p>
              La costa escarpada del <strong>Parque Natural del Cap de Creus</strong> está salpicada de calas escondidas y cuevas marinas, convirtiéndose en el lugar ideal para los que buscan aventura salvaje.
            </p>
            <p>
              La zona destaca por la transparencia del agua, filtrada naturalmente por las praderas de posidonia. Mantén los ojos bien abiertos para ver morenas, estrellas de mar rojas, erizos y nudibranquios que habitan en los fondos rocosos. Debido a que el acceso por tierra es largo y complicado en muchas de sus calas, <Link href="/experiencias-barco-roses">llegar en barco es la mejor opción</Link> para explorar los mejores puntos de snorkel de la reserva.
            </p>

            {/* H2 #4 */}
            <h2 id="joncols">4. Cala Jóncols: Un oasis tranquilo</h2>
            <p>
              Aislada entre altos acantilados rocosos y pinares, <strong>Cala Jóncols</strong> es un oasis donde escapar de las multitudes. Su lecho marino es principalmente de guijarros y roca, lo que garantiza una visibilidad excelente bajo el agua.
            </p>
            <p>
              Al estar más alejada y tener un acceso por pista de tierra muy accidentado, la presión humana es menor. Es fácil encontrar anémonas, doradas y pulpos cazando entre las rocas. Seas principiante o experimentado, Jóncols ofrece una experiencia muy auténtica.
            </p>

            {/* H2 #5 */}
            <h2 id="rovellada">5. Cala Rovellada: Joya escondida</h2>
            <p>
              Más al norte, acercándonos a Colera y Portbou, encontramos <strong>Cala Rovellada</strong>. Es conocida por su rica biodiversidad marina y formaciones rocosas únicas.
            </p>
            <p>
              Los snorkelers pueden explorar las paredes de roca y las pequeñas grietas submarinas donde se esconden caballitos de mar tímidos, sargos y castañuelas. Es una bahía con mucho encanto y perfecta para quienes buscan aguas prístinas fuera del circuito más habitual.
            </p>

            {/* H2 #6 */}
            <h2 id="consejos">Consejos de seguridad y recomendaciones de equipo</h2>
            <p>
              Antes de embarcarte en una aventura de snorkel, es importante garantizar tu seguridad y la del entorno.
            </p>

            <ul className="not-prose mt-6 space-y-3">
              {consejos.map((consejo, i) => (
                <li key={i} className="flex gap-3 text-gray-700 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </div>
                  {consejo}
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Siguiendo estos consejos y explorando las zonas que hemos repasado, estarás seguro de tener una aventura submarina inolvidable. Coge tu máscara, embárcate y descubre las maravillas escondidas bajo la superficie de la Costa Brava.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-10 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Llega a las mejores calas en barco</p>
                <p className="text-gray-500 text-sm">Alquila un barco sin licencia y explora la costa a tu propio ritmo.</p>
              </div>
              <Link
                href="/alquiler-barco-sin-licencia-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Ver barcos disponibles <ChevronRight className="w-4 h-4" />
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
