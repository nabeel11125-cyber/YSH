"use client";

import React from "react";
import { BentoCard } from "../ui/BentoCard";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassButton } from "../ui/GlassButton";

const fundingStages = [
  {
    title: "CGTMSE",
    description: "Up to ₹5 Crore collateral-free working capital loans for startups and MSMEs.",
    icon: "🏦",
    badge: "Most Popular",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "SISFS",
    description: "Startup India Seed Fund Scheme providing up to ₹50 Lakh for early-stage ventures.",
    icon: "🌱",
    badge: "Early Stage",
  },
  {
    title: "PMEGP",
    description: "Prime Minister's Employment Generation Program offering up to ₹50 Lakh for new enterprises.",
    icon: "🏗️",
  },
  {
    title: "MSME Loan",
    description: "Direct assistance for Micro, Small, and Medium Enterprises up to ₹50 Lakh.",
    icon: "💼",
  },
  {
    title: "Textile Fund",
    description: "Specialized funding scheme for textile units with assistance up to ₹1 Crore.",
    icon: "🧵",
  },
];

export const FundingBento = () => {
  return (
    <section id="funding" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-primary-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-6 relative z-10">
        <SectionHeader
          badge="Growth Capital"
          title="For Every Stage of Your Startup"
          subtitle="Access a wide range of government grants, loans, and seed funds tailored to your business scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {fundingStages.map((stage, i) => (
            <BentoCard
              key={i}
              title={stage.title}
              description={stage.description}
              icon={stage.icon}
              className={stage.className}
            >
              {stage.badge && (
                <span className="absolute top-8 right-8 inline-flex items-center rounded-full bg-primary-orange/10 px-3 py-1 text-xs font-semibold uppercase text-primary-orange ring-1 ring-primary-orange/20">
                  {stage.badge}
                </span>
              )}
            </BentoCard>
          ))}
          
          <div className="md:col-span-1 flex items-center justify-center p-8 bg-primary-orange/5 border border-primary-orange/20 rounded-3xl group cursor-pointer hover:bg-primary-orange/10 transition-all duration-300">
            <div className="text-center">
              <p className="text-white font-outfit font-bold mb-4">Need Expert Guidance?</p>
              <GlassButton variant="ghost" size="sm" className="text-primary-orange border-primary-orange/20 font-bold group-hover:text-white group-hover:border-white/20 transition-all">
                CONSULT NOW →
              </GlassButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
