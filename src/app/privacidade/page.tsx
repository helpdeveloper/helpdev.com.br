import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade e cookies",
  description: "Informações sobre cookies e anúncios exibidos no site HelpDev.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Privacidade e cookies
      </h1>
      <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
        <p>
          O site usa Google Analytics para medir visitas e uso das páginas. Na
          implementação padrão, o Google Analytics utiliza o cookie próprio{" "}
          <code className="rounded bg-gray-100 px-1">_ga</code> para distinguir
          navegadores e sessões e coleta informações como estatísticas de
          sessão, localização aproximada e dados do navegador e do dispositivo.
          Consulte as informações do Google sobre{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="https://support.google.com/analytics/answer/11593727?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            coleta de dados do Analytics
          </a>
          .
        </p>
        <p>
          Este site exibe anúncios fornecidos pelo Google AdSense. O Google e
          parceiros de publicidade podem usar cookies e identificadores para
          veicular e personalizar anúncios, medir o desempenho das campanhas e
          evitar que o mesmo anúncio seja exibido repetidamente. Esses recursos
          podem considerar visitas anteriores a este site ou a outros sites.
        </p>
        <p>
          Você pode gerenciar a personalização de anúncios nas{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Configurações de anúncios do Google
          </a>
          . Também pode consultar as opções de desativação disponibilizadas pela{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Advertising Alliance
          </a>
          .
        </p>
        <p>
          Para desativar a medição do Google Analytics neste navegador, o Google
          oferece o{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="https://tools.google.com/dlpage/gaoptout?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            complemento de desativação do Analytics
          </a>
          .
        </p>
        <p>
          O tratamento de dados feito pelo Google segue a{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="https://policies.google.com/privacy?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade do Google
          </a>
          . Para saber mais sobre cookies usados pelo AdSense, consulte a página
          oficial sobre{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="https://support.google.com/adsense/answer/7549925?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            como o AdSense usa cookies
          </a>
          .
        </p>
        <p>
          Para dúvidas ou solicitações relacionadas à privacidade neste site,
          entre em contato pelo e-mail{" "}
          <a
            className="text-blue-700 underline hover:text-blue-900"
            href="mailto:gbzarelli@helpdev.com.br"
          >
            gbzarelli@helpdev.com.br
          </a>
          .
        </p>
      </div>
    </main>
  );
}
