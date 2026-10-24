import React from "react";
import { ChefHat, Check } from "lucide-react";

export function JoyceCakesPreview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#1e222b] bg-[#161922] p-4 sm:p-5 space-y-3.5 font-sans text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#1e222b] text-[#a3aab8] gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <ChefHat className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-semibold text-xs text-[#f1f3f7] truncate">
            Ficha Técnica Dinâmica
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40 shrink-0">
          <Check className="w-3 h-3" />
          <span>Margem Lucro: 62%</span>
        </span>
      </div>

      {/* Recipe Info */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-baseline gap-2">
          <h4 className="text-xs sm:text-sm font-bold text-[#f1f3f7] truncate">
            Bolo Artesanal Trufado
          </h4>
          <span className="text-xs text-[#717887] shrink-0 font-mono">1.2 kg</span>
        </div>

        {/* Insumos */}
        <div className="space-y-1 text-xs">
          <div className="p-2 rounded bg-[#111318] border border-[#1e222b] flex justify-between items-center gap-2">
            <span className="text-[#a3aab8] truncate">Chocolate Meio Amargo (350g)</span>
            <span className="font-mono text-amber-300 font-medium shrink-0">R$ 14,20</span>
          </div>
          <div className="p-2 rounded bg-[#111318] border border-[#1e222b] flex justify-between items-center gap-2">
            <span className="text-[#a3aab8] truncate">Leite Condensado & Creme</span>
            <span className="font-mono text-amber-300 font-medium shrink-0">R$ 10,50</span>
          </div>
          <div className="p-2 rounded bg-[#111318] border border-[#1e222b] flex justify-between items-center gap-2">
            <span className="text-[#a3aab8] truncate">Embalagem Kraft & Fita</span>
            <span className="font-mono text-amber-300 font-medium shrink-0">R$ 3,80</span>
          </div>
        </div>
      </div>

      {/* Preço de Custo vs Venda */}
      <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/30 flex items-center justify-between text-xs gap-2">
        <div>
          <span className="text-[#a3aab8] text-xs block">Custo de Insumos</span>
          <span className="text-[#f1f3f7] font-bold font-mono">R$ 28,50</span>
        </div>
        <div className="text-right">
          <span className="text-amber-300/90 text-xs block font-medium">Venda Sugerida</span>
          <span className="text-amber-300 font-bold font-mono text-sm">R$ 75,00</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#1e222b] text-xs gap-2">
        <span className="text-[#a3aab8] truncate">TypeScript & React</span>
        <span className="text-amber-300 font-medium shrink-0">
          Deploy Vercel
        </span>
      </div>
    </div>
  );
}
