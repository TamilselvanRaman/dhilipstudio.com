"use client";

import React from "react";
import Link from "next/link";
import { initialBookings, initialInquiries } from "@/lib/adminData";

export default function StudioAdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            DHILIP STUDIO CONTROL CENTER
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Studio Admin Dashboard
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Manage client bookings, leads, page content, monographs &amp; video films.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/admin/pages"
            className="inline-flex items-center gap-2 bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-lg"
          >
            <span className="material-symbols-outlined text-base">edit_note</span>
            <span>Edit Page Content</span>
          </Link>
          <Link
            href="/admin/bookings"
            className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl border border-stone-700 transition-all"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>Bookings</span>
          </Link>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              Total Revenue
            </span>
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">payments</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">₹5,10,000</p>
          <p className="text-[11px] text-emerald-400 font-medium">↑ 18% from last month</p>
        </div>

        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              Confirmed Shoots
            </span>
            <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">event_available</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">{initialBookings.length}</p>
          <p className="text-[11px] text-stone-400 font-medium">Next shoot: Nov 14, 2026</p>
        </div>

        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              New Leads &amp; Inquiries
            </span>
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">mark_email_unread</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">{initialInquiries.length}</p>
          <p className="text-[11px] text-blue-400 font-medium">Requires follow-up</p>
        </div>

        <div className="bg-[#1b1c1c] border border-stone-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              Published Monographs
            </span>
            <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">photo_library</span>
            </span>
          </div>
          <p className="font-serif text-2xl font-bold text-white">500+</p>
          <p className="text-[11px] text-stone-400 font-medium">Across 8 category collections</p>
        </div>
      </div>

      {/* Recent Inquiries Table */}
      <div className="bg-[#1b1c1c] border border-stone-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-5 border-b border-stone-800 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-lg font-bold text-white">Recent Client Inquiries</h2>
            <p className="text-xs text-stone-400">Leads captured via website forms and WhatsApp</p>
          </div>
          <Link
            href="/admin/inquiries"
            className="text-xs font-bold text-[#f3e3a1] hover:underline flex items-center gap-1"
          >
            <span>View All Leads</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/80 uppercase tracking-wider text-stone-400 text-[10px] border-b border-stone-800">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Client Name</th>
                <th className="p-4">Phone / WhatsApp</th>
                <th className="p-4">Event Date</th>
                <th className="p-4">Venue</th>
                <th className="p-4">Budget</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {initialInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-stone-900/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{inq.id}</td>
                  <td className="p-4 font-semibold text-white">{inq.clientName}</td>
                  <td className="p-4 font-mono">{inq.phone}</td>
                  <td className="p-4">{inq.eventDate}</td>
                  <td className="p-4 max-w-xs truncate">{inq.venue}</td>
                  <td className="p-4 font-mono text-stone-200">{inq.budget}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40">
                      {inq.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] tracking-wider uppercase transition-colors"
                    >
                      <span>WhatsApp</span>
                      <span className="material-symbols-outlined text-[12px]">send</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
