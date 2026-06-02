'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Gem, ArrowRight } from 'lucide-react';
import type { NavBoat } from './navData';
import { CHROME } from '@/lib/i18n/chrome';
import { localizedHref, boatHref, type Locale } from '@/lib/i18n/routes';

export function MegamenuBarcos({
  data,
  lang = 'es',
}: {
  data: { barcosConLicencia: NavBoat[]; barcosSinLicencia: NavBoat[] };
  lang?: Locale;
}) {
  const t = CHROME[lang];
  const barcosIndex = localizedHref('boatsIndex', lang);
  const withLicenceHref = localizedHref('rentalWithLicence', lang);
  const withoutLicenceHref = localizedHref('rentalWithoutLicence', lang);
  const experiencesHref = localizedHref('experiences', lang);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const closeTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div 
      className="relative flex h-full items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex h-full items-center gap-0.5">
        <Link
          href={barcosIndex}
          className="text-[14px] font-semibold text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors h-full flex items-center pr-0.5"
        >
          {t.boats}
        </Link>
        <span className="inline-flex items-center opacity-60 pointer-events-none" aria-hidden>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </div>

      {/* Backdrop sutil solo visual */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-transparent -z-10 pointer-events-none" />
      )}

      {/* Megamenu Dropdown */}
      <div
        role="menu"
        className={`absolute top-full left-1/2 -translate-x-1/2 w-[650px] pointer-events-none
          transition-all duration-200 ease-out origin-top
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[6px]'}`}
      >
        <div className="bg-[var(--megamenu-bg)] rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-2">
          <div className="px-5 pt-4 pb-3 border-b border-gray-100">
            <Link
              href={barcosIndex}
              role="menuitem"
              className="block px-3 py-2.5 -mx-1 rounded-lg text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold hover:bg-sky-50 transition-colors duration-150"
            >
              {t.allBoats}
            </Link>
          </div>
          <div className="flex">
            {/* Columna Izquierda: Con Licencia */}
            <div className="flex-1 p-6 border-r border-gray-100">
              <Link
                href={withLicenceHref}
                className="inline-block mb-4 text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold hover:opacity-80 transition-opacity"
              >
                {t.withLicence} &rarr;
              </Link>
              <div className="h-px w-full bg-gray-100 mb-4" />
              <ul className="space-y-1">
                {data.barcosConLicencia.map((barco) => (
                  <li key={barco.slug} role="menuitem">
                    <Link
                      href={boatHref(barco.slug, lang)}
                      className="group flex items-center justify-between px-3 py-2.5 -mx-3 rounded-lg hover:bg-sky-50 transition-colors duration-150"
                    >
                      <span className="flex items-center gap-2 text-[14px] font-medium text-[var(--megamenu-text)] group-hover:text-[var(--nav-accent)] transition-colors">
                        {barco.name}
                        {barco.premium && <Gem className="w-3.5 h-3.5 text-[var(--premium-badge)]" aria-label="Premium" />}
                      </span>
                      <span className="text-[12px] font-normal text-[var(--megamenu-text-muted)]">
                        {t.fromPrice} {barco.price} €
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna Derecha: Sin Licencia */}
            <div className="flex-1 p-6 flex flex-col">
              <Link
                href={withoutLicenceHref}
                className="inline-block mb-4 text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold hover:opacity-80 transition-opacity"
              >
                {t.withoutLicence} &rarr;
              </Link>
              <div className="h-px w-full bg-gray-100 mb-4" />
              <ul className="space-y-1 mb-6">
                {data.barcosSinLicencia.map((barco) => (
                  <li key={barco.slug} role="menuitem">
                    <Link
                      href={boatHref(barco.slug, lang)}
                      className="group flex items-center justify-between px-3 py-2.5 -mx-3 rounded-lg hover:bg-sky-50 transition-colors duration-150"
                    >
                      <span className="text-[14px] font-medium text-[var(--megamenu-text)] group-hover:text-[var(--nav-accent)] transition-colors">
                        {barco.name}
                      </span>
                      <span className="text-[12px] font-normal text-[var(--megamenu-text-muted)]">
                        {t.fromPrice} {barco.price} €
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href={experiencesHref}
                  className="block p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-sky-50 hover:border-sky-100 transition-colors group"
                >
                  <p className="text-[13px] text-[var(--megamenu-text)] leading-snug font-semibold mb-1">
                    {t.noLicenceTitle}
                  </p>
                  <p className="text-[12px] text-[var(--nav-accent)] flex items-center gap-1 group-hover:text-[var(--nav-accent-hover)] transition-colors">
                    {t.noLicenceCta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
