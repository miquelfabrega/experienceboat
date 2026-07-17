'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type Lang = 'es' | 'fr' | 'en' | 'ca';

const ui: Record<Lang, {
  all: string; noLicence: string; withLicence: string;
  h1: string; lead: string; availability: string;
  introWith: string; introNo: string; introPremium: string;
  ctaTitle: string; ctaLead: string; ctaContact: string; ctaExperiences: string;
  ctaContactHref: string; ctaExpHref: string;
  siloTitle1: string; siloDesc1: string; siloCta1: string; siloHref1: string;
  siloTitle2: string; siloDesc2: string; siloCta2: string; siloHref2: string;
}> = {
  es: {
    all: 'Todos', noLicence: 'Sin licencia', withLicence: 'Con licencia',
    h1: 'Elige tu barco',
    lead: 'Toda nuestra flota disponible en Roses, desde los canales de Santa Margarita hasta el Cap de Creus. Con licencia o sin ella.',
    availability: 'Ver disponibilidad',
    introWith: 'Para patrón con titulación. Navegación libre por la bahía de Roses y la Costa Brava.',
    introNo: 'No necesitas titulación. Ideal para los canales de Santa Margarita y la bahía de Roses.',
    introPremium: 'Para quienes buscan algo más. Espacio, potencia y una experiencia distinta en el Mediterráneo.',
    ctaTitle: '¿No sabes qué barco se adapta mejor a tu plan?',
    ctaLead: 'Llámanos o escríbenos. En cinco minutos te decimos qué coger, para cuántas personas y a qué precio.',
    ctaContact: 'Contactar', ctaContactHref: '/contacto',
    ctaExperiences: 'Excursiones privadas con patrón en Roses', ctaExpHref: '/experiencias-barco-roses',
    siloTitle1: 'Alquiler de barco sin licencia en Roses',
    siloDesc1: 'Navega por los canales de Santa Margarita y la bahía de Roses sin necesitar titulación. Ideal para familias y parejas.',
    siloCta1: 'Ver opciones sin licencia', siloHref1: '/alquiler-barco-sin-licencia-roses',
    siloTitle2: 'Alquiler de barco con licencia en Roses',
    siloDesc2: 'Navegación libre por la bahía de Roses y la Costa Brava. Rutas al Cap de Creus, lancha rápida y mucho más.',
    siloCta2: 'Ver opciones con licencia', siloHref2: '/alquiler-barco-con-licencia-roses',
  },
  fr: {
    all: 'Tous', noLicence: 'Sans permis', withLicence: 'Avec permis',
    h1: 'Choisissez votre bateau',
    lead: 'Toute notre flotte disponible à Roses, des canaux de Santa Margarita jusqu\'au Cap de Creus. Avec ou sans permis.',
    availability: 'Voir les disponibilités',
    introWith: 'Pour les patrons titulaires d\'un permis. Navigation libre dans la baie de Roses et sur la Costa Brava.',
    introNo: 'Aucun permis nécessaire. Idéal pour les canaux de Santa Margarita et la baie de Roses.',
    introPremium: 'Pour ceux qui veulent quelque chose de plus. Espace, puissance et une expérience unique en Méditerranée.',
    ctaTitle: 'Vous ne savez pas quel bateau correspond le mieux à votre projet ?',
    ctaLead: 'Appelez-nous ou écrivez-nous. En cinq minutes, on vous dit quel bateau choisir, pour combien de personnes et à quel prix.',
    ctaContact: 'Nous contacter', ctaContactHref: '/fr/contact',
    ctaExperiences: 'Voir les excursions avec patron', ctaExpHref: '/fr/experiences-bateau-roses',
    siloTitle1: 'Location de bateau sans permis à Roses',
    siloDesc1: 'Naviguez dans les canaux de Santa Margarita et la baie de Roses sans permis nautique. Idéal pour familles et couples.',
    siloCta1: 'Voir les bateaux sans permis', siloHref1: '/fr/location-bateau-sans-permis-roses',
    siloTitle2: 'Location de bateau avec permis à Roses',
    siloDesc2: 'Navigation libre dans la baie de Roses et sur la Costa Brava. Routes vers le Cap de Creus et bien plus.',
    siloCta2: 'Voir les bateaux avec permis', siloHref2: '/fr/location-bateau-avec-permis-roses',
  },
  en: {
    all: 'All', noLicence: 'No licence', withLicence: 'With licence',
    h1: 'Choose your boat',
    lead: 'Our full fleet available in Roses, from the Santa Margarita canals to Cap de Creus. With a licence or without.',
    availability: 'Check availability',
    introWith: 'For licensed skippers. Free navigation across the Bay of Roses and the Costa Brava.',
    introNo: 'No licence required. Perfect for the Santa Margarita canals and the Bay of Roses.',
    introPremium: 'For those who want something more. Space, power and a different experience on the Mediterranean.',
    ctaTitle: 'Not sure which boat suits your plan best?',
    ctaLead: 'Call us or send us a message. In five minutes we\'ll tell you which one to pick, for how many people, and at what price.',
    ctaContact: 'Contact us', ctaContactHref: '/en/contact',
    ctaExperiences: 'See skippered boat trips', ctaExpHref: '/en/boat-experiences-roses',
    siloTitle1: 'Boat rental without licence in Roses',
    siloDesc1: 'Explore the Santa Margarita canals and Bay of Roses — no nautical licence needed. Perfect for families and couples.',
    siloCta1: 'See no-licence boats', siloHref1: '/en/boat-rental-without-licence-roses',
    siloTitle2: 'Boat rental with licence in Roses',
    siloDesc2: 'Free navigation across the Bay of Roses and Costa Brava. Routes to Cap de Creus and much more.',
    siloCta2: 'See boats with licence', siloHref2: '/en/boat-rental-with-licence-roses',
  },
  ca: {
    all: 'Tots', noLicence: 'Sense llicència', withLicence: 'Amb llicència',
    h1: 'Trieu la vostra embarcació',
    lead: 'Tota la nostra flota disponible a Roses, des dels canals de Santa Margarida fins al Cap de Creus. Amb llicència o sense.',
    availability: 'Veure disponibilitat',
    introWith: 'Per a patró amb titulació. Navegació lliure per la badia de Roses i la Costa Brava.',
    introNo: 'No necessiteu titulació. Ideal per als canals de Santa Margarida i la badia de Roses.',
    introPremium: 'Per a qui busca alguna cosa més. Espai, potència i una experiència diferent al Mediterrani.',
    ctaTitle: 'No sabeu quina embarcació s\'adapta millor al vostre pla?',
    ctaLead: 'Truqueu-nos o escriviu-nos. En cinc minuts us diem quina triar, per a quantes persones i a quin preu.',
    ctaContact: 'Contactar', ctaContactHref: '/ca/contacte',
    ctaExperiences: 'Excursions privades amb patró a Roses', ctaExpHref: '/ca/experiencies-vaixell-roses',
    siloTitle1: 'Lloguer d\'embarcació sense llicència a Roses',
    siloDesc1: 'Navegueu pels canals de Santa Margarida i la badia de Roses sense necessitar titulació. Ideal per a famílies i parelles.',
    siloCta1: 'Veure opcions sense llicència', siloHref1: '/ca/lloguer-vaixell-sense-llicencia-roses',
    siloTitle2: 'Lloguer d\'embarcació amb llicència a Roses',
    siloDesc2: 'Navegació lliure per la badia de Roses i la Costa Brava. Rutes al Cap de Creus, llanxa ràpida i molt més.',
    siloCta2: 'Veure opcions amb llicència', siloHref2: '/ca/lloguer-vaixell-amb-llicencia-roses',
  },
};

