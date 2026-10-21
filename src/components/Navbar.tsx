"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1c1c1c] bg-[#000000]/85 backdrop-blur-md">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-white hover:text-zinc-300 transition-colors shrink-0"
        >
          Mateus Assis
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400">
          <Link
            href="/#projetos"
            className="hover:text-white transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-white transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/#contato"
            className="hover:text-white transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
