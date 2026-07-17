import { Heart, Users, Compass, PartyPopper, Briefcase } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const translations = {
  es: {
    title: 'Para qué tipo de grupo son estas experiencias',
    subtitle:
      'Nuestras salidas están pensadas para cualquier grupo que quiera disfrutar del mar sin complicaciones. Estos son los más habituales:',
    sunsetHref: '/experiencias-barco-roses/sunset-experience',
    g1Title: 'Parejas que buscan un plan diferente',
    g1Pre: 'Especialmente el ',
    g1LinkText: 'Sunset Experience',
    g1Post: '.',
    g2Title: 'Familias con niños',
    g2Desc: 'Que quieren una salida cómoda sin preocuparse de la navegación.',
    g3Title: 'Grupos de amigos',
    g3Desc: 'Que quieren un día en el mar con total libertad de ruta.',
    g4Title: 'Ocasiones especiales',
    g4Desc: 'Despedidas, cumpleaños, aniversarios. La salida privada convierte cualquier celebración en algo memorable.',
    g5Title: 'Equipos de trabajo',
    g5Desc: 'Que buscan una actividad de team building diferente al plan habitual.',
  },
  en: {
    title: 'Who these trips are for',
    subtitle:
      'Our outings are made for any group that wants to enjoy the sea without the hassle. These are the most common:',
    sunsetHref: '/en/boat-experiences-roses/sunset-experience',
    g1Title: 'Couples after something different',
    g1Pre: 'Especially the ',
    g1LinkText: 'Sunset Experience',
    g1Post: '.',
    g2Title: 'Families with kids',
    g2Desc: 'Who want an easy day out without worrying about the sailing.',
    g3Title: 'Groups of friends',
    g3Desc: 'Who want a day at sea with full freedom over the route.',
    g4Title: 'Special occasions',
    g4Desc: 'Hen and stag dos, birthdays, anniversaries. A private trip turns any celebration into a day you’ll remember.',
    g5Title: 'Work teams',
    g5Desc: 'Looking for a team-building day that isn’t the usual thing.',
  },
  fr: {
    title: 'À quel type de groupe ces sorties s’adressent',
    subtitle:
      'Nos sorties sont pensées pour tout groupe qui veut profiter de la mer sans se compliquer. Voici les plus fréquents :',
    sunsetHref: '/fr/experiences-bateau-roses/sunset-experience',
    g1Title: 'Les couples en quête d’une sortie différente',
    g1Pre: 'Surtout le ',
    g1LinkText: 'Sunset Experience',
    g1Post: '.',
    g2Title: 'Les familles avec enfants',
    g2Desc: 'Qui veulent une sortie tranquille sans se soucier de la navigation.',
    g3Title: 'Les groupes d’amis',
    g3Desc: 'Qui veulent une journée en mer avec toute liberté sur l’itinéraire.',
    g4Title: 'Les occasions spéciales',
    g4Desc: 'Enterrements de vie de garçon ou de jeune fille, anniversaires. La sortie privée transforme n’importe quelle fête en un moment mémorable.',
    g5Title: 'Les équipes de travail',
    g5Desc: 'Qui cherchent une activité de team building qui sort de l’ordinaire.',
  },
  ca: {
    title: 'Per a quin tipus de grup són aquestes experiències',
    subtitle:
      'Les nostres sortides estan pensades per a qualsevol grup que vulgui gaudir del mar sense complicacions. Aquests són els més habituals:',
    sunsetHref: '/ca/experiencies-vaixell-roses/sunset-experience',
    g1Title: 'Parelles que busquen una sortida diferent',
    g1Pre: 'Especialment el ',
    g1LinkText: 'Sunset Experience',
    g1Post: '.',
    g2Title: 'Famílies amb nens',
    g2Desc: 'Que volen una sortida còmoda sense preocupar-se de la navegació.',
    g3Title: 'Grups d’amics',
    g3Desc: 'Que volen un dia al mar amb total llibertat de ruta.',
    g4Title: 'Ocasions especials',
    g4Desc: 'Comiats de solter, aniversaris, celebracions. La sortida privada converteix qualsevol celebració en un dia que es recorda.',
    g5Title: 'Equips de feina',
    g5Desc: 'Que busquen una activitat de team building diferent de l’habitual.',
  },
};

interface TargetAudienceSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function TargetAudienceSection({ lang = 'es' }: TargetAudienceSectionProps) {
  const t = translations[lang];

  const groups: { title: string; desc: ReactNode; icon: typeof Heart }[] = [
    {
      title: t.g1Title,
      desc: (
        <>
          {t.g1Pre}
          <Link href={t.sunsetHref} className="text-sky-600 hover:text-sky-700 hover:underline">
            {t.g1LinkText}
          </Link>
          {t.g1Post}
        </>
      ),
      icon: Heart,
    },
    { title: t.g2Title, desc: t.g2Desc, icon: Users },
    { title: t.g3Title, desc: t.g3Desc, icon: Compass },
    { title: t.g4Title, desc: t.g4Desc, icon: PartyPopper },
    { title: t.g5Title, desc: t.g5Desc, icon: Briefcase },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">
          {t.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sky-100 hover:shadow-md transition-all anim-fade-up"
              >
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{group.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{group.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
