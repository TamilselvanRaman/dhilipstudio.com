"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { blogArticles, BlogArticle } from "@/data/blogData";

export default function SeoBlogCMS() {
  const [articles, setArticles] = useState<BlogArticle[]>(blogArticles);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("MATERNITY SHOOT");
  const [focusKeyword, setFocusKeyword] = useState("maternity photoshoot Chennai");
  const [coverAlt, setCoverAlt] = useState("Maternity photoshoot Chennai mother portrait");
  const [coverImage, setCoverImage] = useState("/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg");

  const handleOpenEdit = (art: BlogArticle) => {
    setSelectedArticle(art);
    setTitle(art.title);
    setSlug(art.slug);
    setCategory(art.category);
    setIsDrawerOpen(true);
  };

  const columns: Column<BlogArticle>[] = [
    {
      header: "Slug / Path",
      accessorKey: "slug",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">/blog/{row.slug}</span>,
    },
    {
      header: "Article Title",
      accessorKey: "title",
      cell: (row) => <span className="font-semibold text-slate-900 max-w-xs truncate block">{row.title}</span>,
    },
    {
      header: "Category",
      accessorKey: "category",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
          {row.category}
        </span>
      ),
    },
    {
      header: "Publish Date",
      accessorKey: "date",
      cell: (row) => <span className="font-mono text-slate-500">{row.date}</span>,
    },
    {
      header: "Author",
      accessorKey: "author",
      cell: (row) => <span className="font-mono text-slate-700">{row.author}</span>,
    },
    {
      header: "Status",
      cell: () => <StatusPill status="Active" size="sm" />,
    },
    {
      header: "Actions",
      cell: (row) => (
        <button
          onClick={() => handleOpenEdit(row)}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white border border-slate-200 text-blue-600 text-xs transition-colors font-mono font-bold cursor-pointer"
        >
          Edit &amp; SEO Audit &rarr;
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            CONTENT MARKETING &amp; BLOG ENGINE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Blog Article CMS &amp; SEO Validator
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Write, edit, and optimize articles with live focus keyword density checking, mandatory alt-text, and heading structure audits.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedArticle(null);
            setTitle("New Photography Guide");
            setSlug("new-photography-guide");
            setIsDrawerOpen(true);
          }}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
          <span>+ Create Article</span>
        </button>
      </div>

      <DataTable
        data={articles}
        columns={columns}
        searchPlaceholder="Search articles by title, slug, category..."
        searchField="title"
      />

      {/* Article SEO Audit & Editor Drawer */}
      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedArticle ? `Edit Article — ${selectedArticle.slug}` : "Create New Blog Article"}
        subtitle="Live SEO Sidebar: Focus keyword density, heading hierarchy, and mandatory alt-text."
      >
        <div className="space-y-4 text-xs font-sans">
          {/* SEO Score Panel */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-slate-900">SEO Content Audit</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                SCORE: 95/100
              </span>
            </div>
            <ul className="text-[11px] space-y-1 text-slate-700 font-mono">
              <li className="text-emerald-700 font-semibold">✓ Focus keyword in Title Tag</li>
              <li className="text-emerald-700 font-semibold">✓ Focus keyword in first 100 words</li>
              <li className="text-emerald-700 font-semibold">✓ Heading H1 &amp; H2 structure valid</li>
              <li className="text-emerald-700 font-semibold">✓ Cover Image Alt Text set</li>
            </ul>
          </div>

          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Article Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 font-sans"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">URL Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-blue-600 font-mono focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Focus Keyword</label>
              <input
                type="text"
                value={focusKeyword}
                onChange={(e) => setFocusKeyword(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-blue-600 font-mono focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <ImageUploadPicker
              accentColor="blue"
              label="Article Cover Image (Click or Drag & Drop)"
              value={coverImage}
              onChange={setCoverImage}
            />
          </div>

          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Mandatory Image Alt Text (SEO)</label>
            <input
              type="text"
              value={coverAlt}
              onChange={(e) => setCoverAlt(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 font-sans"
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              Publish Article
            </button>
          </div>
        </div>
      </SlideOverDrawer>
    </div>
  );
}
