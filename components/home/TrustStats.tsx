'use client';

import { useEffect, useState, useRef } from 'react';

export default function TrustStats({ stats }: { stats: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center mt-16 transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <p className="text-2xl font-bold text-gray-900 bg-white/50 backdrop-blur-sm inline-block px-8 py-4 rounded-full shadow-sm border border-gray-100">
        {stats}
      </p>
    </div>
  );
}