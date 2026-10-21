import React from "react";
import { Award, Check } from "lucide-react";

export function CertificadosPreview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-sky-500/20 bg-[#090b0e] p-4 sm:p-5 space-y-3.5 font-sans text-xs shadow-inner">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-sky-500/10 text-zinc-400 gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Award className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="font-mono text-zinc-200 font-semibold text-[11px] truncate">
            MODELO DE CERTIFICADO SST
          </span>
        </div>
        <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40 shrink-0">
          PADRÃO MTE VÁLIDO
        </span>
      </div>

      {/* Certificate Box */}
      <div className="p-3 sm:p-4 rounded-lg bg-zinc-950/90 border border-sky-500/10 space-y-2">
        <div className="text-center space-y-0.5">
          <span className="text-[9px] font-mono uppercase tracking-widest text-sky-400 block truncate">
            CERTIFICADO DE CAPACITAÇÃO
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-white break-words">
            NR-35 • Trabalho em Altura (8 Horas)
          </h4>
        </div>

        <div className="p-2.5 rounded bg-zinc-900/60 border border-white/5 space-y-1 text-[11px]">
          <div className="flex justify-between items-center text-zinc-400 gap-2">
            <span className="shrink-0">Participante:</span>
            <span className="text-zinc-200 font-medium truncate">Carlos Eduardo Silva</span>
          </div>
          <div className="flex justify-between items-center text-zinc-400 gap-2">
            <span className="shrink-0">Aproveitamento:</span>
            <span className="text-sky-300 font-mono shrink-0">100% Aprovado</span>
          </div>
          <div className="flex justify-between items-center text-zinc-400 gap-2">
            <span className="shrink-0">Validade:</span>
            <span className="text-zinc-200 shrink-0">2 Anos</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] gap-2">
        <span className="flex items-center gap-1 text-zinc-400 font-mono text-[10px] truncate">
          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          Frente e Verso Padronizados
        </span>
        <span className="text-sky-400 font-mono text-[10px] shrink-0">
          Emissão em Lote
        </span>
      </div>
    </div>
  );
}
