import { MapPin, Anchor, Wind, Compass } from 'lucide-react';

type Lang = 'es' | 'fr';

interface PorQueRosesProps {
  lang?: Lang;
}

const getContent = (lang: Lang) => ({
  title:
    lang === 'es'
      ? '¿Por qué alquilar una lancha en Roses y no en otro punto de la Costa Brava?'
      : 'Pourquoi louer une vedette à Roses plutôt qu\'ailleurs sur la Costa Brava ?',
  subtitle:
    lang === 'es'
      ? 'La Costa Brava tiene empresas de alquiler náutico en varios puntos. Pero Roses tiene una combinación de factores difícil de encontrar en otro sitio.'
      : 'La Costa Brava compte des sociétés de location nautique en plusieurs points. Mais Roses présente une combinaison de facteurs difficile à trouver ailleurs.',
  cards: [
    {
      icon: MapPin,
      title:
        lang === 'es'
          ? 'Acceso directo al Cap de Creus'
          : 'Accès direct au Cap de Creus',
      body:
        lang === 'es'
          ? 'El Parque Natural del Cap de Creus empieza prácticamente en la puerta. Desde otros puntos de la Costa Brava, llegar al cabo supone más horas de navegación. Desde Roses, está a 45-60 minutos.'
          : 'Le Parc Naturel du Cap de Creus commence pratiquement à la porte. Depuis d\'autres points de la Costa Brava, atteindre le cap demande plus d\'heures de navigation. Depuis Roses, il est à 45-60 minutes.',
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
    },
    {
      icon: Anchor,
      title:
        lang === 'es'
          ? 'Salida desde los canales de Santa Margarita — único en la Costa Brava'
          : 'Départ depuis les canaux de Santa Margarita — unique sur la Costa Brava',
      body:
        lang === 'es'
          ? 'El punto de salida de Experience Boat es único en la Costa Brava. Ninguna otra empresa opera desde los canales de Santa Margarita — la mayoría sale desde puertos deportivos convencionales.'
          : 'Le point de départ d\'Experience Boat est unique sur la Costa Brava. Aucune autre entreprise n\'opère depuis les canaux de Santa Margarita — la plupart partent depuis des ports de plaisance classiques.',
      accent: 'text-slate-700',
      bg: 'bg-slate-50',
      border: 'border-slate-200',
    },
    {
      icon: Wind,
      title:
        lang === 'es'
          ? 'Bahía protegida — condiciones ideales para lanchas de alquiler'
          : 'Baie protégée — conditions idéales pour les vedettes de location',
      body:
        lang === 'es'
          ? 'La bahía de Roses ofrece aguas relativamente protegidas, sin el oleaje abierto que se encuentra en otros puntos de la Costa Brava. Condiciones especialmente buenas para quienes salen por primera vez.'
          : 'La baie de Roses offre des eaux relativement protégées, sans la houle ouverte que l\'on trouve en d\'autres points de la Costa Brava. Conditions particulièrement bonnes pour ceux qui sortent pour la première fois.',
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
    },
    {
      icon: Compass,
      title:
        lang === 'es'
          ? 'Variedad de entornos en poco espacio'
          : 'Grande diversité de paysages en peu de distance',
      body:
        lang === 'es'
          ? 'En una sola jornada puedes recorrer los canales interiores de Santa Margarita, cruzar la bahía, llegar a las calas del Cap de Creus y volver. Difícil encontrar tanta diversidad en tan pocos kilómetros.'
          : 'En une seule journée, vous pouvez parcourir les canaux intérieurs de Santa Margarita, traverser la baie, atteindre les criques du Cap de Creus et revenir. Difficile de trouver autant de diversité en si peu de kilomètres.',
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
  ],
});

export default function PorQueRosesSection({ lang = 'es' }: PorQueRosesProps) {
  const content = getContent(lang);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          {content.title}
        </h2>
        <p className="text-slate-500 text-lg mb-12">
          {content.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {content.cards.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`${d.bg} border ${d.border} rounded-2xl p-6 flex flex-col gap-3`}
              >
                <div className={`${d.accent}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 leading-snug">{d.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
