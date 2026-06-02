'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { localizedHref } from '@/lib/i18n/routes';

type Lang = 'es' | 'fr' | 'ca';

interface StickyCtaBahiaProps {
  lang?: Lang;
}

const t: Record<
  Lang,
  { barTitle: string; barSub: string; book: string; fab: string }
> = {
  es: {
    barTitle: 'Barco con licencia — desde 195 €',
    barSub: 'Salida desde Santa Margarita',
    book: 'Reservar',
    fab: 'Reservar ahora',
  },
  fr: {
    barTitle: 'Bateau avec permis — dès 195 €',
    barSub: 'Départ depuis Santa Margarita',
    book: 'Réserver',
    fab: 'Réserver maintenant',
  },
  ca: {
    barTitle: 'Vaixell amb llicència — des de 195 €',
    barSub: 'Sortida des de Santa Margarida',
    book: 'Reservar',
    fab: 'Reservar ara',
  },
};

export default function StickyCtaBahia({ lang = 'es' }: StickyCtaBahiaProps) {
  const [visible, setVisible] = useState(false);
  const labels = t[lang];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:w-auto"
        >
          {/* Mobile bar */}
          <div className="md:hidden flex items-center justify-between gap-4 bg-[#0b1f3a] text-white px-5 py-4 border-t border-white/10">
            <div>
              <p className="font-semibold text-sm">{labels.barTitle}</p>
              <p className="text-xs text-blue-300">{labels.barSub}</p>
            </div>
            <a
              href={localizedHref('bookings', lang)}
              className="shrink-0 bg-cyan-400 hover:bg-cyan-300 text-[#0b1f3a] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              {labels.book}
            </a>
          </div>

          {/* Desktop FAB */}
          <a
            href={localizedHref('bookings', lang)}
            className="hidden md:flex items-center gap-3 bg-[#0b1f3a] hover:bg-[#0d3545] text-white font-bold px-6 py-4 rounded-2xl shadow-2xl transition-colors border border-white/10"
          >
            <span className="text-cyan-300">⚓</span>
            {labels.fab}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
