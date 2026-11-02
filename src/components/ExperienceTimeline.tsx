"use client";

import { Briefcase, Building2, MapPin, Calendar, CheckCircle } from "lucide-react";
import { Language, portfolioData } from "@/data/portfolio-data";

interface ExperienceTimelineProps {
  lang: Language;
}

export function ExperienceTimeline({ lang }: ExperienceTimelineProps) {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {lang === "fr" ? "// 04. TRAJECTOIRE PROFESSIONNELLE" : "// 04. PROFESSIONAL TRAJECTORY"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "Expériences & Responsabilités Exercées" : "Experience & Professional Roles"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "Du développement de microservices en entreprise aux missions internationales de l'ONU et à l'encadrement universitaire."
              : "From enterprise microservices development to United Nations missions and university pedagogical leadership."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-md shadow-cyan-500/50" />

              {/* Date Column on Left for Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {exp.period[lang]}
                </span>
                <div className="text-[10px] font-mono text-muted uppercase">
                  {exp.type[lang]}
                </div>
              </div>

              {/* Card Content */}
              <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all shadow-xl">
                
                {/* Mobile Period Badge */}
                <div className="md:hidden flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    {exp.period[lang]}
                  </span>
                  {exp.badge && (
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      {exp.badge[lang]}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                    {exp.role[lang]}
                  </h3>
                  {exp.badge && (
                    <span className="hidden md:inline-block text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                      {exp.badge[lang]}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted mb-4">
                  <span className="flex items-center gap-1.5 text-foreground/90 font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.organization}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {exp.description[lang]}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-6">
                  {exp.achievements[lang].map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/85">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-muted border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
