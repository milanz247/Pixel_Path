import { MessageCircle, MapPin, Clock, Mail, Phone, ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

const quickLinks = [
  { label: "Why Pixel Path", href: "#why-pixel-path" },
  { label: "Our Services", href: "#services" },
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
    <footer className="bg-navy border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-8 md:pt-10 pb-6 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 md:mb-8">

          {/* Column 1: Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>PP</span>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Pixel Path</span>
            </div>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-4 max-w-xs">
              We help dental, skin, and aesthetic clinics in Sri Lanka get more patient inquiries through better marketing systems.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#25D366] hover:text-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 md:mb-4" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs md:text-sm text-white/50 hover:text-white/90 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 md:mb-4" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {serviceLinks.map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-xs md:text-sm text-white/50 hover:text-white/90 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact — full width on small mobile */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 md:mb-4" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Get in Touch</h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-white/50">Sri Lanka</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-white/50 hover:text-white/90 transition-colors">WhatsApp Message</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@pixelpath.lk" className="text-xs md:text-sm text-white/50 hover:text-white/90 transition-colors">hello@pixelpath.lk</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-white/50">Mon – Sat, 9 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-4 md:pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] md:text-xs text-white/30">
              © {new Date().getFullYear()} Pixel Path. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="text-[10px] md:text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] md:text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
