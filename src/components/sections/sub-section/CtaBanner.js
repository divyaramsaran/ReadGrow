"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Rocket, ShieldCheck } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-14 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-950 text-white shadow-2xl border border-indigo-500/30">
          {/* Animated Background Mesh Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-sm">
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Accelerate Your Future Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Ready to Upgrade Your Skills and <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Unlock Real Earning Power?
              </span>
            </h2>

            <p className="text-base md:text-xl text-indigo-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ students already advancing their careers on ReadGro. Get instant access to top-rated courses and expert mentorship.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-xl hover:shadow-emerald-500/30 hover-lift transition-all duration-300 text-base"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover-lift transition-all duration-300 text-base"
              >
                <span>Talk to an Advisor</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-indigo-200 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Verified Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
