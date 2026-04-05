"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const BentoCard = ({
  title,
  description,
  icon,
  className,
  children,
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        "glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-500",
        "hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary-orange/10 blur-3xl transition-all duration-700 group-hover:bg-primary-orange/20" />
      
      {icon && (
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl text-primary-orange shadow-inner ring-1 ring-white/10 group-hover:orange-gradient group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}

      <h3 className="mb-3 font-outfit text-2xl font-bold text-white tracking-tight">
        {title}
      </h3>
      
      <p className="font-inter text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
        {description}
      </p>

      {children && <div className="mt-8">{children}</div>}
    </div>
  );
};
