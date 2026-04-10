/**
 * Clave localStorage (RGPD): preferencias guardadas del usuario.
 * Si existe un valor válido, no se muestra el banner.
 */
export const COOKIE_CONSENT_KEY = 'cookie_consent';

/**
 * Evento personalizado para abrir el modal de cookies desde el footer u otros enlaces.
 * Escucha: `window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, ...)`
 */
export const COOKIE_SETTINGS_OPEN_EVENT = 'eb:open-cookie-settings';

/**
 * Google Tag Manager (gtm.js) se inyecta en el layout raíz con `beforeInteractive`.
 * No existe un “wrapper” que bloquee la carga del script hasta aceptar cookies: la
 * práctica recomendada con Consent Mode v2 es cargar GTM siempre y mantener
 * `analytics_storage` / `ad_storage` en `denied` hasta que el usuario conceda
 * (ver script `consent-default` en `app/layout.tsx`). Las etiquetas en GTM deben
 * respetar el estado de consentimiento.
 */

/** Clave legacy (migración desde versión anterior) */
const LEGACY_CONSENT_KEY = 'experienceboat_cookie_consent';

export interface CookieConsentPreferences {
  v: 1;
  /** Siempre true cuando hay consentimiento guardado */
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

function isValidPreferences(x: unknown): x is CookieConsentPreferences {
  if (!x || typeof x !== 'object') return false;
  const o = x as Record<string, unknown>;
  return (
    o.v === 1 &&
    o.essential === true &&
    typeof o.analytics === 'boolean' &&
    typeof o.marketing === 'boolean' &&
    typeof o.updatedAt === 'string'
  );
}

/** Lee y valida `cookie_consent`; migra la clave legacy si aplica. */
export function getStoredConsent(): CookieConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (isValidPreferences(parsed)) {
        return parsed;
      }
    } catch {
      /* ignore */
    }
  }

  const legacy = localStorage.getItem(LEGACY_CONSENT_KEY);
  if (legacy === 'all') {
    const prefs: CookieConsentPreferences = {
      v: 1,
      essential: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    localStorage.removeItem(LEGACY_CONSENT_KEY);
    return prefs;
  }
  if (legacy === 'essential') {
    const prefs: CookieConsentPreferences = {
      v: 1,
      essential: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    localStorage.removeItem(LEGACY_CONSENT_KEY);
    return prefs;
  }

  return null;
}

/** Persiste preferencias, actualiza timestamp y aplica Consent Mode. */
export function saveConsentPreferences(analytics: boolean, marketing: boolean): void {
  const full: CookieConsentPreferences = {
    v: 1,
    essential: true,
    analytics,
    marketing,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(full));
  applyConsentPreferences({ analytics, marketing });
}

/**
 * Aplica Consent Mode v2 en GTM/dataLayer según preferencias granulares.
 * Esenciales: functionality + security (ya granted por defecto en layout).
 */
export function applyConsentPreferences(prefs: Pick<CookieConsentPreferences, 'analytics' | 'marketing'>): void {
  if (typeof window === 'undefined') return;
  ensureGtag();

  const analytics = prefs.analytics ? 'granted' : 'denied';
  const marketing = prefs.marketing ? 'granted' : 'denied';

  window.gtag!('consent', 'update', {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    personalization_storage: marketing,
  });

  window.dataLayer.push({
    event: 'cookie_consent_update',
    cookie_consent: {
      analytics: prefs.analytics,
      marketing: prefs.marketing,
    },
  });
}

export function applyStoredConsentIfAny(): void {
  const stored = getStoredConsent();
  if (stored) {
    applyConsentPreferences({
      analytics: stored.analytics,
      marketing: stored.marketing,
    });
  }
}

/** True si hay un registro guardado en `cookie_consent` (el usuario ya decidió). */
export function hasCookieConsentRecord(): boolean {
  return getStoredConsent() !== null;
}

/** Consentimiento analítico; false si no hay registro o está denegado. */
export function hasAnalyticsConsent(): boolean {
  return getStoredConsent()?.analytics === true;
}

/** Consentimiento marketing/publicidad; false si no hay registro o está denegado. */
export function hasMarketingConsent(): boolean {
  return getStoredConsent()?.marketing === true;
}

/** Solo cliente: dispara la apertura del modal de preferencias (p. ej. desde el footer). */
export function dispatchOpenCookieSettings(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_OPEN_EVENT));
}
