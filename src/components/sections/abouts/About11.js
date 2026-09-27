import Image from "next/image";
import React from "react";
import aboutImage14 from "@/assets/images/about_bg_1.jpg";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import { CheckCircle2, TrendingUp, Award, Users, ShieldCheck, Zap } from "lucide-react";

const About11 = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Learn & Earn Ecosystem",
      desc: "Gain industry-ready skills while accessing monetizable project opportunities.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Accredited Certifications",
      desc: "Earn verified credentials recognized by top tech companies and employers.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Users,
      title: "1-on-1 Expert Mentorship",
      desc: "Connect directly with experienced industry practitioners for career guidance.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Lifetime Course Access",
      desc: "Study at your own pace with unlimited access to updated course modules.",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About Left - Interactive Image Showcase */}
          <div data-aos="fade-right" className="lg:col-span-6 relative">
            <TiltWrapper>
              <div className="relative rounded-3xl p-3 glass-card shadow-2xl border border-white/60 dark:border-slate-800">
                <Image
                  className="w-full h-auto rounded-2xl object-cover shadow-md"
                  src={aboutImage14}
                  alt="About ReadGro"
                />
                
                {/* Floating Glass Stat Overlay */}
                <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl glass-card border border-white/80 dark:border-slate-700 shadow-2xl flex items-center gap-4 animate-float">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white">100%</h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Verified & Certified</p>
                  </div>
                </div>
              </div>
            </TiltWrapper>
          </div>

          {/* About Right - Content & Feature Grid */}
          <div data-aos="fade-left" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Why ReadGro
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Where Future Skills Meet <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-500">
                Financial Growth.
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              ReadGro is an innovative tech-education platform designed to bridge the gap between skill acquisition and real-world income. We don&apos;t just teach — we empower you to succeed.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${feat.color} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About11;
