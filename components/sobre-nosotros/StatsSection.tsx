type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, { label1: string; label2: string; label3: string }> = {
  es: { label1: 'Salidas al año', label2: 'Embarcaciones propias', label3: 'Satisfacción' },
  fr: { label1: 'Sorties par an', label2: 'Bateaux en propre', label3: 'Satisfaction' },
  en: { label1: 'Departures per year', label2: 'Boats owned', label3: 'Satisfaction rate' },
};

export default function StatsSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const stats = [
    { label: tx.label1, value: '+500' },
    { label: tx.label2, value: '8' },
    { label: tx.label3, value: '100%' },
  ];
  return (
    <div className="bg-sky-600 py-12 md:py-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-sky-500/50">
          {stats.map((stat, i) => (
            <div key={i} className="pt-8 md:pt-12 md:pb-12 first:pt-0 md:first:pt-12">
              <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-sky-100 font-semibold uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
