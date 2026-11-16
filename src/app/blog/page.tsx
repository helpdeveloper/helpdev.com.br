'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { editorialArticles } from '@/data/editorialArticles';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredArticles = useMemo(() => {
    const term = searchTerm.trim().toLocaleLowerCase('pt-BR');
    if (!term) return editorialArticles;

    return editorialArticles.filter((article) =>
      `${article.title} ${article.description} ${article.topic}`
        .toLocaleLowerCase('pt-BR')
        .includes(term),
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900">Notas técnicas</h1>
          <p className="mt-3 text-base leading-7 text-gray-700">
            Análises práticas de código, arquitetura e decisões de engenharia baseadas em projetos e exemplos mantidos pela HelpDev.
            Cada nota apresenta o contexto, os limites da solução e referências para conferir a implementação.
          </p>
        </header>

        <div className="mb-8 max-w-2xl">
          <SearchBar onSearch={setSearchTerm} placeholder="Buscar por tema ou tecnologia..." />
        </div>

        {searchTerm && (
          <p className="mb-5 text-sm text-gray-600" aria-live="polite">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'nota encontrada' : 'notas encontradas'}
          </p>
        )}

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="flex flex-col rounded-xl bg-white p-6 shadow-md">
                <p className="text-sm font-medium text-blue-700">{article.topic}</p>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-gray-900">
                  <Link className="hover:text-blue-700" href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 leading-7 text-gray-700">{article.description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm">
                  <span className="text-gray-500">Leitura técnica · HelpDev</span>
                  <Link className="font-semibold text-blue-700 hover:text-blue-900" href={`/blog/${article.slug}`}>
                    Ler a análise <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-lg bg-white p-6 text-gray-600">Nenhuma nota corresponde a essa busca.</p>
        )}

        <aside className="mt-10 rounded-lg border border-gray-200 bg-white p-5 text-sm leading-6 text-gray-700">
          <h2 className="font-semibold text-gray-900">Código e snippets</h2>
          <p className="mt-1">
            Os Gists públicos reúnem exemplos menores de código. As notas desta página são análises editoriais próprias e apontam para os repositórios usados como fonte.
          </p>
          <a
            className="mt-3 inline-flex font-semibold text-blue-700 hover:text-blue-900"
            href="https://gist.github.com/gbzarelli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Gists no GitHub <span className="ml-1" aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </main>
  );
}
