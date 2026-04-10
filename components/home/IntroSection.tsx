import { Ship, Sailboat, Users, Waves } from 'lucide-react';

const iconMap = [Ship, Sailboat, Users, Waves];

type Pillar = {
  title: string;
  text: string;
  href: string;
};

type IntroTranslations = {
  title: string;
  description: string;
  pillars: Pillar[];
};

const defaultTranslations: IntroTranslations = {
  title: 'Navega a tu ritmo por la Costa Brava',
  description: 'Navega por la bahía de Roses, los canales de Santa Margarita y el Parque Natural del Cap de Creus. En Experience Boat ofrecemos alquiler de barcos con y sin licencia, excursiones privadas con patrón y paseos al atardecer. Todo privado — solo tu grupo, ningún desconocido a bordo. Salimos desde los canales de Santa Margarita, en la entrada de Roses.',
  pillars: [
    {
      title: 'Sin licencia',
      text: 'Sal al mar sin necesitar titulación. Barcos fáciles de llevar para todos los perfiles.',
      href: '/alquiler-barco-sin-licencia-roses/',
    },
    {
      title: 'Con licencia',
      text: 'Embarcaciones potentes para navegar libremente por la Costa Brava norte.',
      href: '/alquiler-barco-con-licencia-roses/',
    },
    {
      title: 'Con patrón',
      text: 'Excursiones privadas guiadas. Nosotros llevamos el timón, tú disfrutas el paisaje.',
      href: '/experiencias-barco-roses/',
    },
    {
      title: 'Canal Tour',
      text: 'Descubre los canales de Santa Margarita desde el agua. Una experiencia única en Roses.',
      href: '/canales-santa-margarita/',
    },
  ],
};

export default function IntroSection({ translations }: { translations?: IntroTranslations } = {}) {
  const t = translations ?? defaultTranslations;

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, index) => {
            const Icon = iconMap[index];
            return (
              <a
                key={pillar.title}
                href={pillar.href}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.text}</p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
