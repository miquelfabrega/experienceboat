'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Barco } from '@/lib/data/fleet';

type Lang = 'es' | 'en' | 'fr' | 'ca';

const FLEET_INDEX: Record<Lang, string> = {
  es: '/barcos',
  en: '/en/boats',
  fr: '/fr/bateaux',
  ca: '/ca/embarcacions',
};

const DETAIL_CTA: Record<Lang, string> = {
  es: 'Ver detalles completos',
  en: 'See full fleet',
  fr: 'Voir toute la flotte',
  ca: 'Veure tota la flota',
};

// Locales con páginas de detalle por barco (mirror de ES). EN/FR aún no las tienen
// y enlazan al índice de flota.
const DETAIL_BASE: Partial<Record<Lang, string>> = {
  es: '/barcos',
  ca: '/ca/embarcacions',
};

export default function FleetCard({ barco, lang = 'es' }: { barco: Barco; lang?: Lang }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailBase = DETAIL_BASE[lang];
  const detailHref = detailBase ? `${detailBase}/${barco.slug}` : FLEET_INDEX[lang];

  return (
    <>
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col group">
        <Link href={detailHref} className="block relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src={barco.imagen || `https://picsum.photos/seed/${barco.slug}/400/500`}
            alt={`Barco ${barco.categoria.replace('-', ' ')} en Roses — ${barco.nombre}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
              barco.categoria === 'sin-licencia' ? 'bg-green-500' : 'bg-blue-500'
            }`}>
              {barco.categoria === 'sin-licencia' ? 'Sin Licencia' : 'Con Licencia'}
            </span>
            {barco.badge && (
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-500 text-white shadow-md">
                {barco.badge}
              </span>
            )}
          </div>
        </Link>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            <Link href={detailHref} className="hover:text-blue-700 transition-colors">
              {barco.nombre}
            </Link>
          </h3>

          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            {barco.pax && <li>👥 Capacidad: {barco.pax} personas</li>}
            {barco.eslora && <li>📏 Eslora: {barco.eslora}</li>}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-3">
            <div className="text-gray-900 font-medium">
              <span className="text-sm text-gray-500">desde</span> <span className="font-bold text-lg">{barco.precioDesde}€</span><span className="text-sm text-gray-500">/día</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
              >
                Quick view
              </button>
              <Link
                href={detailHref}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver ficha →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              ✕
            </button>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
              <Image
                src={barco.imagen || `https://picsum.photos/seed/${barco.slug}/800/450`}
                alt={barco.nombre}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{barco.nombre}</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Capacidad</p>
                <p className="font-semibold text-gray-900">{barco.pax || '?'} personas</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Eslora</p>
                <p className="font-semibold text-gray-900">{barco.eslora || '?'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Motor</p>
                <p className="font-semibold text-gray-900">{barco.motor || '?'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Precio desde</p>
                <p className="font-semibold text-gray-900">{barco.precioDesde}€/día</p>
              </div>
            </div>
            <a
              href={detailHref}
              className="w-full block text-center py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              {DETAIL_CTA[lang]}
            </a>
          </div>
        </div>
      )}
    </>
  );
}