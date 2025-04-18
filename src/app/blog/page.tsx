'use client';

import { BlogCard } from '../components/BlogCard';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { useEffect, useState, useMemo } from 'react';

interface Gist {
  id: string;
  description: string;
  created_at: string;
  html_url: string;
  files: {
    [key: string]: {
      filename: string;
      language: string;
      raw_url: string;
      content?: string;
    }
  }
  cleanTitle: string;
  cleanDescription: string;
  imageUrl: string;
}

// Mapeamento de palavras-chave para imagens temáticas
const getImageForTitle = (title: string): string => {
  const titleLower = title.toLowerCase();
  
  const imageMap: { [key: string]: string } = {
    // AWS e Serviços
    'aws': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    'sns': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    'sqs': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    's3': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    'lambda': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    
    // Arquitetura e Design
    'architecture': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000',
    'arquitetura': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000',
    'clean': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000',
    'design': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000',
    'adr': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000',
    
    // Java e Performance
    'java': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
    'spring': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
    'jvm': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
    'performance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    
    // Mensageria
    'rabbitmq': 'https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?q=80&w=1000',
    'kafka': 'https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?q=80&w=1000',
    'message': 'https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?q=80&w=1000',
    'mensageria': 'https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?q=80&w=1000',
    
    // Go
    'go': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
    'golang': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
    
    // Cloud e Infraestrutura
    'cloud': 'https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?q=80&w=1000',
    'docker': 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000',
    'kubernetes': 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000',
    
    // Testes e Qualidade
    'test': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000',
    'teste': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000',
    'quality': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000',
    'qualidade': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000',
    
    // Desenvolvimento e Código
    'code': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
    'código': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
    'desenvolvimento': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
    
    // APIs e Integração
    'api': 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000',
    'rest': 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000',
    'graphql': 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000',
    
    // Segurança
    'security': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000',
    'segurança': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000',
    
    // Imagem padrão para outros casos
    'default': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000'
  };

  // Procura por palavras-chave no título
  for (const [keyword, imageUrl] of Object.entries(imageMap)) {
    if (titleLower.includes(keyword)) {
      return imageUrl;
    }
  }

  // Retorna a imagem padrão se nenhuma palavra-chave for encontrada
  return imageMap.default;
};

export default function Blog() {
  const [gists, setGists] = useState<Gist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await fetch('https://api.github.com/users/gbzarelli/gists');
        if (!response.ok) {
          throw new Error('Falha ao carregar os gists');
        }
        const data = await response.json();
        
        // Filtra e processa os gists
        const helpdevGists = data
          .filter((gist: Gist) => gist.description?.includes('#helpdev-blog'))
          .map((gist: Gist) => {
            const rawTitle = gist.description?.replace('#helpdev-blog', '').trim() || 'Sem título';
            const firstFile = Object.values(gist.files)[0];
            const language = firstFile?.language || 'default';
            const fileName = firstFile?.filename.split('.')[0].replace(/-/g, ' ');
            const description = `${fileName} - ${language}`;
            
            return {
              ...gist,
              cleanTitle: rawTitle,
              cleanDescription: description,
              imageUrl: getImageForTitle(rawTitle)
            };
          });

        setGists(helpdevGists);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar os gists');
        setLoading(false);
      }
    };

    fetchGists();
  }, []);

  const filteredGists = useMemo(() => {
    if (!searchTerm) return gists;
    const term = searchTerm.toLowerCase();
    return gists.filter(
      gist => 
        gist.cleanTitle.toLowerCase().includes(term) ||
        gist.cleanDescription.toLowerCase().includes(term)
    );
  }, [searchTerm, gists]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog/Gists</h1>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog/Gists</h1>
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <p className="text-red-500 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Blog/Gists</h1>
          <p className="text-sm text-gray-600 mt-1">
            Snippets de código e soluções práticas
          </p>
        </div>
        <div className="flex flex-col space-y-6 mb-8">
          <SearchBar 
            onSearch={setSearchTerm}
            placeholder="Buscar gists por título ou descrição..."
          />
          {searchTerm && !loading && (
            <p className="text-sm text-gray-600">
              Encontrados {filteredGists.length} gists
            </p>
          )}
        </div>
        {filteredGists.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum gist encontrado com a tag #helpdev-blog</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGists.map((gist) => (
              <BlogCard
                key={gist.id}
                title={gist.cleanTitle}
                description={gist.cleanDescription}
                date={new Date(gist.created_at).toLocaleDateString('pt-BR')}
                link={gist.html_url}
                imageUrl={gist.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 