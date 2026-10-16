import type { Metadata } from 'next';
import { ServicesLanding } from './components/ServicesLanding';

export const metadata: Metadata = {
  title: 'Serviços de Consultoria em Desenvolvimento de Software',
  description:
    'Consultoria em desenvolvimento de software, arquitetura, modernização de sistemas, cloud e DevOps para acelerar produtos com qualidade e previsibilidade.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Serviços de Consultoria em Desenvolvimento de Software | HelpDev',
    description:
      'Consultoria em desenvolvimento de software, arquitetura, modernização de sistemas, cloud e DevOps para acelerar produtos com qualidade e previsibilidade.',
  },
  twitter: {
    title: 'Serviços de Consultoria em Desenvolvimento de Software | HelpDev',
    description:
      'Consultoria em desenvolvimento de software, arquitetura, modernização de sistemas, cloud e DevOps para acelerar produtos com qualidade e previsibilidade.',
  },
};

export default function Home() {
  return <ServicesLanding />;
}
