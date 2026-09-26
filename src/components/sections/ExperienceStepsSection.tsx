"use client";

import React, { useEffect, useRef, useState } from "react";
import { stepsList } from "../../data/studioData";

export const ExperienceStepsSection: React.FC = () => {
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
    <section ref={sectionRef} className="w-full bg-surface-container-lowest px-margin-mobile md:px-margin py-space-xl relative overflow-hidden" id="why-choose-me">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-600 text-xs uppercase tracking-[0.2em] font-semibold mb-3 shadow-sm">
            OUR 5-STEP EXPERIENCE
          </span>
          <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-on-surface font-serif leading-tight">
            Why Couples Choose Dhilip Studio
          </h2>
          <p className="font-['Dancing_Script',cursive] text-2xl text-secondary mt-2">
            a seamless 5-step journey to your timeless wedding heirloom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepsList.map((step, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`bg-surface-container-low rounded-2xl p-7 border border-outline-variant/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-out relative group flex flex-col justify-between ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              } ${step.isHighlighted ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`w-12 h-12 rounded-2xl font-bold text-lg flex items-center justify-center ${
                      step.isHighlighted
                        ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30"
                        : "bg-primary text-on-primary shadow-md"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="material-symbols-outlined text-3xl text-emerald-500 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-xl sm:text-2xl font-serif text-on-surface mb-3 font-semibold">
                  {step.title}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-emerald-600">
                <span>{step.tag}</span>
                {step.isHighlighted && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-slate-500 font-normal">
                    100% Satisfaction Guarantee
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
