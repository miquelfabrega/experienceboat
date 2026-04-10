'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fleet } from '@/lib/data/fleet';

type BookingTranslations = {
  title: string;
  subtitle: string;
  step1Title: string;
  step1Yes: string;
  step1No: string;
  step2Title: string;
  step2Back: string;
  step2Next: string;
  step3Title: string;
  step3Back: string;
  step3Search: string;
  resultTitle: string;
  resultReset: string;
  resultEmpty: string;
  resultCTA: string;
  resultCTAHref: string;
  priceFrom: string;
};

const defaultTranslations: BookingTranslations = {
  title: 'Encuentra tu barco ideal',
  subtitle: 'Completa estos 3 pasos rápidos',
  step1Title: '¿Tienes licencia de navegación?',
  step1Yes: 'Sí',
  step1No: 'No',
  step2Title: '¿Cuántas personas sois?',
  step2Back: 'Atrás',
  step2Next: 'Continuar',
  step3Title: '¿Qué fecha prefieres?',
  step3Back: 'Atrás',
  step3Search: 'Buscar',
  resultTitle: 'Barcos compatibles',
  resultReset: 'Empezar de nuevo',
  resultEmpty: 'No encontramos barcos exactos para estos criterios. Contáctanos.',
  resultCTA: 'Ver disponibilidad completa',
  resultCTAHref: '/reservas/',
  priceFrom: 'Desde',
};

export default function BookingPreview({ translations }: { translations?: BookingTranslations } = {}) {
  const t = translations ?? defaultTranslations;
  const [step, setStep] = useState(1);
  const [licencia, setLicencia] = useState<boolean | null>(null);
  const [personas, setPersonas] = useState<number>(4);
  const [fecha, setFecha] = useState<string>('');

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const compatibleBoats = step === 4 ? fleet.filter(b => {
    // Si no tiene licencia, solo mostrar 'sin-licencia'
    if (licencia === false && b.categoria !== 'sin-licencia') return false;
    // Filtrar por capacidad
    if (b.pax && personas > b.pax) return false;
    return true;
  }).slice(0, 3) : []; // Mostrar solo top 3 en preview

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/50">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
            <div 
              className="absolute left-0 top-1/2 h-1 bg-blue-600 -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-sm ${
                  step >= i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                }`}
              >
                {i < 4 ? i : '✓'}
              </div>
            ))}
          </div>

          <div className="min-h-[250px] flex flex-col justify-center">
            {/* Step 1 */}
            {step === 1 && (
              <div className="animate-fade-in text-center">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{t.step1Title}</h3>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => { setLicencia(true); nextStep(); }}
                    className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all w-32"
                  >
                    {t.step1Yes}
                  </button>
                  <button 
                    onClick={() => { setLicencia(false); nextStep(); }}
                    className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all w-32"
                  >
                    {t.step1No}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="animate-fade-in text-center max-w-sm mx-auto w-full">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{t.step2Title}</h3>
                <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-8">
                  <button 
                    onClick={() => setPersonas(Math.max(1, personas - 1))}
                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-3xl font-bold text-gray-900">{personas}</span>
                  <button 
                    onClick={() => setPersonas(Math.min(12, personas + 1))}
                    className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-3 text-gray-500 font-semibold hover:text-gray-900">{t.step2Back}</button>
                  <button onClick={nextStep} className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700">{t.step2Next}</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="animate-fade-in text-center max-w-sm mx-auto w-full">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{t.step3Title}</h3>
                <input 
                  type="date" 
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 mb-8 text-lg font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  min={new Date().toISOString().split('T')[0]}
                />
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-3 text-gray-500 font-semibold hover:text-gray-900">{t.step3Back}</button>
                  <button 
                    onClick={nextStep} 
                    disabled={!fecha}
                    className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.step3Search}
                  </button>
                </div>
              </div>
            )}

            {/* Result Step */}
            {step === 4 && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{t.resultTitle}</h3>
                  <button onClick={() => setStep(1)} className="text-blue-600 text-sm font-semibold">{t.resultReset}</button>
                </div>
                
                {compatibleBoats.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {compatibleBoats.map(barco => (
                      <div key={barco.slug} className="bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col sm:flex-col flex-row gap-4 sm:gap-0 p-3 sm:p-0 shadow-sm">
                        <div className="relative w-24 h-24 sm:w-full sm:aspect-[4/3] rounded-lg sm:rounded-none overflow-hidden flex-shrink-0">
                          <Image src={barco.imagen || `https://picsum.photos/seed/${barco.slug}/300/200`} alt={barco.nombre} fill className="object-cover" />
                        </div>
                        <div className="sm:p-4 flex flex-col justify-center flex-grow">
                          <p className="font-bold text-sm sm:mb-1 text-gray-900 leading-tight">{barco.nombre}</p>
                          <p className="text-xs text-gray-500">{t.priceFrom} {barco.precioDesde}€</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-white rounded-xl mb-8 border border-gray-100">
                    <p className="text-gray-500">{t.resultEmpty}</p>
                  </div>
                )}
                
                <div className="text-center">
                  <Link 
                    href={t.resultCTAHref}
                    className="inline-block px-10 py-4 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
                  >
                    {t.resultCTA}
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}