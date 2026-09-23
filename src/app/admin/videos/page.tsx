"use client";

import React, { useState } from "react";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { initialVideos, VideoShowcase } from "@/lib/adminData";

export default function VideoShowcaseManager() {
  const [videos, setVideos] = useState<VideoShowcase[]>(initialVideos);
  const [selectedVid, setSelectedVid] = useState<VideoShowcase | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("https://youtube.com/watch?v=sample");
  const [thumbnailUrl, setThumbnailUrl] = useState("/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg");

  const toggleFeatured = (id: string) => {
    setVideos(
      videos.map((v) => (v.id === id ? { ...v, featuredOnHome: !v.featuredOnHome } : v))
    );
  };

  const handleOpenNew = () => {
    setSelectedVid(null);
    setTitle("");
    setVideoUrl("https://youtube.com/watch?v=sample");
    setThumbnailUrl("/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg");
    setIsDrawerOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const newVid: VideoShowcase = {
      id: `VID-${Math.floor(10 + Math.random() * 90)}`,
      title: title || "New Cinematic Teaser Film",
      category: "CINEMATIC TEASER",
      thumbnailUrl,
      videoUrl,
      views: 1250,
      featuredOnHome: true,
    };
    setVideos([newVid, ...videos]);
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            CINEMATOGRAPHY FILMS ARCHIVE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Video Showcase Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Manage YouTube / Vimeo 4K cinematography films, custom thumbnails, and "Featured on Homepage" toggles.
          </p>
        </div>

        <button
          onClick={handleOpenNew}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">video_call</span>
          <span>+ Add Video Embed</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((vid) => (
          <div key={vid.id} className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl overflow-hidden shadow-xs flex flex-col group space-y-3 p-4 transition-all">
            <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
              <img src={vid.thumbnailUrl} alt={vid.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">play_arrow</span>
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-blue-600 font-bold">{vid.id}</span>
                <span className="text-emerald-700 font-bold">{vid.views.toLocaleString()} Views</span>
              </div>
              <h3 className="font-serif text-sm font-bold text-slate-900 leading-tight">{vid.title}</h3>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => toggleFeatured(vid.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase border transition-colors cursor-pointer ${
                  vid.featuredOnHome
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-slate-100 text-slate-600 border-slate-200"
                }`}
              >
                Featured Home: {vid.featuredOnHome ? "YES" : "NO"}
              </button>

              <a
                href={vid.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-blue-600 font-mono flex items-center gap-1"
              >
                <span>YouTube Link</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Add 4K Cinematography Video"
        subtitle="Provide YouTube/Vimeo link and custom cover thumbnail asset."
      >
        <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Film Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Mahabalipuram Beach Pre-Wedding Monograph 4K"
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">YouTube / Vimeo Embed Link</label>
            <input
              type="text"
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-blue-600 font-mono focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <ImageUploadPicker
              label="Custom Video Thumbnail Asset (Click or Drag & Drop)"
              value={thumbnailUrl}
              onChange={setThumbnailUrl}
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              Publish Video Teaser
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}

