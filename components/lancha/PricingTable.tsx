import { ArrowRight } from 'lucide-react';

const blocks = [
  {
    id: 'licencia',
    title: 'Con licencia',
    subtitle: 'Sin patrón — tú llevas el barco',
    badge: null,
    badgeStyle: '',
    borderStyle: 'border-slate-200',
    headerBg: 'bg-slate-800',
    rows: [
      { label: 'Medio día (4h)', price: '195 €', note: 'desde' },
      { label: 'Día completo (8h)', price: '285 €', note: 'desde' },
    ],
  },
  {
    id: 'patron-neumatica',
    title: 'Con patrón · Neumática',
    subtitle: 'Patrón incluido, sin titulación',
    badge: null,
    badgeStyle: '',
    borderStyle: 'border-slate-200',
    headerBg: 'bg-[#0d4a47]',
    rows: [
      { label: 'Medio día (4h)', price: '300 €', note: null },
      { label: 'Día completo (8h)', price: '600 €', note: null },
    ],
  },
  {
    id: 'patron-lancha',
    title: 'Con patrón · Lancha',
    subtitle: 'Patrón incluido — embarcación premium',
    badge: 'Premium',
    badgeStyle: 'bg-amber-400 text-amber-900',
    borderStyle: 'border-amber-400 ring-2 ring-amber-400/30',
    headerBg: 'bg-[#0b1f3a]',
    rows: [
      { label: 'Medio día (4h)', price: '600 €', note: null },
      { label: 'Día completo (8h)', price: '1.200 €', note: null },
    ],
  },
];

type Lang = 'es' | 'fr' | 'ca';

interface PricingTableProps {
  lang?: Lang;
}

const t: Record<
  Lang,
  { title: string; subtitle: string; cta: string; ctaHref: string; note: string }
> = {
  es: {
    title: 'Precios',
    subtitle:
      'Tarifas de alquiler de lancha en Roses. Todas las salidas son privadas — nunca compartís embarcación con otros clientes.',
    cta: 'Reservar online',
    ctaHref: '/reservas',
    note: 'Precios orientativos. El precio final depende del modelo de embarcación y fecha.',
  },
  fr: {
    title: 'Tarifs',
    subtitle:
      'Tarifs de location de vedette à Roses. Toutes les sorties sont privées — vous ne partagez jamais l\'embarcation avec d\'autres clients.',
    cta: 'Réserver en ligne',
    ctaHref: '/fr/reservations',
    note: 'Tarifs indicatifs. Le prix final dépend du modèle d\'embarcation et de la date.',
  },
  ca: {
    title: 'Preus',
    subtitle:
      'Tarifes de lloguer de llanxa a Roses. Totes les sortides són privades — mai compartiu embarcació amb altres clients.',
    cta: 'Reservar en línia',
    ctaHref: '/ca/reserves',
    note: 'Preus orientatius. El preu final depèn del model d\'embarcació i la data.',
  },
};

export default function PricingTable({ lang = 'es' }: PricingTableProps) {
  const labels = t[lang];
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #0b1f3a 0%, #0d3a45 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
          {labels.title}
        </h2>
        <p className="text-blue-200 text-lg mb-12">
          {labels.subtitle}
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {blocks.map((b) => (
            <div
              key={b.id}
              className={`relative rounded-2xl border overflow-hidden bg-white ${b.borderStyle}`}
            >
              {b.badge && (
                <span
                  className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${b.badgeStyle}`}
                >
                  {b.badge}
                </span>
              )}

              {/* Header */}
              <div className={`${b.headerBg} px-5 pt-5 pb-4`}>
                <h3 className="font-serif text-lg font-bold text-white leading-tight">{b.title}</h3>
                <p className="text-xs text-white/60 mt-0.5">{b.subtitle}</p>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100">
                {b.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <span className="text-sm text-slate-600">{row.label}</span>
                    <div className="text-right">
                      {row.note && (
                        <span className="block text-xs text-slate-400">{row.note}</span>
                      )}
                      <span className="text-lg font-bold text-slate-900">{row.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={labels.ctaHref}
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0b1f3a] font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            {labels.cta}
            <ArrowRight size={18} />
          </a>
          <p className="text-blue-300 text-sm">
            {labels.note}
          </p>
        </div>
      </div>
    </section>
  );
}
