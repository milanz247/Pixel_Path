import { MessageCircle, MapPin, Clock, Mail, Phone, ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Packages", href: "#pricing" },
  { label: "How We Work", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  "Social Media Management",
  "Content Creation",
  "Meta Ads",
  "Google Ads",
  "Landing Pages",
  "Marketing Funnels",
];

export function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8 pt-10 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 md:mb-12">

          {/* Column 1: Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#1A7A4A] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-heading tracking-wide">PP</span>
              </div>
              <span className="text-[20px] font-bold text-white tracking-tight font-heading">Pixel Path</span>
            </div>
            <p className="text-[14px] text-white/50 leading-relaxed mb-6 max-w-[280px]">
              We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through high-converting marketing systems.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#20C969] hover:text-white transition-colors group"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.1em] mb-4 md:mb-5 font-heading">Platform</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-[14px] text-white/50 hover:text-[#20C969] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.1em] mb-4 md:mb-5 font-heading">Our Expertise</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-[14px] text-white/50 hover:text-[#20C969] transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact — full width on small mobile */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.1em] mb-4 md:mb-5 font-heading">Reach Out</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1A7A4A] mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-white/60 leading-tight">Colombo,<br/>Sri Lanka</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1A7A4A] mt-0.5 flex-shrink-0" />
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/60 hover:text-[#20C969] transition-colors">WhatsApp Message</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1A7A4A] mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@pixelpath.lk" className="text-[14px] text-white/60 hover:text-[#20C969] transition-colors">hello@pixelpath.lk</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1A7A4A] mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-white/60 leading-tight">Mon – Sat<br/>09:00 – 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-[13px] text-white/40">
              © {new Date().getFullYear()} Pixel Path. Engineered for Clinic Growth.
            </p>
            <p className="text-[13px] font-medium text-white/60">
              Proudly designed in Sri Lanka 🇱🇰
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
