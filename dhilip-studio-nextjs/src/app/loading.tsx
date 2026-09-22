"use client";

import React from "react";

export default function Loading() {
  const dots = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbfa] select-none">
      <div className="relative w-16 h-16">
        {dots.map((_, index) => {
          const angle = index * 30;

          return (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-[#b88c42]"
              style={{
                transform: `rotate(${angle}deg) translateY(-16px)`,
                transformOrigin: "0 16px",
                animation: "dotPulse 1.2s linear infinite",
                animationDelay: `${index * 0.1}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}