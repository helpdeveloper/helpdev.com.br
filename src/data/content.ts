// Featured articles data
export const featuredArticles = [
  {
    id: 4,
    title: "Arquitetura de Código Não Se Copia, Se Pensa",
    description: "Por que decisões arquiteturais precisam nascer do contexto do produto em vez de replicar soluções prontas.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9ea92skPoohu6JQm8PU58Q.png",
    link: "https://medium.com/@guilherme.zarelli/arquitetura-de-c%C3%B3digo-n%C3%A3o-se-copia-se-pensa-6bedcc272134"
  },
  {
    id: 1,
    title: "Otimização da JVM para Contêineres: Memória e Garbage Collection",
    description: "Entenda como otimizar as configurações da JVM para ambientes containerizados, focando em gerenciamento de memória e garbage collection.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GWIPBD-OhfJ5ZjkkwB7Uqw.jpeg",
    link: "https://medium.com/inside-picpay/otimiza%C3%A7%C3%A3o-da-jvm-para-cont%C3%AAineres-mem%C3%B3ria-e-garbage-collection-c9b640fa4219"
  },
  {
    id: 2,
    title: "Descomplicando a Clean Architecture",
    description: "Uma abordagem simplificada e prática para implementar Clean Architecture em seus projetos.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*J8pxLe88qYFN7wUf.png",
    link: "https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6"
  },
  {
    id: 3,
    title: "O Use Case: Modelando as Interações do Seu Domínio",
    description: "Uma abordagem prática sobre como modelar casos de uso e interações em seu domínio de negócio.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_dwylzkbc7FphRGIFOfufQ.png",
    link: "https://medium.com/inside-picpay/o-use-case-modelando-as-intera%C3%A7%C3%B5es-do-seu-dom%C3%ADnio-c6c568270d0c"
  },
  {
    id: 5,
    title: "Java Garbage Collector — Por que precisamos conhecê-lo?",
    description: "Um mergulho profundo no funcionamento do Garbage Collector do Java e sua importância.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ANetWgPAOkjvBM05WxT4nw.png",
    link: "https://medium.com/luizalabs/java-garbage-collector-porque-precisamos-conhec%C3%AA-lo-9d26ebb0a6d8"
  },
  {
    id: 6,
    title: "Observabilidade: Monitorando sua aplicação a partir de métricas",
    description: "Como implementar observabilidade efetiva em aplicações usando métricas e monitoramento contínuo.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*mYwgRrLGeUDaNEJ1yQbdvg.png",
    link: "https://medium.com/luizalabs/observabilidade-monitorando-sua-aplicacao-a-partir-de-metricas-bd1b2d0ba1f8"
  }
] as const;

// Featured projects data
export const featuredProjects = [
  {
    id: 1,
    title: "Java Modular Architecture",
    description: "Uma arquitetura modular em Java que demonstra boas práticas de desenvolvimento e padrões de projeto, incluindo exemplos práticos de implementação.",
    imageUrl: "https://github.com/helpdeveloper/java-modular-architecture/raw/main/images/arch.png",
    link: "https://github.com/helpdeveloper/java-modular-architecture",
    languages: ["Java", "Spring Boot"]
  },
  {
    id: 2,
    title: "Java Architecture Template",
    description: "Template para arquitetura Java seguindo as melhores práticas e padrões modernos de desenvolvimento de software.",
    imageUrl: "https://github.com/helpdeveloper/java-architecture-template/raw/main/.images/banner.webp",
    link: "https://github.com/helpdeveloper/java-architecture-template",
    languages: ["Java", "Spring Boot", "Docker"]
  },
  {
    id: 3,
    title: "GZIP JSON Jackson",
    description: "Biblioteca para compressão e descompressão eficiente de JSON usando GZIP e Jackson, otimizando a transferência de dados.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "https://github.com/helpdeveloper/gzip-json-jackson",
    languages: ["Java"]
  }
] as const;

// Featured blog posts data
export const featuredBlogPosts = [
  {
    id: 1,
    title: "Encaminhamento de Requisições HTTP entre Serviços com AWS ALB Ingress",
    description: "Redirecionamento de Métodos HTTP entre Serviços",
    date: "21 Apr 2025",
    link: "https://gist.github.com/gbzarelli/48f7ef6c0f8a7833659ce78754c19764",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60",
    tags: ["k8s", "ingress", "aws"]
  },
  {
    id: 2,
    title: "Comparação dos Principais Garbage Collectors da JVM",
    description: "Uma análise comparativa dos diferentes garbage collectors disponíveis na JVM, ajudando a escolher o mais adequado para cada caso.",
    date: "04 Feb 2025",
    link: "https://gist.github.com/gbzarelli/7996424d114392551205722363925a97",
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60",
    tags: ["java", "jvm", "performance"]
  },
  {
    id: 3,
    title: "Configurações de containers para aplicações JVM",
    description: "Guia prático sobre configurações de recursos e optimizações para containers que executam aplicações Java em ambientes containerizados.",
    date: "12 Jan 2025",
    link: "https://gist.github.com/gbzarelli/ada40a628da0aba1fd2fe2d864aac792",
    imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=60",
    tags: ["java", "containers", "kubernetes"]
  }
] as const;

// Contact information
export const contacts = [
  { name: "GitHub", url: "https://github.com/gbzarelli", icon: "FaGithub" },
  { name: "Medium", url: "https://medium.com/@guilherme.zarelli", icon: "FaMedium" },
  { name: "Instagram", url: "https://www.instagram.com/_helpdev/", icon: "FaInstagram" },
  { name: "Email", url: "mailto:gbzarelli@helpdev.com.br", icon: "FaEnvelope" }
] as const;

// Quick links data
export const quickLinks = [
  { title: "Serviços", description: "Consultoria e desenvolvimento", link: "/", icon: "🧩" },
  { title: "Artigos", description: "Tutoriais e conteúdos técnicos", link: "/articles", icon: "📝" },
  { title: "Projetos", description: "Códigos open source e exemplos", link: "/projects", icon: "💻" },
  { title: "Blog/Gists", description: "Postagens rápidas e snippets", link: "/blog", icon: "📚" },
  { title: "Sobre", description: "Conheça o autor", link: "/about", icon: "👨‍💻" }
] as const;
