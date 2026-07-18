const translations = {
  es: {
    sectionId: 'que-es',
    title: 'La experiencia Canal Tour',
    paragraphs: [
      'Los canales de Santa Margarita se ven mejor desde el agua. Te explicamos lo básico en el pantalán, subes a una lancha de 4,3 metros con motor Mercury de 15 CV y llevas tú el timón durante 90 minutos. No hace falta licencia ni haber navegado nunca.',
      'Son quince kilómetros de canales abiertos sobre las antiguas marismas del río Grau, con unos mil seiscientos amarres y casas que dan directamente al agua. Desde la lancha ves lo que la calle no enseña: los jardines de atrás, los barcos amarrados en la puerta de casa, el movimiento de la marina a media tarde.',
      'Al final de los canales se abre la bahía. El Parque Natural del Cap de Creus queda a dos millas y media: no entra en este recorrido, pero desde la bocana se ve bien el perfil de la costa. Si sales a partir de las siete, vuelves con el sol bajo y el agua plana.'
    ],
    quote: '"Llevas tú el timón. Nosotros te enseñamos lo justo para que salgas tranquilo."'
  },
  fr: {
    sectionId: 'que-est',
    title: 'L\'expérience Canal Tour',
    paragraphs: [
      'Les canaux de Santa Margarita se découvrent mieux depuis l\'eau. On vous explique l\'essentiel au ponton, vous montez à bord d\'un bateau de 4,3 m avec moteur Mercury 15 CV et vous tenez la barre pendant 90 minutes. Ni permis ni expérience nécessaires.',
      'Quinze kilomètres de canaux creusés dans les anciens marais de l\'embouchure du Grau, environ mille six cents anneaux et des maisons qui donnent directement sur l\'eau. Depuis le bateau, on voit ce que la rue ne montre pas : les jardins à l\'arrière, les vedettes amarrées devant la porte, le va-et-vient de la marina en fin d\'après-midi.',
      'Au bout des canaux, la baie s\'ouvre. Le Parc Naturel du Cap de Creus est à quatre kilomètres et demi : il ne fait pas partie du parcours, mais on distingue très bien la ligne de côte depuis la passe. En partant après 19 h, vous rentrez avec le soleil bas et l\'eau plate.'
    ],
    quote: '"C\'est vous qui tenez la barre. On vous montre juste ce qu\'il faut pour partir tranquille."'
  },
  en: {
    sectionId: 'what-is-it',
    title: 'The Canal Tour Experience',
    paragraphs: [
      'The Santa Margarita canals are best seen from the water. We run through the basics on the pontoon, you step aboard a 4.3 m boat with a Mercury 15 hp engine and you take the helm for 90 minutes. No licence, no previous experience.',
      'Fifteen kilometres of canals cut into the old marshes at the mouth of the Grau, around sixteen hundred moorings and houses that open straight onto the water. From the boat you see what the street doesn\'t show you: the back gardens, the boats tied up at the front door, the marina coming and going in the late afternoon.',
      'The canals open out into the bay. Cap de Creus Natural Park lies two and a half miles off — it isn\'t part of this route, but you get a clear view of the headland from the entrance. Head out after seven and you come back with low sun and flat water.'
    ],
    quote: '"You take the helm. We show you just enough to head out relaxed."'
  },
  ca: {
    sectionId: 'que-es',
    title: 'L\'experiència Canal Tour',
    paragraphs: [
      'Els canals de Santa Margarida es veuen millor des de l\'aigua. Us expliquem el bàsic al pantalà, pugeu a una llanxa de 4,3 metres amb motor Mercury de 15 CV i porteu vosaltres el timó durant 90 minuts. No cal llicència ni haver navegat mai.',
      'Són quinze quilòmetres de canals oberts sobre els antics aiguamolls del riu Grau, amb uns mil sis-cents amarradors i cases que donen directament a l\'aigua. Des de la llanxa veieu el que el carrer no ensenya: els jardins del darrere, les embarcacions amarrades a la porta de casa, el moviment de la marina a mitja tarda.',
      'Al final dels canals s\'obre la badia. El Parc Natural del Cap de Creus queda a dues milles i mitja: no entra en aquest recorregut, però des de la bocana es veu bé el perfil de la costa. Si sortiu a partir de les set, torneu amb el sol baix i l\'aigua plana.'
    ],
    quote: '"Porteu vosaltres el timó. Nosaltres us ensenyem el just perquè sortiu tranquils."'
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
