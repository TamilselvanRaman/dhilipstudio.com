"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SeoCommandPalette } from "@/components/seo/ui/SeoCommandPalette";
import { ThemeProvider, useDashboardTheme } from "@/lib/ThemeContext";
import { ThemeSelectorModal } from "@/components/admin/ui/ThemeSelectorModal";

function SeoSidebarNavContent({
  pathname,
  isCollapsed,
  onMobileClose,
}: {
  pathname: string;
  isCollapsed: boolean;
  onMobileClose?: () => void;
}) {
  const { activeTheme } = useDashboardTheme();
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
    <nav className="flex-1 p-3 space-y-1 overflow-y-auto no-scrollbar">
      {seoNavItems.map((item) => {
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
                : "hover:bg-blue-50 hover:text-blue-700"
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

function SeoAdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const { activeTheme, isThemeModalOpen, openThemeModal, closeThemeModal, setThemeId } =
    useDashboardTheme();

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

  if (pathname === "/seo-admin/login") {
    return <>{children}</>;
  }

  const getPageTitle = () => {
    if (pathname.includes("/seo-admin/dashboard")) return "SEO Health & Performance Dashboard";
    if (pathname.includes("/seo-admin/meta-tags")) return "Meta & Title Tags Manager";
    if (pathname.includes("/seo-admin/blog")) return "Blog Article CMS & SEO Validator";
    if (pathname.includes("/seo-admin/keywords")) return "Tracked Keyword Rankings & Local 3-Pack";
    if (pathname.includes("/seo-admin/schema-markup")) return "JSON-LD Schema Visual Builder";
    if (pathname.includes("/seo-admin/og-builder")) return "Open Graph & Social Cards Previewer";
    if (pathname.includes("/seo-admin/sitemap")) return "XML Sitemap & robots.txt Control";
    if (pathname.includes("/seo-admin/redirects")) return "301 URL Redirects & Broken Links";
    if (pathname.includes("/seo-admin/audit")) return "Technical Core Web Vitals Audit";
    return "SEO & Marketing Control Panel";
  };

  const handleLogout = () => {
    router.push("/seo-admin/login");
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
          <Link href="/seo-admin/dashboard" className="flex items-center gap-2 min-w-0 overflow-hidden py-1">
            <img src="/logo.png" alt="Dhilip Studio" className="h-11 w-auto shrink-0 object-contain" />
          </Link>
        </div>

        {/* Sidebar Nav Items */}
        <Suspense fallback={<div className="flex-1 p-4 text-xs opacity-50">Loading nav...</div>}>
          <SeoSidebarNavContent pathname={pathname} isCollapsed={isCollapsed} />
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

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Fixed Top Header (96px) */}
        <header
          className="h-24 px-4 sm:px-6 border-b shrink-0 flex items-center justify-between gap-4 transition-colors z-30"
          style={{
            backgroundColor: activeTheme.bgSurface,
            borderColor: activeTheme.borderSubtle,
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
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
              <span className="text-xs font-mono block mt-0.5" style={{ color: activeTheme.textMuted }}>Technical &amp; Marketing SEO Engine</span>
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
              <SeoSidebarNavContent
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

      {/* Global SEO Command Palette */}
      <SeoCommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
}

export default function SeoAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SeoAdminLayoutInner>{children}</SeoAdminLayoutInner>
    </ThemeProvider>
  );
}

