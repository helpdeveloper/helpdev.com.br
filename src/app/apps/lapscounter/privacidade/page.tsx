import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — LapsCounter',
  description: 'Política de privacidade do aplicativo gratuito LapsCounter para Android.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const updatedAt = '14 de outubro de 2026';

export default function LapsCounterPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-10 shadow-sm sm:px-10">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Help DEV · Aplicativos</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-3 text-lg text-gray-700">LapsCounter — cronômetro de natação</p>
          <p className="mt-4 text-sm text-gray-500">Vigente desde {updatedAt}</p>
        </header>

        <div className="space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Aplicativo abrangido</h2>
            <p>
              Esta política se aplica à versão gratuita do LapsCounter para Android, publicada com o identificador{' '}
              <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.lapscounter.swimming</code>.
              O aplicativo não exige criação de conta e não oferece compras ou assinaturas dentro do app.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Dados salvos no dispositivo</h2>
            <p>
              Para oferecer o cronômetro e o histórico, o aplicativo salva localmente no dispositivo as atividades que
              você grava, incluindo nome, descrição opcional, data, tempos, voltas e distâncias. Preferências do app,
              como distância da volta e opções de áudio e controle por fone, também ficam no dispositivo. A Help DEV
              não recebe esse histórico em seus servidores nem mantém uma conta de usuário para o aplicativo.
            </p>
            <p className="mt-3">
              O Android permite backup de dados deste aplicativo. Conforme as configurações do aparelho e da conta,
              dados locais do app podem ser incluídos em um backup ou transferidos para outro dispositivo. Esses
              backups são administrados pelo Android e pelo serviço de backup escolhido; a Help DEV não os controla.
              Você pode excluir atividades pelo próprio app e gerenciar ou apagar os dados do aplicativo nas
              configurações do Android. Cópias já incluídas em backups podem seguir as regras do serviço de backup.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Compartilhamento iniciado por você</h2>
            <p>
              Se você usar a opção de compartilhar, o Android mostra os aplicativos disponíveis e envia o texto da
              atividade ao destino que você selecionar. O aplicativo escolhido passa a tratar essas informações de
              acordo com seus próprios termos e práticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Anúncios e consentimento</h2>
            <p>
              O LapsCounter integra o Google Mobile Ads SDK para solicitar e exibir anúncios e o Google User Messaging
              Platform (UMP) para apresentar e administrar opções de consentimento quando aplicável. O app consulta o
              estado de consentimento antes de solicitar anúncios.
            </p>
            <p className="mt-3">
              Conforme a documentação do Google para o Google Mobile Ads SDK, o SDK pode coletar e compartilhar
              automaticamente endereço IP (que pode ser usado para estimar a localização geral), interações com o app
              (como inicializações, toques e visualizações de anúncios), informações de diagnóstico e identificadores
              do dispositivo ou da conta, incluindo o ID de publicidade do Android, o App Set ID e, quando aplicável,
              outros identificadores associados a contas no dispositivo. O Google informa que esses dados podem ser
              usados para publicidade, análise e prevenção a fraudes e são criptografados em trânsito com TLS. O
              tratamento desses dados pelo Google segue os termos e as práticas de privacidade do próprio Google.
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
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Retenção e escolhas</h2>
            <p>
              O histórico permanece no dispositivo até você excluir as atividades no app, apagar os dados do app nas
              configurações do Android ou desinstalá-lo. A disponibilidade de cópias em backups depende das
              configurações e das regras do serviço de backup. A retenção dos dados técnicos tratados pelo Google por
              meio dos anúncios é administrada pelo próprio Google, não pela Help DEV.
            </p>
            <p className="mt-3">
              Você pode gerenciar o ID de publicidade e outras opções de anúncios nas configurações do Android e da
              conta Google. Para solicitações sobre dados tratados pelo Google, use também os controles e canais
              disponibilizados pelo Google. Para dúvidas ou solicitações relacionadas ao tratamento sob responsabilidade
              da Help DEV, fale conosco pelo canal indicado abaixo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Segurança e alterações</h2>
            <p>
              O histórico de atividades é mantido no armazenamento local do aplicativo. O Google informa que os dados
              coletados pelo SDK de anúncios são criptografados em trânsito com TLS. Nenhuma medida elimina todos os
              riscos de segurança; mantenha o sistema operacional atualizado e tenha cuidado ao compartilhar suas
              atividades com outros aplicativos.
            </p>
            <p className="mt-3">
              Esta política poderá ser atualizada quando houver mudanças no aplicativo, nos serviços integrados ou nas
              exigências aplicáveis. A data de vigência no início da página indicará a versão atual.
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
