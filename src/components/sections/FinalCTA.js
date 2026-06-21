import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-[40px] bg-gradient-to-br from-blue-950 via-[#0a0f24] to-slate-950 p-8 sm:p-16 border border-[#adc6ff]/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#14d1ff]/5 rounded-full blur-[110px] pointer-events-none" />
        <span className="text-xs font-mono tracking-widest text-[#adc6ff] uppercase block mb-4">
          ZERO OVERHEAD AGENT DEPLOYMENT
        </span>
        <h3 className="font-hanken font-extrabold text-3xl sm:text-5xl text-white mb-6 max-w-3xl mx-auto leading-tight">
          Ready to automate the future?
        </h3>
        <p className="font-sans text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Join your industry leaders who are leveraging intelligence workflows
          with DIGIMMATIC AI to outpace standard constraints.
        </p>
        <Link
          href="/contact"
          className="px-10 py-5 rounded-full bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] text-[#002e6a] font-bold text-base hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 inline-block"
        >
          Book Your Discovery Call
        </Link>
      </div>
    </section>
  );
}
