"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { CommandPalette } from "@/components/admin/ui/CommandPalette";
import { ThemeProvider, useDashboardTheme } from "@/lib/ThemeContext";
import { ThemeSelectorModal } from "@/components/admin/ui/ThemeSelectorModal";

function SidebarNavContent({
  pathname,
  isCollapsed,
  onMobileClose,
}: {
  pathname: string;
  isCollapsed: boolean;
  onMobileClose?: () => void;
}) {
  const searchParams = useSearchParams();
  const { activeTheme } = useDashboardTheme();
  const activeQueryPage = searchParams ? searchParams.get("page") || "home" : "home";
  const [pagesSubmenuOpen, setPagesSubmenuOpen] = useState(
    pathname.startsWith("/admin/pages")
  );
  const [mediaSubmenuOpen, setMediaSubmenuOpen] = useState(
    pathname.startsWith("/admin/gallery") ||
    pathname.startsWith("/admin/albums") ||
    pathname.startsWith("/admin/videos") ||
    pathname.startsWith("/admin/blog")
  );

  const navItems = [
    
    { label: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
    { label: "Bookings", href: "/admin/bookings", icon: "calendar_today" },
    { label: "Inquiries & Leads", href: "/admin/inquiries", icon: "mark_email_unread" },
    { label: "Edit Public Pages", href: "/admin/pages", icon: "edit_document" },
    { label: "Monograph & Media Showcase", href: "/admin/gallery", icon: "collections_bookmark", isMediaGroup: true },
    { label: "Client Reviews", href: "/admin/reviews", icon: "rate_review" },
    { label: "Studio Settings", href: "/admin/settings", icon: "settings" },
  ];

  const publicPagesList = [
    { label: "Home Page", id: "home", icon: "home" },
    { label: "About Us", id: "about", icon: "info" },
    { label: "Service Pages (8 Pages)", id: "services", icon: "miscellaneous_services" },
    { label: "Gallery", id: "gallery", icon: "photo_library" },
    { label: "Videos", id: "videos", icon: "smart_display" },
    { label: "Contact Us", id: "contact", icon: "contact_mail" },
    { label: "Blog Journal", id: "blog", icon: "article" },
    { label: "Global Footer", id: "footer", icon: "web" },
  ];

  const mediaSubmenuList = [
    { label: "Monograph Gallery", href: "/admin/gallery", icon: "photo_library" },
    { label: "Album Collections", href: "/admin/albums", icon: "collections" },
    { label: "Video Showcase", href: "/admin/videos", icon: "smart_display" },
    { label: "Service Pages CMS", href: "/admin/services", icon: "miscellaneous_services" },
    { label: "Blog Journal CMS", href: "/admin/blog", icon: "article" },
  ];

  return (
    <nav className="flex-1 p-3 space-y-1 overflow-y-auto no-scrollbar">
      {navItems.map((item) => {
        // 1. Pages Submenu
        if (item.href === "/admin/pages") {
          const isPagesActive = pathname.startsWith("/admin/pages");
          return (
            <div key={item.href} className="space-y-1">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setPagesSubmenuOpen(!pagesSubmenuOpen)}
                  title={isCollapsed ? item.label : undefined}
                  style={
                    isPagesActive
                      ? { backgroundColor: activeTheme.accentColor, color: "#FFFFFF" }
                      : { color: activeTheme.textMuted }
                  }
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isPagesActive ? "font-bold shadow-md" : "hover:bg-slate-200/50"
                  }`}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-lg shrink-0">
                      {item.icon}
                    </span>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </span>
                  {!isCollapsed && (
                    <span className="material-symbols-outlined text-sm shrink-0 ml-1">
                      {pagesSubmenuOpen ? "expand_less" : "expand_more"}
                    </span>
                  )}
                </button>
              </div>

              {/* Submenu for Public Pages */}
              {!isCollapsed && pagesSubmenuOpen && (
                <div
                  className="pl-6 space-y-1 pt-1 border-l-2 ml-4"
                  style={{ borderColor: activeTheme.accentColor }}
                >
                  {publicPagesList.map((subPage) => {
                    const isSubActive =
                      pathname === "/admin/pages" && activeQueryPage === subPage.id;
                    return (
                      <Link
                        key={subPage.id}
                        href={`/admin/pages?page=${subPage.id}`}
                        onClick={onMobileClose}
                        style={
                          isSubActive
                            ? {
                                backgroundColor: `${activeTheme.accentColor}20`,
                                color: activeTheme.accentColor,
                                borderColor: `${activeTheme.accentColor}40`,
                              }
                            : { color: activeTheme.textMuted }
                        }
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all border border-transparent ${
                          isSubActive ? "font-bold" : "hover:opacity-80"
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-xs"
                          style={{ color: activeTheme.accentColor }}
                        >
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

        // 2. Monograph & Media Showcase 4 Sub-Options Dropdown
        if (item.isMediaGroup) {
          const isMediaActive =
            pathname.startsWith("/admin/gallery") ||
            pathname.startsWith("/admin/albums") ||
            pathname.startsWith("/admin/videos") ||
            pathname.startsWith("/admin/blog");

          return (
            <div key={item.label} className="space-y-1">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMediaSubmenuOpen(!mediaSubmenuOpen)}
                  title={isCollapsed ? item.label : undefined}
                  style={
                    isMediaActive
                      ? { backgroundColor: activeTheme.accentColor, color: "#FFFFFF" }
                      : { color: activeTheme.textMuted }
                  }
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isMediaActive ? "font-bold shadow-md" : "hover:bg-slate-200/50"
                  }`}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-lg shrink-0">
                      {item.icon}
                    </span>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </span>
                  {!isCollapsed && (
                    <span className="material-symbols-outlined text-sm shrink-0 ml-1">
                      {mediaSubmenuOpen ? "expand_less" : "expand_more"}
                    </span>
                  )}
                </button>
              </div>

              {/* 4 Sub-options list */}
              {!isCollapsed && mediaSubmenuOpen && (
                <div
                  className="pl-6 space-y-1 pt-1 border-l-2 ml-4"
                  style={{ borderColor: activeTheme.accentColor }}
                >
                  {mediaSubmenuList.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={onMobileClose}
                        style={
                          isSubActive
                            ? {
                                backgroundColor: `${activeTheme.accentColor}20`,
                                color: activeTheme.accentColor,
                                borderColor: `${activeTheme.accentColor}40`,
                              }
                            : { color: activeTheme.textMuted }
                        }
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all border border-transparent ${
                          isSubActive ? "font-bold" : "hover:opacity-80"
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-xs"
                          style={{ color: activeTheme.accentColor }}
                        >
                          {subItem.icon}
                        </span>
                        <span>{subItem.label}</span>
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
            title={isCollapsed ? item.label : undefined}
            style={
              isActive
                ? { backgroundColor: activeTheme.accentColor, color: "#FFFFFF" }
                : { color: activeTheme.textMuted }
            }
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
              isActive
                ? "font-bold shadow-md"
                : "hover:bg-slate-200/50 hover:text-slate-900"
            }`}
          >
            <span className="material-symbols-outlined text-lg shrink-0">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        );
      })}
    </nav>
  );
}

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const { activeTheme, isThemeModalOpen, openThemeModal, closeThemeModal, setThemeId } =
    useDashboardTheme();

  // Global keydown for Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // If on login page, don't render layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const getPageTitle = () => {
    if (pathname.includes("/admin/dashboard")) return "Studio Operations Dashboard";
    if (pathname.includes("/admin/pages")) return "Edit Public Pages & SEO CMS";
    if (pathname.includes("/admin/bookings")) return "Bookings & Shoot Pipeline";
    if (pathname.includes("/admin/inquiries")) return "Inquiries & Leads Kanban";
    if (pathname.includes("/admin/gallery")) return "Monograph Gallery Manager";
    if (pathname.includes("/admin/albums")) return "Album Package Collections";
    if (pathname.includes("/admin/videos")) return "Video Showcase Manager";
    if (pathname.includes("/admin/categories")) return "Category Taxonomy";
    if (pathname.includes("/admin/reviews")) return "Client Reviews Approval Queue";
    if (pathname.includes("/admin/team")) return "Team Roster & Assignments";
    if (pathname.includes("/admin/pricing")) return "Pricing Packages & Quotes";
    if (pathname.includes("/admin/users")) return "Users & Role Permissions";
    if (pathname.includes("/admin/settings")) return "Studio Business Settings";
    return "Studio Business Admin";
  };

  const handleLogout = () => {
    router.push("/admin/login");
  };

  return (
    <div
      className="h-screen w-screen flex font-sans transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: activeTheme.bgPrimary,
        color: activeTheme.textPrimary,
      }}
    >
      {/* Sidebar Desktop - Fixed Height */}
      <aside
        className="hidden md:flex flex-col border-r transition-all duration-300 shrink-0 h-screen w-[280px] overflow-hidden"
        style={{
          backgroundColor: activeTheme.bgSurface,
          borderColor: activeTheme.borderSubtle,
        }}
      >
        {/* Sidebar Header */}
        <div
          className="h-24 px-4 border-b flex items-center justify-between shrink-0"
          style={{ borderColor: activeTheme.borderSubtle }}
        >
          <Link href="/admin/dashboard" className="flex items-center gap-2 min-w-0 overflow-hidden py-1">
            <img src="/logo.png" alt="Dhilip Studio" className="h-11 w-auto shrink-0 object-contain" />
          </Link>
        </div>

        {/* Sidebar Navigation Links */}
        <Suspense fallback={<div className="flex-1 p-4 text-xs opacity-50">Loading nav...</div>}>
          <SidebarNavContent pathname={pathname} isCollapsed={isCollapsed} />
        </Suspense>

        {/* Sidebar Bottom Logout Button */}
        <div
          className="p-3 border-t shrink-0"
          style={{
            backgroundColor: activeTheme.bgSurface2,
            borderColor: activeTheme.borderSubtle,
          }}
        >
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 shadow-xs hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-500 cursor-pointer"
            style={{
              borderColor: activeTheme.borderSubtle,
            }}
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">logout</span>
              <span>Logout Session</span>
            </span>
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>
      </aside>

      {/* Main Container Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Fixed Top Bar (96px) */}
        <header
          className="h-24 px-4 sm:px-6 border-b shrink-0 flex items-center justify-between gap-4 transition-colors z-30"
          style={{
            backgroundColor: activeTheme.bgSurface,
            borderColor: activeTheme.borderSubtle,
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border"
              style={{
                backgroundColor: activeTheme.bgSurface2,
                borderColor: activeTheme.borderSubtle,
                color: activeTheme.textPrimary,
              }}
            >
              <span className="material-symbols-outlined text-lg">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>

            <div className="min-w-0">
              <h1 className="font-serif font-bold text-lg sm:text-xl tracking-wide truncate" style={{ color: activeTheme.textPrimary }}>
                {getPageTitle()}
              </h1>
              <span className="text-xs font-mono block mt-0.5" style={{ color: activeTheme.textMuted }}>Dhilip Studio Operations Admin</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Logout Button in Topbar */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md bg-rose-600 hover:bg-rose-700 text-white cursor-pointer active:scale-95"
              title="Log out of session"
            >
              <span className="material-symbols-outlined text-base">logout</span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Mobile Sidebar Overlay Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-3 space-y-2 sticky top-0 z-40 shadow-xl">
            <Suspense fallback={<div className="p-4 text-xs text-slate-500">Loading nav...</div>}>
              <SidebarNavContent
                pathname={pathname}
                isCollapsed={false}
                onMobileClose={() => setMobileMenuOpen(false)}
              />
            </Suspense>
          </div>
        )}

        {/* Scrollable Viewport Content Area - ONLY THIS SCROLLS */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto w-full max-w-[1700px] mx-auto space-y-6">
          {children}
        </main>
      </div>

      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </ThemeProvider>
  );
}

