import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Image from 'next/image';
import Link from 'next/link';
import { Anchor, Euro, Shield, Sparkles, Users } from 'lucide-react';
import ReviewsSection from '@/components/pillar-experiencias/ReviewsSection';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Excursions privades en vaixell a Roses',
  description:
    'Excursions privades en vaixell des de Roses amb patró inclòs. Cap de Creus, cales verges i badia de Roses. Només el vostre grup a bord. Reserveu en línia.',
  keywords: [
    'excursions privades vaixell Roses',
    'lloguer vaixell amb patró Roses',
    'excursió Cap de Creus en vaixell',
  ],
  alternates: buildAlternates('expPrivate', 'ca'),
  openGraph: {
    title: 'Excursions privades en vaixell a Roses',
    description:
      'Excursions privades en vaixell des de Roses amb patró inclòs. Cap de Creus, cales verges i badia de Roses. Només el vostre grup a bord.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/excursions-privades',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
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
    q: 'Cal llicència nàutica per participar en una excursió?',
    a: 'No. En les excursions privades amb patró, un dels nostres patrons porta l’embarcació. Els participants no necessiten cap titulació nàutica — només ganes de gaudir del mar.',
  },
  {
    q: 'Puc reservar una excursió privada per a un aniversari o esdeveniment especial?',
    a: 'Sí. Les excursions privades són perfectes per a celebracions, comiats de solter, aniversaris o qualsevol esdeveniment que vulgueu fer especial. Consulteu-nos i adaptem la sortida a l’ocasió.',
  },
  {
    q: 'Podem portar menjar i beguda al vaixell?',
    a: 'Sí. Podeu portar el que vulgueu per al dia. Recomanem una nevera amb begudes fresques, protecció solar i roba de bany. Nosaltres hi posem el vaixell, el patró i la ruta.',
  },
  {
    q: 'Què passa si fa mal temps el dia de l’excursió?',
    a: 'Monitoritzem la previsió meteorològica cada dia. Si les condicions no són segures per sortir, avisem amb la màxima antelació possible, cancel·lem sense cost i cerquem amb vosaltres una data alternativa.',
  },
  {
    q: 'És apta per a infants petits?',
    a: 'Sí. Les excursions privades són especialment còmodes per a famílies amb infants perquè la ruta i el ritme s’adapten completament al grup. Disposem d’armilles salvavides per a totes les edats.',
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
    '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/excursions-privades',
    name: 'Excursions privades en vaixell a Roses amb patró',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/excursions-privades',
    description:
      'Excursió privada en vaixell pel Cap de Creus, cales i badia de Roses. Patró inclòs, ruta adaptada al grup. Mig dia o dia complet.',
    duration: 'PT4H',
    inLanguage: 'ca',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
    },
    availableLanguage: [
      { '@type': 'Language', name: 'Spanish' },
      { '@type': 'Language', name: 'French' },
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',
      price: 300,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://www.experienceboat.es/reservas',
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
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiències en vaixell a Roses',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Excursions privades en vaixell a Roses',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/excursions-privades',
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

export default function ExcursionsPrivadesVaixellRosesPage() {
  return (
    <>
      <FAQSchema />
      <TouristTripSchema />
      <BreadcrumbSchema />

      <main id="main-content" className="bg-white">
        <section className="relative min-h-[52vh] flex items-end bg-slate-900">
          <Image
            src="/images/experiencias/excursiones-privadas-hero.webp"
            alt="Excursió privada en vaixell fondejat sobre aigües turquesa en una cala del Cap de Creus, Roses"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 w-full">
            <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-3">
              <Link href="/ca/experiencies-vaixell-roses" className="hover:underline">
                Experiències en vaixell
              </Link>
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Excursions privades en vaixell a Roses
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
              Descobriu la Costa Brava nord des del mar sense preocupar-vos de res més que gaudir. A
              Experience Boat oferim excursions privades en vaixell des de Roses amb patró inclòs:
              Tomàs o Max porten el timó, coneixen cada cala i cada ruta, i s’adapten al ritme i a les
              preferències del vostre grup. Sortim des dels{' '}
              <Link href="/ca/canals-santa-margarida" className="text-sky-300 hover:underline">
                canals de Santa Margarida
              </Link>{' '}
              cap a la badia de Roses, el Parc Natural del Cap de Creus i les cales més espectaculars
              de la Costa Brava nord.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/ca/reserves"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-lg transition-all"
              >
                Reservar
              </Link>
              <a
                href="https://wa.me/34623995700?text=Hola%2C%20m%27interessen%20les%20excursions%20privades%20en%20vaixell%20a%20Roses"
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
          <section id="serveis" aria-labelledby="h-serveis">
            <h2 id="h-serveis" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Les nostres excursions des de Roses
            </h2>
            <p className="mb-8">
              Totes les sortides són privades. L’embarcació és exclusivament per al vostre grup — sense
              compartir espai amb altres clients, sense horaris rígids i amb la ruta adaptada al que
              vulgueu veure.
            </p>

            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <article className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src="/boats/orange-kiwi-620/orange-kiwi-620-hero.webp"
                    alt="Semirígida amb patró — Orange Kiwi 620"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Semirígides amb patró</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Ex.: Orange Kiwi 620 — fins a 11 persones. Ideal per a grups que cerquen comoditat i
                    estabilitat.
                  </p>
                  <ul className="text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      Capacitat habitual: fins a 11 pax
                    </li>
                    <li className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-sky-600 shrink-0" />
                      Mig dia: 300 € · Dia complet: 600 €
                    </li>
                  </ul>
                  <Link
                    href="/ca/reserves"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Reservar
                  </Link>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src="/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-hero.webp"
                    alt="Llanxa amb patró — Spirit of the Sea 675"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Llanxa amb patró</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Embarcació premium — màxima comoditat per a jornades llargues al Cap de Creus.
                  </p>
                  <ul className="text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      Capacitat: consultar segons model
                    </li>
                    <li className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-sky-600 shrink-0" />
                      Mig dia: 600 € · Dia complet: 1.200 €
                    </li>
                  </ul>
                  <Link
                    href="/ca/reserves"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Reservar
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <section aria-labelledby="h-destins">
            <h2 id="h-destins" className="text-3xl font-serif font-bold text-slate-900 mb-4">
              On aneu en les nostres excursions?
            </h2>
            <p className="mb-8">
              No hi ha una ruta fixa. Cada sortida s’adapta al vostre grup, al temps disponible i al que
              vulgueu veure. Aquests són els destins més habituals des de Roses:
            </p>

            <h3 id="cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Cap de Creus
            </h3>
            <p>
              El Parc Natural del Cap de Creus és el destí estrella de la zona i el que més es repeteix
              a les ressenyes dels nostres clients. Des de l’aigua, el paisatge canvia completament:
              penya-segats volcànics, cales d’accés exclusiu per mar i una llum mediterrània que en
              fotografia no té igual. A uns 45-60 minuts des de Santa Margarida segons les condicions.
            </p>

            <h3 id="cales-cap-de-creus" className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Cales del Cap de Creus
            </h3>
            <p>
              El Cap de Creus amaga algunes de les cales més verges de tota la Costa Brava. Cala Culip,
              Cala Jugadora, Cala Fredosa — cales que no surten a les guies turístiques genèriques perquè
              només s’hi arriba en vaixell. Tomàs i Max saben quines valen la pena segons l’època de
              l’any i les condicions del mar.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Badia de Roses</h3>
            <p>
              Per a grups que prefereixen aigües més tranquil·les o sortides amb infants petits, la{' '}
              <Link href="/ca" className="text-sky-600 hover:underline font-medium">
                badia de Roses
              </Link>{' '}
              ofereix parades increïbles sense necessitat d’allunyar-se gaire. Cala Canyelles Petites i
              Cala Almadrava són dues de les més valorades i estan a pocs minuts del punt de sortida.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Canals de Santa Margarida</h3>
            <p>
              La mateixa sortida ja és una experiència. Els{' '}
              <Link href="/ca/canals-santa-margarida" className="text-sky-600 hover:underline">
                canals de Santa Margarida
              </Link>{' '}
              — cases davant de l’aigua, ambient únic — són l’escenari d’inici de totes les nostres
              excursions. Molts clients demanen aturar-se a explorar els canals abans de sortir a mar
              obert.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Com és una excursió amb Experience Boat?
            </h2>
            <p className="mb-4">
              Perquè us en feu una idea real de com funciona una sortida, així és com transcorre
              habitualment una excursió de dia complet:
            </p>
            <p>
              Quedem al punt de trobada a la Marina de Santa Margarida a l’hora acordada. Tomàs o Max us
              reben, us expliquen el vaixell i us preguntem què voleu veure. Si teniu preferències de
              ruta, les incorporem. Si preferiu que us sorprenguem, proposem nosaltres. Sortim pels
              canals cap a la badia i des d’allà tracem rumb segons el pla.
            </p>
            <p>
              Durant la sortida hi ha parades per al bany a cales, temps lliure a l’aigua i flexibilitat
              total per ajustar la ruta si trobeu alguna cosa que us agrada. El retorn l’acordem amb
              vosaltres — no hi ha hora fixa mentre sigueu dins del temps contractat.
            </p>
          </section>

          <section className="rounded-2xl bg-sky-50 border border-sky-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Tot privat — cap desconegut a bord
            </h2>
            <p className="mb-4">
              Aquesta és la diferència més important respecte a les excursions compartides que ofereixen
              altres empreses de la zona. Quan reserveu amb Experience Boat, l’embarcació és
              exclusivament per al vostre grup. Sense turistes desconeguts, sense ruta decidida per
              majoria, sense esperar que altres pugin o baixin.
            </p>
            <p>
              Per a famílies amb infants és especialment rellevant: podeu aturar-vos quan vulgueu,
              banyar-vos amb calma i adaptar el ritme al dels més petits. Per a grups d’amics, vol dir
              que podeu gaudir del dia a la vostra manera sense condicionants.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Informació pràctica de les excursions
            </h2>
            <dl className="space-y-6 text-base">
              <div>
                <dt className="font-bold text-slate-900">Quantes persones poden venir?</dt>
                <dd className="mt-1">
                  Segons l’embarcació, entre 6 i 12 persones. Si sou un grup més nombrós, consulteu-nos
                  — cerquem la solució més adequada.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Quant dura l’excursió?</dt>
                <dd className="mt-1">
                  Oferim excursions de mig dia (aproximadament 4 hores) i dia complet (aproximadament 8
                  hores). La durada exacta s’acorda en la reserva.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Què inclou l’excursió?</dt>
                <dd className="mt-1">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Patró amb coneixement de la zona (Tomàs o Max)</li>
                    <li>Embarcació privada per al vostre grup</li>
                    <li>Combustible</li>
                    <li>Equipament de seguretat reglamentari</li>
                    <li>Parades per al bany amb escala d’accés a l’aigua</li>
                    <li>Recomanacions de ruta personalitzades</li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Amb quina antelació cal reservar?</dt>
                <dd className="mt-1">
                  Al juliol i a l’agost recomanem reservar amb almenys dues setmanes. En temporada
                  mitjana, amb 48-72 hores sol ser suficient.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Es pot personalitzar la ruta?</dt>
                <dd className="mt-1">
                  Sí, completament. Abans de sortir parlem amb vosaltres, recollim les vostres
                  preferències i construïm la ruta a partir d’aquí. Si hi ha cales concretes que voleu
                  visitar, intentem incloure-les sempre que les condicions del mar ho permetin.
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              Per què triar una excursió privada amb Experience Boat?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 not-prose">
              {[
                {
                  icon: Users,
                  title: 'Patró local, no guia turístic',
                  text: 'Tomàs i Max són patrons amb un tracte proper que coneixen la zona de primera mà. No reciten un guió — s’adapten a vosaltres i us porten als llocs que realment valen la pena.',
                },
                {
                  icon: Shield,
                  title: 'Privacitat total',
                  text: 'L’embarcació és només per al vostre grup. Sense compartir espai, sense rutes prefixades, sense dependre d’altres.',
                },
                {
                  icon: Sparkles,
                  title: 'Zona de referència',
                  text: 'El Cap de Creus i la badia de Roses són dos dels entorns naturals més singulars de la Mediterrània. Des de l’aigua es descobreixen racons que des de terra són inaccessibles.',
                },
                {
                  icon: Anchor,
                  title: 'Sortida des dels canals',
                  text: 'El punt de partida ja és diferent. Els canals de Santa Margarida són un escenari únic que no trobareu en cap altra empresa de la zona.',
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
              Preferiu portar vosaltres el vaixell?
            </h2>
            <p className="mb-6">
              Si teniu llicència de navegació i voleu la llibertat de traçar la vostra pròpia ruta sense
              patró, també tenim aquesta opció.
            </p>
            <Link
              href="/ca/lloguer-vaixell-amb-llicencia-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline mb-8"
            >
              Veure lloguer de vaixell amb llicència →
            </Link>
            <p className="mb-6">
              No teniu llicència però voleu explorar pel vostre compte? Les nostres embarcacions sense
              llicència són perfectes per a sortides autònomes per la badia i els canals.
            </p>
            <Link
              href="/ca/lloguer-vaixell-sense-llicencia-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline"
            >
              Veure embarcacions sense llicència →
            </Link>
          </section>
        </div>

        <ReviewsSection />

        <SiloNavBlock lang="ca" />

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            On trobar-nos — Marina de Santa Margarida, Roses
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            Som a l’entrada de Roses, a l’inici de la Marina de Santa Margarida. Fàcil de trobar i amb
            aparcament a prop.
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
              title="Marina de Santa Margarida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.0003058869874!2d3.131753476686036!3d42.27139617119857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba2e8f192911cb%3A0xcb1b7026df21a221!2sAv.%20Clot%20Franquest%20Nord%2C%2017480%20Roses%2C%20Girona!5e0!3m2!1sca!2ses!4v1700000000000!5m2!1sca!2ses"
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
              Preguntes freqüents
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
          <h2 className="text-xl font-bold text-slate-900 mb-4">Enllaços d’interès</h2>
          <ul className="space-y-2 text-sky-600">
            <li>
              <Link href="/ca/experiencies-vaixell-roses/canal-tour-santa-margarida" className="hover:underline">
                Canal Tour Santa Margarida
              </Link>
            </li>
            <li>
              <Link href="/ca/lloguer-vaixell-amb-llicencia-roses" className="hover:underline">
                Lloguer de vaixell amb llicència a Roses
              </Link>
            </li>
            <li>
              <Link href="/ca/lloguer-vaixell-sense-llicencia-roses" className="hover:underline">
                Embarcacions sense llicència
              </Link>
            </li>
            <li>
              <Link href="/ca/canals-santa-margarida" className="hover:underline">
                Canals de Santa Margarida
              </Link>
            </li>
            <li>
              <Link href="/ca/canals-santa-margarida/ruta-cap-de-creus" className="hover:underline">
                Parc Natural del Cap de Creus
              </Link>
            </li>
            <li>
              <Link href="/ca" className="hover:underline">
                Badia de Roses
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <StickyMobileCTA lang="ca" />
    </>
  );
}
