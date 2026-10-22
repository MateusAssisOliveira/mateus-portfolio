import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "SaaS de Gestão de Avaliações Psicossociais da NR-1 | Mateus Assis",
  description:
    "Estudo de caso técnico da plataforma de gestão pericial de riscos psicossociais da NR-1.",
};

export default function SaasNr1CaseStudy() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0f0f11] text-[#f4f4f5] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-12 sm:space-y-16">
        {/* Voltar */}
        <div>
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Voltar aos projetos</span>
          </Link>
        </div>

        {/* Header do Estudo */}
        <section className="space-y-5 border-b border-[#202025] pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
              Estudo de Caso • SaaS Regulatório B2B
            </span>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-100 break-words">
              SaaS de Gestão de Avaliações Psicossociais da NR-1
            </h1>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Plataforma corporativa para coleta, cálculo psicométrico e geração
            serverless de laudos técnicos periciais de Saúde e Segurança do
            Trabalho (SST), em conformidade com as normas NR-1 e NR-17.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-zinc-400 font-mono">
            <span>Next.js 14</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Supabase / PostgreSQL (RLS)</span>
            <span>•</span>
            <span>Puppeteer Serverless</span>
          </div>

          {/* Especificações Técnicas em Linha */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#202025] text-xs">
            <div>
              <span className="font-mono text-base font-semibold text-zinc-100 block">70% Quórum</span>
              <span className="text-zinc-500 text-[11px]">Validação pericial</span>
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-zinc-100 block">&lt; 5s Emissão</span>
              <span className="text-zinc-500 text-[11px]">Laudo pericial A4</span>
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-zinc-100 block">80%+ Redução</span>
              <span className="text-zinc-500 text-[11px]">De tempo de clínica</span>
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-zinc-100 block">Postgres RLS</span>
              <span className="text-zinc-500 text-[11px]">Multi-tenant seguro</span>
            </div>
          </div>
        </section>

        {/* Contexto & O Problema */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-zinc-100">1. O Contexto e a Dor de Negócio</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Com a atualização das normas NR-1 e NR-17 pelo Ministério do Trabalho,
              as empresas passaram a ser obrigadas a mapear e gerenciar fatores de
              riscos psicossociais no Programa de Gerenciamento de Riscos (PGR).
            </p>
            <p>
              Nas clínicas de medicina e segurança do trabalho, o processo era manual:
              aplicação de questionários em papel ou planilhas avulsas, alto risco de
              extravio de dados confidenciais dos trabalhadores e horas para consolidar
              médias e redigir laudos periciais.
            </p>
            <p>
              Além disso, a escala Likert (1 a 5) exige inversão estatística em itens
              protetivos (R = 6 - Nota). O cálculo manual em planilhas frequentemente
              gerava inconsistências matemáticas e expunha as empresas a passivos trabalhistas.
            </p>
          </div>
        </section>

        {/* A Solução Criada */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-white">2. A Solução Implementada</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              A aplicação foi projetada para centralizar todo o fluxo da avaliação em
              um único ambiente digital:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Coleta via QR Code:</strong> Cartazes gerados dinamicamente com QR Code para resposta anônima e rápida pelo smartphone do trabalhador.
              </li>
              <li>
                <strong className="text-zinc-200">Validação de Quórum:</strong> O sistema bloqueia a emissão de laudos sem que a amostragem atinja o mínimo estatístico pericial de 70% dos trabalhadores do setor.
              </li>
              <li>
                <strong className="text-zinc-200">Matriz de Risco Automatizada:</strong> Cruzamento algorítmico de severidade e probabilidade (Baixo, Moderado, Alto e Crítico) com sugestão do plano de ação 5W2H.
              </li>
              <li>
                <strong className="text-zinc-200">Emissão em 1 Clique:</strong> Geração instantânea do laudo pericial oficial em PDF pronto para assinatura do responsável técnico.
              </li>
            </ul>
          </div>
        </section>

        {/* Decisões de Arquitetura */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-white">3. Decisões de Arquitetura</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-white font-medium mb-1">
                Isolamento Multi-Tenant com Row Level Security (RLS)
              </h3>
              <p className="text-zinc-400">
                Por se tratar de dados de saúde e conformidade jurídica, a segurança do banco
                foi implementada diretamente no PostgreSQL via políticas de RLS no Supabase.
                Cada requisição é isolada por <code className="text-zinc-200 font-mono text-xs">clinica_id</code>,
                garantindo que mesmo diante de falhas na camada de visualização, nenhuma clínica
                acesse informações de outra.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Geração Serverless de PDF com Puppeteer Core
              </h3>
              <p className="text-zinc-400">
                Gerar laudos periciais no navegador do cliente costuma gerar falhas de quebra de página
                e incompatibilidade de fontes. A solução foi adotar o <code className="text-zinc-200 font-mono text-xs">@sparticuz/chromium-min</code> executado
                em funções serverless da Vercel, entregando PDFs padrão A4 de alta fidelidade em menos de 5 segundos.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Next.js App Router & Memoização Seletiva
              </h3>
              <p className="text-zinc-400">
                Separação estrita entre Server Components para proteção de dados e Client Components
                memoizados para formulários de alta velocidade sem lentidão ou re-renderizações desnecessárias.
              </p>
            </div>
          </div>
        </section>

        {/* Impacto & Resultados */}
        <section className="space-y-3 sm:space-y-4 border-t border-[#202025] pt-8">
          <h2 className="text-base sm:text-lg font-medium text-zinc-100">4. Resultados Obtidos</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3">
            <p>
              A plataforma reduziu em mais de 80% o tempo necessário para redigir e emitir um laudo pericial,
              eliminou completamente o risco de fórmulas manuais incorretas e padronizou o processo de
              auditoria com histórico seguro de cada avaliação.
            </p>
          </div>
        </section>

        {/* Contato Final */}
        <div className="border-t border-[#202025] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <Link
            href="/#projetos"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            &larr; Voltar aos projetos
          </Link>
          <Link
            href="mailto:contato@mateusassis.dev?subject=Conversa%20sobre%20o%20SaaS%20NR-1"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all"
          >
            <span>Conversar sobre a ferramenta</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
