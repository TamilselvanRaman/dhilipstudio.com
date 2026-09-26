"use client";

import React, { useState, useEffect, useRef } from "react";
import { reviewsList } from "../../data/studioData";

export const ClientReviewsSection: React.FC = () => {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-loop every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % reviewsList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="w-full bg-surface-container-low px-4 sm:px-6 md:px-12 py-12 sm:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto min-w-0">
        <div
          className={`mb-6 sm:mb-8 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block font-serif text-3xl sm:text-5xl font-bold text-stone-300 select-none tracking-widest leading-none">CLIENTS</span>
          <div className="flex items-center gap-3 -mt-2 sm:-mt-4">
            <h2 className="font-serif text-xl sm:text-3xl text-stone-900 font-bold uppercase tracking-wide">Review</h2>
            <div className="h-0.5 bg-[#b88c42] flex-1 max-w-xs rounded-full"></div>
          </div>
        </div>

        <div
          className={`bg-surface-container-lowest rounded-xl p-4 sm:p-8 shadow-lg relative transition-all duration-1000 delay-200 ease-out min-w-0 overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
          id="review-slider-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 transition-all duration-500 min-w-0">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-surface-container-low shadow-md">
                <img
                  key={reviewsList[currentReviewIdx].id}
                  className="w-full h-full object-cover animate-fadeIn"
                  src={reviewsList[currentReviewIdx].avatar}
                  alt={reviewsList[currentReviewIdx].author}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#b88c42] flex items-center justify-center shadow text-white text-xs font-mono">
                99
              </div>
            </div>

            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-1 text-secondary mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-base sm:text-lg text-[#b88c42]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-lg font-serif italic text-on-surface mb-4 leading-relaxed min-h-[70px] sm:min-h-[80px]">
                {reviewsList[currentReviewIdx].quote}
              </p>

              <div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b88c42]">
                  {reviewsList[currentReviewIdx].author}
                </p>
                <span className="text-[11px] sm:text-xs text-stone-500 block mt-0.5 font-medium">
                  {reviewsList[currentReviewIdx].location}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-200/60 gap-2 min-w-0">
            {/* Dot Indicators */}
            <div className="flex items-center gap-1 min-w-0 overflow-hidden">
              {reviewsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIdx(idx)}
                  aria-label={`Review ${idx + 1}`}
                  className="p-1 flex items-center justify-center cursor-pointer focus:outline-none"
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentReviewIdx ? "bg-[#b88c42] w-4 sm:w-5" : "bg-stone-300 w-1 hover:bg-stone-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() =>
                  setCurrentReviewIdx((prev) => (prev - 1 + reviewsList.length) % reviewsList.length)
                }
                aria-label="Previous testimonial"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 hover:bg-[#b88c42] hover:text-white text-stone-800 flex items-center justify-center transition-colors cursor-pointer border border-stone-200"
                title="Previous Review"
              >
                <span className="material-symbols-outlined text-base sm:text-lg">arrow_back</span>
              </button>
              <button
                onClick={() => setCurrentReviewIdx((prev) => (prev + 1) % reviewsList.length)}
                aria-label="Next testimonial"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 hover:bg-[#b88c42] hover:text-white text-stone-800 flex items-center justify-center transition-colors cursor-pointer border border-stone-200"
                title="Next Review"
              >
                <span className="material-symbols-outlined text-base sm:text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

