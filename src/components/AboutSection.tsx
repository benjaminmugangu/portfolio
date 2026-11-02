"use client";

import { CheckCircle2, Cpu, CloudCog, Users2 } from "lucide-react";
import { Language, portfolioData } from "@/data/portfolio-data";

interface AboutSectionProps {
  lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
  const { profile, pillars } = portfolioData;

  const pillarIcons = [Cpu, CloudCog, Users2];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {lang === "fr" ? "// 01. VISION & FONDATIONS" : "// 01. VISION & FOUNDATIONS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "L'Ingénierie Orientée Résilience & Impact" : "Engineering for Resilience & Real-World Impact"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "Une pratique rigoureuse du génie logiciel qui conjugue architecture de données, infrastructure cloud et transmission humaine."
              : "A disciplined software engineering practice combining data architecture, cloud infrastructure, and community knowledge sharing."}
          </p>
        </div>

        {/* Story & Background Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-muted text-base leading-relaxed">
            <p>
              {profile.bio[lang]}
            </p>
            <p>
              {lang === "fr"
                ? "Formé à l'Université Libre des Pays des Grands Lacs (ULPGL Goma) où j'ai obtenu ma Licence avec mention et finalise actuellement mon Master 2 en Génie Informatique, j'ai développé une sensibilité particulière pour la robustesse technique. Face aux défis de connectivité et aux contraintes opérationnelles réelles du contexte africain, concevoir des systèmes tolérants aux pannes n'est pas un luxe théorique, mais une nécessité d'ingénierie absolue."
                : "Trained at the Université Libre des Pays des Grands Lacs (ULPGL Goma) where I completed my Bachelor with honors and am currently completing my M.Sc. in Computer Engineering, I have cultivated a deep commitment to technical resilience. Navigating infrastructure realities in African contexts has taught me that fault-tolerant architectures are not a theoretical luxury, but a core engineering imperative."}
            </p>
            <p>
              {lang === "fr"
                ? "Mon engagement se prolonge sur le terrain : en tant que Volontaire des Nations Unies (VNU/PNUD), j'œuvre pour la vulgarisation citoyenne du Code du Numérique congolais. À travers ma chaîne éducative Infor Mystique et mes responsabilités d'encadrement universitaire, je transmets chaque jour les standards modernes du métier aux nouvelles générations d'ingénieurs."
                : "My professional engagement extends into community impact: as a UN Volunteer with UNDP, I champion digital literacy and citizen rights under the Congolese Digital Code. Through my educational YouTube channel Infor Mystique and university mentoring, I actively pass down modern engineering standards to rising developers."}
            </p>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 space-y-6 border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>{lang === "fr" ? "Profil en un coup d'œil" : "Profile at a Glance"}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{lang === "fr" ? "Diplôme & Cursus :" : "Degree & Status:"}</strong>{" "}
                    <span className="text-muted">Licence en Génie Info (ULPGL) & Master 2 en cours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{lang === "fr" ? "Poste actuel :" : "Current Role:"}</strong>{" "}
                    <span className="text-muted">Lead Développeur Backend chez Benflux Corporation</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{lang === "fr" ? "Distinction ONU :" : "UN Distinction:"}</strong>{" "}
                    <span className="text-muted">Certificat d'Appréciation VNU / PNUD (28 Oct 2026, ODD 4)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{lang === "fr" ? "Compétition tech :" : "Tech Contest:"}</strong>{" "}
                    <span className="text-muted">2ème Place au Benflux DevArena Challenge (SDK Go, 82.75/100)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{lang === "fr" ? "Localisation :" : "Location:"}</strong>{" "}
                    <span className="text-muted">Goma, Nord-Kivu, RDC (Disponible en local & remote)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted">
                <span>Code. Deploy. Scale.</span>
                <span className="text-cyan-400">Strict Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Cpu;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-2xl glass-panel p-8 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-white/10 group-hover:text-cyan-500/20 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                  {pillar.title[lang]}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description[lang]}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
