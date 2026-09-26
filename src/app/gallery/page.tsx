"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";

interface GalleryItem {
  id: number;
  title: string;
  category: "WEDDING" | "CANDID" | "PRE-WEDDING" | "MATERNITY" | "BIRTHDAY" | "EVENTS";
  src: string;
  location: string;
  detailId: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "South Indian Bridal Heritage Monograph",
    category: "WEDDING",
    src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    location: "Mylapore Palace, Chennai",
    detailId: 1,
  },
  {
    id: 2,
    title: "Unscripted Family Garland Vows",
    category: "CANDID",
    src: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
    location: "Adyar Mandapam, Chennai",
    detailId: 2,
  },
  {
    id: 3,
    title: "Sacred Brahmin Homam & Kasi Yatra",
    category: "WEDDING",
    src: "/home_Page_images/brahmin-wedding-photography.webp",
    location: "Mylapore Fine Arts, Chennai",
    detailId: 3,
  },
  {
    id: 4,
    title: "Mahabalipuram Coastal Sunset Solitude",
    category: "PRE-WEDDING",
    src: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp",
    location: "Mahabalipuram Shore",
    detailId: 4,
  },
  {
    id: 5,
    title: "Studio Ring Exchange & Gold Monograph",
    category: "EVENTS",
    src: "/home_Page_images/engagement-photo-studio-chennai.webp",
    location: "Anna Nagar Studio, Chennai",
    detailId: 5,
  },
  {
    id: 6,
    title: "Blush Garden Bump & Maternity Journey",
    category: "MATERNITY",
    src: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.webp",
    location: "ECR Resort, Chennai",
    detailId: 6,
  },
  {
    id: 7,
    title: "Milestone Marquee 1st Birthday Joy",
    category: "BIRTHDAY",
    src: "/home_Page_images/kids-birthday-photographer-chennai.webp",
    location: "T. Nagar Hall, Chennai",
    detailId: 8,
  },
  {
    id: 8,
    title: "Newborn Innocence Studio Sleep Portrait",
    category: "EVENTS",
    src: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio.webp",
    location: "Porur Studio, Chennai",
    detailId: 7,
  },
  {
    id: 9,
    title: "Shore Temple Breeze Couple Monograph",
    category: "PRE-WEDDING",
    src: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio-mobile.webp",
    location: "ECR Beach Corridor",
    detailId: 4,
  },
  {
    id: 10,
    title: "Haldi Flower Swing & Laughter",
    category: "CANDID",
    src: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio-mobile.webp",
    location: "Adyar Garden, Chennai",
    detailId: 2,
  },
  {
    id: 11,
    title: "Evening Stage Mandap Reception",
    category: "WEDDING",
    src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio-mobile-opt.webp",
    location: "MRC Centre, Chennai",
    detailId: 1,
  },
  {
    id: 12,
    title: "Mangalyadharanam Minute Rituals",
    category: "WEDDING",
    src: "/home_Page_images/brahmin-wedding-photography-mobile.webp",
    location: "Mylapore Heritage Hall",
    detailId: 3,
  },
  {
    id: 13,
    title: "Temple Gold Jewelry & Bridal Detail",
    category: "EVENTS",
    src: "/home_Page_images/engagement-photo-studio-chennai-mobile.webp",
    location: "Studio Atelier, Chennai",
    detailId: 5,
  },
  {
    id: 14,
    title: "Tender Parenthood Embrace Monograph",
    category: "MATERNITY",
    src: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio-mobile.webp",
    location: "Besant Nagar Canopy",
    detailId: 6,
  },
  {
    id: 15,
    title: "Tiny Parent Hands & Newborn Care",
    category: "EVENTS",
    src: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio-mobile.webp",
    location: "Porur Studio, Chennai",
    detailId: 7,
  },
  {
    id: 16,
    title: "Multi-Generational Celebration Smiles",
    category: "BIRTHDAY",
    src: "/home_Page_images/kids-birthday-photographer-chennai-mobile.webp",
    location: "Grand Palace, Chennai",
    detailId: 8,
  },
];

