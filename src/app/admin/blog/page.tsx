"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { blogArticles, BlogArticle } from "@/data/blogData";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

export default function AdminBlogCMS() {
  const [articles, setArticles] = useState<BlogArticle[]>(blogArticles);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("MATERNITY SHOOT");
  const [coverImage, setCoverImage] = useState("/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg");
  const [excerpt, setExcerpt] = useState("");

  const handleOpenEdit = (art: BlogArticle) => {
    setSelectedArticle(art);
    setTitle(art.title);
    setSlug(art.slug);
    setCategory(art.category);
    setCoverImage(art.coverImage);
    setExcerpt(art.excerpt || "");
    setIsDrawerOpen(true);
  };

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    if (selectedArticle) {
      setArticles(
        articles.map((art) =>
          art.id === selectedArticle.id
            ? {
                ...art,
                title,
                cardTitle: title.toUpperCase(),
                slug,
                category,
                coverImage,
                excerpt,
              }
            : art
        )
      );
      setSavedMessage(`Article "${title}" updated live!`);
    } else {
      const created: BlogArticle = {
        id: String(Date.now()),
        slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title,
        cardTitle: title.toUpperCase(),
        excerpt: excerpt || "Comprehensive photography guide and insights...",
        category,
        date: "SEPT 23, 2026",
        readTime: "5 MIN READ",
        author: "Dhilip Kumar",
        coverImage,
        sections: [
          {
            paragraphs: [excerpt || title],
          },
        ],
      };
      setArticles([created, ...articles]);
      setSavedMessage(`New Article "${title}" published live!`);
    }

    setIsDrawerOpen(false);
    setTimeout(() => setSavedMessage(null), 4000);
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
      cell: (row) => <span className="font-bold text-slate-900 max-w-xs truncate block">{row.title}</span>,
    },
    {
      header: "Category",
      accessorKey: "category",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold">
          {row.category}
        </span>
      ),
    },
    {
      header: "Publish Date",
      accessorKey: "date",
      cell: (row) => <span className="font-mono text-slate-600 font-medium">{row.date}</span>,
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
          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors font-mono flex items-center gap-1 shadow-xs"
        >
          <span>Edit Article</span>
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
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
            CONTENT MARKETING &amp; JOURNAL ENGINE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Blog Article CMS &amp; SEO Engine
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Manage, write, and publish photography blog articles for dhilipstudio.com
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedArticle(null);
            setTitle("");
            setSlug("");
            setCategory("MATERNITY SHOOT");
            setCoverImage("/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg");
            setExcerpt("");
            setIsDrawerOpen(true);
          }}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0"
        >
          <span className="material-symbols-outlined text-base">add</span>
          <span>New Article</span>
        </button>
      </div>

      {savedMessage && (
        <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-3 rounded-2xl text-xs font-bold animate-pulse flex items-center gap-2 shadow-xs">
          <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span>
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Articles DataTable */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-slate-900">Published Blog Articles</h3>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            {articles.length} Articles Live
          </span>
        </div>

        <DataTable
          data={articles}
          columns={columns}
          searchPlaceholder="Search blog articles by title, category, or slug..."
          searchField="title"
        />
      </div>

      {/* SlideOver Drawer for Article Editing & Publishing */}
      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedArticle ? "Edit Article" : "Create New Blog Article"}
      >
        <form onSubmit={handleSaveArticle} className="space-y-4 text-xs font-sans text-slate-900">
          <div>
            <label className="block font-bold uppercase text-[10px] text-slate-600 mb-1 font-mono">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. How Professional Photographers Capture Beautiful Maternity Photos"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold uppercase text-[10px] text-slate-600 mb-1 font-mono">
              URL Slug Path *
            </label>
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-mono text-slate-500">
              <span>/blog/</span>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="maternity-photoshoot-chennai"
                className="flex-1 bg-transparent text-blue-600 font-bold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase text-[10px] text-slate-600 mb-1 font-mono">
              Category
            </label>
            <CustomDropdown
              value={category}
              onChange={(val) => setCategory(val)}
              theme="blue"
              options={[
                { value: "MATERNITY SHOOT", label: "MATERNITY SHOOT", icon: "child_care" },
                { value: "PRE-WEDDING SHOOT", label: "PRE-WEDDING SHOOT", icon: "favorite" },
                { value: "BRAHMIN RITUALS", label: "BRAHMIN RITUALS", icon: "auto_awesome" },
                { value: "CANDID HIGHLIGHTS", label: "CANDID HIGHLIGHTS", icon: "camera" },
              ]}
            />
          </div>

          <div>
            <ImageUploadPicker
              label="Cover Image Asset (Click or Drag & Drop)"
              value={coverImage}
              onChange={(val) => setCoverImage(val)}
            />
          </div>

          <div>
            <label className="block font-bold uppercase text-[10px] text-slate-600 mb-1 font-mono">
              Article Excerpt Summary
            </label>
            <textarea
              rows={4}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short introductory excerpt..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
            >
              <span className="material-symbols-outlined text-sm">publish</span>
              <span>{selectedArticle ? "Update Article" : "Publish Article"}</span>
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
