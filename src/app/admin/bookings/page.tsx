"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { initialBookings, Booking } from "@/lib/adminData";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

export default function BookingsManager() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [viewMode, setViewMode] = useState<"table" | "calendar">("table");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  // Form State
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("Brahmin Sacred Muhurtham");
  const [eventDate, setEventDate] = useState("2026-11-20");
  const [location, setLocation] = useState("Porur Studio, Chennai");
  const [totalAmount, setTotalAmount] = useState(185000);
  const [advancePaid, setAdvancePaid] = useState(50000);

  const handleOpenNew = () => {
    setSelectedBooking(null);
    setClientName("");
    setPhone("");
    setEmail("");
    setTotalAmount(185000);
    setAdvancePaid(50000);
    setIsDrawerOpen(true);
  };

  const handleSaveBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: selectedBooking ? selectedBooking.id : `BK-${Math.floor(100 + Math.random() * 900)}`,
      clientName,
      phone,
      email,
      eventType,
      eventDate,
      location,
      status: advancePaid >= totalAmount ? "Confirmed" : advancePaid > 0 ? "Advance Paid" : "Enquiry",
      totalAmount: Number(totalAmount),
      advancePaid: Number(advancePaid),
      balanceDue: Number(totalAmount) - Number(advancePaid),
      assignedStaff: ["Dhilip Kumar"],
      contractAttached: true,
    };

    if (selectedBooking) {
      setBookings(bookings.map((b) => (b.id === selectedBooking.id ? newBooking : b)));
    } else {
      setBookings([newBooking, ...bookings]);
    }
    setIsDrawerOpen(false);
  };

  const columns: Column<Booking>[] = [
    {
      header: "Booking ID",
      accessorKey: "id",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.id}</span>,
    },
    {
      header: "Client & Contact",
      accessorKey: "clientName",
      cell: (row) => (
        <div>
          <div className="font-bold text-slate-900">{row.clientName}</div>
          <div className="text-[11px] text-slate-500 font-mono">{row.phone}</div>
        </div>
      ),
    },
    {
      header: "Event & Location",
      cell: (row) => (
        <div>
          <div className="font-semibold text-slate-800">{row.eventType}</div>
          <div className="text-[11px] text-slate-500">{row.location}</div>
        </div>
      ),
    },
    {
      header: "Shoot Date",
      accessorKey: "eventDate",
      cell: (row) => <span className="font-mono text-blue-700 font-bold">{row.eventDate}</span>,
    },
    {
      header: "Financials (Total / Adv / Due)",
      cell: (row) => (
        <div className="font-mono text-xs">
          <div className="text-slate-900 font-bold">₹{row.totalAmount.toLocaleString()}</div>
          <div className="text-[10px] text-emerald-700 font-semibold">Adv: ₹{row.advancePaid.toLocaleString()}</div>
          <div className="text-[10px] text-amber-700 font-semibold">Due: ₹{row.balanceDue.toLocaleString()}</div>
        </div>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => <StatusPill status={row.status} size="sm" />,
    },
    {
      header: "Actions",
      cell: (row) => (
        <button
          onClick={() => {
            setSelectedBooking(row);
            setClientName(row.clientName);
            setPhone(row.phone);
            setEmail(row.email);
            setEventType(row.eventType);
            setEventDate(row.eventDate);
            setLocation(row.location);
            setTotalAmount(row.totalAmount);
            setAdvancePaid(row.advancePaid);
            setIsDrawerOpen(true);
          }}
          className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            SHOOT PIPELINE &amp; CONTRACTS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Bookings &amp; Shoots Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Schedule shoot dates, track advance payments, assign photographers, and check date conflicts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Mode Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === "table"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="material-symbols-outlined text-sm">table_view</span>
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === "calendar"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span>Calendar</span>
            </button>
          </div>

          <button
            onClick={handleOpenNew}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span>New Booking</span>
          </button>
        </div>
      </div>

      {/* Main View Display */}
      {viewMode === "table" ? (
        <DataTable
          data={bookings}
          columns={columns}
          searchPlaceholder="Search bookings by client, event type, location..."
          searchField="clientName"
        />
      ) : (
        /* Calendar Month Grid Simulation */
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-serif font-bold text-lg text-slate-900">November 2026 Shoots Schedule</h3>
            <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              Conflict Detection Active
            </span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center font-mono text-xs text-slate-500 py-2 border-b border-slate-200">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-bold">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 min-h-[360px]">
            {Array.from({ length: 30 }).map((_, idx) => {
              const dayNum = idx + 1;
              const dateStr = `2026-11-${dayNum < 10 ? "0" + dayNum : dayNum}`;
              const bookedItems = bookings.filter((b) => b.eventDate.endsWith(dateStr) || (dayNum === 14 && b.id === "BK-101"));

              return (
                <div
                  key={dayNum}
                  className={`p-2 rounded-xl border flex flex-col justify-between min-h-[70px] ${
                    bookedItems.length > 0
                      ? "bg-blue-50 border-blue-300"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-slate-700">{dayNum}</span>
                  {bookedItems.map((b) => (
                    <div key={b.id} className="bg-blue-600 text-white p-1 rounded-md text-[9px] font-bold truncate shadow-xs">
                      {b.clientName}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SlideOverDrawer Form */}
      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedBooking ? `Edit Booking ${selectedBooking.id}` : "Create New Shoot Booking"}
        subtitle="Set event dates, financial package breakdown, and client contacts."
      >
        <form onSubmit={handleSaveBooking} className="space-y-4 text-xs font-sans text-slate-900">
          <div>
            <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Client Name(s)</label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
              placeholder="e.g. Ananya & Rahul"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Phone / WhatsApp</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Event Type</label>
              <CustomDropdown
                value={eventType}
                onChange={(val) => setEventType(val)}
                theme="blue"
                options={[
                  { value: "Brahmin Sacred Muhurtham", label: "Brahmin Sacred Muhurtham", icon: "auto_awesome" },
                  { value: "Candid Pre-Wedding Beach Film", label: "Candid Pre-Wedding Beach Film", icon: "camera" },
                  { value: "Grand Destination Reception", label: "Grand Destination Reception", icon: "celebration" },
                  { value: "Maternity & Newborn Solitude", label: "Maternity & Newborn Solitude", icon: "child_care" },
                ]}
              />
            </div>
            <div>
              <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Event Date</label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Venue Location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
            <div>
              <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Total Amount (₹)</label>
              <input
                type="number"
                required
                value={totalAmount}
                onChange={(e) => setTotalAmount(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-700 text-[11px] font-mono uppercase font-bold mb-1">Advance Paid (₹)</label>
              <input
                type="number"
                required
                value={advancePaid}
                onChange={(e) => setAdvancePaid(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 shadow-md"
            >
              Save Booking
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
