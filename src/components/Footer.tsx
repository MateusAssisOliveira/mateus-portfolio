"use client";

import React from "react";
import Link from "next/link";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0c0c0e] py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-zinc-800 border border-white/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                MA
              </div>
              <span className="text-sm font-semibold text-zinc-100">
                Mateus Assis
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Fundador técnico e desenvolvedor de soluções digitais. Foco em
              arquitetura de SaaS B2B, automação de rotinas operacionais e
              resolução de gargalos regulatórios de alta complexidade.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Aberto a contratos de desenvolvimento e parcerias estratégicas
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/#projetos"
                  className="hover:text-zinc-100 transition-colors"
                >
                  Soluções & Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos/saas-nr1"
                  className="text-emerald-400/90 hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  Estudo de Caso: SaaS NR-1
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#metodologia"
                  className="hover:text-zinc-100 transition-colors"
                >
                  Engenharia Aumentada
                </Link>
              </li>
              <li>
                <Link
                  href="/#sobre"
                  className="hover:text-zinc-100 transition-colors"
                >
                  Trajetória & Visão
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Canais Diretos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Comercial
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contato@mateusassis.dev"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  contato@mateusassis.dev
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {currentYear} Mateus Assis. Todos os direitos reservados.</p>
          <p className="font-mono text-zinc-400">
            Next.js 14 • Supabase • TypeScript • Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
