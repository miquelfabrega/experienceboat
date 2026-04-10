'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollNavbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Chequeo inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En la home arranca transparente. En el resto de páginas, arranca semitransparente (glass).
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ease-out border-b ${
        isTransparent 
          ? 'bg-transparent border-transparent py-2' 
          : 'bg-white/85 backdrop-blur-md border-gray-200/50 shadow-sm py-0'
      }`}
      style={{
        // Variables dinámicas para que los subcomponentes cambien de color mágicamente
        '--nav-text': isTransparent ? '#ffffff' : '#0f172a',
        '--nav-text-muted': isTransparent ? 'rgba(255,255,255,0.7)' : '#64748b',
        '--nav-text-hover': isTransparent ? '#e0f2fe' : '#0284c7', // sky-600
        '--nav-accent': '#0ea5c2',
        '--nav-accent-hover': '#0b8fab',
        '--nav-border': isTransparent ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
        '--megamenu-bg': '#ffffff', // El megamenú siempre será blanco para legibilidad
        '--megamenu-text': '#0f172a',
        '--megamenu-text-muted': '#64748b',
        '--section-label': '#0284c7',
        '--premium-badge': '#d4a843',
        '--nav-bg-solid': '#ffffff', // Para el drawer móvil
      } as React.CSSProperties}
    >
      {children}
    </header>
  );
}
