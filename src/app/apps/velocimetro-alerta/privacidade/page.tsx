import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade / Privacy Policy — Velocímetro Alerta',
  description: 'Política de privacidade em português e inglês do aplicativo gratuito Velocímetro Alerta para Android.',
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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Política de Privacidade / Privacy Policy</h1>
          <p className="mt-3 text-lg text-gray-700">Velocímetro Alerta</p>
          <p className="mt-4 text-sm text-gray-500">Vigente desde {updatedAt}</p>
          <nav aria-label="Language" className="mt-4 flex gap-4 text-sm">
            <a className="text-blue-700 underline hover:text-blue-900" href="#portugues">Português</a>
            <a className="text-blue-700 underline hover:text-blue-900" href="#english">English</a>
          </nav>
        </header>

        <div id="portugues" lang="pt-BR" className="space-y-8 leading-7 text-gray-700">
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
              Quando você inicia uma atividade, o app usa sua localização precisa para calcular velocidade, distância,
              elevação, registrar o percurso e gerar alertas de velocidade por voz, mesmo quando o app está em segundo
              plano ou a tela está apagada. O Android mantém uma notificação de serviço ativo, conforme as configurações
              de notificação. O app não inicia o rastreamento automaticamente.
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

        <div id="english" lang="en" className="mt-16 space-y-8 border-t border-gray-200 pt-10 leading-7 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">English version</h2>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">App covered by this policy</h3>
            <p>
              This policy applies to the free Velocímetro Alerta Android app, package
              <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.velocimetroalerta</code>.
              The app does not require an account and does not offer in-app purchases or subscriptions.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Location and activities</h3>
            <p>
              When you start an activity, the app uses your precise location to calculate speed, distance, and elevation,
              record your route, and provide spoken speed alerts, even while the app is in the background or the screen
              is off. Android keeps an ongoing foreground-service notification visible, subject to your notification
              settings. The app does not start tracking automatically.
            </p>
            <p className="mt-3">
              Location and activity metrics are processed on your device. Help DEV does not receive this data on its
              servers, the app does not require a user account, and the app does not keep a remote activity history.
              Location access is required for speed and tracking features; you can deny or revoke it in Android
              settings, but those features may stop working.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Bluetooth sensors and health and fitness data</h3>
            <p>
              If you configure a compatible Bluetooth sensor, the app may read data such as heart rate and cadence during
              an activity. This data is processed on your device to show metrics and activity zones. Bluetooth access
              lets the app find or connect to the sensor you selected; this data is not sent to Help DEV.
            </p>
            <p className="mt-3">
              Heart-rate information and other metrics are for general fitness information. The app is not a medical
              device, does not diagnose conditions, and does not replace professional medical advice.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Preferences and storage</h3>
            <p>
              App preferences, including speed limits, alerts, configured sensors, and heart-rate zones, are stored
              locally by the app. Depending on your device and account settings, Android may include local app data in a
              backup or transfer it to another device. Android and the backup service you choose manage those backups;
              Help DEV does not control them.
            </p>
            <p className="mt-3">
              The app does not automatically send location, activity metrics, or preferences to a server and does not
              maintain its own remote activity-history service.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">GPX export and file sharing</h3>
            <p>
              You initiate each export. The app creates a GPX file with route points, coordinates, timestamps, and
              elevation; when available, it may also include heart rate, cadence, temperature, and humidity. Android&apos;s
              file picker lets you choose where to save it. If you later use Android sharing, the file is sent to the app
              or service you select.
            </p>
            <p className="mt-3">
              After export, the file is under your control and may contain precise route and activity information. The
              destination you choose handles the file under its own privacy terms and practices. Delete the copy from
              that destination if you no longer want to keep it.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Ads, analytics, and identifiers</h3>
            <p>
              Velocímetro Alerta does not show ads and does not integrate advertising, analytics, or attribution SDKs.
              The app does not use the Android Advertising ID or send activity data to Help DEV for advertising or
              profiling.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Audience</h3>
            <p>
              The declared Google Play audience is teens aged 13–17 and adults. The app is not designed for children
              under 13. It contains no ads and does not use activity data for advertising.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Retention and deletion</h3>
            <p>
              Preferences remain in local app storage until you clear the app&apos;s data in Android settings or uninstall
              the app. Activity data that you have not exported is not kept in a remote Help DEV history. You are
              responsible for deleting exported GPX files and backup copies from the service or device where they were
              saved, using that destination&apos;s available options.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Changes and contact</h3>
            <p>
              This policy may be updated when the app or the practices described here change. The effective date at the
              top of this page identifies the current version. For questions or requests about this policy, use Help
              DEV&apos;s{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://helpdev.com.br/#contato">
                contact channel
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
