import { MapPin, Waves } from 'lucide-react';

const translations = {
  es: {
    region: 'Costa Brava norte',
    title: '¿Qué puedes hacer con un barco con licencia en Roses?',
    intro:
      'Con licencia, el radio de acción se amplía considerablemente. Puedes alejarte de la costa, llegar a calas que no están al alcance de embarcaciones más pequeñas y trazar tu propia ruta sin depender de nadie. La Costa Brava norte desde Roses es uno de los escenarios de navegación más espectaculares del Mediterráneo.',
    favLabel: 'Algunos de los destinos favoritos de nuestros clientes con licencia:',
    destinations: [
      {
        name: 'Cap de Creus',
        desc: 'El punto más oriental de la Península Ibérica. Paisaje lunar desde el agua, calas de acceso exclusivo por mar y aguas de una transparencia excepcional.',
        time: '45–60 min',
      },
      {
        name: 'Cala Culip',
        desc: 'Una de las calas más salvajes y protegidas del Parque Natural. Solo se llega en barco.',
        time: '50 min',
      },
      {
        name: 'Cala Tamariua',
        desc: 'Aguas cristalinas rodeadas de roca volcánica. Muy poco masificada incluso en temporada alta.',
        time: '40 min',
      },
      {
        name: 'Cala Canyelles Petites',
        desc: 'Parada clásica desde Roses, perfecta para el baño y el snorkel.',
        time: '20 min',
      },
      {
        name: 'Cala Almadraba',
        desc: 'Accesible también a pie, pero desde el agua tiene otra dimensión.',
        time: '15 min',
      },
      {
        name: 'Bahía de Roses',
        desc: 'Ideal para salidas tranquilas de mañana o atardecer, con vistas al Pirineo de fondo.',
        time: '5 min',
      },
    ],
    calloutTitle: 'Todo privado — la embarcación es solo para vosotros',
    callout1:
      'Al igual que en todos nuestros servicios, cuando alquilas un barco con licencia en Experience Boat la embarcación es exclusivamente para tu grupo. No compartimos barco con otros clientes.',
    callout2:
      'Eso significa libertad total para elegir ruta, ritmo y paradas sin coordinarlo con nadie. Con una embarcación potente y sin nadie más a bordo, el Cap de Creus está a menos de una hora desde Santa Margarita.',
    boatsCta: 'Ver barcos disponibles',
    departureLabel: 'Punto de salida exclusivo:',
    departurePlace: 'Marina de Santa Margarita, Roses',
    departureNote:
      'No saldrás desde un puerto masificado — saldrás desde uno de los rincones más singulares de la Costa Brava.',
  },
  en: {
    region: 'Northern Costa Brava',
    title: 'What can you do with a licensed boat in Roses?',
    intro:
      'With a licence, your range opens right up. You can head further offshore, reach coves that smaller boats can’t manage and set your own route without depending on anyone. Sailing the northern Costa Brava out of Roses is some of the finest cruising water in the western Mediterranean.',
    favLabel: 'A few of the spots our licensed guests come back to:',
    destinations: [
      {
        name: 'Cap de Creus',
        desc: 'The easternmost point of the Iberian Peninsula. A lunar landscape from the water, coves you can only reach by sea and exceptionally clear water.',
        time: '45–60 min',
      },
      {
        name: 'Cala Culip',
        desc: 'One of the wildest, most sheltered coves in the natural park. You can only get there by boat.',
        time: '50 min',
      },
      {
        name: 'Cala Tamariua',
        desc: 'Crystal-clear water framed by volcanic rock. Rarely crowded, even in high season.',
        time: '40 min',
      },
      {
        name: 'Cala Canyelles Petites',
        desc: 'A classic stop out of Roses, perfect for a swim and a snorkel.',
        time: '20 min',
      },
      {
        name: 'Cala Almadraba',
        desc: 'You can also reach it on foot, but from the water it’s a different thing altogether.',
        time: '15 min',
      },
      {
        name: 'Bay of Roses',
        desc: 'Ideal for an easy morning or sunset run, with the Pyrenees in the background.',
        time: '5 min',
      },
    ],
    calloutTitle: 'Fully private — the boat is just for you',
    callout1:
      'As with everything we do, when you rent a licensed boat with Experience Boat the boat is yours alone. We never share it with other groups.',
    callout2:
      'That means full freedom to choose your route, your pace and your stops without coordinating with anyone. With a proper engine and no one else aboard, Cap de Creus is under an hour from Santa Margarita.',
    boatsCta: 'See available boats',
    departureLabel: 'Departure point:',
    departurePlace: 'Marina de Santa Margarita, Roses',
    departureNote:
      'You won’t set off from a packed marina — you’ll leave from one of the quietest corners of the Costa Brava.',
  },
  fr: {
    region: 'Costa Brava nord',
    title: 'Que faire avec un bateau avec permis à Roses ?',
    intro:
      'Avec le permis, votre rayon d’action s’élargit vraiment. Vous pouvez vous éloigner de la côte, rejoindre des criques inaccessibles aux petites embarcations et tracer votre propre itinéraire sans dépendre de personne. Naviguer sur la Costa Brava nord au départ de Roses, c’est l’un des plus beaux plans d’eau de la Méditerranée occidentale.',
    favLabel: 'Quelques-uns des coins préférés de nos clients avec permis :',
    destinations: [
      {
        name: 'Cap de Creus',
        desc: 'La pointe la plus orientale de la péninsule Ibérique. Un paysage lunaire vu de la mer, des criques accessibles uniquement par bateau et une eau d’une transparence exceptionnelle.',
        time: '45–60 min',
      },
      {
        name: 'Cala Culip',
        desc: 'L’une des criques les plus sauvages et abritées du parc naturel. On n’y accède qu’en bateau.',
        time: '50 min',
      },
      {
        name: 'Cala Tamariua',
        desc: 'Eaux cristallines entourées de roche volcanique. Peu fréquentée, même en haute saison.',
        time: '40 min',
      },
      {
        name: 'Cala Canyelles Petites',
        desc: 'Un arrêt classique au départ de Roses, parfait pour la baignade et le snorkeling.',
        time: '20 min',
      },
      {
        name: 'Cala Almadraba',
        desc: 'Accessible aussi à pied, mais depuis l’eau elle prend une tout autre dimension.',
        time: '15 min',
      },
      {
        name: 'Baie de Roses',
        desc: 'Idéale pour une sortie tranquille le matin ou au coucher du soleil, avec les Pyrénées en toile de fond.',
        time: '5 min',
      },
    ],
    calloutTitle: 'Entièrement privé — le bateau n’est que pour vous',
    callout1:
      'Comme pour tous nos services, quand vous louez un bateau avec permis chez Experience Boat, le bateau est réservé à votre seul groupe. Nous ne le partageons jamais avec d’autres clients.',
    callout2:
      'Vous choisissez librement votre itinéraire, votre rythme et vos escales, sans vous coordonner avec qui que ce soit. Avec un vrai moteur et personne d’autre à bord, le Cap de Creus est à moins d’une heure de Santa Margarita.',
    boatsCta: 'Voir les bateaux disponibles',
    departureLabel: 'Point de départ :',
    departurePlace: 'Marina de Santa Margarita, Roses',
    departureNote:
      'Vous ne partez pas d’un port bondé — vous larguez les amarres depuis l’un des coins les plus tranquilles de la Costa Brava.',
  },
  ca: {
    region: 'Costa Brava nord',
    title: 'Què podeu fer amb un vaixell amb llicència a Roses?',
    intro:
      'Amb llicència, el radi d’acció s’amplia molt. Us podeu allunyar de la costa, arribar a cales que les embarcacions més petites no assoleixen i traçar la vostra pròpia ruta sense dependre de ningú. Navegar per la Costa Brava nord des de Roses és un dels escenaris més bonics de la Mediterrània occidental.',
    favLabel: 'Alguns dels destins preferits dels nostres clients amb llicència:',
    destinations: [
      {
        name: 'Cap de Creus',
        desc: 'El punt més oriental de la península Ibèrica. Paisatge lunar des de l’aigua, cales a les quals només s’arriba per mar i aigües d’una transparència excepcional.',
        time: '45–60 min',
      },
      {
        name: 'Cala Culip',
        desc: 'Una de les cales més salvatges i arrecerades del parc natural. Només s’hi arriba en vaixell.',
        time: '50 min',
      },
      {
        name: 'Cala Tamariua',
        desc: 'Aigües cristal·lines envoltades de roca volcànica. Poc concorreguda fins i tot en temporada alta.',
        time: '40 min',
      },
      {
        name: 'Cala Canyelles Petites',
        desc: 'Una parada clàssica des de Roses, perfecta per al bany i l’esnòrquel.',
        time: '20 min',
      },
      {
        name: 'Cala Almadrava',
        desc: 'També s’hi arriba a peu, però des de l’aigua té una altra dimensió.',
        time: '15 min',
      },
      {
        name: 'Badia de Roses',
        desc: 'Ideal per a sortides tranquil·les de matí o al capvespre, amb el Pirineu al fons.',
        time: '5 min',
      },
    ],
    calloutTitle: 'Tot privat — el vaixell és només per a vosaltres',
    callout1:
      'Com a tots els nostres serveis, quan llogueu un vaixell amb llicència a Experience Boat l’embarcació és exclusivament per al vostre grup. No la compartim amb ningú més.',
    callout2:
      'Això vol dir llibertat total per triar ruta, ritme i parades sense coordinar-ho amb ningú. Amb una embarcació potent i ningú més a bord, el Cap de Creus és a menys d’una hora de Santa Margarida.',
    boatsCta: 'Veure vaixells disponibles',
    departureLabel: 'Punt de sortida:',
    departurePlace: 'Marina de Santa Margarida, Roses',
    departureNote:
      'No sortireu d’un port massificat — salpareu des d’un dels racons més tranquils de la Costa Brava.',
  },
};

interface DestinationsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function DestinationsSection({ lang = 'es' }: DestinationsSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{t.region}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 text-lg">
          {t.intro}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Destinations grid */}
          <div className="anim-stagger grid gap-4">
            <p className="font-semibold text-gray-700 mb-2">
              {t.favLabel}
            </p>
            {t.destinations.map((dest) => (
              <div
                key={dest.name}
                className="anim-stagger flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{dest.name}</h3>
                    <span className="text-xs text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded-full shrink-0">
                      {dest.time}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: private charter callout */}
          <div className="sticky top-28 anim-fade-up">
            <div className="bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl shadow-sky-500/30">
              <Waves className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-extrabold mb-3">{t.calloutTitle}</h3>
              <p className="text-sky-100 leading-relaxed mb-6">
                {t.callout1}
              </p>
              <p className="text-sky-100 leading-relaxed mb-8">
                {t.callout2}
              </p>
              <a
                href="#barcos"
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors"
              >
                {t.boatsCta}
              </a>
            </div>

            <div className="mt-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 font-medium mb-2">{t.departureLabel}</p>
              <p className="font-bold text-gray-900">
                {t.departurePlace}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {t.departureNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
