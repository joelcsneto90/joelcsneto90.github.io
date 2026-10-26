import type { Content } from './types'

export const pt: Content = {
  meta: {
    title: 'Joel Neto — Solution Architect & Senior .NET Developer',
    description:
      'Portfolio de Joel Neto: arquitetura e entrega de soluções de software, com agentes de IA no fluxo de trabalho. .NET, Azure, React e Angular.',
  },
  nav: { about: 'Sobre', ai: 'IA no trabalho', resume: 'Trajetória', contact: 'Contato' },
  ui: {
    toDark: 'Tema escuro',
    toLight: 'Tema claro',
    otherLang: 'EN',
    otherLangLabel: 'Switch to English',
    responsibilities: 'Responsabilidades',
    results: 'Resultados e entregas',
    downloadResume: 'Baixar currículo',
  },
  hero: {
    greeting: 'Olá!',
    role: 'Solution Architect · .NET',
    tagline:
      'Desenho e entrego soluções de software do diagrama ao deploy: arquitetura, decisões técnicas e entrega, com agentes de IA como parte do meu jeito de trabalhar. No dia a dia: .NET e Azure no backend, React e Angular no front-end.',
    ctaJourney: 'Minha trajetória',
  },
  about: {
    paragraphs: [
      'Desenvolvo software há mais de 15 anos, a maior parte em .NET e Azure. Comecei como desenvolvedor aos 21; antes disso trabalhei com suporte técnico e manutenção de hardware. Hoje meu trabalho vai além de escrever código: defino arquitetura, faço estimativas, reviso PRs e acompanho projetos do levantamento à entrega.',
      'Gosto especialmente de problemas de integração e sincronização entre sistemas, onde concorrência, volume e falhas parciais decidem se a solução aguenta a produção.',
    ],
  },
  ai: {
    title: 'IA no trabalho',
    subtitle: 'Como uso agentes no dia a dia',
    intro:
      'Uso agentes de código (Claude Code, Codex e GitHub Copilot) no dia a dia, mas com processo: o agente segue as mesmas regras que eu seguiria, e nada é dado como pronto sem verificação.',
    practices: [
      {
        title: 'Regras versionadas',
        text: 'Mantenho um repositório com as instruções que todo agente segue em qualquer projeto: pensar antes de codar, mudanças cirúrgicas, causa raiz em vez de remendo, simplicidade. Um instalador aplica o mesmo conjunto no Claude Code, no Codex e no Copilot.',
      },
      {
        title: 'Planejar antes de executar',
        text: 'Trabalho maior começa com um roadmap: tarefas pequenas, cada uma com critério de pronto verificável e dependências, e decisões registradas junto com as alternativas rejeitadas. O plano passa por uma rodada de crítica antes de virar código.',
      },
      {
        title: 'Execução com revisão independente',
        text: 'Na execução, cada tarefa pode ir para um subagente e passa por uma revisão separada: aderência à especificação, qualidade e abordagem. Em migrações, o comportamento atual é fixado em testes antes de qualquer mudança.',
      },
      {
        title: 'Verificação como regra',
        text: '"Pronto" é saída nova de build ou teste mais o diff, não a palavra do agente. Correção de bug começa por um teste que reproduz o erro.',
      },
      {
        title: 'Contexto sob controle',
        text: 'Handoffs explícitos entre sessões, memória de preferências e uma status line com uso de contexto e limites, para saber a hora de quebrar o trabalho.',
      },
      {
        title: 'Onde a IA entra',
        text: 'A IA acelera o que é mecânico: scaffolding, testes, refatorações, leitura de código legado e documentação. As decisões de arquitetura e a revisão final continuam comigo.',
      },
    ],
    repoLabel: 'Ver as instruções e skills que uso',
    footnote: 'Este site foi planejado e construído com esse mesmo processo.',
  },
  resume: {
    title: 'Minha trajetória',
    subtitle: 'Experiência profissional',
    intro: 'O que resolvi, o que entreguei e pelo que respondi em cada empresa.',
    jobs: [
      {
        role: 'Senior .NET Developer',
        company: 'Luxclusif',
        period: '06/2026 — atual',
        location: 'Portugal',
        summary:
          'Módulo de integração que sincroniza inventário e pedidos da Luxclusif com canais parceiros como Shopify, Farfetch e Shein.',
        responsibilities: [
          'Desenvolvimento backend do módulo de integração, seguindo Clean Code e SOLID.',
          'Fluxos de sincronização com cada canal: jobs em background, eventos internos e mensageria.',
        ],
        results: [
          '**Integração completa com a Shein**, de ponta a ponta: alocação de itens, publicação de preços, recebimento de pedidos, cancelamentos e estornos.',
          'Testes unitários e de integração numa abordagem **próxima de TDD**: com muitos jobs e eventos encadeados, os testes mantêm estável a interação entre as partes do sistema.',
          'Projeto **.NET Aspire** como ponto de partida do desenvolvedor: o ambiente local sobe a partir de um único projeto, com serviços e dependências orquestrados.',
        ],
        stack: ['.NET', 'Hangfire', 'MediatR', 'MassTransit', 'Azure Service Bus', '.NET Aspire'],
      },
      {
        role: 'Solution Architect',
        company: 'Net-IT',
        period: '12/2018 — 05/2026',
        location: 'Portugal',
        summary:
          'Consultoria para clientes de saúde, educação, eventos, marketing, vendas e seguros: backend em C#/.NET e integrações em Azure, sobre o ecossistema Microsoft Dynamics 365.',
        responsibilities: [
          'Arquitetura de soluções: diagramas técnicos, decisões de arquitetura e revisão de PRs.',
          'Definição da melhor solução junto com os analistas e estimativas de esforço.',
          'Liderança técnica de projetos do início ao fim.',
        ],
        results: [
          'Sincronização em Azure Functions e Service Bus reestruturada: sem throttling nem concorrência entre execuções, com processamento thread-safe e melhor divisão das etapas sequenciais. **Os erros caíram 80%**, e os poucos casos restantes se resolvem logo em seguida com **retries de backoff exponencial**.',
          'Projetos entregues **de ponta a ponta** como líder técnico, do levantamento à entrada em produção.',
          '**Migração de sistemas antigos** para versões mais novas.',
        ],
        stack: [
          'C# / .NET 8',
          'Azure Functions',
          'Service Bus',
          'Logic Apps',
          'Data Factory',
          'Key Vault',
          'Azure DevOps',
          'React',
          'Dynamics 365',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'M2S Software',
        period: '01/2018 — 11/2018',
        location: 'Brasil',
        summary: 'Worklogic, sistema de folha de pagamento americano na área de saúde.',
        responsibilities: [
          'Evolução dos fluxos de payroll: submissão de horas trabalhadas, cálculo de impostos por estado e demais regras da folha.',
          'Backend em C#, ASP.NET MVC e Blazor, com SQL Server via NHibernate; testes de UI com Selenium.',
        ],
        results: [
          '**Melhoria de performance** do sistema de payroll.',
          '**Testes de integração** cobrindo os fluxos de payroll.',
          'Novas funcionalidades para um **sistema de plano odontológico**: Angular e Node.js com PostgreSQL, com deploy em Linux (Wildfly e Nginx).',
        ],
        stack: ['C#', 'ASP.NET MVC', 'Blazor', 'NHibernate', 'SQL Server', 'Selenium', 'Angular', 'Node.js', 'PostgreSQL', 'Wildfly', 'Nginx'],
      },
      {
        role: 'Software Developer',
        company: 'Pitang Agile IT',
        period: '01/2013 — 12/2017',
        location: 'Brasil',
        summary: 'Soluções para uma empresa de estudos elétricos do Rio de Janeiro.',
        responsibilities: [
          'Desenvolvimento de aplicações web e desktop em C#: ASP.NET MVC e Entity Framework sobre IBM Informix, WPF, serviços WCF e add-ins de Office com VSTO.',
          'Trabalho em times Scrum, com versionamento em TFS.',
        ],
        results: [
          '**Automação da obtenção e da submissão de dados de barramentos elétricos.**',
          'Experiência sólida com **DDD, MVVM, DI e IoC** aplicados em produção.',
        ],
        stack: ['C#', 'ASP.NET MVC', 'Entity Framework', 'WPF', 'WCF', 'VSTO', 'TFS'],
      },
    ],
    projectsTitle: 'Projetos pessoais',
    projects: [
      {
        name: 'JOY-IPTV',
        description:
          'App para Smart TVs LG, Samsung e Android, publicado nas lojas LG, Samsung e Google Play. Reproduz conteúdo em streaming via API Xtream Codes.',
        stack: ['React', 'Cordova'],
        links: [
          { label: 'LG Store', url: 'https://us.lgappstv.com/main/tvapp/detail?appId=1118361' },
          { label: 'Samsung', url: 'https://www.samsung.com/us/tvs/smart-tv/samsung-tv-apps-detail/?appId=3202202026648' },
        ],
      },
      {
        name: 'SisAte',
        description:
          'Sistema para clínica médica: cadastro de pacientes, agendamentos e atendimentos, relatórios em Excel, dashboards e notificações por e-mail, SMS e WhatsApp, sob demanda ou agendadas. Versão desktop com MAUI.',
        stack: ['.NET 10', 'Angular 20', 'MAUI'],
        links: [{ label: 'nst-sisate.net', url: 'https://nst-sisate.net' }],
      },
    ],
    skillsTitle: 'Competências',
    skills: [
      { group: 'Backend e cloud', items: ['C# / .NET 10', 'ASP.NET', 'SQL', 'Azure Functions', 'Data Factory', 'Service Bus', 'Key Vault'] },
      { group: 'Front-end', items: ['React', 'Angular', 'Blazor', 'TypeScript'] },
      { group: 'Práticas', items: ['DDD', 'Clean Code', 'TDD', 'Testes unitários e de integração', 'DevOps', 'Scrum', 'Agentes de IA'] },
      { group: 'Também', items: ['Dynamics 365', 'Power Platform'] },
    ],
    educationTitle: 'Formação',
    education: [
      { title: 'Especialização em Engenharia de Software', school: 'Universidade de Pernambuco', year: '2017' },
      { title: 'Bacharelado em Sistemas de Informação', school: 'Faculdade Joaquim Nabuco', year: '2014' },
    ],
    certificationsTitle: 'Certificações',
    certifications: [
      { code: 'AZ-900', name: 'Azure Fundamentals' },
      { code: '70-483', name: 'Programming in C#' },
      { code: 'MB-600', name: 'Dynamics 365 + Power Platform Solution Architect' },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Fluência profissional' },
    ],
  },
  contact: {
    title: 'Vamos conversar?',
    text: 'Aberto a conversas sobre arquitetura, integrações e novas oportunidades.',
  },
}
