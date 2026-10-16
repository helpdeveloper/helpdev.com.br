import type { Metadata } from 'next';
import { ServicesLanding } from '../components/ServicesLanding';

export const metadata: Metadata = {
  title: 'Serviços de Consultoria em Desenvolvimento de Software',
  description:
    'Esta rota redireciona para a página principal de consultoria em desenvolvimento de software da HelpDev.',
  alternates: { canonical: '/' },
  robots: { index: false, follow: true },
};

export default function ServicesPage() {
  return <ServicesLanding />;
}
