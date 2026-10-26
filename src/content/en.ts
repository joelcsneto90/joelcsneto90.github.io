import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Joel Neto — Software Engineer / Solution Architect',
    description:
      'Portfolio of Joel Neto: designing and delivering software solutions, with AI agents in the workflow. .NET, Azure, React and Angular.',
  },
  nav: { about: 'About', ai: 'AI at work', resume: 'Journey', projects: 'Projects', contact: 'Contact' },
  ui: {
    toDark: 'Dark theme',
    toLight: 'Light theme',
    otherLang: 'PT',
    otherLangLabel: 'Mudar para português',
    responsibilities: 'Responsibilities',
    results: 'Results and deliveries',
    downloadResume: 'Download resume',
  },
  hero: {
    greeting: 'Hello!',
    role: 'Software Engineer / Solution Architect',
    tagline:
      'I design and deliver software solutions from the diagram to the deploy: architecture, technical decisions and delivery, with AI agents as part of how I work.',
    stack: '.NET / Node.js + Angular and React',
    cloud: 'Azure as the main choice for cloud solutions',
    ctaJourney: 'My journey',
  },
  about: {
    paragraphs: [
      "I've been building software for over 15 years, mostly with .NET and Azure. I started as a developer at 21; before that I worked in technical support and hardware maintenance. Today my work goes beyond writing code: I define architecture, estimate, review PRs and follow projects from requirements to delivery.",
      'I especially enjoy integration and synchronization problems between systems, where concurrency, volume and partial failures decide whether a solution holds up in production.',
    ],
  },
  ai: {
    title: 'AI at work',
    subtitle: 'How I use agents day to day',
    intro:
      'I use coding agents (Claude Code, Codex and GitHub Copilot) every day, but with a process: the agent follows the same rules I would, and nothing counts as done without verification.',
    practices: [
      {
        title: 'Versioned rules',
        text: 'I keep a repository with the instructions every agent follows on any project: think before coding, surgical changes, root cause over patches, simplicity. An installer applies the same set to Claude Code, Codex and Copilot.',
      },
      {
        title: 'Plan before executing',
        text: 'Larger work starts with a roadmap: small tasks, each with a verifiable definition of done and its dependencies, and decisions recorded together with the rejected alternatives. The plan goes through a critique round before it becomes code.',
      },
      {
        title: 'Execution with independent review',
        text: 'During execution, each task can go to a subagent and gets a separate review: spec compliance, quality and approach. In migrations, current behavior is pinned with tests before anything changes.',
      },
      {
        title: 'Verification as a rule',
        text: '"Done" means fresh build or test output plus the diff, not the agent\'s word. A bug fix starts with a test that reproduces it.',
      },
      {
        title: 'Context under control',
        text: 'Explicit handoffs between sessions, memory of preferences and a status line showing context usage and limits, so I know when to split the work.',
      },
      {
        title: 'Where AI fits',
        text: 'AI speeds up the mechanical parts: scaffolding, tests, refactoring, reading legacy code and documentation. Architecture decisions and the final review stay with me.',
      },
    ],
    repoLabel: 'See the instructions and skills I use',
    footnote: 'This site was planned and built with this same process.',
  },
  resume: {
    title: 'My journey',
    subtitle: 'Professional experience',
    intro: 'What I solved, what I delivered and what I was accountable for at each company.',
    jobs: [
      {
        role: 'Senior .NET Developer',
        company: 'Luxclusif',
        url: 'https://www.luxclusif.com/',
        period: '06/2026 — present',
        location: 'Portugal',
        summary:
          "Integration module that syncs Luxclusif's inventory and orders with channel partners such as Shopify, Farfetch and Shein.",
        responsibilities: [
          'Backend development of the integration module, following Clean Code and SOLID.',
          'Sync flows with each channel: background jobs, internal events and messaging.',
        ],
        results: [
          '**Full end-to-end Shein integration**: item allocation, price publishing, order intake, cancellations and refunds.',
          'Unit and integration tests in a **TDD-like approach**: with many jobs and chained events, the tests keep the interplay between the parts of the system stable.',
          '**.NET Aspire** project as the developer entry point: the local environment starts from a single project, with services and dependencies orchestrated.',
        ],
        stack: ['.NET', 'Hangfire', 'MediatR', 'MassTransit', 'Azure Service Bus', '.NET Aspire'],
      },
      {
        role: 'Solution Architect',
        company: 'Alistar',
        url: 'https://alistar.net/en/',
        period: '12/2018 — 05/2026',
        location: 'Portugal',
        summary:
          'Consulting for clients in healthcare, education, events, marketing, sales and insurance: C#/.NET backend and Azure integrations, on top of the Microsoft Dynamics 365 ecosystem.',
        responsibilities: [
          'Solution architecture: technical diagrams, architecture decisions and PR reviews.',
          'Defining the best solution together with analysts, and effort estimates.',
          'Technical lead on projects from start to finish.',
          'Build and deploy pipelines in Azure DevOps.',
        ],
        results: [
          'Restructured an Azure Functions and Service Bus synchronization: no more throttling or concurrency between runs, with thread-safe processing and a better split of sequential steps. **Errors dropped by 80%**, and the few remaining cases recover right after through **exponential-backoff retries**.',
          'Projects delivered **end to end** as technical lead, from requirements to production.',
          '**Migration of legacy systems** to newer versions.',
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
        location: 'Brazil',
        summary: 'Worklogic, an American payroll system in the healthcare sector.',
        responsibilities: [
          'Evolving the payroll flows: worked-hours submission, state-by-state tax calculation and other payroll rules.',
          'Backend in C#, ASP.NET MVC and Blazor, with SQL Server through NHibernate; UI tests with Selenium.',
        ],
        results: [
          '**Improved performance** of the payroll system.',
          '**Integration tests** covering the payroll flows.',
          'New features for a **dental plan system**: Angular and Node.js with PostgreSQL, deployed on Linux (Wildfly and Nginx).',
        ],
        stack: ['C#', 'ASP.NET MVC', 'Blazor', 'NHibernate', 'SQL Server', 'Selenium', 'Angular', 'Node.js', 'PostgreSQL', 'Wildfly', 'Nginx'],
      },
      {
        role: 'Software Developer',
        company: 'Pitang Agile IT',
        url: 'https://www.pitang.com/',
        period: '01/2013 — 12/2017',
        location: 'Brazil',
        summary: 'Solutions for an electrical studies company in Rio de Janeiro.',
        responsibilities: [
          'Web and desktop applications in C#: ASP.NET MVC and Entity Framework on IBM Informix, WPF, WCF services and Office add-ins with VSTO.',
          'Working in Scrum teams, with TFS for version control.',
        ],
        results: [
          '**Automated the retrieval and submission of electrical busbar data.**',
          'Extensive hands-on experience with **DDD, MVVM, DI and IoC** in production.',
        ],
        stack: ['C#', 'ASP.NET MVC', 'Entity Framework', 'WPF', 'WCF', 'VSTO', 'TFS'],
      },
    ],
    projectsTitle: 'Personal projects',
    projects: [
      {
        name: 'JOY-IPTV',
        description:
          'Smart TV app for LG, Samsung and Android, published on the LG, Samsung and Google Play stores. Plays streamed content through the Xtream Codes API.',
        stack: ['React', 'Cordova'],
        links: [
          { label: 'LG Store', url: 'https://us.lgappstv.com/main/tvapp/detail?appId=1118361' },
          { label: 'Samsung', url: 'https://www.samsung.com/us/tvs/smart-tv/samsung-tv-apps-detail/?appId=3202202026648' },
        ],
      },
      {
        name: 'SisAte',
        description:
          'Medical clinic system: patients, appointments and attendance, Excel reports, dashboards and on-demand or scheduled notifications by email, SMS and WhatsApp. Desktop version with MAUI.',
        stack: ['.NET 10', 'Angular 20', 'MAUI'],
        links: [{ label: 'nst-sisate.net', url: 'https://nst-sisate.net' }],
      },
    ],
    skillsTitle: 'Skills',
    skills: [
      { group: 'Backend & cloud', items: ['C# / .NET 10', 'ASP.NET', 'SQL', 'Azure Functions', 'Data Factory', 'Service Bus', 'Key Vault'] },
      { group: 'Front-end', items: ['React', 'Angular', 'Blazor', 'TypeScript'] },
      { group: 'Practices', items: ['DDD', 'Clean Code', 'TDD', 'Unit and integration testing', 'DevOps', 'Scrum', 'AI agents'] },
      { group: 'Also', items: ['Dynamics 365', 'Power Platform'] },
    ],
    educationTitle: 'Education',
    education: [
      { title: 'Graduate studies in Software Engineering', school: 'Universidade de Pernambuco', year: '2017' },
      { title: "Bachelor's in Information Systems", school: 'Faculdade Joaquim Nabuco', year: '2014' },
    ],
    certificationsTitle: 'Certifications',
    certifications: [
      { code: 'AZ-900', name: 'Azure Fundamentals' },
      { code: '70-483', name: 'Programming in C#' },
      { code: 'MB-600', name: 'Dynamics 365 + Power Platform Solution Architect' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Full professional proficiency' },
    ],
  },
  contact: {
    title: "Let's talk?",
    text: 'Open to conversations about architecture, integrations and new opportunities.',
  },
}
