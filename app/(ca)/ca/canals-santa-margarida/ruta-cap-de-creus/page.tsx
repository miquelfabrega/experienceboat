import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Ruta amb vaixell: Santa Margarida al Cap de Creus',
  description:
    'La ruta nàutica més completa de la Costa Brava nord: dels canals de Santa Margarida al Cap de Creus amb vaixell privat des de Roses. Reserva en línia.',
  keywords: [
    'ruta vaixell Cap de Creus',
    'excursió canals Santa Margarida',
    'vaixell Santa Margarida Cap de Creus',
  ],
  alternates: buildAlternates('canalsRoute', 'ca'),
  openGraph: {
    title: 'Ruta amb vaixell: Santa Margarida al Cap de Creus',
    description:
      'La ruta nàutica més completa de la Costa Brava nord: dels canals de Santa Margarida al Cap de Creus amb vaixell privat des de Roses. Reserva en línia.',
    url: 'https://www.experienceboat.es/ca/canals-santa-margarida/ruta-cap-de-creus',
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
    question: 'Quant dura la ruta completa dels canals de Santa Margarida al Cap de Creus?',
    answer:
      'La jornada completa dura aproximadament 8 hores, de les quals unes 3 hores són de navegació activa i la resta és temps a les cales — banys, menjar a bord i exploració del parc natural. És una jornada llarga i completa que recomanem per a grups que volen treure el màxim partit d\'un dia al mar.',
  },
  {
    question: 'Es pot fer la ruta en mig dia?',
    answer:
      'El tram fins al Cap de Creus amb temps suficient per gaudir-lo requereix la jornada completa. En mig dia es pot fer el recorregut pels canals i arribar a les cales més properes de la badia de Roses — una experiència igualment valuosa però diferent de la ruta completa fins al parc natural.',
  },
  {
    question: 'Cal experiència nàutica per fer aquesta ruta?',
    answer:
      'No, si trieu l\'opció amb patró. En Tomàs o en Max porten l\'embarcació durant tota la jornada i coneixen la ruta en detall. Per a l\'opció amb llicència es requereix PNB o titulació equivalent, especialment per al tram del Cap de Creus, que pot tenir condicions de vent més exigents.',
  },
  {
    question: 'Què passa si la tramuntana no permet arribar al Cap de Creus?',
    answer:
      'És una possibilitat real, especialment a la primavera i la tardor. Si les condicions meteorològiques no permeten el tram del Cap de Creus amb seguretat, adaptem la ruta a les cales més protegides de la badia de Roses o reprogramem la sortida sense cap cost addicional. La seguretat sempre està per sobre de la ruta prevista.',
  },
  {
    question: 'Puc personalitzar les parades de la ruta?',
    answer:
      'Sí, completament. Abans de cada sortida parlem amb el grup per recollir preferències de ruta i parades. Si hi ha cales concretes que voleu visitar o aspectes de la ruta que voleu prioritzar — més temps als canals, més temps al Cap, parada específica en alguna cala — ho incorporem al pla del dia.',
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
        name: 'Ruta vaixell canals Santa Margarida al Cap de Creus',
        item: 'https://www.experienceboat.es/ca/canals-santa-margarida/ruta-cap-de-creus',
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

export default function RutaCapDeCreusCA() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Ruta amb vaixell dels canals de Santa Margarida al Cap de Creus
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Hi ha una ruta nàutica a la Costa Brava nord que ho té tot: aigües tranquil·les per
              començar,{' '}
              <Link href="/ca" className="text-sky-600 hover:underline">
                badia oberta
              </Link>{' '}
              al centre i parc natural al final. Comença als{' '}
              <Link href="/ca/canals-santa-margarida" className="text-sky-600 hover:underline">
                canals de Santa Margarida
              </Link>{' '}
              — cases sobre l&apos;aigua, ponts de pedra, calma mediterrània — i acaba al Cap de Creus, el
              punt més oriental de la Península Ibèrica i un dels entorns naturals més espectaculars de la
              Mediterrània. Al mig, la badia de Roses amb el Pirineu al fons i les millors cales de la costa
              nord. És la ruta que fem a Experience Boat quan volem mostrar el millor de la zona en una sola
              jornada.
            </p>
          </header>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>a]:text-sky-600 [&>a]:hover:underline">
            <h2>La ruta completa — tram a tram</h2>
            <p>
              Aquesta és la descripció detallada de la ruta de dia complet des dels canals de Santa
              Margarida fins al Cap de Creus. Els temps són orientatius i s&apos;adapten en funció del grup,
              el ritme i les condicions del mar.
            </p>

            <h3>Tram 1 — Els canals de Santa Margarida (30-45 min)</h3>
            <p>
              La ruta comença on hi ha la base d&apos;Experience Boat: la Marina de Santa Margarida, a
              l&apos;entrada dels canals. Des del primer minut l&apos;embarcació navega per les vies
              navegables interiors de la urbanització, vorejades per més de 500 cases amb embarcador privat.
            </p>
            <p>
              És el tram més tranquil de la jornada i el més fotogènic. Les aigües estan completament en
              calma, els ponts de pedra blanca es passen per sota i el ritme és pausat i contemplatiu. Per a
              grups que mai no han navegat pels canals, aquest primer tram és sovint el moment preferit de
              tot el dia — i el més inesperat.
            </p>
            <p>
              A primera hora del matí, quan el sol encara no ha pujat gaire i els reflexos a l&apos;aigua són
              perfectes, els canals tenen una llum que no es troba en cap altre punt de la Costa Brava.
            </p>

            <h3>Tram 2 — Sortida a la badia de Roses (15-20 min)</h3>
            <p>
              Quan els canals interiors s&apos;obren al mar, l&apos;escenari canvia completament. La badia de
              Roses s&apos;estén davant de l&apos;embarcació amb tota la seva amplitud: el Pirineu nevat al
              fons als mesos d&apos;hivern i primavera, el poble de Roses a la dreta i l&apos;inici del massís
              del Cap de Creus a l&apos;esquerra.
            </p>
            <p>
              És el moment en què la jornada agafa escala. El que va començar com un recorregut íntim pels
              canals es converteix en una navegació de debò, amb horitzó obert i vent a la cara.
            </p>
            <p>
              En aquest tram fem la primera parada opcional: si el grup vol banyar-se abans de seguir cap al
              Cap, la badia té zones tranquil·les perfectes per a un primer capbussó del matí.
            </p>

            <h3>Tram 3 — Costa nord cap al Cap de Creus (30-40 min)</h3>
            <p>
              Des de la badia de Roses, la ruta voreja la costa nord en direcció al Cap de Creus. Aquest és
              el tram on el paisatge comença a canviar de caràcter: la costa es torna més escarpada, els
              penya-segats més alts i la roca adquireix tons foscos que anuncien la naturalesa volcànica del
              parc natural.
            </p>
            <p>
              Al llarg d&apos;aquest tram passem per Cala Canyelles Petites i Cala Almadrava — les dues cales
              més accessibles des de Roses i les preferides per a la parada de mig matí. Aigües turquesa, fons
              de sorra i roca, i espai suficient per fondejar còmodament fins i tot en temporada alta.
            </p>
            <p>
              Si el grup vol aprofitar el bany de mig matí amb calma abans de seguir cap al Cap, Canyelles és
              la parada ideal. Des d&apos;allà, el Cap de Creus és a menys de 30 minuts de navegació.
            </p>

            <h3>Tram 4 — El Parc Natural del Cap de Creus (temps lliure)</h3>
            <p>
              L&apos;arribada al Parc Natural del Cap de Creus és el moment culminant de la ruta. El paisatge
              canvia dràsticament: la vegetació desapareix, la roca volcànica domina l&apos;horitzó i les{' '}
              <Link href="/ca/experiencies-vaixell-roses/cap-de-creus-cales" className="text-sky-600 hover:underline">
                cales del Cap de Creus
              </Link>{' '}
              tenen una transparència i un color que no s&apos;assemblen a res que hàgiu vist abans a la Costa
              Brava.
            </p>
            <p>
              Les cales interiors del parc — Culip, Jugadora, Fredosa — només són accessibles amb vaixell. No
              hi ha camins que baixin fins a l&apos;aigua, no hi ha aparcament, no hi ha serveis. Només la
              cala, l&apos;aigua i el vostre grup.
            </p>
            <p>
              Aquest és el tram de temps lliure de la ruta: fondeig a la cala triada, bany, menjar a bord si
              heu portat alguna cosa per al migdia i temps per fer el que vulgueu. La majoria dels grups que
              hi arriben per primera vegada no se&apos;n volen anar.
            </p>

            <h3>Tram 5 — Tornada per la costa sud (45-60 min)</h3>
            <p>
              La tornada es pot fer pel mateix camí o vorejant la costa sud del Cap de Creus, que té un
              caràcter diferent del de l&apos;anada: més exposada a l&apos;onatge obert però amb vistes al
              golf de Lleó i, en dies clars, a les illes Medes a l&apos;horitzó.
            </p>
            <p>
              Depenent de l&apos;hora i de l&apos;estat del mar, la tornada inclou una parada final a la badia
              de Roses per al bany de tarda abans de tornar als canals de Santa Margarida.
            </p>
            <p>
              L&apos;arribada de tornada pels canals al capvespre — amb la llum càlida del final del dia sobre
              l&apos;aigua i les cases — tanca la jornada d&apos;una manera difícilment millorable.
            </p>

            <h2>Distàncies i temps de la ruta</h2>
            <div className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 text-sm uppercase tracking-wide">
                    <th className="p-4 border-b border-slate-200 font-semibold">Tram</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Distància aprox.</th>
                    <th className="p-4 border-b border-slate-200 font-semibold">Temps navegació</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-base">
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Canals Santa Margarida</td>
                    <td className="p-4">3-4 km</td>
                    <td className="p-4">30-45 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Badia de Roses</td>
                    <td className="p-4">8 km</td>
                    <td className="p-4">15-20 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Costa nord cap a Cap de Creus</td>
                    <td className="p-4">12 km</td>
                    <td className="p-4">30-40 min</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Cales interiors Cap de Creus</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4">Temps lliure</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">Tornada</td>
                    <td className="p-4">20-22 km</td>
                    <td className="p-4">45-60 min</td>
                  </tr>
                  <tr className="bg-slate-50 font-semibold text-slate-800">
                    <td className="p-4">Total navegació</td>
                    <td className="p-4">~45 km</td>
                    <td className="p-4">~3 hores</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              La resta del temps — entre 4 i 5 hores en una jornada completa — és temps de parada: banys a les
              cales, menjar a bord i exploració del parc natural. La ruta no és una travessia de navegació
              contínua sinó una jornada on la navegació és el mitjà per arribar a llocs que d&apos;altra
              manera són inaccessibles.
            </p>

            <h2>Amb patró o amb llicència — quina opció triar per a aquesta ruta</h2>
            <p>
              Aquesta és la ruta més completa del catàleg d&apos;Experience Boat i la que té més opcions
              depenent del perfil del grup.
            </p>

            <h3>Amb patró (recomanat per a aquesta ruta)</h3>
            <p>
              Per a grups sense experiència nàutica o per a qui simplement vol gaudir sense preocupar-se de la
              navegació, l&apos;excursió privada amb patró és l&apos;opció ideal. En Tomàs o en Max coneixen la
              ruta en detall, saben quines són les millors cales segons l&apos;època de l&apos;any i
              s&apos;adapten completament al ritme del grup. Vosaltres només us preocupeu de gaudir.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/ca/experiencies-vaixell-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Excursions privades amb patró a Roses &rarr;
              </Link>
            </div>

            <h3>Amb llicència (per a patrons amb titulació)</h3>
            <p>
              Si teniu PNB o titulació equivalent i voleu traçar la ruta a la vostra manera — al vostre ritme,
              amb les parades que vulgueu i sense dependre de ningú — les nostres embarcacions amb llicència
              són perfectes per a aquesta travessia.
            </p>
            <div className="mt-4 mb-10 flex justify-center sm:justify-start">
              <Link
                href="/ca/lloguer-vaixell-amb-llicencia-roses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-800 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                Lloguer de vaixells amb llicència a Roses &rarr;
              </Link>
            </div>

            <h2>Què portar per a la ruta completa</h2>
            <p>
              Per a una jornada de dia complet des dels canals de Santa Margarida al Cap de Creus, la llista
              de l&apos;imprescindible:
            </p>
            <ul>
              <li>
                <strong>Protecció solar de factor alt i resistent a l&apos;aigua</strong> — passareu hores
                exposats al sol de la Mediterrània.
              </li>
              <li>
                <strong>Ulleres de sol polaritzades</strong> — el reflex a l&apos;aigua durant la travessia és
                intens.
              </li>
              <li>
                <strong>Roba de bany i tovalloles</strong> per a les parades a les cales.
              </li>
              <li>
                <strong>Nevera amb aigua, begudes fresques i menjar</strong> per al migdia — menjar en una cala
                del Cap de Creus és un dels moments que més es recorda.
              </li>
              <li>
                <strong>Calçat amb sola antilliscant</strong>.
              </li>
              <li>
                <strong>Càmera o telèfon en funda impermeable</strong> — les cales del Cap de Creus mereixen
                les millors fotos que pugueu fer.
              </li>
              <li>
                <strong>Una capa lleugera per a la tornada</strong> — el vent de tarda a la badia pot ser
                fresc encara que el dia hagi estat calorós.
              </li>
            </ul>

            <h2>La millor època per fer la ruta completa</h2>
            <p>
              La ruta dels canals de Santa Margarida al Cap de Creus es pot fer d&apos;abril a octubre, però hi
              ha moments especialment bons:
            </p>
            <p>
              <strong>Maig i juny</strong> són els mesos més recomanats per a qui té flexibilitat. Les cales
              del Cap de Creus estan tranquil·les, les condicions de navegació són excel·lents i la llum de
              primavera als canals és extraordinària. La temperatura de l&apos;aigua ja és agradable per al
              bany a partir de finals de maig.
            </p>
            <p>
              <strong>Juliol i agost</strong> són temporada alta. Les cales tenen més gent i cal sortir
              d&apos;hora per arribar-hi abans que s&apos;omplin. A canvi, l&apos;ambient de la badia de Roses
              a l&apos;estiu té una energia pròpia i els capvespres de tornada pels canals són els més
              espectaculars de l&apos;any.
            </p>
            <p>
              <strong>Setembre</strong> és possiblement el millor mes per a aquesta ruta: aigua calenta, cales
              tranquil·les, condicions de navegació perfectes i els canals de Santa Margarida en la seva versió
              més residencial i autèntica, quan la temporada turística s&apos;ha calmat però l&apos;estiu encara
              no s&apos;ha acabat.
            </p>

            <hr className="my-12 border-slate-200" />

            {/* FAQ Section */}
            <h2 className="!mt-0">Preguntes freqüents</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="!mt-0 !mb-3 font-bold text-xl text-slate-900">{faq.question}</h3>
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
                  href="/ca/canals-santa-margarida/que-veure"
                  className="text-sky-600 hover:underline"
                >
                  Què veure als canals de Santa Margarida des de l&apos;aigua
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
            </ul>
          </div>
        </article>

        {/* Silo Navigation */}
        <SiloNavBlock silo="canales" lang="ca" currentPath="/ca/canals-santa-margarida/ruta-cap-de-creus" />
      </main>
    </>
  );
}
