import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Seleção de publicações técnicas de Guilherme Biff Zarelli hospedadas no Medium, PicPay e LuizaLabs, com links para as fontes originais.',
  keywords: ['artigos', 'tutoriais', 'desenvolvimento', 'software', 'programação', 'tecnologia', 'arquitetura', 'boas práticas', 'java', 'javascript', 'typescript', 'aprendizado'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: { canonical: '/articles' },
  openGraph: {
    url: '/articles',
    title: 'Artigos | HelpDev',
    description: 'Publicações técnicas de Guilherme Biff Zarelli em canais externos, com links para as páginas e autoria originais.',
    type: 'website',
    images: [{
      url: 'https://helpdev.com.br/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'HelpDev Artigos',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artigos | HelpDev',
    description: 'Publicações técnicas de Guilherme Biff Zarelli em canais externos, com links para as páginas e autoria originais.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
};

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return children;
}
