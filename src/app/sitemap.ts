import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://helpdev.com.br';
  const now = new Date();

  const routes = ['/', '/services', '/about', '/articles', '/projects', '/blog', '/thanks'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}

