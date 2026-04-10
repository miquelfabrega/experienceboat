import Link from 'next/link';
import { ArrowRight, Waves, Sailboat, Sunset, MapPin } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  tag: string; h2: string; p: string;
  services: { title: string; desc: string; href: string; cta: string }[];
}> = {
  es: {
    tag: 'Qué ofrecemos',
    h2: 'Todo lo que puedes hacer con nosotros en Roses',
    p: 'Descubre nuestra gama de servicios y embarcaciones para disfrutar del Mediterráneo de la forma que mejor se adapte a ti.',
    services: [
      { title: 'Barcos sin licencia', desc: 'La opción perfecta para explorar los canales y la bahía sin necesidad de titulación náutica.', href: '/alquiler-barco-sin-licencia-roses/', cta: 'Ver barcos sin licencia' },
      { title: 'Barcos con licencia', desc: 'Para patrones con titulación. Lanchas para navegación libre por la Costa Brava.', href: '/alquiler-barco-con-licencia-roses/', cta: 'Ver barcos con licencia' },
      { title: 'Experiencias en barco en Roses', desc: 'Canal tour Santa Margarita, excursiones privadas al Cap de Creus y Sunset en la bahía de Roses. Tu grupo, tu ritmo.', href: '/experiencias-barco-roses/', cta: 'Ver experiencias' },
      { title: 'Canales de Santa Margarita', desc: 'Una experiencia única navegando por los canales. Sin licencia y con paisaje garantizado.', href: '/experiencias-barco-roses/canal-tour-santa-margarita/', cta: 'Ver experiencia' },
    ],
  },
  fr: {
    tag: 'Ce que nous proposons',
    h2: 'Tout ce que vous pouvez faire avec nous à Roses',
    p: 'Découvrez notre gamme de bateaux et de services pour profiter de la Méditerranée à votre façon.',
    services: [
      { title: 'Bateaux sans permis', desc: "L'option idéale pour explorer les canaux et la baie de Roses sans titulaire nautique.", href: '/fr/location-bateau-sans-permis-roses/', cta: 'Voir bateaux sans permis' },
      { title: 'Bateaux avec permis', desc: 'Pour les patrons diplômés. Des vedettes rapides pour naviguer librement sur la Costa Brava.', href: '/fr/location-bateau-avec-permis-roses/', cta: 'Voir bateaux avec permis' },
      { title: 'Expériences en bateau à Roses', desc: 'Canal tour Santa Margarita, excursions privées au Cap de Creus et Sunset dans la baie de Roses.', href: '/fr/experiences-bateau-roses/', cta: 'Voir les expériences' },
      { title: 'Canaux de Santa Margarita', desc: 'Une expérience unique en naviguant dans les canaux. Sans permis et avec un paysage garanti.', href: '/fr/experiences-bateau-roses/canal-tour-santa-margarita/', cta: "Voir l'expérience" },
    ],
  },
  en: {
    tag: 'What we offer',
    h2: 'Everything you can do with us in Roses',
    p: 'Discover our range of boats and services to enjoy the Mediterranean your way.',
    services: [
      { title: 'No-licence boats', desc: 'The perfect option to explore the canals and the Bay of Roses without a nautical licence.', href: '/en/boat-rental-no-licence-roses/', cta: 'See no-licence boats' },
      { title: 'Boats with licence', desc: 'For qualified skippers. Motorboats for free-range navigation along the Costa Brava.', href: '/en/boat-rental-with-licence-roses/', cta: 'See boats with licence' },
      { title: 'Boat experiences in Roses', desc: 'Santa Margarita Canal Tour, private excursions to Cap de Creus and a Sunset cruise in the Bay of Roses.', href: '/en/boat-experiences-roses/', cta: 'See experiences' },
      { title: 'Santa Margarita canals', desc: 'A unique experience navigating the canals. No licence needed and stunning scenery guaranteed.', href: '/en/boat-experiences-roses/canal-tour-santa-margarita/', cta: 'See the experience' },
    ],
  },
};

const icons = [Waves, Sailboat, Sunset, MapPin];

export default function ServicesSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
            {tx.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{tx.h2}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{tx.p}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tx.services.map((s, i) => {
            const Icon = icons[i];
            return (
              <Link key={i} href={s.href} className="group flex flex-col justify-between bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:border-sky-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center font-bold text-sky-600 group-hover:text-sky-700">
                  {s.cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
