import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Star, GraduationCap, ShieldCheck } from "lucide-react";
import useIsTrue from "@/hooks/useIsTrue";

const HeroSlide3 = ({ slide, idx }) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const { tag, title, image } = slide;

  return (
    <div className="container 2xl:container-secondary-md relative py-8 lg:py-16 overflow-visible">
      {/* Background Animated Glowing Mesh Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-12 relative z-10">
        {/* Banner Left (Text Section) */}
        <div
          data-aos="fade-right"
          className="lg:col-span-7 w-full text-center lg:text-left"
        >
          <div className="3xl:pr-12">
            {/* Live Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs md:text-sm font-semibold tracking-wide text-indigo-900 dark:text-indigo-200 uppercase">
                {tag || "EDUCATION & EARNING PLATFORM"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white tracking-tight">
              Master In-Demand Skills. <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 animate-gradient">
                Earn While You Learn.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Unlock industry-accredited courses, hands-on projects, and real-world earning opportunities with{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">ReadGro</span>. Join 10,000+ ambitious learners today.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25 hover-lift transition-all duration-300 text-base"
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-slate-800 dark:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700 shadow-sm hover-lift transition-all duration-300 text-base backdrop-blur-md"
              >
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                <span>How ReadGro Works</span>
              </Link>
            </div>

            {/* Trust Features Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Certified Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>4.9/5 Rating (2.5k+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Right (Image Section with Floating Glass Badges) */}
        <div data-aos="fade-left" className="lg:col-span-5 w-full relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Ambient Image Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            {/* Hero Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 dark:border-slate-800 bg-white/10 backdrop-blur-sm">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                src={image}
                alt="ReadGro Education Platform"
                placeholder="blur"
                priority
              />
            </div>

            {/* Floating Glass Badge Top Left */}
            <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/60 shadow-xl animate-float">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Active Students</p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">10,000+ Enrolled</p>
              </div>
            </div>

            {/* Floating Glass Badge Bottom Right */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/60 shadow-xl animate-float" style={{ animationDelay: "2.5s" }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Star className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Course Rating</p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">4.9 ★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide3;
