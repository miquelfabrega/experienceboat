'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Compass, MessageCircle } from 'lucide-react';

type Lang = 'es' | 'fr' | 'ca';

interface StickyCtaLanchaProps {
  lang?: Lang;
}

const t: Record<Lang, Record<string, string>> = {
  es: {
    mobileTitle: 'Elige tu experiencia en la Costa Brava',
    mobileSubtitle: 'Desde 195 € · Salidas privadas',
    mobileButton: 'Reservar',
    cta1Label: 'Con licencia',
    cta2Label: 'Con patrón',
    cta1Href: '/alquiler-barco-con-licencia-roses',
    cta2Href: '/experiencias-barco-roses',
    headerLabel: 'Elige tu experiencia',
  },
  fr: {
    mobileTitle: 'Choisissez votre expérience sur la Costa Brava',
    mobileSubtitle: 'À partir de 195 € · Sorties privées',
    mobileButton: 'Réserver',
    cta1Label: 'Voir les bateaux',
    cta2Label: 'WhatsApp',
    cta1Href: '/fr/location-bateau-avec-permis-roses/#bateaux',
    cta2Href: 'https://wa.me/34623995700?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20vedette%20Costa%20Brava',
    headerLabel: 'Choisir maintenant',
  },
  ca: {
    mobileTitle: 'Trieu la vostra experiència a la Costa Brava',
    mobileSubtitle: 'Des de 195 € · Sortides privades',
    mobileButton: 'Reservar',
    cta1Label: 'Veure embarcacions',
    cta2Label: 'WhatsApp',
    cta1Href: '/ca/lloguer-vaixell-amb-llicencia-roses/#barcos',
    cta2Href: 'https://wa.me/34623995700?text=Hola%2C%20m%27interessa%20la%20llanxa%20Costa%20Brava',
    headerLabel: 'Tria ara',
  },
};

export default function StickyCtaLancha({ lang = 'es' }: StickyCtaLanchaProps) {
  const [visible, setVisible] = useState(false);
  const labels = t[lang];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (lang === 'es') {
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
            <div className="md:hidden bg-[#0b1f3a] border-t border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{labels.mobileTitle}</p>
                  <p className="text-xs text-blue-300">{labels.mobileSubtitle}</p>
                </div>
                <a
                  href="/reservas"
                  className="shrink-0 bg-cyan-400 hover:bg-cyan-300 text-[#0b1f3a] font-bold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  {labels.mobileButton}
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-2 bg-[#0b1f3a] border border-white/10 rounded-2xl shadow-2xl p-4 min-w-[260px]">
              <p className="text-xs text-blue-300 font-medium uppercase tracking-wider mb-1">
                {labels.headerLabel}
              </p>
              <a
                href={labels.cta1Href}
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                <Anchor size={15} className="text-cyan-300" />
                {labels.cta1Label}
              </a>
              <a
                href={labels.cta2Href}
                className="flex items-center gap-2.5 bg-[#0d7d6e] hover:bg-[#0a9980] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                <Compass size={15} className="text-emerald-200" />
                {labels.cta2Label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // FR version
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white border-t border-gray-100 shadow-2xl px-4 py-3">
            <div className="flex gap-3">
              <a
                href={labels.cta1Href}
                className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
              >
                <Anchor className="w-4 h-4" />
                {labels.cta1Label}
              </a>
              <a
                href={labels.cta2Href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-4 rounded-xl transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {labels.cta2Label}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
