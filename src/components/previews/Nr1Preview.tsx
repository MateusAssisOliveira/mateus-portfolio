import React from "react";
import { ShieldCheck, FileText, Check } from "lucide-react";

export function Nr1Preview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#1e222b] bg-[#161922] p-4 sm:p-5 space-y-3.5 font-sans text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#1e222b] text-[#a3aab8] gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <ShieldCheck className="w-4 h-4 text-[#38bdf8] shrink-0" />
          <span className="font-semibold text-xs text-[#f1f3f7] truncate">
            Matriz de Risco NR-1
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-[#10b981] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 shrink-0">
          <Check className="w-3 h-3" />
          <span>Quórum 78% Válido</span>
        </span>
      </div>

      {/* Heatmap setorial com cores normativas periciais sóbrias */}
      <div className="space-y-1.5">
        <span className="text-xs text-[#a3aab8] block font-medium">
          Mapeamento Setorial de Riscos
        </span>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded bg-[#111318] border border-[#1e222b] text-[#f1f3f7]">
            <span className="block font-bold">Baixo</span>
            <span className="text-xs text-[#717887] truncate block">Adm</span>
          </div>
          <div className="p-2 rounded bg-amber-950/30 border border-amber-800/40 text-amber-300">
            <span className="block font-bold">Moderado</span>
            <span className="text-xs text-amber-200/80 truncate block">Operação</span>
          </div>
          <div className="p-2 rounded bg-[#111318] border border-[#1e222b] text-[#f1f3f7]">
            <span className="block font-bold">Baixo</span>
            <span className="text-xs text-[#717887] truncate block">Logística</span>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="p-3 rounded-lg bg-[#111318] border border-[#1e222b] space-y-1 text-xs">
        <div className="flex justify-between items-center text-[#a3aab8]">
          <span>Inversão Likert:</span>
          <span className="font-mono text-[#f1f3f7] font-medium">R = 6 - Nota</span>
        </div>
        <div className="flex justify-between items-center text-[#a3aab8]">
          <span>Isolamento de Dados:</span>
          <span className="font-mono text-[#38bdf8] font-medium">PostgreSQL RLS</span>
        </div>
      </div>

      {/* Status da Emissão */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1e222b] text-xs gap-2">
        <span className="flex items-center gap-1.5 text-[#a3aab8] truncate">
          <FileText className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
          Laudo Pericial A4 Gerado
        </span>
        <span className="text-[#f1f3f7] font-mono font-medium shrink-0">
          3.2s Serverless
        </span>
      </div>
    </div>
  );
}
