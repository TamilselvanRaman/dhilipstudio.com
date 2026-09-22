"use client";

import React from "react";
import { initialKeywords } from "@/lib/adminData";

export default function KeywordRankTracker() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            LOCAL SEARCH PERFORMANCE
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            Keyword Target Matrix
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Track organic search rank positions for high-intent Chennai wedding photography terms.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xl cursor-pointer">
          + Add Target Keyword
        </button>
      </div>

      <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/90 uppercase tracking-wider text-stone-400 text-[10px] font-mono border-b border-stone-800">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Search Keyword Term</th>
                <th className="p-4">Target Page Route</th>
                <th className="p-4">Google Rank</th>
                <th className="p-4">Monthly Search Vol.</th>
                <th className="p-4">SEO Competition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {initialKeywords.map((kw) => (
                <tr key={kw.id} className="hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{kw.id}</td>
                  <td className="p-4 font-semibold text-white font-serif text-sm">{kw.keyword}</td>
                  <td className="p-4 font-mono text-stone-300">{kw.targetRoute}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#b88c42]/20 text-[#f3e3a1] font-bold text-xs border border-[#b88c42]/40">
                      <span>Rank #{kw.currentRank}</span>
                      <span className="text-[10px]">🏆</span>
                    </span>
                  </td>
                  <td className="p-4 font-mono text-stone-200">{kw.monthlySearchVolume.toLocaleString()} / mo</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {kw.difficulty}
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
