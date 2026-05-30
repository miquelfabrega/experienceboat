type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, string> = {
  es: 'Hay dos maneras de disfrutar el mar en Roses: alquilar un barco y salir por tu cuenta, o dejar que alguien que conoce cada cala te lleve hasta ellas. En Experience Boat ofrecemos las dos — y esta es la segunda. Nuestras experiencias en barco son salidas privadas donde Salvador se encarga de todo: la navegación, la ruta y los imprevistos. Tú solo te preocupas de disfrutar. Desde los canales de Santa Margarita hasta las calas más vírgenes del Cap de Creus, con el grupo que quieras y al ritmo que prefieras.',
  fr: "Il y a deux façons de profiter de la mer à Roses : louer un bateau et partir par vos propres moyens, ou laisser quelqu'un qui connaît chaque crique vous y emmener. Chez Experience Boat, nous proposons les deux — et voici la seconde. Nos expériences en bateau sont des sorties privées où Salvador s'occupe de tout : la navigation, l'itinéraire et les imprévus. Vous n'avez qu'à profiter. Des canaux de Santa Margarita aux criques les plus sauvages du Cap de Creus, avec le groupe que vous voulez et au rythme qui vous convient.",
  en: 'There are two ways to enjoy the sea in Roses: rent a boat and set off on your own, or let someone who knows every cove take you to them. At Experience Boat we offer both — and this is the second. Our boat experiences are private outings where Salvador takes care of everything: the navigation, the route and the unexpected. All you have to do is enjoy. From the Santa Margarita canals to the most unspoilt coves of Cap de Creus, with the group you want and at the pace you prefer.',
};

export default function IntroSection({ lang = 'es' }: { lang?: Lang }) {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {t[lang]}
      </p>
    </section>
  );
}
