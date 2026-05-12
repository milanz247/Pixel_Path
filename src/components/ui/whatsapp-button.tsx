import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "large";
  showIcon?: boolean;
  label?: string;
}

const WHATSAPP_NUMBER = "971589476952";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Pixel Path. I run a [dental / skin / aesthetic] clinic in [area]. I want more patient inquiries for my clinic. Can you review my current page and tell me what is possible?"
);

export function getWhatsAppLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
}

export function WhatsAppButton({
  className = "",
  size = "default",
  showIcon = true,
  label = "Send a WhatsApp Message",
}: Readonly<WhatsAppButtonProps>) {
  const sizeClasses =
    size === "large"
      ? "py-4 px-8 text-lg rounded-2xl"
      : "py-3 px-6 text-base rounded-xl";

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn ${sizeClasses} ${className}`}
    >
      {showIcon && <MessageCircle className="w-5 h-5" />}
      {label}
    </a>
  );
}
