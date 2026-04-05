"use client";

import React, { useState } from "react";
import { GlassButton } from "../ui/GlassButton";
import { SectionHeader } from "../ui/SectionHeader";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  const services = [
    "Business Incorporation",
    "Startup Certification",
    "Seed Funding & Loans",
    "Legal Protection",
    "Government Grants (Nidhi)",
    "Branding & Digital Marketing",
  ];

  if (status === "success") {
    return (
      <section id="contact" className="py-24 bg-slate-900 border-y border-white/5 relative">
        <div className="container px-6 text-center">
          <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary-orange/20 text-5xl text-primary-orange ring-4 ring-primary-orange/40 animate-bounce">
            ✓
          </div>
          <h2 className="mb-4 font-outfit text-4xl font-bold text-white tracking-tight">
            Consultation Scheduled!
          </h2>
          <p className="mb-8 font-inter text-lg text-slate-400">
            One of our business experts will reach out to you within 24 hours.
          </p>
          <GlassButton variant="secondary" onClick={() => setStatus("idle")}>
            BACK TO FORM
          </GlassButton>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 border-y border-white/5 relative">
      <div className="absolute top-0 right-0 h-full w-1/3 bg-primary-orange/5 blur-[120px] pointer-events-none" />
      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader
              centered={false}
              badge="Expert Advice"
              title="Time is Money. Save Both."
              subtitle="Connect with our experts today and accelerate your startup journey. From registration to funding, we've got you covered."
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary-orange ring-1 ring-white/10 group-hover:orange-gradient group-hover:text-white transition-all">
                  📞
                </div>
                <div>
                  <p className="font-outfit text-sm font-semibold uppercase tracking-widest text-slate-500">Call Us</p>
                  <p className="text-xl font-bold text-white tracking-tight">+91 82384 41111</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary-orange ring-1 ring-white/10 group-hover:orange-gradient group-hover:text-white transition-all">
                  📧
                </div>
                <div>
                  <p className="font-outfit text-sm font-semibold uppercase tracking-widest text-slate-500">Email Us</p>
                  <p className="text-xl font-bold text-white tracking-tight">hello@bharat-edge.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 rounded-[2.5rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-inter text-xs font-bold uppercase tracking-widest text-slate-500">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange/50 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-inter text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="Contact number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange/50 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-inter text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block mb-2 font-inter text-xs font-bold uppercase tracking-widest text-slate-500">Select Service</label>
                <select
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange/50 transition-all"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" className="bg-slate-900">Choose a service</option>
                  {services.map((s, i) => (
                    <option key={i} value={s} className="bg-slate-900">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <GlassButton type="submit" variant="primary" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "PROCESSING..." : "SCHEDULE CONSULTATION →"}
              </GlassButton>
              
              <p className="text-center font-inter text-xs text-slate-500 mt-6">
                By clicking, you agree to our Privacy Policy and Terms of Services.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
