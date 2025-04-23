import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HelpDev - Compartilhando Conhecimento em Desenvolvimento de Software",
    template: "%s | HelpDev"
  },
  description: "Portal dedicado a compartilhar conhecimento sobre desenvolvimento de software, com artigos técnicos, projetos open source e snippets de código úteis.",
  keywords: ["desenvolvimento de software", "programação", "artigos técnicos", "projetos open source", "snippets de código", "tecnologia", "java", "arquitetura de software", "clean code", "boas práticas"],
  authors: [{ name: "Guilherme Biff Zarelli" }],
  creator: "Guilherme Biff Zarelli",
  publisher: "HelpDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://helpdev.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://helpdev.com.br",
    title: "HelpDev - Compartilhando Conhecimento em Desenvolvimento de Software",
    description: "Portal dedicado a compartilhar conhecimento sobre desenvolvimento de software, com artigos técnicos, projetos open source e snippets de código úteis.",
    siteName: "HelpDev",
    images: [
      {
        url: "https://helpdev.com.br/images/logo.png",
        width: 1200,
        height: 630,
        alt: "HelpDev - Compartilhando Conhecimento em Desenvolvimento de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpDev - Compartilhando Conhecimento em Desenvolvimento de Software",
    description: "Portal dedicado a compartilhar conhecimento sobre desenvolvimento de software, com artigos técnicos, projetos open source e snippets de código úteis.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
