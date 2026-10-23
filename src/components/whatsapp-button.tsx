import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/data/content";

export function WhatsAppButton({ children = "DHV Ks auf WhatsApp", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`button whatsapp-button ${className}`}><MessageCircle size={19} aria-hidden="true" /><span>{children}</span><ArrowUpRight size={17} aria-hidden="true" /></a>;
}
