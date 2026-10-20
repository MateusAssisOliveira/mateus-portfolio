import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers, Cpu } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFlagship = project.id === "saas-nr1";

  return (
    <div
      className={`group relative rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isFlagship
          ? "border-emerald-500/30 bg-gradient-to-b from-[#141d18]/80 to-[#101314]/90 shadow-lg shadow-emerald-950/20"
          : "border-white/[0.08] bg-[#121215]/80 hover:border-zinc-700/80 hover:bg-[#15151a]"
      }`}
    >
      {/* Top Banner highlight for flagship */}
      {isFlagship && (
        <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-1.5 flex items-center justify-between text-[11px] font-mono text-emerald-300">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            PROJETO PRINCIPAL (FLAGSHIP B2B)
          </span>
          <span className="text-emerald-400/80">Next.js 14 • Supabase RLS</span>
        </div>
      )}

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-white/5">
              {project.categoryLabel}
            </span>
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                project.status === "producao"
                  ? "bg-emerald-950/40 text-emerald-400 border-emerald-800/40"
                  : project.status === "mvp"
                  ? "bg-amber-950/40 text-amber-400 border-amber-800/40"
                  : "bg-zinc-800/50 text-zinc-400 border-zinc-700/40"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              {project.statusLabel}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
            {project.tagline}
          </p>

          {/* Problem vs Solution compact pills */}
          <div className="space-y-2 mb-6">
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 text-xs">
              <span className="font-semibold text-zinc-300 block mb-1">
                Gargalo Operacional:
              </span>
              <p className="text-zinc-400 line-clamp-2">{project.businessProblem}</p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/40 border border-emerald-500/10 text-xs">
              <span className="font-semibold text-emerald-400 block mb-1">
                Solução Implementada:
              </span>
              <p className="text-zinc-400 line-clamp-2">{project.solution}</p>
            </div>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-6">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-zinc-950/50 border border-white/5"
                >
                  <div className="text-sm sm:text-base font-bold font-mono text-emerald-400">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-zinc-300 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Area: Technologies & Link */}
        <div>
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* CTA Link */}
          {project.hasDedicatedPage ? (
            <Link
              href={`/projetos/${project.slug}`}
              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all shadow-sm"
            >
              <span>{project.actionText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="w-full inline-flex items-center justify-between px-4 py-2 rounded-lg bg-zinc-800/60 border border-white/5 text-zinc-300 text-xs font-medium">
              <span>{project.actionText}</span>
              <span className="text-[10px] font-mono text-zinc-400">
                Sob Medida
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
