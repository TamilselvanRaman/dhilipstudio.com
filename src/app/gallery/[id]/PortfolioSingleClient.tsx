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
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const nextImage = () => {
    if (item.images.length > 0) {
      setCurrentImgIndex((prev) => (prev + 1) % item.images.length);
    }
  };

  const prevImage = () => {
    if (item.images.length > 0) {
      setCurrentImgIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
    }
  };

  // Combine item images or sample gallery for full collection grid
  const galleryPhotos = item.images.length > 0 ? item.images : [
    { src: item.coverImage, caption: item.title, alt: item.title }
  ];

  // Extended grid gallery photos matching screenshots
  const allCollectionPhotos = [
    ...galleryPhotos,
    { src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp", caption: "Temple Mandap Ceremony", alt: "Wedding Mandap" },
    { src: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp", caption: "Candid Garland Exchange", alt: "Candid Vows" },
    { src: "/home_Page_images/brahmin-wedding-photography.jpg", caption: "Sacred Homam Ritual", alt: "Homam Ritual" },
    { src: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg", caption: "Sunset Monograph Shoot", alt: "Sunset Shoot" },
    { src: "/home_Page_images/engagement-photo-studio-chennai.jpg", caption: "Ring Exchange Close-up", alt: "Ring Exchange" },
    { src: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg", caption: "Maternity Celebration", alt: "Maternity Celebration" },
    { src: "/home_Page_images/kids-birthday-photographer-chennai.webp", caption: "Milestone Birthday Marquee", alt: "Birthday Marquee" },
    { src: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio.jpg", caption: "Newborn Studio Sleep Portrait", alt: "Newborn Sleep" },
  ];

  return (
    <div className="min-h-screen bg-[#525746] text-white flex flex-col selection:bg-[#b88c42] selection:text-white">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        {/* Banner Section (PORTFOLIO SINGLE Header) */}
        <section className="pt-6 sm:pt-8 pb-6 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-sm">
              PORTFOLIO SINGLE
            </h1>
            <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#f3e3a1] mt-2">
              Showcase your talents &amp; attract new clients.
            </p>
          </div>
        </section>

        {/* Browser Mockup Container */}
        <section className="px-2 sm:px-6 lg:px-8 w-full max-w-[90%] lg:max-w-[90vw] mx-auto">
          <div className="bg-white text-stone-900 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/20">
            
            {/* Mac Browser Header Bar */}
            <div className="bg-[#f0ece5] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-stone-300 flex items-center justify-between gap-2">
              {/* Mac Traffic Dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
              </div>

              {/* Browser Address Bar */}
              <div className="flex-1 max-w-xl mx-1 sm:mx-4 bg-white px-2.5 sm:px-4 py-1.5 rounded-lg border border-stone-300 text-[10px] sm:text-xs font-mono text-stone-700 flex items-center justify-between shadow-inner gap-2 min-w-0 overflow-hidden">
                <span className="truncate overflow-hidden font-medium text-stone-800 tracking-tight">
                  dhilipstudio.com/wedding/{item.slug}
                </span>
                <span className="material-symbols-outlined text-xs text-stone-400 shrink-0">lock</span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 opacity-0 pointer-events-none shrink-0">
                <span className="w-2.5 h-2.5 rounded-full"></span>
                <span className="w-2.5 h-2.5 rounded-full"></span>
                <span className="w-2.5 h-2.5 rounded-full"></span>
              </div>
            </div>

            {/* Main Interactive Monograph Showcase */}
            <div className="p-4 sm:p-6 md:p-8 space-y-8">
              
              {/* Featured Main Hero Image Slider / View All Card */}
              {item.isViewAllCard ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#18181b] border border-[#d4af37]/40 h-[260px] sm:h-[300px] flex flex-col items-center justify-center text-center p-6 sm:p-8 group">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-stone-950/80 to-black/85"></div>

                  <div className="relative z-10 max-w-md mx-auto space-y-3">
                    <div className="w-11 h-11 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#f3e3a1] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-2xl text-[#f3e3a1]">photo_library</span>
                    </div>
                    <div>
                      <span className="inline-block px-4 py-1 rounded-full bg-[#d4af37] text-stone-950 font-extrabold text-[10px] font-mono uppercase tracking-[0.25em] shadow-md">
                        500+ CELEBRATIONS &amp; MONOGRAPHS
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight drop-shadow-md">
                      Explore Full Studio Gallery
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-100 font-sans font-medium leading-relaxed max-w-sm mx-auto drop-shadow-sm">
                      View all candid wedding monographs, sacred Brahmin rituals, pre-wedding beach films, maternity &amp; milestone celebrations.
                    </p>
                    <div className="pt-1">
                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#f3e3a1] text-stone-950 font-extrabold text-xs uppercase tracking-[0.2em] px-7 py-3 rounded-full transition-all shadow-2xl hover:scale-105"
                      >
                        <span>OPEN FULL GALLERY</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group max-h-[550px] sm:max-h-[660px] md:max-h-[720px] flex items-center justify-center">
                  <img
                    src={galleryPhotos[currentImgIndex]?.src || item.coverImage}
                    alt={galleryPhotos[currentImgIndex]?.alt || item.title}
                    className="w-full max-h-[520px] sm:max-h-[630px] md:max-h-[690px] object-contain transition-all duration-700"
                  />

                  {/* Left/Right Arrows */}
                  {galleryPhotos.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#b88c42] transition-all shadow-lg border border-white/20 group-hover:scale-105"
                        title="Previous Image"
                      >
                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#b88c42] transition-all shadow-lg border border-white/20 group-hover:scale-105"
                        title="Next Image"
                      >
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                      </button>
                    </>
                  )}

                  {/* Overlaid Monograph Title & Edition Badge */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#f3e3a1] font-bold block mb-0.5">
                      FEATURED MONOGRAPH · {item.category}
                    </span>
                    <h2 className="font-serif text-xl sm:text-3xl font-bold tracking-wide uppercase leading-tight drop-shadow-md">
                      {item.title}
                    </h2>
                  </div>
                </div>
              )}

              {/* Sub-Header Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between pt-4 border-t border-stone-200 text-xs tracking-widest font-semibold text-stone-700 gap-4">
                <span className="uppercase text-[#b88c42] font-extrabold text-sm sm:text-base">
                  {item.edition}
                </span>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-stone-900 hover:text-[#b88c42] transition-colors font-bold uppercase text-xs tracking-wider"
                  >
                    <span>FOLLOW ON INSTAGRAM</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-stone-900 text-[#f3e3a1] hover:bg-[#b88c42] hover:text-white rounded-full font-bold transition-all shadow-sm text-xs uppercase tracking-wider"
                  >
                    <span>BOOK THIS STYLE</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Section 1: About This Wedding Monograph */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-stone-200">
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    About This Wedding Monograph
                  </h3>
                  <p className="text-stone-800 text-base leading-relaxed font-sans">
                    {item.description}
                  </p>
                  <p className="text-stone-700 text-sm leading-relaxed font-sans">
                    Every frame in this collection was shot in raw uncompressed resolution and hand-graded to ensure temple gold hues, rich South Indian silk sarees, and skin tones remain vivid for generations.
                  </p>
                </div>

                <div className="lg:col-span-4 bg-[#faf8f3] p-6 rounded-2xl border border-stone-200/90 space-y-4 shadow-xs">
                  <h4 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-300 pb-2">
                    Story Metadata
                  </h4>

                  <div className="space-y-3 text-xs font-sans">
                    <div>
                      <span className="text-stone-500 font-bold uppercase block tracking-wider text-[11px]">COUPLE</span>
                      <span className="font-serif font-bold text-stone-900 text-base">{item.client}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 font-bold uppercase block tracking-wider text-[11px]">LOCATION</span>
                      <span className="font-bold text-stone-900">{item.location}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 font-bold uppercase block tracking-wider text-[11px]">EVENT DATE</span>
                      <span className="font-bold text-stone-900">{item.date}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 font-bold uppercase block tracking-wider text-[11px]">EQUIPMENT &amp; ALBUM</span>
                      <ul className="list-disc list-inside text-stone-800 mt-1 space-y-1 font-medium">
                        {item.equipment.map((eq, i) => (
                          <li key={i}>{eq}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Full Event Photo Gallery Grid */}
              <div className="pt-10 border-t border-stone-200 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#b88c42]">
                      HIGH RESOLUTION 4K COLLECTION
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                      Event Photo Gallery Collection
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                    {allCollectionPhotos.length} Photos Captured
                  </span>
                </div>

                {/* Multi-Column Photo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                  {allCollectionPhotos.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxImg(photo.src)}
                      className={`group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs cursor-pointer ${
                        idx % 5 === 0 ? "col-span-2 row-span-2 h-64 sm:h-80" : "h-36 sm:h-44"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[11px] font-sans font-medium text-white line-clamp-1">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Explore More Monographs */}
              <div className="pt-10 border-t border-stone-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Explore More Monographs
                  </h3>
                  <Link
                    href="/gallery"
                    className="text-xs font-bold text-[#b88c42] hover:text-stone-900 transition-colors uppercase tracking-widest flex items-center gap-1"
                  >
                    <span>View Full Gallery</span>
                    <span className="text-base">&arr;</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {portfolioDetailsList
                    .filter((p) => p.id !== item.id)
                    .slice(0, 3)
                    .map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/gallery/${rel.id}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="h-48 w-full overflow-hidden relative bg-stone-100">
                          <img
                            src={rel.coverImage}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 space-y-1">
                          <span className="text-[11px] uppercase tracking-widest text-[#b88c42] font-extrabold block">
                            {rel.category}
                          </span>
                          <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#b88c42] transition-colors leading-snug">
                            {rel.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Pop-up Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <img
            src={lightboxImg}
            alt="Enlarged photo"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <CtaBandSection />
      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}
