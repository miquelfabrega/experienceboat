import { Cormorant_Garamond } from 'next/font/google';
import { ScrollNavbar } from './ScrollNavbar';
import { MegamenuBarcos } from './MegamenuBarcos';
import { MegamenuExperiencias } from './MegamenuExperiencias';
import { MobileDrawer } from './MobileDrawer';
import { LanguageSelector } from './LanguageSelector';
import { navData } from './navData';
import { CHROME } from '@/lib/i18n/chrome';
import { localizedHref, type Locale } from '@/lib/i18n/routes';
import Link from 'next/link';

const logoFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

export function Navbar({ lang = 'es' }: { lang?: Locale }) {
  const t = CHROME[lang];
  const links = [
    { name: t.canalTour, href: localizedHref('canalTour', lang) },
    { name: t.blog, href: localizedHref('blog', lang) },
  ];

  return (
    <ScrollNavbar>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href={localizedHref('home', lang)}
          className={`${logoFont.className} text-2xl tracking-[0.15em] uppercase text-[var(--nav-text)] hover:opacity-80 transition-opacity flex items-center gap-2`}
        >
          Experience<span className="font-semibold">Boat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full" role="navigation">
          <MegamenuBarcos data={navData} lang={lang} />
          <MegamenuExperiencias lang={lang} />
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-semibold text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Tools & CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block h-full">
            <LanguageSelector />
          </div>

          <Link
            href={localizedHref('bookings', lang)}
            className="hidden md:inline-flex bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white px-6 py-2.5 rounded-full hover:scale-[1.03] transition-all duration-200 font-semibold text-[14px] shadow-sm hover:shadow-md"
          >
            {t.book} &rarr;
          </Link>
          <MobileDrawer data={navData} lang={lang} />
        </div>
      </div>
    </ScrollNavbar>
  );
}
