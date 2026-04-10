import { Anchor, ShieldCheck, HeartHandshake } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  tag: string; h2: string; p: string;
  v1t: string; v1d: string; v2t: string; v2d: string; v3t: string; v3d: string;
}> = {
  es: {
    tag: 'Nuestros valores',
    h2: 'Los principios que guían cada salida al mar',
    p: 'Cada decisión que tomamos está guiada por tres compromisos fundamentales.',
    v1t: 'Calidad de flota',
    v1d: 'Contamos con embarcaciones y equipos revisados y mantenidos al día. Nuestra flota incluye desde lanchas, neumáticas tipo Zodiac y barcos sin licencia, para que tu experiencia en la bahía de Roses sea siempre cómoda y segura.',
    v2t: 'Seguridad ante todo',
    v2d: 'La seguridad no es una opción, es nuestra prioridad. Todas las embarcaciones cuentan con el equipamiento homologado. Nuestro equipo conoce las corrientes, vientos y las zonas de la Costa Brava para garantizar que cada travesía sea tranquila.',
    v3t: 'Atención personalizada',
    v3d: 'Adaptamos cada servicio a ti. ¿Primera vez en un barco? Te explicamos todo con calma. ¿Buscas una excursión privada para tu grupo? Diseñamos el recorrido a tu medida. Somos el equipo náutico de Roses que trabaja para que te sientas como en casa en el mar.',
  },
  fr: {
    tag: 'Nos valeurs',
    h2: 'Les principes qui guident chaque sortie en mer',
    p: 'Chaque décision que nous prenons est guidée par trois engagements fondamentaux.',
    v1t: 'Qualité de la flotte',
    v1d: "Nos embarcations et équipements sont révisés et entretenus régulièrement. Notre flotte comprend des vedettes, des pneumatiques type Zodiac et des bateaux sans permis — pour que votre expérience dans la baie de Roses soit toujours confortable et sécurisée.",
    v2t: 'La sécurité avant tout',
    v2d: "La sécurité n'est pas une option, c'est notre priorité. Toutes les embarcations disposent d'un équipement homologué. Notre équipe connaît les courants, les vents et les zones de la Costa Brava pour garantir une navigation sereine à chaque sortie.",
    v3t: 'Service personnalisé',
    v3d: "Nous adaptons chaque prestation à vos envies. Première fois sur un bateau ? Nous vous expliquons tout avec patience. Vous cherchez une excursion privée pour votre groupe ? Nous concevons l'itinéraire sur mesure. Notre équipe est là pour que vous vous sentiez chez vous en mer.",
  },
  en: {
    tag: 'Our values',
    h2: 'The principles behind every trip out to sea',
    p: 'Every decision we make is guided by three core commitments.',
    v1t: 'Fleet quality',
    v1d: "Our boats and equipment are regularly inspected and maintained. Our fleet includes motorboats, Zodiac-style inflatables and no-licence vessels — so your experience in the Bay of Roses is always comfortable and safe.",
    v2t: 'Safety first',
    v2d: 'Safety is not an option — it is our top priority. All boats carry approved safety gear. Our team knows the currents, winds and areas of the Costa Brava to ensure every trip is smooth and worry-free.',
    v3t: 'Personalised service',
    v3d: "We tailor every outing to you. First time on a boat? We walk you through everything calmly. Looking for a private excursion for your group? We design the route to your needs. Our team works to make you feel right at home on the water.",
  },
};

export default function ValuesSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const values = [
    { icon: Anchor, title: tx.v1t, desc: tx.v1d },
    { icon: ShieldCheck, title: tx.v2t, desc: tx.v2d },
    { icon: HeartHandshake, title: tx.v3t, desc: tx.v3d },
  ];
  return (
    <section className="py-24 bg-slate-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
            {tx.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{tx.h2}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{tx.p}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
