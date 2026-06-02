'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { equivalentPath, type Locale } from '@/lib/i18n/routes';

const languages: { code: string; name: string; locale: Locale }[] = [
  { code: 'ES', name: 'Español', locale: 'es' },
  { code: 'CA', name: 'Català', locale: 'ca' },
  { code: 'FR', name: 'Français', locale: 'fr' },
  { code: 'EN', name: 'English', locale: 'en' },
];

/** Deriva el locale actual a partir del primer segmento de la ruta. ES es el default (sin prefijo). */
function getCurrentCode(pathname: string | null): string {
  const seg = (pathname ?? '/').split('/')[1]?.toLowerCase();
  if (seg === 'ca') return 'CA';
  if (seg === 'fr') return 'FR';
  if (seg === 'en') return 'EN';
  return 'ES';
}

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const pathname = usePathname();
  const currentCode = getCurrentCode(pathname);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors h-full px-2">
        <Globe className="w-4 h-4 opacity-80" />
        <span>{currentCode}</span>
      </button>

      <div
        className={`absolute top-full right-0 w-32 pt-2 transition-all duration-200 origin-top ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-1">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={equivalentPath(pathname ?? '/', lang.locale)}
              className="flex items-center justify-between px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {lang.name}
              <span className="text-[10px] text-slate-400 font-bold">{lang.code}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
