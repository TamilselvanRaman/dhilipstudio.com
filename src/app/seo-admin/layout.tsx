"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeoAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (pathname === "/seo-admin/login") {
    return <>{children}</>;
  }

  const seoNavItems = [
    { label: "SEO Dashboard", href: "/seo-admin/dashboard", icon: "trending_up" },
    { label: "Meta & Title Tags", href: "/seo-admin/meta-tags", icon: "label" },
    { label: "Blog Article CMS", href: "/seo-admin/blog", icon: "article" },
    { label: "Keyword Rankings", href: "/seo-admin/keywords", icon: "key" },
    { label: "JSON-LD Schema", href: "/seo-admin/schema-markup", icon: "code" },
    { label: "Open Graph Cards", href: "/seo-admin/og-builder", icon: "preview" },
    { label: "Sitemap & Robots", href: "/seo-admin/sitemap", icon: "account_tree" },
    { label: "301 URL Redirects", href: "/seo-admin/redirects", icon: "fork_right" },
    { label: "Technical Audit", href: "/seo-admin/audit", icon: "health_and_safety" },
  ];

  return (
    <div className="min-h-screen bg-[#121314] text-stone-100 flex flex-col md:flex-row">
      {/* SEO Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#1b1c1c] border-r border-stone-800 shrink-0">
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <Link href="/seo-admin/dashboard" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#b88c42] text-stone-950 flex items-center justify-center font-bold font-mono">
              SEO
            </span>
            <div>
              <span className="font-serif font-bold text-sm text-[#f3e3a1] tracking-wider block">
                SEO &amp; MARKETING
              </span>
              <span className="text-[10px] text-[#f3e3a1] uppercase font-mono block">
                Growth Dashboard
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {seoNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#b88c42] text-stone-950 font-bold shadow-md"
                    : "text-stone-300 hover:bg-stone-800/80 hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Switch to Studio Admin Portal */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/60">
          <Link
            href="/admin/dashboard"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#b88c42] hover:bg-[#cca254] text-stone-950 text-xs font-bold transition-colors shadow-md"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">storefront</span>
              <span>Studio Admin</span>
            </span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3.5 bg-[#1b1c1c] border-b border-stone-800 sticky top-0 z-40">
        <Link href="/seo-admin/dashboard" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded bg-[#b88c42] text-stone-950 flex items-center justify-center font-bold text-xs font-mono">
            SEO
          </span>
          <span className="font-serif font-bold text-xs text-[#f3e3a1]">SEO MARKETING</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/dashboard"
            className="px-2.5 py-1 rounded bg-[#b88c42] text-stone-950 text-[10px] font-bold"
          >
            STUDIO ADMIN
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-stone-800 text-stone-200 border border-stone-700"
            aria-label="Toggle SEO Navigation"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1b1c1c] border-b border-stone-800 p-4 space-y-2 sticky top-[57px] z-30 shadow-2xl">
          {seoNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2 rounded-lg text-xs font-medium ${
                  isActive
                    ? "bg-[#b88c42] text-stone-950 font-bold"
                    : "text-stone-300 hover:bg-stone-800"
                }`}
              >
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Main SEO Viewport */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 overflow-y-auto max-w-7xl">{children}</main>
    </div>
  );
}
