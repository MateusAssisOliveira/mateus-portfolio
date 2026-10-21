"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
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
    <div className="flex flex-col min-h-screen w-full bg-[#000000] text-[#ededed] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* ======================================================== */}
        {/* HERO SECTION DE ALTO IMPACTO (OPÇÃO 1 - FOCO B2B)        */}
        {/* ======================================================== */}
        <section className="space-y-6 max-w-3xl">
          {/* Badge de Disponibilidade */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>Disponível para projetos sob medida & licenciamento SaaS</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-2xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Transformo gargalos operacionais e normas regulatórias em{" "}
            <span className="text-zinc-400">produtos digitais escaláveis.</span>
          </h1>

          {/* Subtítulo com posicionamento claro */}
          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
            Desenvolvedor Full-Stack e Fundador Técnico. Uno domínio pericial de regras
            de negócio (SST e NR-1) a uma arquitetura moderna em{" "}
            <strong className="text-white font-medium">TypeScript e Next.js</strong> e
            automações em <strong className="text-white font-medium">Python</strong> para
            eliminar o retrabalho manual das empresas.
          </p>

          {/* Botões de Ação Imediata (Estilo Vercel/Linear - Preto no Branco) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#projetos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Explorar Projetos & Demos</span>
              <ArrowDown className="w-4 h-4" />
            </Link>

            <Link
              href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 text-xs sm:text-sm transition-colors"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Barra de Prova Rápida (Métricas Reais) */}
          <div className="pt-6 border-t border-[#1c1c1c] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>3 Produtos no ar na Vercel</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>+50 Empresas automatizadas em lote</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>Arquitetura 100% autoral</span>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SHOWCASE DOS PROJETOS                                    */}
        {/* ======================================================== */}
        <section id="projetos" className="space-y-8 sm:space-y-10">
          <div className="border-b border-[#1c1c1c] pb-3 flex items-baseline justify-between">
            <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-zinc-400">
              Projetos & Aplicações em Destaque
            </h2>
            <span className="text-xs text-zinc-500 font-mono">
              {PROJECTS.length} produtos
            </span>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl border border-[#222222] bg-[#0c0c0e] p-4 sm:p-6 md:p-8 hover:border-zinc-700/80 transition-all shadow-lg w-full overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center w-full">
                  {/* Lado Esquerdo: Conteúdo, Métricas e Ações */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5 w-full min-w-0">
                    {/* Header do Card */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] sm:text-xs font-mono font-medium text-zinc-200 bg-zinc-900 border border-zinc-700/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                          {project.categoryLabel}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          0{index + 1}
                        </span>
                      </div>

                      <span className="text-[11px] sm:text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 sm:py-1 rounded border border-white/5">
                        {project.statusLabel}
                      </span>
                    </div>

                    {/* Título & Descrição */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white break-words">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Métricas Reais do Projeto */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 w-full">
                        {project.metrics.slice(0, 3).map((metric, i) => (
                          <div
                            key={i}
                            className="p-2 sm:p-2.5 rounded-lg bg-zinc-950/80 border border-[#1f1f22] min-w-0 overflow-hidden"
                          >
                            <span className="text-sm sm:text-base font-bold font-mono text-white block truncate">
                              {metric.value}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 font-medium block truncate mt-0.5">
                              {metric.label}
                            </span>
                            {metric.description && (
                              <span className="text-[10px] text-zinc-500 block truncate mt-0.5">
                                {metric.description}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stack */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <span className="text-zinc-500 font-sans mr-1 text-[11px]">Stack:</span>
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300 text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                      {project.hasDedicatedPage && (
                        <Link
                          href={`/projetos/${project.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm transition-all shadow-sm"
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
                          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-[#27272a] text-xs sm:text-sm transition-colors"
                        >
                          <span>Testar no ar</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}

                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-lg text-zinc-400 hover:text-white text-xs sm:text-sm transition-colors"
                        >
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Lado Direito: Demonstração Visual */}
                  <div className="lg:col-span-5 w-full min-w-0">
                    {renderPreview(project.id)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SOBRE MIM                                                */}
        {/* ======================================================== */}
        <section id="sobre" className="space-y-4 sm:space-y-6 border-t border-[#1c1c1c] pt-10 sm:pt-12">
          <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-zinc-400">
            Sobre mim & Trajetória
          </h2>

          <div className="text-xs sm:text-base text-zinc-300 leading-relaxed space-y-3 sm:space-y-4 max-w-2xl">
            <p>
              Meu contato com a programação surgiu no ambiente de trabalho, dentro
              de uma clínica de Medicina e Segurança do Trabalho. Diante de uma rotina
              manual repetitiva envolvendo mais de 50 empresas em um sistema legado,
              desenvolvi meu primeiro script de automação para eliminar aquele retrabalho.
            </p>
            <p>
              A partir daquela experiência, direcionei meus estudos para a resolução
              de problemas reais de negócio. Cursei Ciência da Computação até o 5º período
              e segui aprofundando minha formação de forma prática e independente.
            </p>
            <p>
              Hoje, meu fluxo de trabalho combina rigor arquitetural e domínio do negócio
              com o uso de Inteligência Artificial para acelerar o desenvolvimento. Atuo
              definindo as regras, a segurança do banco (como Row Level Security) e a
              conformidade normativa, garantindo que o software entregue seja seguro,
              rápido e comercialmente viável.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* CONTATO DIRETO                                           */}
        {/* ======================================================== */}
        <section id="contato" className="space-y-4 sm:space-y-6 border-t border-[#1c1c1c] pt-10 sm:pt-12">
          <div className="space-y-1">
            <h2 className="text-sm sm:text-base font-medium text-white">Contato Direto</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Disponível para projetos sob medida, automações operacionais e parcerias.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm pt-1">
            <Link
              href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </Link>

            <Link
              href="mailto:contato@mateusassis.dev"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-[#27272a] text-xs sm:text-sm transition-colors"
            >
              <span>contato@mateusassis.dev</span>
            </Link>

            <Link
              href="https://github.com/MateusAssisOliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
