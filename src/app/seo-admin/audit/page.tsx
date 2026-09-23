"use client";

import React, { useState } from "react";
import { initialTechnicalAudit, TechnicalAuditIssue } from "@/lib/adminData";

export default function TechnicalSeoAudit() {
  const [issues, setIssues] = useState<TechnicalAuditIssue[]>(initialTechnicalAudit);
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState<string | null>(null);

  const handleRunAudit = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanMessage("Full Sitewide Technical Scan Completed — 100% Core Web Vitals Passed!");
      setTimeout(() => setScanMessage(null), 4000);
    }, 2000);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            SITEWIDE TECHNICAL HEALTH &amp; CORE WEB VITALS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Technical Audit &amp; Performance Scanner
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Core Web Vitals (LCP, CLS, INP), missing alt-text reports, broken internal links, and mobile responsiveness scanner.
          </p>
        </div>

        <button
          onClick={handleRunAudit}
          disabled={isScanning}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer disabled:opacity-50"
        >
          <span className={`material-symbols-outlined text-base ${isScanning ? "animate-spin" : ""}`}>
            refresh
          </span>
          <span>{isScanning ? "Scanning..." : "Run Full Audit Scan"}</span>
        </button>
      </div>

      {scanMessage && (
        <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-mono font-bold animate-pulse">
          ✓ {scanMessage}
        </div>
      )}

      {/* Core Web Vitals Badges Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1 shadow-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">LCP (Largest Contentful Paint)</span>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-bold text-slate-900">1.2s</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">PASS</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1 shadow-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">CLS (Cumulative Layout Shift)</span>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-bold text-slate-900">0.01</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">PASS</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1 shadow-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">INP (Interaction to Next Paint)</span>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-bold text-slate-900">45ms</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">PASS</span>
          </div>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-3">
        <h3 className="font-serif font-bold text-base text-slate-900">Sitewide Audit Log &amp; Reports</h3>
        {issues.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs transition-all"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-serif font-bold text-slate-900">{item.title}</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-semibold">
                  {item.category}
                </span>
              </div>
              <span className="text-[11px] font-mono text-blue-600 font-bold">{item.affectedUrl}</span>
            </div>

            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
              item.severity === "Passed" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              {item.severity} · {item.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
