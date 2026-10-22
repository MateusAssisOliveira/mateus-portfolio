"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Nr1Preview } from "@/components/previews/Nr1Preview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0f0f11] text-[#f4f4f5] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-20 sm:space-y-28">
        {/* ======================================================== */}
        {/* HERO SECTION AUTORAL (THE INDEPENDENT FOUNDER)           */}
        {/* ======================================================== */}
        <section className="space-y-8 max-w-3xl">
          {/* Eyebrow de Assinatura */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="tracking-wider uppercase">Engenharia de Software & Produtos Digitais</span>
          </div>

          {/* Título com Serif Editorial */}
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-100 leading-[1.2]">
            Construo plataformas regulatórias, sistemas multi-tenant e{" "}
            <span className="font-serif-title italic font-normal text-amber-200/95 text-[1.15em] tracking-normal">
              automações que eliminam retrabalho corporativo.
            </span>
          </h1>

          {/* Subtítulo Autoral na Primeira Pessoa */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Uno o conhecimento pericial das normas de Medicina e Segurança do Trabalho (NR-1)
            a uma arquitetura segura em <strong className="text-zinc-200 font-medium">TypeScript</strong>,{" "}
            <strong className="text-zinc-200 font-medium">Next.js</strong> e{" "}
            <strong className="text-zinc-200 font-medium">PostgreSQL com RLS</strong>.
            Desenvolvo ferramentas autorais para resolver gargalos reais onde o erro manual custa caro.
          </p>

          {/* Botões de Ação Táteis */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="#projetos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Explorar criações</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-700" />
            </Link>

            <Link
              href="#sobre"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm transition-colors"
            >
              <span>Minha trajetória</span>
            </Link>

            <Link
              href="mailto:contato@mateusassis.dev"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 text-xs sm:text-sm transition-colors ml-1"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Barra de Telemetria e Métricas Integradas */}
          <div className="pt-8 border-t border-[#1c1c20] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="font-mono text-xl font-semibold text-zinc-100 block">3 Produtos</span>
              <span className="text-zinc-500 text-[11px] mt-0.5 block">No ar na Vercel</span>
            </div>
            <div>
              <span className="font-mono text-xl font-semibold text-zinc-100 block">+50 Empresas</span>
              <span className="text-zinc-500 text-[11px] mt-0.5 block">Automatizadas em lote</span>
            </div>
            <div>
              <span className="font-mono text-xl font-semibold text-zinc-100 block">80%+ Redução</span>
              <span className="text-zinc-500 text-[11px] mt-0.5 block">No tempo de laudos</span>
            </div>
            <div>
              <span className="font-mono text-xl font-semibold text-zinc-100 block">100% Autoral</span>
              <span className="text-zinc-500 text-[11px] mt-0.5 block">Regras periciais & RLS</span>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* VITRINE EM DESTAQUE (SAAS NR-1)                          */}
        {/* ======================================================== */}
        <section id="projetos" className="space-y-6">
          <div className="flex items-baseline justify-between pb-3 border-b border-[#1c1c20]">
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500">
              Projeto em Destaque
            </span>
            <span className="text-xs font-mono text-zinc-500">
              01 / 04
            </span>
          </div>

          <div className="rounded-2xl border border-[#242429] bg-[#141417] p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Lado Esquerdo: Engenharia & Proposta de Valor */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    SaaS Regulatório B2B
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Em Produção
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 tracking-tight">
                    SaaS de Gestão de Riscos Psicossociais (NR-1)
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Plataforma corporativa ponta a ponta para clínicas de Medicina do Trabalho.
                    Digitaliza formulários com cartazes e QR Code, calcula a inversão da escala Likert,
                    valida o quórum pericial de 70% e emite laudos periciais completos em PDF
                    via Chromium headless na nuvem em menos de 5 segundos.
                  </p>
                </div>

                {/* Especificações de Arquitetura em Linha (Sem cards-in-card) */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#202025] text-xs">
                  <div>
                    <span className="font-mono text-zinc-200 font-semibold block text-sm">70% Quórum</span>
                    <span className="text-zinc-500 text-[11px]">Validação pericial mínima</span>
                  </div>
                  <div>
                    <span className="font-mono text-zinc-200 font-semibold block text-sm">&lt; 5s Serverless</span>
                    <span className="text-zinc-500 text-[11px]">PDF A4 via Puppeteer</span>
                  </div>
                  <div>
                    <span className="font-mono text-zinc-200 font-semibold block text-sm">PostgreSQL RLS</span>
                    <span className="text-zinc-500 text-[11px]">Isolamento estrito multi-tenant</span>
                  </div>
                  <div>
                    <span className="font-mono text-zinc-200 font-semibold block text-sm">Next.js 14 + Supabase</span>
                    <span className="text-zinc-500 text-[11px]">Arquitetura de alto desempenho</span>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/projetos/saas-nr1"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all shadow-sm"
                  >
                    <span>Estudo de caso completo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                    Disponível para demonstração técnica
                  </span>
                </div>
              </div>

              {/* Lado Direito: Preview Fiel e Realista */}
              <div className="lg:col-span-6 w-full min-w-0">
                <Nr1Preview />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* LISTA EDITORIAL DOS DEMAIS PROJETOS                      */}
        {/* ======================================================== */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between pb-3 border-b border-[#1c1c20]">
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500">
              Aplicações & Automações Adicionais
            </span>
            <span className="text-xs font-mono text-zinc-500">
              3 Soluções
            </span>
          </div>

          <div className="divide-y divide-[#1c1c20] border-t border-[#1c1c20]">
            {/* Projeto 02: Gerador de Certificados */}
            <article className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group">
              <div className="md:col-span-1 font-mono text-xs text-zinc-500">
                02.
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  <Link href="/projetos/gerador-certificados">
                    Gerador de Certificados SST
                  </Link>
                </h3>
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <span>Web App</span>
                  <span>•</span>
                  <span>Python & Vercel</span>
                </div>
              </div>
              <div className="md:col-span-5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Emissão em lote de certificados periciais em conformidade com as Normas Regulamentadoras (NR-1, NR-10, NR-35). Elimina digitação manual repetitiva de turmas inteiras e previne erros cadastrais perante órgãos fiscalizadores.
              </div>
              <div className="md:col-span-2 flex md:justify-end items-center gap-3 text-xs">
                <Link
                  href="/projetos/gerador-certificados"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Estudo &rarr;
                </Link>
                <Link
                  href="https://gerador-certificados-treinamento.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-amber-400 transition-colors inline-flex items-center gap-0.5"
                >
                  <span>Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </article>

            {/* Projeto 03: App Joyce Cakes */}
            <article className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group">
              <div className="md:col-span-1 font-mono text-xs text-zinc-500">
                03.
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  <Link href="/projetos/doce-caixa">
                    App Joyce Cakes & Doce Caixa
                  </Link>
                </h3>
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>React & Finanças</span>
                </div>
              </div>
              <div className="md:col-span-5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Aplicação de gestão operacional e fichas técnicas dinâmicas para confeitarias artesanais. Decomposição de custos por grama de ingrediente e cálculo automático de preço de venda e margem de lucro real.
              </div>
              <div className="md:col-span-2 flex md:justify-end items-center gap-3 text-xs">
                <Link
                  href="/projetos/doce-caixa"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Estudo &rarr;
                </Link>
                <Link
                  href="https://app-joyce-cakes.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-amber-400 transition-colors inline-flex items-center gap-0.5"
                >
                  <span>Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </article>

            {/* Projeto 04: RPA Corporativo em Python */}
            <article className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group">
              <div className="md:col-span-1 font-mono text-xs text-zinc-500">
                04.
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  RPA Corporativo em Python
                </h3>
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <span>Python</span>
                  <span>•</span>
                  <span>Playwright & Automação</span>
                </div>
              </div>
              <div className="md:col-span-5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Robôs de automação inteligente para eliminação de tarefas repetitivas em sistemas web legados sem APIs públicas. Processamento tolerante a falhas de mais de 50 empresas em lote com relatórios automatizados de auditoria.
              </div>
              <div className="md:col-span-2 flex md:justify-end items-center gap-3 text-xs">
                <span className="text-zinc-500 font-mono text-[11px]">
                  Solução Operacional
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO SOBRE MIM & HISTÓRIA REAL                          */}
        {/* ======================================================== */}
        <section id="sobre" className="space-y-6 border-t border-[#1c1c20] pt-12 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500 block">
                Trajetória & Filosofia
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 font-serif-title italic">
                De um script no escritório a produtos no ar.
              </h2>
            </div>

            <div className="md:col-span-8 text-xs sm:text-base text-zinc-400 leading-relaxed space-y-4">
              <p>
                Meu contato com a programação surgiu no ambiente de trabalho, dentro de uma
                clínica de Medicina e Segurança do Trabalho. Diante de uma rotina diária repetitiva
                envolvendo mais de 50 empresas em um sistema legado dos anos 2000, desenvolvi meu
                primeiro script em Python para eliminar aquele retrabalho e evitar erros manuais.
              </p>
              <p>
                A partir daquela experiência, direcionei meus estudos para a resolução prática de
                problemas de negócio. Cursei Ciência da Computação até o 5º período e segui
                aprofundando minha formação de forma independente e orientada a produtos reais.
              </p>
              <p>
                Hoje, meu trabalho combina rigor arquitetural com velocidade de execução:
                defino as regras de negócio, a segurança do banco (como Row Level Security no PostgreSQL)
                e a conformidade normativa, garantindo que cada ferramenta entregue seja rápida,
                segura e comercialmente viável.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* CONTATO DIRETO                                           */}
        {/* ======================================================== */}
        <section id="contato" className="space-y-6 border-t border-[#1c1c20] pt-12 sm:pt-16">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 tracking-tight">
              Vamos conversar sobre uma solução?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Disponível para desenvolvimento de projetos sob medida, automações corporativas
              e licenciamento do SaaS NR-1.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="mailto:contato@mateusassis.dev"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>contato@mateusassis.dev</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
            </Link>

            <Link
              href="https://github.com/MateusAssisOliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm transition-colors"
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
