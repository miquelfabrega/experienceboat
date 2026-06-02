'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import {
  COOKIE_SETTINGS_OPEN_EVENT,
  applyConsentPreferences,
  getStoredConsent,
  saveConsentPreferences,
} from '@/lib/consent';
import { localizedHref, type Locale } from '@/lib/i18n/routes';

function ToggleRow({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-100 py-4 last:border-b-0">
      <div className="min-w-0">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={`relative inline-flex h-7 w-12 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
          disabled
            ? 'cursor-not-allowed bg-gray-200'
            : checked
              ? 'bg-sky-600'
              : 'bg-gray-200'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

export default function CookieBanner({ lang = 'es' }: { lang?: Locale }) {
  const privacyHref = localizedHref('privacy', lang);
  const cookiesHref = localizedHref('cookies', lang);
  const [showBanner, setShowBanner] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [draftMarketing, setDraftMarketing] = useState(false);

  const modalTitleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyConsentPreferences({
        analytics: stored.analytics,
        marketing: stored.marketing,
      });
      return;
    }
    setShowBanner(true);
  }, []);

  /** Footer u otros: abre el modal con valores guardados (o solo banner si aún no hay decisión). */
  useEffect(() => {
    const onOpenFromExternal = () => {
      const s = getStoredConsent();
      setDraftAnalytics(s?.analytics ?? false);
      setDraftMarketing(s?.marketing ?? false);
      setShowSettings(true);
      if (!s) setShowBanner(true);
    };
    window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, onOpenFromExternal);
    return () => window.removeEventListener(COOKIE_SETTINGS_OPEN_EVENT, onOpenFromExternal);
  }, []);

  useEffect(() => {
    if (!showBanner) return;
    const id = window.setTimeout(() => setAnimateIn(true), 40);
    return () => window.clearTimeout(id);
  }, [showBanner]);

  useEffect(() => {
    if (!showSettings) return;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowSettings(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [showSettings]);

  const closeBanner = () => {
    setAnimateIn(false);
    window.setTimeout(() => setShowBanner(false), 400);
  };

  const handleAcceptAll = () => {
    saveConsentPreferences(true, true);
    closeBanner();
  };

  const handleEssentialOnly = () => {
    saveConsentPreferences(false, false);
    closeBanner();
  };

  /** Desde el banner inicial: categorías no esenciales en off por defecto. */
  const openSettingsFromBanner = () => {
    setDraftAnalytics(false);
    setDraftMarketing(false);
    setShowSettings(true);
  };

  const handleSaveSettings = () => {
    saveConsentPreferences(draftAnalytics, draftMarketing);
    setShowSettings(false);
    if (showBanner) closeBanner();
  };

  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {showSettings && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity"
            aria-label="Cerrar configuración de cookies"
            onClick={() => setShowSettings(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            className="relative z-[101] max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id={modalTitleId} className="text-lg font-bold text-gray-900">
                Configuración de cookies
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setShowSettings(false)}
                className="rounded-lg p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                aria-label="Cerrar"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-600">
              Puedes activar o desactivar cada categoría. Las cookies no esenciales están desactivadas por defecto.
              Más información en nuestra{' '}
              <Link href={privacyHref} className="font-medium text-sky-600 hover:underline">
                política de privacidad
              </Link>{' '}
              y{' '}
              <Link href={cookiesHref} className="font-medium text-sky-600 hover:underline">
                política de cookies
              </Link>
              .
            </p>
            <div className="mt-2 divide-y divide-gray-100">
              <ToggleRow
                id="cookie-essential"
                label="Esenciales"
                description="Necesarias para el funcionamiento del sitio (seguridad, preferencias de sesión). No se pueden desactivar."
                checked={true}
                disabled
              />
              <ToggleRow
                id="cookie-analytics"
                label="Analíticas"
                description="Nos permiten medir visitas y uso del sitio (por ejemplo Google Analytics) para mejorar el servicio."
                checked={draftAnalytics}
                onChange={setDraftAnalytics}
              />
              <ToggleRow
                id="cookie-marketing"
                label="Marketing"
                description="Permiten mostrar publicidad personalizada y medir campañas (p. ej. píxeles de redes sociales)."
                checked={draftMarketing}
                onChange={setDraftMarketing}
              />
            </div>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className="rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-500"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}

      {showBanner && (
        <div
          className="fixed inset-x-0 bottom-0 z-[95] pointer-events-none px-4 pb-4 sm:px-6 sm:pb-6"
          role="region"
          aria-label="Aviso de cookies"
          aria-labelledby="cookie-banner-title"
        >
          <div
            className={`pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-gray-200/80 bg-white/95 shadow-2xl shadow-gray-900/10 backdrop-blur-md transition-all duration-500 ease-out ${
              animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-4 p-5 sm:p-6">
              <div className="min-w-0 space-y-2">
                <h2 id="cookie-banner-title" className="text-base font-bold text-gray-900 sm:text-lg">
                  Uso de cookies (RGPD)
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Utilizamos cookies propias y de terceros para analizar el tráfico y mostrar publicidad
                  personalizada. Las analíticas y marketing están desactivadas hasta que las aceptes. Puedes
                  configurar cada categoría o leer más en nuestra{' '}
                  <Link
                    href={privacyHref}
                    className="font-medium text-sky-600 underline-offset-2 hover:underline"
                  >
                    política de privacidad
                  </Link>{' '}
                  y{' '}
                  <Link href={cookiesHref} className="font-medium text-sky-600 underline-offset-2 hover:underline">
                    política de cookies
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={openSettingsFromBanner}
                  className="order-3 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:order-1"
                >
                  Configuración
                </button>
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="order-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:order-2"
                >
                  Solo esenciales
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="order-1 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-500 sm:order-3"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
