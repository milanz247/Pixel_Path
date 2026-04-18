"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "./whatsapp-button";

export function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-whatsapp"
      aria-label="Send a WhatsApp Message"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
