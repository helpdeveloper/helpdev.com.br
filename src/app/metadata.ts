import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelpDev - Desenvolvimento de Software e Tecnologia',
  description: 'Blog sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia. Artigos, tutoriais e projetos open source para desenvolvedores.',
  keywords: ['desenvolvimento', 'software', 'programação', 'tecnologia', 'arquitetura', 'boas práticas', 'artigos', 'tutoriais', 'projetos', 'open source', 'java', 'javascript', 'typescript'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HelpDev - Desenvolvimento de Software e Tecnologia',
    description: 'Blog sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia. Artigos, tutoriais e projetos open source para desenvolvedores.',
    type: 'website',
    images: [
      {
        url: 'https://helpdev.com.br/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'HelpDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelpDev - Desenvolvimento de Software e Tecnologia',
    description: 'Blog sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
}; 