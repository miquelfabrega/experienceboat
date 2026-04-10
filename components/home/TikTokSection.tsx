
const TIKTOK_VIDEOS = [
  'https://www.tiktok.com/embed/v2/7529882192156151062',
  'https://www.tiktok.com/embed/v2/7529211905982860566',
  'https://www.tiktok.com/embed/v2/7532465257256635670',
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z" />
  </svg>
);

export interface TikTokSectionT {
  title?: string;
  subtitle?: string;
}

const defaults: Required<TikTokSectionT> = {
  title: 'Síguenos en TikTok',
  subtitle: 'El mar, las calas y la vida a bordo — desde dentro.',
};

export default function TikTokSection({ t }: { t?: TikTokSectionT }) {
  const tx = { ...defaults, ...t };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-gray-900 mb-3">
            <TikTokIcon />
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">TikTok</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {tx.title}
          </h2>
          <p className="text-gray-500 text-lg">{tx.subtitle}</p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TIKTOK_VIDEOS.map((url, i) => (
            <div
              key={i}
              className="relative w-full rounded-2xl overflow-hidden shadow-md bg-black"
              style={{ aspectRatio: '9/16' }}
            >
              <iframe
                src={url}
                className="absolute inset-0 w-full h-full"
                allow="fullscreen"
                allowFullScreen
                title={`TikTok Experience Boat ${i + 1}`}
                loading="lazy"
                style={{ border: 'none' }}
              />
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.tiktok.com/@experienceboat"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-sky-600 transition-colors"
          >
            <TikTokIcon />
            @experienceboat
          </a>
        </div>
      </div>
    </section>
  );
}
