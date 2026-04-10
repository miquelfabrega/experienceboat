'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

type LangData = {
  navLabel: string;
  pillar: string;
  items: { name: string; url: string }[];
};

type ExperienciasData = {
  es: LangData;
  fr: LangData;
  en: LangData;
};

export function MegamenuExperiencias({ data }: { data: ExperienciasData }) {
  const pathname = usePathname();
  const lang = pathname.startsWith('/fr') ? 'fr' : pathname.startsWith('/en') ? 'en' : 'es';
  const expData = data[lang as keyof ExperienciasData];
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
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-[14px] font-semibold text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors h-full"
      >
        {expData.navLabel}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-20 bg-transparent -z-10 pointer-events-none" />
      )}

      <div
        role="menu"
        className={`absolute top-full left-1/2 -translate-x-1/2 w-[min(100vw-2rem,280px)] pointer-events-none
          transition-all duration-200 ease-out origin-top
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[6px]'}`}
      >
        <div className="bg-[var(--megamenu-bg)] rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-2">
          <div className="p-3">
            <Link
              href={expData.pillar}
              role="menuitem"
              className="block px-4 py-2 rounded-lg text-[11px] uppercase tracking-[0.1em] text-[var(--section-label)] font-bold hover:bg-sky-50 transition-colors duration-150"
            >
              {lang === 'fr' ? 'Toutes les expériences →' : lang === 'en' ? 'All experiences →' : 'Todas las experiencias →'}
            </Link>
            <div className="h-px mx-4 bg-gray-100 my-2" />
            <ul className="space-y-1">
              {expData.items.map((item) => (
                <li key={item.url} role="none">
                  <Link
                    href={item.url}
                    role="menuitem"
                    className="block px-4 py-2.5 rounded-lg text-[14px] font-medium text-[var(--megamenu-text)] hover:bg-sky-50 hover:text-[var(--nav-accent)] transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
