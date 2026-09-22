"use client";

import React from "react";
import Link from "next/link";
import { initialMetaTags, initialKeywords } from "@/lib/adminData";

export default function SeoDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            TECHNICAL SEO &amp; MARKETING DASHBOARD
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            SEO Health &amp; Growth Overview
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Monitor Google indexation, meta title tags, JSON-LD schemas, and keyword ranking matrices.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/seo-admin/meta-tags"
            className="inline-flex items-center gap-2 bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-xl"
          >
            <span className="material-symbols-outlined text-base">label</span>
            <span>Meta Tags Editor</span>
          </Link>
          <Link
            href="/seo-admin/blog"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-[#f3e3a1] font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl border border-[#b88c42]/40 transition-all"
          >
            <span className="material-symbols-outlined text-base">article</span>
            <span>Blog CMS</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono">
              SEO Health Score
            </span>
            <span className="w-8 h-8 rounded-lg bg-[#b88c42]/20 text-[#f3e3a1] flex items-center justify-center font-bold text-xs font-mono border border-[#b88c42]/30">
              98%
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-[#f3e3a1]">Grade A+</p>
          <p className="text-[11px] text-[#b88c42] font-medium">All 9 pages optimized</p>
        </div>

        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono">
              Indexed Routes
            </span>
            <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <span className="material-symbols-outlined text-lg">check_circle</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">{initialMetaTags.length} / 9</p>
          <p className="text-[11px] text-stone-400 font-medium">Google Search Console active</p>
        </div>

        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono">
              Target Keywords #1-#3
            </span>
            <span className="w-8 h-8 rounded-lg bg-[#b88c42]/20 text-[#f3e3a1] flex items-center justify-center border border-[#b88c42]/30">
              <span className="material-symbols-outlined text-lg">key</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">{initialKeywords.length} Terms</p>
          <p className="text-[11px] text-amber-300 font-medium">Top 3 local search rank</p>
        </div>

        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono">
              JSON-LD Schemas
            </span>
            <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <span className="material-symbols-outlined text-lg">code</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">4 Active</p>
          <p className="text-[11px] text-stone-400 font-medium">LocalBusiness, Event, Article</p>
        </div>
      </div>

      {/* Meta Tag Audit Summary */}
      <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-white">Page-by-Page Meta Status</h2>
            <p className="text-xs text-stone-400 mt-0.5">Meta Titles, Descriptions &amp; Canonical URLs</p>
          </div>
          <Link
            href="/seo-admin/meta-tags"
            className="text-xs font-bold text-[#f3e3a1] hover:underline flex items-center gap-1 font-mono"
          >
            <span>Open Meta Tag Editor</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/90 uppercase tracking-wider text-stone-400 text-[10px] font-mono border-b border-stone-800">
              <tr>
                <th className="p-4">Route Path</th>
                <th className="p-4">Page Name</th>
                <th className="p-4">Meta Title</th>
                <th className="p-4">Canonical URL</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {initialMetaTags.map((tag, idx) => (
                <tr key={idx} className="hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{tag.routePath}</td>
                  <td className="p-4 font-semibold text-white">{tag.pageName}</td>
                  <td className="p-4 max-w-sm truncate text-stone-300">{tag.metaTitle}</td>
                  <td className="p-4 font-mono text-stone-400 text-[11px]">{tag.canonicalUrl}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b88c42]/20 text-[#f3e3a1] border border-[#b88c42]/40">
                      {tag.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
