"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function SidebarNavContent({
  pathname,
  onMobileClose,
}: {
  pathname: string;
  onMobileClose?: () => void;
}) {
  const searchParams = useSearchParams();
  const activeQueryPage = searchParams ? searchParams.get("page") || "home" : "home";
  const [pagesSubmenuOpen, setPagesSubmenuOpen] = useState(
    pathname.startsWith("/admin/pages")
  );

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
    { label: "Edit Public Pages", href: "/admin/pages", icon: "edit_document" },
    { label: "Bookings", href: "/admin/bookings", icon: "calendar_today" },
    { label: "Inquiries & Leads", href: "/admin/inquiries", icon: "mark_email_unread" },
    { label: "Monograph Gallery", href: "/admin/gallery", icon: "photo_library" },
    { label: "Album Collections", href: "/admin/albums", icon: "collections" },
    { label: "Video Showcase", href: "/admin/videos", icon: "smart_display" },
    { label: "Categories", href: "/admin/categories", icon: "category" },
    { label: "Client Reviews", href: "/admin/reviews", icon: "rate_review" },
    { label: "Team Members", href: "/admin/team", icon: "group" },
    { label: "Pricing Packages", href: "/admin/pricing", icon: "payments" },
    { label: "Users & Access", href: "/admin/users", icon: "admin_panel_settings" },
    { label: "Studio Settings", href: "/admin/settings", icon: "settings" },
  ];

  const publicPagesList = [
    { label: "Home Page", id: "home", icon: "home" },
    { label: "About Us", id: "about", icon: "info" },
    { label: "Gallery", id: "gallery", icon: "photo_library" },
    { label: "Videos", id: "videos", icon: "smart_display" },
    { label: "Contact Us", id: "contact", icon: "contact_mail" },
    { label: "Blog Journal", id: "blog", icon: "article" },
    { label: "Global Footer", id: "footer", icon: "web" },
  ];

  return (
    <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
      {navItems.map((item) => {
        if (item.href === "/admin/pages") {
          const isPagesActive = pathname.startsWith("/admin/pages");
          return (
            <div key={item.href} className="space-y-1">
              <div className="flex items-center justify-between">
                <Link
                  href="/admin/pages"
                  onClick={onMobileClose}
                  className={`flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isPagesActive
                      ? "bg-[#b88c42] text-stone-950 font-bold shadow-md"
                      : "text-stone-300 hover:bg-stone-800/80 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPagesSubmenuOpen(!pagesSubmenuOpen);
                    }}
                    className="p-1 rounded hover:bg-black/20"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {pagesSubmenuOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                </Link>
              </div>

              {/* Expandable Submenu listing all editable public pages */}
              {pagesSubmenuOpen && (
                <div className="pl-6 space-y-1 pt-1 border-l-2 border-[#b88c42]/40 ml-4">
                  {publicPagesList.map((subPage) => {
                    const isSubActive =
                      pathname === "/admin/pages" && activeQueryPage === subPage.id;
                    return (
                      <Link
                        key={subPage.id}
                        href={`/admin/pages?page=${subPage.id}`}
                        onClick={onMobileClose}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                          isSubActive
                            ? "bg-[#b88c42]/25 text-[#f3e3a1] font-bold border border-[#b88c42]/40 shadow-xs"
                            : "text-stone-300 hover:text-[#f3e3a1] hover:bg-stone-800"
                        }`}
                      >
                        <span className="material-symbols-outlined text-xs text-[#b88c42]">
                          {subPage.icon}
                        </span>
                        <span>{subPage.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onMobileClose}
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
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If on login page, don't show admin sidebar/header
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#121314] text-stone-100 flex flex-col md:flex-row">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#1b1c1c] border-r border-stone-800 shrink-0">
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <img src="/logo.png" alt="Dhilip Studio" className="h-8 w-auto" />
            <span className="font-serif font-bold text-sm text-[#f3e3a1] tracking-wider uppercase">
              ADMIN PORTAL
            </span>
          </Link>
        </div>

        <Suspense fallback={<div className="flex-1 p-4 text-xs text-stone-500">Loading navigation...</div>}>
          <SidebarNavContent pathname={pathname} />
        </Suspense>

        {/* Switch to SEO Dashboard Banner */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/60">
          <Link
            href="/seo-admin/dashboard"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 text-xs font-semibold border border-emerald-700/50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">trending_up</span>
              <span>SEO Dashboard</span>
            </span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3.5 bg-[#1b1c1c] border-b border-stone-800 sticky top-0 z-40">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <img src="/logo.png" alt="Dhilip Studio" className="h-7 w-auto" />
          <span className="font-serif font-bold text-xs text-[#f3e3a1]">STUDIO ADMIN</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/seo-admin/dashboard"
            className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold border border-emerald-800"
          >
            SEO DASHBOARD
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-stone-800 text-stone-200"
            aria-label="Toggle Navigation"
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
          <Suspense fallback={<div className="p-4 text-xs text-stone-500">Loading navigation...</div>}>
            <SidebarNavContent
              pathname={pathname}
              onMobileClose={() => setMobileMenuOpen(false)}
            />
          </Suspense>
        </div>
      )}

      {/* Main Content Viewport */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto w-full max-w-[1700px] mx-auto">{children}</main>
    </div>
  );
}

