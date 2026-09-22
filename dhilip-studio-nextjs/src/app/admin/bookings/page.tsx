"use client";

import React, { useState } from "react";
import { initialBookings, Booking } from "@/lib/adminData";

export default function BookingsManager() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filter, setFilter] = useState("All");

  const filteredBookings = bookings.filter((b) =>
    filter === "All" ? true : b.status === filter
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            SHOOTS CALENDAR &amp; BOOKINGS
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Wedding Bookings Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Track upcoming shoot dates, client details, venue locations, and package amounts.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Add New Booking
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {["All", "Confirmed", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === status
                ? "bg-[#b88c42] text-stone-950 shadow-md"
                : "bg-[#1b1c1c] text-stone-300 border border-stone-800 hover:bg-stone-800"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-[#1b1c1c] border border-stone-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/80 uppercase tracking-wider text-stone-400 text-[10px] border-b border-stone-800">
              <tr>
                <th className="p-4">Booking ID</th>
                <th className="p-4">Client Name</th>
                <th className="p-4">Event Type</th>
                <th className="p-4">Event Date</th>
                <th className="p-4">Location</th>
                <th className="p-4">Package Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-stone-900/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{b.id}</td>
                  <td className="p-4">
                    <p className="font-semibold text-white">{b.clientName}</p>
                    <p className="text-[11px] text-stone-400">{b.email} · {b.phone}</p>
                  </td>
                  <td className="p-4 font-medium text-stone-200">{b.eventType}</td>
                  <td className="p-4 font-mono">{b.eventDate}</td>
                  <td className="p-4 max-w-xs truncate">{b.location}</td>
                  <td className="p-4 font-mono font-bold text-white">{b.amount}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        b.status === "Confirmed"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      }`}
                    >
                      {b.status}
                    </span>
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
