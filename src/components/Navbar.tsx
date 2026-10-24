"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div
        className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-[#090d16]/85 backdrop-blur-2xl border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "bg-[#090d16]/60 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Monograma & Nome */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300 transition-colors shrink-0 group"
        >
          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-black shadow-[0_0_12px_rgba(56,189,248,0.5)]">
            M
          </span>
          <span className="tracking-tight text-white font-medium whitespace-nowrap">
            Mateus Assis
          </span>
          <span className="hidden lg:inline-block text-[11px] font-mono tracking-wider text-cyan-400/80 uppercase pl-2 border-l border-white/10 whitespace-nowrap">
            Design Eng &amp; Founder
          </span>
        </Link>

        {/* Links Centrais em Pílula */}
        <nav className="hidden md:flex items-center gap-1 text-xs lg:text-sm text-slate-300">
          <Link
            href="/#projetos"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
          >
            Estudos de Caso
          </Link>
          <Link
            href="/#sobre"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
          >
            Trajetória
          </Link>
          <Link
            href="/#contato"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
          >
            Contato
          </Link>
        </nav>

        {/* CTA Direito em Pílula Brilhante */}
        <Link
          href="https://wa.me/5500000000000?text=Ol%C3%A1%20Mateus,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20software."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all shrink-0 whitespace-nowrap"
        >
          <span>Falar Comigo</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
        </Link>
      </div>
    </header>
  );
}

