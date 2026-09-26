"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { blogArticles } from "@/data/blogData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-24 pb-16 sm:pb-24">
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          {/* Top Page Header / Title Content Section with Open Reveal */}
          <ScrollReveal variant="open-scale" duration={800} isOpenReveal={true}>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#b88c42] bg-[#b88c42]/10 px-3.5 py-1 rounded-full border border-[#b88c42]/20">
                WEDDING JOURNAL &amp; INSIGHTS
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-stone-900">
                Wedding Photography Articles &amp; Guides
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-stone-600 font-sans leading-relaxed max-w-2xl mx-auto">
                Explore expert photography advice, candid wedding tips, Brahmin ritual traditions, and behind-the-scenes stories from real celebrations captured by Dhilip Studio across Chennai.
              </p>
            </div>
          </ScrollReveal>

          {/* 3-Column Blog Cards Grid with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogArticles.map((post, idx) => (
              <ScrollReveal key={post.id} variant="fade-up" delay={idx * 120} duration={750}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  <div>
                    {/* Blog Thumbnail Image */}
                    <div className="h-56 sm:h-60 w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-sm mb-4 bg-stone-100 relative">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Blog Title */}
                    <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-[#b88c42] transition-colors leading-snug mb-2.5">
                      {post.cardTitle}
                    </h2>

                    {/* Blog Excerpt Text */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3 font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* "Read More →" Simple Text Link */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 group-hover:text-[#b88c42] transition-colors">
                      <span>Read More</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ScrollReveal variant="fade-up" delay={200}>
          <CtaBandSection />
        </ScrollReveal>
      </main>

      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}
