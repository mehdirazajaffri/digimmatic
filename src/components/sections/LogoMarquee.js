import { PARTNER_LOGOS } from "@/lib/constants";

export default function LogoMarquee() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-12 bg-transparent overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-mono tracking-widest text-[#94b3b8] uppercase">
          Trusted by builders at world-class teams
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track space-x-12 sm:space-x-16">
          {logos.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-lg sm:text-2xl font-hanken font-black tracking-widest text-slate-500 hover:text-white transition-colors duration-300 select-none pb-2"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
