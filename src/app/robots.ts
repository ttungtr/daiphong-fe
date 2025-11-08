import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/', '/_next/', '/dashboard/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/', '/_next/', '/dashboard/'],
      },
    ],
    sitemap: 'https://onggiodaiphong.com/sitemap.xml',
    host: 'https://onggiodaiphong.com',
  };
}
