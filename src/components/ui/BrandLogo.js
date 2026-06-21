import Link from "next/link";
import { Cpu } from "lucide-react";

export default function BrandLogo({
  variant = "header",
  href = "/",
  onClick,
  id = "brand-logo",
}) {
  const isFooter = variant === "footer";

  const mark = isFooter ? (
    <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold font-mono text-[#002e6a] shrink-0">
      A
    </div>
  ) : (
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#adc6ff] to-[#14d1ff] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
      <Cpu className="w-5 h-5 text-[#002e6a]" aria-hidden="true" />
    </div>
  );

  const content = (
    <div className="flex items-center space-x-3">
      {mark}
      <div className="text-left">
        <span
          className={`font-hanken tracking-wider text-white select-none block ${
            isFooter
              ? "font-black text-base tracking-widest"
              : "font-bold text-lg sm:text-xl"
          }`}
        >
          DIGIMMATIC{" "}
          <span
            className={
              isFooter
                ? "text-[#14d1ff]"
                : "bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] bg-clip-text text-transparent"
            }
          >
            AI
          </span>
        </span>
        <p className="text-[9px] font-mono tracking-widest text-[#94b3b8] uppercase leading-none mt-0.5">
          {isFooter ? "COGNITIVE WORKSPACES OVERVIEW" : "AUTOMATION agency"}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return <div className="inline-flex shrink-0">{content}</div>;
  }

  return (
    <Link
      href={href}
      id={id}
      onClick={onClick}
      className="inline-flex shrink-0 cursor-pointer group"
    >
      {content}
    </Link>
  );
}
