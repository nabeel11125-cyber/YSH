"use client";

import React from "react";
import Image from "next/image";
import { GlassButton } from "../ui/GlassButton";

export const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Premium Tech Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary-orange/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl animate-fade-up">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f1592a] ring-1 ring-white/10 backdrop-blur-sm">
            <span className="mr-2">✓</span> Grow With Us
          </div>

          {/* Headline */}
          <h1 className="mb-8 font-outfit text-6xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl leading-[0.9]">
            Buland Sapno <br />
            <span className="text-[#f1592a]">ke Saath.</span>
          </h1>

          {/* Subtext */}
          <p className="mb-12 max-w-2xl font-inter text-lg leading-relaxed text-slate-300 md:text-xl md:leading-relaxed">
            From registration to investor pitch, we simplify everything for your business journey. Empowering entrepreneurs through expert consultancy and funding assistance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <GlassButton variant="primary" size="lg">
              Grow Your Business
            </GlassButton>
            <GlassButton variant="outline" size="lg" className="group">
              <span className="mr-2 h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#f1592a] text-white transition-transform group-hover:scale-110">
                ▶
              </span>
              Watch Introduction
            </GlassButton>
          </div>

          {/* Partners */}
          <div className="pt-12 border-t border-white/10">
            <p className="mb-6 font-outfit text-sm font-semibold uppercase tracking-widest text-slate-500">
              Partnered With Industry Leaders
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Replace with actual partner logos if available, using placeholders for now with descriptive text */}
              <span className="text-xl font-bold text-white tracking-tighter">ROMEDA</span>
              <span className="text-xl font-bold text-white tracking-tighter">VISHWA</span>
              <span className="text-xl font-bold text-white tracking-tighter uppercase px-3 py-1 border border-white/20">Chitkara Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
