"use client";
import React, { useState } from "react";
import Image from "next/image";
import faqImage from "@/assets/images/blog/blog_7.png";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      question: "What is ReadGro and how does it work?",
      answer:
        "ReadGro is an innovative e-learning and e-earning platform. You can enroll in accredited skill-building courses and also earn revenue by sharing referral links and participating in project tasks.",
    },
    {
      question: "Why choose ReadGro over other learning apps?",
      answer:
        "We offer practical, industry-aligned curricula, high affiliate referral commissions, 1-on-1 mentor guidance, and verified certificates that boost your career prospects.",
    },
    {
      question: "How do I sign up or register for a course?",
      answer:
        "Simply browse our course or package catalog, select your preferred plan, click 'Enroll Now', and complete the secure payment. You get instant access to all learning materials.",
    },
    {
      question: "What categories of courses are available?",
      answer:
        "ReadGro offers diverse tracks including Web & Mobile Development, AI & Machine Learning, UI/UX Design, Digital Marketing, Business Strategy, and Data Science.",
    },
    {
      question: "Will I receive a completion certificate?",
      answer:
        "Yes! Every course tier includes an official, verifiable digital certificate of achievement that you can add to your LinkedIn profile and resume.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 mb-4">
            <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-500">Questions</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
            Everything you need to know about ReadGro courses, pricing, and earning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* FAQ Image / Banner */}
          <div className="lg:col-span-5 hidden lg:block" data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 shadow-2xl border border-white/60 dark:border-slate-800">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src={faqImage}
                  alt="ReadGro FAQ"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/40 shadow-lg text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">24/7 Support</span>
                  </div>
                  <p className="text-sm font-semibold">Have more questions? Our team is always here to assist you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="lg:col-span-7 space-y-4" data-aos="fade-left">
            {accordionItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl glass-card border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-indigo-500/80 shadow-lg bg-indigo-50/30 dark:bg-indigo-950/20"
                      : "border-slate-200/80 dark:border-slate-800 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base md:text-lg cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-indigo-100 dark:border-indigo-900/40">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
