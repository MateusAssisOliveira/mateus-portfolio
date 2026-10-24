import React from "react";
import { Terminal, Check } from "lucide-react";

export function RpaPreview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#1e222b] bg-[#161922] p-4 sm:p-5 space-y-3.5 font-sans text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#1e222b] text-[#a3aab8] gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Terminal className="w-4 h-4 text-[#38bdf8] shrink-0" />
          <span className="font-semibold text-xs text-[#f1f3f7] truncate">
            Robô RPA &bull; Playwright Web
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-[#10b981] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 shrink-0">
          <Check className="w-3 h-3" />
          <span>50/50 Processadas</span>
        </span>
      </div>

      {/* Execution Status Card */}
      <div className="p-3 rounded-lg bg-[#111318] border border-[#1e222b] space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[#f1f3f7] gap-2">
          <span className="text-[#a3aab8] shrink-0">Carga em Lote:</span>
          <span className="text-[#f1f3f7] font-semibold font-mono truncate">50 Empresas</span>
        </div>
        <div className="flex justify-between items-center text-[#f1f3f7] gap-2">
          <span className="text-[#a3aab8] shrink-0">Engine de Automação:</span>
          <span className="text-[#38bdf8] font-mono truncate">Chromium Headless</span>
        </div>
        <div className="flex justify-between items-center text-[#f1f3f7] gap-2">
          <span className="text-[#a3aab8] shrink-0">Digitação Manual:</span>
          <span className="text-[#10b981] font-semibold shrink-0">Zero Cliques</span>
        </div>
      </div>

      {/* Logs do console com quebra automática de linha */}
      <div className="p-2.5 rounded bg-[#090a0d] border border-[#1e222b] space-y-1 font-mono text-xs text-[#a3aab8] break-words leading-relaxed">
        <div className="text-emerald-400 flex items-center gap-1.5">
          <Check className="w-3 h-3 shrink-0" />
          <span>[14:02] Login autenticado no sistema legado</span>
        </div>
        <div className="text-[#f1f3f7] flex items-center gap-1.5">
          <Check className="w-3 h-3 text-sky-400 shrink-0" />
          <span>[14:03] Consulta e transferência de dados (50 empresas)</span>
        </div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <Check className="w-3 h-3 shrink-0" />
          <span>[14:04] Relatório final exportado com 100% de precisão</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1e222b] text-xs gap-2">
        <span className="text-[#a3aab8] truncate">Economia Operacional</span>
        <span className="text-[#38bdf8] font-mono font-semibold shrink-0">
          ~4.5h Poupadas
        </span>
      </div>
    </div>
  );
}
