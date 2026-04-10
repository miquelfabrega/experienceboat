'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is the Bay of Roses suitable for beginners with a licence?',
    a: 'Yes, it is one of the best areas for it. The bay is naturally sheltered from the north wind, especially in the mornings, and the waters are generally calm. Visibility is good and there are no major obstacles. We recommend going out early in the day.',
  },
  {
    q: 'How long does it take to reach Cap de Creus from the Bay of Roses?',
    a: 'Approximately 45 to 60 minutes depending on the boat and the conditions. The full route to Cap de Creus is better suited for full-day rental. For half-day trips, we recommend the coves in the northern part of the bay.',
  },
  {
    q: 'Can I anchor inside the Cap de Creus Natural Park?',
    a: 'Inside the park there are designated mooring areas. It is not permitted to drop anchor in certain protected coves. Before heading out, we will give you information on the specific regulations for your area of navigation.',
  },
  {
    q: 'What is the best season to rent a boat in the Bay of Roses?',
    a: 'The best season runs from May to October. July and August are the busiest months, but spring and September offer excellent conditions with fewer visitors. In May and June the sea is already warm and the weather very stable.',
  },
  {
    q: 'How far is the Marina de Santa Margarita from central Roses?',
    a: 'About 3 kilometres from the centre of Roses, at the northern entrance to the town. It is reachable by car in 5 minutes and by bike in around 15. There is free parking very close by.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Questions about hiring a boat in the Bay of Roses
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-base leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-sky-500 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.0, 0.0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
