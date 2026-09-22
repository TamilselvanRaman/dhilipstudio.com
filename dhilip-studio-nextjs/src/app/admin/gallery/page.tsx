"use client";

import React from "react";
import { portfolioDetailsList } from "@/data/portfolioData";

export default function GalleryMonographManager() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            MONOGRAPH GALLERY ARCHIVE
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Photo Monograph Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Upload, tag, feature, and edit candid photography monographs across portfolio sections.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer flex items-center gap-2">
          <span className="material-symbols-outlined text-base">add_a_photo</span>
          <span>+ Upload New Monograph</span>
        </button>
      </div>

      {/* Grid of Monograph Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioDetailsList.map((item) => (
          <div key={item.id} className="bg-[#1b1c1c] border border-stone-800 rounded-2xl overflow-hidden shadow-xl flex flex-col group">
            <div className="relative h-48 w-full bg-stone-900 overflow-hidden">
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#f3e3a1] text-[10px] font-bold uppercase tracking-wider border border-white/20">
                {item.category}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b88c42]">
                  {item.edition} · {item.location}
                </span>
                <h3 className="font-serif text-lg font-bold text-white tracking-wide mt-0.5">
                  {item.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400">ID: {item.id}</span>
                <button className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-semibold transition-all">
                  Edit Monograph
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
