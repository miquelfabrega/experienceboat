import { MapPin, Clock, Star } from 'lucide-react';

const routes = [
  {
    name: 'Classic route: Roses to Cap de Creus',
    duration: 'Full day',
    distance: '~30 km round trip',
    difficulty: 'Moderate',
    desc: 'The star route from Santa Margarita. Head north from the bay, pass Cala Montjoi, Cala Culip and reach the lighthouse at Cap de Creus — the easternmost point of the Iberian Peninsula. Return route following the coast stops at whichever coves catch your eye.',
    highlights: ['Cap de Creus lighthouse', 'Cala Culip', 'Cala Montjoi', 'Open sea'],
    recommended: true,
  },
  {
    name: 'Half-day route: Northern coves',
    duration: 'Half day (morning)',
    distance: '~15 km',
    difficulty: 'Easy',
    desc: 'Perfect for a relaxed morning. Head towards Cala Canyelles and continue north to Cala Almadraba. At each stop you can anchor, swim and snorkel before heading back in time for lunch.',
    highlights: ['Cala Canyelles Petites', 'Cala Almadraba', 'Cala Pelosa'],
    recommended: false,
  },
  {
    name: 'Sunset route: Bay of Roses southwards',
    duration: 'Half day (afternoon)',
    distance: '~20 km',
    difficulty: 'Easy',
    desc: 'For late afternoon and sunset. Head south through the bay towards Empuriabrava. Return with the sun setting behind the Pyrenees — one of the most spectacular views you will find anywhere on the Costa Brava.',
    highlights: ['Bay of Roses sunset', 'Pyrenees panorama', 'Empuriabrava'],
    recommended: false,
  },
];


const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-50 text-green-700',
  Moderate: 'bg-orange-50 text-orange-700',
  Challenging: 'bg-red-50 text-red-700',
};

export default function RoutesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Suggested routes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Motorboat routes on the Costa Brava from Roses
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 text-lg">
          These are some of the routes our customers most enjoy. With a licensed motorboat from Santa
          Margarita the options are nearly limitless — these are just our starting recommendations.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid gap-6"
        >
          {routes.map((route) => (
            <div
              key={route.name}
              
              className={`bg-white rounded-3xl p-7 border shadow-sm relative overflow-hidden ${
                route.recommended ? 'border-sky-200 shadow-sky-100' : 'border-gray-100'
              }`}
            >
              {route.recommended && (
                <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  Most popular
                </div>
              )}

              <div className="grid lg:grid-cols-[1fr_auto] gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3 pr-24">{route.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{route.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1.5 text-xs bg-slate-50 text-gray-700 px-3 py-1.5 rounded-full border border-slate-200">
                        <MapPin className="w-3 h-3 text-sky-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3 lg:items-end shrink-0">
                  <div className="flex items-center gap-2 text-sm bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100">
                    <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="font-semibold text-gray-900">{route.duration}</span>
                  </div>
                  <div className="text-sm bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100">
                    <span className="text-gray-500 text-xs block">Distance</span>
                    <span className="font-semibold text-gray-900">{route.distance}</span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${difficultyColors[route.difficulty] || 'bg-gray-100 text-gray-600'}`}>
                    {route.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
