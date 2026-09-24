"use client";

import React, { useEffect, useState } from "react";
import { Hero3DCarousel } from "./Hero3DCarousel";

export const HeroSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-surface-container-lowest pt-6 sm:pt-8 md:pt-10 pb-8 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col items-center text-center px-2 sm:px-6">
      
        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-wider uppercase leading-[1.15] mb-2 overflow-hidden">
          <span className="block font-bold drop-shadow-sm text-on-surface">
            BEST WEDDING PHOTOGRAPHERS
          </span>
          <span className="block font-['Great_Vibes',cursive] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary normal-case -mt-2 sm:-mt-3 font-normal">
            in Chennai
          </span>
        </h1>

        {/* Script Tagline */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="h-[1px] w-12 sm:w-24 bg-secondary/40"></div>
          <p className="font-['Great_Vibes',cursive] text-xl sm:text-2xl text-secondary tracking-wide">
            candid · traditional · cinematic
          </p>
          <div className="h-[1px] w-12 sm:w-24 bg-secondary/40"></div>
        </div>

        {/* Editorial Description Paragraph */}
        <p className="max-w-3xl font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant/90 leading-relaxed tracking-wide mb-6">
          There is no doubt that the wedding day is the most memorable and important event in our entire life. One of the most essential parts of the perfect and the best wedding planning is that people often forget the marriage photographers.
        </p>

        {/* 3D Curved Panoramic Showcase Stage */}
        <div className="w-full">
          <Hero3DCarousel />
        </div>
      </div>
    </section>
  );
};
