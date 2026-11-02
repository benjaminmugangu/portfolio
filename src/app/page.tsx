"use client";

import { useState } from "react";
import { Language } from "@/data/portfolio-data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsBanner } from "@/components/MetricsBanner";
import { AboutSection } from "@/components/AboutSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CertificationsGallery } from "@/components/CertificationsGallery";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-cyan-500/20 selection:text-cyan-400">
      <Navbar lang={lang} onLanguageChange={setLang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <MetricsBanner lang={lang} />
        <AboutSection lang={lang} />
        <SkillsMatrix lang={lang} />
        <ProjectsShowcase lang={lang} />
        <ExperienceTimeline lang={lang} />
        <CertificationsGallery lang={lang} />
        <ServicesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
