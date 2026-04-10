import { Cormorant_Garamond } from 'next/font/google';
import { ScrollNavbar } from './ScrollNavbar';
import { MegamenuBarcos } from './MegamenuBarcos';
import { MegamenuExperiencias } from './MegamenuExperiencias';
import { MobileDrawer } from './MobileDrawer';
import { LanguageSelector } from './LanguageSelector';
import { navData } from './navData';
import Link from 'next/link';
import Image from 'next/image';

const logoFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

export function Navbar() {
  return (
    <ScrollNavbar>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className={`${logoFont.className} text-2xl tracking-[0.15em] uppercase text-[var(--nav-text)] hover:opacity-80 transition-opacity flex items-center gap-2`}
        >
          Experience<span className="font-semibold">Boat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full" role="navigation">
          <MegamenuBarcos data={navData} />
          <MegamenuExperiencias data={navData.experiencias} />
          {navData.links.map((link) => (
            <Link 
              key={link.url} 
              href={link.url} 
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
            href="/reservas" 
            className="hidden md:inline-flex bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white px-6 py-2.5 rounded-full hover:scale-[1.03] transition-all duration-200 font-semibold text-[14px] shadow-sm hover:shadow-md"
          >
            Reservar &rarr;
          </Link>
          <MobileDrawer data={navData} />
        </div>
      </div>
    </ScrollNavbar>
  );
}
