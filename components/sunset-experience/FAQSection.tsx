'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from './faq-data';

const translations = {
  es: {
    heading: 'Resuelve tus dudas',
    title: 'Preguntas frecuentes',
    description: 'Todo lo que necesitas saber antes de reservar el Sunset Experience.',
    otherQuestion: '¿Tienes alguna otra pregunta?',
    askWhatsapp: 'Pregúntanos por WhatsApp →',
    whatsappText: 'Hola%2C%20tengo%20una%20pregunta%20sobre%20el%20Sunset%20Experience'
  },
  fr: {
    heading: 'Questions fréquentes',
    title: 'Questions fréquentes',
    description: 'Tout ce que vous devez savoir avant de réserver le Sunset Experience.',
    otherQuestion: 'Vous avez une autre question ?',
    askWhatsapp: 'Posez-la sur WhatsApp →',
    whatsappText: 'Bonjour%2C%20j%27ai%20une%20question%20sur%20le%20Sunset%20Experience'
  },
  en: {
    heading: 'Frequently asked questions',
    title: 'Frequently asked questions',
    description: 'Everything you need to know before booking the Sunset Experience.',
    otherQuestion: 'Do you have any other questions?',
    askWhatsapp: 'Ask us on WhatsApp →',
    whatsappText: 'Hello%2C%20I%20have%20a%20question%20about%20the%20Sunset%20Experience'
  },
  ca: {
    heading: 'Preguntes freqüents',
    title: 'Preguntes freqüents',
    description: 'Tot el que necessiteu saber abans de reservar el Sunset Experience.',
    otherQuestion: 'Teniu cap altra pregunta?',
    askWhatsapp: 'Pregunteu-nos per WhatsApp →',
    whatsappText: 'Hola%2C%20tinc%20una%20pregunta%20sobre%20el%20Sunset%20Experience'
  }
};

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-gray-900 text-base leading-snug pr-2">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-sky-500"
          aria-hidden="true"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function FAQSection({ lang = 'es' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[lang];
  const faqs = faqData[lang];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{t.heading}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {t.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">{t.otherQuestion}</p>
          <a
            href={`https://wa.me/34623995700?text=${t.whatsappText}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
          >
            {t.askWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
