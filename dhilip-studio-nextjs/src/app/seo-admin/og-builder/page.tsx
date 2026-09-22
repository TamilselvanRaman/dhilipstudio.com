"use client";

import React, { useState } from "react";

export default function OgCardPreviewer() {
  const [ogTitle, setOgTitle] = useState("Dhilip Studio — Editorial Wedding Photography Chennai");
  const [ogDesc, setOgDesc] = useState("Premier candid wedding photographers in Chennai specializing in Brahmin Muhurtham rituals, pre-wedding films & milestone celebrations.");
  const [ogImage, setOgImage] = useState("/logo.png");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            SOCIAL SHARING &amp; OPEN GRAPH METADATA
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            Open Graph &amp; Social Card Previewer
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Preview live link preview cards for WhatsApp, Instagram, Facebook, and X (Twitter).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
          <h2 className="font-serif text-lg font-bold text-white border-b border-stone-800 pb-3">
            Open Graph Metadata Inputs
          </h2>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 font-mono">
              og:title
            </label>
            <input
              type="text"
              value={ogTitle}
              onChange={(e) => setOgTitle(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 font-mono">
              og:description
            </label>
            <textarea
              rows={3}
              value={ogDesc}
              onChange={(e) => setOgDesc(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 font-mono">
              og:image URL (Recommended 1200x630px)
            </label>
            <input
              type="text"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-xs text-[#f3e3a1] font-mono focus:outline-none"
            />
          </div>
        </div>

        {/* Live WhatsApp Card Mockup */}
        <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
          <h2 className="font-serif text-lg font-bold text-white border-b border-stone-800 pb-3 flex items-center justify-between">
            <span>WhatsApp Share Card Preview</span>
            <span className="text-[#f3e3a1] text-xs font-mono">Live Mockup</span>
          </h2>

          <div className="bg-[#0b141a] p-4 rounded-xl border border-stone-800 max-w-sm mx-auto shadow-2xl">
            <div className="bg-[#1f2c34] rounded-xl overflow-hidden border border-slate-700/60">
              <div className="h-36 bg-slate-900 flex items-center justify-center p-4">
                <img src={ogImage} alt="OG Preview" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-3 bg-[#182229] space-y-1">
                <h4 className="font-bold text-xs text-slate-100 leading-snug line-clamp-2">{ogTitle}</h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">{ogDesc}</p>
                <span className="text-[10px] font-mono text-slate-500 block uppercase">dhilipstudio.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
