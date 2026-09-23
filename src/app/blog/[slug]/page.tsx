import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogArticles } from "@/data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#ffffff] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2 flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-stone-900 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#b88c42] font-semibold truncate">{article.category}</span>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8">
          {/* Main Top Header Image (Matching Screenshots 2-4) */}
          <div className="w-full h-[320px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 relative">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 uppercase tracking-widest mb-3">
              <span className="px-3 py-1 bg-stone-100 text-[#b88c42] font-bold rounded-full border border-stone-200">
                {article.category}
              </span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>By {article.author}</span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-stone-900 leading-tight tracking-tight">
              {article.title}
            </h1>
          </div>

          {/* Article Editorial Sections */}
          <div className="space-y-8 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl text-stone-900 uppercase tracking-wide pt-4 border-t border-stone-100">
                    {sec.heading}
                  </h2>
                )}

                {sec.paragraphs?.map((p, pIdx) => {
                  // Render hyperlinked text matching user screenshot
                  if (p.includes("maternity photoshoot Chennai")) {
                    const parts = p.split("maternity photoshoot Chennai");
                    return (
                      <p key={pIdx}>
                        {parts[0]}
                        <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                          maternity photoshoot Chennai
                        </Link>
                        {parts[1]}
                      </p>
                    );
                  }

                  if (p.includes("wedding photography in Chennai")) {
                    const parts = p.split("wedding photography in Chennai");
                    return (
                      <p key={pIdx}>
                        {parts[0]}
                        <Link href="/gallery" className="text-blue-600 font-semibold hover:underline">
                          wedding photography in Chennai
                        </Link>
                        {parts[1]}
                      </p>
                    );
                  }

                  return <p key={pIdx}>{p}</p>;
                })}

                {sec.bullets && (
                  <ul className="list-disc pl-6 space-y-2.5 text-stone-800 font-sans my-4">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Back to Blog List CTA */}
          <div className="pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#b88c42] transition-colors"
            >
              <span>&larr; Back to All Photography Blogs</span>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#b88c42] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-md"
            >
              Book Session with Dhilip Studio
            </Link>
          </div>
        </article>

      </main>

      <Footer topBgColor="bg-[#ffffff]" />
    </div>
  );
}
