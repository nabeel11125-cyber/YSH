"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="container px-6 flex justify-between items-center">
        <Link href="/" className="font-outfit text-2xl font-black tracking-tighter text-white group">
          YSH<span className="text-[#f1592a] transition-all group-hover:text-white"> Solution</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 font-inter text-sm font-bold uppercase tracking-widest">
          {["Services", "Funding", "About Us", "Contact"].map((item, i) => (
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
  );
};
