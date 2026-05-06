"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#social-proof" },
  { label: "Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
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
      {/* Desktop & Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-4 md:py-6" : "py-6 md:py-8"
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "max-w-[1024px] px-4 md:px-0" : "max-w-[1140px] px-6 sm:px-8"
          }`}
        >
          <div 
            className={`flex items-center justify-between transition-all duration-500 overflow-hidden ${
              scrolled 
                ? "h-[64px] bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 ring-1 ring-[#1C1C1E]/5 rounded-2xl px-6" 
                : "h-[64px] bg-transparent rounded-none px-0 border-transparent ring-0 shadow-none"
            }`}
          >
            {/* Logo */}
            <a href="#hero" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#1A7A4A] flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
                <span className="text-white font-bold text-[15px] font-heading tracking-wide">
                  PP
                </span>
              </div>
              <span className={`text-[20px] font-bold tracking-tight font-heading group-hover:text-[#1A7A4A] transition-colors ${
                scrolled ? "text-[#1C1C1E]" : "text-white"
              }`}>
                Pixel Path
              </span>
            </a>

            {/* Desktop Links (Center) */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className={`flex items-center gap-1 transition-all duration-500 ${scrolled ? "bg-black/5 p-1 rounded-full border border-black/5" : ""}`}>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-[14px] font-medium transition-all duration-300 rounded-full px-5 py-2 hover:bg-white hover:text-[#1A7A4A] hover:shadow-sm ${
                      scrolled ? "text-[#4B5563]" : "text-white/80 hover:bg-white/20"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA (Right) */}
            <div className="hidden md:flex items-center shrink-0">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[14px] font-semibold text-white bg-[#1A7A4A] hover:bg-[#15603A] hover:shadow-lg hover:shadow-[#1A7A4A]/20 hover:-translate-y-0.5 px-6 py-2.5 rounded-xl transition-all duration-300"
              >
                Get Free Audit
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors relative z-[60] ${
                scrolled || mobileOpen ? "bg-[#F8F8F6] text-[#1C1C1E] hover:bg-[#E5E5E0]" : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[55] bg-white/95 backdrop-blur-lg transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-[120px] px-8 pb-10">
          <div className="flex-1 flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[32px] font-bold text-[#1C1C1E] font-heading tracking-tight hover:text-[#1A7A4A] transition-colors"
                style={{ 
                  animation: mobileOpen ? `count-up 0.5s ease-out ${i * 0.1}s both` : 'none',
                  opacity: 0, 
                  transform: 'translateY(10px)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full text-[16px] font-bold text-white bg-[#1A7A4A] px-6 py-5 rounded-2xl shadow-lg shadow-[#1A7A4A]/20 transition-transform active:scale-95"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </div>

      {/* Floating Back to top button */}
      <div 
        className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${
          scrolled ? 'opacity-100 translate-y-0 shadow-2xl' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white text-[#1C1C1E] border border-[#E5E5E0] flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 hover:border-[#1A7A4A] hover:text-[#1A7A4A] transition-all duration-300 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
