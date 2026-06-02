'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Gem } from 'lucide-react';
import type { NavBoat } from './navData';
import { CHROME, EXPERIENCES_MENU } from '@/lib/i18n/chrome';
import { localizedHref, boatHref, type Locale } from '@/lib/i18n/routes';

export function MobileDrawer({
  data,
  lang = 'es',
}: {
  data: { barcosConLicencia: NavBoat[]; barcosSinLicencia: NavBoat[] };
  lang?: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBarcosOpen, setIsBarcosOpen] = useState(false);
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const t = CHROME[lang];
  const expItems = EXPERIENCES_MENU[lang];
  const links = [
    { name: t.canals, href: localizedHref('canals', lang) },
    { name: t.blog, href: localizedHref('blog', lang) },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors"
        aria-label={t.openMenu}
        aria-expanded={isOpen}
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 z-[60] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[340px] bg-[var(--nav-bg-solid)] z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-serif text-xl tracking-widest uppercase text-[var(--megamenu-text)] font-semibold">
            {t.menu}
          </span>
          <button
            onClick={closeMenu}
            className="p-2 -mr-2 text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors"
            aria-label={t.closeMenu}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col">
            {/* Accordion Barcos */}
            <li className="border-b border-gray-100">
              <div className="flex items-stretch w-full">
                <Link
                  href={localizedHref('boatsIndex', lang)}
                  onClick={closeMenu}
                  className="flex-1 flex items-center p-5 text-[15px] font-semibold text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors"
                >
                  {t.boats}
                </Link>
                <button
                  type="button"
                  onClick={() => setIsBarcosOpen(!isBarcosOpen)}
                  className="flex items-center justify-center px-4 text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors shrink-0"
                  aria-expanded={isBarcosOpen}
                  aria-label={isBarcosOpen ? t.collapseBoats : t.expandBoats}
                >
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 opacity-60 ${isBarcosOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 bg-slate-50 ${
                  isBarcosOpen ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'
                }`}
              >
                <div className="px-5 mb-6">
                  <Link
                    href={localizedHref('boatsIndex', lang)}
                    onClick={closeMenu}
                    className="block text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold"
                  >
                    {t.allBoats.replace(' →', '')}
                  </Link>
                </div>

                {/* Con Licencia */}
                <div className="px-5 mb-8">
                  <Link
                    href={localizedHref('rentalWithLicence', lang)}
                    onClick={closeMenu}
                    className="block text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold mb-4"
                  >
                    {t.withLicence}
                  </Link>
                  <ul className="space-y-4">
                    {data.barcosConLicencia.map((barco) => (
                      <li key={barco.slug}>
                        <Link
                          href={boatHref(barco.slug, lang)}
                          onClick={closeMenu}
                          className="flex items-center justify-between text-[14px] text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors"
                        >
                          <span className="flex items-center gap-2 font-medium">
                            {barco.name}
                            {barco.premium && <Gem className="w-3.5 h-3.5 text-[var(--premium-badge)]" />}
                          </span>
                          <span className="text-[12px] text-[var(--megamenu-text-muted)]">{t.fromPrice} {barco.price} €</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sin Licencia */}
                <div className="px-5">
                  <Link
                    href={localizedHref('rentalWithoutLicence', lang)}
                    onClick={closeMenu}
                    className="block text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold mb-4"
                  >
                    {t.withoutLicence}
                  </Link>
                  <ul className="space-y-4">
                    {data.barcosSinLicencia.map((barco) => (
                      <li key={barco.slug}>
                        <Link
                          href={boatHref(barco.slug, lang)}
                          onClick={closeMenu}
                          className="flex items-center justify-between text-[14px] text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors font-medium"
                        >
                          <span>{barco.name}</span>
                          <span className="text-[12px] text-[var(--megamenu-text-muted)]">{t.fromPrice} {barco.price} €</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* Accordion Experiencias */}
            <li className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setIsExperienciasOpen(!isExperienciasOpen)}
                className="flex items-center justify-between w-full p-5 text-[15px] font-semibold text-[var(--megamenu-text)]"
                aria-expanded={isExperienciasOpen}
              >
                {t.experiences}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 opacity-60 ${isExperienciasOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 bg-slate-50 ${
                  isExperienciasOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'
                }`}
              >
                <div className="px-5 space-y-4">
                  <Link
                    href={localizedHref('experiences', lang)}
                    onClick={closeMenu}
                    className="block text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold"
                  >
                    {t.allExperiences.replace(' →', '')}
                  </Link>
                  <ul className="space-y-4">
                    {expItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block text-[14px] font-medium text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* Other links */}
            {links.map((link) => (
              <li key={link.href} className="border-b border-gray-100">
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block p-5 text-[15px] font-semibold text-[var(--megamenu-text)] hover:text-[var(--nav-accent)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sticky CTA Bottom */}
        <div className="p-5 border-t border-[var(--nav-border)] bg-[var(--nav-bg-solid)] shrink-0">
          <Link
            href={localizedHref('bookings', lang)}
            onClick={closeMenu}
            className="flex items-center justify-center w-full bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white px-6 py-3.5 rounded font-medium text-[15px] transition-colors"
          >
            {t.book} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
