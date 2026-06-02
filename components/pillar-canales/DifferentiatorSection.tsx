import { Anchor, Baby, Car } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  intro: string;
  points: { title: string; desc: string }[];
}> = {
  es: {
    eyebrow: 'Nuestra diferencia',
    h2: 'El punto de salida que nadie más tiene',
    intro:
      'Salimos desde los canales de Santa Margarita, con aparcamiento justo al lado, sin colas, sin cargar el material caminando. Menos logística.',
    points: [
      {
        title: 'La experiencia empieza antes de tocar el mar',
        desc: 'Salir desde los canales significa que el recorrido interior por las vías navegables de Santa Margarita es en sí mismo un destino — no solo el camino hacia otro sitio.',
      },
      {
        title: 'Perfecto para familias con niños',
        desc: 'Las aguas de los canales son completamente tranquilas, protegidas del viento y sin oleaje. Los más pequeños pueden ver las casas desde el agua, pasar bajo los puentes y vivir la experiencia náutica sin la incertidumbre del mar abierto.',
      },
      {
        title: 'Aparca y embarca',
        desc: 'Mientras otros amarran lejos y tú buscas aparcamiento, en Santa Margarita llegas, aparcas al lado y embarcas. Sin complicaciones logísticas. Más tiempo disfrutando, menos tiempo gestionando.',
      },
    ],
  },
  fr: {
    eyebrow: 'Notre différence',
    h2: 'Le point de départ que personne d\'autre n\'a',
    intro:
      'Nous partons depuis les canaux de Santa Margarita, avec un parking juste à côté, sans files d\'attente, sans porter le matériel à pied. Moins de logistique.',
    points: [
      {
        title: 'L\'expérience commence avant même de toucher la mer',
        desc: 'Partir depuis les canaux signifie que le parcours intérieur sur les voies navigables de Santa Margarita est en soi une destination — et non un simple chemin vers ailleurs.',
      },
      {
        title: 'Parfait pour les familles avec enfants',
        desc: 'Les eaux des canaux sont parfaitement calmes, protégées du vent et sans houle. Les plus petits peuvent observer les maisons depuis l\'eau, passer sous les ponts et vivre l\'expérience nautique sans l\'incertitude de la pleine mer.',
      },
      {
        title: 'Garez-vous et embarquez',
        desc: 'Pendant que d\'autres amarrent au loin et cherchent une place de parking, à Santa Margarita vous arrivez, vous vous garez à côté et vous embarquez. Sans complications logistiques. Plus de temps pour profiter, moins de temps à gérer.',
      },
    ],
  },
  en: {
    eyebrow: 'Our difference',
    h2: 'The departure point no one else has',
    intro:
      'We set off from the Santa Margarita canals, with parking right next door, no queues, no carrying gear on foot. Less logistics.',
    points: [
      {
        title: 'The experience begins before you even touch the sea',
        desc: 'Setting off from the canals means the inner route along the Santa Margarita waterways is a destination in itself — not just the way to somewhere else.',
      },
      {
        title: 'Perfect for families with children',
        desc: 'The canal waters are completely calm, sheltered from the wind and free of waves. Little ones can watch the houses from the water, pass under the bridges and enjoy the experience on the water without the uncertainty of the open sea.',
      },
      {
        title: 'Park and set sail',
        desc: 'While others moor far away and you hunt for parking, at Santa Margarita you arrive, park right beside the boat and set off. No logistical headaches. More time enjoying, less time managing.',
      },
    ],
  },
  ca: {
    eyebrow: 'La nostra diferència',
    h2: 'El punt de sortida que ningú més té',
    intro:
      'Sortim des dels canals de Santa Margarida, amb aparcament just al costat, sense cues, sense carregar el material caminant. Menys logística.',
    points: [
      {
        title: 'L\'experiència comença abans de tocar el mar',
        desc: 'Sortir des dels canals significa que el recorregut interior per les vies navegables de Santa Margarida és en si mateix una destinació — no només el camí cap a un altre lloc.',
      },
      {
        title: 'Perfecte per a famílies amb canalla',
        desc: 'Les aigües dels canals són completament tranquil·les, protegides del vent i sense onatge. Els més petits poden veure les cases des de l\'aigua, passar sota els ponts i viure l\'experiència nàutica sense la incertesa del mar obert.',
      },
      {
        title: 'Aparqueu i embarqueu',
        desc: 'Mentre d\'altres amarren lluny i busqueu aparcament, a Santa Margarida arribeu, aparqueu al costat i embarqueu. Sense complicacions logístiques. Més temps per gaudir, menys temps per gestionar.',
      },
    ],
  },
};

const icons = [Anchor, Baby, Car];

export default function DifferentiatorSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <div
                key={point.title}
                className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 border border-sky-100 hover:border-sky-300 transition-all duration-300 group anim-fade-up"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center mb-5 transition-colors shadow-md shadow-sky-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
