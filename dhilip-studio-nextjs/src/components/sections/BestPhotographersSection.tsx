"use client";

import React from "react";
import { aboutSectionContent } from "../../data/studioData";

export const BestPhotographersSection: React.FC = () => {
  return (
    <section id="about-best-photographers" className="w-full bg-surface-container-lowest py-12 md:py-16 px-margin-mobile md:px-margin text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-on-surface font-sans font-bold tracking-widest uppercase mb-4">
          {aboutSectionContent.title}
        </h2>
        <div className="w-16 h-1 bg-secondary mb-6 rounded-full"></div>
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-on-surface-variant font-sans leading-relaxed tracking-wide">
          {aboutSectionContent.description}
        </p>
      </div>
    </section>
  );
};
