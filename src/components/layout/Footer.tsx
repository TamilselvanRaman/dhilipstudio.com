"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface FooterProps {
  topBgColor?: string;
}

export const Footer: React.FC<FooterProps> = ({ topBgColor = "bg-[#f6f3ed]" }) => {
  const [copied, setCopied] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shareData = {
      title: "Dhilip Studio — Editorial Wedding Photography",
      text: "Check out Dhilip Studio for high-end wedding photography & cinematography in Chennai!",
      url: "https://dhilipstudio.com/",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        await copyToClipboard();
      }
    } else {
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText("https://dhilipstudio.com/");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Clipboard copy failed", err);
      }
    }
  };

  return (
    <footer className="w-full text-slate-300 relative border-t border-[#b88c42]/30" id="contact-footer">
      <div className="w-full bg-[#1b1c1c] pt-8 sm:pt-10 pb-16 sm:pb-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
            
            {/* Col 1: Brand & About */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <img
                    src="/logo.webp"
                    alt="Dhilip Studio Wedding Photography"
                    width={223}
                    height={48}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-slate-300/90 font-sans leading-relaxed tracking-wide max-w-sm">
                  We believe in offering high-end wedding images and cinematography. We ensure you receive a deeply personal touch and timeless monographs captured for your big day.
                </p>
              </div>
              
              {/* Quick Action Icons */}
              <div className="flex items-center gap-2.5 relative pt-1">
                <button
                  onClick={handleShare}
                  aria-label="Share Site URL"
                  title="Share site URL (https://dhilipstudio.com/)"
                  className="relative w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#b88c42] hover:text-stone-950 text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 group shadow-md"
                >
                  <span className="material-symbols-outlined text-base">share</span>
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#b88c42] text-stone-950 text-[10px] font-bold rounded shadow-lg whitespace-nowrap animate-bounce">
                      URL Copied!
                    </span>
                  )}
                </button>

                <Link
                  href="/gallery"
                  aria-label="Open Gallery"
                  title="Open Gallery"
                  className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#b88c42] hover:text-stone-950 text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 shadow-md"
                >
                  <span className="material-symbols-outlined text-base">camera_alt</span>
                </Link>

                <Link
                  href="/videos"
                  aria-label="Open Videos"
                  title="Open Videos"
                  className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#b88c42] hover:text-stone-950 text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 shadow-md"
                >
                  <span className="material-symbols-outlined text-base">smart_display</span>
                </Link>
              </div>
            </div>

            {/* Col 2: QUICK MENU */}
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold uppercase tracking-[0.15em] text-[#f3e3a1] mb-3 border-b border-[#b88c42]/30 pb-1 inline-block">
                QUICK MENU
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs text-slate-300 uppercase tracking-wider font-sans">
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> HOME
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/about">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> ABOUT US
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/gallery">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> GALLERY
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/videos">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> VIDEOS
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/contact">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> CONTACT US
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/blog">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> BLOG
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/gallery">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> MATERNITY
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/gallery">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> BIRTHDAY
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Blogs */}
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold tracking-[0.15em] uppercase text-[#f3e3a1] mb-3 border-b border-[#b88c42]/30 pb-1 inline-block">
                JOURNAL &amp; ARTICLES
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 font-sans tracking-wide">
                <li className="border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <Link className="hover:text-[#f3e3a1] transition-colors block leading-snug font-medium" href="/blog">
                    Tips To Choose Professional Wedding Photographers
                  </Link>
                </li>
                <li className="border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <Link className="hover:text-[#f3e3a1] transition-colors block leading-snug font-medium" href="/blog">
                    Freeze The Moment With Best Candid Photographers
                  </Link>
                </li>
                <li className="border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <Link className="hover:text-[#f3e3a1] transition-colors block leading-snug font-medium" href="/blog">
                    Capture Your Brahmin Wedding Rituals &amp; Celebrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Studio Location & Map */}
            <div className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-serif font-bold tracking-[0.15em] uppercase text-[#f3e3a1] border-b border-[#b88c42]/30 pb-1 inline-block">
                STUDIO LOCATION
              </h3>
              {/* Google Map Embed Frame */}
              <div ref={mapContainerRef} className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden border border-slate-700/80 shadow-md group bg-slate-900">
                {showMap ? (
                  <iframe
                    title="Dhilip Studio Location Map"
                    src="https://maps.google.com/maps?q=13.0377,80.1514&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300 font-semibold text-xs font-mono">
                    <span>Loading Studio Map...</span>
                  </div>
                )}
                <a
                  href="https://maps.google.com/?q=13.0377,80.1514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1.5 right-1.5 px-2 py-0.5 bg-stone-900/90 hover:bg-[#b88c42] hover:text-stone-950 text-white text-[10px] font-mono rounded border border-slate-600 transition-colors flex items-center gap-1 shadow-md"
                >
                  <span>Maps</span>
                  <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                </a>
              </div>

              <div className="space-y-1 text-xs text-slate-300">
                <a
                  href="https://maps.google.com/?q=13.0377,80.1514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-200 hover:text-[#f3e3a1] transition-colors block leading-snug flex items-start gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#b88c42] shrink-0 mt-0.5">location_on</span>
                  <span>No. 4/1, Mandaveli Street, Karambakkam, Porur, Chennai-600116</span>
                </a>
                <p className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#b88c42] shrink-0">call</span>
                  <a href="tel:+919176231420" className="hover:text-[#f3e3a1] transition-colors font-medium">
                    +91 91762 31420
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#b88c42] shrink-0">mail</span>
                  <a href="mailto:dhilipstudio@gmail.com" className="hover:text-[#f3e3a1] transition-colors font-medium">
                    dhilipstudio@gmail.com
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & TS Dev Badge Bar */}
          <div className="border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 text-center sm:text-left">
            <p>© 2026 Dhilip Studio. All rights reserved.</p>

            {/* Provided by TS Dev Single Line Text Link (Clicking opens https://tamilselvandev.in/) */}
            <a
              href="https://tamilselvandev.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#f3e3a1] transition-colors font-sans text-xs font-medium group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Provided by TS Dev</span>
              <span className="material-symbols-outlined text-[10px] group-hover:translate-x-0.5 transition-transform">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
