"use client";

import Image from "next/image";
import { ArrowUp, Mail, MessageCircle, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, WhatsAppIcon } from "./SocialIcons";
import { Language, portfolioData } from "@/data/portfolio-data";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Signature Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono font-bold shadow-md">
                {profile.monogram}
              </span>
              <div>
                <span className="text-base font-bold text-foreground block">
                  {profile.name}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {profile.titles[lang]}
                </span>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed max-w-sm">
              {profile.tagline[lang]}
            </p>

            {/* Official Signature */}
            <div className="pt-2">
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">
                {lang === "fr" ? "Signature certifiée de l'ingénieur :" : "Certified Engineer Signature:"}
              </span>
              <div className="relative w-40 h-12">
                <Image
                  src={profile.signatureSrc}
                  alt="Signature Benjamin MUGANGU"
                  fill
                  className="object-contain object-left dark:invert-0 opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Quick Nav Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-foreground tracking-wider">
              {lang === "fr" ? "Navigation Rapide" : "Quick Navigation"}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted">
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                {lang === "fr" ? "À propos" : "About"}
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                {lang === "fr" ? "Compétences" : "Skills"}
              </a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                {lang === "fr" ? "Projets" : "Projects"}
              </a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">
                {lang === "fr" ? "Parcours" : "Experience"}
              </a>
              <a href="#certifications" className="hover:text-cyan-400 transition-colors">
                {lang === "fr" ? "Certifications" : "Certifications"}
              </a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">
                {lang === "fr" ? "Services" : "Services"}
              </a>
            </div>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-foreground tracking-wider">
              {lang === "fr" ? "Réseaux & Plateformes" : "Social & Code"}
            </h4>
            <div className="flex items-center gap-2.5 text-muted">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-red-400 hover:text-red-400 transition-all"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-emerald-400 hover:text-emerald-400 transition-all"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-muted hover:text-cyan-400 transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Haut de page" : "Back to top"}</span>
            </button>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            © 2026 {profile.name}. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </div>
          <div className="flex items-center gap-2">
            <span>Next.js 15 • TypeScript • Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
