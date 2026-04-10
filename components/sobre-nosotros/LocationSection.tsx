import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  tag: string; h2: string; p1: string; p2: string; routeTitle: string; imgAlt: string;
  trustTitle: string; trustItems: string[];
  steps: { title: string; desc: string }[];
}> = {
  es: {
    tag: 'Dónde navegamos',
    h2: 'Tu base en Santa Margarita, tu horizonte el Cap de Creus',
    p1: 'Operamos desde la Marina de Santa Margarita en Roses, una ubicación estratégica que te permite acceder en minutos a tres ecosistemas náuticos completamente distintos: los tranquilos canales, la amplia bahía de Roses y la salvaje costa del Parque Natural del Cap de Creus.',
    p2: 'Esta localización privilegiada nos convierte en la opción ideal tanto para quienes buscan una navegación tranquila sin licencia como para los patrones con experiencia que quieren explorar las calas más vírgenes de la Costa Brava.',
    routeTitle: 'Ruta típica desde la Marina',
    imgAlt: 'Ruta típica desde la Marina de Santa Margarita al Cap de Creus',
    trustTitle: 'Tu empresa de confianza en Roses',
    trustItems: ['Rutas exclusivas por el Cap de Creus', 'Opciones con y sin titulación náutica', 'Reservas online y sin sorpresas', 'La mejor experiencia en la Costa Brava'],
    steps: [
      { title: 'Marina de Santa Margarita', desc: 'Punto de salida base.' },
      { title: 'Canales navegables', desc: 'Navegación tranquila, perfecta sin licencia (~10 min).' },
      { title: 'Bahía de Roses', desc: 'Playas, snorkel y aguas cristalinas (~20 min).' },
      { title: 'Punta Falconera', desc: 'Entrada al Parque Natural del Cap de Creus (~35 min).' },
      { title: 'Cap de Creus', desc: 'Calas vírgenes y paisaje único (~55 min).' },
    ],
  },
  fr: {
    tag: 'Où nous naviguons',
    h2: 'Notre base à Santa Margarita, votre horizon le Cap de Creus',
    p1: "Nous opérons depuis la Marina de Santa Margarita à Roses — une localisation stratégique qui vous donne accès en quelques minutes à trois univers nautiques distincts : les calmes canaux, la vaste baie de Roses et le littoral sauvage du Parc Naturel du Cap de Creus.",
    p2: "Cet emplacement privilégié fait de nous l'option idéale aussi bien pour ceux qui recherchent une navigation tranquille sans permis que pour les patrons expérimentés souhaitant explorer les criques les plus préservées de la Costa Brava.",
    routeTitle: 'Itinéraire typique depuis la Marina',
    imgAlt: 'Itinéraire typique de la Marina de Santa Margarita au Cap de Creus',
    trustTitle: 'Votre spécialiste de confiance à Roses',
    trustItems: ['Routes exclusives vers le Cap de Creus', 'Options avec et sans permis nautique', 'Réservation en ligne sans surprises', 'La meilleure expérience sur la Costa Brava'],
    steps: [
      { title: 'Marina de Santa Margarita', desc: 'Point de départ · Roses, Girona.' },
      { title: 'Canaux navigables', desc: 'Navigation tranquille, idéale sans permis (~10 min).' },
      { title: 'Baie de Roses', desc: 'Plages, snorkeling et eaux cristallines (~20 min).' },
      { title: 'Punta Falconera', desc: 'Entrée du Parc Naturel du Cap de Creus (~35 min).' },
      { title: 'Cap de Creus', desc: 'Criques sauvages et paysage unique (~55 min).' },
    ],
  },
  en: {
    tag: 'Where we sail',
    h2: 'Our base in Santa Margarita, your horizon Cap de Creus',
    p1: 'We operate from the Marina de Santa Margarita in Roses — a strategic location that puts three completely different nautical settings within minutes of each other: the calm canals, the wide Bay of Roses and the rugged coastline of the Cap de Creus Natural Park.',
    p2: 'This exceptional location makes us the ideal choice for those seeking a relaxed no-licence cruise and for experienced skippers wanting to discover the most unspoilt coves of the Costa Brava.',
    routeTitle: 'Typical route from the Marina',
    imgAlt: 'Route from Marina de Santa Margarita to Cap de Creus',
    trustTitle: 'Your trusted company in Roses',
    trustItems: ['Exclusive routes to Cap de Creus', 'Options with and without a nautical licence', 'Online booking with no hidden surprises', 'The best experience on the Costa Brava'],
    steps: [
      { title: 'Marina de Santa Margarita', desc: 'Departure point · Roses, Girona.' },
      { title: 'Navigable canals', desc: 'Calm navigation, perfect without a licence (~10 min).' },
      { title: 'Bay of Roses', desc: 'Beaches, snorkelling and crystal-clear water (~20 min).' },
      { title: 'Punta Falconera', desc: 'Gateway to the Cap de Creus Natural Park (~35 min).' },
      { title: 'Cap de Creus', desc: 'Wild coves and unique scenery (~55 min).' },
    ],
  },
};

export default function LocationSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm mb-3 block">
              {tx.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">{tx.h2}</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-10">
              <p>{tx.p1}</p>
              <p>{tx.p2}</p>
            </div>
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Navigation className="w-6 h-6 text-sky-400" />
                {tx.routeTitle}
              </h3>
              <div className="relative pl-6 before:absolute before:inset-y-2 before:left-2 before:w-0.5 before:bg-slate-700">
                {tx.steps.map((s, i) => (
                  <div key={i} className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[32px] top-1.5 w-3.5 h-3.5 bg-sky-400 rounded-full border-4 border-slate-900 box-content shadow-sm shadow-sky-900/50" />
                    <h4 className="font-bold text-white text-lg">{s.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-800">
              <Image
                src="https://picsum.photos/seed/mapa-roses-cap-creus/800/800"
                alt={tx.imgAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-sky-900/40 border border-sky-800/60 rounded-3xl p-8 backdrop-blur-sm">
              <h4 className="font-bold mb-5 flex items-center gap-3 text-lg">
                <CheckCircle2 className="w-6 h-6 text-sky-400 shrink-0" aria-hidden />
                {tx.trustTitle}
              </h4>
              <ul className="space-y-4 text-sky-100 font-medium">
                {tx.trustItems.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 shrink-0 text-sky-400 mt-0.5" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
