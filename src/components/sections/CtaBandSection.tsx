"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const CtaBandSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 350);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            clearTimeout(fallbackTimer);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: "100px 0px 100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f6f3ed] pt-16 sm:pt-24 pb-14 sm:pb-20 px-3 sm:px-6 md:px-12 overflow-hidden border-t border-stone-300/80 min-h-[440px] sm:min-h-[500px] flex items-center justify-center"
    >
      {/* Background Soft Ambient Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0%,transparent_75%)] pointer-events-none" />

      {/* Scattered Floating Cards (Hidden on mobile for clean UI, visible on desktop) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
        
        {/* 1. TOP-LEFT CARD (Tilted -rotate-12, Green dress couple) */}
        <div
          style={{ transitionDelay: "100ms" }}
          className={`absolute top-4 sm:top-14 lg:top-16 left-[1%] sm:left-[4%] lg:left-[8%] transform -rotate-12 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-90 sm:opacity-95 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div className="group relative w-14 h-20 sm:w-28 sm:h-38 lg:w-36 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] cursor-pointer animate-float-slow">
            <img
              src="/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp"
              alt="Candid wedding photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 2. MID-LEFT CARD (Tilted rotate-6, Brahmin wedding ritual) */}
        <div
          style={{ transitionDelay: "280ms" }}
          className={`absolute top-[42%] left-[0.5%] sm:left-[1.5%] lg:left-[3%] transform rotate-6 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-90 sm:opacity-95 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="group relative w-12 h-16 sm:w-24 sm:h-32 lg:w-32 lg:h-42 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] cursor-pointer animate-float-delayed">
            <img
              src="/home_Page_images/brahmin-wedding-photography.webp"
              alt="Brahmin wedding ritual photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 3. BOTTOM-LEFT CARD (Tilted -rotate-6, Couple in gold) */}
        <div
          style={{ transitionDelay: "450ms" }}
          className={`absolute bottom-3 sm:bottom-8 lg:bottom-10 left-[2%] sm:left-[8%] lg:left-[13%] transform -rotate-6 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-90 sm:opacity-95 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="group relative w-12 h-16 sm:w-24 sm:h-32 lg:w-32 lg:h-40 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] cursor-pointer animate-float-slow">
            <img
              src="/home_Page_images/engagement-photo-studio-chennai.webp"
              alt="Engagement photography"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 4. TOP-RIGHT CARD (Tilted rotate-12, Couple in yellow silk saree & garlands) */}
        <div
          style={{ transitionDelay: "180ms" }}
          className={`absolute top-4 sm:top-14 lg:top-16 right-[1%] sm:right-[4%] lg:right-[8%] transform rotate-12 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-90 sm:opacity-95 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div className="group relative w-14 h-20 sm:w-28 sm:h-38 lg:w-36 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] cursor-pointer animate-float-delayed">
            <img
              src="/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp"
              alt="Wedding mandap photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 5. MID-RIGHT CARD (Tilted -rotate-8, Couple lying on grass) */}
        <div
          style={{ transitionDelay: "360ms" }}
          className={`absolute top-[42%] right-[0.5%] sm:right-[1.5%] lg:right-[3%] transform -rotate-8 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-90 sm:opacity-95 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="group relative w-12 h-16 sm:w-24 sm:h-32 lg:w-32 lg:h-42 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] cursor-pointer animate-float-slow">
            <img
              src="/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp"
              alt="Cinematic couple photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT CARD (Tilted rotate-8, Blue gown maternity) */}
        <div
          style={{ transitionDelay: "520ms" }}
          className={`absolute bottom-3 sm:bottom-8 lg:bottom-10 right-[2%] sm:right-[8%] lg:right-[13%] transform rotate-8 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-90 sm:opacity-95 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="group relative w-12 h-16 sm:w-24 sm:h-32 lg:w-32 lg:h-40 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] cursor-pointer animate-float-delayed">
            <img
              src="/home_Page_images/baby-shower-photography-chennai-dhilip-studio.webp"
              alt="Baby shower photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

      </div>

      {/* Center Main Content Box (Mobile Responsive Text & Button Spacing) */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center my-auto px-2 sm:px-4">
        
        {/* Booking Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#b88c42]/30 shadow-md mb-4 sm:mb-5 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#b88c42] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-stone-800">
            NOW BOOKING 2026 WEDDING DATES
          </span>
        </div>

        {/* Main Headline (Reduced size on mobile text-2xl/3xl for perfect fit) */}
        <h2
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 font-serif font-bold leading-tight mb-3 sm:mb-4 tracking-tight transition-all duration-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          See your love story through a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e742f] via-[#b88c42] to-[#866023]">
            different lens.
          </span>
        </h2>

        {/* Description Paragraph (Reduced text-xs/sm on mobile) */}
        <p
          className={`text-xs sm:text-base md:text-lg text-stone-600 max-w-lg mb-6 sm:mb-7 leading-relaxed font-normal transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Candid, traditional and cinematic wedding photography in Chennai — packages engineered for visual storytellers and timeless remembrance.
        </p>

        {/* Improved Responsive CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-stone-900 hover:bg-[#b88c42] text-white font-serif font-bold text-sm sm:text-base md:text-lg px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#b88c42]/30 hover:-translate-y-1 w-full sm:w-auto"
          >
            <span>Book a Session</span>
            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:translate-y-1 transition-transform">
              arrow_downward
            </span>
          </Link>

          <Link
            href="/gallery"
            className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-stone-900 text-stone-900 hover:text-white font-serif font-bold text-sm sm:text-base md:text-lg px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl transition-all duration-300 border-2 border-stone-300/90 shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            <span>View Gallery</span>
            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:scale-110 transition-transform">
              photo_library
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
