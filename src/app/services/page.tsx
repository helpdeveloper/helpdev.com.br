import Link from 'next/link';
import { FaBriefcase, FaCode, FaCloud, FaShieldAlt, FaRocket, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import { Navbar } from '../components/Navbar';
import { ContactForm } from '../components/ContactForm';

const mailtoHref =
  'mailto:gbzarelli@helpdev.com.br?subject=Proposta%20-%20Consultoria%20e%20Desenvolvimento&body=Olá%20Guilherme,%20gostaria%20de%20conversar%20sobre%20um%20projeto/consultoria.%20Resumo:%20';

export default function ServicesPage() {
  const services = [
    { icon: <FaBriefcase className="text-blue-600 text-3xl" />, title: 'Consultoria em Arquitetura', desc: 'Diagnóstico, desenho e evolução de arquiteturas escaláveis e seguras.' },
    { icon: <FaCode className="text-blue-600 text-3xl" />, title: 'Desenvolvimento de Projetos', desc: 'Entrega ponta a ponta: backend, frontend, integrações e automações.' },
    { icon: <FaCloud className="text-blue-600 text-3xl" />, title: 'Cloud & DevOps', desc: 'Infra como código, pipelines, observabilidade e custos otimizados.' },
    { icon: <FaShieldAlt className="text-blue-600 text-3xl" />, title: 'Qualidade & Segurança', desc: 'Revisão de código, testes, performance e práticas de segurança.' },
    { icon: <FaRocket className="text-blue-600 text-3xl" />, title: 'Performance & Escala', desc: 'Perfis de desempenho, caching, filas e arquitetura orientada a eventos.' },
    { icon: <FaChalkboardTeacher className="text-blue-600 text-3xl" />, title: 'Mentoria & Treinamentos', desc: 'Workshops e capacitação sob medida para seu time.' },
  ] as const;

  const models = [
    { title: 'Projeto Fechado', desc: 'Escopo definido, prazos e entregas claras. Ideal para iniciativas com requisitos consolidados.' },
    { title: 'Time & Material', desc: 'Alocação por horas/sprints com priorização contínua. Ideal para evolução de produto.' },
    { title: 'Advisory', desc: 'Acompanhamento executivo/técnico recorrente para governança, decisões e revisão de roadmap.' },
  ] as const;

  const faqs = [
    { q: 'Como iniciamos?', a: 'Agende uma conversa. Entendo o contexto, elaboro proposta com escopo, prazos e investimento.' },
    { q: 'Quais tecnologias?', a: 'Java, Spring, Node.js, Next.js, React, Docker, Kubernetes, AWS, CI/CD e boas práticas.' },
    { q: 'Como é a comunicação?', a: 'Sprints curtas, checkpoints semanais e acesso aos artefatos (código, board, documentação).' },
  ] as const;

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Serviços de Consultoria e Desenvolvimento</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">Apoio estratégico e execução técnica para acelerar produtos com qualidade, previsibilidade e escala.</p>
          <div className="flex gap-4">
            <a href={mailtoHref} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Solicitar proposta
              <FaArrowRight className="ml-2" />
            </a>
            <Link href="/#contato" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Falar agora
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">O que eu entrego</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Modelos de Engajamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m) => (
              <div key={m.title} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={mailtoHref} className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">Solicitar proposta</a>
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
