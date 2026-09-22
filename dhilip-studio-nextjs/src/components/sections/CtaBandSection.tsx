"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const CtaBandSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f6f3ed] pt-22 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-stone-300/80 min-h-[460px] sm:min-h-[500px] flex items-center justify-center"
    >
      {/* Background Soft Ambient Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] pointer-events-none" />

      {/* Scattered Floating Cards with Clean Top Spacing & Improved Hover Design */}
      <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
        
        {/* 1. TOP-LEFT CARD (Tilted -rotate-12, Green dress couple) */}
        <div
          style={{ transitionDelay: "100ms" }}
          className={`absolute top-10 sm:top-14 lg:top-16 left-[4%] lg:left-[8%] transform -rotate-12 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-95 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="group relative w-28 h-38 lg:w-36 lg:h-48 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] hover:shadow-[0_25px_50px_rgba(184,140,66,0.35)] cursor-pointer animate-float-slow">
            <img
              src="/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp"
              alt="Candid wedding photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 2. MID-LEFT CARD (Tilted rotate-6, Brahmin wedding ritual) */}
        <div
          style={{ transitionDelay: "280ms" }}
          className={`absolute top-[42%] left-[1.5%] lg:left-[3%] transform rotate-6 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-95 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="group relative w-24 h-32 lg:w-32 lg:h-42 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] hover:shadow-[0_25px_50px_rgba(184,140,66,0.35)] cursor-pointer animate-float-delayed">
            <img
              src="/home_Page_images/brahmin-wedding-photography.jpg"
              alt="Brahmin wedding ritual photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 3. BOTTOM-LEFT CARD (Tilted -rotate-6, Couple in gold) */}
        <div
          style={{ transitionDelay: "450ms" }}
          className={`absolute bottom-6 sm:bottom-8 lg:bottom-10 left-[8%] lg:left-[13%] transform -rotate-6 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-95 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="group relative w-24 h-32 lg:w-32 lg:h-40 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] hover:shadow-[0_25px_50px_rgba(184,140,66,0.35)] cursor-pointer animate-float-slow">
            <img
              src="/home_Page_images/engagement-photo-studio-chennai.jpg"
              alt="Engagement photography"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 4. TOP-RIGHT CARD (Tilted rotate-12, Couple in yellow silk saree & garlands) */}
        <div
          style={{ transitionDelay: "180ms" }}
          className={`absolute top-10 sm:top-14 lg:top-16 right-[4%] lg:right-[8%] transform rotate-12 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-95 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="group relative w-28 h-38 lg:w-36 lg:h-48 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] hover:shadow-[0_25px_50px_rgba(184,140,66,0.35)] cursor-pointer animate-float-delayed">
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
          className={`absolute top-[42%] right-[1.5%] lg:right-[3%] transform -rotate-8 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-95 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="group relative w-24 h-32 lg:w-32 lg:h-42 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] hover:shadow-[0_25px_50px_rgba(184,140,66,0.35)] cursor-pointer animate-float-slow">
            <img
              src="/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg"
              alt="Cinematic couple photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT CARD (Tilted rotate-8, Blue gown maternity) */}
        <div
          style={{ transitionDelay: "520ms" }}
          className={`absolute bottom-6 sm:bottom-8 lg:bottom-10 right-[8%] lg:right-[13%] transform rotate-8 transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? "opacity-95 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="group relative w-24 h-32 lg:w-32 lg:h-40 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-4 border-white bg-white transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-3 hover:rotate-0 hover:z-20 hover:border-[#b88c42] hover:shadow-[0_25px_50px_rgba(184,140,66,0.35)] cursor-pointer animate-float-delayed">
            <img
              src="/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg"
              alt="Baby shower photo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

      </div>

      {/* Center Main Content Box */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center my-auto">
        {/* Booking Badge with Extra Top Spacing for Mobile View */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#b88c42]/30 shadow-md mt-6 sm:mt-0 mb-5 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#b88c42] animate-pulse"></span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-800">
            NOW BOOKING 2026 WEDDING DATES
          </span>
        </div>

        {/* Main Headline */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 font-serif font-bold leading-tight mb-4 tracking-tight transition-all duration-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          See your love story through a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e742f] via-[#b88c42] to-[#866023]">
            different lens.
          </span>
        </h2>

        {/* Description Paragraph */}
        <p
          className={`text-base sm:text-lg text-stone-600 max-w-xl mb-7 leading-relaxed font-normal transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Candid, traditional and cinematic wedding photography in Chennai — packages engineered for visual storytellers and timeless remembrance.
        </p>

        {/* Improved CTA Buttons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-stone-900 hover:bg-[#b88c42] text-white font-serif font-bold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#b88c42]/30 hover:-translate-y-1"
          >
            <span>Book a Session</span>
            <span className="material-symbols-outlined text-xl group-hover:translate-y-1 transition-transform">
              arrow_downward
            </span>
          </Link>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 bg-white hover:bg-stone-900 text-stone-900 hover:text-white font-serif font-bold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-300 border-2 border-stone-300/90 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <span>View Gallery</span>
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              photo_library
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
