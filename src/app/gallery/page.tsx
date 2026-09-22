"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";

const galleryItems = [
  {
    id: 1,
    title: "Sacred Mandap Vows",
    category: "WEDDING",
    src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    location: "Mylapore, Chennai",
  },
  {
    id: 2,
    title: "Unscripted Ceremony Laughs",
    category: "CANDID",
    src: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
    location: "Porur, Chennai",
  },
  {
    id: 3,
    title: "Kasi Yatra & Flower Shower",
    category: "BRAHMIN",
    src: "/home_Page_images/brahmin-wedding-photography.jpg",
    location: "Adyar, Chennai",
  },
  {
    id: 4,
    title: "Post-Wedding Solitude",
    category: "PRE-WEDDING",
    src: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg",
    location: "Mahabalipuram Beach",
  },
  {
    id: 5,
    title: "Studio Ring Exchange",
    category: "WEDDING",
    src: "/home_Page_images/engagement-photo-studio-chennai.jpg",
    location: "Anna Nagar Studio",
  },
  {
    id: 6,
    title: "Maternity Baby Bump Journey",
    category: "MATERNITY",
    src: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg",
    location: "ECR Outdoor Shoot",
  },
  {
    id: 7,
    title: "Newborn Pure Innocence",
    category: "NEWBORN",
    src: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio.jpg",
    location: "Temperature Controlled Studio",
  },
  {
    id: 8,
    title: "Amrutha 1st Birthday Milestone",
    category: "BIRTHDAY",
    src: "/home_Page_images/kids-birthday-photographer-chennai.webp",
    location: "T. Nagar Hall",
  },
];

const categories = ["ALL", "WEDDING", "CANDID", "BRAHMIN", "PRE-WEDDING", "MATERNITY", "NEWBORN", "BIRTHDAY"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "ALL"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-20">
        {/* Header Title with Background Image */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-stone-800 text-center bg-stone-950 text-white min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
          {/* Background Image & Light Black Blur Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/banners/gallery_page_banner.png"
              alt="Wedding Photography Portfolio Background"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Light Black Color Blur Overlay */}
            <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto py-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Photographic Monograph Gallery
            </h1>
            <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#f3e3a1] mt-3 font-medium drop-shadow-sm">
              Every photograph individually hand-retouched in rich heirloom tones
            </p>

            {/* Category Filters - Perfectly Spaced Capsule Bar */}
            <div className="relative z-10 mt-8 sm:mt-10 text-center px-3 sm:px-4">
              <div className="inline-flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 px-3.5 sm:px-5 bg-stone-950/85 backdrop-blur-2xl rounded-2xl md:rounded-full border border-amber-200/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-x-auto max-w-full no-scrollbar scroll-smooth">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 sm:px-4.5 md:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-[#b88c42] via-[#cca254] to-[#b88c42] text-white font-bold shadow-lg shadow-[#b88c42]/40 border border-amber-200/50"
                        : "text-stone-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const galleryId = item.id > 6 ? ((item.id - 1) % 6) + 1 : item.id;
              return (
                <Link
                  key={item.id}
                  href={`/gallery/${galleryId}`}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 block"
                >
                  <div className="h-72 w-full overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/50 backdrop-blur-md text-[#f3e3a1] text-[10px] uppercase tracking-widest font-mono rounded border border-white/20">
                      {item.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] text-[#f3e3a1] uppercase tracking-widest font-semibold block mb-0.5">
                        {item.location}
                      </span>
                      <h3 className="font-serif text-lg font-bold leading-snug">{item.title}</h3>
                      <span className="text-[10px] text-[#f3e3a1] font-bold uppercase tracking-wider underline block mt-1">
                        VIEW MONOGRAPH &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-700 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-6 bg-stone-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#f3e3a1] font-mono">{selectedImage.category} · {selectedImage.location}</span>
                  <h3 className="font-serif text-2xl font-bold mt-1">{selectedImage.title}</h3>
                </div>
                <a
                  href="/contact"
                  className="px-5 py-2.5 bg-[#b88c42] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors"
                >
                  Book Similar Shoot
                </a>
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
