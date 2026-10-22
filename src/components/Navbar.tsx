"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1c1c20] bg-[#0f0f11]/85 backdrop-blur-md">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex flex-col shrink-0">
          <span className="text-sm font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors tracking-tight">
            Mateus Assis
          </span>
          <span className="text-[11px] text-zinc-500 font-normal hidden sm:inline-block">
            Software & Ferramentas Independentes
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm text-zinc-400">
          <Link
            href="/#projetos"
            className="hover:text-zinc-100 transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-zinc-100 transition-colors"
          >
            Trajetória
          </Link>
          <Link
            href="/#contato"
            className="hover:text-zinc-100 transition-colors"
          >
            Contato
          </Link>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 text-[11px] text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse" />
            <span>Disponível</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
