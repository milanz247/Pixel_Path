"use client";

import { useEffect, useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "offwhite" | "charcoal" | "navy" | "cream" | "cream-dark"; // Added cream-dark
  divider?: boolean;
}

const bgClassMap: Record<string, string> = {
  white: "bg-white",
  offwhite: "bg-[#FAF8F2]",
  charcoal: "bg-[#0B1120] text-white",
  cream: "bg-[#FAF8F2]", // Map legacy cream to offwhite
  navy: "bg-[#0B1120]",  // Map legacy navy to charcoal
  "cream-dark": "bg-[#F3EFE6]", // Slightly darker cream shade
};

export function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
  divider = false,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements =
              entry.target.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-premium relative ${bgClassMap[background]} ${className} ${
        divider ? "border-t border-[#E2E8F0]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">{children}</div>
    </section>
  );
}
