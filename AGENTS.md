# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router. Routes: `blog/`, `articles/`, `projects/`, `about/`, `services/`, `thanks/`.
- `src/app/components/`: Reusable UI (e.g., `Navbar/`, `Footer/`, `ArticleCard/`, `ContactForm/`). Use one component per folder with `index.tsx`.
- `src/data/`, `src/utils/`: Static data and helpers (e.g., `content.ts`).
- `public/`: Static assets, `robots.txt`, `sitemap.xml`. Served at site root.
- `out/`: Static export output for deployment (don’t edit manually).
- Config: `next.config.ts`, `tailwind.config.ts`, `eslint.config.mjs`, `.htaccess`.

## Build, Test, and Development Commands
- `npm run dev`: Dev server with Turbopack at `http://localhost:3000`.
- `npm run build`: Production build. If using static hosting, enable `output: 'export'` in `next.config.ts` to generate `out/`.
- `npm start`: Run the production server locally.
- `npm run lint`: ESLint (Next core-web-vitals + TS). Auto-fix: `npm run lint -- --fix`.
- Preview static build: `npx http-server ./out -p 8000`.

## Coding Style & Naming Conventions
- TypeScript; 2-space indent. Components in PascalCase; route segments lowercase (e.g., `src/app/blog/page.tsx`).
- Tailwind CSS in JSX; shared styles in `src/app/globals.css`.
- Keep pages self-contained with `metadata.ts` per route when relevant.

## Testing Guidelines
- No tests configured. Validate via `npm run dev`. If adding tests: Jest + Testing Library for unit/UI; Playwright for e2e. Place under `src/**/__tests__` or as `*.test.ts(x)`.

## Commit & Pull Request Guidelines
- Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`). Example: `feat(services): add static contact form`.
- PRs: clear description, linked issues, screenshots for UI, and confirm `npm run lint`/`build` pass.

## SEO & Content
- Global SEO in `src/app/layout.tsx` (Open Graph, Twitter, JSON-LD). Per-page metadata in `src/app/**/metadata.ts`.
- Keep a single H1 por página; use descrições objetivas e CTAs claros.
- Atualize `sitemap.xml`/`robots.txt` ao criar rotas novas (ou migre para `src/app/sitemap.ts` e `robots.ts`).
- Prefira imagens OG 1200x630 em `public/images/` e referencie em metadata.

## Contato (Formulário Estático)
- `ContactForm` usa FormSubmit (sem backend). Para trocar e-mail, edite `action` no componente.
- Redireciona para `/thanks`. Honeypot ativado; sem captcha por padrão.
