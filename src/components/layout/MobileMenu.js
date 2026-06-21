"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MOBILE_NAV_LINKS } from "@/lib/navigation";
import { navigateToCalendly } from "@/lib/scroll";

export default function MobileMenu({ activeNavId, onClose }) {
  const router = useRouter();

  const handleDiscoveryClick = () => {
    onClose();
    navigateToCalendly(router);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-[#030712] border-b border-white/10 w-full overflow-hidden"
    >
      <nav className="px-4 pt-2 pb-6 space-y-2">
        {MOBILE_NAV_LINKS.map((link) => {
          const isActive = activeNavId === link.id;

          return (
            <Link
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              href={link.href}
              onClick={onClose}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] text-[#002e6a] font-bold"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="pt-4 px-2 border-t border-white/5">
          <button
            type="button"
            onClick={handleDiscoveryClick}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-center flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20"
          >
            <span>Request Discovery Call</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </motion.div>
  );
}
