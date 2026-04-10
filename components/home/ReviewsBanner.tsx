'use client';

import Link from 'next/link';
import { Star, Phone, MapPin } from 'lucide-react';

interface ReviewsBannerProps {
  title: string;
  subtitle?: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  phoneNumber: string;
  ctaText: string;
  callButtonText: string;
  footerText?: string;
}

export default function ReviewsBanner({
  title,
  subtitle = 'Estamos mejorando tu experiencia online',
  rating,
  reviewCount,
  googleMapsUrl,
  phoneNumber,
  ctaText,
  callButtonText,
  footerText = 'Nos encanta lo que hacemos. Déjanos saber tu experiencia en Google Maps o contacta directamente con nosotros para reservar.',
}: ReviewsBannerProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={20}
      className="fill-yellow-400 text-yellow-400"
    />
  ));

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-gray-600">
              {subtitle}
            </p>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Stars */}
            <div className="flex flex-col items-center">
              <div className="flex gap-2 mb-3">
                {stars}
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {rating.toFixed(1)} de 5 estrellas
              </p>
              <p className="text-sm text-gray-600">
                +{reviewCount} reseñas en Google Maps
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gray-300"></div>

            {/* CTA */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <MapPin size={18} />
                {ctaText}
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Phone size={18} />
                {callButtonText}
              </a>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center text-sm text-gray-600 border-t pt-6">
            <p>{footerText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
