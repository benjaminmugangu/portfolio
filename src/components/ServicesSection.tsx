"use client";

import { Server, Cloud, Brain, GraduationCap, CheckCircle2 } from "lucide-react";
import { Language, portfolioData } from "@/data/portfolio-data";

interface ServicesSectionProps {
  lang: Language;
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const { services } = portfolioData;

  const iconMap: Record<string, typeof Server> = {
    Server,
    Cloud,
    Brain,
    GraduationCap,
  };

  return (
    <section id="services" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {lang === "fr" ? "// 06. OFFRES & COLLABORATIONS" : "// 06. SERVICES & VALUE PROPOSITION"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "Ce Que J'Apporte à Vos Projets" : "How I Can Add Value to Your Projects"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "De la conception d'architectures backend robustes au déploiement cloud et au mentorat technique."
              : "From robust backend system design to scalable cloud deployments and team mentorship."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Server;

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl glass-panel p-8 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title[lang]}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {service.description[lang]}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase text-foreground/80 font-semibold mb-3">
                    {lang === "fr" ? "Livrables concrets :" : "Key Deliverables:"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables[lang].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
