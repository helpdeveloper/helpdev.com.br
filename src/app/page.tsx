'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { ArticleCard } from './components/ArticleCard';
import { BlogCard } from './components/BlogCard';
import { ProjectCard } from './components/ProjectCard';
import { FaGithub, FaMedium, FaEnvelope, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { featuredArticles, featuredProjects, featuredBlogPosts, contacts, quickLinks } from '@/data/content';

// Create icon mapping for contacts
const iconMap = {
  FaGithub: <FaGithub className="text-2xl" />,
  FaMedium: <FaMedium className="text-2xl" />,
  FaInstagram: <FaInstagram className="text-2xl" />,
  FaEnvelope: <FaEnvelope className="text-2xl" />
};

// Map contacts with icons
const contactsWithIcons = contacts.map(contact => ({
  ...contact,
  icon: iconMap[contact.icon as keyof typeof iconMap]
}));

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
                {contactsWithIcons.map((contact) => (
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
            {quickLinks.map((item, index) => (
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
