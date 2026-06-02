import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ShieldCheck, MapPin, Euro } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const EXPERIENCE_HREF: Record<Lang, string> = {
  es: '/experiencias-barco-roses/canal-tour-santa-margarita',
  ca: '/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
  fr: '/fr/experiences-bateau-roses/canal-tour-santa-margarita',
  en: '/en/boat-experiences-roses/canal-tour-santa-margarita',
};

const WHATSAPP_TEXT: Record<Lang, string> = {
  es: 'Hola, quiero información sobre el Canal Tour Santa Margarita',
  ca: 'Hola, voldria informació sobre el Canal Tour Santa Margarida',
  fr: 'Bonjour, je voudrais des informations sur le Canal Tour Santa Margarita',
  en: 'Hello, I would like information about the Canal Tour Santa Margarita',
};

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  badgeDuration: string;
  badgeNoLicense: string;
  description: string;
  capacityLabel: string;
  capacityValue: string;
  departureLabel: string;
  departureValue: string;
  pricingLabel: string;
  pricingValue: string;
  priceHint: string;
  priceValue: string;
  ctaBook: string;
  ctaWhatsApp: string;
  imageAlt: string;
};

const COPY: Record<Lang, Copy> = {
  es: {
    eyebrow: 'Experiencia',
    title: 'Canal Tour Santa Margarita',
    subtitle: 'Paseo en barco sin licencia por los canales — reserva online o por WhatsApp.',
    badgeDuration: '90 minutos',
    badgeNoLicense: 'Sin licencia',
    description:
      'Navega tú mismo por los canales de Santa Margarita en una embarcación de 4,3–4,5 m con motor Mercury 15 CV. Incluye instrucción previa, chalecos y todo lo necesario para una salida segura.',
    capacityLabel: 'Capacidad:',
    capacityValue: '4 a 6 personas según embarcación',
    departureLabel: 'Salida:',
    departureValue: 'Av. Clot Franquest Nord, Marina Santa Margarita, Roses',
    pricingLabel: 'Tarifas:',
    pricingValue: 'según temporada y modelo de barco — consulta precios actualizados al reservar',
    priceHint: 'Precio orientativo',
    priceValue: 'Consultar en reservas',
    ctaBook: 'Reservar',
    ctaWhatsApp: 'WhatsApp',
    imageAlt:
      'Canal Tour Santa Margarita — vista aérea de un canal con barcos amarrados al atardecer, Roses',
  },
  ca: {
    eyebrow: 'Experiència',
    title: 'Canal Tour Santa Margarida',
    subtitle: 'Passeig en vaixell sense llicència pels canals — reserveu en línia o per WhatsApp.',
    badgeDuration: '90 minuts',
    badgeNoLicense: 'Sense llicència',
    description:
      'Navegueu vosaltres mateixos pels canals de Santa Margarida en una embarcació de 4,3–4,5 m amb motor Mercury 15 CV. Inclou instrucció prèvia, armilles i tot el que cal per a una sortida segura.',
    capacityLabel: 'Capacitat:',
    capacityValue: '4 a 6 persones segons l’embarcació',
    departureLabel: 'Sortida:',
    departureValue: 'Av. Clot Franquest Nord, Marina Santa Margarida, Roses',
    pricingLabel: 'Tarifes:',
    pricingValue:
      'segons la temporada i el model de vaixell — consulteu els preus actualitzats en reservar',
    priceHint: 'Preu orientatiu',
    priceValue: 'Consulteu a reserves',
    ctaBook: 'Reservar',
    ctaWhatsApp: 'WhatsApp',
    imageAlt:
      'Canal Tour Santa Margarida — vista aèria d’un canal amb vaixells amarrats al capvespre, Roses',
  },
  fr: {
    eyebrow: 'Expérience',
    title: 'Canal Tour Santa Margarita',
    subtitle: 'Balade en bateau sans permis dans les canaux — réservez en ligne ou par WhatsApp.',
    badgeDuration: '90 minutes',
    badgeNoLicense: 'Sans permis',
    description:
      'Naviguez vous-même dans les canaux de Santa Margarita à bord d’une embarcation de 4,3–4,5 m avec moteur Mercury 15 CV. Comprend l’instruction préalable, les gilets et tout le nécessaire pour une sortie en toute sécurité.',
    capacityLabel: 'Capacité :',
    capacityValue: '4 à 6 personnes selon l’embarcation',
    departureLabel: 'Départ :',
    departureValue: 'Av. Clot Franquest Nord, Marina Santa Margarita, Roses',
    pricingLabel: 'Tarifs :',
    pricingValue:
      'selon la saison et le modèle de bateau — consultez les prix à jour lors de la réservation',
    priceHint: 'Prix indicatif',
    priceValue: 'À consulter lors de la réservation',
    ctaBook: 'Réserver',
    ctaWhatsApp: 'WhatsApp',
    imageAlt:
      'Canal Tour Santa Margarita — vue aérienne d’un canal avec des bateaux amarrés au coucher du soleil, Roses',
  },
  en: {
    eyebrow: 'Experience',
    title: 'Canal Tour Santa Margarita',
    subtitle: 'Licence-free boat ride through the canals — book online or via WhatsApp.',
    badgeDuration: '90 minutes',
    badgeNoLicense: 'No licence',
    description:
      'Pilot the boat yourself through the canals of Santa Margarita in a 4.3–4.5 m boat with a Mercury 15 HP engine. Includes prior instruction, life jackets and everything needed for a safe outing.',
    capacityLabel: 'Capacity:',
    capacityValue: '4 to 6 people depending on the boat',
    departureLabel: 'Departure:',
    departureValue: 'Av. Clot Franquest Nord, Marina Santa Margarita, Roses',
    pricingLabel: 'Rates:',
    pricingValue: 'depending on season and boat model — check up-to-date prices when booking',
    priceHint: 'Indicative price',
    priceValue: 'Check at booking',
    ctaBook: 'Book',
    ctaWhatsApp: 'WhatsApp',
    imageAlt:
      'Canal Tour Santa Margarita — aerial view of a canal with boats moored at sunset, Roses',
  },
};

export default function ProductBoxSection({ lang = 'es' }: { lang?: Lang }) {
  const t = COPY[lang];
  const whatsappHref = `https://wa.me/34623995700?text=${encodeURIComponent(WHATSAPP_TEXT[lang])}`;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100" id="producto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {t.title}
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          <div className="relative lg:w-[42%] min-h-[240px] lg:min-h-0 aspect-[4/3] lg:aspect-auto">
            <Image
              src="/santa-margarita/canal-tour-card.webp"
              alt={t.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          <div className="flex-1 p-8 lg:p-10 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {t.badgeDuration}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.badgeNoLicense}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {t.description}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <Users className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>{t.capacityLabel}</strong> {t.capacityValue}
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>{t.departureLabel}</strong> {t.departureValue}
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Euro className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>{t.pricingLabel}</strong> {t.pricingValue}
                </span>
              </li>
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-end sm:justify-between border-t border-slate-100 pt-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.priceHint}</p>
                <p className="text-2xl font-extrabold text-gray-900">{t.priceValue}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={EXPERIENCE_HREF[lang]}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white shadow-lg shadow-sky-500/20 transition-all"
                >
                  {t.ctaBook}
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-green-500 hover:bg-green-600 text-white transition-all"
                >
                  {t.ctaWhatsApp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
