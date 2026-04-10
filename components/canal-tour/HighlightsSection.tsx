import { Eye, Navigation, Home, ShieldCheck } from 'lucide-react';

const translations = {
  es: {
    title: 'La mejor forma de explorar los canales',
    description: 'Te ofrecemos la oportunidad de sumergirte en este paisaje urbano y natural de una manera única y divertida.',
    highlights: [
      {
        title: 'Auténtico Capitán',
        desc: 'Nuestros barcos no requieren ningún tipo de titulación náutica. Te damos unas sencillas instrucciones y tú mismo tomarás el timón, marcando el ritmo de tu propia aventura.'
      },
      {
        title: 'Perspectiva 360º',
        desc: 'Descubre los canales desde dentro, una forma completamente diferente y privilegiada de visitar Santa Margarita, con vistas panorámicas desde el agua.'
      },
      {
        title: 'Casas Espectaculares',
        desc: 'Durante el recorrido te impresionarán las increíbles viviendas, chalets y villas con amarre propio. Auténticas joyas arquitectónicas a las orillas de los canales.'
      },
      {
        title: 'Seguridad para la familia',
        desc: 'Una actividad tranquila, segura y perfecta para disfrutar en familia o con amigos. Los canales son aguas protegidas donde navegar es fácil y relajante.'
      }
    ]
  },
  fr: {
    title: 'Le meilleur moyen d\'explorer les canaux',
    description: 'Nous vous offrons l\'opportunité de vous plonger dans ce paysage urbain et naturel d\'une manière unique et amusante.',
    highlights: [
      {
        title: 'Vrai Capitaine',
        desc: 'Nos bateaux ne nécessitent aucune qualification nautique. Nous vous donnons des instructions simples et vous prenez la barre vous-même, fixant le rythme de votre propre aventure.'
      },
      {
        title: 'Perspective 360°',
        desc: 'Découvrez les canaux de l\'intérieur, une façon complètement différente et privilégiée de visiter Santa Margarita, avec des vues panoramiques depuis l\'eau.'
      },
      {
        title: 'Maisons Spectaculaires',
        desc: 'Pendant le voyage, vous serez impressionné par les incroyables maisons, chalets et villas avec mouillage privé. De véritables joyaux architecturaux au bord des canaux.'
      },
      {
        title: 'Sécurité pour la famille',
        desc: 'Une activité tranquille, sûre et parfaite à apprécier en famille ou entre amis. Les canaux sont des eaux protégées où la navigation est facile et relaxante.'
      }
    ]
  },
  en: {
    title: 'The best way to explore the canals',
    description: 'We offer you the opportunity to immerse yourself in this urban and natural landscape in a unique and fun way.',
    highlights: [
      {
        title: 'Authentic Captain',
        desc: 'Our boats require no nautical qualifications. We give you simple instructions and you take the helm yourself, setting the pace of your own adventure.'
      },
      {
        title: '360° Perspective',
        desc: 'Discover the canals from within—a completely different and privileged way to visit Santa Margarita, with panoramic views from the water.'
      },
      {
        title: 'Spectacular Houses',
        desc: 'During your journey you\'ll be impressed by the incredible homes, chalets and villas with private moorings. Architectural gems lining the canals.'
      },
      {
        title: 'Family-friendly Safety',
        desc: 'A quiet, safe activity perfect to enjoy with family or friends. The canals are protected waters where sailing is easy and relaxing.'
      }
    ]
  }
};

interface HighlightsSectionProps {
  lang?: 'es' | 'fr' | 'en';
}

export default function HighlightsSection({ lang = 'es' }: HighlightsSectionProps) {
  const t = translations[lang];
  const iconMap = [Navigation, Eye, Home, ShieldCheck];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.highlights.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
