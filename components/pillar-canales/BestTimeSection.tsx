import { Sun, Sunset, Calendar, Flame } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  intro: string;
  slots: {
    iconKey: 'sun' | 'sunset' | 'calendar' | 'flame';
    time: string;
    label: string;
    desc: string;
    highlight: string;
    highlightColor: string;
  }[];
}> = {
  es: {
    eyebrow: 'Planifica tu salida',
    h2: 'Cuándo visitar los canales de Santa Margarita en barco',
    intro:
      'Los canales son navegables durante toda la temporada náutica, de abril a octubre. Estos son los mejores momentos según lo que busques.',
    slots: [
      {
        iconKey: 'sun',
        time: '8:00 – 10:00',
        label: 'Primera hora de la mañana',
        desc: 'La luz es espectacular, los canales están en calma total y hay muy poco tráfico náutico. La opción preferida para fotografía y para quienes quieren disfrutar sin aglomeraciones.',
        highlight: 'Ideal para fotografía',
        highlightColor: 'text-amber-600 bg-amber-50',
      },
      {
        iconKey: 'sunset',
        time: '18:00 – 20:00',
        label: 'Atardecer',
        desc: 'Los reflejos en el agua al caer la tarde convierten los canales en un escenario irrepetible. Es el momento de nuestro Sunset Experience, la salida más especial del catálogo.',
        highlight: 'Sunset Experience',
        highlightColor: 'text-orange-600 bg-orange-50',
      },
      {
        iconKey: 'calendar',
        time: 'Mayo · Junio · Septiembre',
        label: 'Temporada media',
        desc: 'Las mejores condiciones de navegación, menos masificación en las calas y precios más accesibles que en plena temporada alta.',
        highlight: 'Mejor relación calidad-precio',
        highlightColor: 'text-teal-600 bg-teal-50',
      },
      {
        iconKey: 'flame',
        time: 'Julio · Agosto',
        label: 'Temporada alta',
        desc: 'La temporada alta. Más ambiente, más calor, más reservas. Recomendamos reservar con al menos dos semanas de antelación.',
        highlight: 'Reserva con antelación',
        highlightColor: 'text-red-600 bg-red-50',
      },
    ],
  },
  fr: {
    eyebrow: 'Planifiez votre sortie',
    h2: 'Quand visiter les canaux de Santa Margarita en bateau',
    intro:
      'Les canaux sont navigables pendant toute la saison nautique, d\'avril à octobre. Voici les meilleurs moments selon ce que vous recherchez.',
    slots: [
      {
        iconKey: 'sun',
        time: '8h00 – 10h00',
        label: 'Tôt le matin',
        desc: 'La lumière est spectaculaire, les canaux sont d\'un calme absolu et le trafic nautique est très réduit. L\'option préférée pour la photographie et pour ceux qui veulent profiter sans foule.',
        highlight: 'Idéal pour la photographie',
        highlightColor: 'text-amber-600 bg-amber-50',
      },
      {
        iconKey: 'sunset',
        time: '18h00 – 20h00',
        label: 'Coucher de soleil',
        desc: 'Les reflets sur l\'eau à la tombée du jour transforment les canaux en un décor unique. C\'est le moment de notre Sunset Experience, la sortie la plus spéciale du catalogue.',
        highlight: 'Sunset Experience',
        highlightColor: 'text-orange-600 bg-orange-50',
      },
      {
        iconKey: 'calendar',
        time: 'Mai · Juin · Septembre',
        label: 'Moyenne saison',
        desc: 'Les meilleures conditions de navigation, moins de monde dans les criques et des prix plus abordables qu\'en pleine haute saison.',
        highlight: 'Meilleur rapport qualité-prix',
        highlightColor: 'text-teal-600 bg-teal-50',
      },
      {
        iconKey: 'flame',
        time: 'Juillet · Août',
        label: 'Haute saison',
        desc: 'La haute saison. Plus d\'ambiance, plus de chaleur, plus de réservations. Nous recommandons de réserver au moins deux semaines à l\'avance.',
        highlight: 'Réservez à l\'avance',
        highlightColor: 'text-red-600 bg-red-50',
      },
    ],
  },
  en: {
    eyebrow: 'Plan your trip',
    h2: 'When to visit the Santa Margarita canals by boat',
    intro:
      'The canals are navigable throughout the boating season, from April to October. These are the best times depending on what you are looking for.',
    slots: [
      {
        iconKey: 'sun',
        time: '8:00 – 10:00',
        label: 'Early morning',
        desc: 'The light is spectacular, the canals are perfectly calm and there is very little boat traffic. The favourite choice for photography and for those who want to enjoy without the crowds.',
        highlight: 'Ideal for photography',
        highlightColor: 'text-amber-600 bg-amber-50',
      },
      {
        iconKey: 'sunset',
        time: '18:00 – 20:00',
        label: 'Sunset',
        desc: 'The reflections on the water as evening falls turn the canals into an unrepeatable setting. This is the time for our Sunset Experience, the most special trip in the catalogue.',
        highlight: 'Sunset Experience',
        highlightColor: 'text-orange-600 bg-orange-50',
      },
      {
        iconKey: 'calendar',
        time: 'May · June · September',
        label: 'Shoulder season',
        desc: 'The best sailing conditions, fewer crowds in the coves and more affordable prices than at the height of high season.',
        highlight: 'Best value for money',
        highlightColor: 'text-teal-600 bg-teal-50',
      },
      {
        iconKey: 'flame',
        time: 'July · August',
        label: 'High season',
        desc: 'Peak season. More atmosphere, more heat, more bookings. We recommend booking at least two weeks in advance.',
        highlight: 'Book in advance',
        highlightColor: 'text-red-600 bg-red-50',
      },
    ],
  },
  ca: {
    eyebrow: 'Planifica la teva sortida',
    h2: 'Quan visitar els canals de Santa Margarida en vaixell',
    intro:
      'Els canals són navegables durant tota la temporada nàutica, d\'abril a octubre. Aquests són els millors moments segons el que busqueu.',
    slots: [
      {
        iconKey: 'sun',
        time: '8:00 – 10:00',
        label: 'Primera hora del matí',
        desc: 'La llum és espectacular, els canals estan en calma total i hi ha molt poc trànsit nàutic. L\'opció preferida per a la fotografia i per a qui vol gaudir sense aglomeracions.',
        highlight: 'Ideal per a la fotografia',
        highlightColor: 'text-amber-600 bg-amber-50',
      },
      {
        iconKey: 'sunset',
        time: '18:00 – 20:00',
        label: 'Capvespre',
        desc: 'Els reflexos a l\'aigua en caure la tarda converteixen els canals en un escenari irrepetible. És el moment de la nostra Sunset Experience, la sortida més especial del catàleg.',
        highlight: 'Sunset Experience',
        highlightColor: 'text-orange-600 bg-orange-50',
      },
      {
        iconKey: 'calendar',
        time: 'Maig · Juny · Setembre',
        label: 'Temporada mitjana',
        desc: 'Les millors condicions de navegació, menys massificació a les cales i preus més accessibles que en plena temporada alta.',
        highlight: 'Millor relació qualitat-preu',
        highlightColor: 'text-teal-600 bg-teal-50',
      },
      {
        iconKey: 'flame',
        time: 'Juliol · Agost',
        label: 'Temporada alta',
        desc: 'La temporada alta. Més ambient, més calor, més reserves. Us recomanem reservar amb almenys dues setmanes d\'antelació.',
        highlight: 'Reserva amb antelació',
        highlightColor: 'text-red-600 bg-red-50',
      },
    ],
  },
};

const iconMap = { sun: Sun, sunset: Sunset, calendar: Calendar, flame: Flame };

export default function BestTimeSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{c.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {c.h2}
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          {c.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {c.slots.map((slot) => {
            const Icon = iconMap[slot.iconKey];
            return (
              <div
                key={slot.label}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group flex gap-5 anim-fade-up"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md shadow-sky-500/30 mt-1">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{slot.time}</p>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{slot.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{slot.desc}</p>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${slot.highlightColor}`}>
                    {slot.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
