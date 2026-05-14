import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimationObserver } from "@/components/ui/animation-observer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
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
    url: "https://www.pixelpathofficial.com",
    images: [
      {
        url: "https://www.pixelpathofficial.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pixel Path — Get More Patient Inquiries for Your Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Path | Get More Patient Inquiries for Your Clinic",
    description:
      "We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better social media, ads, content, and simple marketing systems.",
    images: ["https://www.pixelpathofficial.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.pixelpathofficial.com",
  },
};

// JSON-LD Structured Data — ProfessionalService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pixel Path",
  description:
    "We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better social media, ads, content, and simple marketing systems.",
  url: "https://www.pixelpathofficial.com",
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

// JSON-LD — LocalBusiness + AggregateRating
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pixel Path",
  url: "https://www.pixelpathofficial.com",
  email: "hello@pixelpathofficial.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
  },
};

// JSON-LD — FAQPage (for Google Rich Snippets)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "We already have a social media page. Why are we still not getting enough inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clinics have a page but lack a system. Random posts with no consistency mean your audience ignores you, no active ads mean organic reach alone isn't enough, and no lead follow-up system means inquiries come and go unanswered. A proper marketing system brings you the right type of inquiries, consistently.",
      },
    },
    {
      "@type": "Question",
      name: "Does Meta Ads work for clinics in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, exceptionally well. Sri Lanka has over 7+ million highly active Facebook & Instagram users. We generate leads for clinics by explicitly targeting high-intent demographics in specific areas (Colombo suburbs, Kandy, Galle, etc.) using custom Meta Ad strategies that bypass the price shoppers and attract serious patients.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see results before paying the full monthly fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We believe in earning our keep. That's why our process starts with a Free Clinic Audit, followed by a month-to-month commitment. You only pay for management when you see clear patient inquiry growth. You always control the actual ad budget directly on Meta/Google platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How much Meta Ads budget do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your clinic type and location. Minimum: LKR 20,000–40,000/month. Recommended: LKR 60,000–100,000/month. You pay the ad budget directly to Meta — we manage & optimize it daily for the best results without taking a percentage cut.",
      },
    },
    {
      "@type": "Question",
      name: "Will this take too much of my time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Your total time commitment is: Weekly status updates (5 min WhatsApp chat), Monthly review call (30 minutes), and approving content once per week (10 minutes). You focus on treating patients. We handle the content, ads, posting, and optimization.",
      },
    },
  ],
};

// JSON-LD — Organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixel Path",
  url: "https://www.pixelpathofficial.com",
  logo: "https://www.pixelpathofficial.com/icon.svg",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@pixelpathofficial.com",
    availableLanguage: ["English", "Sinhala"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased bg-cream min-h-screen flex flex-col overflow-x-hidden selection:bg-gold/20 selection:text-navy`}>
        {/* ── Google Tag Manager — loaded via @next/third-parties (non-blocking) ── */}
        <GoogleTagManager gtmId="GTM-523VPDFJ" />

        {/* ── Meta Pixel — loaded after page is interactive (non-blocking) ── */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1536621594644719');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1536621594644719&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ScrollProgress />
        <AnimationObserver />
        {children}
      </body>
    </html>
  );
}
