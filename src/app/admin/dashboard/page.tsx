"use client";

import React from "react";
import Link from "next/link";
import { StatCard } from "@/components/admin/ui/StatCard";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { initialBookings, initialInquiries, Inquiry } from "@/lib/adminData";

export default function StudioAdminDashboard() {
  const inquiryColumns: Column<Inquiry>[] = [
    {
      header: "Lead ID",
      accessorKey: "id",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.id}</span>,
    },
    {
      header: "Client Name",
      accessorKey: "clientName",
      cell: (row) => <span className="font-bold text-slate-900">{row.clientName}</span>,
    },
    {
      header: "Source",
      accessorKey: "source",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold">
          {row.source}
        </span>
      ),
    },
    {
      header: "Event Date",
      accessorKey: "eventDate",
      cell: (row) => <span className="font-mono text-slate-700 font-medium">{row.eventDate}</span>,
    },
    {
      header: "Venue",
      accessorKey: "venue",
      cell: (row) => <span className="max-w-xs truncate block text-slate-600">{row.venue}</span>,
    },
    {
      header: "Budget Range",
      accessorKey: "budget",
      cell: (row) => <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{row.budget}</span>,
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => <StatusPill status={row.status} size="sm" />,
    },
    {
      header: "Quick Reply",
      cell: (row) => (
        <a
          href={`https://wa.me/${row.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider transition-colors shadow-xs"
        >
          <span>WhatsApp</span>
          <span className="material-symbols-outlined text-[12px]">send</span>
        </a>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            ENTERPRISE STUDIO OPERATIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Studio Business Overview
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Real-time KPIs, shoot schedules, leads pipeline, and monograph content management.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <Link
            href="/admin/inquiries"
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 flex items-center gap-2 transition-all"
          >
            <span className="material-symbols-outlined text-base text-blue-600">
              view_kanban
            </span>
            <span>Leads Kanban</span>
          </Link>

          <Link
            href="/admin/pages"
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-base">edit_note</span>
            <span>Edit Public Pages</span>
          </Link>
        </div>
      </div>

      {/* KPI StatCards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue (YTD)"
          value="₹5,10,000"
          change="+18% vs last month"
          changeType="increase"
          icon="payments"
          subtext="Includes ₹80k advance collected"
        />
        <StatCard
          title="Confirmed Shoots"
          value={initialBookings.length}
          change="3 upcoming"
          changeType="increase"
          icon="calendar_month"
          subtext="Next shoot: Nov 14, Mylapore Palace"
        />
        <StatCard
          title="New Leads & Inquiries"
          value={initialInquiries.length}
          change="2 high intent"
          changeType="neutral"
          icon="mark_email_unread"
          subtext="Avg response time: 14 mins"
        />
        <StatCard
          title="Published Monographs"
          value="500+"
          change="8 Collections"
          changeType="increase"
          icon="photo_library"
          subtext="4K uncompressed webp CDN"
        />
      </div>

      {/* Revenue Trend & Upcoming Shoots Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Trend Chart SVG */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="font-serif font-bold text-base text-slate-900">Revenue & Booking Growth Trend</h3>
              <p className="text-xs text-slate-500">Monthly financial progress over past 6 months</p>
            </div>
            <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
              FY 2026-27
            </span>
          </div>

          <div className="h-56 w-full flex items-end justify-between gap-2 pt-4 px-2">
            {[
              { month: "Apr", rev: "3.2L", height: "45%" },
              { month: "May", rev: "4.1L", height: "60%" },
              { month: "Jun", rev: "3.8L", height: "55%" },
              { month: "Jul", rev: "4.8L", height: "75%" },
              { month: "Aug", rev: "5.1L", height: "85%" },
              { month: "Sep", rev: "5.8L", height: "95%" },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <span className="text-[10px] font-mono text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.rev}
                </span>
                <div
                  style={{ height: bar.height }}
                  className="w-full max-w-[44px] bg-gradient-to-t from-blue-400 via-blue-600 to-blue-700 rounded-t-lg group-hover:brightness-110 transition-all shadow-sm"
                />
                <span className="text-[11px] font-mono text-slate-500">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Shoots Timeline Widget */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="font-serif font-bold text-base text-slate-900">Upcoming Shoots (30 Days)</h3>
            <Link href="/admin/bookings" className="text-xs font-mono text-blue-600 font-bold hover:underline">
              View All &rarr;
            </Link>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto">
            {initialBookings.map((b) => (
              <div key={b.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-slate-900">{b.clientName}</span>
                  <StatusPill status={b.status} size="sm" />
                </div>
                <div className="text-[11px] text-slate-500">{b.eventType}</div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 pt-1">
                  <span>📅 {b.eventDate}</span>
                  <span className="text-blue-600 font-semibold">{b.location.split(",")[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Inquiries DataTable */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-slate-900">Recent Inquiries &amp; Leads Table</h3>
          <Link href="/admin/inquiries" className="text-xs font-mono text-blue-600 font-bold hover:underline">
            Open Kanban Board &rarr;
          </Link>
        </div>

        <DataTable
          data={initialInquiries}
          columns={inquiryColumns}
          searchPlaceholder="Search leads by client name, venue, budget..."
          searchField="clientName"
        />
      </div>
    </div>
  );
}
