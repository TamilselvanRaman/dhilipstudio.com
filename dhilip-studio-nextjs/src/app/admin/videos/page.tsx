"use client";

import React from "react";

export default function VideoShowcaseManager() {
  const videoFilms = [
    {
      id: "VID-1",
      title: "Sacred Brahmin Wedding Rituals & Grand Reception",
      category: "Brahmin Wedding",
      duration: "14:20 mins",
      thumbnail: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
      url: "https://youtube.com/watch?v=sample1",
    },
    {
      id: "VID-2",
      title: "Pre-Wedding Cinematic Beach Teaser — Mahabalipuram",
      category: "Pre-Wedding Film",
      duration: "03:45 mins",
      thumbnail: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg",
      url: "https://youtube.com/watch?v=sample2",
    },
    {
      id: "VID-3",
      title: "Candid Sangeet & Traditional Muhurtham Highlights",
      category: "Candid Highlights",
      duration: "08:15 mins",
      thumbnail: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
      url: "https://youtube.com/watch?v=sample3",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            CINEMATOGRAPHY SHOWCASE
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Video Films Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Manage YouTube 4K wedding highlight films displayed on `/videos`.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Add YouTube Video
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoFilms.map((video) => (
          <div key={video.id} className="bg-[#1b1c1c] border border-stone-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="relative h-44 w-full bg-stone-900 overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-2xl">play_arrow</span>
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f3e3a1]">
                  {video.category} · {video.duration}
                </span>
                <h3 className="font-serif text-base font-bold text-white tracking-wide mt-1">
                  {video.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400">YouTube URL</span>
                <button className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-semibold transition-all">
                  Edit Video Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
