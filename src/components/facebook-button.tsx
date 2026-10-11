import { ArrowUpRight, Facebook } from "lucide-react";
import { site } from "@/data/content";

export function FacebookButton({ children = "Kassel auf Facebook", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className={`button facebook-button ${className}`}><Facebook size={19} aria-hidden="true" /><span>{children}</span><ArrowUpRight size={17} aria-hidden="true" /></a>;
}
