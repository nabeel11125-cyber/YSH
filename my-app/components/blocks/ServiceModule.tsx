"use client";

import React from "react";
import { BentoCard } from "../ui/BentoCard";
import { SectionHeader } from "../ui/SectionHeader";

const services = [
  {
    title: "AARAMBH",
    description: "Launch your business with expert guidance on Private Limited, NGO, and Partnership registration.",
    icon: "💎",
    badge: "Business Setup",
  },
  {
    title: "PRAMANIT",
    description: "Navigate business compliance, tax auditing, and essential business certifications with ease.",
    icon: "📜",
    badge: "Compliance",
  },
  {
    title: "VIKAS",
    description: "Fuel your business growth with venture capital expertise and government loan assistance.",
    icon: "📈",
    badge: "Venture Capital",
  },
  {
    title: "KAVACH",
    description: "Secure your intellectual property through trademark registration and legal protection.",
    icon: "🛡️",
    badge: "Legal Protection",
  },
  {
    title: "NIDHI",
    description: "Unlock MSME support schemes and tailored government grants for financial stability.",
    icon: "💰",
    badge: "Grants & Support",
  },
  {
    title: "VISTAR",
    description: "Elevate your brand with logo design, digital marketing, and modern website development.",
    icon: "🚀",
    badge: "Brand Building",
  },
];

export const ServiceModule = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/50 backdrop-blur-3xl relative">
      <div className="container px-6">
        <SectionHeader
          badge="Business Solutions"
          title="From Idea to Enterprise"
          subtitle="Comprehensive consultancy services designed to simplify every aspect of your business growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <BentoCard
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="md:hover:scale-[1.05]"
            >
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[#f1592a] uppercase tracking-tighter">
                  {service.badge}
                </span>
                <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#f1592a] transition-all">
                  →
                </span>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
