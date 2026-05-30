'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

export interface BoatGalleryImage {
  src: string;
  alt: string;
}

interface BoatGalleryProps {
  images: BoatGalleryImage[];
  /** Nombre del barco, usado para el aria-label de la galería. */
  nombre: string;
}

/**
 * Galería responsive con lightbox (modal) sin librerías externas.
 *
 * - Grid responsive: 1 columna en móvil, 2 en sm, 3 en lg.
 * - Lightbox con navegación ← / →, cierre con ✕ y tecla Esc.
 * - Bloquea el scroll del body mientras el modal está abierto.
 * - Accesible por teclado (flechas, Escape) y con roles ARIA.
 */
export default function BoatGallery({ images, nombre }: BoatGalleryProps) {
  // Índice de la imagen abierta en el lightbox; null = cerrado.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const showPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  // Navegación por teclado y bloqueo de scroll mientras el modal está abierto.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, showPrev, showNext]);

  if (images.length === 0) return null;

  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <ul
        aria-label={`Galería de fotos del barco ${nombre}`}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {images.map((img, i) => (
          <li key={img.src} className="list-none">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar imagen: ${img.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${current.alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Cerrar */}
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          {images.length > 1 && (
            <>
              {/* Anterior */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span aria-hidden="true">&#8592;</span>
              </button>

              {/* Siguiente */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Imagen siguiente"
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span aria-hidden="true">&#8594;</span>
              </button>
            </>
          )}

          {/* Imagen actual */}
          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          {/* Contador */}
          {images.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
              {openIndex! + 1} / {images.length}
            </p>
          )}
        </div>
      )}
    </>
  );
}
