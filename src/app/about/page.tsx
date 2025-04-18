'use client';

import { Navbar } from '../components/Navbar';
import Image from 'next/image';

export default function About() {
  const experiences = [
    {
      role: "Staff Software Engineer",
      company: "PicPay",
      area: "Corporate Financial Services",
      description: "Papel estratégico e técnico, liderando decisões arquiteturais e impulsionando soluções escaláveis e resilientes no setor de Acquiring, utilizando tecnologias como Spring Boot, RabbitMQ, Docker e AWS.",
      icon: "💼"
    },
    {
      role: "Tech Lead",
      company: "Magazine Luiza",
      area: "Vertical de Logística",
      description: "Suporte às squads na definição de arquiteturas, estabelecimento de padrões e criação de soluções. Participação em processos complexos de migração entre AWS, GCP e MagaluCloud.",
      icon: "👨‍💻"
    }
  ];

  const skills = [
    {
      category: "Linguagens",
      items: [
        { name: "Java", level: "Principal", icon: "☕" },
        { name: "Kotlin", level: "Android", icon: "📱" },
        { name: "Python", level: "Scripts", icon: "🐍" },
        { name: "GO", level: "Conhecimento", icon: "🔵" }
      ]
    },
    {
      category: "Tecnologias",
      items: [
        { name: "Spring Boot", level: "Avançado", icon: "🌱" },
        { name: "Docker", level: "Avançado", icon: "🐳" },
        { name: "AWS", level: "Avançado", icon: "☁️" },
        { name: "Kubernetes", level: "Avançado", icon: "⚙️" }
      ]
    }
  ];

  const contacts = [
    { name: "Website", url: "https://helpdev.com.br", icon: "🌐" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gbzarelli/", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/gbzarelli", icon: "🐦" },
    { name: "Email", url: "mailto:gbzarelli@helpdev.com.br", icon: "📧" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section com foto */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            <div className="flex-shrink-0">
              <Image
                src="https://avatars.githubusercontent.com/u/6283514?v=4"
                alt="Guilherme Biff Zarelli"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h1 className="text-4xl font-bold text-gray-900">Guilherme Biff Zarelli</h1>
                <div className="flex gap-2 mt-4 md:mt-0">
                  {contacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      title={contact.name}
                    >
                      <span className="text-2xl">{contact.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Profissional com mais de uma década de experiência em desenvolvimento de software 
                e liderança técnica, especializado em projetos estratégicos para empresas de grande 
                porte no setor de tecnologia. Comprometido com o compartilhamento de conhecimento 
                através de apresentações e disseminação de melhores práticas.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experiência Profissional</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{exp.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{exp.area}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Competências Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{skill.name}</p>
                        <p className="text-sm text-gray-500">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 