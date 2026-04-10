import { Anchor, Wind, Waves } from 'lucide-react';

type Lang = 'es' | 'fr';

interface TipoLanchaSectionProps {
  lang?: Lang;
}

// TODO: Add FR translations for this component
const lanchas = [
  {
    icon: Anchor,
    name: 'Neumática deportiva',
    description:
      'Velocidad, maniobrabilidad y diversión. Ideales para quienes buscan una experiencia dinámica en el agua.',
    features: ['Motor potente', 'Acceso rápido a calas remotas', 'Perfecta para grupos pequeños'],
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Wind,
    name: 'Lancha con cabina',
    description:
      'Confort y protección. Ideales para familias o grupos que valoran la comodidad durante la navegación.',
    features: ['Protección del sol y lluvia', 'Baño a bordo', 'Más estabilidad en olas'],
    accent: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Waves,
    name: 'Embarcación premium',
    description:
      'Lujo, espacio y prestaciones. La mejor opción para quienes buscan la máxima experiencia de navegación.',
    features: ['Camarotes para descanso', 'Cocina completa', 'Capacidad para grupos grandes'],
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function TipoLanchaSection({ lang = 'es' }: TipoLanchaSectionProps) {
  const title = lang === 'es' ? 'Tipos de lancha disponibles' : 'Types de vedettes disponibles';
  const subtitle =
    lang === 'es'
      ? 'Tenemos embarcaciones pensadas para diferentes necesidades y preferencias. Todas salen desde Santa Margarita.'
      : 'Nous avons des embarcations conçues pour différents besoins et préférences. Toutes partent de Santa Margarita.';

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight text-center">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {lanchas.map((boat) => {
            const Icon = boat.icon;
            return (
              <div key={boat.name} className={`${boat.bg} rounded-2xl p-8 border border-gray-200`}>
                <div className={`${boat.accent} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{boat.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{boat.description}</p>
                <ul className="space-y-2">
                  {boat.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
