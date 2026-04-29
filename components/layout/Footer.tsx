import Link from 'next/link';
import { getBarcosActivos } from '@/lib/data/fleet';
import CookieSettingsLink from '@/components/layout/CookieSettingsLink';

export default function Footer() {
  const activos = getBarcosActivos();
  const sinLicencia = activos.filter(b => b.categoria === 'sin-licencia');
  const conLicencia = activos.filter(b => b.categoria === 'con-licencia');

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 lg:py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/alquiler-barco-sin-licencia-roses" className="hover:text-white transition-colors">
                  Alquiler de barco sin licencia
                </Link>
              </li>
              <li>
                <Link href="/alquiler-barco-con-licencia-roses" className="hover:text-white transition-colors">
                  Alquiler de barco con licencia
                </Link>
              </li>
              <li>
                <Link href="/alquiler-barco-con-licencia-roses/lancha-costa-brava" className="hover:text-white transition-colors">
                  Lancha
                </Link>
              </li>
            </ul>
          </div>

          {/* Barcos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Barcos</h3>
            <ul className="space-y-3">
              {conLicencia.map(b => (
                <li key={b.slug}><span className="cursor-default">{b.nombre}</span></li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-widest text-gray-600 mt-5 mb-3">Sin licencia</p>
            <ul className="space-y-3">
              {sinLicencia.map(b => (
                <li key={b.slug}><span className="cursor-default">{b.nombre}</span></li>
              ))}
            </ul>
          </div>

          {/* Experiencias */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Experiencias</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/experiencias-barco-roses/excursiones-privadas" className="hover:text-white transition-colors">
                  Excursión privada
                </Link>
              </li>
              <li>
                <Link href="/experiencias-barco-roses/sunset-experience" className="hover:text-white transition-colors">
                  Sunset Experience
                </Link>
              </li>
              <li>
                <Link href="/experiencias-barco-roses/canal-tour-santa-margarita" className="hover:text-white transition-colors">
                  Canal Tour Santa Margarita
                </Link>
              </li>
              <li>
                <Link href="/experiencias-barco-roses/cap-de-creus-calas" className="hover:text-white transition-colors">
                  Cap de Creus — 3 Calas
                </Link>
              </li>
              <li>
                <Link href="/experiencias-barco-roses/cadaques" className="hover:text-white transition-colors">
                  Excursión a Cadaqués
                </Link>
              </li>
              <li>
                <Link href="/experiencias-barco-roses/cuevas-snorkel" className="hover:text-white transition-colors">
                  Cuevas & Snorkel
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa (+ enlaces informativos) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-4">
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
            <ul className="space-y-4 mt-4 pt-4 border-t border-gray-800/80">
              <li>Tel: <a href="tel:+34623995700" className="hover:text-white transition-colors">+34 623 99 57 00</a></li>
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
              <li>Roses, Costa Brava</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-center sm:text-left">© 2025 Experience Boat · Roses, Costa Brava</p>
            <div className="flex gap-4 justify-center sm:justify-end shrink-0">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/experience.boat/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Instagram de Experience Boat"
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
              aria-label="TikTok de Experience Boat"
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

          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-500"
            aria-label="Enlaces legales"
          >
            <Link href="/politica-privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <CookieSettingsLink className="hover:text-white transition-colors underline-offset-2 hover:underline">
              Configurar cookies
            </CookieSettingsLink>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/accesibilidad" className="hover:text-white transition-colors">
              Accesibilidad
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/fr" hrefLang="fr" className="hover:text-white transition-colors">
              Version française
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/en" hrefLang="en" className="hover:text-white transition-colors">
              English version
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/fr/a-propos" hrefLang="fr" className="hover:text-white transition-colors">
              À propos
            </Link>
            <span className="text-gray-600 select-none" aria-hidden>·</span>
            <Link href="/en/about" hrefLang="en" className="hover:text-white transition-colors">
              About us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
