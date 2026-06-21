"use client";

import Link from "next/link";
import { ArrowRight, ChartNoAxesColumn, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 mb-8 text-xs font-mono text-[#adc6ff] tracking-widest uppercase">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
        <span>Intelligence Redefined AT SCALE</span>
      </div>

      <h1 className="font-hanken font-extrabold text-[40px] sm:text-[64px] leading-[48px] sm:leading-[72px] tracking-tight text-white max-w-4xl mb-6">
        Automate the{" "}
        <span className="bg-gradient-to-r from-[#adc6ff] via-[#14d1ff] to-[#ffb786] bg-clip-text text-transparent">
          Extraordinary.
        </span>
      </h1>

      <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
        We build custom AI agents using Agentic techstack and end-to-end
        workflows that scale your business operations while you sleep. Reduce
        manual overhead by up to 90%.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full max-w-md">
        <Link
          id="solutions-hero-cta"
          href="/contact"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] text-[#002e6a] font-bold text-base hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
        >
          <span>Book Discovery Call</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
        </Link>
        <a
          href="#interactive-roi-widget"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Calculate ROI Savings</span>
          <ChartNoAxesColumn
            className="w-4 h-4 text-[#adc6ff]"
            aria-hidden="true"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center animate-bounce opacity-40">
        <span className="text-xs font-mono tracking-widest text-[#94b3b8] uppercase mb-1">
          Scroll to discover
        </span>
        <ChevronRight
          className="w-4 h-4 rotate-90 text-slate-400"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
