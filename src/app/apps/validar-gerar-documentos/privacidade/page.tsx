import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Validador de documentos',
  description: 'Política de privacidade do aplicativo gratuito Validador de documentos.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const updatedAt = '25 de outubro de 2026';

export default function AppPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-10 shadow-sm sm:px-10">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Help DEV · Aplicativos</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-3 text-lg text-gray-700">Validador de documentos</p>
          <p className="mt-4 text-sm text-gray-500">Vigente desde {updatedAt}</p>
        </header>

        <div className="space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Aplicativo abrangido</h2>
            <p>
              Esta política se aplica à edição gratuita com anúncios do aplicativo Validador de documentos,
              identificada pelo package <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.validador.v3</code>.
            </p>
            <p className="mt-3">
              O aplicativo é independente e não é afiliado, autorizado, endossado ou representante de órgãos
              governamentais. Ele faz verificações matemáticas locais e não se conecta aos serviços oficiais listados
              abaixo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Informações processadas no dispositivo</h2>
            <p>
              O aplicativo valida localmente o formato e os dígitos verificadores de CPF, CNPJ (inclusive o formato
              alfanumérico), PIS e RENAVAM. Um resultado positivo indica apenas que o valor passou por essas
              verificações matemáticas: o aplicativo não consulta cadastros oficiais nem confirma existência, situação
              cadastral ou titularidade. Os valores digitados são processados no dispositivo. A Help DEV não os recebe
              em seus servidores, não mantém conta de usuário e não cria histórico desses valores.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Fontes oficiais para consulta externa</h2>
            <p>
              Para confirmar informações cadastrais ou consultar serviços oficiais, use diretamente os canais dos
              órgãos responsáveis. O aplicativo não acessa essas bases nem é endossado por esses órgãos.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <a className="text-blue-700 underline hover:text-blue-900" href="https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas">
                  CPF — Receita Federal
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline hover:text-blue-900" href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/cnpj-alfanumerico/cnpj-alfa">
                  CNPJ alfanumérico — Receita Federal
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline hover:text-blue-900" href="https://www.gov.br/pt-br/servicos/realizar-inscricao-no-inss">
                  PIS/NIT — INSS
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline hover:text-blue-900" href="https://www.gov.br/pt-br/servicos/consultar-dados-de-veiculo-na-base-renavam">
                  RENAVAM — Senatran
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Anúncios na versão gratuita</h2>
            <p>
              O aplicativo gratuito integra o Google Mobile Ads SDK e a plataforma de consentimento do Google (UMP) para
              solicitar e exibir anúncios. A solicitação de anúncios só é feita quando o estado de consentimento
              informado pelo UMP permite.
            </p>
            <p className="mt-3">
              Conforme a documentação do Google para o Google Mobile Ads SDK, o SDK pode coletar e compartilhar
              automaticamente endereço IP (que pode ser usado para estimar a localização geral), interações com o
              aplicativo (como inicializações, toques e visualizações de anúncios), informações de diagnóstico e
              identificadores do dispositivo ou da conta, incluindo o ID de publicidade do Android, o App Set ID e,
              quando aplicável, outros identificadores associados a contas no dispositivo. O Google informa que esses
              dados são usados para publicidade, análise e prevenção a fraudes e que são criptografados em trânsito com
              TLS. Esses dados são tratados pelo Google conforme seus próprios termos e práticas de privacidade.
            </p>
            <p className="mt-3">
              Consulte a{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=pt-BR">
                Política de Privacidade do Google
              </a>{' '}
              e a{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="https://developers.google.com/admob/android/privacy/play-data-disclosure?hl=pt-br"
              >
                divulgação de dados do Google Mobile Ads SDK
              </a>{' '}
              para detalhes e atualizações.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Armazenamento e compartilhamento</h2>
            <p>
              A Help DEV não armazena em seus servidores os números digitados no aplicativo e não os vende. Os dados
              técnicos descritos acima podem ser coletados e compartilhados pelo Google por meio do serviço de
              anúncios. O Google determina suas próprias operações e períodos de retenção para esses
              dados, que não são controlados pela Help DEV. Informações poderão ser fornecidas quando isso for exigido
              por lei ou por uma solicitação legal válida.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Crianças</h2>
            <p>
              O aplicativo não é direcionado a crianças menores de 13 anos. Se você acredita que uma criança
              enviou informações pessoais diretamente à Help DEV, entre em contato pelo canal indicado nesta política.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Seus direitos e escolhas</h2>
            <p>
              Conforme a legislação aplicável, você pode solicitar informações sobre o tratamento de dados pessoais sob
              responsabilidade da Help DEV e exercer direitos como acesso, correção, eliminação ou revogação de
              consentimento, quando cabíveis. Como os números de documentos são processados localmente e não são
              mantidos em servidor pela Help DEV, não há um histórico central desses valores para localizar ou apagar.
            </p>
            <p className="mt-3">
              Os controles de anúncios e identificadores do Android podem ser gerenciados nas configurações do
              dispositivo e da conta Google. Para solicitações referentes aos dados tratados pela Google, use também os
              canais e controles disponibilizados pela própria Google.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Segurança e alterações</h2>
            <p>
              O processamento dos números usados pelo aplicativo ocorre no dispositivo. O Google informa que
              os dados coletados pelo SDK de anúncios são criptografados em trânsito com TLS. Nenhuma medida elimina
              todos os riscos de segurança; mantenha o sistema operacional atualizado e use o aplicativo apenas para
              verificar localmente o formato e os dígitos verificadores.
            </p>
            <p className="mt-3">
              Esta política poderá ser atualizada quando houver mudanças nos aplicativos, nos serviços integrados ou
              nas exigências aplicáveis. A data de vigência no início da página indicará a versão atual.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Contato</h2>
            <p>
              Para dúvidas ou solicitações relacionadas a esta política, use o{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://helpdev.com.br/#contato">
                canal de contato da Help DEV
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
