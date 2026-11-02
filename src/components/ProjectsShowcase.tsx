"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle2, Layers, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Language, portfolioData, Project } from "@/data/portfolio-data";

interface ProjectsShowcaseProps {
  lang: Language;
}

export function ProjectsShowcase({ lang }: ProjectsShowcaseProps) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: { fr: "Tous les Projets", en: "All Projects" } },
    { id: "backend", label: { fr: "Backend & Microservices", en: "Backend & Microservices" } },
    { id: "cloud", label: { fr: "Cloud & Réseaux", en: "Cloud & Networks" } },
    { id: "ai", label: { fr: "IA & Data", en: "AI & Data" } },
    { id: "iot", label: { fr: "IoT & Embarqué", en: "IoT & Embedded" } },
    { id: "academic", label: { fr: "Académique & Recherche", en: "Academic & Research" } },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {lang === "fr" ? "// 03. RÉALISATIONS & CODE" : "// 03. REALIZATIONS & CODE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "Projets Phares & Architectures Déployées" : "Featured Projects & Architectures"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "Systèmes microservices en production, solutions académiques de recherche et contributions techniques ouvertes."
              : "Production microservices, academic research implementations, and open-source contributions."}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === opt.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "glass-panel text-muted hover:text-foreground hover:bg-white/5 border border-white/5"
              }`}
            >
              {opt.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-300 shadow-xl"
            >
              {/* Card Top: Badges & Title */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {project.categoryLabel[lang]}
                  </span>
                  <span className="text-xs font-mono text-muted">{project.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-cyan-300/90 mt-1 mb-4">
                  {project.role[lang]}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {project.description[lang]}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights[lang].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Tech Stack & Action Links */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-foreground/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-foreground hover:text-cyan-400 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code GitHub</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-muted">
                        <FolderGit2 className="w-4 h-4" />
                        <span>Code Propriétaire</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                    {project.impact[lang]}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
