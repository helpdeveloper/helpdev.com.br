import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos open source e ferramentas para desenvolvedores. Explore soluções práticas em Java, JavaScript, TypeScript e mais.',
  keywords: ['projetos', 'open source', 'github', 'desenvolvimento', 'software', 'programação', 'tecnologia', 'java', 'javascript', 'typescript', 'ferramentas', 'soluções'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: { canonical: '/projects' },
  openGraph: {
    url: '/projects',
    title: 'Projetos | HelpDev',
    description: 'Projetos open source e ferramentas para desenvolvedores. Explore soluções práticas em Java, JavaScript, TypeScript e mais.',
    type: 'website',
    images: [{
      url: 'https://helpdev.com.br/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'HelpDev Projetos',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projetos | HelpDev',
    description: 'Projetos open source e ferramentas para desenvolvedores. Explore soluções práticas em Java, JavaScript, TypeScript e mais.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
