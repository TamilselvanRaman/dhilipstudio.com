"use client";

import React, { useEffect, useRef, useState } from "react";
import { marqueeRow1, marqueeRow2 } from "../../data/studioData";

export const InfiniteMarqueeSection: React.FC = () => {
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
    <section ref={sectionRef} className="w-full bg-surface-container-low py-space-xl overflow-hidden">
      <div
        className={`max-w-6xl mx-auto text-center px-margin-mobile mb-space-lg transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-headline-sm text-headline-sm uppercase tracking-widest text-on-surface">
          Portfolios &amp; Wedding Stories
        </h2>
        <p className="font-['Dancing_Script',cursive] text-xl text-secondary mt-1">
          a glimpse of the work we love
        </p>
      </div>

      <div
        className={`relative w-full overflow-hidden transition-all duration-1000 delay-200 ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-98"
        }`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 md:w-48 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 md:w-48 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Right to Left */}
        <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4 w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-3 sm:gap-4">
            {marqueeRow1.map((item, idx) => (
              <div
                key={idx}
                className="w-56 sm:w-72 h-80 sm:h-96 bg-surface-container-lowest rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-60 sm:h-72 rounded bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <div className="pt-2 sm:pt-3">
                  <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-stone-500 font-medium block">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-base font-serif text-stone-900 font-bold truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated Track for Seamless Infinite Scroll */}
          <div aria-hidden="true" className="flex gap-3 sm:gap-4">
            {marqueeRow1.map((item, idx) => (
              <div
                key={`dup-${idx}`}
                className="w-56 sm:w-72 h-80 sm:h-96 bg-surface-container-lowest rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-60 sm:h-72 rounded bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <div className="pt-2 sm:pt-3">
                  <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-stone-500 font-medium block">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-base font-serif text-stone-900 font-bold truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex gap-3 sm:gap-4 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          <div className="flex gap-3 sm:gap-4">
            {marqueeRow2.map((item, idx) =>
              item.isOverlay ? (
                <div
                  key={idx}
                  className="w-64 sm:w-80 h-60 sm:h-72 bg-surface-container-lowest rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <img className="w-full h-full object-cover rounded" src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  <div className="absolute inset-2.5 sm:inset-3 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3 sm:p-4 rounded">
                    <p className="text-sm sm:text-lg italic text-white font-serif leading-snug">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="w-64 sm:w-80 h-60 sm:h-72 bg-surface-container-lowest rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-full h-36 sm:h-44 rounded bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] sm:text-xs text-stone-500 uppercase font-medium block">
                      {item.tag}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-900 font-serif font-bold truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Duplicated Track for Row 2 Seamless Scroll */}
          <div aria-hidden="true" className="flex gap-3 sm:gap-4">
            {marqueeRow2.map((item, idx) =>
              item.isOverlay ? (
                <div
                  key={`dup2-${idx}`}
                  className="w-64 sm:w-80 h-60 sm:h-72 bg-surface-container-lowest rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <img className="w-full h-full object-cover rounded" src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  <div className="absolute inset-2.5 sm:inset-3 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3 sm:p-4 rounded">
                    <p className="text-sm sm:text-lg italic text-white font-serif leading-snug">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={`dup2-${idx}`}
                  className="w-64 sm:w-80 h-60 sm:h-72 bg-surface-container-lowest rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-full h-36 sm:h-44 rounded bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] sm:text-xs text-stone-500 uppercase font-medium block">
                      {item.tag}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-900 font-serif font-bold truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
