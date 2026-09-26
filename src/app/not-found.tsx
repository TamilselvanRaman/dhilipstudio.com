import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 space-y-8">
          <div className="relative inline-block">
            <span className="font-serif text-8xl sm:text-9xl font-bold text-stone-200 select-none">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center font-['Great_Vibes',cursive] text-3xl sm:text-4xl text-[#b88c42]">
              Page Not Found
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Looks Like You've Wandered Off The Mandap
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              The page or monograph you are looking for might have been moved, renamed, or is currently being curated in our Porur studio.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#b88c42] text-white font-bold text-xs uppercase tracking-[0.15em] px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">home</span>
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-[0.15em] px-7 py-3.5 rounded-full hover:bg-stone-900 hover:text-white transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">photo_library</span>
              <span>Explore Gallery</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer topBgColor="bg-[#fcfbfa]" />
    </div>
  );
}
