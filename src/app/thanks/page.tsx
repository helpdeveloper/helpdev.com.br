import Link from 'next/link';

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-10 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Obrigado pelo contato!</h1>
          <p className="text-gray-600 mb-6">
            Recebi sua mensagem e retornarei em breve com os próximos passos.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Voltar para a Home
          </Link>
        </div>
      </section>
    </main>
  );
}

