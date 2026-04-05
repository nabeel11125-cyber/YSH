"use client";

import React from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Shilpi Sengupta",
    text: "YSH Solution helped us with our Startup India certification and we were super impressed with their team. Completed in just 2 days!",
    rating: 5,
    role: "Proprietor",
  },
  {
    name: "Tirthanjan Banerjee",
    text: "We had a fantastic experience working with YSH Solution for our startup's registration and funding needs. Incredibly prompt and efficient.",
    rating: 5,
    role: "Director",
  },
  {
    name: "Adarsh Singhania",
    text: "I had a fantastic experience with BharatEdge... they guided me through every step of the Startup India certification process with absolute professionalism.",
    rating: 5,
    role: "Founder",
  },
];

export const TestimonialCarousel = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container px-6">
        <h2 className="mb-16 font-outfit text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-center">
          Smart Consulting Backed by <span className="text-[#f1592a]">Real Results</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "glass-card p-10 max-w-sm rounded-[2rem] relative bg-white/5 border border-white/10 group transition-all duration-500",
                "hover:bg-white/10 hover:border-[#f1592a]/50"
              )}
            >
              <div className="mb-6 flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-[#f1592a] text-xl">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="mb-8 font-inter text-lg leading-relaxed text-slate-300 italic group-hover:text-white transition-colors duration-300">
                "{t.text}"
              </p>
              
              <div>
                <p className="font-outfit text-xl font-bold text-white group-hover:text-[#f1592a] transition-all">
                  {t.name}
                </p>
                <p className="font-inter text-sm font-semibold uppercase tracking-widest text-[#f1592a]">
                  {t.role}
                </p>
              </div>
              
              {/* Floating Quote Icon */}
              <div className="absolute top-10 right-10 text-8xl font-serif text-[#f1592a]/10 group-hover:text-[#f1592a]/20 transition-all pointer-events-none">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
