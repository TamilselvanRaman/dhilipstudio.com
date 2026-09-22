"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";

interface VideoItem {
  id: string;
  title: string;
  channelName: string;
  youtubeId: string;
  thumbnail: string;
  duration: string;
  quality: string;
  category: string;
  designStyle: "cinematic" | "youtube"; // "cinematic" = image 2 style (gold play button, badges, serif title), "youtube" = image 1 style
  isCustom?: boolean;
}

// Utility to extract 11-character YouTube Video ID from any YouTube URL
function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  // If user pasted just the 11-char ID directly
  if (url.trim().length === 11 && !url.includes("/")) {
    return url.trim();
  }
  return null;
}

const sampleImages = [
  { label: "Post Wedding Beach (Cinematic)", path: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg" },
  { label: "Brahmin Wedding Muhurtham", path: "/home_Page_images/brahmin-wedding-photography.jpg" },
  { label: "Wedding Ceremony Candid", path: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp" },
  { label: "Wedding Photography Chennai", path: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp" },
  { label: "Engagement Couple", path: "/home_Page_images/engagement-photo-studio-chennai.jpg" },
  { label: "Kids Birthday Party", path: "/home_Page_images/kids-birthday-photographer-chennai.webp" },
  { label: "Baby Shower Celebration", path: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg" },
];

const initialVideos: VideoItem[] = [
  // Image 2 Style: Luxury Gold Cinematic Cards
  {
    id: "v1",
    title: "Jane & Vishal · Beach Wedding Monograph",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "fJ9rUzIMcZQ",
    thumbnail: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg",
    duration: "4:35 MIN",
    quality: "4K CINEMA",
    category: "DESTINATION WEDDING FILM",
    designStyle: "cinematic",
  },
  {
    id: "v2",
    title: "Traditional Brahmin Muhurtham & Oonjal Rituals",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "2Vv-BfVoq4g",
    thumbnail: "/home_Page_images/brahmin-wedding-photography.jpg",
    duration: "6:20 MIN",
    quality: "4K HDR",
    category: "HERITAGE RITUAL FILM",
    designStyle: "cinematic",
  },
  {
    id: "v3",
    title: "Manikandan + Yamuna | An Emotional & Cinematic Wedding",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "L_LUpnjgPso",
    thumbnail: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
    duration: "8:45 MIN",
    quality: "4K CINEMA",
    category: "CINEMATIC REEL",
    designStyle: "cinematic",
  },
  {
    id: "v4",
    title: "Heera 1st Birthday party - cinematic video | Dhilipstudio",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "kJQP7kiw5Fk",
    thumbnail: "/home_Page_images/kids-birthday-photographer-chennai.webp",
    duration: "4:15 MIN",
    quality: "4K HDR",
    category: "MILESTONE BIRTHDAY FILM",
    designStyle: "cinematic",
  },
  
  // Image 1 Style: YouTube Broadcast Cards
  {
    id: "v5",
    title: "S.Niranchanaa Weds A.Balasubramaniam",
    channelName: "Chennai Live Broadcast",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    duration: "Live Stream",
    quality: "4K LIVE",
    category: "LIVE WEDDING BROADCAST",
    designStyle: "youtube",
  },
  {
    id: "v6",
    title: "Surya Manivannan Weds Preetha Srinivasan",
    channelName: "Chennai Live Broadcast",
    youtubeId: "3JZ_D3ELwOQ",
    thumbnail: "/home_Page_images/engagement-photo-studio-chennai.jpg",
    duration: "Live Stream",
    quality: "4K LIVE",
    category: "LIVE WEDDING BROADCAST",
    designStyle: "youtube",
  },
];

export default function VideosPage() {
  const [videoList, setVideoList] = useState<VideoItem[]>(initialVideos);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [filterStyle, setFilterStyle] = useState<"all" | "cinematic" | "youtube">("all");

  // Admin YouTube Add Form State
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [youtubeUrlInput, setYoutubeUrlInput] = useState("");
  const [videoTitleInput, setVideoTitleInput] = useState("");
  const [channelNameInput, setChannelNameInput] = useState("Dhilip Studio - Wedding Photographers in Chennai");
  const [categoryInput, setCategoryInput] = useState("DESTINATION WEDDING FILM");
  const [qualityInput, setQualityInput] = useState("4K CINEMA");
  const [durationInput, setDurationInput] = useState("4:35 MIN");
  const [designStyleInput, setDesignStyleInput] = useState<"cinematic" | "youtube">("cinematic");
  const [customThumbnailUrl, setCustomThumbnailUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Extracted YouTube ID preview
  const extractedPreviewId = extractYouTubeId(youtubeUrlInput);
  const autoFetchedThumbnail = extractedPreviewId
    ? `https://img.youtube.com/vi/${extractedPreviewId}/hqdefault.jpg`
    : "";

  const handleAddYouTubeVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const extractedId = extractYouTubeId(youtubeUrlInput);
    if (!extractedId) {
      setErrorMessage("Invalid YouTube URL. Please paste a valid YouTube video link (e.g. https://www.youtube.com/watch?v=...)");
      return;
    }

    const title = videoTitleInput.trim() || `Cinematic Film (${extractedId})`;
    const channel = channelNameInput.trim() || "Dhilip Studio - Wedding Photographers in Chennai";
    const finalThumbnail = customThumbnailUrl || `https://img.youtube.com/vi/${extractedId}/hqdefault.jpg`;

    const newVideo: VideoItem = {
      id: `custom-${Date.now()}`,
      title,
      channelName: channel,
      youtubeId: extractedId,
      thumbnail: finalThumbnail,
      duration: durationInput.trim() || "4:30 MIN",
      quality: qualityInput.trim() || "4K CINEMA",
      category: categoryInput.toUpperCase(),
      designStyle: designStyleInput,
      isCustom: true,
    };

    setVideoList([newVideo, ...videoList]);
    setSuccessMessage(`Successfully fetched & added video "${title}"!`);
    setYoutubeUrlInput("");
    setVideoTitleInput("");
    setCustomThumbnailUrl("");
  };

  const filteredVideos = videoList.filter((v) => {
    if (filterStyle === "all") return true;
    return v.designStyle === filterStyle;
  });

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-20">
        {/* Banner Section with Background Image */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-stone-800 text-center bg-stone-950 text-white min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
          {/* Background Image & Light Black Blur Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/banners/video_page_banner.png"
              alt="Cinematic Wedding Photography Background"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Light Black Color Blur Overlay */}
            <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto py-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Cinematic Wedding Films &amp; Live Streams
            </h1>
            <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#f3e3a1] mt-3 drop-shadow-sm">
              Relive ambient wedding vows, live broadcasts &amp; sacred sounds in 4K clarity
            </p>

            {/* Design Style Filter Tabs */}
            <div className="mt-10 flex items-center justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-black/60 backdrop-blur-xl p-2 rounded-2xl sm:rounded-full text-xs font-semibold border border-amber-200/30 shadow-[0_12px_40px_rgba(0,0,0,0.5)] max-w-full">
                <button
                  onClick={() => setFilterStyle("all")}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    filterStyle === "all"
                      ? "bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] text-white font-bold shadow-lg shadow-[#b88c42]/30 scale-105 border border-amber-200/40"
                      : "text-stone-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  All Videos ({videoList.length})
                </button>
                <button
                  onClick={() => setFilterStyle("cinematic")}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    filterStyle === "cinematic"
                      ? "bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] text-white font-bold shadow-lg shadow-[#b88c42]/30 scale-105 border border-amber-200/40"
                      : "text-stone-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Cinematic Monograph Cards
                </button>
                <button
                  onClick={() => setFilterStyle("youtube")}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    filterStyle === "youtube"
                      ? "bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] text-white font-bold shadow-lg shadow-[#b88c42]/30 scale-105 border border-amber-200/40"
                      : "text-stone-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  YouTube Broadcast Cards
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Cards Grid */}
        <section className="py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-stone-500 text-sm">No videos found for this filter style.</p>
              <button
                onClick={() => setFilterStyle("all")}
                className="mt-3 text-xs font-bold text-[#b88c42] hover:underline uppercase tracking-wider"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredVideos.map((video) => {
                // If card is Luxury Cinematic Style (Image 2 design)
                if (video.designStyle === "cinematic") {
                  return (
                    <div
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className="group relative bg-stone-900 rounded-[28px] overflow-hidden border border-stone-800/90 shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                    >
                      {/* Background Thumbnail Image */}
                      <div className="h-80 sm:h-96 w-full relative overflow-hidden bg-black">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp";
                          }}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />

                        {/* Soft Dark Vignette Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 group-hover:from-black/85 transition-colors"></div>

                        {/* Top Badges (Top Left & Top Right) */}
                        <div className="absolute top-4 inset-x-5 z-20 flex items-center justify-between pointer-events-none">
                          <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-stone-200 text-[10px] font-mono font-bold tracking-widest uppercase rounded-lg border border-white/15">
                            {video.quality}
                          </span>
                          <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-stone-200 text-[10px] font-mono font-bold tracking-widest uppercase rounded-lg border border-white/15">
                            {video.duration}
                          </span>
                        </div>

                        {/* Center Gold Luxury Play Icon (Image 2 style) */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                          <div className="w-16 h-12 bg-[#b88c42]/85 group-hover:bg-[#b88c42] text-white rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:scale-115 transition-all duration-300 border border-white/30">
                            <svg className="w-6 h-6 fill-current ml-0.5 text-white" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Bottom Text Content Overlay (Category + Large Title) */}
                        <div className="absolute bottom-5 inset-x-6 z-20">
                          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#f3e3a1] uppercase block mb-1">
                            {video.category}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-[#f3e3a1] transition-colors drop-shadow-md">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                }

                // If card is Native YouTube Style (Image 1 design)
                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className="group relative bg-black rounded-3xl overflow-hidden border border-stone-800 shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Top Header Overlay: Channel Avatar & Video Title */}
                    <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0 bg-stone-800">
                        <img
                          src="/logo.png"
                          alt={video.channelName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-sm sm:text-base font-bold text-white truncate group-hover:text-[#f3e3a1] transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-[11px] text-stone-300 font-sans truncate">
                          {video.channelName}
                        </p>
                      </div>
                    </div>

                    {/* Video Thumbnail & YouTube Overlay */}
                    <div className="h-80 sm:h-96 w-full relative overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp";
                        }}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                      {/* Center YouTube Red Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-16 h-11 bg-red-600 group-hover:bg-red-500 text-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-115 transition-all duration-300 border border-white/20">
                          <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom-Right "Watch on YouTube" Button */}
                      <div className="absolute bottom-4 right-4 z-20">
                        <a
                          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 hover:bg-red-600 backdrop-blur-md text-white text-xs font-mono rounded-full border border-white/20 shadow-lg transition-colors"
                          title="Watch directly on YouTube"
                        >
                          <span>Watch on</span>
                          <svg className="w-4 h-4 fill-red-500 hover:fill-white" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      </div>

                      {/* Bottom-Left Video Badges */}
                      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-[#f3e3a1] text-[10px] font-mono tracking-widest uppercase rounded border border-white/20">
                          {video.quality}
                        </span>
                        <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase rounded border border-white/20">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* YouTube Video Player Lightbox Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in-up"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-700 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 bg-stone-950 text-white flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#b88c42] inline-block"></span>
                  <span className="text-xs font-mono text-[#f3e3a1] uppercase tracking-widest">
                    {activeVideo.category}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors"
                  title="Close Video"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              {/* YouTube Iframe Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Bottom Bar */}
              <div className="p-6 bg-stone-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono">
                    {activeVideo.channelName}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors flex items-center gap-1.5"
                  >
                    <span>Watch on YouTube</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                  <a
                    href="/contact"
                    className="px-5 py-2.5 bg-[#b88c42] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors"
                  >
                    Book Cinema
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <CtaBandSection />
      </main>

      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}

