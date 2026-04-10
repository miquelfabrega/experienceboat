import Link from 'next/link';
import { homeData } from '@/lib/data/home';

type ClosingData = typeof homeData.closing;

export default function ClosingCTA({ data }: { data?: ClosingData } = {}) {
  const { title, ctaPrimary, ctaSecondary } = data ?? homeData.closing;

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Dark mode Aurora / Blob effect behind text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
          {title}
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href={ctaPrimary.href}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-gray-900 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            {ctaPrimary.text}
          </Link>
          
          <a
            href={ctaSecondary.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-[0_0_40px_rgba(37,211,102,0.2)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            {ctaSecondary.text}
          </a>
        </div>
      </div>
    </section>
  );
}