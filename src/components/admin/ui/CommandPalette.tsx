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

const commandItems: CommandItem[] = [
  { id: "dash", label: "Studio Admin Dashboard", category: "Navigation", href: "/admin/dashboard", icon: "dashboard" },
  { id: "pages-home", label: "Edit Public Pages — Home Page", category: "Edit Public Pages", href: "/admin/pages?page=home", icon: "home" },
  { id: "pages-about", label: "Edit Public Pages — About Us", category: "Edit Public Pages", href: "/admin/pages?page=about", icon: "info" },
  { id: "pages-gallery", label: "Edit Public Pages — Gallery", category: "Edit Public Pages", href: "/admin/pages?page=gallery", icon: "photo_library" },
  { id: "pages-contact", label: "Edit Public Pages — Contact Us", category: "Edit Public Pages", href: "/admin/pages?page=contact", icon: "contact_mail" },
  { id: "bookings", label: "Manage Bookings & Shoots", category: "Operations", href: "/admin/bookings", icon: "calendar_today" },
  { id: "inquiries", label: "Inquiries & Leads Kanban", category: "Operations", href: "/admin/inquiries", icon: "mark_email_unread" },
  { id: "gallery", label: "Monograph Gallery Uploads", category: "Media", href: "/admin/gallery", icon: "photo_library" },
  { id: "albums", label: "Album Collections", category: "Media", href: "/admin/albums", icon: "collections" },
  { id: "videos", label: "Video Showcase Embeds", category: "Media", href: "/admin/videos", icon: "smart_display" },
  { id: "pricing", label: "Pricing Packages & Quotes", category: "Finance", href: "/admin/pricing", icon: "payments" },
  { id: "users", label: "Users & Access Control", category: "System", href: "/admin/users", icon: "admin_panel_settings" },
  { id: "settings", label: "Studio Settings & API Keys", category: "System", href: "/admin/settings", icon: "settings" },
  { id: "seo", label: "Switch to SEO Dashboard", category: "System", href: "/seo-admin/dashboard", icon: "trending_up" },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredCommands = commandItems.filter(
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative mx-auto max-w-xl bg-[#17171A] border border-[#2A2A2E] rounded-2xl shadow-2xl overflow-hidden text-[#F5F5F2]">
        {/* Search Bar */}
        <div className="p-4 border-b border-[#2A2A2E] flex items-center gap-3 bg-[#141416]">
          <span className="material-symbols-outlined text-[#C89B3C] text-xl">search</span>
          <input
            type="text"
            placeholder="Type a command or search modules... (e.g. Bookings, Leads, Settings)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-sm text-[#F5F5F2] placeholder-[#9A9A9E] focus:outline-none focus:ring-0 font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#9A9A9E] bg-[#1F1F23] border border-[#2A2A2E] rounded">
            ESC
          </kbd>
        </div>

        {/* Command Results */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#2A2A2E]/40">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <div
                key={cmd.id}
                onClick={() => handleSelect(cmd.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#1F1F23] hover:border-[#2A2A2E] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1F1F23] border border-[#2A2A2E] flex items-center justify-center text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-stone-950 transition-colors">
                    <span className="material-symbols-outlined text-base">{cmd.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#F5F5F2] group-hover:text-[#E8C978]">
                      {cmd.label}
                    </div>
                    <div className="text-[10px] text-[#9A9A9E] font-mono">{cmd.category}</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-stone-600 group-hover:text-[#C89B3C]">
                  arrow_forward
                </span>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-[#9A9A9E] font-sans">
              No matching commands or modules found.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-[#2A2A2E] bg-[#141416] text-[11px] font-mono text-[#9A9A9E] flex items-center justify-between">
          <span>Navigate with mouse or click command</span>
          <span>Shortcut: <kbd className="text-[#E8C978] bg-[#1F1F23] px-1.5 py-0.5 rounded border border-[#2A2A2E]">⌘K</kbd></span>
        </div>
      </div>
    </div>
  );
}
