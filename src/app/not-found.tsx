import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Pixel Path",
  description: "The page you're looking for doesn't exist. Return to Pixel Path homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] px-6">
      <div className="text-center max-w-md">
        {/* Large 404 badge */}
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-[#1A7A4A]/10 border border-[#1A7A4A]/20 mb-8">
          <span className="text-5xl font-black text-[#20C969] font-heading">404</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4 leading-tight">
          Page Not Found
        </h1>
        <p className="text-white/50 text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#1A7A4A] hover:bg-[#15603A] text-white py-3.5 px-8 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_#1A7A4A]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
}
