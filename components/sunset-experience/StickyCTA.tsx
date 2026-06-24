'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { localizedHref } from '@/lib/i18n/routes';

const translations = {
  es: {
    label: 'Sunset Experience',
    price: 'desde 160 €',
    btn: 'Reservar',
    whatsappText: 'Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Sunset%20Experience'
  },
  fr: {
    label: 'Sunset Experience',
    price: 'à partir de 160 €',
    btn: 'Réserver',
    whatsappText: 'Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20Sunset%20Experience'
  },
  en: {
    label: 'Sunset Experience',
    price: 'from 160 €',
    btn: 'Book',
    whatsappText: 'Hello%2C%20I%27d%20like%20information%20about%20the%20Sunset%20Experience'
  },
  ca: {
    label: 'Sunset Experience',
    price: 'des de 160 €',
    btn: 'Reservar',
    whatsappText: 'Hola%2C%20vull%20informaci%C3%B3%20sobre%20el%20Sunset%20Experience'
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
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="bg-white rounded-2xl shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] border border-slate-100 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-500 font-medium mb-1">{t.label}</p>
                <p className="text-lg font-bold text-gray-900 leading-none">{t.price}</p>
              </div>
              <Link
                href={localizedHref('bookings', lang)}
                className="flex-1 flex items-center justify-center gap-2 bg-sky-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md shadow-sky-600/20 active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.btn}</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
