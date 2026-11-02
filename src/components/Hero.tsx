"use client";

import Image from "next/image";
import { ArrowRight, Download, Mail, MessageCircle, Award, Terminal, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, WhatsAppIcon } from "./SocialIcons";
import { Language, portfolioData } from "@/data/portfolio-data";

interface HeroProps {
  lang: Language;
}

export function Hero({ lang }: HeroProps) {
  const { profile } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.status[lang]}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                {lang === "fr" ? "Je suis " : "I am "}
                <span className="text-gradient block sm:inline">{profile.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-400/90 font-mono">
                {profile.titles[lang]}
              </p>
            </div>

            {/* Elevator Pitch */}
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile.tagline[lang]}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {["NestJS", "TypeScript", "Go (Golang)", "PostgreSQL", "Docker", "Kubernetes", "IA & LLMs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>{lang === "fr" ? "Explorer mes projets" : "View my projects"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#certifications"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-amber-500/40 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all duration-300"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>{lang === "fr" ? "Certifications & Preuves" : "Certifications & Credentials"}</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === "fr" ? "Me contacter" : "Contact me"}</span>
              </a>
            </div>

            {/* Verified Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-muted">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 transition-all"
                title="Chaîne YouTube Infor Mystique"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: High-End Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl glass-panel p-5 overflow-hidden shadow-2xl">
                {/* Photo with rounded frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900/50">
                  <Image
                    src={profile.avatarSrc}
                    alt={profile.name}
                    fill
                    priority
                    className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating badges on photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium shadow-md">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>ULPGL M2 • Lead Dev</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold text-white">Volontaire ONU / PNUD</span>
                      </div>
                      <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        ODD 4
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                      Vulgarisation du Code du Numérique RDC
                    </p>
                  </div>
                </div>

                {/* Sub-card summary footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-muted">
                  <span className="font-mono text-foreground font-medium">📍 Goma, Nord-Kivu, RDC</span>
                  <span className="font-mono text-cyan-400">benflux-corp.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
