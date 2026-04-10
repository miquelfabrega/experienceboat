'use client';

import type { ReactNode } from 'react';
import { dispatchOpenCookieSettings } from '@/lib/consent';

type Props = {
  className?: string;
  children?: ReactNode;
};

/**
 * Enlace que abre el modal de preferencias de cookies (mismo que el banner).
 * Usar en el footer u otras páginas legales.
 */
export default function CookieSettingsLink({ className, children }: Props) {
  return (
    <button
      type="button"
      onClick={() => dispatchOpenCookieSettings()}
      className={`bg-transparent p-0 font-inherit ${className ?? ''}`}
    >
      {children ?? 'Configurar cookies'}
    </button>
  );
}
