import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { AppCard } from '../components/AppCard';
import { portfolioApps } from '@/data/apps';

export const metadata: Metadata = {
  title: 'Aplicativos',
  description: 'Conheça os aplicativos da Help DEV para organização, mobilidade e esporte, além do próximo lançamento CuidaZ.',
  keywords: ['aplicativos', 'Google Play', 'Help DEV', 'Minha Obra', 'AtendFlow', 'Velocímetro Alerta', 'CuidaZ'],
  authors: [{ name: 'Guilherme Biff Zarelli' }],
  alternates: { canonical: '/apps' },
  openGraph: {
    url: '/apps',
    title: 'Aplicativos | HelpDev',
    description: 'Aplicativos da Help DEV para organização, mobilidade e esporte, além do próximo lançamento CuidaZ.',
    type: 'website',
    images: [{
      url: 'https://helpdev.com.br/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'Aplicativos HelpDev',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplicativos | HelpDev',
    description: 'Aplicativos da Help DEV para organização, mobilidade e esporte, além do próximo lançamento CuidaZ.',
    images: ['https://helpdev.com.br/images/logo.png'],
    creator: '@gbzarelli',
    site: '@_helpdev',
  },
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Aplicativos</h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-gray-600">
            Aplicativos da Help DEV para organização, mobilidade e esporte — e o próximo lançamento CuidaZ.
          </p>
        </header>

        <section
          aria-label="Portfólio de aplicativos"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {portfolioApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>
      </div>
    </main>
  );
}
