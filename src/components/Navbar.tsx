"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, FileDown, Globe, Sparkles } from "lucide-react";
import { Language, portfolioData } from "@/data/portfolio-data";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: { fr: "À propos", en: "About" } },
    { href: "#skills", label: { fr: "Compétences", en: "Skills" } },
    { href: "#projects", label: { fr: "Projets", en: "Projects" } },
    { href: "#experience", label: { fr: "Parcours", en: "Experience" } },
    { href: "#certifications", label: { fr: "Certifications", en: "Certifications" } },
    { href: "#services", label: { fr: "Services", en: "Services" } },
    { href: "#contact", label: { fr: "Contact", en: "Contact" } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono shadow-md group-hover:scale-105 transition-transform duration-300">
              {portfolioData.profile.monogram}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-foreground group-hover:text-cyan-400 transition-colors">
                {portfolioData.profile.shortName}
              </span>
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                Software & Cloud Eng.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(lang === "fr" ? "en" : "fr")}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-muted hover:text-cyan-400 transition-all"
              title={lang === "fr" ? "Switch to English" : "Passer en Français"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-muted hover:text-cyan-400 transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            )}

            {/* Contact CTA */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "Me contacter" : "Get in touch"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onLanguageChange(lang === "fr" ? "en" : "fr")}
              className="px-2 py-1 rounded text-xs font-mono border border-white/10 text-muted"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-muted hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl glass-panel shadow-2xl space-y-2 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-cyan-400 hover:bg-white/5"
              >
                {link.label[lang]}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-muted hover:text-foreground"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                  <span>{theme === "dark" ? "Mode Clair" : "Mode Sombre"}</span>
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-white"
              >
                {lang === "fr" ? "Contact" : "Contact"}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
