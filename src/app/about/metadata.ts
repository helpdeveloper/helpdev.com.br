import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre - Guilherme Biff Zarelli | HelpDev',
  description: 'Engenheiro de Software com mais de 10 anos de experiência em desenvolvimento e arquitetura de sistemas. Especialista em soluções escaláveis para empresas de grande porte.',
  keywords: ['engenheiro de software', 'arquitetura de sistemas', 'desenvolvimento java', 'clean code', 'boas práticas', 'mentoria', 'tecnologia'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Sobre - Guilherme Biff Zarelli | HelpDev',
    description: 'Engenheiro de Software com mais de 10 anos de experiência em desenvolvimento e arquitetura de sistemas. Especialista em soluções escaláveis para empresas de grande porte.',
    type: 'profile',
    images: [
      {
        url: 'https://helpdev.com.br/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Guilherme Biff Zarelli - Engenheiro de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre - Guilherme Biff Zarelli | HelpDev',
    description: 'Engenheiro de Software com mais de 10 anos de experiência em desenvolvimento e arquitetura de sistemas.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
}; 