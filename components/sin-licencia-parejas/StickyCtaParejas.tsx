'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function StickyCtaParejas() {
  const [visible, setVisible] = useState(false);

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
                href="https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20parejas"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-4 rounded-xl transition-colors text-sm shadow-md shadow-green-500/20"
                aria-label="Contactar por WhatsApp"
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
              href="https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20parejas"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-lg shadow-green-500/20 hover:-translate-y-1"
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
