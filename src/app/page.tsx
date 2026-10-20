"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Database,
  FileText,
  Clock,
  Terminal,
  Zap,
  ChevronRight,
  MessageSquare,
  Mail,
  ExternalLink,
  Code2,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, METHODOLOGY_STEPS } from "@/data/projects";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const filteredProjects =
    selectedCategory === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const flagshipProject = PROJECTS.find((p) => p.id === "saas-nr1")!;

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-grid-pattern border-b border-white/[0.06]">
          {/* Subtle radial glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SaaS Regulatório & Automação de Processos B2B</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 max-w-4xl leading-[1.15] mb-6">
              Transformo gargalos operacionais em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                produtos escaláveis e automações inteligentes.
              </span>
            </h1>

            {/* Subtitle / Pitch */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
              Desenvolvedor Full-Stack e Fundador Técnico. Uno domínio de regras
              de negócio, rigor arquitetural em{" "}
              <strong className="text-zinc-200 font-medium">
                TypeScript e Next.js
              </strong>{" "}
              e o poder da{" "}
              <strong className="text-emerald-400 font-medium">
                Engenharia de Software Aumentada por IA
              </strong>{" "}
              para construir sistemas robustos, rápidos e com impacto direto no faturamento das empresas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <Link
                href="/projetos/saas-nr1"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Conhecer o SaaS NR-1</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#projetos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-medium text-sm transition-all"
              >
                Ver Todas as Soluções
              </Link>
              <Link
                href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20software."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-emerald-400 text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Conversar no WhatsApp
              </Link>
            </div>

            {/* Architectural Highlights Strip */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-1">
                  Arquitetura Web
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  Next.js 14 App Router
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-1">
                  Banco & Segurança
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  PostgreSQL com RLS
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-1">
                  PDFs & Relatórios
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  Puppeteer Serverless
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-1">
                  Automação Operacional
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  Python & Playwright RPA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPOTLIGHT DO PROJETO PRINCIPAL (SAAS NR-1)               */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-24 border-b border-white/[0.06] bg-[#0c0c0e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Caso de Destaque • Produto Próprio
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                  SaaS de Gestão de Avaliações Psicossociais (NR-1)
                </h2>
              </div>
              <Link
                href="/projetos/saas-nr1"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Acessar estudo de caso completo com arquitetura
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Big Spotlight Card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-[#111915] to-[#0c0f0d] p-6 sm:p-8 md:p-10 shadow-2xl shadow-emerald-950/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Context & Problem/Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-mono text-xs">
                      Em Produção & Comercialização
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-400 border border-white/5 font-mono text-xs">
                      Setor: Medicina e Segurança do Trabalho (SST)
                    </span>
                  </div>

                  <p className="text-base text-zinc-300 leading-relaxed">
                    Plataforma corporativa construída para sanar uma dor crítica
                    de conformidade regulatória: a aplicação da{" "}
                    <strong className="text-zinc-100">NR-1 e NR-17</strong> para
                    gerenciamento de riscos psicossociais no PGR. O sistema
                    elimina formulários de papel e planilhas manuais, centralizando
                    todo o ciclo pericial até a emissão do laudo técnico assinado.
                  </p>

                  {/* Operational Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/5">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                        80%+
                      </div>
                      <div className="text-xs text-zinc-300 font-medium mt-0.5">
                        Tempo Economizado
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Na emissão do laudo
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/5">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                        70%
                      </div>
                      <div className="text-xs text-zinc-300 font-medium mt-0.5">
                        Quórum Pericial
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Validação estatística
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/5">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                        RLS
                      </div>
                      <div className="text-xs text-zinc-300 font-medium mt-0.5">
                        Isolamento Multi-Tenant
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        PostgreSQL seguro
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/5">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                        &lt; 5s
                      </div>
                      <div className="text-xs text-zinc-300 font-medium mt-0.5">
                        Laudos em PDF
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Headless Serverless
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href="/projetos/saas-nr1"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <span>Ver Estudo de Caso de Engenharia</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20SaaS%20NR-1."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 text-xs sm:text-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      Agendar Demonstração Comercial
                    </Link>
                  </div>
                </div>

                {/* Right Side: Architectural Mockup Panel */}
                <div className="lg:col-span-5 bg-zinc-950/80 rounded-xl border border-white/10 p-5 space-y-4 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] text-zinc-400">
                        saas-nr1-engine.ts
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                      STATUS: ONLINE
                    </span>
                  </div>

                  <div className="space-y-3 text-[11px] text-zinc-300">
                    <div className="p-2.5 rounded bg-zinc-900/70 border border-white/5 space-y-1">
                      <span className="text-zinc-400 block text-[10px]">
                        // 1. Motor Psicométrico (Likert Invertido)
                      </span>
                      <code className="text-emerald-300">
                        R = 6 - Nota; // Tratamento de fatores protetivos
                      </code>
                    </div>

                    <div className="p-2.5 rounded bg-zinc-900/70 border border-white/5 space-y-1">
                      <span className="text-zinc-400 block text-[10px]">
                        // 2. Validação Pericial de Quórum
                      </span>
                      <code className="text-zinc-300">
                        if (respondentes &lt; 0.70 * totalSetor) {"{"}
                        <br />
                        &nbsp;&nbsp;alertaQuorum(&apos;Amostragem insuficiente para laudo&apos;);
                        <br />
                        {"}"}
                      </code>
                    </div>

                    <div className="p-2.5 rounded bg-zinc-900/70 border border-white/5 space-y-1">
                      <span className="text-zinc-400 block text-[10px]">
                        // 3. Emissão Serverless do Laudo
                      </span>
                      <code className="text-teal-300">
                        puppeteer.launch(&apos;@sparticuz/chromium-min&apos;)
                        <br />
                        =&gt; Exporta PDF A4 Pericial em &lt; 5s
                      </code>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Multi-Tenancy por clinica_id</span>
                    <span className="text-emerald-400 font-semibold">
                      RLS Ativo ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SOLUÇÕES & PROJETOS                                      */}
        {/* ======================================================== */}
        <section id="projetos" className="py-16 sm:py-24 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  Portfólio de Engenharia
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                  Soluções, Sistemas & Automações
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-900 border border-white/5 text-xs">
                {[
                  { id: "todos", label: "Todos" },
                  { id: "saas", label: "SaaS B2B" },
                  { id: "automacao", label: "Automações RPA" },
                  { id: "sistema", label: "Sistemas & Gestão" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                      selectedCategory === tab.id
                        ? "bg-emerald-500 text-zinc-950 shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* METODOLOGIA: ENGENHARIA DE SOFTWARE AUMENTADA           */}
        {/* ======================================================== */}
        <section id="metodologia" className="py-16 sm:py-24 border-b border-white/[0.06] bg-[#0c0c0e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                Diferencial Competitivo
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
                Engenharia de Software Aumentada por IA
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                Trabalhar com Inteligência Artificial no desenvolvimento moderno
                não é sobre &quot;deixar a máquina programar sozinha&quot;. É sobre
                operar como <strong className="text-zinc-200">Arquiteto de Soluções e Auditor Crítico</strong>, 
                utilizando a IA como um pair programmer sênior de altíssima velocidade sob regras rígidas de negócio.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {METHODOLOGY_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#121215] p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        PILAR {step.number}
                      </span>
                      {idx === 0 ? (
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      ) : idx === 1 ? (
                        <Cpu className="w-5 h-5 text-teal-400" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-zinc-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Spec-Driven workflow callout */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-2xl">
                <h4 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Método Spec-Driven Development com Documentação Viva
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Todo projeto possui arquivos de balizamento de arquitetura que impedem
                  alucinações da IA e garantem contratos estritos de tipos, RLS multi-tenant 
                  e zero código depreciado em produção.
                </p>
              </div>
              <div className="font-mono text-xs px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-emerald-400 whitespace-nowrap">
                Zero Tolerância a Falhas
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SOBRE / TRAJETÓRIA & VISÃO DE NEGÓCIO                    */}
        {/* ======================================================== */}
        <section id="sobre" className="py-16 sm:py-24 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                    Trajetória & Filosofia
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                    A tecnologia como instrumento de eficiência e superação.
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                  <p>
                    Minha jornada na programação não começou com tutoriais abstratos, mas com{" "}
                    <strong className="text-zinc-200">uma dor real no ambiente de trabalho</strong>. 
                    Atuando em uma clínica de Medicina e Segurança do Trabalho, deparei-me com uma 
                    tarefa repetitiva que envolvia pesquisar manualmente 50 empresas em um sistema 
                    legado, campo por campo.
                  </p>
                  <p>
                    Incomodado com o desperdício de horas humanas, construí meu primeiro script de automação. 
                    Ali percebi que a verdadeira essência da engenharia de software não é apenas digitar sintaxe, 
                    mas <strong className="text-zinc-200">eliminar atritos, otimizar processos e gerar resultado financeiro para as operações</strong>.
                  </p>
                  <p>
                    Essa mesma postura de iniciativa guiou minha vida diante de severos desafios pessoais 
                    e na busca obstinada pelo aprendizado. Dos scripts básicos em Python à arquitetura 
                    de SaaS multi-tenant completos com Next.js 14 e Supabase, construo tecnologia 
                    com rigor, visão de produto e responsabilidade de ponta a ponta.
                  </p>
                </div>

                {/* Values Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Foco obsessivo em resolver problemas reais de negócio.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Rigor pericial e conformidade com normas regulatórias.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Autonomia total de ponta a ponta (do banco ao deploy).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Transparência comercial e entregas ágeis sem burocracia.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Card */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#141418] to-[#0f0f12] rounded-2xl border border-white/[0.08] p-6 sm:p-7 space-y-6">
                <div className="flex items-center gap-3 pb-5 border-b border-white/[0.08]">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-lg">
                    MA
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-100">
                      Mateus Assis
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Fundador Técnico & Engenheiro de Software
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Localização:</span>
                    <span className="text-zinc-200 font-medium">Brasil (Remoto / Global)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Modelo de Atuação:</span>
                    <span className="text-emerald-400 font-medium">Projetos B2B & Licenciamento SaaS</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Especialidade Core:</span>
                    <span className="text-zinc-200 font-medium">Sistemas Web & Automação RPA</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Formação:</span>
                    <span className="text-zinc-200 font-medium">Ciência da Computação (Foco Prático)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5">
                  <span className="text-[11px] font-mono text-emerald-400 block mb-1">
                    Posicionamento Executivo:
                  </span>
                  <p className="text-xs text-zinc-300 italic">
                    &quot;O valor de um software não está nas linhas de código digitadas,
                    mas nas horas manuais economizadas e nos riscos evitados para a empresa.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* CONTATO & CONVERSÃO COMERCIAL                            */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-28 relative overflow-hidden bg-grid-pattern">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Vamos conversar sobre o seu projeto
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mb-6">
              Pronto para transformar gargalos manuais em software eficiente?
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Seja para adotar o <strong className="text-zinc-200">SaaS da NR-1</strong> na sua clínica,
              desenvolver uma <strong className="text-zinc-200">automação personalizada</strong> para seu sistema legado ou firmar parcerias comerciais, estou à disposição.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20software."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25"
              >
                <MessageSquare className="w-4 h-4" />
                Conversar no WhatsApp
              </Link>
              <Link
                href="mailto:contato@mateusassis.dev"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                contato@mateusassis.dev
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
