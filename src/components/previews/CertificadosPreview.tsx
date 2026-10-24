import React from "react";
import { Award, Check } from "lucide-react";

export function CertificadosPreview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#1e222b] bg-[#161922] p-4 sm:p-5 space-y-3.5 font-sans text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#1e222b] text-[#a3aab8] gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Award className="w-4 h-4 text-[#38bdf8] shrink-0" />
          <span className="font-semibold text-xs text-[#f1f3f7] truncate">
            Certificação SST Regulamentada
          </span>
        </div>
        <span className="text-xs text-[#38bdf8] bg-sky-950/40 px-2 py-0.5 rounded border border-sky-800/40 shrink-0">
          Padrão MTE Válido
        </span>
      </div>

      {/* Certificate Box */}
      <div className="p-3.5 rounded-lg bg-[#111318] border border-[#1e222b] space-y-2.5">
        <div className="text-center space-y-0.5">
          <span className="text-xs text-[#38bdf8] block truncate font-medium">
            Certificado de Capacitação Ocupacional
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-[#f1f3f7] break-words">
            NR-35 &bull; Trabalho em Altura (8 Horas)
          </h4>
        </div>

        <div className="p-2.5 rounded bg-[#161922] border border-[#1e222b] space-y-1 text-xs">
          <div className="flex justify-between items-center text-[#a3aab8] gap-2">
            <span className="shrink-0">Participante:</span>
            <span className="text-[#f1f3f7] font-medium truncate">Carlos Eduardo Silva</span>
          </div>
          <div className="flex justify-between items-center text-[#a3aab8] gap-2">
            <span className="shrink-0">Aproveitamento:</span>
            <span className="text-[#10b981] font-mono shrink-0">100% Aprovado</span>
          </div>
          <div className="flex justify-between items-center text-[#a3aab8] gap-2">
            <span className="shrink-0">Validade Jurídica:</span>
            <span className="text-[#f1f3f7] shrink-0">2 Anos</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1e222b] text-xs gap-2">
        <span className="flex items-center gap-1.5 text-[#a3aab8] truncate">
          <Check className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
          Frente e Verso Padronizados
        </span>
        <span className="text-[#38bdf8] font-medium shrink-0">
          Emissão em Lote
        </span>
      </div>
    </div>
  );
}
