import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelpDev — Desenvolvimento de Software e Consultoria Técnica',
  description: 'Consultoria em arquitetura, desenvolvimento, cloud/DevOps, performance e mentoria. Projetos sob medida com qualidade e previsibilidade.',
  keywords: ['consultoria', 'desenvolvimento de software', 'arquitetura', 'devops', 'cloud', 'java', 'javascript', 'typescript', 'next.js', 'performance'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HelpDev — Desenvolvimento de Software e Consultoria Técnica',
    description: 'Consultoria em arquitetura, desenvolvimento, cloud/DevOps e performance. Projetos sob medida com entregas previsíveis.',
    type: 'website',
    images: [
      {
        url: 'https://helpdev.com.br/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'HelpDev — Desenvolvimento de Software e Consultoria Técnica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelpDev — Desenvolvimento de Software e Consultoria Técnica',
    description: 'Consultoria em arquitetura, desenvolvimento, cloud/DevOps e performance.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
}; 
