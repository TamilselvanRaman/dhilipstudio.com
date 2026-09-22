"use client";

import React, { useState } from "react";
import { initialInquiries, Inquiry } from "@/lib/adminData";

export default function InquiriesManager() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            LEAD GENERATION &amp; INQUIRIES
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Inquiries &amp; WhatsApp Leads
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Direct customer inquiries captured from web contact forms and WhatsApp buttons.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1b1c1c] border border-stone-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/80 uppercase tracking-wider text-stone-400 text-[10px] border-b border-stone-800">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Client Name</th>
                <th className="p-4">Phone Number</th>
                <th className="p-4">Event Date</th>
                <th className="p-4">Venue Location</th>
                <th className="p-4">Estimated Budget</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Quick Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {inquiries.map((inq) => (
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
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] tracking-wider uppercase transition-colors"
                    >
                      <span>WhatsApp Chat</span>
                      <span className="material-symbols-outlined text-[12px]">open_in_new</span>
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
