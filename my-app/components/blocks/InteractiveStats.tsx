"use client";

import React from "react";

const stats = [
  {
    label: "Projects Executed",
    value: "15,000+",
    icon: "🚀",
  },
  {
    label: "Google Rating",
    value: "4.7★",
    icon: "🌟",
  },
  {
    label: "Client Reviews",
    value: "1,000+",
    icon: "💬",
  },
  {
    label: "Monthly Projects",
    value: "50+",
    icon: "📈",
  },
];

export const InteractiveStats = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-primary-orange/50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-accent-blue/50 to-transparent opacity-50" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group transition-all duration-300 transform hover:scale-110">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-3xl shadow-xl ring-1 ring-white/10 group-hover:bg-[#f1592a] group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="mb-2 font-outfit text-4xl font-extrabold tracking-tighter text-white md:text-5xl lg:text-6xl group-hover:text-[#f1592a] transition-all">
                {stat.value}
              </h3>
              <p className="font-inter text-sm font-semibold uppercase tracking-widest text-slate-500 group-hover:text-white transition-all">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="font-outfit text-xl italic text-slate-400">
            &quot;Sada Grow Karo - Leading the future of startup innovation.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};
