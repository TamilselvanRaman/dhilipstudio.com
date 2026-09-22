"use client";

import React, { useEffect, useRef, useState } from "react";
import { marqueeRow1, marqueeRow2 } from "../../data/studioData";

export const InfiniteMarqueeSection: React.FC = () => {
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
        <div className="flex gap-space-md mb-space-md w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-space-md">
            {marqueeRow1.map((item, idx) => (
              <div
                key={idx}
                className="w-72 h-96 bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-72 rounded bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.src} alt={item.alt} />
                </div>
                <div className="pt-3">
                  <span className="font-label-md text-label-md tracking-wider uppercase text-outline">
                    {item.tag}
                  </span>
                  <p className="font-headline-sm text-base font-serif text-on-surface truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated Track for Seamless Infinite Scroll */}
          <div aria-hidden="true" className="flex gap-space-md">
            {marqueeRow1.map((item, idx) => (
              <div
                key={`dup-${idx}`}
                className="w-72 h-96 bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-72 rounded bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.src} alt={item.alt} />
                </div>
                <div className="pt-3">
                  <span className="font-label-md text-label-md tracking-wider uppercase text-outline">
                    {item.tag}
                  </span>
                  <p className="font-headline-sm text-base font-serif text-on-surface truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex gap-space-md w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          <div className="flex gap-space-md">
            {marqueeRow2.map((item, idx) =>
              item.isOverlay ? (
                <div
                  key={idx}
                  className="w-80 h-72 bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <img className="w-full h-full object-cover rounded" src={item.src} alt={item.alt} />
                  <div className="absolute inset-3 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-4 rounded">
                    <p className="font-display-md text-lg italic text-on-secondary font-serif leading-snug">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="w-80 h-72 bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-full h-44 rounded bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" src={item.src} alt={item.alt} />
                  </div>
                  <div className="pt-2">
                    <span className="font-label-md text-label-md text-secondary uppercase font-medium">
                      {item.tag}
                    </span>
                    <p className="font-body-md text-body-sm text-on-surface font-serif">
                      {item.title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Duplicated Track for Row 2 Seamless Scroll */}
          <div aria-hidden="true" className="flex gap-space-md">
            {marqueeRow2.map((item, idx) =>
              item.isOverlay ? (
                <div
                  key={`dup2-${idx}`}
                  className="w-80 h-72 bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <img className="w-full h-full object-cover rounded" src={item.src} alt={item.alt} />
                  <div className="absolute inset-3 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-4 rounded">
                    <p className="font-display-md text-lg italic text-on-secondary font-serif leading-snug">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={`dup2-${idx}`}
                  className="w-80 h-72 bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-full h-44 rounded bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" src={item.src} alt={item.alt} />
                  </div>
                  <div className="pt-2">
                    <span className="font-label-md text-label-md text-secondary uppercase font-medium">
                      {item.tag}
                    </span>
                    <p className="font-body-md text-body-sm text-on-surface font-serif">
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
