import { Calendar, Sun, Moon } from 'lucide-react';

const translations = {
  es: {
    title: 'Cuándo es mejor el Sunset Experience en Roses',
    description: 'El atardecer en Roses tiene características diferentes según la época del año y eso afecta directamente a la experiencia.',
    seasons: [
      {
        title: 'Julio y agosto',
        subtitle: 'Atardeceres espectaculares',
        desc: 'Los meses con los atardeceres más espectaculares del año. El sol se pone tarde (entre las 21:00 y las 21:30), los cielos son despejados casi todos los días y la temperatura en el agua al caer la tarde es perfecta. La pega: hay que reservar con bastante antelación.',
        icon: Sun
      },
      {
        title: 'Junio y septiembre',
        subtitle: 'El equilibrio perfecto',
        desc: 'Atardeceres igualmente bonitos, temperatura excelente y mucha menos demanda que en plena temporada alta. Para parejas o grupos que tienen flexibilidad de fechas, estos meses son la mejor opción.',
        icon: Calendar
      },
      {
        title: 'Mayo y octubre',
        subtitle: 'Tranquilidad total',
        desc: 'Para los que prefieren el Sunset Experience fuera de temporada. El sol se pone antes (19:30-20:30), el frío empieza a aparecer y hay mucho menos tráfico en los canales. La soledad de Santa Margarita al atardecer en octubre tiene una calidad diferente.',
        icon: Moon
      },
    ]
  },
  fr: {
    title: 'Quand est le meilleur moment pour le Sunset Experience à Roses',
    description: 'Le coucher de soleil à Roses a des caractéristiques différentes selon la saison et cela affecte directement l\'expérience.',
    seasons: [
      {
        title: 'Juillet et août',
        subtitle: 'Couchers de soleil spectaculaires',
        desc: 'Les mois avec les couchers de soleil les plus spectaculaires de l\'année. Le soleil se couche tard (entre 21:00 et 21:30), le ciel est dégagé presque tous les jours et la température de l\'eau en fin d\'après-midi est parfaite. Le bémol : il faut réserver bien à l\'avance.',
        icon: Sun
      },
      {
        title: 'Juin et septembre',
        subtitle: 'L\'équilibre parfait',
        desc: 'Des couchers de soleil tout aussi beaux, une température excellente et beaucoup moins de demande qu\'en pleine haute saison. Pour les couples ou les groupes ayant de la flexibilité sur les dates, ces mois sont le meilleur choix.',
        icon: Calendar
      },
      {
        title: 'Mai et octobre',
        subtitle: 'Tranquillité totale',
        desc: 'Pour ceux qui préfèrent le Sunset Experience hors saison. Le soleil se couche plus tôt (19:30-20:30), le froid commence à apparaître et il y a beaucoup moins de circulation dans les canaux. La solitude de Santa Margarita au coucher du soleil en octobre a une qualité différente.',
        icon: Moon
      },
    ]
  },
  en: {
    title: 'When is the best time for the Sunset Experience in Roses',
    description: 'The sunset in Roses has different characteristics depending on the season and this directly affects the experience.',
    seasons: [
      {
        title: 'July and August',
        subtitle: 'Spectacular sunsets',
        desc: 'The months with the most spectacular sunsets of the year. The sun sets late (between 21:00 and 21:30), skies are clear on almost every day, and the water temperature in the late afternoon is perfect. The downside: you need to book well in advance.',
        icon: Sun
      },
      {
        title: 'June and September',
        subtitle: 'Perfect balance',
        desc: 'Equally beautiful sunsets, excellent temperature, and much less demand than at the height of summer. For couples or groups with flexibility on dates, these months are the best option.',
        icon: Calendar
      },
      {
        title: 'May and October',
        subtitle: 'Total tranquility',
        desc: 'For those who prefer the Sunset Experience out of season. The sun sets earlier (19:30-20:30), cold starts to appear, and there is much less traffic in the canals. The solitude of Santa Margarita at sunset in October has a different quality.',
        icon: Moon
      },
    ]
  },
  ca: {
    title: 'Quan és millor el Sunset Experience a Roses',
    description: 'El capvespre a Roses té característiques diferents segons l\'època de l\'any i això afecta directament l\'experiència.',
    seasons: [
      {
        title: 'Juliol i agost',
        subtitle: 'Capvespres espectaculars',
        desc: 'Els mesos amb els capvespres més espectaculars de l\'any. El sol es pon tard (entre les 21:00 i les 21:30), els cels són clars gairebé cada dia i la temperatura de l\'aigua en caure la tarda és perfecta. L\'inconvenient: cal reservar amb força antelació.',
        icon: Sun
      },
      {
        title: 'Juny i setembre',
        subtitle: 'L\'equilibri perfecte',
        desc: 'Capvespres igualment bonics, temperatura excel·lent i molta menys demanda que en plena temporada alta. Per a parelles o grups amb flexibilitat de dates, aquests mesos són la millor opció.',
        icon: Calendar
      },
      {
        title: 'Maig i octubre',
        subtitle: 'Tranquil·litat total',
        desc: 'Per als qui prefereixen el Sunset Experience fora de temporada. El sol es pon abans (19:30-20:30), comença a aparèixer el fred i hi ha molt menys trànsit als canals. La solitud de Santa Margarida al capvespre a l\'octubre té una qualitat diferent.',
        icon: Moon
      },
    ]
  }
};

interface BestTimeSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function BestTimeSection({ lang = 'es' }: BestTimeSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50 border-b border-gray-100">
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
          {t.seasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-orange-600 mb-4 uppercase tracking-wider">{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
