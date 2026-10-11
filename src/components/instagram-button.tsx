import { ArrowUpRight, Instagram } from "lucide-react";
import { site } from "@/data/content";

export function InstagramButton({ children = "DHV Ks auf Instagram", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className={`button instagram-button ${className}`}><Instagram size={19} aria-hidden="true" /><span>{children}</span><ArrowUpRight size={17} aria-hidden="true" /></a>;
}
