"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { DhvLogo } from "./media";
import { FacebookButton } from "./facebook-button";
import { InstagramButton } from "./instagram-button";
import { WhatsAppButton } from "./whatsapp-button";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/news/", label: "Aktuelles" },
  { href: "/veranstaltungen/", label: "Termine" },
  { href: "/ueber-uns/", label: "Über uns" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <div className="demo-bar">
        <div className="container">
          <span>
            <span className="demo-dot" /> Ortsgruppe Kassel · Nicht offizielle Demoseite
          </span>
          <a href="https://hanfverband.de/" target="_blank" rel="noopener noreferrer">
            Deutscher Hanfverband (hanfverband.de)
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="DHV-Ortsgruppe Kassel – Startseite">
            <DhvLogo className="brand-logo" />
            <span className="brand-name regional-name">
              Kassel
              <span>Ortsgruppe · Demo</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {links.map(link => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.slice(0, -1));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link href="/unterstuetzen/" className="button primary header-cta">
              Unterstützen
            </Link>
            <button
              ref={toggle}
              className="menu-toggle"
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile Hauptnavigation">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
                <ArrowRight size={18} />
              </Link>
            ))}
            <Link href="/unterstuetzen/" onClick={() => setOpen(false)}>
              Unterstützen
              <ArrowRight size={18} />
            </Link>
            <Link href="/ueber-uns/#mitmachen" onClick={() => setOpen(false)}>
              Mitmachen
              <ArrowUpRight size={18} />
            </Link>
            <div className="mobile-nav-social">
              <FacebookButton>Facebook</FacebookButton>
              <InstagramButton>Instagram</InstagramButton>
              <WhatsAppButton>WhatsApp-Kanal</WhatsAppButton>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
