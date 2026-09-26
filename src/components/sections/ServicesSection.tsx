"use client";

import React, { useEffect, useRef, useState } from "react";
import { servicesList } from "../../data/studioData";

// Helper component for single number count up (0 -> N)
interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  startTrigger: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = "",
  duration = 1800,
  startTrigger,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, startTrigger]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Helper component for range number count up (0-0 -> 3-4)
const AnimatedRangeCounter: React.FC<{ startTarget: number; endTarget: number; startTrigger: boolean }> = ({
  startTarget,
  endTarget,
  startTrigger,
}) => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setVal1(Math.floor(easeProgress * startTarget));
      setVal2(Math.floor(easeProgress * endTarget));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setVal1(startTarget);
        setVal2(endTarget);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [startTarget, endTarget, startTrigger]);

  return <span>{val1}–{val2}</span>;
};

export const ServicesSection: React.FC = () => {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Cards Scroll Reveal Observer
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsCardsVisible(true);
    }, 350);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCardsVisible(true);
            clearTimeout(fallbackTimer);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: "100px 0px 100px 0px" }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  // Stats Scroll Reveal Observer
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsStatsVisible(true);
    }, 450);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
            clearTimeout(fallbackTimer);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: "100px 0px 100px 0px" }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="w-full bg-[#fdfcf9] px-4 sm:px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isCardsVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <span className="font-label-md text-xs uppercase tracking-[0.25em] text-[#b88c42] font-semibold block mb-2">
            OUR PHOTOGRAPHY SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 leading-tight font-bold tracking-tight">
            Stand out with wedding stories that feel like you
          </h2>
          <p className="font-['Great_Vibes',cursive] text-2xl md:text-3xl text-[#b88c42] mt-2">
            Total care over every frame of your big day
          </p>
        </div>

        {/* 8-Card Grid with Scroll Reveal Animations (Left-to-Right & Right-to-Left) */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesList.map((item, index) => {
            // Determine slide direction: left columns (0 & 1) slide from left, right columns (2 & 3) slide from right
            const col = index % 4;
            const isFromLeft = col === 0 || col === 1;
            const initialTransform = isFromLeft ? "-translate-x-12 sm:-translate-x-16" : "translate-x-12 sm:translate-x-16";
            const delayMs = (col * 120) + (Math.floor(index / 4) * 180);

            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${delayMs}ms` }}
                className={`group bg-white rounded-2xl p-5 shadow-sm border border-stone-200/90 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1.5 hover:border-[#b88c42]/50 ${
                  isCardsVisible
                    ? "opacity-100 translate-x-0 scale-100"
                    : `opacity-0 ${initialTransform} scale-95`
                }`}
              >
                <div>
                  {/* Single Image Preview Container */}
                  <div className="h-52 sm:h-56 w-full rounded-xl mb-4 overflow-hidden relative bg-stone-100 border border-stone-200/60">
                    <img
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                      src={item.img1}
                      alt={item.img1Alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-[#b88c42] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row with Scroll-Triggered Animated Number Counter (0 -> N) */}
        <div
          ref={statsRef}
          className={`mt-20 pt-10 bg-white rounded-2xl px-6 md:px-12 py-8 shadow-sm border border-stone-200/90 transition-all duration-1000 ${
            isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#b88c42]">
                <AnimatedCounter target={12} suffix="+" duration={1800} startTrigger={isStatsVisible} />
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500 block mt-1 font-medium">
                Years Experience
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#b88c42]">
                <AnimatedCounter target={500} suffix="+" duration={2200} startTrigger={isStatsVisible} />
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500 block mt-1 font-medium">
                Events Covered
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#b88c42]">
                <AnimatedRangeCounter startTarget={3} endTarget={4} startTrigger={isStatsVisible} />
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500 block mt-1 font-medium">
                Weeks Photo Delivery
              </span>
            </div>
            <div>
              <span
                className={`block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#b88c42] transition-all duration-1000 ${
                  isStatsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
                }`}
              >
                Tamil Nadu
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500 block mt-1 font-medium">
                Destination Coverage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

