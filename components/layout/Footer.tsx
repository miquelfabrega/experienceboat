import Link from 'next/link';
import { getBarcosActivos } from '@/lib/data/fleet';
import CookieSettingsLink from '@/components/layout/CookieSettingsLink';
import FooterLanguageSelector from '@/components/layout/FooterLanguageSelector';

type Lang = 'es' | 'fr' | 'en' | 'ca';

type LinkItem = { label: string; href: string };

interface FooterCopy {
  servicesTitle: string;
  services: LinkItem[];
  boatsTitle: string;
  sinLicenciaLabel: string;
  experiencesTitle: string;
  experiences: LinkItem[];
  companyTitle: string;
  company: LinkItem[];
  phoneLabel: string;
  location: string;
  contactInfoTitle?: string;
  legal: LinkItem[];
  cookieSettings: string;
  rightsLine: string;
}

// Ficha de barco por idioma: ES y CA tienen ficha individual; FR/EN no, así
// que sus nombres de barco enlazan al índice de flota (rutas que sí existen).
const boatHref = (lang: Lang, slug: string): string =>
  lang === 'es' ? `/barcos/${slug}`
  : lang === 'ca' ? `/ca/embarcacions/${slug}`
  : lang === 'fr' ? '/fr/bateaux'
  : '/en/boats';

