export interface EditorialArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
  callout?: string;
}

export interface EditorialArticle {
  slug: string;
  title: string;
  description: string;
  topic: string;
  updatedAt: string;
  sourceName: string;
  sourceUrl: string;
  references: { label: string; url: string }[];
  sections: EditorialArticleSection[];
}

export const editorialArticles: EditorialArticle[] = [
  {
    slug: 'gzip-json-jackson-quando-comprimir',
    title: 'GZIP em JSON com Jackson: quando a compressão compensa',
    description:
      'Como o projeto gzip-json-jackson transforma objetos em JSON, comprime os bytes e os representa em Base64 — e por que o tamanho final precisa ser medido antes de adotar esse formato.',
    topic: 'Java · Jackson · Compressão',
    updatedAt: '2026-11-16',
    sourceName: 'Repositório gzip-json-jackson',
    sourceUrl: 'https://github.com/helpdeveloper/gzip-json-jackson',
    references: [
      { label: 'README e exemplos de uso', url: 'https://github.com/helpdeveloper/gzip-json-jackson/blob/master/README.md' },
      { label: 'Serializador GZIP', url: 'https://github.com/helpdeveloper/gzip-json-jackson/blob/master/src/main/java/br/com/helpdev/gzipjson/GzipSerializer.java' },
      { label: 'Desserializador GZIP', url: 'https://github.com/helpdeveloper/gzip-json-jackson/blob/master/src/main/java/br/com/helpdev/gzipjson/GzipDeserializer.java' },
    ],
    sections: [
      {
        heading: 'O que o formato faz',
        paragraphs: [
          'A biblioteca gzip-json-jackson adiciona uma convenção de serialização a classes marcadas com GzipSerializable. O serializador usa o ObjectMapper já associado ao JsonGenerator para produzir o JSON da classe, comprime essa representação com GZIP e grava os bytes como um valor binário do JSON.',
          'Como JSON não transporta bytes arbitrários diretamente, Jackson codifica o conteúdo binário em Base64. Na leitura, o desserializador desfaz Base64, descomprime os bytes e usa Jackson novamente para reconstruir o tipo original. O consumidor precisa conhecer esse contrato: o campo deixa de aparecer como um objeto JSON comum e passa a ser uma string Base64.'
        ],
        code: `@JsonDeserialize(using = GzipDeserializer.class)\n@JsonSerialize(using = GzipSerializer.class)\npublic interface GzipSerializable {}`
      },
      {
        heading: 'O custo escondido do Base64',
        paragraphs: [
          'GZIP pode reduzir bastante textos JSON longos e repetitivos. Mas esta implementação transporta o resultado comprimido dentro de JSON como Base64. A codificação Base64 costuma ocupar cerca de quatro caracteres para cada três bytes; por isso, compare o tamanho final codificado, e não apenas o tamanho do fluxo GZIP.',
          'Um payload pequeno pode ficar maior: há o custo fixo do cabeçalho GZIP, o custo de Base64 e o trabalho de CPU para comprimir e descomprimir. Um payload grande com nomes de campos repetidos pode se beneficiar mais, mas a proporção depende dos dados reais.'
        ],
        bullets: [
          'Meça o JSON original em bytes.',
          'Meça o resultado depois de GZIP e da codificação usada pelo transporte.',
          'Inclua tempo de CPU, alocação de memória e latência no teste.',
          'Repita a medição com amostras representativas, inclusive casos pequenos e pouco compressíveis.'
        ],
        callout: 'Não existe um limite universal de tamanho que torne a compressão vantajosa. A decisão depende do formato da mensagem, da rede e do custo aceitável de CPU.'
      },
      {
        heading: 'Como usar sem surpreender outros consumidores',
        paragraphs: [
          'A biblioteca permite marcar a classe com GzipSerializable e manter o ObjectMapper da aplicação. Isso torna a mudança local à classe, mas também muda o formato publicado. Um consumidor que espere receber {"name":"Ana"} não conseguirá ler uma string Base64 no lugar do objeto.',
          'Antes de ativar a anotação em um campo compartilhado, confirme o contrato com todos os produtores e consumidores. Documente a codificação, a compressão e a versão do formato; defina limites de tamanho antes da descompressão e trate dados inválidos como erro. Em APIs públicas, uma propriedade explícita como contentEncoding costuma deixar a intenção mais clara do que esconder a transformação no tipo Java.'
        ],
        code: `class DocumentoCompactado implements GzipSerializable {\n  private String conteudo;\n  // getters e setters\n}\n\nString json = objectMapper.writeValueAsString(documento);\nDocumentoCompactado original =\n    objectMapper.readValue(json, DocumentoCompactado.class);`
      },
      {
        heading: 'Um critério prático de adoção',
        paragraphs: [
          'Use o formato quando medições com dados reais demonstrarem redução do tamanho transmitido suficiente para compensar CPU e complexidade de compatibilidade. Se a mensagem já trafega em um protocolo com compressão de transporte, verifique se comprimir novamente traz ganho; dupla compressão pode gastar CPU sem reduzir os bytes de forma relevante.',
          'O repositório contém o serializador, o desserializador e exemplos com Jackson. Consulte o código-fonte para conferir o comportamento exato da versão que pretende usar.'
        ]
      }
    ]
  },
  {
    slug: 'arquitetura-hexagonal-java-fluxo-de-cadastro',
    title: 'Arquitetura hexagonal em Java: acompanhando um cadastro até o Kafka',
    description:
      'Um walkthrough do Java Architecture Template: validação no caso de uso, persistência por porta, publicação de CloudEvent e enriquecimento assíncrono do usuário.',
    topic: 'Java · Arquitetura · Kafka',
    updatedAt: '2026-11-16',
    sourceName: 'Java Architecture Template',
    sourceUrl: 'https://github.com/helpdeveloper/java-architecture-template',
    references: [
      { label: 'README em português', url: 'https://github.com/helpdeveloper/java-architecture-template/blob/main/README.pt.md' },
      { label: 'Caso de uso de cadastro', url: 'https://github.com/helpdeveloper/java-architecture-template/blob/main/application/src/main/java/br/com/helpdev/sample/core/usecases/UserCreatorUseCase.java' },
      { label: 'Listener Kafka', url: 'https://github.com/helpdeveloper/java-architecture-template/blob/main/application/src/main/java/br/com/helpdev/sample/adapters/input/kafka/UserEventListener.java' },
      { label: 'Caso de uso de enriquecimento', url: 'https://github.com/helpdeveloper/java-architecture-template/blob/main/application/src/main/java/br/com/helpdev/sample/core/usecases/UserEnricherUseCase.java' },
    ],
    sections: [
      {
        heading: 'Comece pelo fluxo, não pelas pastas',
        paragraphs: [
          'O Java Architecture Template demonstra um fluxo pequeno, mas concreto: a API recebe um pedido de cadastro, o caso de uso valida e salva o usuário, e então publica um evento. Um consumidor lê esse evento do Kafka, consulta um endereço externo e registra o dado associado ao usuário.',
          'Esse caminho ajuda a avaliar a arquitetura porque mostra onde ficam as regras, como dependências externas são representadas e o que acontece quando o trabalho passa a ser assíncrono.'
        ],
        code: `HTTP request\n  -> UserController\n  -> UserCreatorPort\n  -> UserCreatorUseCase\n       -> UserRepositoryPort\n       -> UserEventDispatcherPort\n            -> Kafka\n\nKafka user-events\n  -> UserEventListener\n  -> UserEnricherPort\n  -> UserEnricherUseCase\n       -> AddressClientPort\n       -> AddressRepositoryPort`
      },
      {
        heading: 'O caso de uso coordena a regra',
        paragraphs: [
          'UserCreatorUseCase recebe duas portas: UserRepositoryPort e UserEventDispatcherPort. Primeiro verifica User.isMajor(); se a regra falhar, lança UserIsNotMajorException. Se passar, persiste o usuário e publica o evento com o registro salvo. O caso de uso depende de interfaces do núcleo, enquanto os detalhes de banco e mensageria ficam nos adaptadores.',
          'A sequência também revela uma decisão importante: salvar e publicar são duas operações. Em produção, uma falha entre elas pode deixar o banco atualizado sem evento publicado. O projeto serve como exemplo de separação; sistemas que precisam de entrega consistente podem avaliar uma outbox transacional e definir idempotência no consumidor.'
        ],
        callout: 'Uma porta reduz o acoplamento com a tecnologia. Ela não torna automaticamente atômicas as operações feitas por adaptadores diferentes.'
      },
      {
        heading: 'A entrada assíncrona continua passando por uma porta',
        paragraphs: [
          'UserEventListener é o adaptador de entrada do Kafka. Ele interpreta o CloudEvent, verifica se o tipo é o evento de criação e encaminha o UUID para UserEnricherPort. O listener não contém a regra de busca e gravação de endereço.',
          'O listener configura três tentativas com espera exponencial entre 1 e 10 segundos. Isso mostra que retries fazem parte do adaptador de mensageria, mas também exige atenção operacional: em produção é necessário definir o destino final de mensagens que falham, observar repetição e garantir que reprocessar o mesmo evento não duplique efeitos.'
        ],
        code: `@KafkaListener(topics = "user-events")\n@RetryableTopic(\n  attempts = "3",\n  backoff = @Backoff(\n    delay = 1000, maxDelay = 10000, multiplier = 2\n  )\n)\npublic void listen(String message) {\n  // interpreta o CloudEvent e chama a porta de entrada\n}`
      },
      {
        heading: 'A saída externa é substituível',
        paragraphs: [
          'UserEnricherUseCase localiza o usuário pela porta de repositório, busca o endereço pela AddressClientPort, salva o resultado por AddressRepositoryPort e publica o estado atualizado. O fluxo fica legível sem precisar conhecer HTTP, JPA ou Kafka dentro do núcleo.',
          'Ao adicionar outra forma de entrada, como uma tarefa agendada, ela pode chamar a mesma porta de caso de uso. Ao trocar o cliente de endereço, a implementação do adaptador muda sem mover a regra de enriquecimento. Essa separação é mais útil quando as fronteiras do domínio correspondem a mudanças que realmente acontecem no produto.'
        ],
        bullets: [
          'Mantenha validações e decisões de negócio nos casos de uso ou no domínio.',
          'Use portas para persistência, mensageria e integrações externas.',
          'Teste o caso de uso com substitutos das portas; teste o adaptador contra seu contrato externo.',
          'Adicione controles de idempotência, observabilidade e tratamento de falha conforme os requisitos reais.'
        ]
      },
      {
        heading: 'Explore o exemplo completo',
        paragraphs: [
          'O repositório inclui implementações de entrada REST e Kafka, adaptadores de banco e cliente de endereço, além de módulos separados para testes de aceitação. Use-o como ponto de partida para acompanhar arquivos reais e comparar as decisões com os requisitos da sua aplicação; as pastas, por si só, não garantem uma boa arquitetura.'
        ]
      }
    ]
  }
];
