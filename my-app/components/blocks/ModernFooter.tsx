"use client";

import React from "react";
import Link from "next/link";

const footerLinks = {
  solutions: [
    { label: "Business Registration", href: "#services" },
    { label: "Funding Assistance", href: "#funding" },
    { label: "Compliance & Tax", href: "#services" },
    { label: "Digital Branding", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
  contacts: [
    { label: "Chandigarh Office", value: "SCO 3, 2nd floor, Sector 26", icon: "📍" },
    { label: "Ahmedabad Office", value: "406-407, iSquare, Science City Road", icon: "📍" },
    { label: "Email Support", value: "hello@bharat-edge.com", icon: "📧" },
    { label: "Phone Support", value: "+91 82384 41111", icon: "📞" },
  ],
};

export const ModernFooter = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-full bg-primary-orange/5 blur-[100px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="mb-6 font-outfit text-2xl font-bold tracking-tighter text-white">
              Bharat<span className="text-[#f1592a]">Edge</span>
            </h2>
            <p className="mb-8 font-inter text-slate-400 leading-relaxed max-w-xs">
              Sada Grow Karo. Your trusted partner in business consultancy, startup scaling, and government funding excellence.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {["𝕏", "ln", "fb", "ig"].map((s, i) => (
                <div key={i} className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#f1592a] hover:text-white transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-[#f1592a]">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="font-inter text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-[#f1592a]">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="font-inter text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-[#f1592a]">Get in Touch</h4>
            <ul className="space-y-6">
              {footerLinks.contacts.map((c, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#f1592a] text-lg">{c.icon}</span>
                  <div>
                    <p className="font-inter text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{c.label}</p>
                    <p className="font-inter text-sm text-slate-300">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-xs text-slate-500 tracking-widest font-bold uppercase">
            © 2024 Bharat Edge. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {["English", "Punjabi"].map((lang, i) => (
              <span key={i} className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#f1592a] cursor-pointer transition-all">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
