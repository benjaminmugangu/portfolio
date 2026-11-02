"use client";

import { Language, portfolioData } from "@/data/portfolio-data";

interface MetricsBannerProps {
  lang: Language;
}

export function MetricsBanner({ lang }: MetricsBannerProps) {
  const { metrics } = portfolioData;

  return (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient">
                {metric.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm font-semibold text-foreground tracking-wide">
                {metric.label[lang]}
              </span>
              <span className="mt-0.5 text-[11px] font-mono text-muted">
                {metric.subtext[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
