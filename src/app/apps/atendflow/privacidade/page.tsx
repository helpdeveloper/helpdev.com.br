import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade / Privacy Policy — AtendFlow',
  description: 'Política de privacidade em português e inglês do aplicativo AtendFlow para Android.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const updatedAt = '17 de outubro de 2026';
const updatedAtEnglish = 'October 17, 2026';

export default function AtendFlowPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-10 shadow-sm sm:px-10">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Help DEV · Aplicativos</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Política de Privacidade / Privacy Policy</h1>
          <p className="mt-3 text-lg text-gray-700">AtendFlow</p>
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
              Esta política se aplica ao aplicativo AtendFlow para Android, publicado pela Help DEV com o
              identificador <code className="break-all rounded bg-gray-100 px-1">com.helpdev.atendflow</code>.
              O aplicativo organiza clientes, agendamentos, atendimentos, valores e cobranças. O acesso exige o
              cadastro de um administrador local com login e senha; não é criada uma conta em servidores da Help DEV.
              O app não oferece compras ou assinaturas dentro do aplicativo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Dados de clientes e atendimentos</h2>
            <p>
              O app armazena as informações que você cadastra, como nome, CPF, e-mail, telefone, endereço e preferência
              de documento do cliente, além de datas, horários, duração, recorrência, situação e observações dos
              atendimentos. Também registra valores, cobranças e pagamentos informados por você. Campos de texto livre
              podem conter informações pessoais ou sensíveis, conforme o conteúdo que você inserir.
            </p>
            <p className="mt-3">
              Esses dados são usados no dispositivo para organizar a agenda, apresentar históricos, calcular valores
              e gerar relatórios. A Help DEV não recebe automaticamente esses cadastros em seus servidores e não mantém
              uma cópia remota da agenda. O app não solicita acesso à localização, a sensores Bluetooth ou à agenda de
              contatos do aparelho.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Autenticação e biometria</h2>
            <p>
              O login do administrador e os dados necessários para verificar a senha ficam no armazenamento local.
              A senha é armazenada como um hash com salt, e não como texto simples. Na versão abrangida por esta
              política, o acesso utiliza autenticação local, sem login com Google.
            </p>
            <p className="mt-3">
              Se você utilizar a opção de biometria em um aparelho compatível, a verificação é realizada pelo Android.
              O AtendFlow recebe o resultado da autenticação e não acessa nem armazena imagens de impressões digitais,
              reconhecimento facial ou outros modelos biométricos. O acesso por login e senha continua disponível.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Preferências e armazenamento</h2>
            <p>
              Os cadastros, agendamentos, informações financeiras, credenciais e preferências ficam no armazenamento
              local do aplicativo. O app não envia automaticamente esses dados para um servidor da Help DEV e não
              mantém um serviço próprio de sincronização ou armazenamento em nuvem. Os recursos principais de agenda,
              clientes e relatórios funcionam sem conexão com a internet.
            </p>
            <p className="mt-3">
              O aplicativo desabilita o backup automático em nuvem do Android. Recursos de transferência de dados
              entre aparelhos podem variar conforme o fabricante e o sistema operacional; quando disponíveis, são
              administrados pelo sistema ou pelo serviço utilizado, e não pela Help DEV.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Backups e compartilhamento</h2>
            <p>
              A exportação de backup é iniciada por você. O app gera uma cópia do banco de dados, incluindo usuários,
              dados de autenticação, clientes, agendamentos, observações, valores e situações de cobrança e pagamento.
              O seletor de arquivos do Android permite escolher onde salvar ou de onde restaurar o arquivo, inclusive
              em serviços como Google Drive, se estiverem disponíveis no aparelho. A restauração substitui os dados
              locais pelos dados do backup escolhido.
            </p>
            <p className="mt-3">
              O arquivo de backup não recebe criptografia adicional pelo AtendFlow e não é protegido pela senha de
              entrada no aplicativo. Depois de exportado, o arquivo fica sob seu controle. Guarde-o em um local
              protegido e compartilhe-o apenas com pessoas ou serviços autorizados por você.
            </p>
            <p className="mt-3">
              Quando você aciona os recursos de WhatsApp ou e-mail, o app encaminha ao aplicativo ou serviço escolhido
              o número ou endereço do destinatário e o conteúdo da mensagem ou relatório. Conforme o recurso, isso
              pode incluir nomes, contatos, datas, horários, valores e informações de cobrança dos clientes.
              A abertura de um link do WhatsApp pode comunicar o número e o texto ao serviço antes da confirmação
              do envio da mensagem. Esses compartilhamentos são iniciados por você e não enviam uma cópia à Help DEV.
              Os destinos escolhidos tratam as informações conforme seus próprios termos e práticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Anúncios, análise e identificadores</h2>
            <p>
              O AtendFlow não exibe anúncios e não integra SDKs de publicidade, análise ou atribuição. O app não usa
              o ID de publicidade do Android e não envia dados de clientes, atendimentos ou cobranças para a Help DEV
              para publicidade ou criação de perfis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Público</h2>
            <p>
              O aplicativo é voltado a profissionais que gerenciam clientes e atendimentos e não é direcionado ao uso
              por crianças. Quem utiliza o app escolhe quais dados de clientes registrar e compartilhar. Cadastre
              apenas as informações necessárias e utilize os recursos de compartilhamento com cuidado.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Retenção e exclusão</h2>
            <p>
              Os dados permanecem no armazenamento local até serem removidos pelas opções disponíveis no app ou até
              você limpar todos os dados do aplicativo nas configurações do Android ou desinstalá-lo. A inativação de
              um cliente não exclui seu cadastro nem seu histórico. Para remover o administrador local e todos os dados
              da instalação, use a opção de limpar armazenamento ou dados nas configurações do Android.
            </p>
            <p className="mt-3">
              Limpar os dados ou desinstalar o aplicativo não exclui backups exportados, relatórios e mensagens que
              já tenham sido enviados ou salvos em outros aplicativos ou serviços. Essas cópias devem ser excluídas
              no destino correspondente; restaurar um backup antigo pode reintroduzir dados que ele ainda contenha.
              Para solicitações sobre dados de um cliente, procure o profissional que os cadastrou. A Help DEV não
              possui acesso remoto ao banco local para consultar, corrigir ou excluir esses registros.
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
          <p className="text-sm text-gray-500">Effective from {updatedAtEnglish}</p>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">App covered by this policy</h3>
            <p>
              This policy applies to the AtendFlow Android app, published by Help DEV with package{' '}
              <code className="break-all rounded bg-gray-100 px-1">com.helpdev.atendflow</code>.
              The app organizes clients, appointments, services, fees, and billing. Access requires a local
              administrator registration with a username and password; no account is created on Help DEV servers.
              The app does not offer in-app purchases or subscriptions.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Client and appointment data</h3>
            <p>
              The app stores information you enter, such as client names, Brazilian taxpayer IDs (CPF), email
              addresses, phone numbers, addresses, and document preferences, as well as appointment dates, times,
              durations, recurrence, statuses, and notes. It also records fees, billing, and payments you enter.
              Free-text fields may contain personal or sensitive information, depending on what you enter.
            </p>
            <p className="mt-3">
              This data is used on your device to organize the calendar, display histories, calculate amounts, and
              generate reports. Help DEV does not automatically receive these records on its servers and does not
              keep a remote copy of your calendar. The app does not request access to your location, Bluetooth sensors,
              or the device&apos;s contacts.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Authentication and biometrics</h3>
            <p>
              The administrator username and information used to verify the password are stored locally.
              The password is stored as a salted hash rather than plain text. In the version covered by this policy,
              access uses local authentication, without Google sign-in.
            </p>
            <p className="mt-3">
              If you use biometric authentication on a compatible device, Android performs the verification.
              AtendFlow receives the authentication result and does not access or store fingerprint images, facial
              recognition data, or other biometric templates. Username and password access remains available.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Preferences and storage</h3>
            <p>
              Client records, appointments, financial information, credentials, and preferences remain in the app&apos;s
              local storage. The app does not automatically send this data to a Help DEV server and does not maintain
              its own cloud storage or synchronization service. Core calendar, client, and reporting features work
              without an internet connection.
            </p>
            <p className="mt-3">
              The app disables Android&apos;s automatic cloud backup. Device-to-device transfer features may vary by
              manufacturer and operating system; when available, they are managed by the system or service used,
              rather than Help DEV.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Backups and sharing</h3>
            <p>
              You initiate each backup export. The app creates a database copy containing users, authentication data,
              clients, appointments, notes, fees, and billing and payment statuses. Android&apos;s file picker lets you
              choose where to save or restore the file, including services such as Google Drive when available on your
              device. Restoring a backup replaces local data with the data in the selected backup.
            </p>
            <p className="mt-3">
              AtendFlow does not apply additional encryption to the backup file, and the app login password does not
              protect that file. After export, the file is under your control. Keep it in a protected location and
              share it only with people or services you authorize.
            </p>
            <p className="mt-3">
              When you use WhatsApp or email features, the app passes the recipient&apos;s number or address and the
              message or report content to the selected app or service. Depending on the feature, this may include
              client names, contact details, dates, times, amounts, and billing information. Opening a WhatsApp link
              may communicate the number and text to that service before you confirm sending the message.
              You initiate these actions, and no copy is sent to Help DEV. The destinations you choose handle the
              information under their own privacy terms and practices.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Ads, analytics, and identifiers</h3>
            <p>
              AtendFlow does not show ads and does not integrate advertising, analytics, or attribution SDKs.
              The app does not use the Android Advertising ID or send client, appointment, or billing data to Help DEV
              for advertising or profiling.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Audience</h3>
            <p>
              The app is intended for professionals who manage clients and appointments and is not directed at
              children. The person using the app chooses which client information to record and share. Enter only
              the information you need and use sharing features carefully.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Retention and deletion</h3>
            <p>
              Data remains in local storage until removed through the app&apos;s available options, until you clear all
              app data in Android settings, or until you uninstall the app. Deactivating a client does not delete the
              record or its history. To remove the local administrator and all data from the installation, use the
              clear storage or clear data option in Android settings.
            </p>
            <p className="mt-3">
              Clearing app data or uninstalling the app does not delete exported backups, reports, or messages already
              sent or saved in other apps or services. Those copies must be deleted at the relevant destination;
              restoring an older backup may reintroduce data it still contains. For requests about a client&apos;s data,
              contact the professional who entered it. Help DEV has no remote access to the local database to view,
              correct, or delete those records.
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
