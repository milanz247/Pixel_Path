import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "offwhite" | "charcoal" | "navy" | "cream" | "cream-dark";
  divider?: boolean;
}

const bgClassMap: Record<string, string> = {
  white: "bg-white",
  offwhite: "bg-[#FAF8F2]",
  charcoal: "bg-[#0B1120] text-white",
  cream: "bg-[#FAF8F2]",
  navy: "bg-[#0B1120]",
  "cream-dark": "bg-[#F3EFE6]",
};

export function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
  divider = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-premium relative ${bgClassMap[background]} ${className} ${
        divider ? "border-t border-[#E2E8F0]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">{children}</div>
    </section>
  );
}
