import { Anchor, Compass, ArrowRight } from 'lucide-react';

type Lang = 'es' | 'fr' | 'ca';

interface ProfileSelectorCardsProps {
  lang?: Lang;
}

const t: Record<Lang, Record<string, any>> = {
  es: {
    label: '¿Cuál es tu perfil?',
    srOnly: 'Elige tu tipo de experiencia',
    card1Label: 'Tengo licencia náutica',
    card1Title: 'Embarcaciones con licencia',
    card1Desc: 'Tú decides la ruta, el ritmo y las paradas. Libertad total por la bahía de Roses y el Cap de Creus. Sin patrón, sin intermediarios.',
    card1Button: 'Ver embarcaciones con licencia',
    card1Link: '/alquiler-barco-con-licencia-roses',
    card2Label: 'Prefiero ir con patrón',
    card2Title: 'Excursiones privadas con patrón',
    card2Desc: 'Salvador o alguien del equipo a bordo durante toda la salida. Sin titulación necesaria. Conocen cada cala y se adaptan completamente a tu grupo.',
    card2Button: 'Ver excursiones privadas',
    card2Link: '/experiencias-barco-roses',
  },
  fr: {
    label: 'Quel est votre profil ?',
    srOnly: 'Choisissez votre type d\'expérience',
    card1Label: 'J\'ai un permis nautique',
    card1Title: 'Embarcations avec permis',
    card1Desc: 'Vous décidez l\'itinéraire, le rythme et les arrêts. Liberté totale sur la baie de Roses et le Cap de Creus. Sans capitaine, sans intermédiaires.',
    card1Button: 'Voir les embarcations avec permis',
    card1Link: '/fr/location-bateau-avec-permis-roses',
    card2Label: 'Je préfère un capitaine',
    card2Title: 'Excursions privées avec capitaine',
    card2Desc: 'Salvador ou quelqu\'un de l\'équipe à bord pendant toute la sortie. Aucun permis nécessaire. Ils connaissent chaque crique et s\'adaptent complètement à votre groupe.',
    card2Button: 'Voir les excursions privées',
    card2Link: '/fr/experiencias-barco-roses',
  },
  ca: {
    label: 'Quin és el vostre perfil?',
    srOnly: 'Trieu el vostre tipus d\'experiència',
    card1Label: 'Tinc llicència nàutica',
    card1Title: 'Embarcacions amb llicència',
    card1Desc: 'Vosaltres decidiu la ruta, el ritme i les parades. Llibertat total per la badia de Roses i el Cap de Creus. Sense patró, sense intermediaris.',
    card1Button: 'Veure embarcacions amb llicència',
    card1Link: '/ca/lloguer-vaixell-amb-llicencia-roses',
    card2Label: 'Prefereixo anar amb patró',
    card2Title: 'Excursions privades amb patró',
    card2Desc: 'En Salvador o algú de l\'equip a bord durant tota la sortida. Sense titulació necessària. Coneixen cada cala i s\'adapten completament al vostre grup.',
    card2Button: 'Veure excursions privades',
    card2Link: '/ca/experiencies-vaixell-roses',
  },
};

export default function ProfileSelectorCards({ lang = 'es' }: ProfileSelectorCardsProps) {
  const labels = t[lang];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
          {labels.label}
        </p>
        <h2 className="sr-only">{labels.srOnly}</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          <div
            className="relative overflow-hidden rounded-3xl p-8 flex flex-col gap-5 cursor-default anim-fade-right"
            style={{
              background:
                'linear-gradient(135deg, #0b1f3a 0%, #0d3a55 60%, #0a4a5a 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 60% 50% at 80% 20%, #22d3ee, transparent)',
              }}
            />
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-cyan-300 mb-5">
                <Anchor size={24} />
              </div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 block">
                {labels.card1Label}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-tight">
                {labels.card1Title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                {labels.card1Desc}
              </p>
              <a
                href={labels.card1Link}
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0b1f3a] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                {labels.card1Button}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 flex flex-col gap-5 cursor-default bg-gradient-to-br from-[#0d7d6e] to-[#0a9980] anim-fade-left anim-delay-1"
          >
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 70% 50% at 20% 80%, #f0fdf4, transparent)',
              }}
            />
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/20 text-white mb-5">
                <Compass size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest mb-2 block">
                {labels.card2Label}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-tight">
                {labels.card2Title}
              </h3>
              <p className="text-emerald-50 text-sm leading-relaxed mb-6">
                {labels.card2Desc}
              </p>
              <a
                href={labels.card2Link}
                className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-[#0d7d6e] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                {labels.card2Button}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
