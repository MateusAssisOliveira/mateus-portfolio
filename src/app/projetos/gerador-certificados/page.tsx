import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Gerador de Certificados de Treinamento em SST | Mateus Assis",
  description:
    "Estudo de caso da aplicação web para emissão de certificados de treinamento em SST.",
};

export default function GeradorCertificadosCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#000000] text-[#ededed] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-12 sm:space-y-16">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao início</span>
          </Link>
        </div>

        <section className="space-y-4 border-b border-[#1c1c1c] pb-8">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-zinc-500 uppercase">
              Aplicação Web • SST
            </span>
            <h1 className="text-xl sm:text-4xl font-semibold tracking-tight text-white break-words">
              Gerador de Certificados de Treinamento em SST
            </h1>
          </div>

          <p className="text-xs sm:text-base text-zinc-400 leading-relaxed">
            Aplicação desenvolvida para automatizar a emissão e padronização visual
            de certificados periciais de capacitação em Normas Regulamentadoras
            (como NR-1, NR-10, NR-35 e NR-33).
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-zinc-400 font-mono">
            <span>Python</span>
            <span>•</span>
            <span>Web App</span>
            <span>•</span>
            <span>Hospedado na Vercel</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3 text-xs">
            <Link
              href="https://gerador-certificados-treinamento.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold transition-all shadow-sm"
            >
              <span>Acessar online na Vercel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="https://github.com/MateusAssisOliveira/gerador-certificados-treinamento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
            >
              <span>Ver no GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-white">1. O Desafio</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Em clínicas e consultorias de Saúde e Segurança do Trabalho, cada treinamento
              concluído exige a emissão formal de certificados contendo dados específicos:
              nome completo, CPF, carga horária, datas, assinatura do instrutor e conteúdo
              programático exigido por lei.
            </p>
            <p>
              Preencher esses documentos manualmente em arquivos de Word ou softwares de
              design para turmas de dezenas de colaboradores consumia horas de trabalho
              repetitivo e abria margem para erros humanos em datas e documentos.
            </p>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-white">2. A Solução</h2>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Desenvolvi uma ferramenta web direta ao ponto: o operador insere a lista
              de participantes e os dados do treinamento, e a aplicação gera certificados
              padronizados com layout oficial em alta resolução, prontos para impressão
              ou entrega digital aos órgãos fiscalizadores.
            </p>
            <p>
              O sistema foi publicado e mantido com deploy contínuo na Vercel, permitindo
              acesso ágil a partir de qualquer navegador sem necessidade de instalações locais.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            &larr; Voltar ao portfólio
          </Link>
          <Link
            href="https://gerador-certificados-treinamento.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold transition-all"
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
