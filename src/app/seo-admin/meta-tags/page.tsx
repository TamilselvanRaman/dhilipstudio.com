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

  // Helper score calculation
  const getScore = (entry: MetaTagEntry) => {
    let points = 100;
    if (entry.metaTitle.length < 50 || entry.metaTitle.length > 60) points -= 20;
    if (entry.metaDescription.length < 140 || entry.metaDescription.length > 160) points -= 20;
    if (!entry.focusKeyword) points -= 15;
    return points;
  };

  const score = getScore(currentEntry);

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            ON-PAGE META TAGS &amp; SNIPPETS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Meta Title &amp; Description Editor
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Customize HTML Title tags (50-60 chars ideal), Meta descriptions (150-160 chars), focus keywords, and canonical URLs.
          </p>
        </div>

        {saved && (
          <span className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold animate-pulse">
            ✓ Meta Tags Updated!
          </span>
        )}
      </div>

      {/* Route Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {tags.map((t) => (
          <button
            key={t.routePath}
            onClick={() => setSelectedRoute(t.routePath)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedRoute === t.routePath
                ? "bg-blue-600 text-white font-bold shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {t.routePath} ({t.pageName})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editor Form */}
        <form onSubmit={handleSave} className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">TARGET ROUTE</span>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {currentEntry.routePath} — {currentEntry.pageName}
              </h3>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
              score >= 80 ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              SEO Score: {score}/100
            </span>
          </div>

          <div className="space-y-4 text-xs font-sans">
            {/* Meta Title */}
            <div>
              <div className="flex items-center justify-between mb-1 font-mono text-[11px]">
                <label className="text-slate-600 uppercase font-bold">HTML Meta Title Tag</label>
                <span className={`font-bold ${
                  currentEntry.metaTitle.length >= 50 && currentEntry.metaTitle.length <= 60
                    ? "text-emerald-700"
                    : "text-amber-700"
                }`}>
                  {currentEntry.metaTitle.length} / 60 chars (Ideal: 50-60)
                </span>
              </div>
              <input
                type="text"
                value={currentEntry.metaTitle}
                onChange={(e) => handleUpdate("metaTitle", e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3 py-2 text-xs text-slate-900 font-sans focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {/* Meta Description */}
            <div>
              <div className="flex items-center justify-between mb-1 font-mono text-[11px]">
                <label className="text-slate-600 uppercase font-bold">Meta Description Snippet</label>
                <span className={`font-bold ${
                  currentEntry.metaDescription.length >= 140 && currentEntry.metaDescription.length <= 160
                    ? "text-emerald-700"
                    : "text-amber-700"
                }`}>
                  {currentEntry.metaDescription.length} / 160 chars (Ideal: 140-160)
                </span>
              </div>
              <textarea
                rows={3}
                value={currentEntry.metaDescription}
                onChange={(e) => handleUpdate("metaDescription", e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3 py-2 text-xs text-slate-900 font-sans focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {/* Focus Keyword & Canonical URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Focus Target Keyword</label>
                <input
                  type="text"
                  value={currentEntry.focusKeyword || ""}
                  onChange={(e) => handleUpdate("focusKeyword", e.target.value)}
                  placeholder="e.g. Brahmin Wedding Photography"
                  className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Canonical URL</label>
                <input
                  type="text"
                  value={currentEntry.canonicalUrl}
                  onChange={(e) => handleUpdate("canonicalUrl", e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3 py-2 text-xs text-blue-600 font-mono focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
            >
              Save &amp; Update Meta Tags
            </button>
          </div>
        </form>

        {/* Live Search Engine Snippet Preview Box */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
            <h3 className="font-serif font-bold text-sm text-slate-900">Google SERP Live Snippet</h3>
            <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Desktop View</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl space-y-1 text-xs border border-slate-200">
            <div className="text-[11px] text-slate-500 font-mono truncate">{currentEntry.canonicalUrl}</div>
            <div className="text-base text-blue-700 font-medium font-sans leading-tight line-clamp-1 hover:underline cursor-pointer">
              {currentEntry.metaTitle}
            </div>
            <p className="text-xs text-slate-600 leading-normal line-clamp-2">{currentEntry.metaDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
