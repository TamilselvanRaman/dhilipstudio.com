"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "GALLERY", href: "/gallery" },
    { label: "VIDEOS", href: "/videos" },
    { label: "CONTACT US", href: "/contact" },
    { label: "BLOG", href: "/blog" },
  ];

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  // Compute currently targeted href (hovered link or active route)
  const activeHref =
    hoveredHref ||
    navLinks.find((l) => pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href)))?.href ||
    "/";

  // Recalculate smooth sliding position whenever pathname or hovered link changes
  useEffect(() => {
    const updatePosition = () => {
      const activeElement = linkRefs.current[activeHref];
      const navElement = navRef.current;

      if (activeElement && navElement) {
        const navRect = navElement.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        setIndicatorStyle({
          left: activeRect.left - navRect.left,
          width: activeRect.width,
          opacity: 1,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [pathname, hoveredHref, activeHref]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 shadow-sm transition-all duration-300 overflow-hidden max-w-full">
      <div className="h-20 w-full max-w-full px-3 sm:px-8 lg:px-12 flex items-center justify-between overflow-hidden">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-90">
            <img
              src="/logo.webp"
              alt="Dhilip Studio Wedding Photography"
              width={223}
              height={48}
              {...({ fetchPriority: "high" } as any)}
              className="h-10 md:h-12 w-auto object-contain drop-shadow-xs"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links with Smooth Sliding Indicator Line */}
        <nav
          ref={navRef}
          onMouseLeave={() => setHoveredHref(null)}
          className="hidden lg:flex items-center gap-8 relative py-2"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.href] = el;
                }}
                onMouseEnter={() => setHoveredHref(link.href)}
                className={`font-label-md text-xs font-bold uppercase tracking-[0.18em] transition-colors py-1 ${
                  isActive || hoveredHref === link.href ? "text-[#b88c42]" : "text-stone-700 dark:text-stone-300 hover:text-[#b88c42]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Smooth Sliding Active Indicator Line (Glides Left & Right Smoothly) */}
          <span
            className="absolute bottom-0 h-[3px] bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_2px_8px_rgba(184,140,66,0.6)] pointer-events-none"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
        </nav>

        {/* Luxury CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center gap-2.5 bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] bg-[length:200%_auto] hover:bg-[right_center] text-white font-bold text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-500 shadow-md shadow-[#b88c42]/25 hover:shadow-xl hover:shadow-[#b88c42]/40 hover:scale-105 group border border-amber-200/40"
            href="/contact"
          >
            <span>Book a Session</span>
            <svg
              className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-800 dark:text-stone-200 ml-1 border border-stone-200 dark:border-stone-700"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-xl">{mobileMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 px-6 py-6 space-y-4 shadow-lg animate-fade-in-up">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs font-bold uppercase tracking-[0.18em] py-1 ${
                  isActive ? "text-[#b88c42]" : "text-stone-700 dark:text-stone-300 hover:text-[#b88c42]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[#b88c42] to-[#cca254] text-white font-bold text-xs uppercase tracking-[0.2em] py-3 rounded-full shadow-md"
            >
              <span>Book a Session</span>
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

