"use client";

import React, { useState } from "react";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { initialPackages, PricingPackage } from "@/lib/adminData";

export default function PricingManager() {
  const [packages, setPackages] = useState<PricingPackage[]>(initialPackages);
  const [selectedQuotePkg, setSelectedQuotePkg] = useState<PricingPackage | null>(null);
  const [clientQuoteName, setClientQuoteName] = useState("Jane & Vishal");

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            TIERED PRICING &amp; PDF QUOTES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Pricing Packages &amp; Quotes Generator
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Configure Silver, Gold, Platinum pricing tiers and generate branded PDF quotes for prospective clients.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer">
          <span className="material-symbols-outlined text-base">add</span>
          <span>+ Add Package Tier</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white border rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between relative transition-all ${
              pkg.popular ? "border-blue-600 ring-2 ring-blue-600/20 shadow-md" : "border-slate-200 hover:border-blue-400"
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                MOST POPULAR
              </span>
            )}

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600">{pkg.tier} Tier</span>
                <span className="text-[10px] font-mono text-slate-400">{pkg.id}</span>
              </div>

              <h3 className="font-serif text-lg font-bold text-slate-900">{pkg.title}</h3>
              <div className="font-mono text-2xl font-bold text-blue-600">{pkg.price}</div>

              <ul className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-200">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedQuotePkg(pkg)}
              className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              <span>Generate PDF Quote</span>
            </button>
          </div>
        ))}
      </div>

      {/* PDF Quote Generator Drawer */}
      {selectedQuotePkg && (
        <SlideOverDrawer
          isOpen={!!selectedQuotePkg}
          onClose={() => setSelectedQuotePkg(null)}
          title={`Generate PDF Quote — ${selectedQuotePkg.tier}`}
          subtitle="Print-ready branded quote with studio letterhead."
        >
          <div className="space-y-4 font-sans text-xs">
            <div>
              <label className="block text-slate-600 text-[11px] font-mono uppercase font-bold mb-1">Prepared For (Client Name)</label>
              <input
                type="text"
                value={clientQuoteName}
                onChange={(e) => setClientQuoteName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {/* Print Mockup Box */}
            <div className="p-5 bg-white text-slate-900 rounded-2xl space-y-3 shadow-md border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-serif font-bold text-base text-slate-900">DHILIP STUDIO</h4>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Chennai Wedding Photography</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-blue-600">QUOTE #DS-Q8821</span>
              </div>

              <div>
                <span className="text-[9px] font-mono text-slate-500 block">CLIENT QUOTE</span>
                <span className="font-serif font-bold text-sm text-slate-900">{clientQuoteName}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-serif font-bold text-xs text-slate-900">{selectedQuotePkg.title}</span>
                <div className="font-mono text-sm font-bold text-blue-600">{selectedQuotePkg.price}</div>
                <ul className="text-[10px] text-slate-600 space-y-0.5 pt-1">
                  {selectedQuotePkg.inclusions.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono pt-1">
                Valid for 15 Days · GST 18% Extra · Porur, Chennai
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-base">print</span>
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </SlideOverDrawer>
      )}
    </div>
  );
}
