'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, X, ChevronRight, MessageCircle } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  seeOptions: string;
  whatsapp: string;
  whatsappAria: string;
  panelTitle: string;
  panelDesc: string;
  seeOptionsAvailable: string;
  whatsappMsg: string;
  openMenu: string;
  closeMenu: string;
}> = {
  es: {
    seeOptions: 'Ver opciones',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Contactar por WhatsApp',
    panelTitle: 'Canales de Santa Margarita en barco',
    panelDesc: 'Salida desde la Marina de Santa Margarita. Sin licencia, con patrón o con tu titulación.',
    seeOptionsAvailable: 'Ver opciones disponibles',
    whatsappMsg: 'Hola, me interesa navegar por los canales de Santa Margarita en Roses',
    openMenu: 'Abrir menú de reserva rápida',
    closeMenu: 'Cerrar menú de reserva',
  },
  fr: {
    seeOptions: 'Voir les options',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Contacter par WhatsApp',
    panelTitle: 'Les canaux de Santa Margarita en bateau',
    panelDesc: 'Départ de la Marina de Santa Margarita. Sans permis, avec skipper ou avec votre permis.',
    seeOptionsAvailable: 'Voir les options disponibles',
    whatsappMsg: 'Bonjour, je souhaite naviguer sur les canaux de Santa Margarita à Roses',
    openMenu: 'Ouvrir le menu de réservation rapide',
    closeMenu: 'Fermer le menu de réservation',
  },
  en: {
    seeOptions: 'See options',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Contact via WhatsApp',
    panelTitle: 'The Santa Margarita canals by boat',
    panelDesc: 'Departure from the Marina de Santa Margarita. Without a licence, with a skipper or with your own licence.',
    seeOptionsAvailable: 'See available options',
    whatsappMsg: 'Hello, I am interested in sailing the Santa Margarita canals in Roses',
    openMenu: 'Open quick booking menu',
    closeMenu: 'Close booking menu',
  },
  ca: {
    seeOptions: 'Veure opcions',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Contactar per WhatsApp',
    panelTitle: 'Canals de Santa Margarida en vaixell',
    panelDesc: 'Sortida des de la Marina de Santa Margarida. Sense llicència, amb patró o amb la vostra titulació.',
    seeOptionsAvailable: 'Veure opcions disponibles',
    whatsappMsg: 'Hola, m\'interessa navegar pels canals de Santa Margarida a Roses',
    openMenu: 'Obrir menú de reserva ràpida',
    closeMenu: 'Tancar menú de reserva',
  },
};

export default function StickyMobileCTA({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  const waHref = `https://wa.me/34623995700?text=${encodeURIComponent(c.whatsappMsg)}`;
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile floating bar — shown only on small screens */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-inset-bottom"
          >
            <div className="bg-white border-t border-gray-100 shadow-2xl px-4 py-3">
              <div className="flex gap-3">
                <a
                  href="#opciones"
                  className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  <Anchor className="w-4 h-4" />
                  {c.seeOptions}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-4 rounded-xl transition-colors text-sm"
                  aria-label={c.whatsappAria}
                >
                  <MessageCircle className="w-4 h-4" />
                  {c.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sticky sidebar — shown only on large screens */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed right-6 bottom-8 z-50 hidden md:flex flex-col items-end gap-3"
          >
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64"
                >
                  <p className="font-bold text-gray-900 text-sm mb-1">
                    {c.panelTitle}
                  </p>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                    {c.panelDesc}
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="#opciones"
                      className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                      onClick={() => setExpanded(false)}
                    >
                      {c.seeOptionsAvailable} <ChevronRight className="w-4 h-4" />
                    </a>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {c.whatsapp}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(!expanded)}
              className="w-14 h-14 bg-sky-500 hover:bg-sky-400 text-white rounded-full shadow-xl shadow-sky-500/40 flex items-center justify-center transition-all hover:scale-110"
              aria-label={expanded ? c.closeMenu : c.openMenu}
              aria-expanded={expanded}
            >
              <AnimatePresence mode="wait">
                {expanded ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="anchor"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Anchor className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
