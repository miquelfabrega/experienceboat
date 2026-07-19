import Link from 'next/link';
import { Clock, Users, ShieldCheck, MapPin, Euro } from 'lucide-react';

const translations = {
  es: {
    experience: 'Experiencia',
    title: 'Canal Tour Santa Margarita',
    description: 'Paseo en barco sin licencia por los canales — reserva online o por WhatsApp.',
    badge90: '90 minutos',
    badgeLicense: 'Sin licencia',
    content: 'Navega tú mismo por los canales de Santa Margarita en una embarcación de 4,3–4,5 m con motor Mercury 15 CV. Incluye instrucción previa, chalecos y todo lo necesario para una salida segura.',
    capacity: 'Capacidad: hasta 5 personas según embarcación',
    departure: 'Salida: Av. Clot Franquest Nord, Marina Santa Margarita, Roses',
    pricing: 'Tarifas: según temporada y modelo de barco — consulta precios actualizados al reservar',
    priceLabel: 'Precio orientativo',
    priceValue: 'Desde 90 €',
    reserveBtn: 'Reservar',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Canal%20Tour%20Santa%20Margarita',
    altImage: 'Canal Tour Santa Margarita — barco sin licencia en los canales de Roses'
  },
  fr: {
    experience: 'Expérience',
    title: 'Canal Tour Santa Margarita',
    description: 'Promenade en bateau sans permis sur les canaux — réservez en ligne ou par WhatsApp.',
    badge90: '90 minutes',
    badgeLicense: 'Sans permis',
    content: 'Naviguez vous-même sur les canaux de Santa Margarita dans une embarcation de 4,3–4,5 m avec moteur Mercury 15 CV. Comprend l\'instruction préalable, les gilets de sauvetage et tout ce qui est nécessaire pour une sortie sécurisée.',
    capacity: 'Capacité: jusqu\'à 5 personnes selon le bateau',
    departure: 'Départ: Av. Clot Franquest Nord, Marina Santa Margarita, Roses',
    pricing: 'Tarifs: selon la saison et le modèle de bateau — consultez les prix actualisés lors de la réservation',
    priceLabel: 'Prix indicatif',
    priceValue: 'Dès 90 €',
    reserveBtn: 'Réserver',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20Canal%20Tour%20Santa%20Margarita',
    altImage: 'Canal Tour Santa Margarita — bateau sans permis sur les canaux de Roses'
  },
  en: {
    experience: 'Experience',
    title: 'Canal Tour Santa Margarita',
    description: 'No-licence boat trip through the canals — book online or via WhatsApp.',
    badge90: '90 minutes',
    badgeLicense: 'No licence',
    content: 'Navigate yourself through the Santa Margarita canals in a 4.3–4.5 m boat with a Mercury 15 HP engine. Includes pre-trip instruction, life jackets and everything needed for a safe outing.',
    capacity: 'Capacity: up to 5 people depending on the boat',
    departure: 'Departure: Av. Clot Franquest Nord, Marina Santa Margarita, Roses',
    pricing: 'Rates: depending on season and boat model — check updated prices when booking',
    priceLabel: 'Indicative price',
    priceValue: 'From €90',
    reserveBtn: 'Book',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Hello%2C%20I%27d%20like%20information%20about%20the%20Canal%20Tour%20Santa%20Margarita',
    altImage: 'Canal Tour Santa Margarita — no licence boat in the Roses canals'
  },
  ca: {
    experience: 'Experiència',
    title: 'Canal Tour Santa Margarida',
    description: 'Passeig en vaixell sense llicència pels canals — reserveu en línia o per WhatsApp.',
    badge90: '90 minuts',
    badgeLicense: 'Sense llicència',
    content: 'Navegueu vosaltres mateixos pels canals de Santa Margarida en una embarcació de 4,3–4,5 m amb motor Mercury 15 CV. Inclou instrucció prèvia, armilles i tot el necessari per a una sortida segura.',
    capacity: 'Capacitat: fins a 5 persones segons embarcació',
    departure: 'Sortida: Av. Clot Franquest Nord, Marina Santa Margarida, Roses',
    pricing: 'Tarifes: segons temporada i model de vaixell — consulteu preus actualitzats en reservar',
    priceLabel: 'Preu orientatiu',
    priceValue: 'Des de 90 €',
    reserveBtn: 'Reservar',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Hola%2C%20vull%20informaci%C3%B3%20sobre%20el%20Canal%20Tour%20Santa%20Margarida',
    altImage: 'Canal Tour Santa Margarida — vaixell sense llicència als canals de Roses'
  }
};

interface ProductBoxSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function ProductBoxSection({ lang = 'es' }: ProductBoxSectionProps) {
  const t = translations[lang];
  // Booking-first: scroll to the on-page Regiondo widget instead of routing away.
  const reserveLink = '#reservar';

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100" id="producto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">
            {t.experience}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {t.title}
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-[42%] aspect-[9/16] lg:aspect-auto lg:min-h-[520px] bg-slate-900">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/santa-margarita/canal-tour-7056-poster.jpg"
              aria-label={t.altImage}
            >
              <source src="/santa-margarita/canal-tour-7056.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex-1 p-8 lg:p-10 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {t.badge90}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.badgeLicense}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {t.content}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <Users className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>{t.capacity}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>{t.departure}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Euro className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>{t.pricing}</span>
              </li>
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-end sm:justify-between border-t border-slate-100 pt-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.priceLabel}</p>
                <p className="text-2xl font-extrabold text-gray-900">{t.priceValue}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={reserveLink}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white shadow-lg shadow-sky-500/20 transition-all"
                >
                  {t.reserveBtn}
                </Link>
                <a
                  href={`https://wa.me/34623995700?text=${t.whatsappText}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-green-500 hover:bg-green-600 text-white transition-all"
                >
                  {t.whatsappBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
