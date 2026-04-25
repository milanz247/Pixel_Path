"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#pricing" },
  { label: "How We Work", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-light-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#hero" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
              <span
                className="text-white font-bold text-xs"
                style={{
                  fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                }}
              >
                PP
              </span>
            </div>
            <span
              className="text-lg font-semibold text-navy tracking-tight"
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
              }}
            >
              Pixel Path
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-600 hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white gold-gradient px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              Get a Free Clinic Review
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-cream transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-navy" />
            ) : (
              <Menu className="w-5 h-5 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white/98 backdrop-blur-md z-40">
          <div className="px-5 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-navy-600 hover:text-navy border-b border-light-border transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center text-base font-semibold text-white gold-gradient px-5 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
              >
                Get a Free Clinic Review
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
