"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Sparkles, Zap, ArrowRight, ShieldCheck } from "lucide-react";

const FALLBACK_PACKAGES = [
  {
    package_id: "p1",
    package_name: "Starter Skill Bundle",
    package_price: 1999,
    discount_price: 999,
    popular: false,
    package_image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    features: [
      "Access to 5 Core Foundation Courses",
      "Community Discord & Learner Forum",
      "Digital Completion Certificates",
      "6 Months Platform Access",
    ],
  },
  {
    package_id: "p2",
    package_name: "Pro Career & Earn Package",
    package_price: 4999,
    discount_price: 2499,
    popular: true,
    package_image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80",
    features: [
      "Access to ALL 25+ Premium Courses",
      "Direct Earning & Affiliate Monetization",
      "Weekly Live Mentor Q&A Sessions",
      "Lifetime Course Access & Updates",
      "Verified Certificate of Excellence",
    ],
  },
  {
    package_id: "p3",
    package_name: "Elite Mentorship Masterclass",
    package_price: 9999,
    discount_price: 4999,
    popular: false,
    package_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    features: [
      "Everything in Pro Package Included",
      "1-on-1 Dedicated Career Coach",
      "Resume Review & Mock Interviews",
      "Priority Earning Project Placement",
    ],
  },
];

const PricingPlans = () => {
  const router = useRouter();
  const [packages, setPackages] = useState(FALLBACK_PACKAGES);
  const [billingCycle, setBillingCycle] = useState("annual"); // annual or monthly
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://readgro-backend.onrender.com/getallpackages")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPackages(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              Flexible Pricing Plans
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Invest in Your Future with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500">
              ReadGro Learning Bundles
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            Choose the membership tier that fits your learning goals. All plans include full access to course materials and earn-as-you-learn opportunities.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mt-8">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-300 hover:text-indigo-600"
              }`}
            >
              Standard Rate
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-300 hover:text-indigo-600"
              }`}
            >
              <span>Special Offer</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-extrabold uppercase">
                Save 50%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {packages.map((pkg, idx) => {
            const isPopular = pkg.popular || idx === 1;
            const featuresList = pkg.features || [
              "Access to all foundational learning tracks",
              "Earn certificates upon module completion",
              "Community mentor support & forum access",
              "Regular content updates & bonus tools",
            ];

            return (
              <div
                key={pkg.package_id || idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 hover-lift ${
                  isPopular
                    ? "glass-card border-2 border-indigo-500 shadow-2xl scale-105 z-20"
                    : "glass-card border border-slate-200/80 dark:border-slate-800 shadow-lg"
                } p-6 sm:p-8`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Package Image */}
                  {pkg.package_image && (
                    <div className="relative h-44 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={pkg.package_image}
                        alt={pkg.package_name}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                    </div>
                  )}

                  {/* Title & Price */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {pkg.package_name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                      ₹{pkg.discount_price || pkg.package_price}
                    </span>
                    {pkg.package_price && pkg.package_price !== pkg.discount_price && (
                      <span className="text-sm font-semibold text-slate-400 line-through">
                        ₹{pkg.package_price}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {featuresList.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => router.push(`/packages/${pkg.package_id}`)}
                  className={`w-full py-4 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    isPopular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-indigo-500/25"
                      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                  }`}
                >
                  <span>Enroll In Bundle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
