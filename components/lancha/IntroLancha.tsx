type Lang = 'es' | 'fr' | 'ca';

interface IntroLanchaProps {
  lang?: Lang;
}

const t: Record<Lang, Record<string, string>> = {
  es: {
    title: 'Lancha en la Costa Brava desde los canales de Roses',
    intro: 'Si buscas alquilar una lancha en la Costa Brava y quieres salir desde un punto distinto, en Experience Boat operamos desde los canales de Santa Margarita — la única marina del norte de la que se sale navegando entre canales — con embarcaciones para quien tiene licencia y salidas con patrón para quien prefiere no llevar el timón. La bahía de Roses y el Cap de Creus quedan a pocos minutos. Para flota y precios con titulación, revisa',
    linkText: 'alquiler de barco con licencia en Roses',
    link: '/alquiler-barco-con-licencia-roses',
  },
  fr: {
    title: 'Vedette sur la Costa Brava depuis les canaux de Roses',
    intro: 'Si vous cherchez à louer une vedette sur la Costa Brava et souhaitez partir d\'un point différent, Experience Boat opère depuis les canaux de Santa Margarita — la seule marina du nord d\'où l\'on sort en naviguant entre les canaux — avec des embarcations pour ceux qui ont un permis et des sorties avec capitaine pour ceux qui préfèrent ne pas tenir le gouvernail. La baie de Roses et le Cap de Creus sont à quelques minutes. Pour la flotte et les tarifs avec permis, consultez',
    linkText: 'location de bateau avec permis à Roses',
    link: '/fr/location-bateau-avec-permis-roses',
  },
  ca: {
    title: 'Llanxa a la Costa Brava des dels canals de Roses',
    intro: 'Si cerqueu llogar una llanxa a la Costa Brava i voleu sortir des d\'un punt diferent, a Experience Boat operem des dels canals de Santa Margarida — l\'única marina del nord des d\'on se surt navegant entre canals — amb embarcacions per a qui té llicència i sortides amb patró per a qui prefereix no portar el timó. La badia de Roses i el Cap de Creus queden a pocs minuts. Per a flota i preus amb titulació, reviseu',
    linkText: 'lloguer de vaixell amb llicència a Roses',
    link: '/ca/lloguer-vaixell-amb-llicencia-roses',
  },
};

export default function IntroLancha({ lang = 'es' }: IntroLanchaProps) {
  const labels = t[lang];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {labels.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {labels.intro}{' '}
            <a
              href={labels.link}
              className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800"
            >
              {labels.linkText}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
