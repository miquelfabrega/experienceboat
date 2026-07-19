import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Mejores lugares de snorkel en Costa Brava',
  description: 'Descubre las calas y reservas marinas imprescindibles para hacer snorkel en la Costa Brava. Cala Montjoi, Islas Medas, Cap de Creus y más.',
  alternates: buildAlternates('blogSnorkel', 'es'),
  openGraph: {
    title: 'Mejores lugares de snorkel en Costa Brava',
    description: 'Descubre las calas y reservas marinas imprescindibles para hacer snorkel en la Costa Brava norte.',
    url: 'https://www.experienceboat.es/blog/mejores-lugares-snorkel-costa-brava',
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
  { id: 'montjoi', label: 'Cala Montjoi' },
  { id: 'murtra', label: 'Cala Murtra' },
  { id: 'cap-creus', label: 'Cap de Creus' },
  { id: 'joncols', label: 'Cala Jóncols' },
  { id: 'medas', label: '¿Y las Islas Medas?' },
  { id: 'consejos', label: 'Consejos de seguridad' },
];

const consejos = [
  'Siempre haz snorkel con un compañero y nunca nades solo.',
  'Elige un lugar que coincida con tu nivel de habilidad y experiencia.',
  'Usa equipo adecuado: máscara, tubo y aletas ajustadas.',
  'Mantente atento a tu entorno y ten cuidado con el tráfico de barcos.',
  'Respeta el ecosistema: no toques el fondo ni molestes a la fauna, y fondea siempre fuera de la posidonia.',
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
              Navegamos la bahía de Roses y el Cap de Creus casi a diario, y buena parte de nuestras paradas acaban con la máscara puesta. Estas son las calas de nuestra zona donde el snorkel de verdad vale la pena — todas alcanzables en barco desde la Marina de Santa Margarita.
            </p>
            <p>
              Te contamos qué se ve en cada una, a cuánto queda de Roses y un apunte honesto sobre las Islas Medas, que no están en nuestra zona pero nos preguntan mucho por ellas.
            </p>

            {/* H2 #1 */}
            <h2 id="montjoi">1. Cala Montjoi, la clásica que no falla</h2>
            <p>
              A unos 20 minutos de navegación desde Santa Margarita, <strong>Cala Montjoi</strong> es la parada de snorkel más accesible de nuestra zona. Aguas tranquilas y protegidas, fondo rocoso con posidonia y muy buena visibilidad casi todo el año.
            </p>
            <p>
              Bajo el agua verás peces de roca, algún pulpo escondido entre las piedras y praderas de posidonia. Por tamaño y protección natural es la que solemos recomendar a principiantes y familias — y por tierra tiene el aliciente de elBulli1846, aunque el aparcamiento en verano es otra historia.
            </p>

            {/* H2 #2 */}
            <h2 id="murtra">2. Cala Murtra, el acuario sin cristal</h2>
            <p>
              A unos 10 minutos de navegación, en la zona de Punta Falconera, <strong>Cala Murtra</strong> es la sorpresa de la lista. El acceso a pie es tan incómodo que casi nadie la pisa, y eso se nota en el agua: limpia, tranquila y con fondo de roca lleno de vida.
            </p>
            <p>
              Solemos fondear en su agua poco profunda y la máscara sale sola: peces pequeños entre las rocas, anémonas y esa sensación de acuario sin cristal que solo dan las calas sin gente. Snorkel de naturaleza mediterránea, discreto y silencioso.
            </p>

            {/* H2 #3 */}
            <h2 id="cap-creus">3. Cap de Creus: Culip, Jugadora y las cuevas</h2>
            <p>
              La costa escarpada del <strong>Parque Natural del Cap de Creus</strong> es el snorkel más salvaje de la zona. Cala Culip y Cala Jugadora, resguardadas cerca del faro, son nuestras paradas habituales cuando el mar lo permite; entre ellas, cuevas y arcos de roca a los que solo se llega por mar.
            </p>
            <p>
              El agua aquí es especialmente transparente, filtrada por las praderas de posidonia. Mantén los ojos abiertos para ver morenas, estrellas de mar rojas, erizos y nudibranquios en los fondos rocosos. Como el acceso por tierra es largo y complicado en la mayoría de estas calas, <Link href="/experiencias-barco-roses">llegar en barco es la mejor opción</Link> — nosotros subimos con patrón o con barco con licencia según el día.
            </p>

            {/* H2 #4 */}
            <h2 id="joncols">4. Cala Jóncols, entre acantilados y pinos</h2>
            <p>
              Aislada entre acantilados y pinares, camino del Cap de Creus, <strong>Cala Jóncols</strong> es de las que se ganan por mar: la pista de tierra es tan accidentada que la mayoría de visitantes llega en barco. Su lecho de guijarros y roca da una visibilidad excelente.
            </p>
            <p>
              Con menos presión humana que las calas de carretera, es fácil ver anémonas, doradas y pulpos cazando entre las rocas. Seas principiante o llevas años con la máscara, Jóncols compensa el trayecto.
            </p>

            {/* H2 #5 */}
            <h2 id="medas">5. ¿Y las Islas Medas?</h2>
            <p>
              Nos lo preguntan mucho, así que respuesta honesta: las <strong>Islas Medas</strong>, frente a L&apos;Estartit, son una reserva marina extraordinaria — meros enormes, gorgonias, bancos de sargos — pero <strong>quedan fuera de nuestra zona de alquiler</strong>. Nuestros barcos operan entre la bahía de Roses y el Cap de Creus, y las Medas (igual que las calas de Colera o Portbou, más al norte) se visitan mejor con los operadores de su propia zona. Si tu plan es esa reserva, sal desde L&apos;Estartit; si quieres snorkel salvaje sin salir de aquí, el Cap de Creus no tiene nada que envidiarle.
            </p>

            {/* H2 #6 */}
            <h2 id="consejos">Consejos de seguridad y recomendaciones de equipo</h2>
            <p>
              Antes de meterte al agua, un par de cosas sobre seguridad — la tuya y la del entorno.
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
              Con esto y un poco de sentido común, el resto lo pone el agua. Si sales con nosotros, el equipo de snorkel va incluido en la excursión de cuevas — y si alquilas sin licencia, tráete la máscara: Montjoi y Murtra quedan a menos de media hora del pantalán.
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
