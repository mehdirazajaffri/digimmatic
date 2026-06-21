"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import { FOOTER_LINKS } from "@/lib/navigation";
import { navigateToCalendly } from "@/lib/scroll";

export default function Footer() {
  const router = useRouter();

  const handleFooterClick = (link, event) => {
    if (!link.scrollToCalendly) {
      return;
    }

    event.preventDefault();
    navigateToCalendly(router);
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <BrandLogo variant="footer" href={null} id="footer-brand-logo" />

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
          {FOOTER_LINKS.map((link, index) => (
            <span key={link.id} className="flex items-center gap-4 sm:gap-6">
              <Link
                href={link.href}
                onClick={(event) => handleFooterClick(link, event)}
                className="hover:text-[#adc6ff] transition-all"
              >
                {link.label}
              </Link>
              {index < FOOTER_LINKS.length - 1 ? <span>•</span> : null}
            </span>
          ))}
        </div>

        <p className="text-[10px] font-mono text-slate-500">
          © 2026 DIGIMMATIC AI Automation Agency. All rights preserved.
        </p>
      </div>
    </footer>
  );
}
