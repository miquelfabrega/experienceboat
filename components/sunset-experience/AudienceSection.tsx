import { Heart, Users, Baby } from 'lucide-react';

const translations = {
  es: {
    title: 'Para quién es el Sunset Experience',
    description: 'El Sunset Experience está pensado para momentos especiales. No es la excursión de playa de mediodía — es la salida que cierra un día perfecto o que convierte un día ordinario en algo que se recuerda.',
    audiences: [
      {
        title: 'Parejas',
        desc: 'El atardecer en barco es el plan romántico por excelencia en Roses. Sin grupos, sin desconocidos, solo vosotros dos y el mejor momento del día. Para aniversarios, escapadas o simplemente porque queréis un atardecer diferente. Si queréis preparar algo especial a bordo —cava, flores, una sorpresa— consultadnos.',
      },
      {
        title: 'Grupos pequeños de amigos',
        desc: 'Para despedidas tranquilas, cumpleaños nocturnos o simplemente el final perfecto para un día en la Costa Brava. El Sunset Experience en grupo tiene una energía diferente a la excursión de día —más íntima, más contemplativa, con esa conversación que solo surge cuando el entorno es suficientemente especial.',
      },
      {
        title: 'Familias',
        desc: 'Para familias que quieren una salida diferente a las excursiones habituales. Los niños que han pasado el día en la playa suelen vivir el atardecer desde el barco con una atención completamente diferente. El cambio de color y el regreso nocturno se graban en la memoria con una intensidad única.',
      },
    ]
  },
  fr: {
    title: 'Pour qui est le Sunset Experience',
    description: 'Le Sunset Experience est conçu pour des moments spéciaux. Ce n\'est pas l\'excursion de plage de midi — c\'est la sortie qui clôt une journée parfaite ou qui transforme une journée ordinaire en quelque chose dont on se souvient.',
    audiences: [
      {
        title: 'Couples',
        desc: 'Le coucher de soleil en bateau est le plan romantique par excellence à Roses. Pas de groupes, pas d\'inconnus, juste vous deux et le plus beau moment de la journée. Pour les anniversaires, les escapades ou simplement parce que vous voulez un coucher de soleil différent. Si vous voulez préparer quelque chose de spécial à bord —champagne, fleurs, une surprise— consultez-nous.',
      },
      {
        title: 'Petits groupes d\'amis',
        desc: 'Pour les enterrements de vie tranquilles, les anniversaires nocturnes ou simplement la fin parfaite d\'une journée sur la Côte Brava. Le Sunset Experience en groupe a une énergie différente de l\'excursion de jour —plus intime, plus contemplative, avec cette conversation qui ne surgit que lorsque l\'environnement est assez spécial.',
      },
      {
        title: 'Familles',
        desc: 'Pour les familles qui veulent une sortie différente des excursions habituelles. Les enfants qui ont passé la journée à la plage vivent généralement le coucher de soleil depuis le bateau avec une attention complètement différente. Le changement de couleur et le retour nocturne sont gravés dans la mémoire avec une intensité unique.',
      },
    ]
  },
  en: {
    title: 'Who is the Sunset Experience for?',
    description: 'The Sunset Experience is designed for special moments. It\'s not the midday beach excursion — it\'s the trip that closes a perfect day or turns an ordinary day into something memorable.',
    audiences: [
      {
        title: 'Couples',
        desc: 'A sunset boat trip is the ultimate romantic experience in Roses. No groups, no strangers, just you two and the best moment of the day. For anniversaries, getaways, or simply because you want a different sunset. If you want to prepare something special on board—champagne, flowers, a surprise—let us know.',
      },
      {
        title: 'Small groups of friends',
        desc: 'For quiet celebrations, evening birthday parties, or simply the perfect end to a Costa Brava day. The Sunset Experience in a group has a different energy from a daytime excursion—more intimate, more contemplative, with the kind of conversation that only flows in truly special settings.',
      },
      {
        title: 'Families',
        desc: 'For families looking for something different from the usual excursions. Children who have spent the day at the beach often experience the sunset from the boat with completely different attention. The colour change and the evening return are etched in memory with unique intensity.',
      },
    ]
  }
};

interface AudienceSectionProps {
  lang?: 'es' | 'fr' | 'en';
}

export default function AudienceSection({ lang = 'es' }: AudienceSectionProps) {
  const t = translations[lang];
  const iconMap = [Heart, Users, Baby];

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

        <div className="grid md:grid-cols-3 gap-8">
          {t.audiences.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
