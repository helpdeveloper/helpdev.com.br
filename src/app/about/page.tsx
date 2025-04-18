'use client';

import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function About() {
  const experiences = [
    {
      role: "Staff Software Engineer",
      company: "PicPay",
      companyUrl: "https://www.linkedin.com/company/picpay/",
      area: "Corporate Financial Services",
      description: "Liderança técnica e arquitetural no desenvolvimento do Core Bancário. Responsável por decisões arquiteturais e desenvolvimento de soluções escaláveis e resilientes no setor de Acquiring, utilizando tecnologias como Spring Boot, RabbitMQ, Docker e AWS.",
      icon: "💼"
    },
    {
      role: "Tech Lead",
      company: "Magazine Luiza",
      companyUrl: "https://www.linkedin.com/company/luizalabs/",
      area: "Vertical de Logística",
      description: "Liderança técnica na definição de arquiteturas e padrões de desenvolvimento, facilitando a migração entre diferentes provedores de cloud (AWS, GCP e MagaluCloud). Mentoria de equipes e implementação de boas práticas de desenvolvimento.",
      icon: "👨‍💻"
    },
    {
      role: "Desenvolvedor Backend/Android",
      company: "Grupo Criar",
      companyUrl: "https://www.linkedin.com/company/grupocriar/",
      area: "Desenvolvimento Mobile e Backend",
      description: "Desenvolvimento de aplicativos Android e sistemas backend para empresas públicas e privadas, incluindo sistemas de gestão de trânsito e mobilidade urbana. Implementação de soluções mobile e backend com foco em usabilidade e performance.",
      icon: "📱"
    }
  ];

  const skills = [
    {
      category: "Linguagens",
      items: [
        { name: "Java", level: "Especialista", icon: "☕" },
        { name: "Kotlin", level: "Desenvolvimento Android", icon: "📱" },
        { name: "Python", level: "Automação e Scripts", icon: "🐍" },
        { name: "GO", level: "Desenvolvimento Backend", icon: "🔵" }
      ]
    },
    {
      category: "Tecnologias",
      items: [
        { name: "Spring Boot", level: "Arquitetura e Microserviços", icon: "🌱" },
        { name: "Docker", level: "Containerização e Orquestração", icon: "🐳" },
        { name: "AWS", level: "Cloud e Infraestrutura", icon: "☁️" },
        { name: "Kubernetes", level: "Orquestração de Containers", icon: "⚙️" }
      ]
    }
  ];

  const contacts = [
    { name: "Website", url: "https://helpdev.com.br", icon: <FaGlobe className="text-2xl" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gbzarelli/", icon: <FaLinkedin className="text-2xl" /> },
    { name: "GitHub", url: "https://github.com/gbzarelli", icon: <FaGithub className="text-2xl" /> },
    { name: "Medium", url: "https://medium.com/@guilherme.zarelli", icon: <FaMedium className="text-2xl" /> },
    { name: "Email", url: "mailto:gbzarelli@helpdev.com.br", icon: <FaEnvelope className="text-2xl" /> }
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
                      {contact.icon}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engenheiro de Software com mais de 10 anos de experiência em desenvolvimento e arquitetura de sistemas. 
                Especialista em soluções escaláveis para empresas de grande porte, com foco em arquitetura de software, 
                cloud computing e desenvolvimento de aplicações mobile. Comprometido com o compartilhamento de conhecimento 
                através de artigos técnicos, palestras e mentoria de desenvolvedores.
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
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <p className="text-gray-500 mb-2">{exp.area}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.linkedin.com/in/gbzarelli/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin className="mr-2" />
              Ver recomendações no LinkedIn
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
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
          <div className="mt-6 text-center">
            <a
              href="https://www.linkedin.com/in/gbzarelli/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin className="mr-2" />
              Ver certificações no LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 