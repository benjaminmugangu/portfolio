"use client";

import { useState } from "react";
import { Server, Cloud, Brain, Shield, GraduationCap, Check } from "lucide-react";
import { Language, portfolioData } from "@/data/portfolio-data";

interface SkillsMatrixProps {
  lang: Language;
}

export function SkillsMatrix({ lang }: SkillsMatrixProps) {
  const { skillsCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState(skillsCategories[0].id);

  const categoryIcons: Record<string, typeof Server> = {
    backend: Server,
    "cloud-devops": Cloud,
    "ai-data": Brain,
    "networks-iot": Shield,
    "pedagogy-tools": GraduationCap,
  };

  const currentCategory =
    skillsCategories.find((cat) => cat.id === activeTab) || skillsCategories[0];

  return (
    <section id="skills" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {lang === "fr" ? "// 02. ARSENAL TECHNIQUE" : "// 02. TECHNICAL ARSENAL"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "Matrice des Compétences & Technologies" : "Skills & Technology Matrix"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "Chaque compétence est adossée à une pratique concrète en entreprise, en laboratoire universitaire ou en mission officielle."
              : "Every technical skill is grounded in proven production deployments, university laboratory projects, or institutional missions."}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillsCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]"
                    : "glass-panel text-muted hover:text-foreground hover:bg-white/5 border border-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="rounded-2xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {currentCategory.title[lang]}
              </h3>
              <p className="text-sm text-muted mt-1">
                {currentCategory.description[lang]}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30 w-fit">
              <Check className="w-3.5 h-3.5" />
              <span>Production & Engineering Ready</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-semibold text-foreground text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-muted border border-white/10">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Context Summary Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-muted font-mono gap-3">
            <span>Environnements : Linux Ubuntu • Kubernetes k3s • Git/GitHub CI/CD</span>
            <span className="text-cyan-400">Approche par les standards industriels</span>
          </div>
        </div>

      </div>
    </section>
  );
}
