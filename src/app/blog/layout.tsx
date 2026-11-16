import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Notas técnicas',
  description: 'Análises práticas de código, arquitetura e decisões de engenharia baseadas em projetos e exemplos mantidos pela HelpDev.',
  keywords: ['artigos', 'tutoriais', 'desenvolvimento', 'software', 'programação', 'tecnologia', 'arquitetura', 'boas práticas', 'java', 'javascript', 'typescript', 'aprendizado'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: { canonical: '/blog' },
  openGraph: {
    url: '/blog',
    title: 'Notas técnicas | HelpDev',
    description: 'Análises práticas de código, arquitetura e decisões de engenharia baseadas em projetos e exemplos mantidos pela HelpDev.',
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
    title: 'Notas técnicas | HelpDev',
    description: 'Análises práticas de código, arquitetura e decisões de engenharia baseadas em projetos e exemplos mantidos pela HelpDev.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
