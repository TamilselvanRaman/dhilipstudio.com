"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { initialKeywords, TargetKeyword } from "@/lib/adminData";

export default function KeywordRankTracker() {
  const [keywords, setKeywords] = useState<TargetKeyword[]>(initialKeywords);

  const columns: Column<TargetKeyword>[] = [
    {
      header: "ID",
      accessorKey: "id",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.id}</span>,
    },
    {
      header: "Search Keyword Term",
      accessorKey: "keyword",
      cell: (row) => <span className="font-serif font-bold text-sm text-slate-900">{row.keyword}</span>,
    },
    {
      header: "Target Route",
      accessorKey: "targetRoute",
      cell: (row) => <span className="font-mono text-blue-600 font-semibold">{row.targetRoute}</span>,
    },
    {
      header: "Google Rank & Trend",
      cell: (row) => (
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
            Rank #{row.currentRank}
          </span>
          <span className="text-emerald-700 font-bold text-[11px]">
            ↑ {row.previousRank - row.currentRank >= 0 ? `+${row.previousRank - row.currentRank}` : row.previousRank - row.currentRank}
          </span>
        </div>
      ),
    },
    {
      header: "Google Maps 3-Pack",
      accessorKey: "localPackRank",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-[10px] font-bold border border-blue-200">
          Maps Rank #{row.localPackRank} 📍
        </span>
      ),
    },
    {
      header: "Monthly Vol",
      accessorKey: "monthlySearchVolume",
      cell: (row) => <span className="font-mono text-slate-700 font-semibold">{row.monthlySearchVolume.toLocaleString()} / mo</span>,
    },
    {
      header: "SEO Difficulty",
      accessorKey: "difficulty",
      cell: (row) => (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200">
          {row.difficulty}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            LOCAL PACK &amp; ORGANIC SEARCH RANKINGS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Tracked Keyword Rankings &amp; Competitor Matrix
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Monitor Google organic search ranks, Google Maps local 3-pack visibility, and competitor comparison positions.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer">
          <span className="material-symbols-outlined text-base">key</span>
          <span>+ Add Keyword</span>
        </button>
      </div>

      <DataTable
        data={keywords}
        columns={columns}
        searchPlaceholder="Search keywords by term, target route..."
        searchField="keyword"
      />
    </div>
  );
}
