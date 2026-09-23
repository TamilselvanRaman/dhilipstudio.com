"use client";

import React, { useState } from "react";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { initialMonographs, GalleryMonograph } from "@/lib/adminData";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

export default function GalleryMonographManager() {
  const [monographs, setMonographs] = useState<GalleryMonograph[]>(initialMonographs);
  const [selectedMono, setSelectedMono] = useState<GalleryMonograph | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isUploadDrawerOpen, setIsUploadDrawerOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("SACRED MUHURTHAM");
  const [client, setClient] = useState("");
  const [coverImage, setCoverImage] = useState("/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp");
  const [watermark, setWatermark] = useState(true);

  const handleToggleWatermark = (id: string) => {
    setMonographs(
      monographs.map((m) => (m.id === id ? { ...m, watermark: !m.watermark } : m))
    );
  };

  const handleCreateMonograph = (e: React.FormEvent) => {
    e.preventDefault();
    const newMono: GalleryMonograph = {
      id: `MONO-${Math.floor(10 + Math.random() * 90)}`,
      title,
      category,
      client,
      coverImage: coverImage || "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
      photoCount: 35,
      watermark,
      privateLink: {
        pin: "4491",
        expiresAt: "2026-12-31",
        allowDownload: true,
      },
    };
    setMonographs([newMono, ...monographs]);
    setIsUploadDrawerOpen(false);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            MONOGRAPH MEDIA ENGINE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Monograph Gallery Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Bulk drag-and-drop upload, automatic WebP compression, studio watermark overlay, and private client gallery PIN sharing.
          </p>
        </div>

        <button
          onClick={() => {
            setTitle("");
            setClient("");
            setIsUploadDrawerOpen(true);
          }}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">cloud_upload</span>
          <span>+ Upload Monograph</span>
        </button>
      </div>

      {/* Upload Zone Graphic */}
      <div className="bg-white border border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-6 text-center space-y-2 transition-colors cursor-pointer shadow-xs" onClick={() => setIsUploadDrawerOpen(true)}>
        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-2xl">upload_file</span>
        </div>
        <h3 className="font-serif font-bold text-sm text-slate-900">Drag &amp; Drop High-Res RAW / JPG Files Here</h3>
        <p className="text-xs text-slate-500">Automatic 4K WebP conversion &amp; Studio Watermark Overlay applied on ingest.</p>
      </div>

      {/* Grid of Monographs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {monographs.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl overflow-hidden shadow-xs flex flex-col group transition-all"
          >
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {item.watermark && (
                <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center pointer-events-none">
                  <span className="font-serif font-bold text-xs text-white/90 tracking-widest uppercase border border-white/40 bg-slate-900/40 backdrop-blur-xs px-3 py-1 rounded">
                    DHILIP STUDIO WATERMARK
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
                {item.category}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{item.id} · {item.photoCount} Photos</span>
                  <span>Couple: {item.client}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 tracking-wide mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Watermark & Private Gallery Toolbar */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => handleToggleWatermark(item.id)}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                    item.watermark
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-xs">branding_watermark</span>
                  <span>Watermark: {item.watermark ? "ON" : "OFF"}</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedMono(item);
                    setIsShareModalOpen(true);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] border border-blue-600 transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <span className="material-symbols-outlined text-xs">share</span>
                  <span>Private Link</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Private Link Share Drawer */}
      {selectedMono && (
        <SlideOverDrawer
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          title={`Private Gallery — ${selectedMono.title}`}
          subtitle="Generate secure client download link with 4-digit PIN protection."
        >
          <div className="space-y-4 font-sans text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono text-blue-600 uppercase font-bold block">CLIENT SHAREABLE URL</span>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-slate-900 truncate">
                https://dhilipstudio.com/client-gallery/{selectedMono.id.toLowerCase()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">ACCESS PIN</span>
                <span className="font-mono text-base font-bold text-blue-600 mt-1 block">
                  {selectedMono.privateLink?.pin || "8821"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">EXPIRY DATE</span>
                <span className="font-mono text-xs font-bold text-slate-800 mt-1 block">
                  {selectedMono.privateLink?.expiresAt || "2026-12-31"}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setCopiedLink(true);
                setTimeout(() => setCopiedLink(false), 3000);
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              {copiedLink ? "✓ Link & PIN Copied to Clipboard!" : "Copy Shareable WhatsApp Text"}
            </button>
          </div>
        </SlideOverDrawer>
      )}

      {/* New Upload Drawer */}
      <SlideOverDrawer
        isOpen={isUploadDrawerOpen}
        onClose={() => setIsUploadDrawerOpen(false)}
        title="Upload & Publish New Monograph"
        subtitle="Add title, category tags, and initial cover photo."
      >
        <form onSubmit={handleCreateMonograph} className="space-y-4">
          <div>
            <label className="block text-slate-600 text-[11px] font-mono uppercase font-bold mb-1">Monograph Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Traditional Temple Muhurtham in Mylapore"
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 text-[11px] font-mono uppercase font-bold mb-1">Couple / Client Name</label>
            <input
              type="text"
              required
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="e.g. Jane & Vishal"
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 text-[11px] font-mono uppercase font-bold mb-1">Category Tag</label>
            <CustomDropdown
              value={category}
              onChange={(val) => setCategory(val)}
              theme="blue"
              options={[
                { value: "SACRED MUHURTHAM", label: "SACRED MUHURTHAM", icon: "auto_awesome" },
                { value: "CANDID PHOTOGRAPHY", label: "CANDID PHOTOGRAPHY", icon: "camera" },
                { value: "PRE & POST-WEDDING", label: "PRE & POST-WEDDING", icon: "favorite" },
                { value: "MATERNITY & NEWBORN", label: "MATERNITY & NEWBORN", icon: "child_care" },
              ]}
            />
          </div>

          <div>
            <ImageUploadPicker
              label="Monograph Cover Image (Click or Drag & Drop)"
              value={coverImage}
              onChange={setCoverImage}
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="wm"
              checked={watermark}
              onChange={(e) => setWatermark(e.target.checked)}
              className="accent-blue-600"
            />
            <label htmlFor="wm" className="text-xs text-slate-700 font-medium">Apply Dhilip Studio watermark overlay</label>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsUploadDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              Publish Monograph
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
