"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StudioStorySection } from "@/components/sections/StudioStorySection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ExperienceStepsSection } from "@/components/sections/ExperienceStepsSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import Link from "next/link";

export default function AboutPage() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-20">
        {/* About Hero Banner with Smooth Staggered Text Reveal */}
        <section className="relative w-full pt-2 sm:pt-3 pb-10 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-stone-100 via-[#faf7f2] to-[#fcfbfa] border-b border-stone-200/80 overflow-hidden">

          <div className="mt-6 relative z-10 max-w-6xl mx-auto text-center ">
            
            

            {/* Main Headline Reveal */}
            <h1
              className={`font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-stone-900 max-w-4xl mx-auto transition-all duration-1000 delay-200 ease-out ${
                isRevealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              Preserving Sacred Vows &amp; Emotional Moments For Over A Decade
            </h1>

            {/* Subtitle Reveal */}
            <p
              className={`font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#b88c42] mt-3 max-w-2xl mx-auto transition-all duration-1000 delay-400 ease-out ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Where timeless South Indian heritage meets cinema-calibre artistry
            </p>

            {/* Quick Stats Grid Reveal */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-stone-200/80 max-w-4xl mx-auto transition-all duration-1000 delay-600 ease-out ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center group">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#b88c42] block group-hover:scale-110 transition-transform">
                  12+
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500 mt-1 block">Years Legacy</span>
              </div>
              <div className="text-center group">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#b88c42] block group-hover:scale-110 transition-transform">
                  500+
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500 mt-1 block">Weddings Covered</span>
              </div>
              <div className="text-center group">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#b88c42] block group-hover:scale-110 transition-transform">
                  100%
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500 mt-1 block">Satisfied Couples</span>
              </div>
              <div className="text-center group">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#b88c42] block group-hover:scale-110 transition-transform">
                  4K &amp; Drone
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500 mt-1 block">Cinema Tech</span>
              </div>
            </div>

          </div>
        </section>

        {/* Founder & Ethos Showcase Reveal */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image Card Reveal (Left to Right) */}
            <div
              className={`lg:col-span-6 relative transition-all duration-1000 delay-800 ease-out ${
                isRevealed ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp"
                  alt="Dhilip Studio Founder and Lead Photographer"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#f3e3a1] font-mono font-bold block mb-1">
                    LEAD PHOTOGRAPHER &amp; FOUNDER
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Mr. Dhilip Kumar</h3>
                  <p className="text-xs text-stone-300">Master Wedding Storyteller &amp; Director</p>
                </div>
              </div>
            </div>

            {/* Philosophy Content Reveal (Right to Left) */}
            <div
              className={`lg:col-span-6 space-y-6 transition-all duration-1000 delay-1000 ease-out ${
                isRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b88c42] block">
                DHILIP STUDIO – PORUR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                "We don't just take pictures. We craft heirloom memories for your BIG DAY."
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Thank you for checking us out! Dhilip Studio, Porur is a Chennai-based wedding photography and cinematography team passionate about creating inspiring wedding moments. We love capturing diverse wedding traditions and turning your big day into magical, lifelong memories.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                With over 12 years of dedicated service, our team has covered more than 500+ weddings across all South Indian traditions. We operate with unobtrusive grace, capturing natural smiles, sacred vows, and intimate family joy without disturbing priest rituals or event timelines.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 bg-[#1c1a17] text-[#f3e3a1] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#b88c42] hover:text-white transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Portfolio</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-stone-300 text-stone-800 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-stone-900 hover:text-white transition-all hover:scale-105"
                >
                  <span>Contact Studio</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Tabbed Studio Story Section */}
        <StudioStorySection />

        {/* What We Do & What We Offer Section */}
        <WhatWeDoSection />

        {/* Step Workflow Section */}
        <ExperienceStepsSection />

        {/* Call to Action Band */}
        <CtaBandSection />
      </main>

      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}
