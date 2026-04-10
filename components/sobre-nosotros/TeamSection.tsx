import Link from 'next/link';
import { GraduationCap, Map, Globe, CalendarRange } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  tag: string; h2: string; p: string; cta_p: string; cta: string; contactHref: string;
  f1t: string; f1d: string; f2t: string; f2d: string; f3t: string; f3d: string; f4t: string; f4d: string;
}> = {
  es: {
    tag: 'Nuestro equipo',
    h2: 'Expertos náuticos comprometidos con tu experiencia',
    p: 'El equipo de Experience Boat está formado por profesionales con titulación náutica y un profundo conocimiento del mar de la Costa Brava. Cada integrante aporta su pasión para que tu experiencia sea segura, divertida y memorable.',
    cta_p: '¿Tienes dudas sobre qué barco o servicio se adapta mejor a tu grupo? Contáctanos y te asesoramos sin compromiso.',
    cta: 'Contactar con el equipo',
    contactHref: '/contacto/',
    f1t: 'Titulación náutica oficial',
    f1d: 'Todo el personal embarcado cuenta con la titulación homologada por la Dirección General de Marina Mercante.',
    f2t: 'Conocimiento local de la Costa Brava',
    f2d: 'Conocemos cada cala, corriente y fondo marino entre la bahía de Roses y el Cap de Creus.',
    f3t: 'Atención multilingüe',
    f3d: 'Atendemos en español, catalán, inglés y francés para dar servicio a todos nuestros clientes.',
    f4t: 'Disponibles toda la temporada',
    f4d: 'Operamos desde primavera hasta otoño para que puedas disfrutar del mar Mediterráneo en su mejor momento.',
  },
  fr: {
    tag: 'Notre équipe',
    h2: 'Des experts nautiques engagés pour votre expérience',
    p: "L'équipe Experience Boat est composée de professionnels diplômés avec une connaissance approfondie de la mer de la Costa Brava. Chaque membre apporte sa passion pour que votre sortie soit sûre, fun et mémorable.",
    cta_p: "Vous hésitez sur le bateau ou le service le mieux adapté à votre groupe ? Contactez-nous — nous vous conseillons sans engagement.",
    cta: "Contacter l'équipe",
    contactHref: '/fr/contact/',
    f1t: 'Titres nautiques officiels',
    f1d: "Tout le personnel embarqué est titulaire des brevets homologués par la Direction Générale de la Marine Marchande.",
    f2t: 'Connaissance locale de la Costa Brava',
    f2d: 'Nous connaissons chaque crique, courant et fond marin entre la baie de Roses et le Cap de Creus.',
    f3t: 'Accueil multilingue',
    f3d: 'Nous vous accueillons en espagnol, catalan, anglais et français pour servir tous nos clients de la Costa Brava.',
    f4t: 'Disponibles toute la saison',
    f4d: "Nous opérons du printemps à l'automne pour vous permettre de profiter de la Méditerranée au meilleur moment.",
  },
  en: {
    tag: 'Our team',
    h2: 'Nautical experts committed to your experience',
    p: "The Experience Boat team is made up of qualified professionals with an in-depth knowledge of the Costa Brava sea. Every member brings their passion to ensure your outing is safe, fun and memorable.",
    cta_p: "Not sure which boat or service suits your group best? Get in touch — we'll advise you with no obligation.",
    cta: 'Contact the team',
    contactHref: '/en/contact/',
    f1t: 'Official nautical licences',
    f1d: 'All on-board staff hold licences certified by the Directorate General of Merchant Shipping.',
    f2t: 'Local expertise on the Costa Brava',
    f2d: 'We know every cove, current and seabed between the Bay of Roses and Cap de Creus.',
    f3t: 'Multilingual service',
    f3d: 'We speak Spanish, Catalan, English and French to serve all our guests on the Costa Brava.',
    f4t: 'Available all season',
    f4d: 'We operate from spring to autumn so you can enjoy the Mediterranean at its very best.',
  },
};

export default function TeamSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const teamFeatures = [
    { icon: GraduationCap, title: tx.f1t, desc: tx.f1d },
    { icon: Map, title: tx.f2t, desc: tx.f2d },
    { icon: Globe, title: tx.f3t, desc: tx.f3d },
    { icon: CalendarRange, title: tx.f4t, desc: tx.f4d },
  ];
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
              {tx.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {tx.h2}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">{tx.p}</p>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 mb-8 lg:mb-0">
              <p className="text-sky-900 font-medium mb-4">{tx.cta_p}</p>
              <Link
                href={tx.contactHref}
                className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all bg-sky-600 hover:bg-sky-500 text-white shadow-md hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                {tx.cta}
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-7/12 grid sm:grid-cols-2 gap-6">
            {teamFeatures.map((f, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-sky-500 mb-5">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
