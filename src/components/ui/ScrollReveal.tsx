"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "open-scale";
  delay?: number; // ms delay
  duration?: number; // ms duration
  threshold?: number; // viewport threshold (0 to 1)
  once?: boolean;
  className?: string;
  isOpenReveal?: boolean; // force trigger open reveal on mount
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.12,
  once = true,
  className = "",
  isOpenReveal = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpenReveal) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    // Fallback timer to guarantee visibility on mobile if observer delays
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 400 + delay);

    // Fallback if IntersectionObserver is not supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      clearTimeout(fallbackTimer);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "120px 0px 100px 0px",
      }
    );

    observer.observe(element);

    return () => {
      clearTimeout(fallbackTimer);
      if (element) observer.unobserve(element);
    };
  }, [threshold, once, isOpenReveal, delay]);

  // Initial hidden styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "fade-down":
        return "translate-y-[-32px] opacity-0";
      case "fade-left":
        return "translate-x-[-36px] opacity-0";
      case "fade-right":
        return "translate-x-[36px] opacity-0";
      case "zoom-in":
        return "scale-[0.92] opacity-0";
      case "open-scale":
        return "scale-[0.88] opacity-0 blur-[6px]";
      case "fade-up":
      default:
        return "translate-y-[36px] opacity-0";
    }
  };

  const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100 blur-0";

  return (
    <div
      ref={ref}
      className={`transition-all cubic-bezier(0.22,1,0.36,1) will-change-[transform,opacity,filter] ${
        isVisible ? visibleClass : getVariantStyles()
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
