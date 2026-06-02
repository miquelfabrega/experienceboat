'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const waMessages: Record<Lang, string> = {
  es: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20los%20canales%20de%20Santa%20Margarita',
  fr: 'Bonjour%2C%20je%20voudrais%20louer%20un%20bateau%20sans%20permis%20pour%20les%20canaux%20de%20Santa%20Margarita',
  en: 'Hello%2C%20I%27d%20like%20to%20rent%20a%20no-licence%20boat%20for%20the%20Santa%20Margarita%20canals',
  ca: 'Hola%2C%20m%27agradaria%20llogar%20un%20vaixell%20sense%20llic%C3%A8ncia%20per%20als%20canals%20de%20Santa%20Margarida',
};

const ariaLabels: Record<Lang, string> = {
  es: 'Contactar por WhatsApp',
  fr: 'Contacter par WhatsApp',
  en: 'Contact us on WhatsApp',
  ca: 'Contactar per WhatsApp',
};

export default function StickyCtaCanales({ lang = 'es' }: { lang?: Lang }) {
  const [visible, setVisible] = useState(false);
  const waHref = `https://wa.me/34623995700?text=${waMessages[lang]}`;
  const ariaLabel = ariaLabels[lang];

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
              <a
                href={waHref}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-4 rounded-xl transition-colors text-sm shadow-md shadow-green-500/20"
                aria-label={ariaLabel}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed right-6 bottom-8 z-50 hidden md:flex flex-col items-end gap-3"
          >
            <a
              href={waHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-lg shadow-green-500/20 hover:-translate-y-1"
              aria-label={ariaLabel}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
