import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group py-6 border-b border-[#1c1c1c] last:border-b-0 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
        <h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-mono text-zinc-500">
          {project.categoryLabel}
        </span>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {project.tagline}
      </p>

      {/* Tech list as clean subtle tags */}
      <div className="flex flex-wrap gap-2 text-xs text-zinc-500 font-mono mb-4">
        {project.technologies.slice(0, 4).map((tech, i) => (
          <span key={i} className="text-zinc-400">
            {tech}
            {i < Math.min(project.technologies.length, 4) - 1 ? " •" : ""}
          </span>
        ))}
      </div>

      {/* Clean links */}
      <div className="flex items-center gap-4 text-xs font-medium">
        {project.hasDedicatedPage && (
          <Link
            href={`/projetos/${project.slug}`}
            className="text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
          >
            Ler estudo de caso
            <span aria-hidden="true">&rarr;</span>
          </Link>
        )}

        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Acessar online
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}

        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
