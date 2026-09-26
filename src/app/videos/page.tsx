"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
  {
    id: "v1",
    title: "Jane & Vishal · Beach Wedding Monograph",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "fJ9rUzIMcZQ",
    thumbnail: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp",
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
    thumbnail: "/home_Page_images/brahmin-wedding-photography.webp",
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
  {
    id: "v5",
    title: "S.Niranchanaa Weds A.Balasubramaniam · Sacred Rituals",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "5qap5aO4i9A",
    thumbnail: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    duration: "12:45 MIN",
    quality: "4K LIVE",
    category: "LIVE WEDDING BROADCAST",
    designStyle: "cinematic",
  },
  {
    id: "v6",
    title: "Surya & Preetha · Engagement Monograph",
    channelName: "Dhilip Studio - Wedding Photographers in Chennai",
    youtubeId: "3JZ_D3ELwOQ",
    thumbnail: "/home_Page_images/engagement-photo-studio-chennai.webp",
    duration: "5:30 MIN",
    quality: "4K HDR",
    category: "DESTINATION ENGAGEMENT FILM",
    designStyle: "cinematic",
  },
];

export default function VideosPage() {
  const [videoList, setVideoList] = useState<VideoItem[]>(initialVideos);

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

          <ScrollReveal variant="open-scale" duration={800} isOpenReveal={true}>
            <div className="relative z-10 max-w-4xl mx-auto py-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Cinematic Wedding Films &amp; Live Streams
            </h1>
            <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#f3e3a1] mt-3 drop-shadow-sm">
              Relive ambient wedding vows, live broadcasts &amp; sacred sounds in 4K clarity
            </p>

          </div>
          </ScrollReveal>
        </section>

        {/* Video Cards Grid */}
        <section className="py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          {videoList.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-stone-500 text-sm">No videos available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {videoList.map((video, idx) => (
                <ScrollReveal key={video.id} variant="fade-up" delay={(idx % 2) * 120} duration={750}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Watch "${video.title}" directly on YouTube`}
                    className="group relative bg-stone-900 rounded-[28px] overflow-hidden border border-stone-800/90 shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500 block h-full"
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
                          {video.quality || "4K CINEMA"}
                        </span>
                        <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-stone-200 text-[10px] font-mono font-bold tracking-widest uppercase rounded-lg border border-white/15">
                          {video.duration || "4:30 MIN"}
                        </span>
                      </div>

                      {/* Center Gold Luxury Play Icon */}
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
                          {video.category || "DESTINATION WEDDING FILM"}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-[#f3e3a1] transition-colors drop-shadow-md">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>



        <CtaBandSection />
      </main>

      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}

