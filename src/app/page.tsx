"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/data/projects";
import { Nr1Preview } from "@/components/previews/Nr1Preview";
import { CertificadosPreview } from "@/components/previews/CertificadosPreview";
import { JoyceCakesPreview } from "@/components/previews/JoyceCakesPreview";
import { RpaPreview } from "@/components/previews/RpaPreview";

export default function Home() {
  const renderPreview = (id: string) => {
    switch (id) {
      case "saas-nr1":
        return <Nr1Preview />;
      case "gerador-certificados":
        return <CertificadosPreview />;
      case "doce-caixa":
        return <JoyceCakesPreview />;
      case "automacoes-corporativas":
        return <RpaPreview />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#06080d] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      {/* ======================================================== */}
      {/* HERO SECTION: CINEMÁTICO & DARK GLASSMORPHISM            */}
      {/* ======================================================== */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image com Máscara de Gradiente Duplo */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/hero-bg.jpg"
            alt="Ambiente digital de engenharia e horizonte cinematográfico"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity brightness-95 scale-105 transition-transform duration-1000"
          />
          {/* Vinheta escura & gradientes de profundidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#06080d]/90 via-[#06080d]/40 to-[#06080d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
        </div>

        {/* Conteúdo Central do Hero */}
        <div className="relative z-10 max-w-6xl w-full mx-auto my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Lado Esquerdo: Mensagem de Posicionamento e Tipografia Display */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-7">
              {/* Pill Kicker Badge com Luz Pulsante */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] max-w-full">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold truncate sm:whitespace-normal">
                  Engenharia · Arquitetura · Automação SST
                </span>
              </div>

              {/* Título Principal com Gradiente Elétrico Ciano & Nexora Display */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wider text-white leading-[1.12]">
                Transformando Normas em{" "}
                <span className="block sm:inline bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                  Software de Alto Impacto.
                </span>
              </h1>

              {/* Subtítulo com Autoridade e Clareza */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 leading-relaxed max-w-2xl font-normal">
                Fundador Técnico & Desenvolvedor Full-Stack. Uno vivência operacional direta
                em regras de negócio corporativas (SST e NR-1) a uma engenharia sólida em{" "}
                <span className="text-white font-semibold">TypeScript, Next.js e Supabase</span>,
                construindo sistemas seguros e auditados prontos para escala.
              </p>

              {/* Ações em Pílula Glow */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="#projetos"
                  className="btn-press inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all"
                >
                  <span>Explorar Estudos de Caso</span>
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <Link
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20software."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-white border border-white/20 hover:border-white/40 backdrop-blur-xl text-xs sm:text-sm font-medium transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  <span>Conversar no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 stroke-[2]" />
                </Link>
              </div>
            </div>

            {/* Lado Direito: Floating Glass Highlight Card (Estilo Identidade Visual) */}
            <div className="lg:col-span-4 hidden sm:block">
              <div className="relative rounded-3xl p-6 bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-4 group hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      SaaS em Produção
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                    NR-1 Ocupacional
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Plataforma SaaS NR-1
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Auditoria e conformidade contínua de Segurança do Trabalho com controle granular via RLS no PostgreSQL.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-sm font-bold font-mono text-cyan-300 block">
                      100%
                    </span>
                    <span className="text-[10px] text-slate-400">Conformidade NR-1</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-sm font-bold font-mono text-emerald-300 block">
                      Multi-Tenant
                    </span>
                    <span className="text-[10px] text-slate-400">PostgreSQL RLS</span>
                  </div>
                </div>

                <Link
                  href="/projetos/saas-nr1"
                  className="btn-press flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-medium text-white transition-all"
                >
                  <span>Ver Estudo Completo</span>
                  <span className="text-cyan-400 font-bold">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dock Inferior: Métricas em Pílulas de Vidro & Indicador de Scroll */}
        <div className="relative z-10 max-w-6xl w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold text-white block">3 Softwares no ar</span>
                <span className="text-[11px] text-slate-400 block">Vercel &amp; Supabase</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold text-white block">+50 Empresas</span>
                <span className="text-[11px] text-slate-400 block">Automatizadas em lote</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Layers className="w-4 h-4 text-sky-400 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold text-white block">100% Autoral</span>
                <span className="text-[11px] text-slate-400 block">Arquitetura e código</span>
              </div>
            </div>
          </div>

          {/* Mouse Scroll Indicator Animado */}
          <div className="hidden lg:flex items-center gap-3 text-slate-400 text-xs">
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
              Rolar para navegar
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SHOWCASE DOS ESTUDOS DE CASO (DARK GLASSMORPHIC CARDS)   */}
      {/* ======================================================== */}
      <section
        id="projetos"
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-b from-[#06080d] via-[#090d16] to-[#06080d]"
      >
        <div className="max-w-6xl w-full mx-auto space-y-12 sm:space-y-16">
          {/* Header da Seção */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfólio de Engenharia</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Estudos de Caso &amp; Softwares no Ar
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Cada sistema foi construído a partir de uma dor de mercado real, com arquitetura autoral, métricas auditadas e interface de alta densidade.
            </p>
          </div>

          {/* Lista de Projetos com Visual Glassmorphism */}
          <div className="space-y-10 sm:space-y-14">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-white/10 bg-[#0c1017]/85 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 transition-all duration-300 w-full overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center w-full">
                  {/* Lado Esquerdo: Conteúdo, História, Métricas e Ações */}
                  <div className="lg:col-span-7 space-y-5 w-full min-w-0">
                    {/* Header do Card */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-white/10">
                      <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                        {project.categoryLabel}
                      </span>

                      <span className="text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 font-mono">
                        {project.statusLabel}
                      </span>
                    </div>

                    {/* Título & Descrição */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white break-words">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* O Gargalo de Negócio / Origem da Solução */}
                    <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1.5 text-xs sm:text-sm">
                      <span className="text-amber-400 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Problema de Mercado Resolvido:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {project.businessProblem}
                      </p>
                    </div>

                    {/* Métricas Reais do Projeto */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 w-full">
                        {project.metrics.slice(0, 3).map((metric, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 min-w-0 overflow-hidden"
                          >
                            <span className="text-lg sm:text-xl font-extrabold font-mono text-cyan-300 block truncate">
                              {metric.value}
                            </span>
                            <span className="text-xs text-white font-semibold block truncate mt-0.5">
                              {metric.label}
                            </span>
                            {metric.description && (
                              <span className="text-[11px] text-slate-400 block mt-1 line-clamp-2 leading-tight">
                                {metric.description}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stack & Arquitetura */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 pt-1">
                      <span className="text-slate-400 font-mono mr-1">Arquitetura:</span>
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      {project.hasDedicatedPage && (
                        <Link
                          href={`/projetos/${project.slug}`}
                          className="btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(56,189,248,0.35)] transition-all"
                        >
                          <span>Estudo de caso</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      )}

                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-medium transition-all"
                        >
                          <span>Testar no ar</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                        </Link>
                      )}

                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-press inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-xs sm:text-sm transition-all"
                        >
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Lado Direito: Demonstração Visual Interativa */}
                  <div className="lg:col-span-5 w-full min-w-0">
                    <div className="rounded-2xl p-2 bg-black/40 border border-white/10 shadow-2xl">
                      {renderPreview(project.id)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SOBRE MIM & ORIGEM DA ENGENHARIA                        */}
      {/* ======================================================== */}
      <section id="sobre" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl w-full mx-auto">
          <div className="rounded-3xl border border-white/10 bg-[#0c1017]/80 backdrop-blur-2xl p-8 sm:p-12 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
              <div className="md:col-span-4 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                  Fundação Técnica
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Trajetória &amp; Origem
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A vivência prática no chão operacional de SST que moldou uma engenharia rigorosa e orientada a regras de negócio.
                </p>
              </div>

              <div className="md:col-span-8 text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 font-normal">
                <p>
                  Meu contato com a programação não começou por tutoriais genéricos, mas no ambiente de trabalho, dentro de uma clínica de Medicina e Segurança do Trabalho. Diante de uma rotina manual e repetitiva envolvendo mais de 50 empresas em um sistema legado, desenvolvi meu primeiro script de automação para eliminar o retrabalho e o risco de erros humanos.
                </p>
                <p>
                  A partir daquela experiência, direcionei meus estudos para a resolução de problemas reais de negócio. Cursei Ciência da Computação até o 5º período e segui aprofundando minha formação de forma prática e independente na construção de produtos prontos para produção.
                </p>
                <p>
                  Hoje, meu fluxo de trabalho combina rigor arquitetural e domínio do negócio com o uso de ferramentas avançadas de inteligência artificial para acelerar a entrega técnica. Atuo definindo as regras, a segurança do banco de dados (como Row Level Security no PostgreSQL) e a conformidade regulatória, garantindo que o software entregue seja seguro, rápido e comercialmente viável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CONTATO DIRETO (PÍLULA & CALL TO ACTION)                */}
      {/* ======================================================== */}
      <section id="contato" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Disponibilidade Imediata
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Vamos Construir o Próximo Software?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              Disponível para desenvolvimento de soluções sob medida, licenciamento do ecossistema SST e automações corporativas.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <Link
              href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              href="mailto:contato@mateusassis.dev"
              className="btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md transition-all font-medium"
            >
              <span>contato@mateusassis.dev</span>
            </Link>

            <Link
              href="https://github.com/MateusAssisOliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all font-medium"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

