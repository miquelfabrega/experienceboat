'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqsLancha, faqsLanchaFr, faqsLanchaCa, FAQ } from './faq-data';

type Lang = 'es' | 'fr' | 'ca';

interface FAQAccordionProps {
  lang?: Lang;
}

const t: Record<Lang, Record<string, string>> = {
  es: {
    title: 'Preguntas frecuentes',
    subtitle: 'Resolvemos las dudas más habituales sobre el alquiler de lancha en la Costa Brava.',
    question: 'Tienes una pregunta?',
    whatsappLabel: 'Pregúntanos en WhatsApp →',
    whatsappText: 'Hola%2C%20tengo%20una%20pregunta%20sobre%20el%20alquiler%20de%20lanchas%20en%20Roses',
  },
  fr: {
    title: 'Questions fréquentes',
    subtitle: 'Nous répondons aux questions les plus courantes sur la location de vedettes sur la Costa Brava.',
    question: 'Vous avez une autre question ?',
    whatsappLabel: 'Posez-nous la question sur WhatsApp →',
    whatsappText: 'Bonjour%2C%20j%27ai%20une%20question%20sur%20la%20location%20d%27une%20vedette%20%C3%A0%20Roses',
  },
  ca: {
    title: 'Preguntes freqüents',
    subtitle: 'Resolem els dubtes més habituals sobre el lloguer de llanxa a la Costa Brava.',
    question: 'Teniu alguna altra pregunta?',
    whatsappLabel: 'Pregunteu-nos per WhatsApp →',
    whatsappText: 'Hola%2C%20tinc%20una%20pregunta%20sobre%20el%20lloguer%20de%20llanxes%20a%20Roses',
  },
};

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
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

export default function FAQAccordion({ lang = 'es' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const labels = t[lang];
  const faqs: FAQ[] = lang === 'es' ? faqsLancha : lang === 'ca' ? faqsLanchaCa : faqsLanchaFr;

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3 leading-tight">
          {labels.title}
        </h2>
        <p className="text-slate-500 mb-10">
          {labels.subtitle}
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">{labels.question}</p>
          <a
            href={`https://wa.me/34623995700?text=${labels.whatsappText}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
          >
            {labels.whatsappLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
