"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1a1a1a] py-12 text-zinc-500 text-xs">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Mateus Assis. Desenvolvido com Next.js.</p>
        <div className="flex items-center gap-5 text-zinc-400">
          <Link
            href="https://github.com/MateusAssisOliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="mailto:contato@mateusassis.dev"
            className="hover:text-white transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
