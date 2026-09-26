"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SeoStatCard } from "@/components/seo/ui/SeoStatCard";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { initialMetaTags, initialKeywords, MetaTagEntry } from "@/lib/adminData";

export default function SeoDashboard() {
  const [selectedRoute, setSelectedRoute] = useState<string>("/");

  const activeEntry = initialMetaTags.find((m) => m.routePath === selectedRoute) || initialMetaTags[0];

  const metaColumns: Column<MetaTagEntry>[] = [
    {
      header: "Route Path",
      accessorKey: "routePath",
      cell: (row) => (
        <span className="font-mono text-blue-600 font-bold text-xs truncate block max-w-[200px]">
          {row.routePath}
        </span>
      ),
    },
    {
      header: "Page Name",
      accessorKey: "pageName",
      cell: (row) => <span className="font-semibold text-slate-900 text-xs">{row.pageName}</span>,
    },
    {
      header: "Meta Title",
      accessorKey: "metaTitle",
      cell: (row) => (
        <span className="max-w-xs truncate block text-slate-600 font-sans text-xs">
          {row.metaTitle}
        </span>
      ),
    },
    {
      header: "Focus Keyword",
      accessorKey: "focusKeyword",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
          {row.focusKeyword || "N/A"}
        </span>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => <StatusPill status={row.status} size="sm" />,
    },
    {
      header: "Action",
      cell: (row) => (
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedRoute(row.routePath)}
            className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer"
          >
            Preview SERP
          </button>
          <Link
            href="/seo-admin/meta-tags"
            className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Edit →
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
              GOOGLE SEARCH CONSOLE &amp; LIVE SERP ENGINE
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            SEO Control Suite &amp; Analytics
          </h2>
          <p className="text-xs text-slate-300 mt-1 font-sans">
            Real-time tracking across 39 website routes: 8 Service Landing Pages, 26 Blog Articles &amp; Core Gallery Monograph pages.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/seo-admin/meta-tags"
            className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">label</span>
            <span>Meta Tags Suite</span>
          </Link>
          <Link
            href="/seo-admin/audit"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all border border-white/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">health_and_safety</span>
            <span>Run Audit</span>
          </Link>
        </div>
      </div>

      {/* SEO KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SeoStatCard
          title="SEO Health Score"
          value="99 / 100"
          badgeText="GRADE A+"
          badgeType="tech"
          icon="health_and_safety"
          subtext="Zero broken canonicals or missing H1s"
        />
        <SeoStatCard
          title="Google Indexed Routes"
          value={`${initialMetaTags.length} / ${initialMetaTags.length}`}
          badgeText="100% COVERAGE"
          badgeType="success"
          icon="verified"
          subtext="Sitemap synced 10 minutes ago"
        />
        <SeoStatCard
          title="Tracked Local Keywords"
          value="24 Top #3"
          badgeText="LOCAL 3-PACK"
          badgeType="tech"
          icon="key"
          subtext="#1 for 'Brahmin Wedding Chennai'"
        />
        <SeoStatCard
          title="Active JSON-LD Schemas"
          value="8 Schemas"
          badgeText="VALIDATED"
          badgeType="success"
          icon="code"
          subtext="LocalBusiness, FAQ, Breadcrumb, Article"
        />
      </div>

      {/* Live SERP Preview Card & Ranking Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SERP Snippet Preview */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider">
              GOOGLE SEARCH RESULT PREVIEW (DESKTOP &amp; MOBILE)
            </span>
            <span className="text-xs font-mono font-bold text-slate-500">
              Target Route: {activeEntry.routePath}
            </span>
          </div>

          {/* Google SERP Snippet Container */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center font-bold justify-center">
                G
              </span>
              <span className="text-xs font-mono text-slate-700 truncate">
                {activeEntry.canonicalUrl}
              </span>
            </div>
            <h4 className="text-blue-800 hover:underline text-base sm:text-lg font-medium cursor-pointer line-clamp-1">
              {activeEntry.metaTitle}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
              {activeEntry.metaDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-sans pt-1">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">
                Title Length
              </span>
              <span className="font-bold text-slate-900">
                {activeEntry.metaTitle.length} characters (Optimal 50-60)
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">
                Description Length
              </span>
              <span className="font-bold text-slate-900">
                {activeEntry.metaDescription.length} characters (Optimal 140-160)
              </span>
            </div>
          </div>
        </div>

        {/* Local 3-Pack Rank Status */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
              CHENNAI LOCAL 3-PACK RANKINGS
            </span>
            <Link href="/seo-admin/keywords" className="text-xs font-mono font-bold text-blue-600 hover:underline">
              View All 24 Keywords &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {initialKeywords.map((kw) => (
              <div key={kw.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 text-xs block">{kw.keyword}</span>
                  <span className="text-[10px] font-mono text-slate-500">Route: {kw.targetRoute} · Vol: {kw.monthlySearchVolume}/mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                    Rank #{kw.currentRank}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold font-mono">
                    Maps #{kw.localPackRank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page-by-Page Meta Status Table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-slate-900">
            All 39 Website Routes &amp; Meta Status Table
          </h3>
          <Link href="/seo-admin/meta-tags" className="text-xs font-mono text-blue-600 hover:underline font-bold">
            Open Full Meta Tag Editor &rarr;
          </Link>
        </div>

        <DataTable
          data={initialMetaTags}
          columns={metaColumns}
          searchPlaceholder="Search 39 routes by path, title or focus keyword..."
          searchField="routePath"
        />
      </div>
    </div>
  );
}
