import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdSenseBanner from '@/app/components/AdSenseBanner';
import { editorialArticles } from '@/data/editorialArticles';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return editorialArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = editorialArticles.find((entry) => entry.slug === slug);
  if (!article) return {};

  const canonical = `/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    authors: [{ name: 'HelpDev' }],
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: article.title,
      description: article.description,
      publishedTime: `${article.updatedAt}T12:00:00Z`,
      modifiedTime: `${article.updatedAt}T12:00:00Z`,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = editorialArticles.find((entry) => entry.slug === slug);
  if (!article) notFound();

  const articleUrl = `https://helpdev.com.br/blog/${article.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.description,
    dateModified: article.updatedAt,
    mainEntityOfPage: articleUrl,
    author: { '@type': 'Organization', name: 'HelpDev', url: 'https://helpdev.com.br' },
    publisher: { '@type': 'Organization', name: 'HelpDev', url: 'https://helpdev.com.br' },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-gray-600">
          <Link className="hover:text-blue-700" href="/">Início</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link className="hover:text-blue-700" href="/blog">Notas técnicas</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>

        <header className="border-b border-gray-200 pb-8">
          <p className="text-sm font-semibold text-blue-700">{article.topic}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">{article.description}</p>
          <p className="mt-4 text-sm text-gray-500">
            Leitura técnica da HelpDev · Atualizada em{' '}
            {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${article.updatedAt}T12:00:00Z`))}
          </p>
        </header>

        <div className="mt-8 space-y-9 text-base leading-8 text-gray-800">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-2xl font-semibold leading-tight text-gray-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
              {section.bullets && (
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {section.code && (
                <pre className="my-5 overflow-x-auto rounded-lg bg-slate-950 p-5 text-sm leading-6 text-slate-100">
                  <code>{section.code}</code>
                </pre>
              )}
              {section.callout && (
                <aside className="my-5 rounded-r-lg border-l-4 border-blue-600 bg-blue-50 px-5 py-4 text-gray-800">
                  {section.callout}
                </aside>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-sm leading-6 text-gray-600">
            Esta análise descreve o código-fonte público consultado e não substitui a avaliação dos requisitos do seu sistema.
            Confira a implementação e o histórico do projeto em{' '}
            <a className="font-semibold text-blue-700 underline" href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
              {article.sourceName}
            </a>.
          </p>
          <h2 className="mt-6 font-semibold text-gray-900">Referências do código</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
            {article.references.map((reference) => (
              <li key={reference.url}>
                <a className="text-blue-700 underline hover:text-blue-900" href={reference.url} target="_blank" rel="noopener noreferrer">
                  {reference.label}
                </a>
              </li>
            ))}
          </ul>
          <Link className="mt-6 inline-flex font-semibold text-blue-700 hover:text-blue-900" href="/blog">
            ← Voltar às notas técnicas
          </Link>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </article>
      <AdSenseBanner />
    </main>
  );
}
