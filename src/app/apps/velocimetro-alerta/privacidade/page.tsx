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

const updatedAt = '27 de outubro de 2026';

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
              identificador <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.velocimetroalerta.v2</code>.
              Os recursos locais podem ser usados sem conta. Uma conta Google é necessária para sincronizar algumas
              preferências ou conectar o Strava. O aplicativo não oferece compras ou assinaturas dentro do app.
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
              dados no Firebase. Se você optar por enviar uma atividade ao Strava, os dados do arquivo GPX seguem
              diretamente do aparelho para o Strava, conforme descrito abaixo. Os dados enviados ao Google Maps SDK ao
              exibir um mapa estão descritos na seção abaixo. A permissão de localização é necessária para os recursos de velocidade e
              rastreamento; você pode recusá-la ou revogá-la nas configurações do Android, mas esses recursos podem
              deixar de funcionar.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Mapas e dados enviados ao Google</h2>
            <p>
              O app usa o Maps SDK for Android para mostrar mapas de atividades. Para carregar o mapa, solicitações
              enviadas ao Google incluem a área exibida; essa área pode revelar a região do percurso enquanto o mapa
              está aberto. O SDK coleta automaticamente metadados do dispositivo e das solicitações, como sistema
              operacional, modelo e fabricante do aparelho e versão do SDK, além do endereço IP, de um identificador
              pseudônimo específico do Maps SDK, de métricas de falhas e de stack traces de falhas dentro do SDK.
            </p>
            <p className="mt-3">
              Conforme o uso do mapa e das APIs de câmera, o SDK também pode coletar eventos de interação, como mover
              ou aplicar zoom no mapa. Esses dados são enviados pelo SDK diretamente ao Google para fornecer e
              melhorar os serviços do Maps. A Help DEV não recebe esses dados nos seus servidores. O Google trata
              esses dados conforme a{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=pt-BR">
                Política de Privacidade do Google
              </a>.
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
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Conta Google, Firebase e preferências</h2>
            <p>
              O login Google é opcional para o uso local e necessário para sincronizar preferências e conectar o
              Strava. Quando você entra, o Firebase Authentication processa identificadores da conta e informações de
              perfil disponibilizadas pelo Google, como nome e e-mail. O Firebase Authentication opera em centros de
              dados nos Estados Unidos. O Google trata esses dados conforme sua{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=pt-BR">
                Política de Privacidade
              </a>.
            </p>
            <p className="mt-3">
              Se você escolher sincronizar, um conjunto limitado de preferências — incluindo opções de alertas,
              intervalos, zonas de frequência cardíaca e a opção de sincronização automática — fica associado à sua
              conta no Cloud Firestore do Firebase. O banco e as Cloud Functions do projeto estão configurados na
              região de São Paulo; outros dados de serviço do Firebase podem ser processados pela infraestrutura global
              do Google. As atividades salvas, arquivos GPX e estados de envio continuam no aparelho e não são enviados
              ao Firebase. Mais informações estão na página de{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://firebase.google.com/support/privacy">
                privacidade e segurança do Firebase
              </a>.
            </p>
            <p className="mt-3">
              Preferências e atividades locais permanecem no armazenamento do aplicativo. Conforme as configurações do
              aparelho e da conta, o Android pode incluí-las em um backup ou transferi-las para outro dispositivo; esses
              backups são administrados pelo Android e pelo serviço de backup escolhido.
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
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Conexão e envio de atividades ao Strava</h2>
            <p>
              Para conectar uma conta, você autoriza o Strava pelo navegador com a permissão de criar atividades
              (<code>activity:write</code>). O código temporário de autorização é processado pelas Cloud Functions; os
              tokens de acesso e renovação ficam no Firestore em um registro privado da sua conta. Quando a integração
              estiver ativa, o segredo do aplicativo Strava fica no Google Secret Manager. Para enviar uma atividade, a função devolve ao aparelho
              um token de acesso de curta duração, usado para enviar o GPX diretamente à API do Strava. A Help DEV não
              recebe o arquivo GPX nem as coordenadas da atividade pelo Firebase.
            </p>
            <p className="mt-3">
              O envio manual transmite a atividade escolhida nos detalhes. Se você ativar <strong>Sincronizar
              automático</strong>, atividades elegíveis salvas depois dessa escolha podem ser enviadas automaticamente;
              atividades antigas não são enviadas em lote. O GPX pode conter trajeto, coordenadas, horários, elevação e,
              quando disponíveis, frequência cardíaca, cadência, temperatura e umidade. O app também envia o nome, o
              tipo e um identificador do arquivo. O Strava processa e armazena esses dados de acordo com a{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://www.strava.com/legal/privacy?hl=pt-BR">
                Política de Privacidade do Strava
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Anúncios, análise e identificadores</h2>
            <p>
              O app exibe um anúncio intersticial ao abrir Minhas atividades e um banner na parte inferior da tela
              Configurações. Para fornecer esses anúncios, o Google Mobile Ads SDK coleta e compartilha
              automaticamente dados como endereço IP (que pode estimar a região geral do aparelho), interações com o
              app e anúncios, informações de diagnóstico e desempenho e identificadores do aparelho ou da conta,
              incluindo o ID de publicidade do Android e o App Set ID quando disponíveis. O ID de publicidade pode ser
              redefinido ou excluído nas configurações de privacidade do Android. Os dados do SDK são criptografados em
              trânsito usando TLS.
            </p>
            <p className="mt-3">
              O Google e os parceiros de publicidade podem processar esses dados para exibir e medir anúncios,
              analisar o desempenho e prevenir fraude. A personalização depende das escolhas de consentimento quando
              exigidas, das configurações disponíveis e das leis aplicáveis. O app usa o SDK Google User Messaging
              Platform (UMP) para atualizar o status de consentimento no início do uso e apresentar as opções
              necessárias; quando uma opção de privacidade for exigida, ela estará disponível em Configurações. O
              código do app não inclui coordenadas, percursos salvos ou valores de sensores Bluetooth nos pedidos de
              anúncios. A Help DEV não recebe esses dados brutos em servidores próprios; o Google os processa conforme
              sua{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=pt-BR">
                Política de Privacidade
              </a>{' '}
              e a documentação sobre{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://developers.google.com/admob/android/privacy/play-data-disclosure">
                dados coletados pelo SDK de anúncios
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Público</h2>
            <p>
              O público declarado para o app na Google Play é formado por adolescentes de 13 a 17 anos e adultos. O app
              não foi desenvolvido para crianças menores de 13 anos. O app limita a classificação máxima do conteúdo
              dos anúncios a T. Os dados de localização e os valores dos sensores não são incluídos nos pedidos de
              anúncios.
            </p>
          </section>

          <section id="exclusao-conta">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Retenção e exclusão de dados</h2>
            <p>
              As preferências, atividades salvas e rotas permanecem no dispositivo até você excluí-las em Minhas
              atividades, limpar os dados do app nas configurações do Android ou desinstalá-lo. Preferências sincronizadas
              ficam no Firestore enquanto o registro da conta existir; sair da conta Google no app não as exclui.
              Quando a desconexão do Strava é concluída pelo app, a autorização é revogada e os tokens armazenados são
              removidos. Atividades já enviadas ficam na conta Strava e devem ser excluídas por você diretamente no
              Strava. Arquivos GPX exportados e cópias em backups devem ser excluídos no serviço ou dispositivo onde
              foram salvos.
            </p>
            <p className="mt-3">
              Para solicitar a exclusão da conta Firebase usada pelo aplicativo, das preferências na nuvem e dos tokens
              Strava associados, use o{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="mailto:gbzarelli@gmail.com?subject=Exclus%C3%A3o%20de%20conta%20-%20Veloc%C3%ADmetro%20Alerta">
                e-mail de suporte da Help DEV
              </a>{' '}
              e informe o e-mail da conta Google usada no app. A solicitação remove a autorização e os tokens Strava
              armazenados, mas não remove atividades já enviadas à sua conta
              Strava nem os arquivos GPX que continuam no dispositivo; esses itens devem ser removidos nos respectivos
              serviços ou no app.
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
              <code className="break-all rounded bg-gray-100 px-1">br.com.helpdev.velocimetroalerta.v2</code>.
              Local features can be used without an account. A Google account is required to sync some preferences or
              connect Strava. The app does not offer in-app purchases or subscriptions.
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
              Location and activity metrics are processed on your device. Help DEV does not receive them through
              Firebase. If you choose to send an activity to Strava, the GPX file goes directly from your device to
              Strava, as described below. Data sent to the Google Maps SDK when a map is shown is described below.
              Location access is required for speed and tracking features; you can deny or revoke it in Android
              settings, but those features may stop working.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Maps and data sent to Google</h3>
            <p>
              The app uses the Maps SDK for Android to show activity maps. To load a map, requests sent to Google
              include the area being displayed; this area may reveal the route region while the map is open. The SDK
              automatically collects device and request metadata, such as operating system, device model and brand,
              and SDK version, as well as IP address, a Maps SDK-specific pseudonymous identifier, crash metrics, and
              stack traces for crashes inside the SDK.
            </p>
            <p className="mt-3">
              Depending on how the map and camera APIs are used, the SDK may also collect interaction events such as
              panning and zooming. The SDK sends this data directly to Google to provide and improve Maps services.
              Help DEV does not receive this data on its servers. Google handles it under the{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=en">
                Google Privacy Policy
              </a>.
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
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Google account, Firebase, and preferences</h3>
            <p>
              Google sign-in is optional for local use and required to sync preferences and connect Strava. When you
              sign in, Firebase Authentication processes account identifiers and profile information made available by
              Google, such as your name and email address. Firebase Authentication operates from data centers in the
              United States. Google handles this data under its{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=en">
                Privacy Policy
              </a>.
            </p>
            <p className="mt-3">
              If you choose to sync, a limited set of preferences — including alert options, intervals, heart-rate
              zones, and the automatic-sync setting — is associated with your account in Firebase Cloud Firestore. The
              database and Cloud Functions are configured in the São Paulo region; other Firebase service data may be
              processed across Google’s global infrastructure. Saved activities, GPX files, and upload statuses remain
              on your device and are not sent to Firebase. See Firebase’s{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://firebase.google.com/support/privacy">
                privacy and security information
              </a>.
            </p>
            <p className="mt-3">
              Preferences and activities remain in the app’s local storage. Depending on your device and account
              settings, Android may include them in a backup or transfer them to another device; Android and the backup
              service you choose manage those backups.
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
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Strava connection and activity uploads</h3>
            <p>
              To connect an account, you authorize Strava in a browser with permission to create activities
              (<code>activity:write</code>). Cloud Functions process the temporary authorization code; access and
              refresh tokens are stored in a private Firestore record for your account. When the integration is active,
              the Strava application secret is held in Google Secret Manager. When an activity is sent, a function returns a short-lived access token
              to the device, which uploads the GPX directly to Strava’s API. Help DEV does not receive the GPX file or
              activity coordinates through Firebase.
            </p>
            <p className="mt-3">
              A manual upload sends the activity selected in its details. If you turn on <strong>Automatic sync</strong>,
              eligible activities saved after you opt in may be uploaded automatically; existing activities are not
              uploaded in a batch. A GPX file may contain the route, coordinates, timestamps, elevation, and, when
              available, heart rate, cadence, temperature, and humidity. The app also sends the activity name, type, and
              a file identifier. Strava processes and stores this data under its{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://www.strava.com/legal/privacy?hl=en-US">
                Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Ads, analytics, and identifiers</h3>
            <p>
              The app displays an interstitial ad when you open My activities and a banner at the bottom of Settings.
              To provide these ads, the Google Mobile Ads SDK automatically collects and shares data such as IP address
              (which may estimate a device&apos;s general location), app and ad interactions, diagnostic and performance
              information, and device or account identifiers, including the Android Advertising ID and App Set ID when
              available. You can reset or delete the Advertising ID in Android privacy settings. SDK data is encrypted
              in transit using TLS.
            </p>
            <p className="mt-3">
              Google and advertising partners may process this data to serve and measure ads, analyze performance, and
              prevent fraud. Personalization depends on consent choices where required, available settings, and
              applicable law. The app uses the Google User Messaging Platform (UMP) SDK to update consent status at
              startup and present required choices; when a privacy-options entry point is required, it is available in
              Settings. The app&apos;s code does not include GPS coordinates, saved routes, or Bluetooth sensor values in
              ad requests. Help DEV does not receive this raw SDK data on its own servers. Google processes it under
              its{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://policies.google.com/privacy?hl=en">
                Privacy Policy
              </a>{' '}
              and its documentation about{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="https://developers.google.com/admob/android/privacy/play-data-disclosure">
                data collected by the ads SDK
              </a>.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Audience</h3>
            <p>
              The declared Google Play audience is teens aged 13–17 and adults. The app is not designed for children
              under 13. The maximum ad content rating is T. Location and sensor values are not included in ad requests.
            </p>
          </section>

          <section id="account-deletion">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Data retention and deletion</h3>
            <p>
              Preferences, saved activities, and routes remain on your device until you delete them in My activities,
              clear the app&apos;s data in Android settings, or uninstall the app. Synced preferences remain in Firestore
              while the account record exists; signing out of Google in the app does not delete them. When you
              disconnect Strava in the app, its authorization is revoked and stored tokens are removed. Activities
              already uploaded remain in your Strava account and must be deleted there. Delete exported GPX files and
              backup copies in the service or device where they were saved.
            </p>
            <p className="mt-3">
              To request deletion of the Firebase account used by the app, its cloud preferences, and associated Strava
              tokens, use Help DEV&apos;s{' '}
              <a className="text-blue-700 underline hover:text-blue-900" href="mailto:gbzarelli@gmail.com?subject=Account%20deletion%20-%20Veloc%C3%ADmetro%20Alerta">
                support email
              </a>{' '}
              and include the email address of the Google account used in the app. The request removes the stored Strava
              authorization and tokens, but it does not remove
              activities already uploaded to your Strava account or GPX files that remain on your device; remove those
              items in their respective services or in the app.
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
