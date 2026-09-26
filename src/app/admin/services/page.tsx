"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { legacyServicesList, ServiceDetailItem } from "@/data/servicesData";

export default function AdminServicesCMS() {
  const [services, setServices] = useState<ServiceDetailItem[]>(legacyServicesList);
  const [selectedService, setSelectedService] = useState<ServiceDetailItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  // Form Editing State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("WEDDING");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [coverImage, setCoverImage] = useState("/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp");
  const [paragraphsText, setParagraphsText] = useState("");
  const [bulletsText, setBulletsText] = useState("");

  const handleOpenEdit = (svc: ServiceDetailItem) => {
    setSelectedService(svc);
    setTitle(svc.title);
    setSlug(svc.slug);
    setCategory(svc.category);
    setMetaTitle(svc.metaTitle || svc.title);
    setMetaDescription(svc.metaDescription || "");
    setCanonicalUrl(svc.canonicalUrl || `https://dhilipstudio.com/${svc.slug}.php`);
    setCoverImage(svc.coverImage);
    setParagraphsText((svc.paragraphs || []).join("\n\n"));
    setBulletsText((svc.bullets || []).join("\n"));
    setIsDrawerOpen(true);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !selectedService) return;

    const updatedParagraphs = paragraphsText.split("\n\n").map((p) => p.trim()).filter(Boolean);
    const updatedBullets = bulletsText.split("\n").map((b) => b.trim()).filter(Boolean);

    setServices(
      services.map((svc) =>
        svc.id === selectedService.id
          ? {
              ...svc,
              title,
              slug,
              category,
              metaTitle,
              metaDescription,
              canonicalUrl,
              coverImage,
              paragraphs: updatedParagraphs,
              bullets: updatedBullets,
            }
          : svc
      )
    );

    setSavedMessage(`Service "${title}" updated live!`);
    setIsDrawerOpen(false);
    setTimeout(() => setSavedMessage(null), 4000);
  };

  const columns: Column<ServiceDetailItem>[] = [
    {
      header: "Service Slug",
      accessorKey: "slug",
      cell: (row) => (
        <span className="font-mono text-blue-600 font-bold text-xs">/services/{row.slug}</span>
      ),
    },
    {
      header: "Service Page Title",
      accessorKey: "title",
      cell: (row) => (
        <span className="font-bold text-slate-900 max-w-xs truncate block">{row.title}</span>
      ),
    },
    {
      header: "Category",
      accessorKey: "category",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold uppercase">
          {row.category}
        </span>
      ),
    },
    {
      header: "Paragraphs",
      cell: (row) => (
        <span className="text-xs font-mono font-semibold text-slate-600">
          {row.paragraphs ? row.paragraphs.length : 0} Sections
        </span>
      ),
    },
    {
      header: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleOpenEdit(row)}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Edit Page Content
          </button>
          <a
            href={`/services/${row.slug}`}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
          >
            Preview ↗
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            WEBSITE CONTENT MANAGEMENT SYSTEM
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Service Pages CMS & Content Editor
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Manage all 8 specialized service landing pages, update headings, body paragraphs, meta titles, and canonical URLs.
          </p>
        </div>
      </div>

      {savedMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between shadow-xs animate-pulse">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">check_circle</span>
            <span>{savedMessage}</span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider bg-emerald-200/50 px-2 py-0.5 rounded">
            Live Saved
          </span>
        </div>
      )}

      {/* Services Table */}
      <DataTable
        data={services}
        columns={columns}
        searchPlaceholder="Search service pages by title or category..."
        searchField="title"
      />

      {/* Slide Over Drawer for Editing Service Page */}
      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedService ? `Edit Service: ${selectedService.title}` : "Edit Service"}
      >
        <form onSubmit={handleSaveService} className="space-y-5 text-xs font-sans">
          <div>
            <label className="block text-slate-700 font-bold mb-1">Page Title (H1)</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none font-semibold text-slate-900"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-bold mb-1">URL Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-xs focus:border-blue-600 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value.toUpperCase())}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 uppercase font-mono text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Cover Image</label>
            <ImageUploadPicker
              value={coverImage}
              onChange={(url: string) => setCoverImage(url)}
              label="Select Header / Banner Image"
            />
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-3">
            <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider block">
              SEO &amp; METADATA OVERRIDES
            </span>

            <div>
              <label className="block text-slate-700 font-bold mb-1">SEO Title Tag</label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Meta Description</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Canonical URL</label>
              <input
                type="text"
                value={canonicalUrl}
                onChange={(e) => setCanonicalUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-xs focus:border-blue-600 focus:outline-none text-slate-800"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-3">
            <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider block">
              BODY CONTENT (PARAGRAPHS &amp; BULLETS)
            </span>

            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Paragraphs (Separate each paragraph with a blank line)
              </label>
              <textarea
                value={paragraphsText}
                onChange={(e) => setParagraphsText(e.target.value)}
                rows={8}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none font-sans text-xs text-slate-800 leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Key Highlights / Bullets (One item per line)
              </label>
              <textarea
                value={bulletsText}
                onChange={(e) => setBulletsText(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none font-sans text-xs text-slate-800"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md"
            >
              Save Service Page Changes
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
