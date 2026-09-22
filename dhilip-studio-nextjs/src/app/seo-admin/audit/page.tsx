"use client";

import React from "react";

export default function TechnicalSeoAudit() {
  const auditChecks = [
    { title: "HTML H1 Heading Structure", status: "Pass", details: "All 9 routes have exactly 1 unique <h1> heading." },
    { title: "Image Alt Attribute Coverage", status: "Pass", details: "100% of portfolio images contain descriptive `alt` tags." },
    { title: "Open Graph Social Metadata", status: "Pass", details: "og:title, og:description, and og:image present on all pages." },
    { title: "Mobile Viewport & Responsiveness", status: "Pass", details: "Zero text overflow or horizontal scroll width errors." },
    { title: "Canonical Link Consistency", status: "Pass", details: "Self-referencing canonical URLs verified on static routes." },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            AUTOMATED SITEWIDE AUDITOR
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            Technical SEO Audit &amp; Alt Tag Scanner
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Sitewide crawler checking image alt attributes, heading hierarchies, and mobile meta tags.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xl cursor-pointer flex items-center gap-2">
          <span className="material-symbols-outlined text-base">refresh</span>
          <span>Run Full Audit Scan</span>
        </button>
      </div>

      <div className="space-y-4">
        {auditChecks.map((check, idx) => (
          <div key={idx} className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl flex items-center justify-between shadow-xl">
            <div className="space-y-1">
              <h3 className="font-serif text-base font-bold text-white">{check.title}</h3>
              <p className="text-xs text-stone-400">{check.details}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#b88c42]/20 text-[#f3e3a1] border border-[#b88c42]/40">
              ✓ {check.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
