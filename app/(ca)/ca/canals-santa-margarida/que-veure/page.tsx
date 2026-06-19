import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Què veure als canals de Santa Margarida amb vaixell',
  description:
    'Descobreix tot el que amaguen els canals de Santa Margarida des de l\'aigua. Cases, fauna i la Costa Brava més autèntica. Sortides privades des de Roses.',
  keywords: [
    'què veure canals Santa Margarida',
    'excursió canals Santa Margarida',
    'vaixell canals Castelló d\'Empúries',
  ],
  alternates: buildAlternates('canalsWhatToSee', 'ca'),
  openGraph: {
    title: 'Què veure als canals de Santa Margarida amb vaixell',
    description:
      'Descobreix tot el que amaguen els canals de Santa Margarida des de l\'aigua. Cases, fauna i la Costa Brava més autèntica. Sortides privades des de Roses.',
    url: 'https://www.experienceboat.es/ca/canals-santa-margarida/que-veure',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
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
    question: 'Es poden visitar els canals de Santa Margarida a peu?',
    answer:
      'Sí, hi ha un passeig per a vianants que voreja part dels canals i miradors des d\'on es pot veure l\'aigua i les cases. Però l\'experiència des del vaixell és completament diferent — des de l\'aigua s\'accedeix als trams més interiors i es veu la urbanització des de la perspectiva que els seus arquitectes van dissenyar originalment.',
  },
  {
    question: 'Quant temps es triga a recórrer els canals amb vaixell?',
    answer:
      'El recorregut pels canals interiors a ritme tranquil dura entre 60 i 90 minuts. És perfectament combinable amb una sortida a la badia de Roses o al Cap de Creus en la mateixa jornada.',
  },
  {
    question: 'Quina és la millor època per visitar els canals de Santa Margarida?',
    answer:
      'Maig, juny i setembre ofereixen les millors condicions: aigües tranquil·les, temperatura agradable, fauna activa i molt menys trànsit nàutic que en ple agost. Per a fotografia, la primera hora del matí en qualsevol època de l\'any és imbatible.',
  },
  {
    question: 'Es pot fer snorkel als canals de Santa Margarida?',
    answer:
      'Els canals interiors no són l\'entorn ideal per al snorkel — les aigües són més tranquil·les que cristal·lines en alguns trams. Per al snorkel recomanem les cales de la badia de Roses i el Cap de Creus, que tenen fons molt més rics i aigua més transparent.',
  },
  {
    question: 'Hi ha restriccions de navegació als canals?',
    answer:
      'Sí. Els canals tenen límit de velocitat per protegir les embarcacions amarrades i la tranquil·litat de la urbanització. Les nostres embarcacions estan perfectament adaptades a aquestes condicions i abans de cada sortida expliquem les normes bàsiques de navegació pels canals.',
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
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canals de Santa Margarida amb vaixell',
        item: 'https://www.experienceboat.es/ca/canals-santa-margarida',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Què veure als canals de Santa Margarida',
        item: 'https://www.experienceboat.es/ca/canals-santa-margarida/que-veure',
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

export default function QueVeureCanalsSantaMargaridaCA() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Què veure als canals de Santa Margarida des de l&apos;aigua
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Els{' '}
              <Link href="/ca/canals-santa-margarida" className="text-sky-600 hover:underline">
                canals de Santa Margarida
              </Link>{' '}
              es poden recórrer a peu o des dels miradors repartits per la urbanització. Però cap
              d&apos;aquestes perspectives s&apos;assembla al que es veu des de l&apos;aigua. Des d&apos;un
              vaixell, els canals revelen una dimensió completament diferent: les cases es mostren des de
              la seva cara més íntima i el ritme del recorregut — lent, tranquil, sense cap pressa —
              converteix el passeig en una cosa que no s&apos;assembla a cap altra experiència de la
              Costa Brava.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>a]:text-sky-600 [&>a]:hover:underline">
            <h2>Les cases sobre l&apos;aigua — arquitectura única a la Costa Brava</h2>
            <p>
              La imatge més característica dels canals de Santa Margarida és la de les cases amb
              embarcador privat. Més de 500 habitatges tenen accés directe a l&apos;aigua des del seu jardí
              — cadascun amb el seu petit moll, la seva barca amarrada i la seva terrassa abocada al canal.
            </p>
            <p>
              Des de terra, aquestes cases es veuen per darrere — la façana principal dona al carrer. Des
              del vaixell, les veieu des de davant: jardins amb palmeres, terrasses amb para-sols,
              propietaris prenent cafè a primera hora del matí amb els peus gairebé a l&apos;aigua. És la
              cara privada de Santa Margarida que la majoria de turistes no arriben a veure mai.
            </p>
            <p>
              L&apos;arquitectura varia considerablement d&apos;una casa a l&apos;altra. Hi ha xalets dels
              anys 60 amb l&apos;estil mediterrani original, reformes modernes amb grans finestrals sobre el
              canal i algunes cases que han mantingut intacte el disseny de quan es va construir la
              urbanització. Per a qui li interessa l&apos;arquitectura residencial, el recorregut pels
              canals és un catàleg únic a la Costa Brava.
            </p>

            <h2>El ritme del recorregut — lent per naturalesa</h2>
            <p>
              Els canals obliguen a navegar a velocitat reduïda. Aquesta lentitud no és cap inconvenient:
              és precisament el que fa especial el trajecte. En un entorn d&apos;aigües tranquil·les i
              protegides, el temps s&apos;estira i el paisatge s&apos;aprecia amb detall.
            </p>
            <p>
              Aquesta calma obligada és, paradoxalment, un dels aspectes més valorats del recorregut: en un
              món de ritmes accelerats, els canals de Santa Margarida conviden a anar a poc a poc i mirar.
            </p>
            <p>
              Per a qui navega per primera vegada, els trams rectes, les corbes suaus i els referents
              visuals de la urbanització — façanes, embarcadors, vegetació — ajuden a orientar-se sense
              pressa. El recorregut és reconeixible en qualsevol moment.
            </p>

            <h2>La fauna dels canals — el que no esperes trobar</h2>
            <p>
              Els canals de Santa Margarida no són només arquitectura. Les aigües tranquil·les i protegides
              de les vies navegables interiors són l&apos;hàbitat d&apos;una fauna que sorprèn qui no
              l&apos;espera.
            </p>
            <p>
              Els ocells en són els protagonistes. Bernats pescaires apostats als embarcadors privats,
              blauets que travessen els canals com fletxes de color blau elèctric, ànecs que neden entre les
              embarcacions amarrades sense immutar-se pel pas dels vaixells de lloguer. Per a famílies amb
              canalla, l&apos;observació de fauna durant el recorregut pels canals és un dels moments més
              recordats de la sortida.
            </p>
            <p>
              A les parets submergides dels molls i embarcadors, quan l&apos;aigua està especialment clara,
              es poden veure peixos petits movent-se entre les algues. No és el Cap de Creus — però té el seu
              propi ecosistema tranquil que val la pena observar.
            </p>

            <h2>Els canals a l&apos;alba i al capvespre — la llum que ho canvia tot</h2>
            <p>
              Els canals de Santa Margarida són un d&apos;aquells llocs on la llum del dia importa tant com
              el lloc en si. A primera hora del matí, quan el sol encara és baix i els reflexos a l&apos;aigua
              són llargs i daurats, els canals tenen una qualitat gairebé irreal. Les cases es dupliquen a
              l&apos;aigua, la llum dibuixa ombres llargues a les façanes i hi ha una quietud que no dura més
              enllà de les 10 del matí.
            </p>
            <p>
              Al capvespre, la transformació és diferent però igual d&apos;espectacular. La llum càlida del
              final del dia tenyeix les façanes de taronja i rosa, l&apos;aigua es torna un mirall perfecte i
              l&apos;ambient s&apos;omple d&apos;aquella malenconia mediterrània difícil de descriure però
              immediatament reconeixible.
            </p>
            <p>
              És exactament per a aquests moments que existeix el{' '}
              <Link
                href="/ca/experiencies-vaixell-roses/sunset-experience"
                className="text-sky-600 hover:underline"
              >
                Sunset Experience
              </Link>{' '}
              d&apos;Experience Boat: una sortida al capvespre pels canals de Santa Margarida que comença amb
              la darrera llum del dia sobre l&apos;aigua i acaba quan el sol desapareix rere l&apos;horitzó de
              la{' '}
              <Link href="/ca" className="text-sky-600 hover:underline">
                badia de Roses
              </Link>
              .
            </p>

            <div className="my-10 flex justify-center sm:justify-start">
              <Link
                href="/ca/experiencies-vaixell-roses/sunset-experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Veure Sunset Experience &rarr;
              </Link>
            </div>

            <h2>Els canals a cada època de l&apos;any</h2>
            <p>
              Els canals de Santa Margarida canvien amb les estacions d&apos;una manera que poques zones
              turístiques de la Costa Brava poden igualar.
            </p>
            <ul className="mb-8">
              <li>
                <strong>A la primavera (abril, maig, juny)</strong> — és l&apos;època més tranquil·la i
                possiblement la més bonica. Els jardins de les cases són en flor, la vegetació que voreja
                alguns trams del canal és en el seu punt més exuberant i la fauna és més activa que en ple
                estiu. Les aigües són netes i tranquil·les. Per a qui vol viure els canals en la seva versió
                més autèntica, la primavera és el moment.
              </li>
              <li>
                <strong>A l&apos;estiu (juliol, agost)</strong> — els canals tenen més vida i més color. Els
                propietaris són a les seves cases, les terrasses tenen activitat i l&apos;ambient de la
                urbanització és el d&apos;una petita ciutat costanera en plena temporada. Hi ha més
                embarcacions als canals però també més ambient. La primera hora del matí continua sent el
                millor moment per sortir abans que la calor estrenyi.
              </li>
              <li>
                <strong>Al setembre i octubre</strong> — la temporada ideal per als qui prefereixen els
                canals sense aglomeracions. Les aigües continuen càlides per al bany, els turistes han
                reduït considerablement i els canals recuperen aquella quietud de principis de temporada.
                Molts propietaris continuen a les seves cases durant el setembre, cosa que dona al recorregut
                l&apos;ambient residencial que el fa únic.
              </li>
            </ul>

            <h2>Com arribar als canals de Santa Margarida</h2>
            <p>
              Els canals de Santa Margarida són a l&apos;extrem nord de Roses, a menys de 5 minuts amb cotxe
              des del centre del poble. Des de la nostra base a la Marina de Santa Margarida, l&apos;accés a
              l&apos;inici dels canals navegables és immediat — la sortida amb vaixell comença al primer canal
              des del primer minut.
            </p>
            <p>
              Per arribar a la Marina de Santa Margarida des de Roses centre, agafeu l&apos;Avinguda de Rhode
              cap al nord i seguiu les indicacions a la Marina. Hi ha aparcament gratuït disponible a prop del
              punt d&apos;embarcament.
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
                title="Mapa de la Marina de Santa Margarida"
              ></iframe>
            </div>

            <hr className="my-12 border-slate-200" />

            {/* FAQ Section */}
            <h2 className="!mt-0">Preguntes freqüents</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 mb-0">{faq.answer}</p>
                </div>
              ))}
            </div>

            <hr className="my-12 border-slate-200" />

            {/* Enllaços d'interès */}
            <h2>Enllaços d&apos;interès</h2>
            <ul className="mb-0">
              <li>
                <Link href="/ca/canals-santa-margarida" className="text-sky-600 hover:underline">
                  Guia principal: els canals de Santa Margarida amb vaixell
                </Link>
              </li>
              <li>
                <Link
                  href="/ca/canals-santa-margarida/ruta-cap-de-creus"
                  className="text-sky-600 hover:underline"
                >
                  Ruta amb vaixell: canals de Santa Margarida al Cap de Creus
                </Link>
              </li>
              <li>
                <Link
                  href="/ca/lloguer-vaixell-sense-llicencia-roses"
                  className="text-sky-600 hover:underline"
                >
                  Llogar un vaixell sense llicència a Roses
                </Link>
              </li>
              <li>
                <Link
                  href="/ca/experiencies-vaixell-roses"
                  className="text-sky-600 hover:underline"
                >
                  Experiències amb patró a Roses
                </Link>
              </li>
            </ul>
          </div>
        </article>

        {/* Silo Navigation */}
        <SiloNavBlock silo="canales" lang="ca" currentPath="/ca/canals-santa-margarida/que-veure" />
      </main>
    </>
  );
}