const categories = ["ALL", "WEDDING", "CANDID", "PRE-WEDDING", "MATERNITY", "BIRTHDAY", "EVENTS"];

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category")?.toUpperCase() || "ALL";

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("ALL");
    }
  }, [categoryParam]);

  const filteredItems =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="w-full">
      {/* 1. EDITORIAL HEADER SECTION */}
      <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 px-4 text-center bg-gradient-to-b from-stone-900/10 via-stone-100/40 to-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto space-y-2">
          {/* Top Gold Badge */}
          <div className="inline-flex items-center gap-3 text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-[#b88c42]">
            <span className="h-[1px] w-8 bg-[#b88c42]/40"></span>
            <span>CURATED ARCHIVE</span>
            <span className="h-[1px] w-8 bg-[#b88c42]/40"></span>
          </div>

          {/* Large Serif Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-stone-900 uppercase leading-none">
            GALLERY
          </h1>

          {/* Subtitle */}
          <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl lg:text-4xl text-[#b88c42] font-normal pt-1">
            Stories captured beautifully.
          </p>
        </div>

        {/* 2. CATEGORY FILTER TABS BAR */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-stone-200/80 pt-6 max-w-5xl mx-auto px-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(12);
                }}
                className={`relative py-1 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? "text-[#b88c42]" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b88c42] rounded-full animate-fade-in-up"></span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. SUB-HEADER META BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-5 flex flex-wrap items-center justify-between text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-stone-500 border-b border-stone-200/80 gap-3">
        <div>
          <span>SHOWING: {activeCategory} STORIES ({filteredItems.length} MONOGRAPHS)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#b88c42]"></span>
          <span>ARCHIVAL EXHIBITION GRID</span>
        </div>
      </section>

      {/* 4. BALANCED UNIFORM PHOTO GRID (4 COLUMNS FLEX GRID) */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-14 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.detailId}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container with Uniform Aspect Ratio */}
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-stone-100">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />

                {/* Overlaid Category Badge */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-mono text-[9px] uppercase tracking-[0.2em] font-semibold">
                  {item.category}
                </div>

                {/* Overlaid Monograph Hover CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#f3e3a1] block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-base font-bold leading-snug mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f3e3a1] group-hover:text-white transition-colors">
                    <span>VIEW STORY MONOGRAPH</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-white flex flex-col justify-between flex-1 border-t border-stone-100">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#b88c42] font-extrabold block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#b88c42] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 mt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-stone-500 font-semibold">
                  <span>ARCHIVE NO. {String(item.id).padStart(2, "0")}</span>
                  <span className="text-[#b88c42] group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 5. LOAD MORE BUTTON & ARCHIVE FOOTER */}
        <div className="mt-14 sm:mt-18 text-center space-y-3">
          {visibleCount < filteredItems.length && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="inline-flex items-center justify-center border-2 border-stone-800 hover:border-[#b88c42] hover:bg-stone-900 hover:text-white text-stone-900 font-mono text-xs font-bold uppercase tracking-[0.25em] px-10 py-4 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer rounded-full"
            >
              LOAD MORE PHOTOGRAPHS
            </button>
          )}

          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
            ARCHIVE CONTAINS 500+ BESPOKE WEDDING STORIES
          </p>
        </div>
      </section>

      {/* 6. LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#b88c42] transition-colors border border-white/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <Link
              href={`/gallery/${selectedItem.detailId}`}
              className="max-h-[70vh] w-full overflow-hidden bg-black flex items-center justify-center block cursor-pointer"
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </Link>

            <div className="p-6 bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-800">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#f3e3a1] font-mono font-bold block mb-1">
                  {selectedItem.category} · {selectedItem.location}
                </span>
                <h3 className="font-serif text-2xl font-bold">{selectedItem.title}</h3>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/gallery/${selectedItem.detailId}`}
                  className="px-6 py-3 bg-[#b88c42] hover:bg-[#9e742f] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors shadow-md shrink-0"
                >
                  View Full Monograph &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <CtaBandSection />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />
      <main className="flex-1 pt-20">
        <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-stone-500">Loading Gallery Archive...</div>}>
          <GalleryContent />
        </Suspense>
      </main>
      <Footer topBgColor="bg-[#faf8f5]" />
    </div>
  );
}
