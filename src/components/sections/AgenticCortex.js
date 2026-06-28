import { BrainCircuit, Check } from "lucide-react";

const REASONING_STEPS = [
  "Perceive-plan-execute reasoning loops",
  "Tool calling & multi-agent routing",
];

export default function AgenticCortex() {
  return (
    <div className="md:col-span-4 rounded-3xl glass-card glass-card-hover p-8 relative overflow-hidden group self-start">
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl transition-colors bg-violet-500/5 group-hover:bg-violet-500/10" />

      <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-violet-900/30 border-violet-500/20">
        <BrainCircuit className="w-6 h-6 text-violet-300" aria-hidden="true" />
      </div>

      <h3 className="font-hanken font-bold text-xl text-white mb-3">
        Agentic AI Core
      </h3>

      <p className="font-sans text-slate-300 text-sm leading-relaxed mb-4">
        Autonomous agents that perceive context, plan multi-step actions, and
        execute across your stack with built-in tool calling and memory.
      </p>

      <div className="laser-divider my-4" />

      <ul className="space-y-2 text-xs font-mono text-slate-400">
        {REASONING_STEPS.map((step) => (
          <li key={step} className="flex items-center space-x-2">
            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