// Card id → current active slug in /lib/data/fleet.ts (ES product page).
const ES_SLUG: Record<string, string | null> = {
  'jeanneau-595-reineta': 'jeanneau-595-reineta',
  'orange-kiwi-620': 'orange-kiwi-620',
  'spirit-of-the-sea-675': 'spirit-of-the-sea-675',
  'raf-iv-mano': 'raf-iv-mano',
  'justi-saura-llaut-850': 'justi-saura-llaut-850',
  'remus-450': 'remus-450',
  'marine-brezze-450': 'marine-brezze-450',
  'dream-point-420': 'dream-point-420',
};

const fleetIndexHref = (lang: Lang) =>
  lang === 'fr' ? '/fr/bateaux' : lang === 'en' ? '/en/boats' : lang === 'ca' ? '/ca/embarcacions' : '/barcos';

const boatHref = (id: string, lang: Lang) => {
  const slug = ES_SLUG[id];
  if (!slug) return fleetIndexHref(lang);
  if (lang === 'es') return `/barcos/${slug}`;
  if (lang === 'ca') return `/ca/embarcacions/${slug}`;
  if (lang === 'fr') return `/fr/bateaux/${slug}`;
  if (lang === 'en') return `/en/boats/${slug}`;
  return fleetIndexHref(lang);
};

