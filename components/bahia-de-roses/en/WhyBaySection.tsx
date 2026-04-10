import { Wind, Anchor, Eye, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Wind,
    title: 'Protected and calm waters',
    desc: 'The bay is naturally sheltered from the Tramontane wind, especially in the morning. Ideal conditions for those starting out with a licence or who prefer relaxed navigation.',
  },
  {
    icon: Anchor,
    title: 'Hidden coves reachable only by boat',
    desc: 'Cala Montjoi, Cala Murtra and Cala Canyelles are impossible or impractical to reach by land. By boat you are there in minutes, with the sea entirely to yourself.',
  },
  {
    icon: Eye,
    title: 'Wildlife and natural landscapes',
    desc: 'The bay is part of the Cap de Creus biosphere reserve. Dolphins, seabirds and underwater fauna that you simply cannot see from the shore.',
  },
  {
    icon: Sun,
    title: 'Long sunny seasons',
    desc: 'The Bay of Roses enjoys more than 300 days of sunshine per year. The rental season runs from April to November, covering spring, summer and well into autumn.',
  },
];


export default function WhyBaySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Why here?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Why sail the Bay of Roses with a rented boat?
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
          This bay is one of the great secrets of the Mediterranean for sailors who know it.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                
                className="anim-stagger bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center mb-4 transition-colors shadow-md shadow-sky-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
