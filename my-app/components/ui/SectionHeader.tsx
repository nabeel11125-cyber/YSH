"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  badge,
  centered = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col mb-16",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f1592a] ring-1 ring-white/10 backdrop-blur-sm">
          {badge}
        </span>
      )}
      
      <h2 className="mb-6 font-outfit text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl">
        {title.split(" ").map((word, i) => (
          <span key={i} className={i % 3 === 2 ? "text-[#f1592a]" : ""}>
            {word}{" "}
          </span>
        ))}
      </h2>

      {subtitle && (
        <p className="max-w-2xl font-inter text-lg leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
      
      <div className={cn(
        "mt-8 h-1 w-24 rounded-full bg-linear-to-r from-primary-orange to-transparent",
        centered && "from-transparent via-primary-orange to-transparent"
      )} />
    </div>
  );
};
