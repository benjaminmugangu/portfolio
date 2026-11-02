"use client";

import Image from "next/image";
import { X, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Certification, Language } from "@/data/portfolio-data";

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
  lang: Language;
}

export function CertificateModal({ cert, onClose, lang }: CertificateModalProps) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-white/20 p-6 sm:p-8 bg-slate-950/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl border border-white/10 hover:border-white/30 text-muted hover:text-white bg-white/5 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
              {cert.badge ? cert.badge[lang] : cert.issuer}
            </span>
            <span className="text-xs font-mono text-muted">{cert.date}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {cert.title[lang]}
          </h3>

          <p className="text-xs font-mono text-cyan-400 mt-1">
            {cert.issuer} {cert.reference && `• Réf. Officielle : ${cert.reference}`}
          </p>
        </div>

        {/* Image Preview */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden border border-white/10 bg-slate-900 mb-6 shadow-inner">
          <Image
            src={cert.imageSrc}
            alt={cert.title[lang]}
            fill
            className="object-contain"
          />
        </div>

        {/* Description & Skills */}
        <div className="space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {cert.description[lang]}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {cert.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Document authentique vérifié</span>
          </div>

          <div className="flex items-center gap-2">
            {cert.pdfSrc && (
              <a
                href={cert.pdfSrc}
                download
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-md transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger le PDF original</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 text-muted hover:text-white"
            >
              Fermer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
