import { CheckCircle2, CloudOff } from 'lucide-react';

/**
 * Franja de confianza para la landing de reservas: rating + garantías reales
 * (verificables en el sitio). NO incluir afirmaciones no comprobadas (p.ej.
 * "sin pago por adelantado") para no engañar.
 */
const COPY = {
  es: { reviews: '+190 reseñas en Google', confirm: 'Confirmación inmediata', weather: 'Cancelación gratuita por mal tiempo' },
  en: { reviews: '+190 Google reviews', confirm: 'Instant confirmation', weather: 'Free cancellation for bad weather' },
  fr: { reviews: '+190 avis Google', confirm: 'Confirmation immédiate', weather: 'Annulation gratuite en cas de mauvais temps' },
  ca: { reviews: '+190 ressenyes a Google', confirm: 'Confirmació immediata', weather: 'Cancel·lació gratuïta per mal temps' },
};

export default function BookingTrust({ lang = 'es' }: { lang?: 'es' | 'en' | 'fr' | 'ca' }) {
  const t = COPY[lang];
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 text-sm">
      <span className="inline-flex items-center gap-2 font-semibold text-gray-900">
        <span className="text-amber-400 tracking-tight" aria-hidden>★★★★★</span>
        <span>5,0 · {t.reviews}</span>
      </span>
      <span className="inline-flex items-center gap-1.5 text-gray-600">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
        {t.confirm}
      </span>
      <span className="inline-flex items-center gap-1.5 text-gray-600">
        <CloudOff className="w-4 h-4 text-sky-500 shrink-0" />
        {t.weather}
      </span>
    </div>
  );
}
