"use client";

import React from "react";
import Link from "next/link";
import { SeoStatCard } from "@/components/seo/ui/SeoStatCard";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { initialMetaTags, initialKeywords, MetaTagEntry } from "@/lib/adminData";

export default function SeoDashboard() {
  const metaColumns: Column<MetaTagEntry>[] = [
    {
      header: "Route Path",
      accessorKey: "routePath",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.routePath}</span>,
    },
    {
      header: "Page Name",
      accessorKey: "pageName",
      cell: (row) => <span className="font-semibold text-slate-900">{row.pageName}</span>,
    },
    {
      header: "Meta Title",
      accessorKey: "metaTitle",
      cell: (row) => <span className="max-w-xs truncate block text-slate-600 font-sans">{row.metaTitle}</span>,
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
      header: "Quick Edit",
      cell: () => (
        <Link
          href="/seo-admin/meta-tags"
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white border border-slate-200 text-blue-600 font-bold text-xs transition-colors cursor-pointer"
        >
          Edit Tags &rarr;
        </Link>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            GOOGLE SEARCH CONSOLE &amp; ANALYTICS ENGINE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            SEO Growth &amp; Technical Health
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Real-time indexation tracking, title tag character audits, local Google 3-pack rankings, and schema health.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/seo-admin/meta-tags"
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-base">label</span>
            <span>Meta Tags Editor</span>
          </Link>
        </div>
      </div>

      {/* SEO KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SeoStatCard
          title="SEO Health Score"
          value="98%"
          badgeText="GRADE A+"
          badgeType="tech"
          icon="health_and_safety"
          subtext="Zero duplicate titles or 404s"
        />
        <SeoStatCard
          title="Google Indexed Routes"
          value={`${initialMetaTags.length} / 35`}
          badgeText="GSC ACTIVE"
          badgeType="success"
          icon="verified"
          subtext="Sitemap synced 2 hours ago"
        />
        <SeoStatCard
          title="Tracked Keywords #1-#3"
          value={initialKeywords.length}
          badgeText="LOCAL 3-PACK"
          badgeType="tech"
          icon="key"
          subtext="Top rank for 'Candid Wedding Porur'"
        />
        <SeoStatCard
          title="Active JSON-LD Schemas"
          value="6 Active"
          badgeText="VALID"
          badgeType="success"
          icon="code"
          subtext="LocalBusiness, FAQ, Breadcrumb"
        />
      </div>

      {/* Page-by-Page Meta Status Table */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-slate-900">Page-by-Page Meta Status Table</h3>
          <Link href="/seo-admin/meta-tags" className="text-xs font-mono text-blue-600 hover:underline font-bold">
            Open Full Editor &rarr;
          </Link>
        </div>

        <DataTable
          data={initialMetaTags}
          columns={metaColumns}
          searchPlaceholder="Search meta tags by route path or title..."
          searchField="routePath"
        />
      </div>
    </div>
  );
}
