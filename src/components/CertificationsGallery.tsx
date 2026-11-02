"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Eye, Download, FileText, CheckCircle2, Star } from "lucide-react";
import { Certification, Language, portfolioData } from "@/data/portfolio-data";
import { CertificateModal } from "./CertificateModal";

interface CertificationsGalleryProps {
  lang: Language;
}

export function CertificationsGallery({ lang }: CertificationsGalleryProps) {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // The primary spotlight certification: UNV / UNDP
  const spotlightCert = certifications[0];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{lang === "fr" ? "// 05. CERTIFICATIONS & DIPLÔMES" : "// 05. CERTIFICATIONS & CREDENTIALS"}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "Reconnaissances, Titres & Preuves Officielles" : "Official Credentials & Distinctions"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "Chaque certification est authentifiée avec document officiel téléchargeable et référence de vérification."
              : "Each credential is authenticated with verifiable official documentation and institutional references."}
          </p>
        </div>

        {/* ============================================================== */}
        {/* SPOTLIGHT BANNER: NOUVEAU CERTIFICAT ONU / PNUD (28 OCT 2026) */}
        {/* ============================================================== */}
        <div className="relative rounded-3xl glass-panel border border-amber-500/40 p-6 sm:p-10 mb-16 overflow-hidden shadow-2xl bg-gradient-to-br from-amber-500/5 via-slate-950/80 to-blue-500/5">
          {/* Subtle gold decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Text & Verification */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{spotlightCert.badge ? spotlightCert.badge[lang] : "Distinction Internationale"}</span>
                </span>
                <span className="text-xs font-mono text-muted">{spotlightCert.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {spotlightCert.title[lang]}
              </h3>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{spotlightCert.issuer} • Réf. : {spotlightCert.reference}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {spotlightCert.description[lang]}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {spotlightCert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setSelectedCert(spotlightCert)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 transition-all font-mono"
                >
                  <Eye className="w-4 h-4" />
                  <span>{lang === "fr" ? "Inspecter le certificat" : "Inspect credential"}</span>
                </button>

                {spotlightCert.pdfSrc && (
                  <a
                    href={spotlightCert.pdfSrc}
                    download
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-white transition-all font-mono"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === "fr" ? "Télécharger le PDF officiel" : "Download official PDF"}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: High-Res Interactive Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setSelectedCert(spotlightCert)}
                className="group relative cursor-pointer w-full max-w-md aspect-[16/11] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  src={spotlightCert.imageSrc}
                  alt={spotlightCert.title[lang]}
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold backdrop-blur-xs">
                  <Eye className="w-4 h-4" />
                  <span>{lang === "fr" ? "Cliquer pour agrandir" : "Click to view full size"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* OTHER CERTIFICATES & ACADEMIC CREDENTIALS GRID */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.slice(1).map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl glass-panel p-5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Image thumbnail */}
                <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden border border-white/10 bg-slate-900/60 mb-4 group-hover:border-cyan-500/30 transition-colors">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.title[lang]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-medium">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>Agrandir</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-2">
                  <span>{cert.date}</span>
                  {cert.badge && (
                    <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      {cert.badge[lang]}
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {cert.title[lang]}
                </h4>

                <p className="text-xs font-mono text-muted mt-1 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-muted line-clamp-2">
                  {cert.description[lang]}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-mono">
                <span>Vérifier</span>
                <Eye className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
        lang={lang}
      />
    </section>
  );
}
