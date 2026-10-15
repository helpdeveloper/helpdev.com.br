import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Consulta Endereço',
  description: 'Política de privacidade do aplicativo Consulta Endereço para Android.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const updatedAt = '15 de outubro de 2026';

export default function ConsultaEnderecoPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-10 shadow-sm sm:px-10">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Help DEV · Aplicativos</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-3 text-lg text-gray-700">Consulta Endereço</p>
          <p className="mt-4 text-sm text-gray-500">Vigente desde {updatedAt}</p>
        </header>

        <div className="space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Aplicativo abrangido</h2>
            <p>
              Esta política se aplica ao aplicativo Consulta Endereço para Android, publicado com o identificador{' '}
              <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.consultaendereco</code>. O app não exige
              criação de conta e não oferece compras ou assinaturas dentro do aplicativo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Consultas de endereços e CEPs</h2>
            <p>
              Quando você pesquisa um endereço por nome ou informa um CEP, o app envia o termo pesquisado ao serviço de
              geocodificação disponibilizado pelo Android ou consulta os serviços públicos ViaCEP e BrasilAPI para
              obter os dados de endereço. A BrasilAPI pode ser consultada como alternativa quando o ViaCEP não retorna
              um endereço válido ou está indisponível. Esses serviços recebem a consulta e dados técnicos da conexão,
              como o endereço IP, e tratam as informações conforme suas próprias políticas e condições.
            </p>
            <p className="mt-3">
              As consultas não são enviadas a um servidor próprio da Help DEV. Consulte as políticas dos serviços
              externos para saber como eles tratam dados de acesso e requisições: <a className="text-blue-700 underline hover:text-blue-900" href="https://viacep.com.br/">ViaCEP</a>,{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://brasilapi.com.br/">BrasilAPI</a>{' '}
              e os serviços Google associados ao Android e ao Maps.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Localização e mapas</h2>
            <p>
              Ao abrir o recurso de localização atual, o app solicita acesso à localização aproximada ou precisa do
              dispositivo para mostrar sua posição no mapa e obter informações de endereço próximas. A localização só é
              usada enquanto você utiliza esse recurso. O app usa os serviços Google Play Services de localização e
              Google Maps; esses provedores podem receber dados necessários para fornecer mapa, localização e
              geocodificação, conforme os próprios termos e práticas de privacidade.
            </p>
            <p className="mt-3">
              Você pode negar ou revogar a permissão de localização nas configurações do Android. Sem ela, os recursos
              que dependem da posição atual deixam de funcionar; as consultas por texto ou CEP continuam disponíveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Favoritos e armazenamento local</h2>
            <p>
              Os endereços que você salva como favoritos ficam no armazenamento local do aplicativo no dispositivo.
              A Help DEV não mantém uma conta nem um histórico remoto de consultas ou favoritos. Como o app permite
              backup do Android, os dados locais poderão ser incluídos em um backup ou transferidos pelo serviço de
              backup configurado no dispositivo, sob controle das configurações e da conta Google do usuário.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Anúncios e identificadores</h2>
            <p>
              O app exibe anúncios fornecidos pelo Google Mobile Ads (AdMob). Para carregar, medir e proteger anúncios,
              o Google e seus parceiros podem tratar dados como identificadores do dispositivo e de publicidade,
              endereço IP, interações com anúncios, informações de desempenho e diagnóstico e dados aproximados de
              localização derivados do IP ou da localização do dispositivo, conforme as configurações e permissões
              aplicáveis. A Help DEV não recebe esses dados para manter um perfil próprio. O tratamento feito pelo
              Google segue a <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=pt-BR">Política de Privacidade do Google</a> e as{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://support.google.com/admob/answer/6128543?hl=pt-BR">informações de privacidade do AdMob</a>.
            </p>
            <p className="mt-3">
              As opções de anúncios e privacidade disponibilizadas pelo Google podem variar conforme sua região e as
              configurações da conta ou do dispositivo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Público</h2>
            <p>
              O app é destinado a adolescentes a partir de 13 anos e adultos e não foi desenvolvido para crianças
              menores de 13 anos. Ele não exige cadastro e não solicita dados pessoais para criar uma conta.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Retenção e exclusão</h2>
            <p>
              Os favoritos permanecem no dispositivo até que você os remova, limpe os dados do app nas configurações
              do Android ou desinstale o aplicativo. Cópias incluídas em backups devem ser gerenciadas nas configurações
              do serviço de backup. Consultas enviadas a provedores externos e dados tratados pelo Google para anúncios
              seguem os prazos e controles definidos por esses provedores.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Alterações e contato</h2>
            <p>
              Esta política poderá ser atualizada quando o app ou as práticas descritas mudarem. A data de vigência no
              início da página indica a versão atual. Para dúvidas ou solicitações relacionadas a esta política, entre
              em contato com Guilherme Biff Zarelli pelo e-mail{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="mailto:gbzarelli@helpdev.com.br">gbzarelli@helpdev.com.br</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
