import { Users, Anchor, Map } from 'lucide-react';
import Link from 'next/link';

const translations = {
  es: {
    title: '¿Qué tienen en común todas nuestras experiencias?',
    subtitle: 'Independientemente de la salida que elijas, hay tres cosas que nunca cambian:',
    f1Title: 'Todo privado',
    f1Desc:
      'La embarcación es exclusivamente para tu grupo. Sin otras familias, sin desconocidos, sin tener que adaptar la ruta a lo que quiere otra persona. Cuando reservas con Experience Boat, el barco es vuestro.',
    f2Title: 'Salvador al timón',
    f2Desc:
      'Nuestro patrón conoce cada rincón de la bahía de Roses y el Parque Natural del Cap de Creus. Sabe cuáles son las mejores calas según la época del año, cuándo hay menos gente en cada fondeo y cómo hacer que el día salga bien independientemente de cómo empiece.',
    f3Title: 'Salida desde los canales',
    f3Pre: 'Todas las experiencias salen desde la Marina de Santa Margarita, la marina de los canales en la entrada de Roses. El recorrido por los ',
    canalsHref: '/canales-santa-margarita',
    canalsLinkText: 'canales de Santa Margarita',
    f3Post: ' antes de llegar al mar abierto ya forma parte de la experiencia.',
  },
  en: {
    title: 'What do all our trips have in common?',
    subtitle: 'Whichever outing you pick, three things never change:',
    f1Title: 'Fully private',
    f1Desc:
      'The boat is just for your group. No other families, no strangers, no bending the route around what someone else wants. When you book with Experience Boat, the boat is yours.',
    f2Title: 'Salvador at the helm',
    f2Desc:
      'Our skipper knows every corner of the Bay of Roses and the Cap de Creus Natural Park. He knows which coves work best at which time of year, when each anchorage is quietest and how to make the day come good whatever the morning throws at us.',
    f3Title: 'Setting off through the canals',
    f3Pre: 'Every trip leaves from the Marina de Santa Margarita — the most distinctive nautical spot in Roses. The run through the ',
    canalsHref: '/en/santa-margarita-canals-roses',
    canalsLinkText: 'Santa Margarita canals',
    f3Post: ' before you reach open water is already part of the day.',
  },
  fr: {
    title: 'Qu’ont en commun toutes nos sorties ?',
    subtitle: 'Quelle que soit la sortie choisie, trois choses ne changent jamais :',
    f1Title: 'Entièrement privé',
    f1Desc:
      'Le bateau est réservé à votre groupe. Pas d’autres familles, pas d’inconnus, pas besoin d’adapter l’itinéraire à ce que veut quelqu’un d’autre. Quand vous réservez avec Experience Boat, le bateau est à vous.',
    f2Title: 'Salvador à la barre',
    f2Desc:
      'Notre skipper connaît chaque recoin de la baie de Roses et du parc naturel du Cap de Creus. Il sait quelles criques sont les meilleures selon la saison, quand chaque mouillage est le plus calme et comment faire pour que la journée se passe bien, peu importe comment elle commence.',
    f3Title: 'Départ par les canaux',
    f3Pre: 'Toutes les sorties partent de la Marina de Santa Margarita — le coin nautique le plus caractéristique de Roses. Le parcours dans les ',
    canalsHref: '/fr/canaux-santa-margarita',
    canalsLinkText: 'canaux de Santa Margarita',
    f3Post: ' avant d’atteindre le large fait déjà partie de la sortie.',
  },
  ca: {
    title: 'Què tenen en comú totes les nostres experiències?',
    subtitle: 'Independentment de la sortida que trieu, hi ha tres coses que no canvien mai:',
    f1Title: 'Tot privat',
    f1Desc:
      'L’embarcació és exclusivament per al vostre grup. Sense altres famílies, sense desconeguts, sense haver d’adaptar la ruta al que vol una altra persona. Quan reserveu amb Experience Boat, el vaixell és vostre.',
    f2Title: 'En Salvador al timó',
    f2Desc:
      'El nostre patró coneix cada racó de la badia de Roses i el Parc Natural del Cap de Creus. Sap quines són les millors cales segons l’època de l’any, quan hi ha menys gent a cada fondeig i com fer que el dia surti bé independentment de com comenci.',
    f3Title: 'Sortida des dels canals',
    f3Pre: 'Totes les experiències surten de la Marina de Santa Margarida — l’indret nàutic més característic de Roses. El recorregut pels ',
    canalsHref: '/ca/canals-santa-margarida',
    canalsLinkText: 'canals de Santa Margarida',
    f3Post: ' abans d’arribar al mar obert ja forma part de l’experiència.',
  },
};

interface CommonSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function CommonSection({ lang = 'es' }: CommonSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-16 text-lg">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center anim-fade-up">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.f1Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.f1Desc}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center anim-fade-up anim-delay-1">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
              <Anchor className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.f2Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.f2Desc}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center anim-fade-up anim-delay-2">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
              <Map className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.f3Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.f3Pre}
              <Link href={t.canalsHref} className="text-sky-600 hover:text-sky-700 hover:underline">
                {t.canalsLinkText}
              </Link>
              {t.f3Post}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
