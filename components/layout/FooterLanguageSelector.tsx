'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { equivalentPath, type Locale } from '@/lib/i18n/routes';

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'ca', label: 'Català' },
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
];

/**
 * Selector de idioma del footer. Cliente (necesita `usePathname`) para llevar
 * al usuario a la página equivalente en el idioma destino, igual que el navbar,
 * en vez de a la home.
 */
export default function FooterLanguageSelector({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-500"
      aria-label="Language"
    >
      {LANGUAGES.map((l, i) => (
        <span key={l.code} className="flex items-center gap-x-3">
          {i > 0 && <span className="text-gray-600 select-none" aria-hidden>·</span>}
          {l.code === lang ? (
            <span className="text-white font-semibold" aria-current="true">{l.label}</span>
          ) : (
            <Link
              href={equivalentPath(pathname ?? '/', l.code)}
              hrefLang={l.code}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
