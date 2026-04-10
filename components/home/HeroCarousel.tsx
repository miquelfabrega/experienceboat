'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeData } from '@/lib/data/home';

type HeroData = typeof homeData.hero;

export default function HeroCarousel({ data }: { data?: HeroData } = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides, title, ctaPrimary, ctaSecondary, socialProof } = data ?? homeData.hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative -mt-20 pt-20 w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {title}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href={ctaPrimary.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {ctaPrimary.text}
          </Link>
          <a
            href={ctaSecondary.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {ctaSecondary.text}
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          {socialProof}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}