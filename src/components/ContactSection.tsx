"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Phone, Send, CheckCircle, Copy, Check, Sparkles } from "lucide-react";
import { Language, portfolioData } from "@/data/portfolio-data";

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // Auto-compose mailto as secondary fallback
      const mailtoUrl = `mailto:${profile.socialLinks.email}?subject=${encodeURIComponent(
        formData.subject || "Prise de contact via portfolio"
      )}&body=${encodeURIComponent(
        `Bonjour Benjamin,\n\n${formData.message}\n\nDe : ${formData.name} (${formData.email})`
      )}`;
      window.open(mailtoUrl, "_blank");
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {lang === "fr" ? "// 07. CANAUX DE COMMUNICATION" : "// 07. COMMUNICATION CHANNELS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {lang === "fr" ? "Discutons de Votre Prochain Projet" : "Let's Build Something Exceptional"}
          </h2>
          <p className="text-muted text-sm sm:text-base">
            {lang === "fr"
              ? "Disponible pour des postes d'ingénierie backend, des missions d'architecture cloud ou des collaborations tech."
              : "Available for backend engineering contracts, cloud architecture roles, or high-impact technology initiatives."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                {lang === "fr" ? "Coordonnées Directes" : "Direct Coordinates"}
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-muted uppercase">Email</div>
                      <a
                        href={`mailto:${profile.socialLinks.email}`}
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-cyan-400 truncate block transition-colors"
                      >
                        {profile.socialLinks.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-muted hover:text-cyan-400 transition-all shrink-0"
                    title="Copier l'adresse email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Box */}
                <a
                  href={profile.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-muted uppercase">WhatsApp Pro</div>
                      <div className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                        {profile.socialLinks.phone}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                    Direct
                  </span>
                </a>

                {/* Location Box */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-muted uppercase">
                      {lang === "fr" ? "Localisation" : "Location"}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === "fr" ? "Temps de réponse habituel : < 24 heures" : "Typical response time: < 24 hours"}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {lang === "fr" ? "Message préparé avec succès !" : "Message prepared successfully!"}
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto">
                    {lang === "fr"
                      ? "Votre client de messagerie s'est ouvert pour acheminer votre demande directement dans ma boîte de réception. Je vous réponds au plus vite."
                      : "Your email client has opened with your inquiry pre-filled. I will get back to you promptly."}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-foreground border border-white/10"
                  >
                    {lang === "fr" ? "Envoyer un autre message" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-foreground/80">
                        {lang === "fr" ? "Votre nom / Organisation *" : "Your name / Org *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === "fr" ? "Ex. Jean Dupont" : "Ex. Alex Morgan"}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-foreground text-sm focus:outline-hidden focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-foreground/80">
                        {lang === "fr" ? "Votre adresse email *" : "Your email address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-foreground text-sm focus:outline-hidden focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-foreground/80">
                      {lang === "fr" ? "Sujet de votre demande *" : "Subject *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={lang === "fr" ? "Ex. Mission d'architecture backend / Recrutement" : "Ex. Backend architecture contract / Hiring"}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-foreground text-sm focus:outline-hidden focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-foreground/80">
                      {lang === "fr" ? "Votre message *" : "Your message *"}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === "fr"
                          ? "Décrivez brièvement les objectifs de votre projet, les délais envisagés et les technologies souhaitées..."
                          : "Briefly outline your project goals, anticipated timeline, and preferred tech stack..."
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-foreground text-sm focus:outline-hidden focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting
                        ? lang === "fr" ? "Préparation de l'envoi..." : "Preparing..."
                        : lang === "fr" ? "Transmettre mon message" : "Send message"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
