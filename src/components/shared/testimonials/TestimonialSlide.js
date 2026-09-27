import Image from "next/image";
import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialSlide = ({ testimonial }) => {
  const { name, image, desc, desig } = testimonial;
  return (
    <div className="px-3 py-4">
      <div className="p-6 md:p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl hover-lift relative overflow-hidden transition-all duration-300">
        {/* Background Quote Accent */}
        <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-indigo-500/5 dark:text-indigo-400/5 pointer-events-none" />

        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 shadow-md shrink-0">
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
                placeholder="blur"
                quality={100}
              />
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                {name}
              </h4>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                {desig}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-amber-500 fill-amber-500"
              />
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal italic">
            &ldquo;{desc}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
