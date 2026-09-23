"use client";

import React, { useState } from "react";
import { initialCategories, CategoryItem } from "@/lib/adminData";

export default function CategoryManager() {
  const [categories, setCategories] = useState<CategoryItem[]>(initialCategories);

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            MASTER TAXONOMY &amp; TAGS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Master Category Taxonomy
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Manage shoot classification categories across Gallery, Blog, and Pricing packages.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer">
          <span className="material-symbols-outlined text-base">category</span>
          <span>+ Add Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 space-y-3 shadow-xs transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-600">{cat.id}</span>
              <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 font-semibold">
                /{cat.slug}
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-slate-900">{cat.name}</h3>
            <p className="text-xs text-slate-500 font-sans">{cat.description}</p>
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>{cat.count} Monographs Linked</span>
              <button className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer">Edit &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
