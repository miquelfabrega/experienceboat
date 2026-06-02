import { ChevronRight } from 'lucide-react';
import { localizedHref } from '@/lib/i18n/routes';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  p1: string;
  p2: string;
  cta: string;
  sequenceLabel: string;
  steps: { label: string; desc: string; color: string }[];
}> = {
  es: {
    eyebrow: 'La ruta completa',
    h2: 'Santa Margarita, Roses y el Cap de Creus — un día en el Mediterráneo',
    p1: 'Los canales de Santa Margarita no son solo un punto de partida. Son el primer capítulo de una ruta que puede llevaros desde las aguas más tranquilas de la Costa Brava hasta uno de los parques naturales marinos más impresionantes del Mediterráneo.',
    p2: 'En un día completo, con paradas para el baño y tiempo libre en las calas, es una de las mejores jornadas que puede ofrecer la Costa Brava norte. Cada tramo tiene su propia personalidad: los canales son tranquilidad y arquitectura; la bahía es amplitud y horizonte; el Cap de Creus es paisaje volcánico, luz mediterránea y la sensación de estar en un extremo del mundo.',
    cta: 'Ver excursiones hasta el Cap de Creus',
    sequenceLabel: 'Secuencia natural de la ruta',
    steps: [
      { label: 'Canales interiores de Santa Margarita', desc: 'Tranquilidad y arquitectura', color: 'bg-sky-500' },
      { label: 'Bahía de Roses', desc: 'Amplitud y horizonte', color: 'bg-sky-400' },
      { label: 'Cala Canyelles Petites', desc: 'Primera parada para el baño', color: 'bg-teal-500' },
      { label: 'Cala Almadraba', desc: 'Aguas cristalinas', color: 'bg-teal-400' },
      { label: 'Cap de Creus', desc: 'Paisaje volcánico y Mediterráneo', color: 'bg-emerald-500' },
    ],
  },
  fr: {
    eyebrow: 'L\'itinéraire complet',
    h2: 'Santa Margarita, Roses et le Cap de Creus — une journée en Méditerranée',
    p1: 'Les canaux de Santa Margarita ne sont pas qu\'un simple point de départ. Ils sont le premier chapitre d\'un itinéraire qui peut vous mener des eaux les plus calmes de la Costa Brava jusqu\'à l\'un des parcs naturels marins les plus impressionnants de la Méditerranée.',
    p2: 'Sur une journée complète, avec des arrêts baignade et du temps libre dans les criques, c\'est l\'une des plus belles journées que puisse offrir la Costa Brava nord. Chaque tronçon a sa propre personnalité : les canaux, c\'est le calme et l\'architecture ; la baie, c\'est l\'immensité et l\'horizon ; le Cap de Creus, c\'est un paysage volcanique, une lumière méditerranéenne et la sensation d\'être au bout du monde.',
    cta: 'Voir les excursions jusqu\'au Cap de Creus',
    sequenceLabel: 'Séquence naturelle de l\'itinéraire',
    steps: [
      { label: 'Canaux intérieurs de Santa Margarita', desc: 'Calme et architecture', color: 'bg-sky-500' },
      { label: 'Baie de Roses', desc: 'Immensité et horizon', color: 'bg-sky-400' },
      { label: 'Cala Canyelles Petites', desc: 'Premier arrêt baignade', color: 'bg-teal-500' },
      { label: 'Cala Almadraba', desc: 'Eaux cristallines', color: 'bg-teal-400' },
      { label: 'Cap de Creus', desc: 'Paysage volcanique et Méditerranée', color: 'bg-emerald-500' },
    ],
  },
  en: {
    eyebrow: 'The full route',
    h2: 'Santa Margarita, Roses and Cap de Creus — a day on the Mediterranean',
    p1: 'The Santa Margarita canals are not just a starting point. They are the first chapter of a route that can take you from the calmest waters on the Costa Brava to one of the most spectacular marine nature parks in the Mediterranean.',
    p2: 'On a full day, with swimming stops and free time in the coves, it is one of the finest days the northern Costa Brava has to offer. Each stretch has its own character: the canals are calm and architecture; the bay is openness and horizon; Cap de Creus is volcanic landscape, Mediterranean light and the feeling of standing at the edge of the world.',
    cta: 'See trips out to Cap de Creus',
    sequenceLabel: 'Natural sequence of the route',
    steps: [
      { label: 'Inner Santa Margarita canals', desc: 'Calm and architecture', color: 'bg-sky-500' },
      { label: 'Bay of Roses', desc: 'Openness and horizon', color: 'bg-sky-400' },
      { label: 'Cala Canyelles Petites', desc: 'First swimming stop', color: 'bg-teal-500' },
      { label: 'Cala Almadraba', desc: 'Crystal-clear waters', color: 'bg-teal-400' },
      { label: 'Cap de Creus', desc: 'Volcanic landscape and Mediterranean', color: 'bg-emerald-500' },
    ],
  },
  ca: {
    eyebrow: 'La ruta completa',
    h2: 'Santa Margarida, Roses i el Cap de Creus — un dia al Mediterrani',
    p1: 'Els canals de Santa Margarida no són només un punt de partida. Són el primer capítol d\'una ruta que us pot portar des de les aigües més tranquil·les de la Costa Brava fins a un dels parcs naturals marins més impressionants del Mediterrani.',
    p2: 'En un dia complet, amb parades per al bany i temps lliure a les cales, és una de les millors jornades que pot oferir la Costa Brava nord. Cada tram té la seva pròpia personalitat: els canals són tranquil·litat i arquitectura; la badia és amplitud i horitzó; el Cap de Creus és paisatge volcànic, llum mediterrània i la sensació d\'estar en un extrem del món.',
    cta: 'Veure excursions fins al Cap de Creus',
    sequenceLabel: 'Seqüència natural de la ruta',
    steps: [
      { label: 'Canals interiors de Santa Margarida', desc: 'Tranquil·litat i arquitectura', color: 'bg-sky-500' },
      { label: 'Badia de Roses', desc: 'Amplitud i horitzó', color: 'bg-sky-400' },
      { label: 'Cala Canyelles Petites', desc: 'Primera parada per al bany', color: 'bg-teal-500' },
      { label: 'Cala Almadraba', desc: 'Aigües cristal·lines', color: 'bg-teal-400' },
      { label: 'Cap de Creus', desc: 'Paisatge volcànic i Mediterrani', color: 'bg-emerald-500' },
    ],
  },
};

export default function FullRouteSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
           className="anim-fade-right">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              {c.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {c.h2}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {c.p1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {c.p2}
            </p>
            <a
              href={localizedHref('experiences', lang)}
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
            >
              {c.cta}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Route visual */}
          <div
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 anim-fade-left anim-delay-1"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              {c.sequenceLabel}
            </p>
            <div className="space-y-0">
              {c.steps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${step.color} shadow-md mt-1 shrink-0`} />
                    {i < c.steps.length - 1 && (
                      <div className="w-0.5 bg-slate-200 flex-1 my-1 min-h-[32px]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6">
                    <p className="font-bold text-gray-900 leading-snug">{step.label}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
