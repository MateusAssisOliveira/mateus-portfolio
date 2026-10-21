import React from "react";
import { Terminal } from "lucide-react";

export function RpaPreview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-violet-500/20 bg-[#0c0910] p-4 sm:p-5 space-y-3.5 font-sans text-xs shadow-inner">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-violet-500/10 text-zinc-400 gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
          <span className="font-mono text-zinc-200 font-semibold text-[11px] truncate">
            ROBÔ RPA • PLAYWRIGHT
          </span>
        </div>
        <span className="text-[10px] font-mono text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40 shrink-0">
          50/50 PROCESSADAS ✓
        </span>
      </div>

      {/* Execution Status Card */}
      <div className="p-3 rounded-lg bg-zinc-950/90 border border-violet-500/10 space-y-1.5 font-mono text-[11px]">
        <div className="flex justify-between items-center text-zinc-300 gap-2">
          <span className="text-zinc-400 shrink-0">Lote:</span>
          <span className="text-violet-300 font-bold truncate">50 Empresas</span>
        </div>
        <div className="flex justify-between items-center text-zinc-300 gap-2">
          <span className="text-zinc-400 shrink-0">Seletores:</span>
          <span className="text-emerald-400 truncate">Playwright Web</span>
        </div>
        <div className="flex justify-between items-center text-zinc-300 gap-2">
          <span className="text-zinc-400 shrink-0">Digitação Manual:</span>
          <span className="text-zinc-100 font-semibold shrink-0">Zero Cliques</span>
        </div>
      </div>

      {/* Logs do console com quebra automática de linha */}
      <div className="p-2.5 rounded bg-black/60 border border-white/5 space-y-1 font-mono text-[10px] text-zinc-400 break-words leading-relaxed">
        <div className="text-emerald-400/90">
          ✓ [14:02] Login autenticado no sistema legado
        </div>
        <div className="text-zinc-300">
          ✓ [14:03] Consulta e transferência de dados (50 empresas)
        </div>
        <div className="text-violet-300">
          ✓ [14:04] Relatório final exportado com 100% de precisão
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] gap-2">
        <span className="text-zinc-400 truncate">Economia Operacional</span>
        <span className="text-violet-400 font-mono font-semibold shrink-0">
          ~4.5h Poupadas
        </span>
      </div>
    </div>
  );
}
