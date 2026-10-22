import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Minha Reforma',
  description:
    'Política de privacidade do aplicativo Minha Reforma — Controle de Gastos de Obra para Android e iOS.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const updatedAt = '22 de outubro de 2026';

export default function MinhaReformaPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-10 shadow-sm sm:px-10">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Help DEV · Aplicativos
          </p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Minha Reforma — Controle de Gastos de Obra
          </p>
          <p className="mt-4 text-sm text-gray-500">Vigente desde {updatedAt}</p>
        </header>

        <div lang="pt-BR" className="space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Aplicativo abrangido
            </h2>
            <p>
              Esta política se aplica ao Minha Reforma — Controle de Gastos de
              Obra, para Android e iOS, publicado pela Help DEV com os
              identificadores <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.minhareforma</code>.
              O app ajuda o proprietário a organizar obras, orçamento, gastos e
              pagamentos. Não exige cadastro ou criação de conta na Help DEV.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Dados da obra e armazenamento local
            </h2>
            <p>
              As informações que você cadastra — como nome e local da obra,
              datas, orçamento, reserva, categorias, etapas, compras, valores,
              pagamentos agendados, descrições e nomes de fornecedores — são
              armazenadas no banco de dados local do aplicativo no aparelho.
              Campos de texto podem conter dados pessoais de terceiros se você
              os inserir. O app não acessa a agenda de contatos para preencher
              esses dados.
            </p>
            <p className="mt-3">
              A Help DEV não recebe automaticamente os cadastros da obra, não
              mantém uma cópia em servidor próprio e não oferece sincronização
              ou backup em nuvem nesta versão. O app não solicita dados
              bancários, números de cartão ou credenciais financeiras e não
              realiza pagamentos a fornecedores. Fora do SDK de anúncios, o
              app não integra ferramentas próprias de análise de uso ou envio
              de relatórios de falha.
            </p>
            <p className="mt-3">
              O sistema operacional ou um serviço de backup configurado no
              aparelho pode incluir dados do aplicativo em cópias de segurança
              ou transferências entre dispositivos. Essas cópias são
              administradas pelas configurações da plataforma ou do serviço
              escolhido; a Help DEV não as controla.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Anúncios na versão Free
            </h2>
            <p>
              A versão Free pode exibir banners somente na lista de obras e no
              resumo de uma obra. O app consulta o estado de consentimento
              disponibilizado pelo Google User Messaging Platform (UMP) antes
              de solicitar anúncios e oferece um acesso às opções de
              privacidade quando o UMP indicar que isso é necessário. As
              solicitações atuais são configuradas como não personalizadas; a
              veiculação ainda depende do consentimento e da configuração
              aplicável à região e ao aparelho.
            </p>
            <p className="mt-3">
              Para carregar e avaliar anúncios, o Google Mobile Ads SDK pode
              coletar e compartilhar automaticamente endereço IP (que pode
              indicar a localização geral), interações com o app, informações
              de diagnóstico e desempenho e identificadores do aparelho ou da
              conta. Esses dados podem ser usados pelo Google e por parceiros
              de publicidade para veiculação, medição, análise e prevenção a
              fraudes, conforme a configuração e as práticas do Google. Mesmo
              anúncios não personalizados podem usar identificadores para
              funções como limitar a frequência e gerar relatórios agregados.
              A Help DEV não envia ao SDK valores, endereços, descrições ou
              fornecedores cadastrados nas obras, nem os usa para segmentar
              anúncios.
            </p>
            <p className="mt-3">
              Na configuração atual, o app solicita anúncios não personalizados
              e não exibe uma solicitação de rastreamento do iOS (App Tracking
              Transparency). Isso não significa que o SDK deixe de tratar os
              dados técnicos descritos acima. Se uma futura configuração passar
              a rastrear usuários entre apps ou sites de outras empresas, ou a
              usar o identificador de publicidade do iOS, o fluxo de autorização
              e as divulgações serão revistos antes da distribuição. Saiba mais
              sobre os{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="https://developer.apple.com/app-store/user-privacy-and-data-use/"
              >
                avisos de privacidade e rastreamento da Apple
              </a>
              .
            </p>
            <p className="mt-3">
              Consulte a{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="https://policies.google.com/privacy?hl=pt-BR"
              >
                Política de Privacidade do Google
              </a>
              , a{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="https://developers.google.com/admob/android/privacy/play-data-disclosure?hl=pt-br"
              >
                divulgação de dados do Google Mobile Ads para Android
              </a>{' '}
              e a{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="https://developers.google.com/admob/ios/privacy/data-disclosure"
              >
                divulgação de dados do Google Mobile Ads para iOS
              </a>{' '}
              para detalhes atualizados sobre o SDK.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Minha Reforma Pro e compras nas lojas
            </h2>
            <p>
              A compra única do Minha Reforma Pro remove os anúncios e libera a
              exportação de relatórios em PDF. A compra e a restauração são
              processadas pela Google Play ou pela Apple App Store, conforme o
              aparelho, e seguem os termos e práticas de privacidade da loja.
              O app recebe o resultado necessário para liberar o Pro e mantém
              localmente uma indicação desse acesso; não recebe os dados do
              cartão ou da forma de pagamento usados na loja. A restauração é
              feita no mesmo ecossistema de loja da compra.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Relatórios e compartilhamento
            </h2>
            <p>
              O relatório PDF Pro é gerado no aparelho a partir dos dados locais
              da obra. Se você escolher exportá-lo ou compartilhá-lo, o sistema
              operacional mostrará os destinos disponíveis e o arquivo será
              entregue ao aplicativo ou serviço que você selecionar. O destino
              escolhido poderá tratar e armazenar o relatório conforme os
              próprios termos e práticas de privacidade. A Help DEV não recebe
              automaticamente uma cópia do PDF.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Retenção, exclusão e escolhas
            </h2>
            <p>
              Os dados permanecem no aparelho até que você limpe os dados do
              Minha Reforma nas configurações do sistema ou desinstale o
              aplicativo. Registros ocultados ou removidos da visualização
              podem continuar no banco local da instalação. Limpar os dados do
              app ou desinstalá-lo não remove cópias que já estejam em backups
              do sistema, relatórios PDF exportados ou serviços de terceiros;
              gerencie essas cópias no aparelho ou no destino correspondente.
              Apagar os dados locais também pode remover a indicação local do
              Pro; compras elegíveis podem ser restauradas pela loja usada para
              comprar.
            </p>
            <p className="mt-3">
              Você pode alterar as preferências de anúncios pelo acesso
              “Privacidade e anúncios” no app quando o UMP disponibilizar essa
              opção, além dos controles de anúncios e privacidade do aparelho e
              da conta Google ou Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Direitos e contato
            </h2>
            <p>
              Para dúvidas ou solicitações relacionadas a esta política ou a
              dados pessoais tratados pela Help DEV, entre em contato com
              Guilherme Biff Zarelli pelo e-mail{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="mailto:gbzarelli@helpdev.com.br"
              >
                gbzarelli@helpdev.com.br
              </a>
              . Como os dados das obras ficam localmente no seu aparelho e não
              são enviados à Help DEV, a equipe não consegue consultar,
              corrigir ou excluir remotamente esses registros. Você pode
              apagá-los limpando os dados do app nas configurações do aparelho
              ou desinstalando-o. Quando aplicável, você também pode solicitar
              informações e exercer os direitos de acesso, correção ou
              eliminação previstos na legislação de proteção de dados. Se você
              enviar um e-mail, inclua somente as informações necessárias para
              explicar a solicitação; a mensagem poderá ser mantida pelo tempo
              necessário para respondê-la e cumprir obrigações aplicáveis.
              Consulte também a{' '}
              <a
                className="text-blue-700 underline hover:text-blue-900"
                href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
              >
                Lei Geral de Proteção de Dados Pessoais (LGPD)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Alterações desta política
            </h2>
            <p>
              Esta política poderá ser atualizada quando houver mudanças no app,
              nos serviços integrados ou nas práticas de tratamento. A data de
              vigência no início da página indicará a versão atual. Se houver
              mudanças relevantes, a Help DEV atualizará esta página e as
              informações aplicáveis nas lojas.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
