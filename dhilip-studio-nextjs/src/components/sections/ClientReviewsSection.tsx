"use client";

import React, { useState, useEffect, useRef } from "react";
import { reviewsList } from "../../data/studioData";

export const ClientReviewsSection: React.FC = () => {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-loop every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % reviewsList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="w-full bg-surface-container-low px-margin-mobile md:px-margin py-space-xl">
      <div className="max-w-4xl mx-auto">
        <div
          className={`mb-space-lg transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block font-display-md font-serif text-display-md text-outline-variant select-none tracking-widest leading-none">CLIENTS</span>
          <div className="flex items-center gap-space-md -mt-4">
            <h2 className="font-headline-lg font-serif text-headline-lg text-on-surface uppercase tracking-wide">Review</h2>
            <div className="h-0.5 bg-primary flex-1 max-w-xs rounded-full"></div>
          </div>
        </div>

        <div
          className={`bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-lg relative transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
          id="review-slider-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-space-lg transition-all duration-500">
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-surface-container-low shadow-md">
                <img
                  key={reviewsList[currentReviewIdx].id}
                  className="w-full h-full object-cover animate-fadeIn"
                  src={reviewsList[currentReviewIdx].avatar}
                  alt={reviewsList[currentReviewIdx].author}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center shadow text-on-tertiary text-xs font-mono">
                99
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 text-secondary mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg text-[#b88c42]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              <p className="font-headline-sm text-title-lg md:text-headline-sm font-serif italic text-on-surface mb-space-md leading-relaxed min-h-[80px]">
                {reviewsList[currentReviewIdx].quote}
              </p>

              <div>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-primary font-medium">
                  {reviewsList[currentReviewIdx].author}
                </p>
                <span className="font-body-sm text-body-sm text-outline block mt-0.5">
                  {reviewsList[currentReviewIdx].location}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-space-lg mt-space-md border-t border-outline-variant/30">
            {/* Dot Indicators with Auto Loop indicator */}
            <div className="flex items-center gap-2">
              {reviewsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIdx(idx)}
                  aria-label={`Review ${idx + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentReviewIdx ? "bg-[#b88c42] w-6" : "bg-stone-300 w-3 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-space-xs">
              <button
                onClick={() =>
                  setCurrentReviewIdx((prev) => (prev - 1 + reviewsList.length) % reviewsList.length)
                }
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-[#b88c42] hover:text-white text-primary flex items-center justify-center transition-colors cursor-pointer"
                title="Previous Review"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <button
                onClick={() => setCurrentReviewIdx((prev) => (prev + 1) % reviewsList.length)}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-[#b88c42] hover:text-white text-primary flex items-center justify-center transition-colors cursor-pointer"
                title="Next Review"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

