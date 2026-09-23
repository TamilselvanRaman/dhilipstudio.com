"use client";

import React from "react";

interface SeoStatCardProps {
  title: string;
  value: string | number;
  badgeText?: string;
  badgeType?: "tech" | "warning" | "success" | "neutral";
  icon: string;
  subtext?: string;
}

export function SeoStatCard({
  title,
  value,
  badgeText,
  badgeType = "tech",
  icon,
  subtext,
}: SeoStatCardProps) {
  const getBadgeStyle = () => {
    switch (badgeType) {
      case "tech":
        return "bg-[#4C9AFF]/15 text-[#4C9AFF] border-[#4C9AFF]/30";
      case "success":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "warning":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default:
        return "bg-stone-500/10 text-stone-400 border-stone-500/20";
    }
  };

  return (
    <div className="bg-[#17171A] border border-[#2A2A2E] rounded-xl p-5 hover:border-[#4C9AFF]/40 transition-all duration-300 shadow-sm relative group overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#4C9AFF]/5 rounded-full blur-2xl group-hover:bg-[#4C9AFF]/10 transition-all pointer-events-none" />

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-[#9A9A9E] uppercase tracking-wider">
          {title}
        </span>
        <div className="w-10 h-10 rounded-lg bg-[#1F1F23] border border-[#2A2A2E] flex items-center justify-center text-[#4C9AFF] shadow-inner">
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-mono text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight tabular-nums">
          {value}
        </h3>
        {badgeText && (
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-semibold font-mono px-2 py-0.5 rounded-full border ${getBadgeStyle()}`}
          >
            <span>{badgeText}</span>
          </span>
        )}
      </div>

      {subtext && (
        <p className="text-[11px] text-[#9A9A9E] mt-2 font-sans truncate">
          {subtext}
        </p>
      )}
    </div>
  );
}
