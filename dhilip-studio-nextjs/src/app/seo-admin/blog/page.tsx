"use client";

import React from "react";
import { blogArticles } from "@/data/blogData";

export default function SeoBlogCMS() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            SEO ARTICLE STRATEGY &amp; CONTENT CMS
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            Blog &amp; Article Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Write, edit, and publish SEO keyword-targeted articles for Chennai wedding searches.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xl cursor-pointer flex items-center gap-2">
          <span className="material-symbols-outlined text-base">add_circle</span>
          <span>+ Create New Article</span>
        </button>
      </div>

      <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/90 uppercase tracking-wider text-stone-400 text-[10px] font-mono border-b border-stone-800">
              <tr>
                <th className="p-4">Slug</th>
                <th className="p-4">Article Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Publish Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {blogArticles.map((post) => (
                <tr key={post.id} className="hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{post.slug}</td>
                  <td className="p-4 font-semibold text-white max-w-sm leading-snug">{post.cardTitle}</td>
                  <td className="p-4 font-medium text-stone-300">Wedding Tips</td>
                  <td className="p-4 font-mono text-stone-400">2026-09-15</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b88c42]/20 text-[#f3e3a1] border border-[#b88c42]/40">
                      Published
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-semibold border border-stone-700 transition-all">
                      Edit Article
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
