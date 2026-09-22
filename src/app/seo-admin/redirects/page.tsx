"use client";

import React from "react";

export default function RedirectsManager() {
  const redirects = [
    { id: "R-1", source: "/blog/admin/news.php", destination: "/seo-admin/blog", type: "301 Permanent" },
    { id: "R-2", source: "/gallery-old.php", destination: "/gallery", type: "301 Permanent" },
    { id: "R-3", source: "/contact-us.html", destination: "/contact", type: "301 Permanent" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            LEGACY LINK PRESERVATION
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            301 URL Redirect Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Preserve SEO domain authority by redirecting legacy PHP/HTML URLs to new Next.js routes.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xl cursor-pointer">
          + Add 301 Redirect Rule
        </button>
      </div>

      <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/90 uppercase tracking-wider text-stone-400 text-[10px] font-mono border-b border-stone-800">
              <tr>
                <th className="p-4">Rule ID</th>
                <th className="p-4">Legacy Source URL</th>
                <th className="p-4">Destination Path</th>
                <th className="p-4">Redirect Type</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {redirects.map((r) => (
                <tr key={r.id} className="hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{r.id}</td>
                  <td className="p-4 font-mono text-stone-300">{r.source}</td>
                  <td className="p-4 font-mono text-[#f3e3a1]">{r.destination}</td>
                  <td className="p-4 font-bold text-[#b88c42]">{r.type}</td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-semibold border border-stone-700 transition-all">
                      Edit Rule
                    </button>
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
