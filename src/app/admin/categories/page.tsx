"use client";

import React from "react";

export default function CategoryManager() {
  const categories = [
    { id: "CAT-1", name: "Sacred Muhurtham", slug: "sacred-muhurtham", itemsCount: 180 },
    { id: "CAT-2", name: "Pre-Wedding Beach Films", slug: "pre-wedding", itemsCount: 95 },
    { id: "CAT-3", name: "Candid Expressions", slug: "candid-wedding", itemsCount: 140 },
    { id: "CAT-4", name: "Maternity & Milestone", slug: "maternity-milestone", itemsCount: 85 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            PORTFOLIO CLASSIFICATIONS
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Category Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Manage photography categories, filter tags, and URL slugs.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#f3e3a1]">{cat.id}</span>
              <span className="text-xs font-mono text-stone-400">{cat.slug}</span>
            </div>
            <h3 className="font-serif text-base font-bold text-white">{cat.name}</h3>
            <p className="text-xs text-stone-400">{cat.itemsCount} Monographs</p>
            <button className="w-full mt-2 py-2 rounded-xl bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-bold transition-all">
              Edit Category
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
