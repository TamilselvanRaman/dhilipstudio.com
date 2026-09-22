"use client";

import React from "react";

export default function PricingManager() {
  const packages = [
    { id: "PKG-1", name: "Brahmin Sacred Muhurtham Package", price: "₹1,85,000", features: ["2 Days Coverage", "Full Candid Album", "Teaser Reel"] },
    { id: "PKG-[#PKG-2]", name: "Pre-Wedding Beach Film Package", price: "₹75,000", features: ["1 Day Beach Location", "4K Cinematic Film", "Drone Shots"] },
    { id: "PKG-3", name: "Grand Destination Wedding Package", price: "₹2,50,000", features: ["3 Days Complete Team", "2 Coffee Table Books", "Raw Footage"] },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            WEDDING PACKAGES
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Pricing Packages Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Configure pricing tiers, included services, and quote packages.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Add Package Tier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#f3e3a1]">{pkg.id}</span>
              <h3 className="font-serif text-lg font-bold text-white">{pkg.name}</h3>
              <p className="font-serif text-2xl font-bold text-[#b88c42]">{pkg.price}</p>
              <ul className="space-y-1.5 pt-2 text-xs text-stone-300">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#b88c42]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-bold transition-all">
              Edit Package Tier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
