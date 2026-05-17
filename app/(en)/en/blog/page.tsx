import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsEn } from '@/lib/data/blog-en';

export const metadata: Metadata = {
  title: 'Boat Travel Blog — Roses, Costa Brava',
  description: 'Guides, tips and routes to make the most of the sea in Roses. Everything you need to know about boat rental and excursions on the Costa Brava.',
  alternates: {
    canonical: 'https://experienceboat.es/en/blog',
    languages: {
      'x-default': 'https://experienceboat.es/blog',
      es: 'https://experienceboat.es/blog',
      fr: 'https://experienceboat.es/fr/blog',
      en: 'https://experienceboat.es/en/blog',
    },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogEnPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Guides and tips for sailing in Roses
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know to enjoy the sea on the Costa Brava: routes, practical advice and what to expect from each experience.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPostsEn.map((post) => (
            <Link
              key={post.slug}
              href={`/en/blog/${post.slug}/`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Read article <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