const COPY: Record<Lang, FooterCopy> = {
  es: {
    servicesTitle: 'Servicios',
    services: [
      { label: 'Alquiler de barco sin licencia', href: '/alquiler-barco-sin-licencia-roses' },
      { label: 'Alquiler de barco con licencia', href: '/alquiler-barco-con-licencia-roses' },
      { label: 'Lancha', href: '/alquiler-barco-con-licencia-roses/lancha-costa-brava' },
      { label: 'Precios y temporadas', href: '/precios-alquiler-barco-roses' },
      { label: 'Canales Santa Margarita', href: '/canales-santa-margarita' },
    ],
    boatsTitle: 'Barcos',
    sinLicenciaLabel: 'Sin licencia',
    experiencesTitle: 'Experiencias',
    experiences: [
      { label: 'Excursión privada', href: '/experiencias-barco-roses/excursiones-privadas' },
      { label: 'Sunset Experience', href: '/experiencias-barco-roses/sunset-experience' },
      { label: 'Canal Tour Santa Margarita', href: '/experiencias-barco-roses/canal-tour-santa-margarita' },
      { label: 'Cap de Creus — 3 Calas', href: '/experiencias-barco-roses/cap-de-creus-calas' },
      { label: 'Excursión a Cadaqués', href: '/experiencias-barco-roses/cadaques' },
      { label: 'Cuevas & Snorkel', href: '/experiencias-barco-roses/cuevas-snorkel' },
      { label: 'Alquiler de lancha en Roses', href: '/alquiler-lancha-roses' },
    ],
    companyTitle: 'Empresa',
    company: [
      { label: 'Contacto', href: '/contacto' },
      { label: 'Sobre nosotros', href: '/sobre-nosotros' },
      { label: 'Blog', href: '/blog' },
    ],
    phoneLabel: 'Tel',
    location: 'Roses, Costa Brava',
    legal: [
      { label: 'Política de privacidad', href: '/politica-privacidad' },
      { label: 'Aviso legal', href: '/aviso-legal' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Accesibilidad', href: '/accesibilidad' },
    ],
    cookieSettings: 'Configurar cookies',
    rightsLine: '© 2025 Experience Boat · Roses, Costa Brava',
  },
  ca: {
    servicesTitle: 'Serveis',
    services: [
      { label: 'Lloguer de vaixell sense llicència', href: '/ca/lloguer-vaixell-sense-llicencia-roses' },
      { label: 'Lloguer de vaixell amb llicència', href: '/ca/lloguer-vaixell-amb-llicencia-roses' },
      { label: 'Llanxa', href: '/ca/lloguer-vaixell-amb-llicencia-roses/llanxa-costa-brava' },
      { label: 'Preus i temporades', href: '/ca/preus-lloguer-vaixell-roses' },
      { label: 'Canals Santa Margarida', href: '/ca/canals-santa-margarida' },
    ],
    boatsTitle: 'Embarcacions',
    sinLicenciaLabel: 'Sense llicència',
    experiencesTitle: 'Experiències',
    experiences: [
      { label: 'Excursió privada', href: '/ca/experiencies-vaixell-roses/excursions-privades' },
      { label: 'Sunset Experience', href: '/ca/experiencies-vaixell-roses/sunset-experience' },
      { label: 'Canal Tour Santa Margarida', href: '/ca/experiencies-vaixell-roses/canal-tour-santa-margarida' },
      { label: 'Cap de Creus — 3 Cales', href: '/ca/experiencies-vaixell-roses/cap-de-creus-cales' },
      { label: 'Excursió a Cadaqués', href: '/ca/experiencies-vaixell-roses/cadaques' },
      { label: 'Coves & Snorkel', href: '/ca/experiencies-vaixell-roses/coves-esnorquel' },
      { label: 'Lloguer de llanxa a Roses', href: '/ca/lloguer-llanxa-roses' },
    ],
    companyTitle: 'Empresa',
    company: [
      { label: 'Contacte', href: '/ca/contacte' },
      { label: 'Sobre nosaltres', href: '/ca/sobre-nosaltres' },
      { label: 'Blog', href: '/ca/blog' },
    ],
    phoneLabel: 'Tel',
    location: 'Roses, Costa Brava',
    legal: [
      { label: 'Política de privacitat', href: '/politica-privacidad' },
      { label: 'Avís legal', href: '/aviso-legal' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Accessibilitat', href: '/accesibilidad' },
    ],
    cookieSettings: 'Configurar cookies',
    rightsLine: '© 2025 Experience Boat · Roses, Costa Brava',
  },
  fr: {
    servicesTitle: 'Services',
    services: [
      { label: 'Location de bateau sans permis', href: '/fr/location-bateau-sans-permis-roses' },
      { label: 'Location de bateau avec permis', href: '/fr/location-bateau-avec-permis-roses' },
      { label: 'Vedette', href: '/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage' },
      { label: 'Tarifs et saisons', href: '/fr/tarifs-location-bateau-roses' },
      { label: 'Canaux Santa Margarita', href: '/fr/canaux-santa-margarita' },
    ],
    boatsTitle: 'Bateaux',
    sinLicenciaLabel: 'Sans permis',
    experiencesTitle: 'Expériences',
    experiences: [
      { label: 'Excursion privée', href: '/fr/experiences-bateau-roses/excursions-privees' },
      { label: 'Sunset Experience', href: '/fr/experiences-bateau-roses/sunset-experience' },
      { label: 'Canal Tour Santa Margarita', href: '/fr/experiences-bateau-roses/canal-tour-santa-margarita' },
      { label: 'Cap de Creus — Criques', href: '/fr/experiences-bateau-roses/cap-de-creus-criques' },
      { label: 'Excursion à Cadaqués', href: '/fr/experiences-bateau-roses/cadaques' },
      { label: 'Grottes & Snorkeling', href: '/fr/experiences-bateau-roses/grottes-snorkeling' },
      { label: 'Location de vedette à Roses', href: '/fr/location-vedette-roses' },
    ],
    companyTitle: 'Entreprise',
    company: [
      { label: 'Contact', href: '/fr/contact' },
      { label: 'À propos', href: '/fr/a-propos' },
      { label: 'Blog', href: '/fr/blog' },
    ],
    phoneLabel: 'Tél',
    location: 'Roses, Costa Brava',
    legal: [
      { label: 'Politique de confidentialité', href: '/politica-privacidad' },
      { label: 'Mentions légales', href: '/aviso-legal' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Accessibilité', href: '/accesibilidad' },
    ],
    cookieSettings: 'Configurer les cookies',
    rightsLine: '© 2025 Experience Boat · Roses, Costa Brava',
  },
  en: {
    servicesTitle: 'Services',
    services: [
      { label: 'Boat rental without licence', href: '/en/boat-rental-without-licence-roses' },
      { label: 'Boat rental with licence', href: '/en/boat-rental-with-licence-roses' },
      { label: 'Motorboat', href: '/en/boat-rental-with-licence-roses/motorboat-costa-brava' },
      { label: 'Prices & seasons', href: '/en/boat-rental-prices-roses' },
      { label: 'Santa Margarita Canals', href: '/en/santa-margarita-canals-roses' },
    ],
    boatsTitle: 'Boats',
    sinLicenciaLabel: 'Without licence',
    experiencesTitle: 'Experiences',
    experiences: [
      { label: 'Private excursion', href: '/en/boat-experiences-roses/private-excursions' },
      { label: 'Sunset Experience', href: '/en/boat-experiences-roses/sunset-experience' },
      { label: 'Canal Tour Santa Margarita', href: '/en/boat-experiences-roses/canal-tour-santa-margarita' },
      { label: 'Cap de Creus — Coves', href: '/en/boat-experiences-roses/cap-de-creus-coves' },
      { label: 'Trip to Cadaqués', href: '/en/boat-experiences-roses/cadaques' },
      { label: 'Caves & Snorkeling', href: '/en/boat-experiences-roses/caves-snorkeling' },
      { label: 'Motorboat rental in Roses', href: '/en/motorboat-rental-roses' },
    ],
    companyTitle: 'Company',
    company: [
      { label: 'Contact', href: '/en/contact' },
      { label: 'About us', href: '/en/about' },
      { label: 'Blog', href: '/en/blog' },
    ],
    phoneLabel: 'Phone',
    location: 'Roses, Costa Brava',
    legal: [
      { label: 'Privacy policy', href: '/politica-privacidad' },
      { label: 'Legal notice', href: '/aviso-legal' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Accessibility', href: '/accesibilidad' },
    ],
    cookieSettings: 'Cookie settings',
    rightsLine: '© 2025 Experience Boat · Roses, Costa Brava',
  },
};

export default function Footer({ lang = 'es' }: { lang?: Lang }) {
  const t = COPY[lang];
  const activos = getBarcosActivos();
  const sinLicencia = activos.filter((b) => b.categoria === 'sin-licencia');
  const conLicencia = activos.filter((b) => b.categoria === 'con-licencia');

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 lg:py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.servicesTitle}</h3>
            <ul className="space-y-4">
              {t.services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Barcos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.boatsTitle}</h3>
            <ul className="space-y-3">
              {conLicencia.map((b) => (
                <li key={b.slug}>
                  <Link href={boatHref(lang, b.slug)} className="hover:text-white transition-colors">
                    {b.nombre}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-widest text-gray-600 mt-5 mb-3">{t.sinLicenciaLabel}</p>
            <ul className="space-y-3">
              {sinLicencia.map((b) => (
                <li key={b.slug}>
                  <Link href={boatHref(lang, b.slug)} className="hover:text-white transition-colors">
                    {b.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiencias */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.experiencesTitle}</h3>
            <ul className="space-y-3">
              {t.experiences.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="hover:text-white transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa (+ contacto) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t.companyTitle}</h3>
            <ul className="space-y-4">
              {t.company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 mt-4 pt-4 border-t border-gray-800/80">
              <li>{t.phoneLabel}: <a href="tel:+34623995700" className="hover:text-white transition-colors">+34 623 99 57 00</a></li>
              <li>
                <a
                  href="https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20barcos%20en%20Roses"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="hover:text-white transition-colors text-[#25D366]"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="mailto:info@experienceboat.es" className="hover:text-white transition-colors">info@experienceboat.es</a></li>
              <li>{t.location}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-center sm:text-left">{t.rightsLine}</p>
            <div className="flex gap-4 justify-center sm:justify-end shrink-0">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/experience.boat/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@experience.boat/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>

            </div>
          </div>

          {/* Legales */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-500"
            aria-label={t.companyTitle}
          >
            {t.legal.map((l, i) => (
              <span key={l.href} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-gray-600 select-none" aria-hidden>·</span>}
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </span>
            ))}
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <CookieSettingsLink className="hover:text-white transition-colors underline-offset-2 hover:underline">
              {t.cookieSettings}
            </CookieSettingsLink>
          </nav>

          {/* Selector de idioma */}
          <FooterLanguageSelector lang={lang} />
        </div>
      </div>
    </footer>
  );
}
