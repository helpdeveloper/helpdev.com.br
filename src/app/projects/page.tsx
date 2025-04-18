'use client';

import { ProjectCard } from '../components/ProjectCard';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { useState, useMemo, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  languages: string[];
}

const initialProjects = [
  {
    title: "Java Modular Architecture",
    description: "Uma arquitetura modular em Java que demonstra boas práticas de desenvolvimento e padrões de projeto, incluindo exemplos práticos de implementação.",
    imageUrl: "https://github.com/helpdeveloper/java-modular-architecture/raw/main/images/arch.png",
    link: "https://github.com/helpdeveloper/java-modular-architecture"
  },
  {
    title: "GZIP JSON Jackson",
    description: "Biblioteca para compressão e descompressão eficiente de JSON usando GZIP e Jackson, otimizando a transferência de dados.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "https://github.com/helpdeveloper/gzip-json-jackson"
  },
  {
    title: "Java Architecture Template",
    description: "Template para arquitetura Java seguindo as melhores práticas e padrões modernos de desenvolvimento de software.",
    imageUrl: "https://github.com/helpdeveloper/java-architecture-template/raw/main/.images/banner.webp",
    link: "https://github.com/helpdeveloper/java-architecture-template"
  },
  {
    title: "Java Observability Metrics",
    description: "Ferramentas e práticas para observabilidade e métricas em aplicações Java, facilitando o monitoramento e diagnóstico.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "https://github.com/helpdeveloper/java-observability-metrics"
  },
  {
    title: 'Finite State Machine - DevPira 2020',
    description: 'Implementação de máquinas de estado finito (FSM) em Java e Python, apresentada no evento DevPira 2020. Inclui exemplos práticos como um sistema de delivery e um jogo de captura de Pokémon.',
    imageUrl: 'https://github.com/gbzarelli/fsm-devpira-2020/raw/main/images/logo-event.png',
    link: 'https://github.com/gbzarelli/fsm-devpira-2020'
  },
  {
    title: 'WG Brew Plus',
    description: 'Sistema de automação para produção de cerveja artesanal usando Arduino. Controla automaticamente as etapas de brassagem e fervura, com controle preciso de temperatura e tempo para cada fase do processo.',
    imageUrl: 'https://github.com/gbzarelli/wg-brew-plus/raw/master/images/2017-07-30%2017.58.12.jpg',
    link: 'https://github.com/gbzarelli/wg-brew-plus'
  },
  {
    title: 'Velocímetro Alerta - Módulo Bluetooth',
    description: 'Módulo Bluetooth para o aplicativo Velocímetro Alerta, desenvolvido em Arduino. Permite a comunicação entre o dispositivo móvel e sensores externos.',
    imageUrl: 'https://github.com/gbzarelli/VelocimetroAlertaBLModule/blob/master/images/IMG_20180526_175727749.jpg?raw=true',
    link: 'https://github.com/gbzarelli/VelocimetroAlertaBLModule'
  },
  {
    title: 'Velocímetro Alerta',
    description: 'Aplicativo Android que funciona como velocímetro com sistema de alertas. Integra-se com módulo Bluetooth para maior precisão nas medições.',
    imageUrl: 'https://github.com/gbzarelli/VelocimetroAlerta/blob/master/imagens/logo_velocimetro_alerta_2.png?raw=true',
    link: 'https://github.com/gbzarelli/VelocimetroAlerta'
  },
  {
    title: 'Android Face Detect OpenCV',
    description: 'Implementação de detecção facial em Android utilizando a biblioteca OpenCV. Demonstra o uso de visão computacional para reconhecimento facial em tempo real.',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000',
    link: 'https://github.com/gbzarelli/AndroidFaceDetectOpenCV'
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const getRepoInfo = async (repoUrl: string) => {
    try {
      const repoPath = repoUrl.replace('https://github.com/', '');
      const response = await fetch(`https://api.github.com/repos/${repoPath}/languages`);
      const languages = await response.json();
      return Object.keys(languages);
    } catch (error) {
      console.error('Erro ao buscar linguagens:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      const projectsWithLanguages = await Promise.all(
        initialProjects.map(async (project) => {
          const languages = await getRepoInfo(project.link);
          return {
            ...project,
            languages
          };
        })
      );
      setProjects(projectsWithLanguages);
      setLoading(false);
    };

    fetchLanguages();
  }, []);

  const filteredProjects = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return projects.filter(
      project => 
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term)
    );
  }, [searchTerm, projects]);

  return (
    <main className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Projetos</h1>
          <p className="text-sm text-gray-600 mt-1">
            Portfólio de projetos open source
          </p>
        </div>
        <div className="flex flex-col space-y-6 mb-8">
          <SearchBar 
            onSearch={setSearchTerm}
            placeholder="Buscar projetos por título ou descrição..."
          />
          {searchTerm && (
            <p className="text-sm text-gray-600">
              Encontrados {filteredProjects.length} projetos
            </p>
          )}
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                languages={project.languages}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum projeto encontrado</p>
          </div>
        )}
      </div>
    </main>
  );
} 