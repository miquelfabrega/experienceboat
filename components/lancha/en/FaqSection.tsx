'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is the Costa Brava route suitable for any level of experience with a licence?',
    a: 'It depends on the planned route. The Bay of Roses and the closest coves are accessible for any holder of a valid licence. The route to Cap de Creus requires some experience as it involves open-water navigation. If you are in any doubt, we will advise you honestly on the most suitable route for your level.',
  },
  {
    q: 'Can I reach France from Roses with a rented motorboat?',
    a: 'No. Our rental boats are for navigation in Spanish waters, specifically in the area of Roses and the Cap de Creus Natural Park. Sailing to France is not permitted.',
  },
  {
    q: 'What happens if the Tramontane wind blows during my trip?',
    a: 'The Tramontane (north wind) can be strong on the Costa Brava. If conditions are not appropriate for safe navigation, we will reschedule your trip at no cost. We always check the weather forecast before any departure.',
  },
  {
    q: 'How long does a route to Cap de Creus take?',
    a: 'From Santa Margarita to Cap de Creus lighthouse takes approximately 45–60 minutes in one direction, depending on the boat and conditions. For a comfortable outward journey, stops and return trip, we recommend full-day rental.',
  },
  {
    q: 'Do you provide fishing equipment with the motorboat?',
    a: 'We do not currently include fishing equipment as standard. However, if you are interested in fishing during the trip, get in touch before booking and we will see what we can arrange.',
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
          Questions about motorboat rental on the Costa Brava
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
