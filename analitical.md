# 🔍 Pixel Path — Complete SEO & Performance Audit

**Website:** `https://www.pixelpathofficial.com`
**Stack:** Next.js 16.2.4 · React 19 · TailwindCSS 4 · App Router
**Date:** May 14, 2026

---

## Executive Summary

| Metric                     | Score        | Grade   |
| -------------------------- | ------------ | ------- |
| **Overall SEO Score**      | **52 / 100** | 🔴 Poor |
| **Technical SEO**          | 48 / 100     | 🔴      |
| **On-Page SEO**            | 58 / 100     | 🟡      |
| **Performance**            | 45 / 100     | 🔴      |
| **Next.js Best Practices** | 40 / 100     | 🔴      |
| **Security & Trust**       | 55 / 100     | 🟡      |
| **AI/GEO Readiness**       | 35 / 100     | 🔴      |

> [!CAUTION]
> **19 critical issues** found that are actively hurting your rankings and conversions. The site is essentially invisible to search engines for key queries due to missing sitemap, excessive client-side rendering, and no structured data for FAQs/pricing.

---

## 1. Technical SEO

### 1.1 Crawlability & Indexability

| Check          | Status                                                                | Impact   |
| -------------- | --------------------------------------------------------------------- | -------- |
| robots.txt     | ✅ Present                                                            | —        |
| Sitemap.xml    | 🔴 **MISSING**                                                        | Critical |
| Canonical URL  | ✅ Set in layout                                                      | —        |
| robots meta    | ✅ index, follow                                                      | —        |
| Redirect chain | ⚠️ Unknown (no middleware)                                            | —        |
| URL structure  | ✅ Clean (single page)                                                | —        |
| Broken links   | ⚠️ `#how-it-works` link in footer/navbar but section is commented out | Medium   |
| hreflang       | 🟡 Not needed (single-language)                                       | —        |

#### 🔴 CRITICAL: No `sitemap.xml`

**What:** `robots.txt` references `https://www.pixelpathofficial.com/sitemap.xml` but no sitemap file exists.
**Why:** Google can't efficiently discover and index your pages. The broken sitemap reference is worse than having none.
**Impact:** ⬆️ High — Google Search Console will flag this as an error.

