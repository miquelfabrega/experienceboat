'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { localizedHref } from '@/lib/i18n/routes';

const translations = {
  es: {
    label: 'Canal Tour',
    action: 'Reservar',
    btnText: 'Consultar fechas'
  },
  fr: {
    label: 'Canal Tour',
    action: 'Réserver',
    btnText: 'Consulter les dates'
  },
  en: {
    label: 'Canal Tour',
    action: 'Book',
    btnText: 'Check dates'
  },
  ca: {
    label: 'Canal Tour',
    action: 'Reservar',
    btnText: 'Consultar dates'
  }
};

interface StickyCTAProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function StickyCTA({ lang = 'es' }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div>
          <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
            {t.label}
          </span>
          <span className="block text-lg font-bold text-gray-900 leading-none">
            {t.action}
          </span>
        </div>
        <Link
          href={localizedHref('bookings', lang)}
          className="flex items-center justify-center gap-2 bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md flex-1 text-center"
        >
          <Calendar className="w-5 h-5" />
          <span>{t.btnText}</span>
        </Link>
      </div>
    </div>
  );
}
