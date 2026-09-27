import Image from "next/image";
import React from "react";

const CounterItem = ({ item }) => {
  const { name, data, image, symbol } = item;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-3" data-aos="fade-up">
      <div className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl hover-lift transition-all duration-300 flex items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 dark:from-indigo-500/20 dark:to-emerald-500/20 border border-indigo-200/50 dark:border-indigo-800/50 flex items-center justify-center p-2 shadow-inner shrink-0">
          <Image src={image} alt={name} className="w-full h-auto object-contain" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
            <span data-countup-number={data}>{data}</span>
            <span className="text-indigo-600 dark:text-indigo-400">{symbol}</span>
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterItem;
