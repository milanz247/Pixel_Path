"use client";

import { useEffect, useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "cream" | "navy" | "cream-dark";
}

export function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
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

  const bgClasses = {
    white: "bg-white",
    cream: "bg-cream",
    navy: "bg-navy text-white",
    "cream-dark": "bg-cream-dark",
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-premium ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
