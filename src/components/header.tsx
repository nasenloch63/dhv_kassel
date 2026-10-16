"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { DhvLogo } from "./media";
import { FacebookButton } from "./facebook-button";
import { InstagramButton } from "./instagram-button";

const links = [{ href: "/", label: "Startseite" }, { href: "/news/", label: "News & Blog" }, { href: "/veranstaltungen/", label: "Veranstaltungen" }, { href: "/ueber-uns/", label: "Über uns" }, { href: "/unterstuetzen/", label: "Unterstützen" }];
export function Header() {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { const key = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }; document.addEventListener("keydown", key); return () => document.removeEventListener("keydown", key); }, [open]);
  return <><a className="skip-link" href="#main">Zum Inhalt springen</a><div className="demo-bar"><div className="container"><span><span className="demo-dot" /> Nicht offizielle Demoseite</span><a href="https://hanfverband.de/" target="_blank" rel="noopener noreferrer">Zum Deutschen Hanfverband<ArrowUpRight size={13} aria-hidden="true" /></a></div></div><header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="DHV Kassel Demo – Startseite"><DhvLogo className="brand-logo" /><span className="brand-name regional-name">Kassel<span>Lokales Engagement · Demo</span></span></Link><nav className="desktop-nav" aria-label="Hauptnavigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.slice(0, -1))) ? "page" : undefined}>{link.label}</Link>)}</nav><FacebookButton className="header-cta">Facebook</FacebookButton><button ref={toggle} className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menü schließen" : "Menü öffnen"}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile Hauptnavigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>{link.label}<ArrowRight size={18} /></Link>)}<Link href="/ueber-uns/#mitmachen" onClick={() => setOpen(false)}>Mitmachen<ArrowUpRight size={18} /></Link><FacebookButton>Unsere Facebook-Seite</FacebookButton><InstagramButton /></nav>}</header></>;
}
