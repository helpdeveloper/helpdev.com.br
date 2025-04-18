import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artigos - HelpDev',
  description: 'Artigos e tutoriais sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia. Aprenda com conteúdo técnico de qualidade.',
  keywords: ['artigos', 'tutoriais', 'desenvolvimento', 'software', 'programação', 'tecnologia', 'arquitetura', 'boas práticas', 'java', 'javascript', 'typescript', 'aprendizado'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: {
    canonical: '/articles',
  },
  openGraph: {
    title: 'Artigos - HelpDev',
    description: 'Artigos e tutoriais sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia. Aprenda com conteúdo técnico de qualidade.',
    type: 'website',
    images: [
      {
        url: 'https://helpdev.com.br/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'HelpDev Artigos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artigos - HelpDev',
    description: 'Artigos e tutoriais sobre desenvolvimento de software, arquitetura, boas práticas e tecnologia.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
}; 