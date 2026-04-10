'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, X, ChevronRight, MessageCircle } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  anchor: string; anchorLabel: string; waText: string; desktopTitle: string;
  desktopDesc: string; ctaLabel: string; openLabel: string; closeLabel: string;
}> = {
  es: {
    anchor: '#experiencias', anchorLabel: 'Ver salidas',
    waText: 'Hola%2C%20me%20interesa%20reservar%20una%20experiencia%20en%20barco%20en%20Roses',
    desktopTitle: 'Experiencias en barco', desktopDesc: 'Excursiones privadas y Sunset Experience.',
    ctaLabel: 'Ver salidas', openLabel: 'Abrir menú de reserva rápida', closeLabel: 'Cerrar menú de reserva',
  },
  fr: {
    anchor: '#experiences', anchorLabel: 'Voir les sorties',
    waText: 'Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20une%20exp%C3%A9rience%20en%20bateau%20%C3%A0%20Roses',
    desktopTitle: 'Expériences en bateau', desktopDesc: 'Excursions privées et Sunset Experience.',
    ctaLabel: 'Voir les sorties', openLabel: 'Ouvrir le menu de réservation', closeLabel: 'Fermer le menu',
  },
  en: {
    anchor: '#experiences', anchorLabel: 'See experiences',
    waText: 'Hello%2C%20I%27m%20interested%20in%20booking%20a%20boat%20experience%20in%20Roses',
    desktopTitle: 'Boat experiences', desktopDesc: 'Private excursions and Sunset Experience.',
    ctaLabel: 'See experiences', openLabel: 'Open booking menu', closeLabel: 'Close menu',
  },
};

export default function StickyMobileCTA({ lang = 'es' }: { lang?: Lang }) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const tx = t[lang];

  useEffect(() => {
    const handleScroll = () => { setVisible(window.scrollY > 400); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waHref = `https://wa.me/34623995700?text=${tx.waText}`;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-inset-bottom"
          >
            <div className="bg-white border-t border-gray-100 shadow-2xl px-4 py-3">
              <div className="flex gap-3">
                <a href={tx.anchor} className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition-colors text-sm" onClick={() => setVisible(true)}>
                  <Anchor className="w-4 h-4" />{tx.anchorLabel}
                </a>
                <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-4 rounded-xl transition-colors text-sm" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed right-6 bottom-8 z-50 hidden md:flex flex-col items-end gap-3"
          >
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64"
                >
                  <p className="font-bold text-gray-900 text-sm mb-1">{tx.desktopTitle}</p>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">{tx.desktopDesc}</p>
                  <div className="flex flex-col gap-2">
                    <a href={tx.anchor} className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-2.5 rounded-xl text-sm transition-colors" onClick={() => setExpanded(false)}>
                      {tx.ctaLabel} <ChevronRight className="w-4 h-4" />
                    </a>
                    <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                      <MessageCircle className="w-4 h-4" />WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button onClick={() => setExpanded(!expanded)} className="w-14 h-14 bg-sky-500 hover:bg-sky-400 text-white rounded-full shadow-xl shadow-sky-500/40 flex items-center justify-center transition-all hover:scale-110" aria-label={expanded ? tx.closeLabel : tx.openLabel} aria-expanded={expanded}>
              <AnimatePresence mode="wait">
                {expanded ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-6 h-6" /></motion.span>
                ) : (
                  <motion.span key="anchor" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Anchor className="w-6 h-6" /></motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
