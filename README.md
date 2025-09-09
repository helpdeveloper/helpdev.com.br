# HelpDev

<p align="center">
  <img src="public/images/logo.png" alt="HelpDev Logo">
</p>

O HelpDev é um portal dedicado a compartilhar conhecimento sobre desenvolvimento de software, com artigos técnicos, projetos open source e snippets de código úteis.

## 🚀 Funcionalidades

- 📚 Artigos técnicos sobre desenvolvimento
- 💻 Projetos open source
- 📝 Snippets de código (Gists)
- 🔍 Sistema de busca integrado
- 🌐 Interface moderna e responsiva

## 🛠️ Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- GitHub API
- Medium API

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn
- Git

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/gbzarelli/helpdev.com.br.git
cd helpdev.com.br
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o site em:
```
http://localhost:3000
```

## 🏗️ Como Fazer o Build Estático

1. Execute o build:
```bash
npm run build
# ou
yarn build
```

2. Os arquivos estáticos serão gerados na pasta `out/`

3. Para testar o build localmente:
```bash
npx http-server ./out -p 8000
```
   - Acesse em: http://localhost:8000

4. Para fazer o deploy:
   - Copie todo o conteúdo da pasta `out/` para o diretório raiz do seu servidor web
   - Certifique-se de que o arquivo `.htaccess` está configurado corretamente
   - Configure o SSL/HTTPS no servidor

## 🔧 Configurações do Servidor

O projeto inclui um arquivo `.htaccess` com as seguintes configurações:
- Força HTTPS
- Redirecionamentos de URL
- Configurações de cache
- Compressão GZIP
- Headers de segurança

## 📝 Estrutura do Projeto

```
helpdev.com.br/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── articles/
│   │   ├── projects/
│   │   └── blog/
│   └── styles/
├── public/
├── next.config.js
└── .htaccess
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Guilherme Biff Zarelli

- **Blog/Site**: [https://helpdev.com.br](https://helpdev.com.br)
- **LinkedIn**: [https://linkedin.com/in/gbzarelli/](https://linkedin.com/in/gbzarelli/)
- **GitHub**: [https://github.com/gbzarelli](https://github.com/gbzarelli)
- **Articles in Medium**: [https://medium.com/@guilherme.zarelli](https://medium.com/@guilherme.zarelli)
- **Email**: [gbzarelli@helpdev.com.br](mailto:gbzarelli@helpdev.com.br)