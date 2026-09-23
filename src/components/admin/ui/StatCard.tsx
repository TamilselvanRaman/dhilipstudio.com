"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
  icon: string;
  subtext?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType = "increase",
  icon,
  subtext,
}: StatCardProps) {
  const getBadgeStyle = () => {
    switch (changeType) {
      case "increase":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "decrease":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      default:
        return "bg-stone-500/10 text-stone-400 border-stone-500/20";
    }
  };

  const getTrendIcon = () => {
    switch (changeType) {
      case "increase":
        return "trending_up";
      case "decrease":
        return "trending_down";
      default:
        return "horizontal_rule";
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 shadow-xs hover:shadow-md relative group overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
          {title}
        </span>
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-mono text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight tabular-nums">
          {value}
        </h3>
        {change && (
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-semibold font-mono px-2 py-0.5 rounded-full border ${getBadgeStyle()}`}
          >
            <span className="material-symbols-outlined text-xs">{getTrendIcon()}</span>
            <span>{change}</span>
          </span>
        )}
      </div>

      {subtext && (
        <p className="text-[11px] text-slate-500 mt-2 font-sans truncate">
          {subtext}
        </p>
      )}
    </div>
  );
}
