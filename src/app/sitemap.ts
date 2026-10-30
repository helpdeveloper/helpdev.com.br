import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://helpdev.com.br';
  const routes = [
    '/',
    '/about',
    '/articles',
    '/projects',
    '/apps',
    '/blog',
    '/privacidade',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}

