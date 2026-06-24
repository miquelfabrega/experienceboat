const translations = {
  es: {
    sectionId: 'que-es',
    title: 'Alquila tu lancha y descubre la Costa Brava norte',
    paragraphs: [
      'Ponte al timón y vive el mar a tu manera. Con tu licencia náutica puedes <strong>alquilar una lancha en Roses</strong> y navegar libremente por la bahía, descubriendo playas, calas escondidas y rincones que solo se ven desde el agua. Tú decides el rumbo, el ritmo y dónde fondear a darte un baño.',
      'Nuestra flota con licencia es <strong>potente y cómoda</strong>: lanchas de hasta 250 CV con solárium para tomar el sol, espacio para grupos de hasta 12 personas y autonomía de sobra para llegar lejos. Desde Roses pondrás rumbo a las <strong>calas del Cap de Creus y Cadaqués</strong>, uno de los litorales más espectaculares del Mediterráneo.',
      'La salida es desde la <strong>marina de Santa Margarita</strong>, en Roses, con embarque rápido y todo listo para zarpar. Si tienes tu titulación, el mar es tuyo: una jornada de navegación con la familia o los amigos por el Parque Natural del Cap de Creus.'
    ],
    quote: '"Con tu licencia, el rumbo lo decides tú."'
  },
  fr: {
    sectionId: 'que-est',
    title: 'Louez votre bateau et découvrez la Costa Brava nord',
    paragraphs: [
      'Prenez la barre et vivez la mer à votre façon. Avec votre permis nautique, vous pouvez <strong>louer un bateau à Roses</strong> et naviguer librement dans la baie, à la découverte de plages, de criques cachées et de coins que l\'on ne voit que depuis l\'eau. Vous décidez du cap, du rythme et de l\'endroit où jeter l\'ancre pour vous baigner.',
      'Notre flotte avec permis est <strong>puissante et confortable</strong> : des bateaux jusqu\'à 250 CV avec solarium pour bronzer, de la place pour des groupes jusqu\'à 12 personnes et une autonomie largement suffisante pour aller loin. Depuis Roses, vous mettrez le cap sur les <strong>criques du Cap de Creus et Cadaqués</strong>, l\'un des littoraux les plus spectaculaires de la Méditerranée.',
      'Le départ se fait depuis la <strong>marina de Santa Margarita</strong>, à Roses, avec un embarquement rapide et tout prêt pour appareiller. Si vous avez votre titre, la mer est à vous : une journée de navigation en famille ou entre amis dans le Parc Naturel du Cap de Creus.'
    ],
    quote: '"Avec votre permis, c\'est vous qui décidez du cap."'
  },
  en: {
    sectionId: 'what-is-it',
    title: 'Rent your boat and discover the northern Costa Brava',
    paragraphs: [
      'Take the helm and experience the sea your way. With your boating licence you can <strong>rent a boat in Roses</strong> and sail freely around the bay, discovering beaches, hidden coves and spots that can only be seen from the water. You choose the course, the pace and where to drop anchor for a swim.',
      'Our licensed fleet is <strong>powerful and comfortable</strong>: boats of up to 250 HP with a sun deck for sunbathing, room for groups of up to 12 people and plenty of range to go far. From Roses you\'ll head for the <strong>coves of Cap de Creus and Cadaqués</strong>, one of the most spectacular coastlines in the Mediterranean.',
      'Departure is from the <strong>Santa Margarita marina</strong> in Roses, with quick boarding and everything ready to set sail. If you hold your licence, the sea is yours: a day of sailing with family or friends through the Cap de Creus Natural Park.'
    ],
    quote: '"With your licence, you set the course."'
  },
  ca: {
    sectionId: 'que-es',
    title: 'Lloga la teva llanxa i descobreix la Costa Brava nord',
    paragraphs: [
      'Posa\'t al timó i viu el mar a la teva manera. Amb la teva llicència nàutica pots <strong>llogar una llanxa a Roses</strong> i navegar lliurement per la badia, descobrint platges, cales amagades i racons que només es veuen des de l\'aigua. Tu decideixes el rumb, el ritme i on fondejar a fer un bany.',
      'La nostra flota amb llicència és <strong>potent i còmoda</strong>: llanxes de fins a 250 CV amb solàrium per prendre el sol, espai per a grups de fins a 12 persones i autonomia de sobres per arribar lluny. Des de Roses posaràs rumb a les <strong>cales del Cap de Creus i Cadaqués</strong>, un dels litorals més espectaculars de la Mediterrània.',
      'La sortida és des de la <strong>marina de Santa Margarida</strong>, a Roses, amb embarcament ràpid i tot a punt per salpar. Si tens la teva titulació, el mar és teu: una jornada de navegació amb la família o els amics pel Parc Natural del Cap de Creus.'
    ],
    quote: '"Amb la teva llicència, el rumb el decideixes tu."'
  }
};

interface IntroSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function IntroSection({ lang = 'es' }: IntroSectionProps) {
  const t = translations[lang];

  return (
    <section id={t.sectionId} className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          {t.title}
        </h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left">
          {t.paragraphs.map((para, idx) => (
            <p key={idx}>
              {para.includes('<strong>') ? (
                <span dangerouslySetInnerHTML={{ __html: para }} />
              ) : (
                para
              )}
            </p>
          ))}
          <p className="font-semibold text-sky-700 italic text-center text-xl mt-8">
            {t.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
