'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs as defaultFaqs } from './faq-data';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FAQSectionT {
  sectionLabel?: string;
  h2?: string;
  desc?: string;
  waPrompt?: string;
  waLink?: string;
  waMessage?: string;
  faqs?: FaqItem[];
}

const defaults: Required<Omit<FAQSectionT, 'faqs'>> = {
  sectionLabel: 'Resuelve tus dudas',
  h2: 'Preguntas frecuentes',
  desc: 'Las preguntas más habituales sobre el alquiler de barco sin licencia en Roses.',
  waPrompt: '¿Tienes alguna otra pregunta?',
  waLink: 'Pregúntanos por WhatsApp →',
  waMessage: 'Hola%2C%20tengo%20una%20pregunta%20sobre%20el%20alquiler%20de%20barco%20sin%20licencia%20en%20Roses',
};

function FAQItem({ faq, index, isOpen, onToggle }: { faq: FaqItem; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50 transition-colors" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
        <span className="font-semibold text-gray-900 text-base leading-snug pr-2">{faq.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-sky-500" aria-hidden="true">
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div id={`faq-answer-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-4">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({ t }: { t?: FAQSectionT }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const tx = { ...defaults, ...t };
  const faqs = t?.faqs ?? defaultFaqs;
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{tx.h2}</h2>
        <p className="text-gray-500 text-center mb-12 text-lg">{tx.desc}</p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">{tx.waPrompt}</p>
          <a href={`https://wa.me/34623995700?text=${tx.waMessage}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors">
            {tx.waLink}
          </a>
        </div>
      </div>
    </section>
  );
}
