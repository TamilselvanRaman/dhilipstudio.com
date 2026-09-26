"use client";

import React, { useState, useEffect, useRef } from "react";
import { heroCards } from "../../data/studioData";

export const Hero3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Trigger smooth entrance reveal and client mount state
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + heroCards.length) % heroCards.length);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % heroCards.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth Autoplay (3.0s interval, moves one-by-one in continuous loop)
  useEffect(() => {
    if (isAutoPlayPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlayPaused]);

  const getSpacingMultiplier = () => {
    if (windowWidth < 380) return 0.45;
    if (windowWidth < 480) return 0.52;
    if (windowWidth < 640) return 0.62;
    if (windowWidth < 768) return 0.78;
    if (windowWidth < 1024) return 0.90;
    return 1.0;
  };

  const getCardStyle = (idx: number) => {
    const totalCards = heroCards.length;
    let diff = idx - currentIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;

    const absDiff = Math.abs(diff);
    // On small mobile screens (< 640px), only show the center card & adjacent 1-level side cards
    const isVisible = windowWidth < 640 ? absDiff <= 1 : absDiff <= 3;
    const mult = getSpacingMultiplier();

    const configs: Record<
      number,
      { x: number; y: number; z: number; rotY: number; scale: number; zIndex: number; opacity: number; filter: string; shadow: string; border: string }
    > = {
      0: {
        x: 0,
        y: -6,
        z: 110,
        rotY: 0,
        scale: 1.06,
        zIndex: 50,
        opacity: 1,
        filter: "brightness(1.05)",
        shadow: "0 35px 70px -15px rgba(0, 0, 0, 0.5), 0 0 35px rgba(90, 94, 78, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
      },
      1: {
        x: 230,
        y: 0,
        z: -35,
        rotY: -18,
        scale: 0.85,
        zIndex: 38,
        opacity: 0.88,
        filter: "brightness(0.85) contrast(0.95)",
        shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      },
      "-1": {
        x: -230,
        y: 0,
        z: -35,
        rotY: 18,
        scale: 0.85,
        zIndex: 38,
        opacity: 0.88,
        filter: "brightness(0.85) contrast(0.95)",
        shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      },
      2: {
        x: 410,
        y: 5,
        z: -110,
        rotY: -28,
        scale: 0.72,
        zIndex: 25,
        opacity: 0.75,
        filter: "brightness(0.75) contrast(0.9)",
        shadow: "0 20px 40px -10px rgba(0, 0, 0, 0.35)",
        border: "none",
      },
      "-2": {
        x: -410,
        y: 5,
        z: -110,
        rotY: 28,
        scale: 0.72,
        zIndex: 25,
        opacity: 0.75,
        filter: "brightness(0.75) contrast(0.9)",
        shadow: "0 20px 40px -10px rgba(0, 0, 0, 0.35)",
        border: "none",
      },
      3: {
        x: 560,
        y: 10,
        z: -190,
        rotY: -35,
        scale: 0.58,
        zIndex: 12,
        opacity: 0.55,
        filter: "brightness(0.65)",
        shadow: "0 15px 30px -8px rgba(0, 0, 0, 0.25)",
        border: "none",
      },
      "-3": {
        x: -560,
        y: 10,
        z: -190,
        rotY: 35,
        scale: 0.58,
        zIndex: 12,
        opacity: 0.55,
        filter: "brightness(0.65)",
        shadow: "0 15px 30px -8px rgba(0, 0, 0, 0.25)",
        border: "none",
      },
    };

    const config = configs[diff] || (diff > 0 ? configs[3] : configs[-3]);
    const transX = config.x * mult;

    return {
      transform: `translate3d(${transX}px, ${config.y}px, ${config.z}px) rotateY(${config.rotY}deg) scale(${config.scale})`,
      zIndex: config.zIndex,
      opacity: isVisible ? config.opacity : 0,
      pointerEvents: (isVisible ? "auto" : "none") as React.CSSProperties["pointerEvents"],
      filter: config.filter,
      boxShadow: config.shadow,
      border: config.border,
      transition: "transform 0.85s cubic-bezier(0.34, 1.25, 0.64, 1), opacity 0.75s ease-out, filter 0.75s ease-out",
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchEndX.current - touchStartX.current;
    if (Math.abs(distance) > 30) {
      if (distance < 0) {
        setCurrentIndex((prev) => (prev + 1) % heroCards.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + heroCards.length) % heroCards.length);
      }
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center"
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
    >
      <div
        aria-label="Featured Photography Carousel"
        className="perspective-stage w-full py-4 px-2 sm:px-6 overflow-visible flex items-center justify-center relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-track-container">
          <div className="carousel-track">
            {heroCards.map((card, idx) => {
              const isCenter = idx === currentIndex;
              const shouldRenderImage = isCenter || isMounted;
              return (
                <article
                  key={card.id}
                  onClick={() => {
                    if (isCenter) {
                      window.location.href = `/gallery/${(card.id % 6) + 1}`;
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  style={getCardStyle(idx)}
                  className="carousel-card rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    width={870}
                    height={1280}
                    loading={isCenter ? "eager" : "lazy"}
                    decoding={isCenter ? "sync" : "async"}
                    {...(isCenter ? ({ fetchPriority: "high" } as any) : { fetchPriority: "low" })}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

                  <div
                    className={`card-text-container absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col items-start text-left pointer-events-none transition-all duration-500 ${
                      isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                  >
                    <span className="card-category text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-secondary mb-1.5 drop-shadow">
                      {card.category}
                    </span>
                    <h3 className="card-title font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-normal leading-tight drop-shadow-lg max-w-[95%] mb-2">
                      {card.title}
                    </h3>
                    {isCenter && (
                      <span className="pointer-events-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-[#f3e3a1] uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 hover:bg-[#b88c42] hover:text-white transition-all">
                        <span>OPEN MONOGRAPH DETAILS</span>
                        <span>&rarr;</span>
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <nav aria-label="Carousel pagination" className="flex items-center justify-center mt-2 mb-3">
        <div className="inline-flex items-center justify-center gap-1 bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/5 shadow-xs">
          {heroCards.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className="p-0.5 flex items-center justify-center focus:outline-none cursor-pointer"
            >
              <span
                className={`h-1 rounded-full transition-all duration-300 ${
                  dotIdx === currentIndex
                    ? "w-3.5 bg-[#b88c42] shadow-xs"
                    : "w-1 bg-[#b88c42]/35 hover:bg-[#b88c42]/70"
                }`}
              />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
