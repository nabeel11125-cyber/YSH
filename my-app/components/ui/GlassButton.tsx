"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const GlassButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: GlassButtonProps) => {
  const variants = {
    primary: "orange-gradient text-white shadow-[0_10px_30px_rgba(241,89,42,0.3)] hover:shadow-[0_15px_40px_rgba(241,89,42,0.5)] transform hover:-translate-y-0.5",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg transform hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-white/20 hover:border-white/40 text-white transform hover:-translate-y-0.5",
    ghost: "bg-transparent hover:bg-white/5 text-white/80 hover:text-white transition-all",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm font-medium",
    md: "px-8 py-4 text-base font-semibold",
    lg: "px-10 py-5 text-lg font-bold tracking-wide",
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl transition-all duration-300 font-outfit",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
