"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { blogArticles } from "@/data/blogData";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          {/* Top Page Header / Title Content Section */}
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

          {/* 3-Column Blog Cards Grid (Direct Links to /blog/[slug]) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogArticles.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Blog Thumbnail Image */}
                  <div className="h-56 sm:h-60 w-full overflow-hidden rounded-xl border border-stone-200/80 shadow-sm mb-4 bg-stone-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Blog Title in Bright Blue Font (Matching User Screenshot) */}
                  <h2 className="font-sans font-bold text-sm sm:text-base text-[#0070f3] group-hover:text-[#0051a8] group-hover:underline uppercase tracking-wide leading-snug mb-3">
                    {post.cardTitle}
                  </h2>

                  {/* Blog Excerpt Text */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                {/* "Read More →" Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#0070f3] transition-colors">
                    <span>Read More</span>
                    <span className="text-base">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CtaBandSection />
      </main>

      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}
