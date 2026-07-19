import { MapPin } from 'lucide-react';

const places = [
  {
    name: 'Cala Montjoi',
    desc: 'Secluded cove at the start of Cap de Creus, with turquoise waters and volcanic rock. The culinary reference El Bulli was located here.',
    cat: 'Cove',
  },
  {
    name: 'Cala Canyelles Petites',
    desc: 'The most popular from Roses for families. Sheltered, sandy and with excellent snorkelling. About 20 minutes by boat.',
    cat: 'Snorkelling',
  },
  {
    name: 'Cala Almadraba',
    desc: 'Accessible by land too but much more beautiful from the water. With a boat you can anchor on the less visited southern side.',
    cat: 'Beach',
  },
  {
    name: 'Empúries Ruins',
    desc: 'From the sea you can appreciate the strategic position of the Greek and Roman city. A fascinating perspective of Greco-Roman history.',
    cat: 'Heritage',
  },
  {
    name: 'Sailing in the Bay',
    desc: 'Even without a specific destination, sailing across the Bay of Roses is a pleasure of its own. Wide, clear, and with the Pyrenees in the background.',
    cat: 'Navigation',
  },
  {
    name: 'L\'Escala area',
    desc: 'The southern half of the bay opens into L\'Escala. A longer but beautiful route for full-day rental.',
    cat: 'Route',
  },
];


const catColors: Record<string, string> = {
  Cove: 'bg-sky-50 text-sky-700',
  Snorkelling: 'bg-teal-50 text-teal-700',
  Beach: 'bg-orange-50 text-orange-700',
  Heritage: 'bg-violet-50 text-violet-700',
  Navigation: 'bg-blue-50 text-blue-700',
  Route: 'bg-green-50 text-green-700',
};

export default function WhatToSeeSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Bay of Roses</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          What to see on a licensed boat trip around the Bay of Roses
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 text-lg">
          The Bay of Roses offers a mix of natural beauty, history and excellent sailing conditions.
          Here are our recommended spots for a trip with a licensed boat.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {places.map((place) => (
            <div
              key={place.name}
              
              className="anim-stagger bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sky-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-gray-900 text-base">{place.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColors[place.cat] || 'bg-gray-100 text-gray-600'}`}>
                      {place.cat}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{place.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
