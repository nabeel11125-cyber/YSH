import React from "react";
import { StickyNavbar } from "../components/ui/StickyNavbar";
import { ModernHero } from "../components/blocks/ModernHero";
import { FundingBento } from "../components/blocks/FundingBento";
import { ServiceModule } from "../components/blocks/ServiceModule";
import { InteractiveStats } from "../components/blocks/InteractiveStats";
import { TestimonialCarousel } from "../components/blocks/TestimonialCarousel";
import { ConsultationForm } from "../components/blocks/ConsultationForm";
import { ModernFooter } from "../components/blocks/ModernFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <StickyNavbar />
      
      <main>
        <ModernHero />
        
        {/* About/Trust Section - Integrated into Flow */}
        <section id="about" className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <span className="mb-4 inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f1592a] ring-1 ring-white/10">
                Legacy of Trust
              </span>
              <h2 className="mb-8 font-outfit text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Ahmedabad's Leading <span className="text-[#f1592a]">Business Consultancy</span>
              </h2>
              <p className="mb-6 font-inter text-lg text-slate-400 leading-relaxed">
                We are an Ahmedabad-based consultancy firm with over 40+ years of combined experience in guideing startups and MSMEs toward financial and regulatory excellence.
              </p>
              <ul className="space-y-4 font-inter text-slate-300">
                {["Pan-India Presence with Multiple Offices", "Expert Team with Proven Track Record", "Customer-Centric Regulatory Approach", "4.7★ Google Rating & 1000+ Reviews"].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <span className="h-2 w-2 rounded-full bg-[#f1592a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-video rounded-[3rem] overflow-hidden group shadow-2xl ring-1 ring-white/20">
              <div className="absolute inset-0 bg-linear-to-br from-[#f1592a]/20 to-accent-blue/20 mix-blend-overlay group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 filter grayscale">
                🏙️
              </div>
            </div>
          </div>
        </section>

        <FundingBento />
        <ServiceModule />
        <InteractiveStats />
        <TestimonialCarousel />
        <ConsultationForm />
      </main>

      <ModernFooter />
    </div>
  );
}
