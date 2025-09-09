import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HelpDev — Desenvolvimento de Software e Consultoria Técnica",
    template: "%s | HelpDev"
  },
  description: "Consultoria em arquitetura, desenvolvimento de software, cloud/DevOps, performance e mentoria. Projetos sob medida com qualidade e previsibilidade.",
  keywords: ["consultoria de software", "desenvolvimento de software", "arquitetura de software", "devops", "cloud", "java", "node", "react", "next.js", "performance", "mentoria"],
  authors: [{ name: "Guilherme Biff Zarelli" }],
  creator: "Guilherme Biff Zarelli",
  publisher: "HelpDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://helpdev.com.br'),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://helpdev.com.br",
    title: "HelpDev — Desenvolvimento de Software e Consultoria Técnica",
    description: "Consultoria em arquitetura, desenvolvimento, cloud/DevOps e performance. Projetos sob medida com entregas previsíveis.",
    siteName: "HelpDev",
    images: [
      {
        url: "https://helpdev.com.br/images/logo.png",
        width: 1200,
        height: 630,
        alt: "HelpDev — Desenvolvimento de Software e Consultoria Técnica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpDev — Desenvolvimento de Software e Consultoria Técnica",
    description: "Consultoria em arquitetura, desenvolvimento, cloud/DevOps e performance.",
    images: ["https://helpdev.com.br/images/logo.png"],
    creator: "@gbzarelli",
    site: "@_helpdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} suppressHydrationWarning>
        <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'HelpDev',
            url: 'https://helpdev.com.br',
            logo: 'https://helpdev.com.br/images/logo.png',
            image: 'https://helpdev.com.br/images/logo.png',
            description: 'Consultoria e desenvolvimento de software: arquitetura, cloud/DevOps, performance e mentoria.',
            areaServed: ['BR', 'Global'],
            sameAs: [
              'https://github.com/gbzarelli',
              'https://linkedin.com/in/gbzarelli/',
              'https://medium.com/@guilherme.zarelli',
              'https://www.instagram.com/_helpdev/'
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              email: 'gbzarelli@helpdev.com.br',
              contactType: 'sales',
              availableLanguage: ['Portuguese', 'English']
            }],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Serviços de Consultoria',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoria em Arquitetura' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desenvolvimento de Projetos' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & DevOps' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Qualidade & Segurança' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance & Escala' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mentoria & Treinamentos' } }
              ]
            }
          }) }}
        />
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'HelpDev',
            url: 'https://helpdev.com.br'
          }) }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
