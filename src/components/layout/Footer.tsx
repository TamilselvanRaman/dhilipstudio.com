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
              
              {/* Quick Action Icons & Social Media Links */}
              <div className="flex items-center gap-2 relative pt-1">
                {/* Facebook */}
                <a
                  href="https://facebook.com/dhilipstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dhilip Studio Facebook"
                  title="Follow Dhilip Studio on Facebook"
                  className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#b88c42] hover:text-stone-950 text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dhilipstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dhilip Studio Instagram"
                  title="Follow Dhilip Studio on Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#b88c42] hover:text-stone-950 text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@dhilipstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dhilip Studio YouTube Channel"
                  title="Subscribe to Dhilip Studio YouTube Channel"
                  className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#b88c42] hover:text-stone-950 text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919176231420"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dhilip Studio WhatsApp"
                  title="Contact Dhilip Studio on WhatsApp"
                  className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#25D366] hover:text-white text-slate-200 flex items-center justify-center transition-all duration-300 border border-slate-700/80 shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.369c-5.18 0-9.4 4.22-9.404 9.4 0 1.656.432 3.273 1.254 4.697l-1.332 4.866 4.981-1.307a9.36 9.36 0 004.5 1.144h.004c5.18 0 9.403-4.22 9.406-9.4a9.34 9.34 0 00-2.753-6.645A9.336 9.336 0 0012.051 3.415z"/>
                  </svg>
                </a>

                {/* Share Button */}
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
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/gallery?category=maternity">
                    <span className="text-[#b88c42] font-bold text-xs">•</span> MATERNITY
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f3e3a1] transition-colors flex items-center gap-1.5" href="/gallery?category=birthday">
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
                  <Link className="hover:text-[#f3e3a1] transition-colors block leading-snug font-medium" href="/blog/best-wedding-photographers-in-chennai-candid-traditional">
                    Tips To Choose Professional Wedding Photographers
                  </Link>
                </li>
                <li className="border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <Link className="hover:text-[#f3e3a1] transition-colors block leading-snug font-medium" href="/blog/wedding-photographer-chennai-best-candid-traditional">
                    Freeze The Moment With Best Candid Photographers
                  </Link>
                </li>
                <li className="border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <Link className="hover:text-[#f3e3a1] transition-colors block leading-snug font-medium" href="/blog/brahmin-wedding-photography-rituals">
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
                    src="https://maps.google.com/maps?q=Dhilip+Studio+Porur+Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                  href="https://maps.google.com/?q=Dhilip+Studio+Porur+Chennai"
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
