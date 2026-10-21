import React from "react";
import { ChefHat } from "lucide-react";

export function JoyceCakesPreview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-amber-500/20 bg-[#0e0c09] p-4 sm:p-5 space-y-3.5 font-sans text-xs shadow-inner">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-amber-500/10 text-zinc-400 gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <ChefHat className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-mono text-zinc-200 font-semibold text-[11px] truncate">
            FICHA TÉCNICA DINÂMICA
          </span>
        </div>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40 shrink-0">
          MARGEM: 62% ✓
        </span>
      </div>

      {/* Recipe Info */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-baseline gap-2">
          <h4 className="text-xs sm:text-sm font-bold text-white truncate">
            Bolo Artesanal Trufado
          </h4>
          <span className="text-[10px] font-mono text-zinc-400 shrink-0">1.2 kg</span>
        </div>

        {/* Insumos */}
        <div className="space-y-1 text-[11px]">
          <div className="p-1.5 rounded bg-zinc-950/80 border border-white/5 flex justify-between items-center gap-2">
            <span className="text-zinc-300 truncate">Chocolate Meio Amargo (350g)</span>
            <span className="font-mono text-amber-300 font-medium shrink-0">R$ 14,20</span>
          </div>
          <div className="p-1.5 rounded bg-zinc-950/80 border border-white/5 flex justify-between items-center gap-2">
            <span className="text-zinc-300 truncate">Leite Condensado & Creme</span>
            <span className="font-mono text-amber-300 font-medium shrink-0">R$ 10,50</span>
          </div>
          <div className="p-1.5 rounded bg-zinc-950/80 border border-white/5 flex justify-between items-center gap-2">
            <span className="text-zinc-300 truncate">Embalagem Kraft & Fita</span>
            <span className="font-mono text-amber-300 font-medium shrink-0">R$ 3,80</span>
          </div>
        </div>
      </div>

      {/* Preço de Custo vs Venda */}
      <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/30 flex items-center justify-between font-mono text-[11px] gap-2">
        <div>
          <span className="text-zinc-400 text-[10px] block">Custo Insumos</span>
          <span className="text-zinc-200 font-bold">R$ 28,50</span>
        </div>
        <div className="text-right">
          <span className="text-amber-400 text-[10px] block">Venda Sugerida</span>
          <span className="text-amber-300 font-bold text-xs">R$ 75,00</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] gap-2">
        <span className="text-zinc-400 truncate">TypeScript & React</span>
        <span className="text-amber-400 font-mono text-[10px] shrink-0">
          Deploy Vercel
        </span>
      </div>
    </div>
  );
}
