import { CircleCheckBig, Lock, ShieldCheck, Zap } from "lucide-react";
import { EFFICIENCY_ITEMS, WORKFLOW_STEPS } from "@/lib/constants";

const ICONS = {
  Zap,
  Lock,
  ShieldCheck,
};

export default function EfficiencyGuardrails() {
  return (
    <section
      id="workflow-diagram"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono tracking-widest text-[#adc6ff] uppercase block mb-2">
            High Efficiency Guardrails
          </span>
          <h3 className="font-hanken font-extrabold text-2xl sm:text-3xl text-white mb-6 leading-tight">
            The Invisible Power Behind Modern Business Success.
          </h3>

          {EFFICIENCY_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <div
                key={item.id}
                className={`flex items-start space-x-4 ${
                  item.id !== "audits" ? "mb-6" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-900/20 border border-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-hanken font-bold text-base text-white">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-7 rounded-3xl bg-[#090d1c] border border-white/5 p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-[#adc6ff]">
              STABLE FLOW DIAGRAM
            </span>
            <span className="bg-emerald-500/15 text-emerald-400 text-[10px] font-mono px-3 py-0.5 rounded-full">
              ACTIVE AGENT LOOP
            </span>
          </div>

          <div className="space-y-4">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.id}>
                <div
                  className={`p-4 rounded-xl bg-slate-950 border ${step.borderClass} flex justify-between items-center transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-sm ${step.badgeBgClass} ${step.badgeTextClass}`}
                    >
                      {step.step}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#94b3b8] block">
                        {step.label}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {step.description}
                      </span>
                    </div>
                  </div>

                  {step.indicator === "ping" ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
                  ) : null}
                  {step.indicator === "dot" ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  ) : null}
                  {step.indicator === "check" ? (
                    <CircleCheckBig
                      className="w-5 h-5 text-emerald-400"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>

                {step.connectorClass ? (
                  <div
                    className={`w-0.5 h-6 bg-gradient-to-b ${step.connectorClass} mx-8`}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
