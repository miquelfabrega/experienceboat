import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsFr } from '@/lib/data/blog-fr';

export const metadata: Metadata = {
  title: 'Blog de navigation en bateau — Roses',
  description: 'Guides, conseils et itinéraires pour profiter de la mer à Roses. Tout ce que vous devez savoir sur la location de bateaux et les excursions sur la Costa Brava.',
  alternates: buildAlternates('blog', 'fr'),
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogFrPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Guides et conseils pour naviguer à Roses
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour profiter de la mer sur la Costa Brava : itinéraires, conseils pratiques et ce qu&apos;il faut attendre de chaque expérience.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPostsFr.map((post) => (
            <Link
              key={post.slug}
              href={`/fr/blog/${post.slug}/`}
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
                  <span>{post.readTime} min de lecture</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Lire l&apos;article <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
