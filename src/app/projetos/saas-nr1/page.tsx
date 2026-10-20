import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  FileText,
  Clock,
  Sparkles,
  CheckCircle2,
  Terminal,
  FileSpreadsheet,
  QrCode,
  Lock,
  MessageSquare,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Estudo de Caso: SaaS de Gestão NR-1 | Mateus Assis",
  description:
    "Estudo de caso detalhado da arquitetura, motores matemáticos periciais e geração serverless de laudos em PDF do SaaS de Gestão de Avaliações Psicossociais da NR-1.",
};

export default function SaasNr1CaseStudy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Top Bar */}
        <div className="border-b border-white/[0.06] bg-[#0c0c0e]/60 py-3.5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-zinc-400">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar ao Portfólio</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-emerald-400">SaaS B2B • Em Produção</span>
            </div>
          </div>
        </div>

        {/* Header Hero */}
        <section className="pt-12 pb-16 border-b border-white/[0.06] bg-grid-pattern relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-mono text-emerald-300 mb-6">
              <Sparkles className="w-3 h-3" />
              Estudo de Caso Técnico & Arquitetura
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mb-6 leading-tight">
              SaaS de Gestão de Avaliações Psicossociais da NR-1
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
              Arquitetura corporativa projetada para alta performance, isolamento multi-tenant
              estrito via Row Level Security (RLS) e emissão pericial de laudos técnicos de SST
              em PDF via Chromium headless serverless na Vercel.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-950/80 border border-white/10 mb-8 font-mono">
              <div>
                <span className="text-[11px] text-zinc-400 block">TEMPO DE EMISSÃO</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-400">80%+ mais rápido</span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 block">QUÓRUM PERICIAL</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-400">70% automatizado</span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 block">ISOLAMENTO MULTI-TENANT</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-400">PostgreSQL RLS</span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 block">RENDERIZAÇÃO DE LAUDO</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-400">&lt; 5s Serverless</span>
              </div>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20SaaS%20NR-1."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                Agendar Demonstração Comercial da Ferramenta
              </Link>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
          {/* 1. Contexto & Desafio de Negócio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>01. O Cenário & A Dor Regulatória</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">
              O Desafio: Complexidade da NR-1 e o Gargalo das Clínicas de SST
            </h2>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed bg-[#121215] p-6 rounded-xl border border-white/5">
              <p>
                As atualizações das Normas Regulamentadoras (em especial a <strong className="text-zinc-100">NR-1</strong> e a <strong className="text-zinc-100">NR-17</strong>) 
                estabeleceram a obrigatoriedade da identificação e gestão dos fatores de riscos psicossociais 
                relacionados ao trabalho no Programa de Gerenciamento de Riscos (PGR).
              </p>
              <p>
                Na prática, as clínicas de Medicina e Segurança do Trabalho e consultorias enfrentavam um processo operacional crítico:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Coleta Fragmentada:</strong> Questionários impressos em papel ou planilhas avulsas com alto risco de perda e extravio de informações sensíveis dos colaboradores.
                </li>
                <li>
                  <strong className="text-zinc-200">Cálculos Complexos:</strong> As metodologias psicométricas exigem tratamento de escala Likert (1 a 5) com inversão estatística em itens protetivos (R = 6 - Nota), o que frequentemente gerava erros em fórmulas manuais de Excel.
                </li>
                <li>
                  <strong className="text-zinc-200">Risco Pericial e Jurídico:</strong> A emissão de laudos sem validação do quórum de amostragem mínima (70% do setor) deixava as empresas clientes vulneráveis a autuações e processos periciais trabalhistas.
                </li>
                <li>
                  <strong className="text-zinc-200">Morosidade Extrema:</strong> Redigir, formatar e assinar cada relatório técnico levava horas de trabalho de profissionais altamente qualificados.
                </li>
              </ul>
            </div>
          </div>

          {/* 2. A Solução Implementada */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>02. A Solução Proposta</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">
              Plataforma Integrada de Gestão Pericial de Ponta a Ponta
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              O sistema foi concebido para centralizar todo o ciclo de vida da avaliação psicossocial, garantindo precisão matemática, velocidade e rigor pericial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <QrCode className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-100">Coleta Híbrida & Ágil</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Geração dinâmica de cartazes com QR Code para coleta direta pelos trabalhadores no celular, links web seguros e conector automatizado com o Google Forms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-100">Motor Psicométrico</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Cálculo automático de Likert com inversão matemática, verificação do quórum de 70% e cruzamento na Matriz de Risco (Probabilidade × Severidade).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-100">Emissão Serverless</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Geração em segundos de laudos periciais completos em PDF de alta resolução, heatmaps executivos em Excel (SheetJS) e minutas em Word.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Arquitetura Técnica & Decisões de Engenharia */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>03. Decisões de Arquitetura & Engenharia</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">
              Stack Corporativa Projetada para Segurança e Escala
            </h2>

            <div className="space-y-4">
              {/* Architecture Item 1 */}
              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    Multi-Tenancy Estrito via Row Level Security (RLS) no PostgreSQL / Supabase
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">
                    SEGURANÇA & LGPD
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Em sistemas de saúde ocupacional, o vazamento de dados entre clínicas concorrentes é inaceitável. Em vez de depender apenas de filtros manuais na camada de aplicação, o isolamento é garantido diretamente no motor do banco de dados relacional via políticas RLS por <code className="text-emerald-300 font-mono">clinica_id</code>. Mesmo que ocorra qualquer falha na query, uma clínica jamais acessa os prontuários de outra.
                </p>
              </div>

              {/* Architecture Item 2 */}
              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Geração Serverless de Laudos em PDF com Puppeteer Core e Chromium Headless
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">
                    PERFORMANCE & FIDELIDADE A4
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Gerar relatórios técnicos periciais no navegador do cliente costuma quebrar layouts entre diferentes telas e sistemas operacionais. A solução adotada foi rodar <code className="text-emerald-300 font-mono">@sparticuz/chromium-min</code> e <code className="text-emerald-300 font-mono">puppeteer-core</code> em funções serverless da Vercel. Isso garante fidelidade milimétrica padrão A4, paginação automática, cabeçalhos periciais oficiais e renderização em menos de 5 segundos.
                </p>
              </div>

              {/* Architecture Item 3 */}
              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    Next.js 14 App Router: Server Components & Memoização Seletiva
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">
                    ZERO LATÊNCIA
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A aplicação separa estritamente páginas mestres (Server Components que buscam dados protegidos sem expor chaves ao navegador) de formulários interativos e modais (Client Components memoizados com <code className="text-emerald-300 font-mono">React.memo</code>). Isso garante digitação rápida sem congelamentos ou re-renderizações desnecessárias.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Motores Proprietários de Negócio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>04. Motores de Negócio Proprietários (Core SST)</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">
              Lógica Pericial Codificada com Rigor Matemático
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-2">
                  <span className="font-bold text-emerald-400">dynamic-metrics-engine.ts</span>
                  <span className="text-[10px] text-zinc-400">PSICOMETRIA</span>
                </div>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Responsável pelo processamento das respostas na escala Likert de 1 a 5. Aplica a inversão psicométrica necessária para itens onde notas altas representam proteção e vice-versa:
                </p>
                <div className="p-2.5 rounded bg-zinc-950 border border-white/5 text-emerald-300">
                  R = 6 - Nota; // Inversão pericial
                </div>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Calcula médias ponderadas por setor, desvios e valida o quórum de 70% antes de autorizar a classificação de risco.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-2">
                  <span className="font-bold text-emerald-400">risk-engine.ts</span>
                  <span className="text-[10px] text-zinc-400">MATRIZ DE RISCO</span>
                </div>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Cruza a probabilidade estatística calculada com a severidade do fator de estresse ocupacional segundo os parâmetros da NR-1:
                </p>
                <div className="p-2.5 rounded bg-zinc-950 border border-white/5 text-teal-300">
                  Classificação: Baixo, Moderado, Alto ou Crítico
                </div>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Gera automaticamente a recomendação do Plano de Ação 5W2H preventivo para mitigar passivos trabalhistas.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Demonstração Visual das Telas */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>05. Módulos & Interface da Plataforma</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">
              Fluxo Operacional na Prática
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  MÓDULO 01 • GESTÃO DE CARTEIRA
                </div>
                <h4 className="text-sm font-bold text-zinc-200">Cadastro de Empresas & Setores</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Estruturação hierárquica das empresas clientes, número total de colaboradores elegíveis por setor e monitoramento do quórum de respondentes em tempo real.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  MÓDULO 02 • COLETA EM CAMPO
                </div>
                <h4 className="text-sm font-bold text-zinc-200">QR Code & Formulários Seguros</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Emissão de cartazes em alta resolução com QR Code único por setor da empresa, permitindo respostas anônimas e rápidas diretamente pelo smartphone.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  MÓDULO 03 • HEATMAP & ANALYTICS
                </div>
                <h4 className="text-sm font-bold text-zinc-200">Painel Executivo de Risco</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Mapa de calor interativo com código de cores normativo (Verde, Amarelo, Laranja, Vermelho) para visualização imediata dos setores que demandam atenção.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-white/5 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  MÓDULO 04 • EXPORTAÇÕES PERICIAIS
                </div>
                <h4 className="text-sm font-bold text-zinc-200">Laudos em PDF, Excel & Word</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Emissão em 1 clique do laudo pericial oficial em PDF pronto para assinatura, relatórios em planilha Excel (SheetJS) e minutas editáveis em Word (docx).
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box Final */}
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-[#111c15] to-[#0c0f0d] p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold text-zinc-100">
              Interessado em levar essa solução para a sua clínica ou empresa?
            </h3>
            <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              O SaaS de Gestão de Avaliações Psicossociais da NR-1 está em operação e disponível para contratação, licenciamento e personalização de marca para consultorias de SST.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20SaaS%20NR-1."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                Agendar Demonstração Comercial no WhatsApp
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 text-sm font-medium transition-all"
              >
                Voltar à Página Inicial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
