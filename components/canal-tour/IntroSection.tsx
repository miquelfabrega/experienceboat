const translations = {
  es: {
    sectionId: 'que-es',
    title: 'La experiencia Canal Tour',
    paragraphs: [
      'Sumérgete en un paseo turístico inolvidable navegando por los impresionantes canales de Santa Margarita. Nuestros barcos están diseñados para ser conducidos sin necesidad de licencia, ofreciendo una forma divertida y segura de explorar esta maravillosa marina.',
      'Navegarás por una de las mayores marinas residenciales de Europa. La marina es conocida por sus kilómetros de canales navegables y su belleza indiscutible, con edificios atractivos y un entorno natural impresionante.',
      'A solo dos millas y media, encontrarás el Parque Natural de Cap de Creus, con aguas limpias y bajos índices de contaminación, una vista perfecta que podrás divisar durante tu aventura o incluso si decides acercarte más.'
    ],
    quote: '"Sé tú mismo el capitán en esta aventura por los canales."'
  },
  fr: {
    sectionId: 'que-est',
    title: 'L\'expérience Canal Tour',
    paragraphs: [
      'Plongez dans une promenade touristique inoubliable en naviguant sur les impressionnants canaux de Santa Margarita. Nos bateaux sont conçus pour être conduits sans permis, offrant un moyen amusant et sûr d\'explorer cette magnifique marina.',
      'Vous naviguerez sur l\'une des plus grandes marinas résidentielles d\'Europe. La marina est connue pour ses kilomètres de canaux navigables et sa beauté indéniable, avec des bâtiments attrayants et un environnement naturel impressionnant.',
      'À seulement quatre kilomètres, vous trouverez le Parc Naturel du Cap de Creus, avec des eaux propres et de faibles niveaux de pollution, une vue parfaite que vous pourrez admirer pendant votre aventure ou même si vous décidez de vous rapprocher.'
    ],
    quote: '"Soyez vous-même le capitaine dans cette aventure sur les canaux."'
  },
  en: {
    sectionId: 'what-is-it',
    title: 'The Canal Tour Experience',
    paragraphs: [
      'Immerse yourself in an unforgettable sightseeing boat trip exploring the impressive Santa Margarita canals. Our boats are designed to be driven without a licence, offering a fun and safe way to explore this wonderful marina.',
      'You will sail through one of Europe\'s largest residential marinas. The marina is known for its kilometres of navigable canals and undeniable beauty, with attractive buildings and a stunning natural environment.',
      'Just two and a half miles away, you\'ll find the Cap de Creus Natural Park, with clean waters and low pollution levels—a perfect view that you can admire during your adventure or even get closer to if you choose.'
    ],
    quote: '"Be the captain yourself in this adventure through the canals."'
  },
  ca: {
    sectionId: 'que-es',
    title: 'L\'experiència Canal Tour',
    paragraphs: [
      'Submergiu-vos en un passeig turístic inoblidable navegant pels impressionants canals de Santa Margarida. Les nostres embarcacions estan dissenyades per conduir-se sense necessitat de llicència, i ofereixen una manera divertida i segura d\'explorar aquesta meravellosa marina.',
      'Navegareu per una de les marines residencials més grans d\'Europa. La marina és coneguda pels seus quilòmetres de canals navegables i la seva bellesa indiscutible, amb edificis atractius i un entorn natural impressionant.',
      'A només dues milles i mitja, hi trobareu el Parc Natural del Cap de Creus, amb aigües netes i baixos índexs de contaminació, una vista perfecta que podreu albirar durant l\'aventura o fins i tot si decidiu acostar-vos-hi.'
    ],
    quote: '"Sigueu vosaltres mateixos el capità en aquesta aventura pels canals."'
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
