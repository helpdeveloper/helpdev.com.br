export const dynamic = 'force-static';
 
import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  const host = 'https://helpdev.com.br';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}

