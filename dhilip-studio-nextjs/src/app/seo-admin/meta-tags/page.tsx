"use client";

import React, { useState } from "react";
import { initialMetaTags, MetaTagEntry } from "@/lib/adminData";

export default function MetaTagsEditor() {
  const [tags, setTags] = useState<MetaTagEntry[]>(initialMetaTags);
  const [selectedRoute, setSelectedRoute] = useState<string>("/");
  const [saved, setSaved] = useState(false);

  const currentEntry = tags.find((t) => t.routePath === selectedRoute) || tags[0];

  const handleUpdate = (field: keyof MetaTagEntry, value: string) => {
    setTags((prev) =>
      prev.map((t) =>
        t.routePath === selectedRoute ? { ...t, [field]: value } : t
      )
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            SEARCH ENGINE OPTIMIZATION
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            Meta Title &amp; Description Editor
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Customize HTML Title Tags, Meta Descriptions, and Canonical URLs with live character counts.
          </p>
        </div>

        {saved && (
          <span className="px-4 py-2 bg-[#b88c42]/20 text-[#f3e3a1] border border-[#b88c42]/40 rounded-xl text-xs font-bold animate-pulse">
            ✓ Meta Tags Updated &amp; Saved!
          </span>
        )}
      </div>

      {/* Route Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {tags.map((t) => (
          <button
            key={t.routePath}
            onClick={() => setSelectedRoute(t.routePath)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedRoute === t.routePath
                ? "bg-[#b88c42] text-stone-950 font-bold shadow-md"
                : "bg-[#1b1c1c] text-stone-300 border border-stone-800 hover:bg-stone-800"
            }`}
          >
            {t.routePath} ({t.pageName})
          </button>
        ))}
      </div>

      {/* Editor Form */}
      <form onSubmit={handleSave} className="bg-[#1b1c1c] border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl max-w-4xl">
        <div className="border-b border-stone-800 pb-4">
          <h2 className="font-serif text-xl font-bold text-white">
            Target Route: <span className="text-[#f3e3a1] font-mono">{currentEntry.routePath}</span> ({currentEntry.pageName})
          </h2>
        </div>

        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">
                HTML Meta Title Tag
              </label>
              <span className={`text-[11px] font-mono font-bold ${currentEntry.metaTitle.length > 60 ? "text-amber-400" : "text-[#f3e3a1]"}`}>
                {currentEntry.metaTitle.length} / 60 chars
              </span>
            </div>
            <input
              type="text"
              value={currentEntry.metaTitle}
              onChange={(e) => handleUpdate("metaTitle", e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-sm text-white focus:outline-none font-sans"
            />
            <p className="text-[11px] text-stone-500 mt-1">
              Google search result title snippet (optimal length: 50-60 characters).
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">
                Meta Description
              </label>
              <span className={`text-[11px] font-mono font-bold ${currentEntry.metaDescription.length > 160 ? "text-amber-400" : "text-[#f3e3a1]"}`}>
                {currentEntry.metaDescription.length} / 160 chars
              </span>
            </div>
            <textarea
              rows={3}
              value={currentEntry.metaDescription}
              onChange={(e) => handleUpdate("metaDescription", e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-sm text-white focus:outline-none font-sans"
            />
            <p className="text-[11px] text-stone-500 mt-1">
              Search engine result snippet (optimal length: 140-160 characters).
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 font-mono">
              Canonical URL
            </label>
            <input
              type="text"
              value={currentEntry.canonicalUrl}
              onChange={(e) => handleUpdate("canonicalUrl", e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-sm text-[#f3e3a1] font-mono focus:outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-stone-800 flex justify-end">
          <button
            type="submit"
            className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-xl cursor-pointer"
          >
            Save &amp; Update Meta Tags
          </button>
        </div>
      </form>
    </div>
  );
}
