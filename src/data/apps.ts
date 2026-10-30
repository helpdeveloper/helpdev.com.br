export type PublishedApp = {
  kind: 'published';
  id: string;
  name: string;
  description: string;
  promotionalImage: string;
  icon: string;
  storeUrl: string;
};

export type ComingSoonApp = {
  kind: 'coming-soon';
  id: string;
  name: string;
  description: string;
  logo: string;
  statusLabel: 'Em Breve';
};

export type PortfolioApp = PublishedApp | ComingSoonApp;

export const portfolioApps: PortfolioApp[] = [
  {
    kind: 'published',
    id: 'minha-obra',
    name: 'Minha Obra',
    description: 'Organize orçamento, gastos e pagamentos da sua obra ou reforma.',
    promotionalImage: '/images/apps/minha-obra-promotional.png',
    icon: '/images/apps/minha-obra-icon.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=br.com.helpdev.minhareforma',
  },
  {
    kind: 'published',
    id: 'atendflow',
    name: 'AtendFlow',
    description: 'Organize clientes, agendamentos e cobranças em um só lugar.',
    promotionalImage: '/images/apps/atendflow-promotional.png',
    icon: '/images/apps/atendflow-icon.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.helpdev.atendflow',
  },
  {
    kind: 'published',
    id: 'velocimetro-alerta',
    name: 'Velocímetro Alerta',
    description: 'Alertas de velocidade por voz por tempo ou distância, sem olhar para a tela.',
    promotionalImage: '/images/apps/velocimetro-alerta-promotional.png',
    icon: '/images/apps/velocimetro-alerta-icon.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=br.com.helpdev.velocimetroalerta.v2',
  },
  {
    kind: 'published',
    id: 'cronometro-corrida',
    name: 'Cronômetro de corrida',
    description: 'Marque trechos e acompanhe ritmo, distância e tempo total.',
    promotionalImage: '/images/apps/cronometro-corrida-promotional.png',
    icon: '/images/apps/cronometro-corrida-icon.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=br.com.helpdev.lapscounter.running',
  },
  {
    kind: 'published',
    id: 'cronometro-ciclismo',
    name: 'Cronômetro de ciclismo',
    description: 'Marque trechos e acompanhe distância, tempo e velocidade média.',
    promotionalImage: '/images/apps/cronometro-ciclismo-promotional.png',
    icon: '/images/apps/cronometro-ciclismo-icon.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=br.com.helpdev.lapscounter.cycling',
  },
  {
    kind: 'published',
    id: 'cronometro-natacao',
    name: 'Cronômetro de Natação',
    description: 'Marque voltas e acompanhe distância e ritmo na natação.',
    promotionalImage: '/images/apps/cronometro-natacao-promotional.png',
    icon: '/images/apps/cronometro-natacao-icon.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=br.com.helpdev.lapscounter.swimming',
  },
  {
    kind: 'coming-soon',
    id: 'cuidaz',
    name: 'CuidaZ',
    description: 'Organize pacientes, agenda, atendimentos, evoluções clínicas e recebimentos.',
    logo: '/images/apps/cuidaz-logo.png',
    statusLabel: 'Em Breve',
  },
];
