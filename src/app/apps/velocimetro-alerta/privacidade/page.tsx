import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Velocímetro Alerta',
  description: 'Política de privacidade do aplicativo gratuito Velocímetro Alerta para Android.',
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

export default function VelocimetroAlertaPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-10 shadow-sm sm:px-10">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Help DEV · Aplicativos</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-3 text-lg text-gray-700">Velocímetro Alerta</p>
          <p className="mt-4 text-sm text-gray-500">Vigente desde {updatedAt}</p>
        </header>

        <div className="space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Aplicativo abrangido</h2>
            <p>
              Esta política se aplica ao aplicativo gratuito Velocímetro Alerta para Android, publicado com o
              identificador <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.velocimetroalerta</code>.
              O aplicativo não exige criação de conta e não oferece compras ou assinaturas dentro do app.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Localização e atividades</h2>
            <p>
              Quando você inicia o rastreamento, o app usa a localização precisa do dispositivo para calcular velocidade,
              distância e elevação e para formar o trajeto da atividade. O rastreamento pode continuar com a tela
              desligada enquanto a atividade iniciada por você estiver em andamento; nesse período, o Android mantém
              uma notificação de serviço ativo. O app não inicia o rastreamento automaticamente.
            </p>
            <p className="mt-3">
              A localização e as métricas da atividade são processadas no dispositivo. A Help DEV não recebe esses
              dados em seus servidores, não mantém uma conta de usuário para o app e o app não mantém um histórico
              remoto das atividades. A permissão de localização é necessária para os recursos de velocidade e
              rastreamento; você pode recusá-la ou revogá-la nas configurações do Android, mas esses recursos podem
              deixar de funcionar.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Sensores Bluetooth e dados de saúde e fitness</h2>
            <p>
              Se você configurar um sensor Bluetooth compatível, o app poderá ler dados como frequência cardíaca e
              cadência durante a atividade. Esses dados são usados no dispositivo para exibir métricas e zonas de
              atividade. A permissão Bluetooth é usada para localizar ou conectar o sensor escolhido por você; esses
              dados não são enviados à Help DEV.
            </p>
            <p className="mt-3">
              As informações de frequência cardíaca e as demais métricas são recursos informativos de atividade física.
              O app não é um dispositivo médico, não faz diagnóstico e não substitui orientação profissional de saúde.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Preferências e armazenamento</h2>
            <p>
              Preferências do app, como limites de velocidade, alertas, sensores configurados e zonas de frequência
              cardíaca, ficam no armazenamento local do aplicativo. Conforme as configurações do aparelho e da conta,
              o Android pode incluir dados locais do app em um backup ou transferi-los para outro dispositivo. Esses
              backups são administrados pelo Android e pelo serviço de backup escolhido; a Help DEV não os controla.
            </p>
            <p className="mt-3">
              O app não envia automaticamente localização, métricas de atividade ou preferências para um servidor e não
              mantém um serviço próprio de histórico de atividades.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Exportação e compartilhamento de arquivos GPX</h2>
            <p>
              A exportação é iniciada por você. O app gera um arquivo GPX com os pontos do trajeto, coordenadas,
              horários e elevação; quando disponíveis, o arquivo também pode conter frequência cardíaca, cadência,
              temperatura e umidade. O seletor de arquivos do Android permite que você escolha onde salvar o arquivo.
              Se depois usar o compartilhamento do Android, o arquivo será enviado ao aplicativo ou serviço que você
              selecionar.
            </p>
            <p className="mt-3">
              Depois de exportado, o arquivo fica sob seu controle e pode conter dados precisos sobre o trajeto e a
              atividade. O destino escolhido passa a tratar o arquivo conforme os próprios termos e práticas de
              privacidade. Exclua a cópia no local de destino se não quiser mantê-la.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Anúncios, análise e identificadores</h2>
            <p>
              O Velocímetro Alerta não exibe anúncios e não integra SDKs de publicidade, análise ou atribuição. O app
              não usa o ID de publicidade do Android e não envia dados de atividade para a Help DEV para publicidade
              ou criação de perfis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Público</h2>
            <p>
              O público declarado para o app na Google Play é formado por adolescentes de 13 a 17 anos e adultos. O app
              não foi desenvolvido para crianças menores de 13 anos. O app não contém anúncios nem usa dados de
              atividade para publicidade.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Retenção e exclusão</h2>
            <p>
              As preferências permanecem no armazenamento local até você limpar os dados do app nas configurações do
              Android ou desinstalá-lo. Dados de uma atividade que não foram exportados não são mantidos em um
              histórico remoto da Help DEV. Arquivos GPX exportados e cópias em backups devem ser excluídos por você
              no serviço ou dispositivo em que foram salvos, conforme as opções desse destino.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Alterações e contato</h2>
            <p>
              Esta política poderá ser atualizada quando houver mudanças no aplicativo ou nas práticas descritas aqui.
              A data de vigência no início da página indicará a versão atual. Para dúvidas ou solicitações relacionadas
              a esta política, use o{' '}
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
