"use client";

import React, { useEffect, useRef, useState } from "react";

export const StudioStorySection: React.FC = () => {
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
      id="about-studio-story"
      className="w-full bg-[#f4efe6] py-20 px-4 sm:px-6 md:px-12 border-y border-stone-300/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b88c42]/15 border border-[#b88c42]/40 text-[#b88c42] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b88c42]"></span>
            OUR STORY &amp; PASSION
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight leading-tight">
            Wedding Photographer in Chennai Capturing Love Stories
          </h2>
          <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#b88c42] mt-2">
            Capturing the smiles, tears &amp; sacred vows you hold dear
          </p>
        </div>

        {/* Story Content Block (Animated Reveal) */}
        <div
          className={`bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-stone-200/90 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual Monograph Quote Frame */}
            <div
              className={`lg:col-span-5 relative transition-all duration-900 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp"
                  alt="Chennai wedding photography"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#f3e3a1] font-semibold block mb-1">
                    DHILIP STUDIO · EST. 2012
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug">
                    Over 12 Years of Documenting Tamil Nadu's Grandest Weddings
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Text */}
            <div
              className={`lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-sm sm:text-base transition-all duration-900 delay-450 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <blockquote className="font-serif text-xl sm:text-2xl text-stone-900 font-medium italic border-l-4 border-[#b88c42] pl-4 py-1 leading-snug">
                "There is no doubt that your wedding day is the most memorable event in life. Finding the right wedding photographer is what turns fleeting vows into family heirlooms."
              </blockquote>
              <p>
                Finding professional wedding photographers in Chennai who can snap a wide range of photoshoots—from pre-wedding, candid, traditional, to maternity, newborn, and milestone birthdays—is essential. Dhilip Studio never misses capturing precious smiles and emotional moments.
              </p>
              <p>
                Thanks to today’s photographic advancements, our passionate team clicks your precious wedding moments naturally without interrupting priest rituals or sacred mandap vows.
              </p>
              <div className="pt-2 flex items-center gap-6 text-stone-900 font-serif font-bold text-sm sm:text-base">
                <div className="flex items-center gap-2 text-[#b88c42]">
                  <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  <span>500+ Celebrations</span>
                </div>
                <div className="flex items-center gap-2 text-[#b88c42]">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                  <span>Chennai &amp; South India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
