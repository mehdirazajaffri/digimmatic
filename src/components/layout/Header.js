"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, getActiveNavId } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const activeNavId = getActiveNavId(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <BrandLogo onClick={() => setMobileOpen(false)} />

        <LayoutGroup>
          <nav className="hidden md:flex items-center space-x-1 bg-white/2 ml-4 p-1.5 rounded-full border border-white/5">
            {NAV_LINKS.map((link) => {
              const isActive = activeNavId === link.id;

              return (
                <Link
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-full tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#002e6a] shadow-md shadow-[#adc6ff]/10"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive ? (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  ) : null}
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            id="header-cta-button"
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all active:scale-95 flex items-center space-x-2"
          >
            <span>Book Discovery</span>
            <ArrowUpRight className="w-4 h-4 text-[#adc6ff]" aria-hidden="true" />
          </Link>
        </div>

        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <MobileMenu
            activeNavId={activeNavId}
            onClose={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </header>
  );
}
