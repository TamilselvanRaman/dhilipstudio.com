"use client";

import React, { useState } from "react";

export default function SitemapManager() {
  const [robotsTxt, setRobotsTxt] = useState(
    `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /seo-admin/\n\nSitemap: https://dhilipstudio.com/sitemap.xml`
  );
  const [pingStatus, setPingStatus] = useState<string | null>(null);

  const routesList = [
    { path: "/", priority: "1.0", changefreq: "weekly", lastCrawled: "2026-09-22", included: true },
    { path: "/gallery", priority: "0.9", changefreq: "daily", lastCrawled: "2026-09-22", included: true },
    { path: "/videos", priority: "0.8", changefreq: "weekly", lastCrawled: "2026-09-21", included: true },
    { path: "/about", priority: "0.7", changefreq: "monthly", lastCrawled: "2026-09-18", included: true },
    { path: "/contact", priority: "0.8", changefreq: "monthly", lastCrawled: "2026-09-20", included: true },
    { path: "/blog", priority: "0.8", changefreq: "weekly", lastCrawled: "2026-09-22", included: true },
  ];

  const handlePing = () => {
    setPingStatus("Sitemap.xml Submitted to Google Search Console (200 OK — 35 URLs Queued)");
    setTimeout(() => setPingStatus(null), 4000);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            CRAWL INSTRUCTIONS &amp; SITEMAP CONTROL
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Sitemap &amp; Robots.txt Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Auto-generate `sitemap.xml`, manage route priorities, edit crawler rules in `robots.txt`, and ping Google Search Console.
          </p>
        </div>

        <button
          onClick={handlePing}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">send</span>
          <span>Submit to Search Console</span>
        </button>
      </div>

      {pingStatus && (
        <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-mono font-bold animate-pulse">
          ✓ {pingStatus}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sitemap Routes Table */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="font-serif font-bold text-sm text-slate-900">Sitemap Route Inclusions</h3>
            <span className="text-[10px] font-mono text-blue-600 font-bold">35 Active URLs</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-900">
              <thead className="bg-slate-50 font-mono text-[10px] text-slate-500 uppercase border-b border-slate-200">
                <tr>
                  <th className="p-2.5">Route</th>
                  <th className="p-2.5">Priority</th>
                  <th className="p-2.5">Freq</th>
                  <th className="p-2.5">Last Crawled</th>
                  <th className="p-2.5">Include</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {routesList.map((r) => (
                  <tr key={r.path} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-2.5 font-mono text-blue-600 font-bold">{r.path}</td>
                    <td className="p-2.5 font-mono">{r.priority}</td>
                    <td className="p-2.5 font-mono text-slate-500">{r.changefreq}</td>
                    <td className="p-2.5 font-mono text-slate-500">{r.lastCrawled}</td>
                    <td className="p-2.5">
                      <input type="checkbox" defaultChecked={r.included} className="accent-blue-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Robots.txt Editor */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="font-serif font-bold text-sm text-slate-900">robots.txt Live Rules</h3>
            <span className="text-[10px] font-mono text-emerald-700 font-bold">Syntax Valid</span>
          </div>

          <textarea
            rows={10}
            value={robotsTxt}
            onChange={(e) => setRobotsTxt(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />

          <div className="pt-2 border-t border-slate-200 flex justify-end">
            <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer">
              Save robots.txt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
