import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog e gists sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia. Aprenda com conteúdo técnico de qualidade.',
  keywords: ['artigos', 'tutoriais', 'desenvolvimento', 'software', 'programação', 'tecnologia', 'arquitetura', 'boas práticas', 'java', 'javascript', 'typescript', 'aprendizado'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: { canonical: '/blog' },
  openGraph: {
    url: '/blog',
    title: 'Blog | HelpDev',
    description: 'Blog e gists sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia. Aprenda com conteúdo técnico de qualidade.',
    type: 'website',
    images: [{
      url: 'https://helpdev.com.br/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'HelpDev Blog',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | HelpDev',
    description: 'Blog e gists sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
