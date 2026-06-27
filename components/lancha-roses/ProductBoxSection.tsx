import Link from 'next/link';
import { Users, ShieldCheck, MapPin, Euro } from 'lucide-react';

const translations = {
  es: {
    experience: 'Alquiler',
    title: 'Alquiler de lancha en Roses',
    description: 'Lanchas con licencia para recorrer la bahía de Roses y el Cap de Creus — reserva online o por WhatsApp.',
    badgeLicense: 'Con licencia',
    badgeCapacity: 'Hasta 12 personas',
    content: 'Elige tu lancha en nuestra flota con licencia: motores de 115 a 250 CV, solárium de proa y casco preparado para mar abierto. Ideales para grupos y para llegar lejos, hasta las calas del Cap de Creus en un mismo día.',
    capacity: 'Capacidad: de 6 a 12 personas según barco',
    departure: 'Salida: Marina Santa Margarita, Roses',
    pricing: 'Tarifas: según barco y temporada — consulta al reservar',
    priceLabel: 'Precio orientativo',
    priceValue: 'Desde 195 €',
    reserveBtn: 'Reservar',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20lancha%20en%20Roses',
    altImage: 'Alquiler de lancha en Roses — Spirit of the Sea 675 navegando por la Costa Brava'
  },
  fr: {
    experience: 'Location',
    title: 'Location de bateau à Roses',
    description: 'Bateaux à moteur avec permis pour parcourir la baie de Roses et le Cap de Creus — réservez en ligne ou par WhatsApp.',
    badgeLicense: 'Avec permis',
    badgeCapacity: 'Jusqu\'à 12 personnes',
    content: 'Choisissez votre bateau dans notre flotte avec permis: moteurs de 115 à 250 CV, solarium à la proue et coque prête pour la mer ouverte. Idéaux pour les groupes et pour aller loin, jusqu\'aux criques du Cap de Creus en une seule journée.',
    capacity: 'Capacité: de 6 à 12 personnes selon le bateau',
    departure: 'Départ: Marina Santa Margarita, Roses',
    pricing: 'Tarifs: selon le bateau et la saison — consultez lors de la réservation',
    priceLabel: 'Prix indicatif',
    priceValue: 'Dès 195 €',
    reserveBtn: 'Réserver',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20location%20de%20bateau%20%C3%A0%20Roses',
    altImage: 'Location de bateau à Roses — Spirit of the Sea 675 naviguant sur la Costa Brava'
  },
  en: {
    experience: 'Rental',
    title: 'Boat rental in Roses',
    description: 'Licensed motorboats to explore Roses bay and Cap de Creus — book online or via WhatsApp.',
    badgeLicense: 'Licence required',
    badgeCapacity: 'Up to 12 people',
    content: 'Choose your boat from our licensed fleet: engines from 115 to 250 HP, bow sun deck and a hull built for open water. Perfect for groups and for going far, all the way to the Cap de Creus coves in a single day.',
    capacity: 'Capacity: 6 to 12 people depending on the boat',
    departure: 'Departure: Marina Santa Margarita, Roses',
    pricing: 'Rates: depending on boat and season — check when booking',
    priceLabel: 'Indicative price',
    priceValue: 'From €195',
    reserveBtn: 'Book',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Hello%2C%20I%27d%20like%20information%20about%20boat%20rental%20in%20Roses',
    altImage: 'Boat rental in Roses — Spirit of the Sea 675 sailing along the Costa Brava'
  },
  ca: {
    experience: 'Lloguer',
    title: 'Lloguer de llanxa a Roses',
    description: 'Llanxes amb llicència per recórrer la badia de Roses i el Cap de Creus — reserveu en línia o per WhatsApp.',
    badgeLicense: 'Amb llicència',
    badgeCapacity: 'Fins a 12 persones',
    content: 'Tria la teva llanxa a la nostra flota amb llicència: motors de 115 a 250 CV, solàrium de proa i casc preparat per a mar oberta. Ideals per a grups i per arribar lluny, fins a les cales del Cap de Creus en un mateix dia.',
    capacity: 'Capacitat: de 6 a 12 persones segons vaixell',
    departure: 'Sortida: Marina Santa Margarida, Roses',
    pricing: 'Tarifes: segons vaixell i temporada — consulteu en reservar',
    priceLabel: 'Preu orientatiu',
    priceValue: 'Des de 195 €',
    reserveBtn: 'Reservar',
    whatsappBtn: 'WhatsApp',
    whatsappText: 'Hola%2C%20vull%20informaci%C3%B3%20sobre%20el%20lloguer%20de%20llanxa%20a%20Roses',
    altImage: 'Lloguer de llanxa a Roses — Spirit of the Sea 675 navegant per la Costa Brava'
  }
};

interface ProductBoxSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function ProductBoxSection({ lang = 'es' }: ProductBoxSectionProps) {
  const t = translations[lang];
  // Booking-first: scroll to the on-page booking widget instead of routing away.
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
              poster="/lancha/alquiler-lancha-7478-poster.jpg"
              aria-label={t.altImage}
            >
              <source src="/lancha/alquiler-lancha-7478.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex-1 p-8 lg:p-10 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.badgeLicense}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
                <Users className="w-3.5 h-3.5" />
                {t.badgeCapacity}
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
