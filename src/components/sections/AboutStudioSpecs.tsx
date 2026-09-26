"use client";

import React from "react";
import Link from "next/link";

export const AboutStudioSpecs: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 1. Studio Core Values & Philosophy */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-stone-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b88c42]/15 border border-[#b88c42]/40 text-[#b88c42] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            DHILIP STUDIO - PORUR LEGACY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight leading-tight">
            Our Core Pillars &amp; Studio Philosophy
          </h2>
          <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#b88c42] mt-2">
            Built on trust, reverence for sacred traditions, and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#faf8f5] border border-stone-200/80 hover:border-[#b88c42]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#b88c42] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">visibility</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Unobtrusive Presence</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We operate with quiet reverence during Brahmin Muhurthams and sacred vows. We capture genuine smiles and tears without disrupting priests, families, or ritual timelines.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#faf8f5] border border-stone-200/80 hover:border-[#b88c42]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#b88c42] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Hand-Retouched Fidelity</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every single photograph is individually hand-graded by our master colorists. We preserve rich South Indian silk sarees, temple gold jewelry, and authentic skin tones without harsh artificial filters.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#faf8f5] border border-stone-200/80 hover:border-[#b88c42]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#b88c42] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Raw Silk Albums</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We print your bespoke wedding monograph on museum-grade raw silk paper using archival inks engineered to resist fading for over 100 years.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Studio Technical Gear & Arsenal */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] font-bold block">
              CINEMA GEAR &amp; INFRASTRUCTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              State-of-the-Art Cinema Gear for Unmatched Clarity
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Our Porur studio houses top-of-the-line 4K full-frame cinema bodies, high-speed prime lenses, temperature-controlled studio spaces, and certified aerial drone systems.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                <span className="text-[#f3e3a1] font-bold block mb-1">Sony A7IV &amp; FX3</span>
                <span className="text-stone-400">4K 120fps Cinema Cameras</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                <span className="text-[#f3e3a1] font-bold block mb-1">DJI Mavic 3 Pro</span>
                <span className="text-stone-400">Certified Aerial Drone</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                <span className="text-[#f3e3a1] font-bold block mb-1">Master Primes</span>
                <span className="text-stone-400">85mm f/1.4 &amp; 50mm f/1.2</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                <span className="text-[#f3e3a1] font-bold block mb-1">Profoto Studio</span>
                <span className="text-stone-400">Controlled Lighting Setup</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700 shadow-2xl">
              <img
                src="/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp"
                alt="Dhilip Studio Porur Cinema Gear Setup"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold text-[#f3e3a1] uppercase block mb-1">PORUR STUDIO HQ</span>
                <h4 className="font-serif text-xl font-bold">Porur Studio &amp; Editing Suite</h4>
                <p className="text-xs text-stone-300">Located at Mandaveli Street, Karambakkam, Porur, Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
