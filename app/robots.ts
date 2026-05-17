import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/test',
          '/api',
          '/_next/image/',
          '/_next/static/',
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-json/',
          '/*.php$',
          '/*?re-product-id=',
          '/*?nocache=',
          '/*/feed/',
          '/feed/',
          '/category/',
        ],
      },
    ],
    sitemap: 'https://experienceboat.es/sitemap.xml',
    host: 'https://experienceboat.es',
  };
}
