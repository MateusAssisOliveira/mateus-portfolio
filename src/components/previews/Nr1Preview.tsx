import { ShieldCheck, FileText } from "lucide-react";

export function Nr1Preview() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#27272a] bg-[#121215] shadow-2xl">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#222226] bg-[#16161a] text-zinc-400 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
          </div>
          <span className="font-mono text-[11px] text-zinc-400 pl-1 hidden sm:inline">
            app.nr1-sst.com/laudo-pericial
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>RLS Protegido</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-3.5">
        {/* Header do Relatório */}
        <div className="flex items-center justify-between pb-2 border-b border-[#222226]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-xs text-zinc-200">
              Matriz de Riscos Psicossociais
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
            Quórum: 78% Válido ✓
          </span>
        </div>

        {/* Tabela de Amostragem Setorial */}
        <div className="space-y-1.5">
          <div className="grid grid-cols-12 text-[10px] font-mono text-zinc-500 px-2 pb-1 border-b border-[#1f1f24]">
            <span className="col-span-4">SETOR</span>
            <span className="col-span-3 text-center">RESPOSTAS</span>
            <span className="col-span-2 text-center">LIKERT</span>
            <span className="col-span-3 text-right">SEVERIDADE</span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="grid grid-cols-12 items-center px-2 py-1.5 rounded bg-zinc-900/40 border border-white/5 text-[11px]">
              <span className="col-span-4 text-zinc-300 font-medium truncate">Administrativo</span>
              <span className="col-span-3 text-center font-mono text-zinc-400 text-[10px]">18 / 20</span>
              <span className="col-span-2 text-center font-mono text-zinc-300">1.4</span>
              <span className="col-span-3 text-right">
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-950/50 text-emerald-400 border border-emerald-800/30 font-medium">
                  Baixo
                </span>
              </span>
            </div>
            <div className="grid grid-cols-12 items-center px-2 py-1.5 rounded bg-zinc-900/40 border border-white/5 text-[11px]">
              <span className="col-span-4 text-zinc-300 font-medium truncate">Operação / Fábrica</span>
              <span className="col-span-3 text-center font-mono text-zinc-400 text-[10px]">35 / 40</span>
              <span className="col-span-2 text-center font-mono text-amber-300 font-semibold">3.8</span>
              <span className="col-span-3 text-right">
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-950/60 text-amber-300 border border-amber-800/40 font-medium">
                  Moderado
                </span>
              </span>
            </div>
            <div className="grid grid-cols-12 items-center px-2 py-1.5 rounded bg-zinc-900/40 border border-white/5 text-[11px]">
              <span className="col-span-4 text-zinc-300 font-medium truncate">Logística & Frotas</span>
              <span className="col-span-3 text-center font-mono text-zinc-400 text-[10px]">12 / 15</span>
              <span className="col-span-2 text-center font-mono text-zinc-300">1.8</span>
              <span className="col-span-3 text-right">
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-950/50 text-emerald-400 border border-emerald-800/30 font-medium">
                  Baixo
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Rodapé do Card com Emissão do Laudo */}
        <div className="flex items-center justify-between pt-2.5 border-t border-[#222226] text-xs">
          <div className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Laudo Oficial A4 Formatado</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-200">
            3.2s via Chromium Serverless
          </span>
        </div>
      </div>
    </div>
  );
}
