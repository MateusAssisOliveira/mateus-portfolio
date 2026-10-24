"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1e222b] py-10 text-[#717887] text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left">
          &copy; 2026 Mateus Assis. Engenharia de software e arquiteturas autorais.
        </p>
        <div className="flex items-center gap-6 text-[#a3aab8]">
          <Link
            href="https://github.com/MateusAssisOliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f1f3f7] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f1f3f7] transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="mailto:contato@mateusassis.dev"
            className="hover:text-[#f1f3f7] transition-colors"
          >
            contato@mateusassis.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
