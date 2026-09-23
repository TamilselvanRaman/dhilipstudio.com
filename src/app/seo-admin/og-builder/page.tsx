"use client";

import React, { useState } from "react";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { initialOpenGraph, OpenGraphEntry } from "@/lib/adminData";

export default function OgCardPreviewer() {
  const [entries, setEntries] = useState<OpenGraphEntry[]>(initialOpenGraph);
  const [selectedRoute, setSelectedRoute] = useState<string>("/");
  const [platform, setPlatform] = useState<"whatsapp" | "facebook" | "twitter">("whatsapp");

  const currentOg = entries.find((e) => e.routePath === selectedRoute) || entries[0];

  const handleUpdate = (field: keyof OpenGraphEntry, value: string) => {
    setEntries((prev) =>
      prev.map((e) => (e.routePath === selectedRoute ? { ...e, [field]: value } : e))
    );
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            SOCIAL SHARING &amp; OPEN GRAPH PREVIEWS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Open Graph &amp; Social Card Previewer
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Customize `og:title`, `og:description`, and `og:image` (1200x630px guide) with real-time WhatsApp, Facebook, and Twitter card rendering.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {entries.map((e) => (
          <button
            key={e.routePath}
            onClick={() => setSelectedRoute(e.routePath)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              selectedRoute === e.routePath
                ? "bg-blue-600 text-white font-bold shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {e.routePath} ({e.pageName})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">OPEN GRAPH OVERRIDES</span>
            <h3 className="font-serif text-lg font-bold text-slate-900">{currentOg.pageName} ({currentOg.routePath})</h3>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">og:title Override</label>
              <input
                type="text"
                value={currentOg.ogTitle}
                onChange={(e) => handleUpdate("ogTitle", e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">og:description Override</label>
              <textarea
                rows={3}
                value={currentOg.ogDescription}
                onChange={(e) => handleUpdate("ogDescription", e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <ImageUploadPicker
                accentColor="blue"
                label="og:image Asset (1200x630 Guide - Click or Drag & Drop)"
                value={currentOg.ogImage}
                onChange={(val) => handleUpdate("ogImage", val)}
              />
            </div>
          </div>
        </div>

        {/* Live Social Card Mockups */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-serif font-bold text-sm text-slate-900">Social Preview Card</h3>
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              {(["whatsapp", "facebook", "twitter"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                    platform === p ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Social Card Graphic */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white text-slate-900 space-y-0 shadow-md">
              <div className="h-44 bg-slate-100 overflow-hidden relative">
                <img src={currentOg.ogImage} alt="OG Card" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 bg-white space-y-1 border-t border-slate-200">
                <span className="text-[10px] font-mono text-blue-600 block uppercase font-bold">dhilipstudio.com</span>
                <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{currentOg.ogTitle}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">{currentOg.ogDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
