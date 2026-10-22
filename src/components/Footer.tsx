"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1c1c20] py-12 text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500">
          © 2026 Mateus Assis • Construído com Next.js & TypeScript.
        </p>
        <div className="flex items-center gap-6 text-zinc-400">
          <Link
            href="https://github.com/MateusAssisOliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="mailto:contato@mateusassis.dev"
            className="hover:text-amber-400 transition-colors"
          >
            contato@mateusassis.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
