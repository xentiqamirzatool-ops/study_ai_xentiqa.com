import type { MetadataRoute } from 'next';

const BASE_URL = 'https://studyai.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}