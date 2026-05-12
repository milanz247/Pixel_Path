import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimationObserver } from "@/components/ui/animation-observer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pixel Path | Get More Patient Inquiries for Your Clinic",
  description:
    "We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better social media, ads, content, and simple marketing systems.",
  keywords: [
    "clinic marketing Sri Lanka",
    "dental clinic marketing",
    "skin clinic marketing",
    "aesthetic clinic marketing",
    "patient inquiries",
    "clinic social media",
    "healthcare marketing Sri Lanka",
    "dental clinic Colombo",
    "skin clinic Kandy",
    "aesthetic clinic Nugegoda",
    "clinic WhatsApp marketing",
    "clinic lead generation Sri Lanka",
  ],
  openGraph: {
    title: "Pixel Path | Get More Patient Inquiries for Your Clinic",
    description:
      "We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better social media, ads, content, and simple marketing systems.",
    type: "website",
    locale: "en_US",
    siteName: "Pixel Path",
    url: "https://pixelpath.lk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Path | Get More Patient Inquiries for Your Clinic",
    description:
      "We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better social media, ads, content, and simple marketing systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pixelpath.lk",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pixel Path",
  description:
    "We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better social media, ads, content, and simple marketing systems.",
  url: "https://pixelpath.lk",
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },
  serviceType: [
    "Social Media Marketing",
    "Digital Marketing",
    "Content Creation",
    "Meta Ads Management",
    "Google Ads Management",
    "Landing Page Development",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Dental Clinics, Skin Clinics, Aesthetic Clinics",
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-523VPDFJ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased bg-cream min-h-screen flex flex-col overflow-x-hidden selection:bg-gold/20 selection:text-navy`}>
        <GoogleTagManager gtmId={gtmId} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollProgress />
        <AnimationObserver />
        {children}
      </body>
    </html>
  );
}