// Boat data — names and hrefs are language-neutral; category key maps to ui labels
const boatsData = [
  { id: 'jeanneau-595-reineta',  name: 'Reineta (Jeanneau 595)',      cat: 'with', badge: { es: '⭐ Más reservado', fr: '⭐ Le plus réservé', en: '⭐ Most booked', ca: '⭐ El més reservat' }, price: { es: 'Desde 195 € · ½ día', fr: 'À partir de 195 € · ½ journée', en: 'From €195 · ½ day', ca: 'Des de 195 € · ½ jornada' }, href: '/barcos', img: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-drone-01.webp' },
  { id: 'orange-kiwi-620',       name: 'Orange Kiwi 620',             cat: 'with', badge: null,                                                                       price: { es: 'Desde 235 € · ½ día', fr: 'À partir de 235 € · ½ journée', en: 'From €235 · ½ day', ca: 'Des de 235 € · ½ jornada' }, href: '/barcos', img: '/boats/orange-kiwi-620/orange-kiwi-620-drone-01.jpg' },
  { id: 'raf-iv-mano',           name: 'RAF IV Mano 21,5 Sport Fish', cat: 'with', badge: null,                                                                       price: { es: 'Desde 245 € · ½ día', fr: 'À partir de 245 € · ½ journée', en: 'From €245 · ½ day', ca: 'Des de 245 € · ½ jornada' }, href: '/barcos', img: '/boats/raf-iv-mano/raf-iv-mano-hero.webp' },
  { id: 'spirit-of-the-sea-675', name: 'Spirit of the Sea 675',       cat: 'with', badge: null,                                                                       price: { es: 'Desde 260 € · ½ día', fr: 'À partir de 260 € · ½ journée', en: 'From €260 · ½ day', ca: 'Des de 260 € · ½ jornada' }, href: '/barcos', img: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-hero.webp' },
  { id: 'justi-saura-llaut-850', name: 'Justi Saura Llaut 850',       cat: 'with', badge: { es: '⚓ Con patrón', fr: '⚓ Avec patron', en: '⚓ With skipper', ca: '⚓ Amb patró' },        price: { es: 'Desde 290 € · ½ día', fr: 'À partir de 290 € · ½ journée', en: 'From €290 · ½ day', ca: 'Des de 290 € · ½ jornada' }, href: '/barcos', img: '/boats/generic/hero.webp' },
  { id: 'remus-450',             name: 'Remus 450',                   cat: 'no',   badge: { es: '⚡ Ideal canales Santa Margarita', fr: '⚡ Idéal canaux Santa Margarita', en: '⚡ Perfect for Santa Margarita canals', ca: '⚡ Ideal canals Santa Margarida' }, price: { es: 'Desde 90 € · ½ día', fr: 'À partir de 90 € · ½ journée', en: 'From €90 · ½ day', ca: 'Des de 90 € · ½ jornada' }, href: '/barcos', img: '/boats/remus-450/remus-450-exterior-02.webp' },
  { id: 'marine-brezze-450',     name: 'Marine Brezze 450',           cat: 'no',   badge: null,                                                                       price: { es: 'Desde 90 € · ½ día', fr: 'À partir de 90 € · ½ journée', en: 'From €90 · ½ day', ca: 'Des de 90 € · ½ jornada' }, href: '/barcos', img: '/boats/marine-brezze-450/marine-brezze-450-hero.webp' },
  { id: 'dream-point-420',       name: 'Dream Point 420',             cat: 'no',   badge: null,                                                                       price: { es: 'Desde 70 € · ½ día', fr: 'À partir de 70 € · ½ journée', en: 'From €70 · ½ day', ca: 'Des de 70 € · ½ jornada' }, href: '/barcos', img: '/boats/dream-point-420/dream-point-420-hero.webp' },
];

export default function BarcosClient({ lang = 'es' }: { lang?: Lang }) {
  const t = ui[lang];
  const categories = [t.all, t.noLicence, t.withLicence] as const;
  const [active, setActive] = useState<string>(t.all);

  const catKey = (label: string) =>
    label === t.withLicence ? 'with' : label === t.noLicence ? 'no' : null;

  const visibleSections = categories.filter(
    (c) => c !== t.all && (active === t.all || active === c)
  );

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{t.h1}</h1>
          <p className="text-lg md:text-xl text-gray-600">{t.lead}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                  : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listings */}
        <div className="space-y-20">
          {visibleSections.map((section) => {
            const key = catKey(section);
            const sectionBoats = boatsData.filter((b) => b.cat === key);
            const intro = section === t.withLicence ? t.introWith : section === t.noLicence ? t.introNo : t.introPremium;
            if (sectionBoats.length === 0) return null;

            return (
              <section key={section} className="scroll-mt-24" id={section.toLowerCase().replace(/\s/g, '-')}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{section}</h2>
                  <p className="text-gray-600 text-lg">{intro}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {sectionBoats.map((boat) => (
                      <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} key={boat.id}>
                        <Link href={boatHref(boat.id, lang)} className="group block h-full">
                          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                            <div className="relative aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                              <div className="absolute inset-0 bg-sky-900/5 group-hover:bg-transparent transition-colors z-10" />
                              {boat.badge && (
                                <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                  {boat.badge[lang]}
                                </span>
                              )}
                              <Image
                                src={boat.img}
                                alt={boat.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={65}
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                              <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-sky-600 transition-colors">{boat.name}</h3>
                              <div className="mt-auto">
                                <div className="text-gray-900 font-medium mb-5 bg-slate-50 inline-block px-3 py-1.5 rounded-lg text-sm border border-slate-100">{boat.price[lang]}</div>
                                <div className="flex items-center text-sky-600 font-bold text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                                  {t.availability}<ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            );
          })}
        </div>

        {/* Silo links */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: t.siloTitle1, desc: t.siloDesc1, cta: t.siloCta1, href: t.siloHref1, tag: t.noLicence },
            { title: t.siloTitle2, desc: t.siloDesc2, cta: t.siloCta2, href: t.siloHref2, tag: t.withLicence },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="group flex flex-col justify-between bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">{s.tag}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="flex items-center gap-1 mt-6 text-sky-600 font-bold text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                {s.cta} <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-sky-50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-sky-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.ctaTitle}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaLead}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={t.ctaContactHref} className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg">{t.ctaContact}</Link>
            <Link href={t.ctaExpHref} className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-3.5 px-8 rounded-xl transition-all border border-gray-200 shadow-sm hover:shadow-md">{t.ctaExperiences}</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