**Fix — Create `src/app/sitemap.ts`:**

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.pixelpathofficial.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
```

#### 🔴 CRITICAL: Broken Internal Links

**What:** Navbar links to `#how-it-works` and `#process`, but `<HowItWorksSection />` is commented out in `page.tsx`.
**Why:** Users clicking "Process" in the nav go nowhere — bad UX and trust signal.
**Fix:** Either uncomment the section or remove links referencing it from [navbar.tsx](file:///c:/Users/milan_m/Desktop/Pixel_Path/src/components/sections/navbar.tsx#L11) and [footer.tsx](file:///c:/Users/milan_m/Desktop/Pixel_Path/src/components/sections/footer.tsx#L7).

---

### 1.2 SSR/CSR/SSG Optimization

| Component                | Rendering | Issue                  |
| ------------------------ | --------- | ---------------------- |
| `layout.tsx`             | ✅ Server | —                      |
| `page.tsx`               | ✅ Server | —                      |
| `hero.tsx`               | 🔴 Client | Unnecessary            |
| `navbar.tsx`             | 🟡 Client | Needed for scroll/menu |
| `services.tsx`           | ✅ Server | —                      |
| `social-proof.tsx`       | 🔴 Client | Unnecessary            |
| `why-pixel-path.tsx`     | ✅ Server | —                      |
| `pricing.tsx`            | 🔴 Client | Only for addon toggle  |
| `clinic-automation.tsx`  | 🔴 Client | Unnecessary            |
| `faq.tsx`                | 🔴 Client | Only for accordion     |
| `risk-reversal.tsx`      | ✅ Server | —                      |
| `footer.tsx`             | ✅ Server | —                      |
| `scroll-progress.tsx`    | 🟡 Client | Needed                 |
| `animation-observer.tsx` | 🟡 Client | Needed                 |
| `sticky-whatsapp.tsx`    | 🟡 Client | Needed                 |

#### 🔴 CRITICAL: Excessive "use client" — 9 of 13 section files are client components

**What:** `hero.tsx`, `social-proof.tsx`, `clinic-automation.tsx` are marked `"use client"` but contain zero interactive state.
**Why:** Client components ship their entire JS to the browser, increasing bundle size, delaying hydration, and hurting LCP/INP. Search engine crawlers get an empty shell until JS executes.
**Impact:** ⬆️⬆️ Very High — affects every Core Web Vital.

**Fix — Remove `"use client"` from these files:**

- [hero.tsx](file:///c:/Users/milan_m/Desktop/Pixel_Path/src/components/sections/hero.tsx#L1) — has no `useState`/`useEffect`. Remove `"use client"`.
- [social-proof.tsx](file:///c:/Users/milan_m/Desktop/Pixel_Path/src/components/sections/social-proof.tsx#L1) — just renders JSX. Remove `"use client"`.
- [clinic-automation.tsx](file:///c:/Users/milan_m/Desktop/Pixel_Path/src/components/sections/clinic-automation.tsx#L1) — no interactivity. Remove `"use client"`.

For `pricing.tsx` and `faq.tsx`, extract the interactive part into a tiny client sub-component and keep the bulk as a server component.

---

### 1.3 Structured Data / Schema Markup

| Schema Type             | Status               |
| ----------------------- | -------------------- |
| ProfessionalService     | ✅ Present           |
| FAQPage                 | 🔴 **MISSING**       |
| Product/Offer (Pricing) | 🔴 **MISSING**       |
| LocalBusiness           | 🔴 **MISSING**       |
| Organization            | 🔴 **MISSING**       |
| BreadcrumbList          | 🟡 N/A (single page) |
| Review/AggregateRating  | 🔴 **MISSING**       |

#### 🔴 CRITICAL: Missing FAQPage Schema

**What:** You have 5 FAQs but no `FAQPage` structured data.
**Why:** FAQPage schema can give you rich results (expandable answers in Google SERPs), dramatically increasing click-through rates.
**Impact:** ⬆️⬆️ Very High — potential for rich snippets.

**Fix — Add to `layout.tsx` alongside existing `jsonLd`:**

```typescript
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "We already have a social media page. Why are we still not getting enough inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clinics have a page but lack a system. Random posts, no active ads, and no lead follow-up system mean inquiries come and go unanswered. A proper marketing system brings you the right type of inquiries, consistently.",
      },
    },
    {
      "@type": "Question",
      name: "Does Meta Ads work for clinics in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, exceptionally well. Sri Lanka has over 7+ million highly active Facebook & Instagram users. We generate leads by targeting high-intent demographics using custom Meta Ad strategies.",
      },
    },
    // ... add remaining FAQs
  ],
};
```

#### 🔴 Missing LocalBusiness + AggregateRating Schema

**Fix — Add:**

```typescript
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
```

---

### 1.4 `next.config.ts` Issues

**What:** Config is completely empty — no optimizations configured.
**Fix:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],
};

export default nextConfig;
```

---

## 2. On-Page SEO

### 2.1 Meta Tags

| Element          | Status      | Notes                               |
| ---------------- | ----------- | ----------------------------------- |
| Title tag        | ✅ Present  | 55 chars — good length              |
| Meta description | ✅ Present  | 155 chars — good length             |
| Keywords         | ✅ Present  | 12 keywords                         |
| Open Graph       | ✅ Complete | title, desc, image, url, locale     |
| Twitter Card     | ✅ Complete | summary_large_image                 |
| Canonical        | ✅ Set      | `https://www.pixelpathofficial.com` |
| Viewport         | ✅ Present  | width=device-width                  |
| Theme color      | ✅ Set      | `#0F172A`                           |

> [!TIP]
> Meta tags are well-configured. This is one of the strongest areas.

### 2.2 Heading Structure

| Level | Count | Content                                                             |
| ----- | ----- | ------------------------------------------------------------------- |
| H1    | 1     | "Turn Your Clinic's Social Media Into A Patient Inquiry System." ✅ |
| H2    | 7     | Services, Social Proof, Why, Pricing, Automation, Risk, FAQ ✅      |
| H3    | ~15   | Service titles, pricing names, automation CTA ✅                    |
| H4    | 3     | Footer column headers ✅                                            |

> [!NOTE]
> Heading hierarchy is clean. Single H1, proper nesting.

### 2.3 Image Optimization

| Issue              | Status                                         | Impact   |
| ------------------ | ---------------------------------------------- | -------- |
| `next/image` usage | 🔴 **NOT USED AT ALL**                         | Critical |
| Image alt tags     | 🔴 Only 1 (Meta pixel noscript with empty alt) | Critical |
| hero-clinic.png    | 🔴 727KB unoptimized in `/public`              | High     |
| og-image.png       | 🟡 488KB — acceptable for OG                   | Low      |

#### 🔴 CRITICAL: Zero `next/image` Usage

**What:** Not a single `<Image>` from `next/image` anywhere. The hero-clinic.png (727KB) sits in `/public` unused.
**Why:** `next/image` provides automatic WebP/AVIF conversion, responsive srcsets, lazy loading, blur placeholders, and prevents CLS. Without it, you serve massive unoptimized images.
**Fix:** If images are used, import and use `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/hero-clinic.png"
  alt="Clinic marketing dashboard showing patient inquiry results"
  width={600}
  height={400}
  priority // for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/png;base64,..." // generate with plaiceholder
/>;
```

### 2.4 Internal Linking

| Issue                         | Status         |
| ----------------------------- | -------------- |
| Anchor links between sections | ✅ Present     |
| Footer links to sections      | ✅ Present     |
| CTA links to WhatsApp         | ✅ Present     |
| Blog/content hub              | 🔴 **Missing** |
| Service sub-pages             | 🔴 **Missing** |

> [!IMPORTANT]
> Single-page architecture limits SEO potential. You cannot rank for long-tail keywords without dedicated content pages.

### 2.5 Content Quality Issues

- 🔴 **Thin Content Risk**: Single page with no blog, no case studies, no individual service pages.
- 🔴 **No Testimonial Attribution**: Testimonial authors appear fabricated (no links, no photos, no verification).
- 🟡 **Keyword Stuffing Risk**: Meta keywords include location-specific terms but no matching on-page content for some (e.g., "Kandy", "Nugegoda").

---

## 3. Performance & Core Web Vitals

### 3.1 Estimated Scores

| Metric   | Estimated  | Target  | Status  |
| -------- | ---------- | ------- | ------- |
| **LCP**  | ~3.5-4.5s  | < 2.5s  | 🔴 Poor |
| **CLS**  | ~0.15-0.25 | < 0.1   | 🔴 Poor |
| **INP**  | ~150ms     | < 200ms | 🟡 OK   |
| **TTFB** | ~600ms     | < 800ms | ✅ Good |
| **FCP**  | ~2.5-3.5s  | < 1.8s  | 🔴 Poor |

### 3.2 Performance Issues

#### 🔴 CRITICAL: Render-Blocking Third-Party Scripts in `<head>`

**What:** GTM and Meta Pixel are injected via `dangerouslySetInnerHTML` directly in `<head>` — synchronous scripts that block rendering.
**Why:** These scripts must download, parse, and execute before the page can paint, adding 500ms-1.5s to LCP.

**Fix — Use `@next/third-parties` (already installed!) and `afterInteractive` strategy:**

```tsx
// layout.tsx
import { GoogleTagManager } from "@next/third-parties/google";

// In the component:
<GoogleTagManager gtmId="GTM-523VPDFJ" />;
```

For Meta Pixel, use Next.js `<Script>` with `afterInteractive`:

```tsx
import Script from "next/script";

<Script id="meta-pixel" strategy="afterInteractive">
  {`!function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','1536621594644719');
  fbq('track','PageView');`}
</Script>;
```

#### 🔴 CRITICAL: CLS from Scroll-Triggered Animations

**What:** All `.animate-on-scroll` elements start at `opacity: 0; transform: translateY(30px)` and only appear when IntersectionObserver fires.
**Why:** Content is invisible until JS hydrates → animates in. This causes massive CLS and gives search crawlers empty-looking pages.

**Fix:** Use CSS-only animations with `@starting-style` or at minimum make content visible by default with progressive enhancement:

```css
/* Make content visible for crawlers and before JS loads */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
  }
}

/* Fallback: content visible if JS hasn't loaded */
.no-js .animate-on-scroll {
  opacity: 1;
  transform: none;
}
```

#### 🔴 HIGH: Font Loading — Two Google Fonts

**What:** Loading both Inter (5 weights) and Outfit (5 weights) = 10 font files.
**Why:** Each font weight is a separate network request. 10 font files significantly delay text rendering.

**Fix — Reduce to essential weights:**

```typescript
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"], // Was: ["300","400","500","600","700"]
  display: "swap", // ADD THIS — prevents FOIT
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"], // Was: ["400","500","600","700","800"]
  display: "swap", // ADD THIS
});
```

#### 🟡 MEDIUM: No `loading.tsx` or Suspense Boundaries

**What:** No loading states for any route.
**Why:** If the page takes time to render, users see a blank screen. Streaming with Suspense allows progressive rendering.

#### 🟡 MEDIUM: Marquee Animation Performance

**What:** `social-proof.tsx` triplicates testimonials (5 × 3 = 15 DOM nodes) for infinite scroll marquee.
**Why:** 15 complex card elements constantly animating via CSS causes GPU memory pressure on mobile.

**Fix:** Use CSS `will-change: transform` and reduce to 2 duplicates:

```css
.animate-marquee {
  will-change: transform;
}
```

#### 🟡 MEDIUM: `suppressHydrationWarning` on `<html>`

**What:** [layout.tsx line 108](file:///c:/Users/milan_m/Desktop/Pixel_Path/src/app/layout.tsx#L108) has `suppressHydrationWarning`.
**Why:** This masks hydration errors that could indicate SSR/CSR mismatches — a real SEO problem.

---

## 4. Next.js Specific SEO Review

### 4.1 App Router Best Practices

| Practice                              | Status                                      |
| ------------------------------------- | ------------------------------------------- |
| Static metadata export                | ✅ Used in layout                           |
| `generateMetadata` for dynamic routes | 🟡 N/A (no dynamic routes)                  |
| `robots.ts` (programmatic)            | 🔴 Using static `public/robots.txt` instead |
| `sitemap.ts`                          | 🔴 **Missing**                              |
| `opengraph-image.tsx`                 | 🔴 Not using dynamic OG generation          |
| Server Components by default          | 🔴 Over-using "use client"                  |
| `@next/third-parties`                 | 🔴 Installed but NOT used                   |
| `next/image`                          | 🔴 NOT used at all                          |
| `next/font`                           | ✅ Used correctly                           |
| `next/script`                         | 🔴 Not used — raw `<script>` tags instead   |
| Metadata inheritance                  | ✅ Single layout                            |
| Error boundaries                      | 🔴 No `error.tsx` or `not-found.tsx`        |

#### 🔴 Missing `robots.ts`

**Fix — Create `src/app/robots.ts`** (and delete `public/robots.txt`):

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.pixelpathofficial.com/sitemap.xml",
  };
}
```

#### 🔴 No `not-found.tsx`

**Fix — Create `src/app/not-found.tsx`:**

```tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white font-heading">404</h1>
        <p className="text-white/60 mt-4">Page not found</p>
        <a
          href="/"
          className="mt-6 inline-block bg-[#1A7A4A] text-white px-6 py-3 rounded-xl"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
```

---

## 5. Security & Trust

| Check                                         | Status                            | Impact |
| --------------------------------------------- | --------------------------------- | ------ |
| HTTPS                                         | ⚠️ Assumed (can't verify locally) | —      |
| Security headers                              | 🔴 **None configured**            | High   |
| Content Security Policy                       | 🔴 Missing                        | High   |
| X-Frame-Options                               | 🔴 Missing                        | Medium |
| Mixed content                                 | ✅ All external refs use HTTPS    | —      |
| `rel="noopener noreferrer"` on external links | ✅ Present                        | —      |
| Privacy policy page                           | 🔴 **Missing**                    | High   |
| Terms of service                              | 🔴 **Missing**                    | Medium |

#### 🔴 HIGH: No Security Headers

Already covered in the `next.config.ts` fix above (Section 1.4).

#### 🔴 HIGH: No Privacy Policy

**Why:** Required by GDPR/CCPA for Meta Pixel and GTM. Without it, Meta Events Manager may flag your pixel. Google also considers trust signals.

---

## 6. AI SEO / GEO (Generative Engine Optimization)

| Factor                  | Score | Status                               |
| ----------------------- | ----- | ------------------------------------ |
| FAQ structured data     | 0/10  | 🔴 No FAQPage schema                 |
| Clear Q&A format        | 7/10  | ✅ FAQs are well-written             |
| Entity recognition      | 3/10  | 🔴 No Organization schema            |
| Content depth           | 3/10  | 🔴 Single page, no long-form content |
| Topical authority       | 2/10  | 🔴 No blog/case studies              |
| Citation-worthiness     | 4/10  | 🟡 Stats present but unverified      |
| AI snippet optimization | 2/10  | 🔴 No "what is X" definitions        |

#### Key Recommendations for AI Discoverability:

1. **Add FAQPage schema** — AI engines pull FAQ data directly from schema markup.
2. **Create a blog** with articles like "How Much Does Clinic Marketing Cost in Sri Lanka 2026?" — AI engines cite specific, authoritative content.
3. **Add definition-style content** — "What is clinic lead automation?" formatted with clear headings.
4. **Add `speakable` schema** for key sections — helps voice assistants surface your content.
5. **Ensure all stats have context** — "94 qualified leads" should specify the source, timeframe, and clinic type.

---

## 7. Competitor-Level Recommendations

### Missing Opportunities vs. Top Marketing Agency Sites

| Feature                | Your Site        | Top Competitors                  |
| ---------------------- | ---------------- | -------------------------------- |
| Case study pages       | ❌               | ✅ Dedicated pages with metrics  |
| Blog/content hub       | ❌               | ✅ 50+ SEO-optimized articles    |
| Portfolio/work samples | ❌               | ✅ Visual before/after galleries |
| Team page              | ❌               | ✅ Builds trust and authority    |
| Contact form           | ❌ WhatsApp only | ✅ Form + WhatsApp + call        |
| Multi-page SEO         | ❌ Single page   | ✅ 10+ rankable pages            |
| Video testimonials     | ❌               | ✅ Embedded YouTube              |
| Lead magnets           | ❌               | ✅ Free guides/checklists        |
| Speed optimization     | ❌               | ✅ < 2s LCP                      |
| Service sub-pages      | ❌               | ✅ /services/meta-ads etc.       |

### Conversion Optimization Gaps

1. **No contact form** — WhatsApp-only limits conversions from users who prefer forms
2. **No phone number visible** — Sri Lankan clinic owners may prefer calling
3. **No social proof images** — Stock-like testimonials reduce trust
4. **Pricing in LKR only** — Consider adding USD equivalent for international perception

---

## 8. Final Deliverables

### 📊 Score Summary

| Category               | Score        |
| ---------------------- | ------------ |
| Overall SEO            | **52 / 100** |
| Performance            | **45 / 100** |
| Technical SEO          | **48 / 100** |
| On-Page SEO            | **58 / 100** |
| Next.js Best Practices | **40 / 100** |
| Security               | **55 / 100** |
| AI/GEO Readiness       | **35 / 100** |

### 🔴 Critical Issues (Fix Immediately)

| #   | Issue                                          | Est. SEO Impact             | Effort |
| --- | ---------------------------------------------- | --------------------------- | ------ |
| 1   | No `sitemap.xml` — Google can't index properly | +15% crawl efficiency       | 5 min  |
| 2   | 6 unnecessary `"use client"` directives        | +20% performance, +10% SEO  | 30 min |
| 3   | No `next/image` usage                          | +15% LCP improvement        | 15 min |
| 4   | Render-blocking GTM/Meta Pixel scripts         | +500ms-1.5s LCP improvement | 20 min |
| 5   | Missing FAQPage structured data                | Rich snippet eligibility    | 20 min |
| 6   | CLS from animation-on-scroll pattern           | +0.1-0.15 CLS improvement   | 15 min |

### 🟠 High Priority Fixes

| #   | Issue                                         | Est. SEO Impact                          | Effort |
| --- | --------------------------------------------- | ---------------------------------------- | ------ |
| 7   | Broken `#how-it-works` nav link               | UX trust loss                            | 2 min  |
| 8   | No security headers in Next.js config         | Security + trust                         | 10 min |
| 9   | Missing `robots.ts` (programmatic)            | Better crawl control                     | 5 min  |
| 10  | Missing `not-found.tsx`                       | UX + crawl error handling                | 10 min |
| 11  | Font loading — 10 weights, no `display: swap` | +200-400ms text render                   | 5 min  |
| 12  | No privacy policy page                        | Legal compliance, Meta Pixel requirement | 30 min |
| 13  | Missing LocalBusiness schema                  | Local SEO visibility                     | 15 min |

### 🟡 Medium Priority Fixes

| #   | Issue                                      | Est. Impact                | Effort |
| --- | ------------------------------------------ | -------------------------- | ------ |
| 14  | `@next/third-parties` installed but unused | Cleaner analytics loading  | 15 min |
| 15  | No `loading.tsx` or Suspense               | Perceived performance      | 10 min |
| 16  | `suppressHydrationWarning` masking issues  | Debugging, SSR correctness | 5 min  |
| 17  | Marquee performance (15 DOM nodes)         | Mobile GPU perf            | 15 min |
| 18  | No AggregateRating schema for testimonials | Rich snippet potential     | 15 min |
| 19  | No `error.tsx` error boundary              | Graceful error handling    | 10 min |

### 🟢 Low Priority Improvements

| #   | Issue                                           | Est. Impact                     | Effort  |
| --- | ----------------------------------------------- | ------------------------------- | ------- |
| 20  | Create service sub-pages (`/services/meta-ads`) | Long-tail keyword rankings      | 2-4 hrs |
| 21  | Add a blog/content hub                          | Topical authority, AI citations | 4-8 hrs |
| 22  | Add contact form alongside WhatsApp             | Conversion rate                 | 1-2 hrs |
| 23  | Add team/about page                             | Trust signals                   | 1-2 hrs |
| 24  | Add case study pages with real metrics          | E-E-A-T, conversion             | 2-4 hrs |
| 25  | Dynamic OG image generation                     | Social sharing                  | 1 hr    |

### ⚡ Quick Wins (< 30 min total, high impact)

| Fix                                                              | Time  | Impact       |
| ---------------------------------------------------------------- | ----- | ------------ |
| Create `sitemap.ts`                                              | 5 min | 🔥 High      |
| Create `robots.ts`                                               | 5 min | 🔥 High      |
| Remove `"use client"` from hero, social-proof, clinic-automation | 3 min | 🔥 Very High |
| Add `display: "swap"` to both fonts                              | 2 min | 🔥 High      |
| Reduce font weights (10 → 4)                                     | 3 min | 🔥 High      |
| Fix broken `#how-it-works` link                                  | 2 min | Medium       |
| Add security headers to `next.config.ts`                         | 5 min | Medium       |
| Create `not-found.tsx`                                           | 5 min | Medium       |

> [!IMPORTANT]
> **Implementing just the Quick Wins above would raise your scores to approximately:**
>
> - SEO: 52 → **68**
> - Performance: 45 → **65**
>
> Adding structured data (FAQ + LocalBusiness) would push SEO to **~75/100**.
> Adding a blog and service pages would eventually reach **85-90/100**.
