"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Check,
  ChevronRight,
  Database,
  Workflow,
} from "lucide-react";
import {
  EXPERTISE_CARDS,
  NEURAL_IMAGE_URL,
} from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import SystemLog from "./SystemLog";

const ICONS = {
  Bot,
  Workflow,
  Database,
};

export default function CoreExpertise() {
  return (
    <section
      id="workflows"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24"
    >
      <SectionHeading
        eyebrow="Core Expertise"
        title="Engineered for Exponential Scale"
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {EXPERTISE_CARDS.map((card) => {
          const Icon = ICONS[card.icon];

          return (
            <div
              key={card.id}
              className="md:col-span-4 rounded-3xl glass-card glass-card-hover p-8 relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl transition-colors ${card.glowClass}`}
              />
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${card.iconBgClass}`}
              >
                <Icon className={`w-6 h-6 ${card.iconColorClass}`} aria-hidden="true" />
              </div>
              <h3 className="font-hanken font-bold text-xl text-white mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-slate-300 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="laser-divider my-4" />
              <ul className="space-y-2 text-xs font-mono text-slate-400">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="md:col-span-8 rounded-3xl glass-card p-6 relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="w-full md:w-1/2 h-56 rounded-2xl overflow-hidden relative border border-white/5 bg-slate-950">
            <Image
              src={NEURAL_IMAGE_URL}
              alt="Neuro network real-time flux simulation graph"
              fill
              className="object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 bg-blue-500/20 backdrop-blur-md text-[#adc6ff] border border-blue-500/30 text-[10px] font-mono px-2 py-1 rounded">
              Neural Flux Stream v4.5
            </span>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="inline-block bg-[#14d1ff]/10 text-[#14d1ff] text-[10px] font-mono px-2.5 py-1 rounded-full mb-3 w-max">
              COGNITIVE CORE
            </div>
            <h4 className="font-hanken font-bold text-lg text-white mb-2">
              Real-time AGENTIC Processing
            </h4>
            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Our core engine routes decisions instantly, querying secure deep
              databases with zero downtime. Beautifully modular, ready for custom
              workspace setups.
            </p>
            <Link
              href="/workflows"
              className="text-xs font-mono font-bold text-[#adc6ff] hover:text-white flex items-center space-x-1.5 transition-colors group mt-2"
            >
              <span>How we architect workflows</span>
              <ChevronRight
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <SystemLog />
      </div>
    </section>
  );
}
