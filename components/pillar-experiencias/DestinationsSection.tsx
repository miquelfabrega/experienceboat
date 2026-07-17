import { MapPin } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const translations = {
  es: {
    title: 'Dónde os llevaremos',
    subtitle:
      'La zona de navegación de Experience Boat es una de las más espectaculares del Mediterráneo. Estos son los destinos habituales dependiendo de la experiencia elegida:',
    homeHref: '/',
    d1Name: 'Los canales de Santa Margarita',
    d1Desc:
      'El punto de partida de todas las salidas y un destino en sí mismo. Casas con embarcadero privado y aguas completamente tranquilas. A primera hora de la mañana o al atardecer, los canales tienen una luz que no se encuentra en ningún otro punto de la Costa Brava.',
    d2Name: 'La bahía de Roses',
    d2Pre: 'El escenario principal de nuestras salidas. Aguas protegidas, horizonte abierto y el Pirineo al fondo. Perfecta para el baño tranquilo y como punto de paso hacia los destinos más alejados. Al atardecer, la ',
    d2LinkText: 'bahía de Roses',
    d2Post: ' se convierte en el escenario del Sunset Experience.',
    d3Name: 'Las calas del Cap de Creus',
    d3Desc:
      'El destino estrella de nuestras excursiones privadas. Cala Pelosa, Cala Rostella, Cala Jóncols — calas que solo se llegan en barco, con aguas de una transparencia que no tiene comparación en la Costa Brava. Para quien quiere llegar a donde la mayoría de turistas nunca llega.',
  },
  en: {
    title: 'Where we’ll take you',
    subtitle:
      'Experience Boat’s cruising ground is one of the finest stretches of the Mediterranean. These are the usual destinations, depending on the trip you choose:',
    homeHref: '/en',
    d1Name: 'The Santa Margarita canals',
    d1Desc:
      'The starting point of every outing and a destination in itself. Houses with private moorings and completely still water. First thing in the morning or at sunset, the canals catch a light you won’t find anywhere else on the Costa Brava.',
    d2Name: 'The Bay of Roses',
    d2Pre: 'The main stage for our trips. Sheltered water, an open horizon and the Pyrenees behind. Perfect for a calm swim and as a gateway to the destinations further out. At sunset, the ',
    d2LinkText: 'Bay of Roses',
    d2Post: ' becomes the setting for the Sunset Experience.',
    d3Name: 'The Cap de Creus coves',
    d3Desc:
      'The star destination of our private trips. Cala Pelosa, Cala Rostella, Cala Jóncols — coves you can only reach by boat, with water clearer than anywhere else on the Costa Brava. For anyone who wants to get where most visitors never do.',
  },
  fr: {
    title: 'Où nous vous emmenons',
    subtitle:
      'La zone de navigation d’Experience Boat est l’une des plus belles de la Méditerranée. Voici les destinations habituelles selon la sortie choisie :',
    homeHref: '/fr',
    d1Name: 'Les canaux de Santa Margarita',
    d1Desc:
      'Le point de départ de toutes les sorties et une destination à part entière. Des maisons avec ponton privé et une eau parfaitement calme. Tôt le matin ou au coucher du soleil, les canaux ont une lumière qu’on ne retrouve nulle part ailleurs sur la Costa Brava.',
    d2Name: 'La baie de Roses',
    d2Pre: 'Le décor principal de nos sorties. Eaux abritées, horizon ouvert et les Pyrénées en fond. Parfaite pour une baignade tranquille et comme point de passage vers les destinations plus lointaines. Au coucher du soleil, la ',
    d2LinkText: 'baie de Roses',
    d2Post: ' devient le décor du Sunset Experience.',
    d3Name: 'Les criques du Cap de Creus',
    d3Desc:
      'La destination phare de nos sorties privées. Cala Pelosa, Cala Rostella, Cala Jóncols — des criques accessibles uniquement par bateau, avec une eau d’une transparence sans égale sur la Costa Brava. Pour qui veut aller là où la plupart des touristes n’arrivent jamais.',
  },
  ca: {
    title: 'On us portarem',
    subtitle:
      'La zona de navegació d’Experience Boat és una de les més espectaculars de la Mediterrània. Aquests són els destins habituals segons l’experiència triada:',
    homeHref: '/ca',
    d1Name: 'Els canals de Santa Margarida',
    d1Desc:
      'El punt de partida de totes les sortides i un destí en si mateix. Cases amb embarcador privat i aigües completament tranquil·les. A primera hora del matí o al capvespre, els canals tenen una llum que no es troba enlloc més de la Costa Brava.',
    d2Name: 'La badia de Roses',
    d2Pre: 'L’escenari principal de les nostres sortides. Aigües arrecerades, horitzó obert i el Pirineu al fons. Perfecta per al bany tranquil i com a punt de pas cap als destins més allunyats. Al capvespre, la ',
    d2LinkText: 'badia de Roses',
    d2Post: ' es converteix en l’escenari del Sunset Experience.',
    d3Name: 'Les cales del Cap de Creus',
    d3Desc:
      'El destí estrella de les nostres excursions privades. Cala Pelosa, Cala Rostella, Cala Jóncols — cales a les quals només s’arriba en vaixell, amb aigües d’una transparència que no té comparació a la Costa Brava. Per a qui vol arribar on la majoria de turistes no arriben mai.',
  },
};

interface DestinationsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function DestinationsSection({ lang = 'es' }: DestinationsSectionProps) {
  const t = translations[lang];

  const destinations: { name: string; desc: ReactNode }[] = [
    { name: t.d1Name, desc: t.d1Desc },
    {
      name: t.d2Name,
      desc: (
        <>
          {t.d2Pre}
          <Link href={t.homeHref} className="text-sky-600 hover:text-sky-700 hover:underline font-medium">
            {t.d2LinkText}
          </Link>
          {t.d2Post}
        </>
      ),
    },
    { name: t.d3Name, desc: t.d3Desc },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {t.subtitle}
        </p>

        <div className="anim-stagger space-y-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="anim-stagger flex gap-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{dest.name}</h3>
                <p className="text-gray-600 leading-relaxed">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
