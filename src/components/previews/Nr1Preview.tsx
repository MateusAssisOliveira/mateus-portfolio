import React from "react";
import { ShieldCheck, FileText } from "lucide-react";

export function Nr1Preview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#26262a] bg-[#0c0c0e] p-4 sm:p-5 space-y-3.5 font-sans text-xs shadow-inner">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#1f1f23] text-zinc-400 gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <ShieldCheck className="w-4 h-4 text-zinc-200 shrink-0" />
          <span className="font-mono text-zinc-200 font-semibold text-[11px] truncate">
            MATRIZ DE RISCO NR-1
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-200 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700 shrink-0">
          QUÓRUM 78% ✓
        </span>
      </div>

      {/* Heatmap setorial com cores normativas periciais sóbrias */}
      <div className="space-y-1.5">
        <span className="text-[11px] text-zinc-400 block font-medium">
          Mapeamento Setorial de Riscos
        </span>
        <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px] text-center">
          <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-200">
            <span className="block font-bold text-xs">Baixo</span>
            <span className="text-[9px] text-zinc-400 truncate block">Adm</span>
          </div>
          <div className="p-2 rounded bg-amber-950/40 border border-amber-800/40 text-amber-300">
            <span className="block font-bold text-xs">Moderado</span>
            <span className="text-[9px] text-zinc-400 truncate block">Operação</span>
          </div>
          <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-200">
            <span className="block font-bold text-xs">Baixo</span>
            <span className="text-[9px] text-zinc-400 truncate block">Logística</span>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-white/5 space-y-1 font-mono text-[11px]">
        <div className="flex justify-between items-center text-zinc-400">
          <span>Inversão Likert:</span>
          <span className="text-zinc-200 font-medium">R = 6 - Nota</span>
        </div>
        <div className="flex justify-between items-center text-zinc-400">
          <span>Isolamento:</span>
          <span className="text-zinc-200 font-medium">PostgreSQL RLS</span>
        </div>
      </div>

      {/* Status da Emissão */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] gap-2">
        <span className="flex items-center gap-1.5 text-zinc-300 truncate">
          <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          Laudo Pericial A4 Gerado
        </span>
        <span className="text-zinc-100 font-mono font-semibold shrink-0">
          3.2s Serverless
        </span>
      </div>
    </div>
  );
}
