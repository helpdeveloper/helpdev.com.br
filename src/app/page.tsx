'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { ArticleCard } from './components/ArticleCard';
import { BlogCard } from './components/BlogCard';
import { ProjectCard } from './components/ProjectCard';
import { FaGithub, FaMedium, FaEnvelope, FaInstagram, FaArrowRight } from 'react-icons/fa';

// Featured content data
const featuredArticles = [
  {
    title: "Otimização da JVM para Contêineres: Memória e Garbage Collection",
    description: "Entenda como otimizar as configurações da JVM para ambientes containerizados, focando em gerenciamento de memória e garbage collection.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GWIPBD-OhfJ5ZjkkwB7Uqw.jpeg",
    link: "https://medium.com/inside-picpay/otimiza%C3%A7%C3%A3o-da-jvm-para-cont%C3%AAineres-mem%C3%B3ria-e-garbage-collection-c9b640fa4219"
  },
  {
    title: "Descomplicando a Clean Architecture",
    description: "Uma abordagem simplificada e prática para implementar Clean Architecture em seus projetos.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*J8pxLe88qYFN7wUf.png",
    link: "https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6"
  },
  {
    title: "O Use Case: Modelando as Interações do Seu Domínio",
    description: "Uma abordagem prática sobre como modelar casos de uso e interações em seu domínio de negócio.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_dwylzkbc7FphRGIFOfufQ.png",
    link: "https://medium.com/inside-picpay/o-use-case-modelando-as-intera%C3%A7%C3%B5es-do-seu-dom%C3%ADnio-c6c568270d0c"
  }
];

const featuredProjects = [
  {
    title: "Java Modular Architecture",
    description: "Uma arquitetura modular em Java que demonstra boas práticas de desenvolvimento e padrões de projeto, incluindo exemplos práticos de implementação.",
    imageUrl: "https://github.com/helpdeveloper/java-modular-architecture/raw/main/images/arch.png",
    link: "https://github.com/helpdeveloper/java-modular-architecture",
    languages: ["Java", "Spring Boot"]
  },
  {
    title: "Java Architecture Template",
    description: "Template para arquitetura Java seguindo as melhores práticas e padrões modernos de desenvolvimento de software.",
    imageUrl: "https://github.com/helpdeveloper/java-architecture-template/raw/main/.images/banner.webp",
    link: "https://github.com/helpdeveloper/java-architecture-template",
    languages: ["Java", "Spring Boot", "Docker"]
  },
  {
    title: "GZIP JSON Jackson",
    description: "Biblioteca para compressão e descompressão eficiente de JSON usando GZIP e Jackson, otimizando a transferência de dados.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "https://github.com/helpdeveloper/gzip-json-jackson",
    languages: ["Java"]
  }
];

const featuredBlogPosts = [
  {
    title: "Encaminhamento de Requisições HTTP entre Serviços com AWS ALB Ingress",
    description: "Redirecionamento de Métodos HTTP entre Serviços",
    date: "21 Apr 2025",
    link: "https://gist.github.com/gbzarelli/48f7ef6c0f8a7833659ce78754c19764",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60",
    tags: ["k8s", "ingress", "aws"]
  },
  {
    title: "Comparação dos Principais Garbage Collectors da JVM",
    description: "Uma análise comparativa dos diferentes garbage collectors disponíveis na JVM, ajudando a escolher o mais adequado para cada caso.",
    date: "04 Feb 2025",
    link: "https://gist.github.com/gbzarelli/7996424d114392551205722363925a97",
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60",
    tags: ["java", "jvm", "performance"]
  },
  {
    title: "Configurações de containers para aplicações JVM",
    description: "Guia prático sobre configurações de recursos e optimizações para containers que executam aplicações Java em ambientes containerizados.",
    date: "12 Jan 2025",
    link: "https://gist.github.com/gbzarelli/ada40a628da0aba1fd2fe2d864aac792",
    imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=60",
    tags: ["java", "containers", "kubernetes"]
  }
];

const contacts = [
  { name: "GitHub", url: "https://github.com/gbzarelli", icon: <FaGithub className="text-2xl" /> },
  { name: "Medium", url: "https://medium.com/@guilherme.zarelli", icon: <FaMedium className="text-2xl" /> },
  { name: "Instagram", url: "https://www.instagram.com/_helpdev/", icon: <FaInstagram className="text-2xl" /> },
  { name: "Email", url: "mailto:gbzarelli@helpdev.com.br", icon: <FaEnvelope className="text-2xl" /> }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-3/5">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Compartilhando Conhecimento em Desenvolvimento de Software
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Portal dedicado a compartilhar artigos técnicos, projetos open source e snippets de código para auxiliar desenvolvedores.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                  href="/articles" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Ver Artigos
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Sobre o Autor
                </Link>
              </div>
              <div className="flex gap-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    title={contact.name}
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <Image
                  src="/images/logo-2.png"
                  alt="HelpDev Logo"
                  fill
                  className="rounded-full object-cover shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Artigos em Destaque</h2>
            <Link 
              href="/articles" 
              className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
            >
              Ver todos os artigos
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                link={article.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Blog & Gists</h2>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
            >
              Ver todas as postagens
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                description={post.description}
                date={post.date}
                link={post.link}
                imageUrl={post.imageUrl}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Projetos Open Source</h2>
            <Link 
              href="/projects" 
              className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
            >
              Ver todos os projetos
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Mais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Artigos", description: "Tutoriais e conteúdos técnicos", link: "/articles", icon: "📝" },
              { title: "Projetos", description: "Códigos open source e exemplos", link: "/projects", icon: "💻" },
              { title: "Blog/Gists", description: "Postagens rápidas e snippets", link: "/blog", icon: "📚" },
              { title: "Sobre", description: "Conheça o autor", link: "/about", icon: "👨‍💻" }
            ].map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full">
                  <span className="text-4xl mb-4">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para aprender mais?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore nossos artigos, projetos e ferramentas para aprimorar suas habilidades em desenvolvimento de software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/articles" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-colors"
            >
              Começar Agora
              <FaArrowRight className="ml-2" />
            </Link>
            <a 
              href="https://github.com/gbzarelli" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-colors"
            >
              Ver GitHub
              <FaGithub className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
