"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

const navLinks = [
  { label: "Strategy", href: "#services" },
  { label: "Content", href: "#services" },
  { label: "Meta Ads", href: "#services" },
  { label: "WhatsApp Leads", href: "#services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-white shadow-sm border-b border-[#E5E5E0]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#hero" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#1A7A4A] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-sm font-heading">
                  PP
                </span>
              </div>
              <span className="text-[18px] sm:text-[20px] font-bold text-[#1C1C1E] tracking-tight font-heading">
                Pixel Path
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <div className="flex bg-[#F8F8F6] rounded-full p-1 border border-[#E5E5E0]">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[14px] font-medium text-[#4B5563] hover:text-[#1C1C1E] hover:bg-white rounded-full px-4 py-2 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#1A7A4A] hover:bg-[#145e39] px-6 py-2.5 rounded-lg transition-colors"
              >
                Get Free Audit
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F8F8F6] transition-colors relative z-[60]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-[#1C1C1E]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1C1C1E]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[55] bg-white flex flex-col pt-20"
        >
          <div className="flex-1 px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[18px] font-medium text-[#1C1C1E] border-b border-[#E5E5E0]"
                style={{ animation: `fade-in-up 0.4s ease-out ${i * 0.08}s both` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 mt-auto pb-10">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full text-base font-semibold text-white bg-[#1A7A4A] px-5 py-4 rounded-lg transition-colors"
              >
                Get Free Audit
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Back to top button */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white text-[#1C1C1E] border border-[#E5E5E0] shadow-sm flex items-center justify-center hover:bg-[#F8F8F6] transition-colors focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
