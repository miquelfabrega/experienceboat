import { Heart, Users, Compass, PartyPopper, Briefcase } from 'lucide-react';
import Link from 'next/link';

const groups = [
  {
    title: 'Parejas que buscan un plan diferente',
    desc: (
      <>
        Especialmente el{' '}
        <Link href="/experiencias-barco-roses/sunset-experience" className="text-sky-600 hover:text-sky-700 hover:underline">
          Sunset Experience
        </Link>.
      </>
    ),
    icon: Heart,
  },
  {
    title: 'Familias con niños',
    desc: 'Que quieren una salida cómoda sin preocuparse de la navegación.',
    icon: Users,
  },
  {
    title: 'Grupos de amigos',
    desc: 'Que quieren un día en el mar con total libertad de ruta.',
    icon: Compass,
  },
  {
    title: 'Ocasiones especiales',
    desc: 'Despedidas, cumpleaños, aniversarios. La salida privada convierte cualquier celebración en algo memorable.',
    icon: PartyPopper,
  },
  {
    title: 'Equipos de trabajo',
    desc: 'Que buscan una actividad de team building diferente al plan habitual.',
    icon: Briefcase,
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Para qué tipo de grupo son estas experiencias
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">
          Nuestras salidas están pensadas para cualquier grupo que quiera disfrutar del mar sin complicaciones. Estos son los más habituales:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
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
