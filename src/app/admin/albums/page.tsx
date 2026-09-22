"use client";

import React from "react";

export default function AlbumManager() {
  const albums = [
    { id: "ALB-1", name: "Brahmin Sacred Muhurtham 2026", photosCount: 140, category: "Weddings" },
    { id: "ALB-2", name: "Pre-Wedding Beach Films ECR", photosCount: 85, category: "Pre-Wedding" },
    { id: "ALB-3", name: "Maternity & Baby Shower Stories", photosCount: 62, category: "Maternity" },
    { id: "ALB-4", name: "Grand Destination Receptions", photosCount: 210, category: "Reception" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            ALBUM ARCHIVE
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Album Collections Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Group photo monographs into private or public digital event albums.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Create New Album
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#f3e3a1]">{album.id}</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-stone-800 text-stone-300">
                {album.category}
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-white">{album.name}</h3>
            <p className="text-xs text-stone-400">{album.photosCount} High-Res Photos</p>
            <button className="w-full mt-2 py-2 rounded-xl bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-bold transition-all">
              Manage Album
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
