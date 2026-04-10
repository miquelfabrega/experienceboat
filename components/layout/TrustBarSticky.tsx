'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Star, Phone, MapPin, X } from 'lucide-react';
import Link from 'next/link';

interface TrustBarStickyProps {
  phoneNumber?: string;
  googleMapsUrl?: string;
  language?: 'es' | 'en' | 'fr';
}

const translations = {
  es: {
    text: 'Web en mantenimiento: Reserva por teléfono o mira nuestras +190 reseñas de 5⭐ en Google Maps',
    subtitle: 'Tranquilo, somos de fiar, mira nuestras reseñas y llámanos',
    callButton: 'Llamar ahora',
    mapsButton: 'Ver Google Maps',
  },
  en: {
    text: 'Website under improvement: Book by phone or check our +190 5⭐ reviews on Google Maps',
    subtitle: 'No worries, we\'re trustworthy. Check our reviews and give us a call',
    callButton: 'Call now',
    mapsButton: 'See Google Maps',
  },
  fr: {
    text: 'Site en maintenance : Réservez par téléphone ou consultez nos +190 avis 5⭐ sur Google Maps',
    subtitle: 'Pas de soucis, on est de confiance. Consultez nos avis et appelez-nous',
    callButton: 'Appeler maintenant',
    mapsButton: 'Voir Google Maps',
  },
};

export default function TrustBarSticky({
  phoneNumber = '+34623995700',
  googleMapsUrl = 'https://maps.google.com/?q=Experience+Boat+Roses',
  language: languageProp,
}: TrustBarStickyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const pathname = usePathname();

  // Auto-detect language from pathname if not provided
  const detectedLanguage = (() => {
    if (languageProp) return languageProp;
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/fr')) return 'fr';
    return 'es';
  })() as 'es' | 'en' | 'fr';

  const t = translations[detectedLanguage];

  useEffect(() => {
    // Fade in after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isClosed || !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background overlay blur effect */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg border-t border-blue-400">
        {/* Extra padding-right on mobile to avoid WhatsApp button overlap */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 pr-20 sm:pr-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Stars and main text */}
              <div className="flex items-start gap-2 mb-1">
                <div className="flex gap-0.5 flex-shrink-0 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>
                <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {t.text}
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-blue-100 text-xs sm:text-sm ml-6">
                {t.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
              <a
                href={`tel:${phoneNumber}`}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">{t.callButton}</span>
                <span className="sm:hidden">Llamar</span>
              </a>

              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                <MapPin size={16} />
                <span className="hidden sm:inline">{t.mapsButton}</span>
                <span className="sm:hidden">Maps</span>
              </Link>

              {/* Close button */}
              <button
                onClick={() => setIsClosed(true)}
                className="flex-shrink-0 text-white hover:text-blue-100 transition-colors p-1"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap on mobile */}
      <div className="h-2" />
    </div>
  );
}
