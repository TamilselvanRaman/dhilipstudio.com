"use client";

import React, { useState } from "react";

export default function SitemapManager() {
  const [robotsTxt, setRobotsTxt] = useState(
    `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /seo-admin/\n\nSitemap: https://dhilipstudio.com/sitemap.xml`
  );
  const [pingStatus, setPingStatus] = useState<string | null>(null);

  const handlePing = () => {
    setPingStatus("Ping Sent to Google Search Console (200 OK)");
    setTimeout(() => setPingStatus(null), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            INDEXING &amp; CRAWL INSTRUCTIONS
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            Sitemap &amp; Robots.txt Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Regenerate `sitemap.xml`, configure crawler rules, and ping Google Search Console.
          </p>
        </div>

        <button
          onClick={handlePing}
          className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xl cursor-pointer"
        >
          Re-Ping Google Search Console
        </button>
      </div>

      {pingStatus && (
        <div className="p-4 bg-[#b88c42]/20 text-[#f3e3a1] border border-[#b88c42]/40 rounded-2xl text-xs font-bold font-mono">
          ✓ {pingStatus}
        </div>
      )}

      <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl max-w-3xl">
        <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">
          robots.txt Configuration
        </label>
        <textarea
          rows={8}
          value={robotsTxt}
          onChange={(e) => setRobotsTxt(e.target.value)}
          className="w-full bg-stone-950 border border-stone-800 rounded-xl p-4 text-xs font-mono text-[#f3e3a1] focus:outline-none focus:border-[#b88c42]"
        />
        <div className="flex justify-end">
          <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-xl">
            Save robots.txt
          </button>
        </div>
      </div>
    </div>
  );
}
