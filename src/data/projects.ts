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
  {
    id: "doce-caixa",
    slug: "doce-caixa",
    title: "Doce Caixa — Sistema de Gestão para Confeitarias",
    shortTitle: "Doce Caixa SaaS",
    category: "sistema",
    categoryLabel: "Visão de Produto & Micro-SaaS",
    status: "concepcao",
    statusLabel: "Concepção & Modelagem",
    tagline:
      "Concepção de plataforma de gestão orientada a pequenos negócios gastronômicos: controle de estoque por ficha técnica, precificação por insumo e fluxo de caixa.",
    targetAudience:
      "Confeitarias artesanais, doceiras e microempreendedores do setor de alimentação.",
    businessProblem:
      "Dificuldade de calcular o custo real de receitas complexas com desperdício de insumos, falta de controle de lucratividade por unidade vendida e desorganização de fluxo de caixa em cadernos ou planilhas improvisadas.",
    solution:
      "Modelagem de produto intuitivo onde o cadastro da receita desconta automaticamente os insumos do estoque e calcula a margem líquida real com base no custo atualizado dos ingredientes.",
    architectureHighlights: [
      "Modelagem de banco de dados relacional com decomposição de ingredientes e fichas técnicas",
      "Módulo de cálculo dinâmico de custo de produção e sugestão de preço de venda",
      "Interface minimalista e voltada para quem não tem familiaridade com finanças complexas",
    ],
    metrics: [
      {
        value: "100%",
        label: "Controle de Ficha",
        description: "Custo exato por grama e unidade produzida",
      },
      {
        value: "Simples",
        label: "Interface Ágil",
        description: "Planejada para celular e computador",
      },
    ],
    technologies: [
      "Modelagem de SaaS",
      "Fichas Técnicas",
      "Arquitetura de Dados",
      "Finanças B2B",
    ],
    featured: false,
    hasDedicatedPage: false,
    actionText: "Conhecer a Proposta",
  },
  {
    id: "gestao-desktop",
    slug: "gestao-desktop",
    title: "Aplicação Desktop de Gestão Comercial e Estoque",
    shortTitle: "Gestão Comercial Desktop",
    category: "sistema",
    categoryLabel: "Engenharia de Software Desktop",
    status: "estudo",
    statusLabel: "Fundamentos & Prática",
    tagline:
      "Sistema desktop explorando arquitetura em camadas, interface moderna com Flet e persistência em banco relacional MySQL.",
    targetAudience:
      "Comércio local e fundamentos de consolidação de código modular.",
    businessProblem:
      "Necessidade de criar uma ferramenta local estável, rápida e independente de conexão de internet externa para controle de inventário e vendas.",
    solution:
      "Aplicação desktop com controle de entradas, saídas, níveis críticos de estoque e relatórios consolidados em banco de dados relacional.",
    architectureHighlights: [
      "Construção de interface desktop moderna utilizando o motor Flet (Python + Flutter)",
      "Camada de persistência relacional com MySQL estruturado e integridade referencial",
      "Separação de responsabilidades entre interface visual e regras de acesso ao banco",
    ],
    metrics: [
      {
        value: "Local",
        label: "Zero Latência",
        description: "Operação rápida diretamente no hardware local",
      },
      {
        value: "ACID",
        label: "Integridade MySQL",
        description: "Transações seguras de cadastro e movimentação",
      },
    ],
    technologies: ["Python", "Flet", "MySQL", "Arquitetura Modular"],
    featured: false,
    hasDedicatedPage: false,
    actionText: "Ver Arquitetura",
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
