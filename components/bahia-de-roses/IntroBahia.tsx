type Lang = 'es' | 'fr' | 'ca';

interface IntroBahiaProps {
  lang?: Lang;
}

const t: Record<
  Lang,
  { title: string; before: string; linkText: string; link: string; after: string }
> = {
  es: {
    title: 'La bahía de Roses, a tu ritmo con licencia',
    before:
      'La bahía de Roses es uno de los escenarios de navegación más completos de la Costa Brava: protegida al norte por el Cap de Creus y abierta al sur hacia el golfo de León, ofrece condiciones excelentes la mayor parte de la temporada. Salimos desde los canales de Santa Margarita — el acceso más singular a la bahía — con embarcaciones para patrones con licencia que buscan espacio, calas y libertad de ruta. La flota y precios para titulados están en nuestra página de ',
    linkText: 'alquiler de barco con licencia en Roses',
    link: '/alquiler-barco-con-licencia-roses',
    after: '.',
  },
  fr: {
    title: 'La baie de Roses, à votre rythme avec permis',
    before:
      'La baie de Roses est l\'un des décors de navigation les plus complets de la Costa Brava : protégée au nord par le Cap de Creus et ouverte au sud vers le golfe du Lion, elle offre d\'excellentes conditions la plupart de la saison. Nous partons des canaux de Santa Margarita — l\'accès le plus singulier à la baie — avec des embarcations pour les patrons avec permis qui recherchent espace, criques et liberté d\'itinéraire. La flotte et les tarifs pour titulaires sont sur notre page de ',
    linkText: 'location de bateau avec permis à Roses',
    link: '/fr/location-bateau-avec-permis-roses',
    after: '.',
  },
  ca: {
    title: 'La badia de Roses, al vostre ritme amb llicència',
    before:
      'La badia de Roses és un dels escenaris de navegació més complets de la Costa Brava: protegida al nord pel Cap de Creus i oberta al sud cap al golf de Lleó, ofereix condicions excel·lents la major part de la temporada. Sortim des dels canals de Santa Margarida — l\'accés més singular a la badia — amb embarcacions per a patrons amb llicència que cerquen espai, cales i llibertat de ruta. La flota i els preus per a titulats són a la nostra pàgina de ',
    linkText: 'lloguer de vaixell amb llicència a Roses',
    link: '/ca/lloguer-vaixell-amb-llicencia-roses',
    after: '.',
  },
};

export default function IntroBahia({ lang = 'es' }: IntroBahiaProps) {
  const labels = t[lang];
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {labels.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {labels.before}
            <a
              href={labels.link}
              className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800"
            >
              {labels.linkText}
            </a>
            {labels.after}
          </p>
        </div>
      </div>
    </section>
  );
}
