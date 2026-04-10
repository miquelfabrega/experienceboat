'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData, FAQ } from './faq-data';

type Lang = 'es' | 'fr';

const t: Record<Lang, Record<string, string>> = {
  es: {
    subtitle: 'Resuelve tus dudas',
    title: 'Preguntas frecuentes sobre los canales de Santa Margarita',
    description: 'Las dudas más habituales de quienes descubren los canales de Santa Margarita por primera vez.',
    otherQuestion: '¿Tienes alguna otra pregunta?',
    whatsapp: 'Pregúntanos por WhatsApp →',
  },
  fr: {
    subtitle: 'Vos questions',
    title: 'Questions fréquentes sur les canaux de Santa Margarita',
    description: 'Les doutes les plus courants de ceux qui découvrent les canaux de Santa Margarita pour la première fois.',
    otherQuestion: 'Vous avez une autre question ?',
    whatsapp: 'Posez-nous la question sur WhatsApp →',
  },
};

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
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
        aria-controls={`faq-canales-answer-${index}`}
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
            id={`faq-canales-answer-${index}`}
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

export default function FAQSection({ lang = 'es' }: { lang?: Lang }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const texts = t[lang];
  const faqs = faqData[lang];

  const whatsappUrl =
    lang === 'es'
      ? 'https://wa.me/34623995700?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20los%20canales%20de%20Santa%20Margarita'
      : 'https://wa.me/34623995700?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20les%20canaux%20de%20Santa%20Margarita';

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{texts.subtitle}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{texts.title}</h2>
        <p className="text-gray-500 text-center mb-12 text-lg">{texts.description}</p>

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
          <p className="text-gray-500 text-sm mb-4">{texts.otherQuestion}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
          >
            {texts.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
