export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "saas" | "automacao" | "sistema";
  categoryLabel: string;
  status: "producao" | "mvp" | "concepcao" | "estudo";
  statusLabel: string;
  tagline: string;
  targetAudience: string;
  businessProblem: string;
  solution: string;
  architectureHighlights: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  featured: boolean;
  hasDedicatedPage: boolean;
  actionText: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "saas-nr1",
    slug: "saas-nr1",
    title: "SaaS de Gestão de Avaliações Psicossociais (NR-1)",
    shortTitle: "SaaS NR-1 SST",
    category: "saas",
    categoryLabel: "SaaS B2B Regulatório",
    status: "producao",
    statusLabel: "Em Produção / Expansão",
    tagline:
      "Plataforma completa de gestão pericial de riscos psicossociais, cálculos Likert automáticos, quórum pericial de 70% e emissão de laudos técnicos em PDF para clínicas de Medicina e Segurança do Trabalho.",
    targetAudience:
      "Clínicas de Medicina e Segurança do Trabalho (SST), Médicos do Trabalho, Engenheiros de Segurança e Consultorias de Gestão Ocupacional.",
    businessProblem:
      "A conformidade com a NR-1 e o Programa de Gerenciamento de Riscos (PGR) exige levantamento psicossocial rigoroso. Clínicas dependiam de planilhas lentas, formulários em papel dispersos, cálculos manuais de escala Likert invertida e horas para redigir laudos periciais e matrizes de risco.",
    solution:
      "Digitalização ponta a ponta com formulários web e cartazes com QR Code, consolidação automática com motor pericial de 70% de quórum, tratamento estatístico de médias setoriais, matriz de risco cruzada (Probabilidade × Severidade) e emissão instantânea de laudos em PDF periciais no servidor via Chromium headless.",
    architectureHighlights: [
      "Next.js 14 App Router com divisão estrita entre Server Components protegidos e Client Components memoizados",
      "Isolamento Multi-Tenant estrito via Row Level Security (RLS) no PostgreSQL / Supabase através de clinica_id",
      "Geração Serverless de laudos em PDF periciais de alta fidelidade com Puppeteer Core e Chromium headless na Vercel",
      "Motores proprietários de cálculo: dynamic-metrics-engine.ts (inversão Likert) e risk-engine.ts (matriz de severidade)",
      "Exportação analítica corporativa com SheetJS (xlsx), Word (docx) e empacotamento em lotes ZIP (jszip)",
    ],
    metrics: [
      {
        value: "80%+",
        label: "Redução de Tempo",
        description: "Na elaboração e assinatura de laudos periciais",
      },
      {
        value: "70%",
        label: "Quórum Pericial",
        description: "Validação automatizada de amostragem mínima",
      },
      {
        value: "100%",
        label: "Isolamento RLS",
        description: "Segurança de dados e conformidade com a LGPD",
      },
      {
        value: "< 5s",
        label: "Emissão de Laudo",
        description: "Geração do relatório pericial completo em PDF",
      },
    ],
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript 5.7",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL RLS",
      "Puppeteer Core",
      "Chromium Headless",
      "SheetJS (xlsx)",
      "Playwright",
    ],
    featured: true,
    hasDedicatedPage: true,
    actionText: "Acessar Estudo de Caso Completo",
  },
  {
    id: "gerador-certificados",
    slug: "gerador-certificados",
    title: "Gerador de Certificados de Treinamento em SST",
    shortTitle: "Certificados SST",
    category: "saas",
    categoryLabel: "Produto SaaS SST / Web App",
    status: "producao",
    statusLabel: "No Ar na Vercel",
    tagline:
      "Aplicação web corporativa para emissão ágil e padronizada de certificados de treinamentos de Normas Regulamentadoras (NR-1, NR-10, NR-35) com controle de carga horária e conformidade jurídica.",
    targetAudience:
      "Instrutores de SST, técnicos de segurança do trabalho, clínicas ocupacionais e empresas com obrigatoriedade de reciclagem e capacitação de funcionários.",
    businessProblem:
      "Preencher manualmente certificados em softwares de design ou editores de texto para turmas inteiras consome horas de trabalho administrativo, com alto índice de erros de digitação de nomes, CPFs, datas e ementas obrigatórias por norma.",
    solution:
      "Aplicação que recebe os dados dos alunos e do treinamento, valida as informações obrigatórias e emite certificados formatados em alta resolução, prontos para assinatura e entrega aos órgãos fiscalizadores.",
    architectureHighlights: [
      "Processamento otimizado para geração e formatação de certificados sem distorção visual",
      "Templates padronizados em conformidade com as exigências do Ministério do Trabalho",
      "Deploy e hospedagem contínua na Vercel com carregamento instantâneo",
      "Código aberto e documentado no GitHub",
    ],
    metrics: [
      {
        value: "Instantâneo",
        label: "Emissão em 1 Clique",
        description: "Geração automática para lotes de participantes",
      },
      {
        value: "100%",
        label: "Conformidade NR",
        description: "Campos obrigatórios validados pelo sistema",
      },
      {
        value: "No Ar",
        label: "Deploy Ativo",
        description: "Hospedado na Vercel para uso imediato",
      },
    ],
    technologies: ["Python", "Web App", "Vercel", "Geração de Documentos", "SST"],
    featured: true,
    hasDedicatedPage: true,
    actionText: "Ver Estudo de Caso & Demo",
    githubUrl: "https://github.com/MateusAssisOliveira/gerador-certificados-treinamento",
    liveUrl: "https://gerador-certificados-treinamento.vercel.app",
  },
  {
    id: "doce-caixa",
    slug: "doce-caixa",
    title: "App Joyce Cakes & Doce Caixa — Gestão para Confeitarias",
    shortTitle: "App Joyce Cakes",
    category: "saas",
    categoryLabel: "SaaS Comercial / Web App",
    status: "producao",
    statusLabel: "No Ar na Vercel",
    tagline:
      "Aplicação moderna em TypeScript para gestão operacional de confeitarias: controle de insumos, fichas técnicas de receitas, cálculo de margem real de lucro e catálogo comercial.",
    targetAudience:
      "Confeitarias artesanais, doceiras, microempreendedores da gastronomia e pequenos negócios de alimentação.",
    businessProblem:
      "Confeiteiros frequentemente precificam doces no 'olhômetro' sem considerar a variação de custo de embalagens, farinha, chocolates e mão de obra, gerando vendas com margem negativa ou prejuízos invisíveis.",
    solution:
      "Sistema que decompõe produtos em fichas técnicas detalhadas: a cada receita cadastrada, o sistema calcula o custo exato por grama ou unidade, sugere o preço de venda para a margem desejada e centraliza o catálogo de pedidos.",
    architectureHighlights: [
      "Desenvolvido em TypeScript com componentização modular e interface responsiva",
      "Modelagem de dados com decomposição de ingredientes e fichas técnicas dinâmicas",
      "Deploy contínuo e escalável na nuvem Vercel",
      "Interface limpa e intuitiva desenvolvida para agilidade no dia a dia da cozinha",
    ],
    metrics: [
      {
        value: "Exato",
        label: "Custo por Receita",
        description: "Decomposição por gramatura e custo de insumos",
      },
      {
        value: "TypeScript",
        label: "Tipagem Estrita",
        description: "Arquitetura robusta de ponta a ponta",
      },
      {
        value: "No Ar",
        label: "Deploy Vercel",
        description: "Acessível de qualquer dispositivo móvel",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Gestão de Estoque",
      "Finanças B2B",
    ],
    featured: true,
    hasDedicatedPage: true,
    actionText: "Ver Estudo de Caso & Demo",
    githubUrl: "https://github.com/MateusAssisOliveira/app_joyceCakes",
    liveUrl: "https://app-joyce-cakes.vercel.app",
  },
  {
    id: "automacoes-corporativas",
    slug: "automacoes-corporativas",
    title: "Automação de Processos & RPA em Sistemas Corporativos",
    shortTitle: "RPA & Automações B2B",
    category: "automacao",
    categoryLabel: "Automação & Eficiência Operacional",
    status: "producao",
    statusLabel: "Soluções em Operação",
    tagline:
      "Robôs de automação inteligente em Python e Playwright para eliminação de tarefas repetitivas, navegação em sistemas legados e redução drástica de esforço operacional.",
    targetAudience:
      "Empresas e clínicas que utilizam sistemas web legados sem APIs públicas e possuem equipes sobrecarregadas com digitação e consultas repetitivas.",
    businessProblem:
      "Rotinas operacionais críticas envolviam pesquisar dezenas de empresas em sistemas legados, copiar e colar dados entre campos, clicar em botões sequenciais e conferir resultados manualmente, consumindo horas preciosas e gerando desgaste humano.",
    solution:
      "Desenvolvimento de agentes de automação com tolerância a falhas, navegação inteligente com seletores robustos via Playwright, orquestração de credenciais seguras e execução autônoma com logs de auditoria e relatórios de conclusão.",
    architectureHighlights: [
      "Automação resiliente com Playwright lidando com latências de rede e modais dinâmicos",
      "Interface gráfica simplificada para disparo e acompanhamento das rotinas pelo operador",
      "Mecanismo de captura e log estruturado para auditoria de cada lote processado",
      "Redução a zero da necessidade de digitação repetitiva",
    ],
    metrics: [
      {
        value: "50+",
        label: "Empresas por Lote",
        description: "Processadas sem intervenção humana manual",
      },
      {
        value: "90%",
        label: "Economia Operacional",
        description: "Do tempo antes gasto em tarefas de digitação",
      },
      {
        value: "100%",
        label: "Precisão de Dados",
        description: "Eliminação total de erros manuais de transferência",
      },
    ],
    technologies: [
      "Python",
      "Playwright",
      "Automação Web",
      "RPA Corporativo",
      "Tratamento de Dados",
    ],
    featured: true,
    hasDedicatedPage: false,
    actionText: "Ver Detalhes da Solução",
  },
];

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "O Arquiteto Humano: Negócio, Segurança e Regras",
    description:
      "Definição rigorosa das normas regulatórias (NR-1/NR-17), critérios periciais, modelagem de banco isolado por clínica (RLS) e contratos estritos em TypeScript. A máquina nunca decide critérios jurídicos ou limites de segurança.",
    icon: "ShieldCheck",
  },
  {
    number: "02",
    title: "A IA como Pair Programmer de Execução Ultra-Rápida",
    description:
      "Utilização de modelos avançados guiados por contexto cirúrgico (Spec-Driven Development) para codificar telas ricas com Tailwind, implementar motores matemáticos e integrações pesadas (Puppeteer, SheetJS, Word).",
    icon: "Cpu",
  },
  {
    number: "03",
    title: "Auditoria Rigorosa & Zero Falhas em Homologação",
    description:
      "Todo código sugerido passa por compilação sem tolerância a erros (tsc, lint, tipos estritos), conferência contra divisão por zero e testes automatizados com Playwright antes de qualquer publicação.",
    icon: "CheckCircle2",
  },
];
