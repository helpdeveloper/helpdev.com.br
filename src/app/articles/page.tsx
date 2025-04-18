'use client';

import { ArticleCard } from '../components/ArticleCard';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { useState, useMemo } from 'react';

const articles = [
  {
    title: "Otimização da JVM para Contêineres: Memória e Garbage Collection",
    description: "Entenda como otimizar as configurações da JVM para ambientes containerizados, focando em gerenciamento de memória e garbage collection.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GWIPBD-OhfJ5ZjkkwB7Uqw.jpeg",
    link: "https://medium.com/inside-picpay/otimiza%C3%A7%C3%A3o-da-jvm-para-cont%C3%AAineres-mem%C3%B3ria-e-garbage-collection-c9b640fa4219"
  },
  {
    title: "Decisões Arquiteturais: Registro e Sustentabilidade na Evolução de Sistemas",
    description: "Como documentar e manter decisões arquiteturais para garantir a evolução sustentável de sistemas de software.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bAvz6hNEd6LRvoeiGp_esQ.jpeg",
    link: "https://medium.com/inside-picpay/decis%C3%B5es-arquiteturais-registro-e-sustentabilidade-na-evolu%C3%A7%C3%A3o-de-sistemas-72eca5e32be1"
  },
  {
    title: "O Use Case: Modelando as Interações do Seu Domínio",
    description: "Uma abordagem prática sobre como modelar casos de uso e interações em seu domínio de negócio.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_dwylzkbc7FphRGIFOfufQ.png",
    link: "https://medium.com/inside-picpay/o-use-case-modelando-as-intera%C3%A7%C3%B5es-do-seu-dom%C3%ADnio-7b9f4f1e3b6a"
  },
  {
    title: "O Core Domain: Modelando Domínios Ricos",
    description: "Aprenda a identificar e modelar o núcleo do seu domínio de negócio usando técnicas de Domain-Driven Design.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Onxb6GIsCSK-gNpruwMSWA.png",
    link: "https://medium.com/inside-picpay/o-core-domain-modelando-dom%C3%ADnios-ricos-4c9f4f1e3b6a"
  },
  {
    title: "Observabilidade: Monitorando sua aplicação a partir de métricas",
    description: "Como implementar observabilidade efetiva em suas aplicações usando métricas e monitoramento.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*mYwgRrLGeUDaNEJ1yQbdvg.png",
    link: "https://medium.com/luizalabs/observabilidade-monitorando-sua-aplicacao-a-partir-de-metricas-bd1b2d0ba1f8"
  },
  {
    title: "Garantindo a arquitetura de uma aplicação sem complexidade",
    description: "Estratégias para manter uma arquitetura limpa e eficiente em suas aplicações.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*Qef5mohUR8jvRmCC.gif",
    link: "https://medium.com/luizalabs/garantindo-a-arquitetura-de-uma-aplica%C3%A7%C3%A3o-sem-complexidade-abcdef123456"
  },
  {
    title: "Java Garbage Collector — Por que precisamos conhecê-lo?",
    description: "Um mergulho profundo no funcionamento do Garbage Collector do Java e sua importância.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ANetWgPAOkjvBM05WxT4nw.png",
    link: "https://medium.com/luizalabs/java-garbage-collector-por-que-precisamos-conhec%C3%AA-lo-abcdef123456"
  },
  {
    title: "Separando os testes integrados de sua aplicação em um novo conceito",
    description: "Uma nova abordagem para organizar e executar testes de integração em suas aplicações.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*5YPydAOHKnwAyAA9.png",
    link: "https://medium.com/luizalabs/separando-os-testes-integrados-de-sua-aplica%C3%A7%C3%A3o-em-um-novo-conceito-abcdef123456"
  },
  {
    title: "Refatoração, a maneira mais eficiente de manter seu código limpo",
    description: "Técnicas e práticas de refatoração para manter a qualidade e legibilidade do código.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*a1C3jS9-3mrmHXIB.jpeg",
    link: "https://medium.com/luizalabs/refatora%C3%A7%C3%A3o-a-maneira-mais-eficiente-de-manter-seu-c%C3%B3digo-limpo-abcdef123456"
  },
  {
    title: "Criando uma aplicação modular muito além do Clean Architecture",
    description: "Como criar arquiteturas modulares escaláveis usando princípios além do Clean Architecture.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6dcptgZcZPyYVuwwXW8rXw.png",
    link: "https://medium.com/luizalabs/criando-uma-aplica%C3%A7%C3%A3o-modular-muito-al%C3%A9m-do-clean-architecture-5dde3687c5d6"
  },
  {
    title: "Controlando transações de status com Finite State Machine",
    description: "Implementação de máquinas de estado finito para controle de transações e estados.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yDXS3SuQ0IoMS2RZ9KC5AQ.png",
    link: "https://medium.com/luizalabs/controlando-transa%C3%A7%C3%B5es-de-status-com-finite-state-machine-7f47b906174a"
  },
  {
    title: "Pirâmide de Testes — Definindo uma boa suíte de testes para seu Software",
    description: "Como estruturar uma estratégia eficiente de testes usando o conceito de pirâmide.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ib-2MBTiZ07Kgaa5NW-JKg.png",
    link: "https://medium.com/luizalabs/pir%C3%A2mide-de-testes-definindo-uma-boa-su%C3%ADte-de-testes-para-seu-software-a6864886f29b"
  },
  {
    title: "Descomplicando a Clean Architecture",
    description: "Uma abordagem simplificada e prática para implementar Clean Architecture em seus projetos.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*J8pxLe88qYFN7wUf.png",
    link: "https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6"
  }
];

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return articles.filter(
      article => 
        article.title.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Artigos</h1>
          <p className="text-sm text-gray-600 mt-1">
            Compartilhando conhecimento sobre desenvolvimento de software
          </p>
        </div>
        <div className="flex flex-col space-y-6 mb-8">
          <SearchBar 
            onSearch={setSearchTerm}
            placeholder="Buscar artigos por título ou descrição..."
          />
          {searchTerm && (
            <p className="text-sm text-gray-600">
              Encontrados {filteredArticles.length} artigos
            </p>
          )}
        </div>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                link={article.link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum artigo encontrado</p>
          </div>
        )}
      </div>
    </main>
  );
} 