"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { PortfolioDetailItem, portfolioDetailsList } from "@/data/portfolioData";
import Link from "next/link";

interface PortfolioSingleClientProps {
  item: PortfolioDetailItem;
}

export function PortfolioSingleClient({ item }: PortfolioSingleClientProps) {
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  // Extract or fallback images for the plates
  const plates = [
    {
      id: "PLATE I",
      src: item.coverImage,
      title: "MASTER CAPTURE",
      caption: item.title,
    },
    {
      id: "PLATE II",
      src: item.images[0]?.src || "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
      title: "THE MANDAPAM GRANDEUR & FLORAL CANOPY",
      caption: "Mandapam Grandeur & Floral Canopy",
      total: "XXIV",
    },
    {
      id: "PLATE III",
      src: item.images[1]?.src || "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
      title: "THE BRIDE IN KANJEEVARAM SILK & ANTIQUE GOLD",
      caption: "The Bride in Kanjeevaram Silk & Antique Gold",
    },
    {
      id: "PLATE IV",
      src: item.images[2]?.src || "/home_Page_images/brahmin-wedding-photography.webp",
      title: "GENERATIONAL CANDIDS & SACRED LAUGHTER",
      caption: "Generational Candids & Sacred Laughter",
    },
    {
      id: "PLATE V",
      src: item.images[3]?.src || "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp",
      title: "THE MUHURTHAM MOMENT & SAPTAPADI INVOCATIONS",
      caption: "The Muhurtham Moment & Saptapadi Invocations",
      total: "XXIV",
    },
    {
      id: "PLATE VI",
      src: item.images[4]?.src || "/home_Page_images/engagement-photo-studio-chennai.webp",
      title: "KASI YATRA & RITUAL BLESSINGS",
      caption: "Kasi Yatra & Ritual Blessings",
    },
    {
      id: "PLATE VII",
      src: item.images[5]?.src || "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.webp",
      title: "ANCIENT GRANITE CORRIDORS & SILHOUETTE",
      caption: "Ancient Granite Corridors & Silhouette",
    },
    {
      id: "PLATE VIII",
      src: item.images[6]?.src || "/home_Page_images/kids-birthday-photographer-chennai.webp",
      title: "EVENING RECEPTION UNDER STARLIGHT & CHANDELIER",
      caption: "Evening Reception Under Starlight & Chandelier",
      total: "XXIV",
    },
  ];

  // Related archive stories (excluding current item)
  const relatedStories = portfolioDetailsList
    .filter((p) => p.id !== item.id && !p.isViewAllCard)
    .slice(0, 3);

  // If not enough related stories from array, fallback gracefully
  const curatedArchives = relatedStories.length >= 3 ? relatedStories : [
    {
      id: 4,
      slug: "cinematic-post-wedding-solitude",
      title: "Mahabalipuram Beach Solitude",
      category: "PRE-WEDDING",
      coverImage: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp",
    },
    {
      id: 6,
      slug: "maternity-baby-shower-monograph",
      title: "Golden Hour at Nilgiris Atelier",
      category: "MATERNITY",
      coverImage: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.webp",
    },
    {
      id: 1,
      slug: "a-day-for-love-in-chennai",
      title: "Royal Courtyard Sangeet, Udaipur",
      category: "SANGEET",
      coverImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] flex flex-col font-sans selection:bg-[#b88c42] selection:text-white">
      {/* Main Navigation Bar */}
      <Header />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Editorial Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#e5e0d8] pb-4 mb-8 text-xs font-mono tracking-[0.2em] text-[#78716c] uppercase">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[#78716c] hover:text-[#b88c42] transition-colors font-medium"
            >
              <span>← GALLERY / WEDDING STORIES / ARCHIVE NO. {String(item.id).padStart(2, "0")}</span>
            </Link>
            <div className="font-medium tracking-[0.2em] text-[#78716c]">
              {item.location.toUpperCase() || "COIMBATORE • TAMIL NADU"}
            </div>
          </div>

          {/* Section 1: Hero 2-Column Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
            
            {/* Left Column: Main Plate I Image */}
            <div className="lg:col-span-7 group relative cursor-pointer overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8]"
                 onClick={() => setLightboxImg({ src: plates[0].src, caption: plates[0].title })}>
              <div className="aspect-[4/3] sm:aspect-[1.25/1] w-full relative">
                <img
                  src={plates[0].src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                {/* Plate Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#b88c42] inline-block animate-pulse"></span>
                  <span>PLATE I • MASTER CAPTURE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Archival Meta Block */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.25em] text-[#b88c42] font-semibold mb-3">
                  {item.category.toUpperCase() || "WEDDING PHOTOGRAPHY"}
                </span>
                
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1917] font-normal leading-[1.12] tracking-tight mb-6">
                  {item.title}
                </h1>
                
                <p className="text-[#57534e] text-sm sm:text-base leading-relaxed font-light mb-8">
                  {item.description ||
                    "A matrimonial celebration filled with ancestral Vedic hymns, intimate generational laughter, and profound sacred solemnity in the heritage hinterlands of South India."}
                </p>
              </div>

              {/* Stacked Archival Specs */}
              <div className="border-t border-[#e5e0d8] pt-6 space-y-5 font-mono text-xs uppercase tracking-[0.18em]">
                <div>
                  <span className="text-[#a8a29e] block text-[10px] mb-1 font-semibold">SANCTUM &amp; LOCATION</span>
                  <span className="text-[#1c1917] font-bold block">{item.location.toUpperCase()}</span>
                </div>

                <div className="border-t border-[#f0ece5] pt-4">
                  <span className="text-[#a8a29e] block text-[10px] mb-1 font-semibold">ARCHIVAL CHRONICLE</span>
                  <span className="text-[#1c1917] font-bold block">{item.date.toUpperCase()} • 24 CURATED PLATES</span>
                </div>

                <div className="border-t border-[#f0ece5] pt-4">
                  <span className="text-[#a8a29e] block text-[10px] mb-1 font-semibold">ATELIER DIRECTORSHIP</span>
                  <span className="text-[#1c1917] font-bold block">DHILIP &amp; MASTER CREW</span>
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: Centered Monograph Story Section */}
          <div className="my-20 sm:my-28 text-center max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-[#b88c42]/60"></span>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#b88c42] font-semibold">
                THE STORY
              </span>
              <span className="h-px w-12 bg-[#b88c42]/60"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-normal tracking-tight mb-6">
              A Celebration Rooted in Tradition
            </h2>

            <p className="font-serif italic text-[#44403c] text-lg sm:text-xl leading-relaxed font-normal mb-6">
              &ldquo;From sacred Vedic invocations and vibrant familial cheer to intimate candid nuances, this monograph commemorates the solemnity of two lineages uniting beneath the fragrance of fresh marigold and temple camphor.&rdquo;
            </p>

            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#a8a29e] font-medium block">
              — DHILIP STUDIO MONOGRAPH ARCHIVE NO. {String(item.id).padStart(2, "0")}
            </span>
          </div>

          {/* Section 3: Sequential Editorial Plates Gallery */}
          <div className="space-y-16 sm:space-y-24 mb-20 sm:mb-28">

            {/* Plate II: Full-Width Image */}
            <div className="group cursor-pointer" onClick={() => setLightboxImg({ src: plates[1].src, caption: plates[1].title })}>
              <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[16/9] sm:aspect-[2.1/1] w-full">
                <img
                  src={plates[1].src}
                  alt={plates[1].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#78716c]">
                <span>{plates[1].title}</span>
                <span>{plates[1].id} / {plates[1].total}</span>
              </div>
            </div>

            {/* Row of 2 Plates: Plate III & Plate IV */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left: Plate III (Vertical Aspect) */}
              <div className="md:col-span-6 group cursor-pointer" onClick={() => setLightboxImg({ src: plates[2].src, caption: plates[2].title })}>
                <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[4/5] w-full">
                  <img
                    src={plates[2].src}
                    alt={plates[2].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#78716c]">
                  <span className="truncate pr-2">{plates[2].title}</span>
                  <span className="shrink-0">{plates[2].id}</span>
                </div>
              </div>

              {/* Right: Plate IV (Landscape Aspect) */}
              <div className="md:col-span-6 group cursor-pointer" onClick={() => setLightboxImg({ src: plates[3].src, caption: plates[3].title })}>
                <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[4/3] w-full">
                  <img
                    src={plates[3].src}
                    alt={plates[3].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#78716c]">
                  <span className="truncate pr-2">{plates[3].title}</span>
                  <span className="shrink-0">{plates[3].id}</span>
                </div>
              </div>

            </div>

            {/* Plate V: Full-Width Image */}
            <div className="group cursor-pointer" onClick={() => setLightboxImg({ src: plates[4].src, caption: plates[4].title })}>
              <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[16/9] sm:aspect-[2.1/1] w-full">
                <img
                  src={plates[4].src}
                  alt={plates[4].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#78716c]">
                <span>{plates[4].title}</span>
                <span>{plates[4].id} / {plates[4].total}</span>
              </div>
            </div>

            {/* Row of 2 Plates: Plate VI & Plate VII */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left: Plate VI (Vertical Aspect) */}
              <div className="md:col-span-6 group cursor-pointer" onClick={() => setLightboxImg({ src: plates[5].src, caption: plates[5].title })}>
                <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[4/5] w-full">
                  <img
                    src={plates[5].src}
                    alt={plates[5].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#78716c]">
                  <span className="truncate pr-2">{plates[5].title}</span>
                  <span className="shrink-0">{plates[5].id}</span>
                </div>
              </div>

              {/* Right: Plate VII (Landscape Aspect) */}
              <div className="md:col-span-6 group cursor-pointer" onClick={() => setLightboxImg({ src: plates[6].src, caption: plates[6].title })}>
                <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[4/3] w-full">
                  <img
                    src={plates[6].src}
                    alt={plates[6].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#78716c]">
                  <span className="truncate pr-2">{plates[6].title}</span>
                  <span className="shrink-0">{plates[6].id}</span>
                </div>
              </div>

            </div>

            {/* Plate VIII: Full-Width Image */}
            <div className="group cursor-pointer" onClick={() => setLightboxImg({ src: plates[7].src, caption: plates[7].title })}>
              <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[16/9] sm:aspect-[2.1/1] w-full">
                <img
                  src={plates[7].src}
                  alt={plates[7].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#78716c]">
                <span>{plates[7].title}</span>
                <span>{plates[7].id} / {plates[7].total}</span>
              </div>
            </div>

          </div>

          {/* Section 4: Specifications Ribbon Bar */}
          <div className="bg-[#edebe6] border-y border-[#d8d3c9] py-6 px-6 sm:px-8 mb-24">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#a8a29e] mb-1 font-semibold">EVENT</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#1c1917]">{item.category.toUpperCase() || "TRADITIONAL WEDDING"}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#a8a29e] mb-1 font-semibold">LOCATION</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#1c1917]">{item.location.toUpperCase() || "COIMBATORE, TN"}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#a8a29e] mb-1 font-semibold">PHOTOGRAPHY</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#1c1917]">FINE ART &amp; CINEMA</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#a8a29e] mb-1 font-semibold">COLLECTION</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#1c1917]">24 MASTER PLATES</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#a8a29e] mb-1 font-semibold">LEAD ARTIST</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#1c1917]">DHILIP &amp; ATELIER TEAM</span>
              </div>
            </div>
          </div>

          {/* Section 5: Curated Archives ("More Wedding Stories") */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e5e0d8] gap-4">
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.25em] text-[#b88c42] font-semibold mb-1">
                  CURATED ARCHIVES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-normal tracking-tight">
                  More Wedding Stories
                </h2>
              </div>
              <Link
                href="/gallery"
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#1c1917] hover:text-[#b88c42] transition-colors font-semibold flex items-center gap-1.5"
              >
                <span>EXPLORE ALL MONOGRAPHS</span>
                <span className="text-sm">→</span>
              </Link>
            </div>

            {/* 3-Column Story Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {curatedArchives.map((story) => (
                <Link
                  key={story.id}
                  href={`/gallery/${story.id}`}
                  className="group flex flex-col space-y-3"
                >
                  <div className="overflow-hidden bg-[#ebe7e0] border border-[#e5e0d8] aspect-[16/10] w-full">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#b88c42] font-bold mb-1">
                      {story.category}
                    </span>
                    <h3 className="font-serif text-xl text-[#1c1917] font-normal group-hover:text-[#b88c42] transition-colors leading-snug mb-2">
                      {story.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#78716c] font-medium group-hover:text-[#1c1917] transition-colors">
                      <span>VIEW STORY</span>
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Lightbox Pop-up Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/20 transition-colors"
          >
            <span>CLOSE</span>
            <span className="text-base">✕</span>
          </button>
          
          <img
            src={lightboxImg.src}
            alt={lightboxImg.caption}
            className="max-w-full max-h-[82vh] object-contain shadow-2xl border border-white/10"
          />
          
          <p className="mt-4 text-white/90 font-mono text-xs uppercase tracking-[0.2em] text-center max-w-xl">
            {lightboxImg.caption}
          </p>
        </div>
      )}

      {/* CTA Band & Footer */}
      <CtaBandSection />
      <Footer topBgColor="bg-[#FAF8F5]" />
    </div>
  );
}
