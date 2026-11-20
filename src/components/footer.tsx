import Link from "next/link";
import { ArrowUpRight, Globe, MessageCircle } from "lucide-react";
import { DhvLogo } from "./media";
import { monthlyMeeting, site } from "@/data/content";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-col-nav">
            <Link href="/" className="footer-brand" aria-label="DHV-Ortsgruppe Kassel – Startseite">
              <DhvLogo className="footer-logo" />
            </Link>
            <nav className="footer-nav-links" aria-label="Footer-Navigation">
              <p className="footer-col-heading">Informieren & Mitmachen</p>
              <Link href="/news/">Aktuelles</Link>
              <Link href="/veranstaltungen/">Termine & Veranstaltungen</Link>
              <Link href="/ueber-uns/">Über uns</Link>
              <Link href="/ueber-uns/#mitmachen">Aktiv werden</Link>
              <Link href="/unterstuetzen/">Unterstützen</Link>
              <Link href="/quellen/">Quellen & Bildnachweise</Link>
            </nav>
          </div>

          <div className="footer-col-info">
            <p className="footer-col-heading">ORTSGRUPPE KASSEL</p>
            <p>
              <strong>Monatliches Treffen:</strong>
              <br />
              {monthlyMeeting.schedule}
              <br />
              Ab 19 Uhr · {monthlyMeeting.venue}
            </p>
            <p className="footer-col-heading footer-subheading">TRANSPARENZHINWEIS</p>
            <p>
              Nicht offizielle Demoseite für Kassel. Veranstaltungsberichte und Demo-Inhalte sind
              getrennt gekennzeichnet. Ein offizieller Kasseler Ortsgruppenstatus ist weiterhin
              nicht bestätigt.
            </p>
          </div>

          <div className="footer-col-links">
            <p className="footer-col-heading">DEUTSCHER HANFVERBAND</p>
            <p className="footer-portal-list">
              <a href="https://hanfverband.de/" target="_blank" rel="noopener noreferrer">
                www.hanfverband.de <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href="https://hanfverband-shop.de" target="_blank" rel="noopener noreferrer">
                www.hanfverband-shop.de <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href="https://cannabisfakten.de" target="_blank" rel="noopener noreferrer">
                www.cannabisfakten.de <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href="https://hanfverband-forum.de" target="_blank" rel="noopener noreferrer">
                www.hanfverband-forum.de <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href="https://cannabisnormal.de" target="_blank" rel="noopener noreferrer">
                www.cannabisnormal.de <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </p>
            <p className="footer-col-heading footer-subheading">KASSEL KANÄLE</p>
            <p className="footer-portal-list">
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook (DHV Kassel) <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram (@dhv_kassel) <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp-Kanal <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>

        <div className="footer-legal-wrap">
          <p className="footer-legal-bar">
            2026 DHV-ORTSGRUPPE KASSEL (DEMO) | <Link href="/impressum/">IMPRESSUM</Link> |{" "}
            <Link href="/datenschutz/">DATENSCHUTZERKLÄRUNG</Link> |{" "}
            <Link href="/quellen/">QUELLEN</Link>
          </p>
        </div>
      </footer>

      <div className="dhv-sticky-social" aria-label="Social Media Kanäle">
        <div className="container dhv-sticky-social-inner">
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
            </svg>
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M12 4.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zM12 3c-2.444 0-2.75.01-3.71.054s-1.617.196-2.192.42a4.426 4.426 0 0 0-1.602 1.042A4.426 4.426 0 0 0 3.454 6.12c-.224.575-.376 1.231-.42 2.19C2.99 9.27 2.98 9.577 2.98 12s.01 2.73.054 3.69c.044.959.196 1.615.42 2.19a4.426 4.426 0 0 0 1.042 1.602 4.426 4.426 0 0 0 1.602 1.042c.575.224 1.231.376 2.192.42.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054c.96-.044 1.617-.196 2.192-.42a4.61 4.61 0 0 0 2.644-2.644c.224-.575.376-1.231.42-2.19.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71c-.044-.959-.196-1.615-.42-2.19a4.426 4.426 0 0 0-1.042-1.602 4.426 4.426 0 0 0-1.602-1.042c-.575-.224-1.231-.376-2.192-.42C14.75 3.01 14.444 3 12 3zm0 4.378a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.884-7.804a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0z" />
            </svg>
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp-Kanal"
            title="WhatsApp-Kanal"
          >
            <MessageCircle size={19} aria-hidden="true" />
          </a>
          <a
            href="https://hanfverband.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deutscher Hanfverband"
            title="Deutscher Hanfverband (hanfverband.de)"
          >
            <Globe size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
