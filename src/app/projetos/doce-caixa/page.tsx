import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "App Joyce Cakes & Doce Caixa | Mateus Assis",
  description:
    "Estudo de caso da aplicação de gestão para confeitarias desenvolvida em TypeScript por Mateus Assis.",
};

export default function DoceCaixaCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0f0f11] text-[#f4f4f5] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-12 sm:space-y-16">
        <div>
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Voltar aos projetos</span>
          </Link>
        </div>

        <section className="space-y-4 border-b border-[#202025] pb-8">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
              Web App • Gestão Comercial
            </span>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-100 break-words">
              App Joyce Cakes & Doce Caixa
            </h1>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Aplicação web desenvolvida em TypeScript e React para controle
            operacional de confeitarias artesanais, decomposição de custos
            por ingrediente e precificação baseada em fichas técnicas.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-zinc-400 font-mono">
            <span>TypeScript</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Hospedado na Vercel</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3 text-xs">
            <Link
              href="https://app-joyce-cakes.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition-all shadow-sm"
            >
              <span>Acessar aplicação online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="https://github.com/MateusAssisOliveira/app_joyceCakes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
            >
              <span>Ver no GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </Link>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-zinc-100">1. O Desafio</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              No ramo de confeitarias artesanais, muitos microempreendedores precificam
              seus produtos sem clareza do custo real de produção. Ingredientes como
              chocolates, manteigas e embalagens sofrem constantes oscilações de preço.
            </p>
            <p>
              Sem um cálculo automatizado que considere cada grama e perda de insumos,
              é comum vender itens com margem negativa ou lucro insuficiente para
              sustentar o negócio no longo prazo.
            </p>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-zinc-100">2. A Solução</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Construí uma aplicação com foco em simplicidade de uso: o usuário cadastra
              os insumos comprados com seus respectivos custos e medidas. Ao montar a
              ficha técnica de uma receita (ex: um bolo ou sobremesa), o sistema calcula
              automaticamente:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>O custo exato de produção por unidade ou peso final.</li>
              <li>A margem líquida desejada e a sugestão de preço mínimo de venda.</li>
              <li>A organização do catálogo de produtos e pedidos.</li>
            </ul>
            <p>
              O sistema foi construído em TypeScript com componentes reutilizáveis e
              está publicado na Vercel com design totalmente adaptado para uso no celular.
            </p>
          </div>
        </section>

        <div className="border-t border-[#202025] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <Link
            href="/#projetos"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            &larr; Voltar aos projetos
          </Link>
          <Link
            href="https://app-joyce-cakes.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition-all"
          >
            <span>Testar aplicação online</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
