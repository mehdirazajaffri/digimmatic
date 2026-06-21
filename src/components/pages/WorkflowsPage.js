"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Map,
  Network,
  Shield,
} from "lucide-react";
import {
  AGENT_FEATURES,
  IMPLEMENTATION_PHASES,
  ROADMAP_STAGES,
} from "@/lib/constants";

export default function WorkflowsPage() {
  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-mono tracking-widest text-[#adc6ff] uppercase block mb-3 bg-blue-900/30 px-3 py-1 rounded-full w-max mx-auto border border-blue-500/20">
          Enterprise Automation Hub
        </span>
        <h1 className="font-hanken font-extrabold text-4xl sm:text-[52px] leading-tight text-white mb-6">
          Our Core Services
        </h1>
        <p className="font-sans text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We architect the invisible infrastructure of tomorrow. From autonomous
          support to complex data orchestration, DIGIMMATIC AI builds systems
          that scale your business vision.
        </p>
        <div className="mt-6 laser-divider" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 rounded-3xl glass-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/5 rounded-full blur-[80px]" />
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#adc6ff]" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono tracking-wider text-[#adc6ff] uppercase bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  Autonomous Systems
                </span>
              </div>
              <h2 className="font-hanken font-bold text-2xl sm:text-3xl text-white mb-4">
                Custom Intelligent AI Agents
              </h2>
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Autonomous customer support agents that think, learn, and act with
                secure precision. Our customized cognitive agents handle complex
                customer issues, tickets, and multi-step tasks with human-like
                nuance and zero-latency deployment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {AGENT_FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 text-xs sm:text-sm text-slate-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-mono font-bold text-[#adc6ff] hover:text-white flex items-center space-x-2 group-hover:translate-x-1.5 transition-transform duration-300"
              >
                <span>Explore Configured Agents</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <span className="text-[10px] font-mono text-slate-500">
                DEPLOY TIME: &lt; 14 DAYS
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl glass-card p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[60px]" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-[#14d1ff]" aria-hidden="true" />
              </div>
              <h3 className="font-hanken font-bold text-xl text-white mb-2">
                Strategy & Roadmap
              </h3>
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                The AI transition playbook for forward-looking enterprise teams. We
                perform a complete tech audit of workflows to layout a 24-month
                roadmap with clear ROI landmarks.
              </p>
              <div className="space-y-4 my-6 bg-black/20 p-4 rounded-xl border border-white/5">
                {ROADMAP_STAGES.map((stage) => (
                  <div key={stage.label} className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${stage.active ? "bg-cyan-400" : "bg-slate-600"}`}
                    />
                    <span className="text-xs font-mono text-slate-300">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] text-[#002e6a] font-bold text-xs tracking-wide flex items-center justify-center space-x-2"
            >
              <span>Schedule a Roadmap Audit</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7 rounded-3xl glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[10px] font-mono tracking-widest text-[#14d1ff] uppercase bg-cyan-900/30 px-2.5 py-1 rounded border border-cyan-500/20">
              WORKFLOW ARCHITECTURE
            </span>
            <h3 className="font-hanken font-bold text-2xl text-white mt-4 mb-3">
              Complex n8n Workflow Synchronization
            </h3>
            <p className="font-sans text-slate-300 text-sm leading-relaxed mb-6">
              Eliminate bottlenecks across tools seamlessly with self-healing
              automation logic. We design massive, robust pipelines that securely
              bridge your CRM databases, email queues, Slack operations, and file
              systems.
            </p>
            <div className="rounded-2xl bg-slate-950 border border-cyan-500/20 p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#adc6ff]">
                  Active Node Orchestration Loop
                </span>
                <span className="bg-emerald-500/15 text-emerald-400 text-[10px] font-mono px-3 py-0.5 rounded-full">
                  LIVE
                </span>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-slate-400">
                <p>
                  <span className="text-cyan-500">❯</span> NODE_SYNC: CRM webhook
                  listener active
                </p>
                <p>
                  <span className="text-cyan-500">❯</span> PIPELINE: 12 connected
                  SaaS integrations
                </p>
                <p>
                  <span className="text-cyan-500">❯</span> STATUS: Self-healing
                  error recovery enabled
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-xs font-mono font-bold text-[#adc6ff] hover:text-white flex items-center space-x-2"
            >
              <span>Request Custom n8n Design</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-5 rounded-3xl glass-card p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#94b3b8] uppercase">
                Our Execution Methodology
              </span>
              <h3 className="font-hanken font-bold text-xl text-white mt-3 mb-2">
                The Implementation Path
              </h3>
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                A streamlined, transparent three-phase process designed to take
                your enterprise from manual bottlenecks to scale.
              </p>
              <div className="space-y-4">
                {IMPLEMENTATION_PHASES.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="p-4 rounded-xl bg-black/20 border border-white/5"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-900/30 flex items-center justify-center font-mono text-xs text-[#adc6ff] font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-hanken font-bold text-sm text-white">
                        {phase.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed pl-10">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[#090d1c] border border-white/5 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#adc6ff]" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-hanken font-bold text-lg text-white mb-1">
                Need a Custom Security Sandbox Strategy?
              </h4>
              <p className="font-sans text-sm text-slate-300">
                We natively build internal integrations utilizing strict
                self-hosted agents or local private API routing.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all flex items-center space-x-2 shrink-0"
          >
            <Network className="w-4 h-4 text-[#adc6ff]" aria-hidden="true" />
            <span>Consult Security Expert</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
