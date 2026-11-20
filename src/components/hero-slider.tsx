"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  credit?: string;
}

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = slides.length;
  const next = useCallback(() => setIndex(i => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex(i => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(next, 7500);
    return () => window.clearInterval(timer);
  }, [paused, count, next]);

  const current = slides[index];
  if (!current) return null;

  return (
    <section
      className="dhv-hero-slider"
      aria-roledescription="carousel"
      aria-label="Aktuelle Highlights der DHV-Ortsgruppe Kassel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="dhv-hero-slide">
        <Image
          key={current.id}
          src={current.imageSrc}
          alt={current.imageAlt}
          fill
          priority={index === 0}
          sizes="100vw"
          className="dhv-hero-bg"
          style={{ objectPosition: current.imagePosition ?? "50% 50%" }}
        />
        <div className="dhv-hero-scrim" aria-hidden="true" />
        <div className="container dhv-hero-inner">
          <div className="dhv-hero-card">
            {current.subtitle && <p className="dhv-hero-kicker">{current.subtitle}</p>}
            {index === 0 ? <h1>{current.title}</h1> : <h2>{current.title}</h2>}
            <p className="dhv-hero-text">{current.description}</p>
            <div className="dhv-hero-actions">
              {current.ctaExternal ? (
                <a href={current.ctaHref} target="_blank" rel="noopener noreferrer" className="button primary">
                  {current.ctaLabel}
                </a>
              ) : (
                <Link href={current.ctaHref} className="button primary">
                  {current.ctaLabel}
                </Link>
              )}
              {current.secondaryLabel && current.secondaryHref && (
                <Link href={current.secondaryHref} className="button outline">
                  {current.secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="dhv-slider-arrow prev"
              onClick={prev}
              aria-label="Vorherige Folie"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="dhv-slider-arrow next"
              onClick={next}
              aria-label="Nächste Folie"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <div className="dhv-slider-dots" role="tablist" aria-label="Folienauswahl">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Folie ${i + 1}: ${slide.title}`}
                  className={`dhv-slider-dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </>
        )}

        {current.credit && (
          <Link href="/quellen/#bildnachweis" className="hero-credit">
            {current.credit}
          </Link>
        )}
      </div>
    </section>
  );
}
