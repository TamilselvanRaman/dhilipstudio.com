"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  label: string;
  category: string;
  href: string;
  icon: string;
}

const seoCommands: CommandItem[] = [
  { id: "dash", label: "SEO Growth Dashboard", category: "Overview", href: "/seo-admin/dashboard", icon: "trending_up" },
  { id: "meta", label: "Meta & Title Tags Editor", category: "On-Page SEO", href: "/seo-admin/meta-tags", icon: "label" },
  { id: "blog", label: "Blog Article CMS & SEO Sidebar", category: "Content Marketing", href: "/seo-admin/blog", icon: "article" },
  { id: "keywords", label: "Tracked Keyword Rankings & Local 3-Pack", category: "Rankings", href: "/seo-admin/keywords", icon: "key" },
  { id: "schema", label: "JSON-LD Schema Visual Builder", category: "Structured Data", href: "/seo-admin/schema-markup", icon: "code" },
  { id: "og", label: "Open Graph & Social Cards Preview", category: "Social Marketing", href: "/seo-admin/og-builder", icon: "preview" },
  { id: "sitemap", label: "XML Sitemap & robots.txt Editor", category: "Technical SEO", href: "/seo-admin/sitemap", icon: "account_tree" },
  { id: "redirects", label: "301 URL Redirects & Broken Links", category: "Technical SEO", href: "/seo-admin/redirects", icon: "fork_right" },
  { id: "audit", label: "Technical Core Web Vitals Audit", category: "Site Health", href: "/seo-admin/audit", icon: "health_and_safety" },
];

interface SeoCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SeoCommandPalette({ isOpen, onClose }: SeoCommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = seoCommands.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative mx-auto max-w-xl bg-[#17171A] border border-[#2A2A2E] rounded-2xl shadow-2xl overflow-hidden text-[#F5F5F2]">
        <div className="p-4 border-b border-[#2A2A2E] flex items-center gap-3 bg-[#141416]">
          <span className="material-symbols-outlined text-[#4C9AFF] text-xl">search</span>
          <input
            type="text"
            placeholder="Search SEO tools... (e.g. Meta Tags, Schema, Keywords, Core Web Vitals)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-sm text-[#F5F5F2] placeholder-[#9A9A9E] focus:outline-none focus:ring-0 font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#9A9A9E] bg-[#1F1F23] border border-[#2A2A2E] rounded">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#2A2A2E]/40">
          {filtered.length > 0 ? (
            filtered.map((cmd) => (
              <div
                key={cmd.id}
                onClick={() => handleSelect(cmd.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#1F1F23] hover:border-[#2A2A2E] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1F1F23] border border-[#2A2A2E] flex items-center justify-center text-[#4C9AFF] group-hover:bg-[#4C9AFF] group-hover:text-stone-950 transition-colors">
                    <span className="material-symbols-outlined text-base">{cmd.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#F5F5F2] group-hover:text-[#4C9AFF]">
                      {cmd.label}
                    </div>
                    <div className="text-[10px] text-[#9A9A9E] font-mono">{cmd.category}</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-stone-600 group-hover:text-[#4C9AFF]">
                  arrow_forward
                </span>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-[#9A9A9E] font-sans">
              No matching SEO modules found.
            </div>
          )}
        </div>

        <div className="px-4 py-2 border-t border-[#2A2A2E] bg-[#141416] text-[11px] font-mono text-[#9A9A9E] flex items-center justify-between">
          <span>Navigate with mouse or click item</span>
          <span>Shortcut: <kbd className="text-[#4C9AFF] bg-[#1F1F23] px-1.5 py-0.5 rounded border border-[#2A2A2E]">⌘K</kbd></span>
        </div>
      </div>
    </div>
  );
}
