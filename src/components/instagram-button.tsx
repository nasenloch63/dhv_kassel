import { ArrowUpRight, Instagram } from "lucide-react";
import { site } from "@/data/content";

export function InstagramButton({ children = "DHV Ks auf Instagram", className = "", href = site.instagramUrl }: { children?: React.ReactNode; className?: string; href?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`button instagram-button ${className}`}><Instagram size={19} aria-hidden="true" /><span>{children}</span><ArrowUpRight size={17} aria-hidden="true" /></a>;
}
