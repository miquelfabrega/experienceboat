type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, string> = {
  es: `Tienes la titulación y quieres un barco a la altura. En Experience Boat puedes alquilar
embarcaciones potentes con tu licencia de navegación y salir directamente desde los canales
de Santa Margarita hacia donde quieras. La bahía de Roses, el Parque Natural del Cap de Creus,
Cala Canyelles, Cala Almadraba — sin patrón, sin límites de ruta, a tu propio ritmo.`,
  fr: `Vous avez votre permis et vous voulez un bateau à la hauteur. Chez Experience Boat, vous pouvez louer
des embarcations puissantes avec votre permis de navigation et partir directement depuis les canaux
de Santa Margarita vers la destination de votre choix. La baie de Roses, le Parc Naturel du Cap de Creus,
Cala Canyelles, Cala Almadraba — sans capitaine, sans contrainte d'itinéraire, à votre propre rythme.`,
  en: `You have your licence and want a boat that matches. At Experience Boat you can rent powerful
vessels with your navigation licence and head straight out from the Santa Margarita canals
wherever you choose. The Bay of Roses, the Cap de Creus Natural Park, Cala Canyelles,
Cala Almadraba — no skipper, no route restrictions, at your own pace.`,
  ca: `Teniu la titulació i voleu un vaixell a l'altura. A Experience Boat podeu llogar
embarcacions potents amb la vostra llicència de navegació i sortir directament des dels canals
de Santa Margarida cap on vulgueu. La badia de Roses, el Parc Natural del Cap de Creus,
Cala Canyelles, Cala Almadrava — sense patró, sense límits de ruta, al vostre propi ritme.`,
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
