import { Clock, Sun, Waves } from 'lucide-react';

export interface DuracionParejasT {
  sectionLabel?: string;
  h2?: string;
  desc?: string;
  halfDayTitle?: string;
  halfDayDesc?: string;
  halfDayPriceLabel?: string;
  halfDayPrice?: string;
  fullDayTitle?: string;
  fullDayDesc?: string;
  fullDayPriceLabel?: string;
  fullDayPrice?: string;
  cta?: string;
  ctaHref?: string;
}

const defaults: Required<DuracionParejasT> = {
  sectionLabel: 'Elige tu aventura',
  h2: 'Medio día o día completo — qué elegir',
  desc: 'Depende de lo que queráis hacer y de cuánto tiempo tengáis disponible.',
  halfDayTitle: 'Medio día',
  halfDayDesc: 'El medio día (4 horas aproximadamente) es perfecto si queréis una mañana o una tarde en el mar sin que se convierta en una jornada entera. Da tiempo para recorrer los canales, llegar a las calas más cercanas como Canyelles o Almadraba, bañaros y volver.',
  halfDayPriceLabel: 'Precio aproximado',
  halfDayPrice: 'desde 70 €',
  fullDayTitle: 'Día completo',
  fullDayDesc: 'Es para quienes quieren llegar lejos. Con una jornada completa podéis recorrer los canales, cruzar la bahía, llegar hasta las calas del Cap de Creus, comer a bordo y volver tranquilamente al atardecer. Es la opción más completa y la que más recuerdo deja.',
  fullDayPriceLabel: 'Precio aproximado',
  fullDayPrice: 'desde 120 €',
  cta: 'Ver barcos disponibles y reservar',
  ctaHref: '/alquiler-barco-sin-licencia-roses',
};

export default function DuracionParejas({ t }: { t?: DuracionParejasT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto">{tx.h2}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{tx.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 flex flex-col anim-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{tx.halfDayTitle}</h3>
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0"><Clock className="w-6 h-6 text-sky-600" /></div>
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-8">{tx.halfDayDesc}</p>
            <div className="bg-white rounded-2xl p-5 border border-slate-200">
              <span className="text-sm text-gray-500 font-medium block mb-1">{tx.halfDayPriceLabel}</span>
              <span className="text-2xl font-extrabold text-gray-900">{tx.halfDayPrice}</span>
            </div>
          </div>

          <div className="bg-sky-600 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-sky-600/20 flex flex-col relative overflow-hidden anim-fade-up anim-delay-1">
            <Waves className="absolute right-0 bottom-0 w-48 h-48 text-white opacity-5 -mb-10 -mr-10" />
            <div className="relative z-10 flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{tx.fullDayTitle}</h3>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0"><Sun className="w-6 h-6 text-white" /></div>
            </div>
            <p className="text-sky-50 leading-relaxed flex-1 mb-8 relative z-10">{tx.fullDayDesc}</p>
            <div className="bg-white/10 rounded-2xl p-5 border border-white/20 relative z-10">
              <span className="text-sm text-sky-100 font-medium block mb-1">{tx.fullDayPriceLabel}</span>
              <span className="text-2xl font-extrabold text-white">{tx.fullDayPrice}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href={tx.ctaHref} className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 bg-gray-900 text-white">
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
