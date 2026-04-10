'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqsBahia } from './faq-data';

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-base leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="shrink-0 text-[#0d4a47]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1">
              <div className="h-px bg-slate-100 mb-4" />
              <p className="text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type Lang = 'es' | 'fr';

interface FAQBahiaProps {
  lang?: Lang;
}

export default function FAQBahia({ lang = 'es' }: FAQBahiaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3 leading-tight">
          Preguntas frecuentes
        </h2>
        <p className="text-slate-500 mb-10">
          Todo lo que necesitas saber antes de salir a navegar por la bahía de Roses.
        </p>

        <div className="space-y-3">
          {faqsBahia.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
