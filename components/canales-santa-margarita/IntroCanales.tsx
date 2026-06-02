
import Link from 'next/link';
import { localizedHref } from '@/lib/i18n/routes';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, { h2: string; pre: string; linkText: string; text: string }> = {
  es: {
    h2: 'El inicio perfecto para tu primera vez',
    pre: 'Si buscas un',
    linkText: 'alquiler de barco sin licencia',
    text: 'en Roses, los canales de Santa Margarita son el entorno perfecto para quien alquila un barco por primera vez. Aguas tranquilas, sin oleaje, sin corrientes y con un paisaje que no esperas encontrar en la Costa Brava: casas con embarcadero privado, puentes bajos de piedra y una calma que contrasta con el mar abierto. En Experience Boat salimos desde aquí — y para los debutantes, es el mejor comienzo posible.',
  },
  fr: {
    h2: 'Le point de départ parfait pour une première fois',
    pre: 'Si vous cherchez une',
    linkText: 'location de bateau sans permis',
    text: 'à Roses, les canaux de Santa Margarita sont le cadre idéal pour qui loue un bateau pour la première fois. Eaux calmes, sans houle, sans courants et avec un paysage que l\'on ne s\'attend pas à trouver sur la Costa Brava : maisons avec ponton privé, ponts bas en pierre et un calme qui contraste avec la pleine mer. Chez Experience Boat, nous partons d\'ici — et pour les débutants, c\'est le meilleur départ possible.',
  },
  en: {
    h2: 'The perfect start for your first time',
    pre: 'If you are looking for a',
    linkText: 'no-licence boat rental',
    text: 'in Roses, the Santa Margarita canals are the perfect setting for anyone renting a boat for the first time. Calm waters, no swell, no currents and a landscape you wouldn\'t expect to find on the Costa Brava: houses with private moorings, low stone bridges and a stillness that contrasts with the open sea. At Experience Boat we set off from here — and for first-timers, it\'s the best possible start.',
  },
  ca: {
    h2: 'L\'inici perfecte per a la vostra primera vegada',
    pre: 'Si busqueu un',
    linkText: 'lloguer de vaixell sense llicència',
    text: 'a Roses, els canals de Santa Margarida són l\'entorn perfecte per a qui lloga un vaixell per primera vegada. Aigües tranquil·les, sense onatge, sense corrents i amb un paisatge que no espereu trobar a la Costa Brava: cases amb embarcador privat, ponts baixos de pedra i una calma que contrasta amb el mar obert. A Experience Boat sortim d\'aquí — i per als debutants, és el millor començament possible.',
  },
};

export default function IntroCanales({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{tx.h2}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          {tx.pre}{' '}
          <Link href={localizedHref('rentalWithoutLicence', lang)} className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800">{tx.linkText}</Link>
          {' '}{tx.text}
        </p>
      </div>
    </section>
  );
}
