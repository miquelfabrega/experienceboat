import { homeData } from '@/lib/data/home';
import TrustStats from './TrustStats';

type TrustData = typeof homeData.trust;

export default function TrustSection({ data }: { data?: TrustData } = {}) {
  const { title, reviews, stats } = data ?? homeData.trust;

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative">
              <div className="text-blue-500 mb-4 flex">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  {review.author.substring(0, 1)}
                </div>
                <span className="font-semibold text-gray-900">{review.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Logos OTAs */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-70">
          {['Viator', 'GetYourGuide', 'TripAdvisor'].map((ota) => (
            <div key={ota} className="text-xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-gray-900 transition-all cursor-default">
              {ota}
            </div>
          ))}
        </div>

        <TrustStats stats={stats} />
      </div>
    </section>
  );
}