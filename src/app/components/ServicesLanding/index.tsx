import Link from 'next/link';
import {
  FaArrowRight,
  FaBriefcase,
  FaChalkboardTeacher,
  FaCloud,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import { serviceOfferings } from '@/data/services';
import { ContactForm } from '../ContactForm';
import { Navbar } from '../Navbar';

const mailtoHref =
  'mailto:gbzarelli@helpdev.com.br?subject=Proposta%20-%20Consultoria%20e%20Desenvolvimento&body=Olá%20Guilherme,%20gostaria%20de%20conversar%20sobre%20um%20projeto/consultoria.%20Resumo:%20';

const serviceIcons = [
  FaBriefcase,
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaChalkboardTeacher,
  FaUserGraduate,
] as const;

const engagementModels = [
  {
    title: 'Projeto Fechado',
    description: 'Escopo definido, prazos e entregas claras. Ideal para iniciativas com requisitos consolidados.',
  },
  {
    title: 'Time & Material',
    description: 'Alocação por horas/sprints com priorização contínua. Ideal para evolução de produto.',
  },
  {
    title: 'Advisory',
    description: 'Acompanhamento executivo/técnico recorrente para governança, decisões e revisão de roadmap.',
  },
] as const;

const faqs = [
  {
    question: 'Como iniciamos?',
    answer: 'Agende uma conversa. Entendo o contexto, elaboro proposta com escopo, prazos e investimento.',
  },
  {
    question: 'Quais tecnologias?',
    answer: 'Java, Spring, Node.js, Next.js, React, Docker, Kubernetes, AWS, CI/CD e boas práticas.',
  },
  {
    question: 'Como é a comunicação?',
    answer: 'Sprints curtas, checkpoints semanais e acesso aos artefatos: código, board e documentação.',
  },
] as const;

export function ServicesLanding() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Serviços de Consultoria em Desenvolvimento de Software
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Diagnóstico, arquitetura e execução para modernizar sistemas, acelerar entregas e operar com segurança — de APIs e cloud a DevOps e qualidade.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={mailtoHref} className="button-primary">
              Solicitar proposta
              <FaArrowRight className="ml-2" />
            </a>
            <Link href="/#contato" className="button-secondary">
              Falar agora
            </Link>
            <Link href="/articles" className="button-secondary">
              Ver Artigos Técnicos
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">O que eu entrego</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOfferings.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <article key={service.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Icon className="text-blue-600 text-3xl mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Modelos de Engajamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <article key={model.title} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={mailtoHref} className="button-primary px-8 py-4 text-lg">
              Solicitar proposta
            </a>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Fale sobre seu projeto</h2>
          <p className="text-gray-600 mb-8 text-center">Envie os detalhes e responderei com uma proposta objetiva.</p>
          <ContactForm redirectPath="/thanks" subject="Novo contato - Serviços | HelpDev" />
        </div>
      </section>
    </main>
  );
}
