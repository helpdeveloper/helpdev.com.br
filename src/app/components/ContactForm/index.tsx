import React from 'react';

type Props = {
  redirectPath?: string;
  subject?: string;
};

export function ContactForm({
  redirectPath = '/thanks',
  subject = 'Novo contato - Proposta | HelpDev',
}: Props) {
  const actionUrl = 'https://formsubmit.co/gbzarelli@helpdev.com.br';

  return (
    <form
      action={actionUrl}
      method="POST"
      className="bg-white text-gray-900 p-6 rounded-xl shadow-md max-w-2xl mx-auto text-left"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_next" value={redirectPath} />
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-800">Empresa (opcional)</label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
            placeholder="Nome da empresa"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-800">Orçamento</label>
            <select
              id="budget"
              name="budget"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
              defaultValue=""
            >
              <option value="" disabled>Selecione…</option>
              <option value="<10k">Até R$10k</option>
              <option value="10-50k">R$10k–R$50k</option>
              <option value=">50k">Acima de R$50k</option>
              <option value="avaliar">A avaliar</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-800">Prazo</label>
            <select
              id="timeline"
              name="timeline"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
              defaultValue=""
            >
              <option value="" disabled>Selecione…</option>
              <option value="urgente">Urgente</option>
              <option value="1-3m">1–3 meses</option>
              <option value=">3m">Mais de 3 meses</option>
              <option value="indefinido">Indefinido</option>
            </select>
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-800">Mensagem</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
            placeholder="Conte um pouco sobre o projeto, objetivos e restrições."
          />
        </div>
        <div className="md:col-span-2 flex items-start">
          <input id="consent" name="consent" type="checkbox" required className="mt-1 mr-2" />
          <label htmlFor="consent" className="text-sm text-gray-800">Aceito ser contatado por e-mail para tratativas sobre este projeto.</label>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enviar proposta
        </button>
        <a href="mailto:gbzarelli@helpdev.com.br" className="text-blue-600 hover:text-blue-800">ou envie um e-mail</a>
      </div>
    </form>
  );
}
