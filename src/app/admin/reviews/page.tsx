"use client";

import React from "react";
import { reviewsList } from "@/data/studioData";

export default function ClientReviewsManager() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            TESTIMONIALS &amp; REVIEWS
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Client Reviews Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Curate ratings, client quotes, and homepage coverflow feature flags.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Add Client Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsList.map((rev) => (
          <div key={rev.id} className="bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover border border-[#b88c42]" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">{rev.author}</h3>
                  <span className="text-[11px] text-stone-400">{rev.location}</span>
                </div>
              </div>
              <div className="flex text-amber-400 text-sm">
                {"★".repeat(5)}
              </div>
            </div>

            <p className="text-xs text-stone-300 italic leading-relaxed">
              {rev.quote}
            </p>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">✓ Featured On Homepage</span>
              <button className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-semibold transition-all">
                Edit Testimonial
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
