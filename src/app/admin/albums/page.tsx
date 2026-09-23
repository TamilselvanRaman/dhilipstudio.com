"use client";

import React, { useState } from "react";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { initialAlbums, AlbumCollection } from "@/lib/adminData";

export default function AlbumManager() {
  const [albums, setAlbums] = useState<AlbumCollection[]>(initialAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumCollection | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("SACRED MUHURTHAM");
  const [pricePackage, setPricePackage] = useState("Royal heirloom package");
  const [coverImage, setCoverImage] = useState("/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg");

  const handleOpenNew = () => {
    setSelectedAlbum(null);
    setTitle("");
    setCategory("SACRED MUHURTHAM");
    setPricePackage("Royal heirloom package");
    setCoverImage("/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg");
    setIsDrawerOpen(true);
  };

  const handleOpenEdit = (album: AlbumCollection) => {
    setSelectedAlbum(album);
    setTitle(album.title);
    setCategory(album.category);
    setPricePackage(album.pricePackage);
    setCoverImage(album.coverImage);
    setIsDrawerOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAlbum) {
      setAlbums(
        albums.map((a) =>
          a.id === selectedAlbum.id
            ? { ...a, title, category, pricePackage, coverImage }
            : a
        )
      );
    } else {
      const newAlb: AlbumCollection = {
        id: `ALB-${Math.floor(100 + Math.random() * 900)}`,
        title,
        category,
        coverImage,
        photos: [coverImage],
        pricePackage,
      };
      setAlbums([newAlb, ...albums]);
    }
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            CURATED ALBUM COLLECTIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Album Collections Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Group photo monographs into curated packages linked to pricing tiers.
          </p>
        </div>

        <button
          onClick={handleOpenNew}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">create_new_folder</span>
          <span>+ Create Album</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div key={album.id} className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl overflow-hidden shadow-xs flex flex-col space-y-3 p-4 transition-all">
            <div className="h-44 w-full rounded-xl overflow-hidden relative bg-slate-100 border border-slate-100">
              <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
              <span className="absolute top-2 right-2 bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold shadow-xs">
                {album.category}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-blue-600 font-bold">{album.id}</span>
              <h3 className="font-serif text-base font-bold text-slate-900 mt-0.5">{album.title}</h3>
              <div className="text-xs text-slate-500 font-mono mt-1 font-semibold">{album.pricePackage}</div>
            </div>
            <button
              onClick={() => handleOpenEdit(album)}
              className="w-full py-2 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
            >
              Edit Collection
            </button>
          </div>
        ))}
      </div>

      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedAlbum ? `Edit Album — ${selectedAlbum.id}` : "Create Curated Album"}
        subtitle="Upload cover image asset and set pricing tier alignment."
      >
        <form onSubmit={handleSave} className="space-y-4 text-xs font-sans text-slate-900">
          <div>
            <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Album Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Royal Heritage Brahmin Muhurtham Album"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Price Package Alignment</label>
            <input
              type="text"
              value={pricePackage}
              onChange={(e) => setPricePackage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-blue-600 font-mono focus:border-blue-600 focus:outline-none font-bold"
            />
          </div>

          <div>
            <ImageUploadPicker
              label="Album Cover Image (Click or Drag & Drop)"
              value={coverImage}
              onChange={setCoverImage}
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 cursor-pointer shadow-md"
            >
              {selectedAlbum ? "Save Album Edits" : "Create Album"}
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
