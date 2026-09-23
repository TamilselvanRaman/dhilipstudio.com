"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { initialRedirects, RedirectRule } from "@/lib/adminData";

export default function RedirectsManager() {
  const [redirects, setRedirects] = useState<RedirectRule[]>(initialRedirects);

  const columns: Column<RedirectRule>[] = [
    {
      header: "Rule ID",
      accessorKey: "id",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.id}</span>,
    },
    {
      header: "Source Path",
      accessorKey: "sourcePath",
      cell: (row) => <span className="font-mono text-amber-700 font-semibold">{row.sourcePath}</span>,
    },
    {
      header: "Target Destination",
      accessorKey: "targetPath",
      cell: (row) => <span className="font-mono text-emerald-700 font-bold">{row.targetPath}</span>,
    },
    {
      header: "Redirect Type",
      accessorKey: "type",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
          HTTP {row.type} PERMANENT
        </span>
      ),
    },
    {
      header: "Hit Count",
      accessorKey: "hitCount",
      cell: (row) => <span className="font-mono text-slate-800 font-bold">{row.hitCount.toLocaleString()} Hits</span>,
    },
    {
      header: "Created Date",
      accessorKey: "createdAt",
      cell: (row) => <span className="font-mono text-slate-500">{row.createdAt}</span>,
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            LEGACY LINK EQUITY PRESERVATION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            301 URL Redirects &amp; Broken Link Detector
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Preserve domain authority by mapping legacy URLs to Next.js paths. Bulk import/export CSV support.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold hover:bg-slate-200 cursor-pointer">
            CSV Import / Export
          </button>

          <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer">
            <span className="material-symbols-outlined text-base">fork_right</span>
            <span>+ Add 301 Rule</span>
          </button>
        </div>
      </div>

      <DataTable
        data={redirects}
        columns={columns}
        searchPlaceholder="Search redirects by source or target path..."
        searchField="sourcePath"
      />
    </div>
  );
}
