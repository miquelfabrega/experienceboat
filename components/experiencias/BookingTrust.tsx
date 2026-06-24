import { CheckCircle2, Lock } from 'lucide-react';

/**
 * Franja de confianza para la landing de reservas: rating + garantías reales
 * (verificables). El pago se cobra al reservar vía Regiondo (pago online), así
 * que NO afirmamos "sin pago por adelantado" ni nada de cancelación.
 */
const COPY = {
  es: { reviews: '+190 reseñas en Google', confirm: 'Confirmación inmediata', pay: 'Pago online seguro' },
  en: { reviews: '+190 Google reviews', confirm: 'Instant confirmation', pay: 'Secure online payment' },
  fr: { reviews: '+190 avis Google', confirm: 'Confirmation immédiate', pay: 'Paiement en ligne sécurisé' },
  ca: { reviews: '+190 ressenyes a Google', confirm: 'Confirmació immediata', pay: 'Pagament en línia segur' },
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
        <Lock className="w-4 h-4 text-sky-500 shrink-0" />
        {t.pay}
      </span>
    </div>
  );
}
