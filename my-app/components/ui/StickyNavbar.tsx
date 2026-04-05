"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { serviceCategories } from "@/lib/services-data";

export const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-all duration-500",
          showServices ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onMouseEnter={() => setShowServices(false)}
      />

      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
          scrolled || showServices ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
        )}
      >
        <div className="container px-6 flex justify-between items-center">
          <Link href="/" className="font-outfit text-2xl font-black tracking-tighter text-white group">
            YSH<span className="text-[#f1592a] transition-all group-hover:text-white"> Solution</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 font-inter text-sm font-bold uppercase tracking-widest">
            {/* Services with Megamenu */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <Link
                href="#services"
                className={cn(
                  "text-slate-400 hover:text-white transition-all relative group flex items-center gap-1",
                  showServices && "text-white"
                )}
              >
                Services
                <span className={cn("text-[10px] transition-transform duration-300", showServices && "rotate-180")}>
                  {showServices ? "▲" : "▼"}
                </span>
                <span className={cn("absolute -bottom-1 left-0 h-0.5 bg-[#f1592a] transition-all", showServices ? "w-full" : "w-0")} />
              </Link>

              {/* Megamenu */}
              <div 
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl mt-4 p-10 bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden",
                  showServices ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
                  {serviceCategories.map((category) => (
                    <div key={category.id} className="space-y-5">
                      <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(241,89,42,0.3)]">{category.icon}</span>
                        <div>
                          <h3 className="font-outfit text-sm font-black text-white tracking-[0.2em]">{category.title}</h3>
                          <p className="text-[9px] text-[#f1592a] font-bold tracking-widest mt-0.5">{category.badge}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {category.services.slice(0, 6).map((service, idx) => (
                          <li key={idx}>
                            <Link 
                              href="#contact" 
                              onClick={() => setShowServices(false)}
                              className="text-[11px] text-slate-400 hover:text-white hover:translate-x-1 transition-all block leading-relaxed"
                            >
                              {service}
                            </Link>
                          </li>
                        ))}
                        {category.services.length > 6 && (
                          <li className="pt-2">
                            <Link 
                              href="#services" 
                              onClick={() => setShowServices(false)}
                              className="text-[10px] text-[#f1592a] font-black uppercase tracking-widest hover:underline underline-offset-4"
                            >
                              + View All
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Call to Action Card in Megamenu */}
                  <div className="col-span-full lg:col-span-1 bg-gradient-to-br from-[#f1592a]/20 to-transparent rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="h-12 w-12 rounded-2xl bg-[#f1592a] flex items-center justify-center text-white text-2xl mb-6 shadow-[0_0_20px_rgba(241,89,42,0.4)]">
                        ✉
                      </div>
                      <h4 className="text-white font-black text-xl mb-3 font-outfit tracking-tight">Expert Consultation</h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">Not sure where to start? Get a free 15-minute roadmap with our business consultants.</p>
                    </div>
                    <Link 
                      href="#contact" 
                      onClick={() => setShowServices(false)}
                      className="mt-8 px-6 py-4 bg-white text-black text-[11px] font-black rounded-xl text-center hover:bg-[#f1592a] hover:text-white transition-all uppercase tracking-[0.15em] shadow-xl"
                    >
                      Book Free Call →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {["Funding", "About Us", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-slate-400 hover:text-white transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f1592a] transition-all group-hover:w-full" />
            </Link>
          ))}
          <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#f1592a] transition-all">
            ☰
          </button>
        </div>

        {/* Mobile Burger (Simplified for now) */}
        <div className="md:hidden">
          <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 text-white">
            ☰
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};
