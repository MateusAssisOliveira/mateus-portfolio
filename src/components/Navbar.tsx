"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Shield, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#09090b]/85 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm shadow-inner group-hover:border-emerald-500/50 transition-colors">
            MA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-100 flex items-center gap-2">
              Mateus Assis
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-normal text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Soluções B2B
              </span>
            </span>
            <span className="text-[11px] text-zinc-400 hidden sm:block">
              Fundador Técnico & Engenharia de Software
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <Link
            href="/#projetos"
            className="hover:text-zinc-100 transition-colors"
          >
            Soluções & Projetos
          </Link>
          <Link
            href="/projetos/saas-nr1"
            className="text-emerald-400/90 hover:text-emerald-300 font-medium flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            SaaS NR-1
          </Link>
          <Link
            href="/#metodologia"
            className="hover:text-zinc-100 transition-colors"
          >
            Metodologia & IA
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-zinc-100 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/#contato"
            className="hover:text-zinc-100 transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20tecnologia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-sm hover:shadow-emerald-500/20"
          >
            Agendar Conversa
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-lg border border-white/5 bg-zinc-900"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0c0e] px-4 py-4 space-y-3">
          <Link
            href="/#projetos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 py-1.5 hover:text-emerald-400"
          >
            Soluções & Projetos
          </Link>
          <Link
            href="/projetos/saas-nr1"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-emerald-400 font-medium py-1.5"
          >
            ✦ Estudo de Caso: SaaS NR-1
          </Link>
          <Link
            href="/#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 py-1.5 hover:text-emerald-400"
          >
            Metodologia & IA
          </Link>
          <Link
            href="/#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 py-1.5 hover:text-emerald-400"
          >
            Minha Trajetória
          </Link>
          <Link
            href="/#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 py-1.5 hover:text-emerald-400"
          >
            Contato Comercial
          </Link>
          <div className="pt-2">
            <Link
              href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20tecnologia."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium"
            >
              Falar no WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
