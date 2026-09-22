"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolioDetailsList } from "../../data/portfolioData";

export const PortfolioCoverflowSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const total = portfolioDetailsList.length;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Swipe / Drag handlers
  const handleStart = (clientX: number) => {
    touchStartX.current = clientX;
    touchEndX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current) return;
    touchEndX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current || touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 35; // 35px swipe threshold

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance < 0) {
        nextSlide(); // Swiped left -> next
      } else {
        prevSlide(); // Swiped right -> prev
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle click on center image (left half = prev, right half = next)
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If it was a drag gesture rather than a click, don't trigger click action
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dragDistance = Math.abs(touchEndX.current - touchStartX.current);
      if (dragDistance > 10) return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const currentItem = portfolioDetailsList[currentIndex];
  const prevItem = portfolioDetailsList[(currentIndex - 1 + total) % total];
  const nextItem = portfolioDetailsList[(currentIndex + 1) % total];

  return (
    <section ref={sectionRef} className="w-full bg-[#525746] text-white py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden" id="portfolio-gallery">
      {/* Header */}
      <div
        className={`max-w-6xl mx-auto text-center mb-10 transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase text-white font-normal">
          Portfolios
        </h2>
        <p className="font-['Great_Vibes',cursive] text-2xl md:text-3xl text-[#f3e3a1] mt-1">
          Showcase your talents &amp; attract new clients.
        </p>
      </div>

      <div
        className={`relative max-w-6xl mx-auto flex items-center justify-center min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] select-none py-2 transition-all duration-1000 delay-200 ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        {/* Left Angled Slide (Click to move to previous) */}
        <div
          onClick={prevSlide}
          className="hidden md:block absolute left-2 lg:left-8 w-52 lg:w-64 h-[350px] lg:h-[400px] rounded-2xl shadow-2xl transform -rotate-y-12 scale-90 opacity-40 hover:opacity-85 transition-all duration-500 overflow-hidden cursor-pointer bg-black border border-white/20 z-10"
          title="Click to view previous monograph"
        >
          <img
            className="w-full h-full object-cover"
            src={prevItem.coverImage}
            alt={prevItem.title}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Center Browser Window Mockup */}
        <div
          className="relative z-20 w-full max-w-xl sm:max-w-2xl lg:max-w-3xl bg-[#fcfbfa] text-stone-900 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-500 mx-auto"
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          
          {/* Mac Header Bar */}
          <div className="bg-[#f0ece5] px-4 py-2 flex items-center justify-between border-b border-stone-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
            </div>
            <Link
              href={`/gallery/${currentItem.id}`}
              className="bg-white px-3.5 py-1 rounded-full text-xs font-mono text-stone-700 tracking-tight border border-stone-300 hover:text-[#b88c42] transition-colors flex items-center gap-1 shadow-inner shrink-0"
              title="Click to view full monograph details"
            >
              <span className="whitespace-nowrap font-medium">dhilipstudio.com/wedding/{currentItem.slug}</span>
              <span className="material-symbols-outlined text-[11px] text-stone-400">open_in_new</span>
            </Link>
            <span className="material-symbols-outlined text-stone-400 text-xs">lock</span>
          </div>

          <div className="p-3.5 sm:p-6 bg-white">
            {/* Clickable Image or View All Card */}
            {currentItem.isViewAllCard ? (
              <div
                className="relative h-[340px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden mb-3 bg-[#18181b] flex flex-col items-center justify-center text-center p-5 sm:p-6 border border-[#d4af37]/40 shadow-inner group"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  src={currentItem.coverImage}
                  alt={currentItem.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-stone-950/80 to-black/85"></div>

                <div className="relative z-10 max-w-sm mx-auto space-y-2.5">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#f3e3a1] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl text-[#f3e3a1]">photo_library</span>
                  </div>
                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#d4af37] text-stone-950 font-extrabold text-[9px] font-mono uppercase tracking-[0.25em] shadow-md">
                      500+ CELEBRATIONS &amp; MONOGRAPHS
                    </span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight drop-shadow-md">
                    Explore Full Studio Gallery
                  </h4>
                  <p className="text-xs text-slate-100 font-sans font-medium leading-relaxed max-w-xs mx-auto drop-shadow-sm line-clamp-2">
                    View all candid wedding monographs, sacred Brahmin rituals, pre-wedding beach films, maternity &amp; milestone celebrations.
                  </p>
                  <div className="pt-1">
                    <Link
                      href="/gallery"
                      className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#f3e3a1] text-stone-950 font-extrabold text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all shadow-xl hover:scale-105"
                    >
                      <span>OPEN FULL GALLERY</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Left & Right Click Hover Cue Overlays */}
                <div
                  onClick={handleImageClick}
                  className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start pl-3 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white tracking-widest border border-white/20">
                    &larr; PREV
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={handleImageClick}
                className="relative h-[380px] sm:h-[420px] md:h-[450px] w-full rounded-xl overflow-hidden mb-3 bg-black cursor-pointer group border border-stone-200 shadow-inner"
                title="Tap left to go Previous, right to go Next, or swipe left/right!"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  src={currentItem.coverImage}
                  alt={currentItem.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#f3e3a1]">
                    FEATURED MONOGRAPH · {currentItem.category}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-wide leading-tight">
                    {currentItem.title}
                  </h4>
                </div>

                {/* Left & Right Mobile Swap Action Overlay Buttons */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  aria-label="Previous monograph"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#b88c42] backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl active:scale-90 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_left</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Next monograph"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#b88c42] backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl active:scale-90 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_right</span>
                </button>
              </div>
            )}

            {/* Bottom Details Bar */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <div>
                <span className="font-bold uppercase tracking-widest text-[#b88c42] text-[11px] block">
                  {currentItem.edition}
                </span>
                <span className="text-stone-500 font-medium text-[11px]">{currentItem.location}</span>
              </div>
              <Link
                href={currentItem.isViewAllCard ? "/gallery" : `/gallery/${currentItem.id}`}
                className="flex items-center gap-1 text-[#b88c42] font-bold uppercase tracking-wider hover:text-stone-900 transition-colors text-[11px]"
              >
                <span>{currentItem.isViewAllCard ? "Open Gallery Page" : "View Details Page"}</span>
                <span className="material-symbols-outlined text-xs">north_east</span>
              </Link>
            </div>
          </div>

          {/* Cursive Amazing Overlay Badge */}
          <div className="absolute bottom-3 right-5 pointer-events-none transform -rotate-6">
            <span className="font-['Great_Vibes',cursive] text-3xl text-[#b88c42] select-none opacity-90 drop-shadow">
              Amazing
            </span>
          </div>
        </div>

        {/* Right Angled Slide (Click to move to next) */}
        <div
          onClick={nextSlide}
          className="hidden md:block absolute right-2 lg:right-8 w-52 lg:w-64 h-[350px] lg:h-[400px] rounded-2xl shadow-2xl transform rotate-y-12 scale-90 opacity-40 hover:opacity-85 transition-all duration-500 overflow-hidden cursor-pointer bg-black border border-white/20 z-10"
          title="Click to view next monograph"
        >
          <img
            className="w-full h-full object-cover"
            src={nextItem.coverImage}
            alt={nextItem.title}
          />
        </div>
      </div>

      {/* Dot Indicators for Mobile & Desktop Swapping */}
      <nav aria-label="Portfolio pagination" className="flex items-center justify-center space-x-2 mt-6 mb-2">
        {portfolioDetailsList.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to monograph slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
              dotIdx === currentIndex
                ? "w-6 bg-[#f3e3a1] shadow-md"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </nav>

      {/* Bottom Open Gallery View All Button */}
      <div className="mt-8 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] bg-[length:200%_auto] hover:bg-[right_center] text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-105 border border-amber-200/40"
        >
          <span>Open Full Gallery (View All 500+ Photos)</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
};




