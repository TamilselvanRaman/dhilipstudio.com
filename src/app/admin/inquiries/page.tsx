"use client";

import React, { useState } from "react";
import { StatusPill } from "@/components/admin/ui/StatusPill";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { initialInquiries, Inquiry } from "@/lib/adminData";

export default function InquiriesKanbanManager() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [convertedSuccess, setConvertedSuccess] = useState<string | null>(null);

  // New Inquiry form state
  const [newInquiry, setNewInquiry] = useState<{
    clientName: string;
    email: string;
    phone: string;
    eventDate: string;
    venue: string;
    budget: string;
    notes: string;
  }>({
    clientName: "",
    email: "",
    phone: "+91 ",
    eventDate: "",
    venue: "Mayor Ramanathan Hall, MRC Nagar, Chennai",
    budget: "₹2,00,000 - ₹3,50,000",
    notes: "Submitted via Website Contact Form",
  });

  const columnsList: { id: Inquiry["status"]; title: string; color: string }[] = [
    { id: "New", title: "New Inquiries", color: "border-amber-400" },
    { id: "Contacted", title: "Contacted", color: "border-sky-400" },
    { id: "Quoted", title: "Quote Sent", color: "border-purple-400" },
    { id: "Follow-up", title: "Follow-up Due", color: "border-blue-400" },
    { id: "Won", title: "Won / Booked", color: "border-emerald-400" },
    { id: "Lost", title: "Closed / Lost", color: "border-rose-400" },
  ];

  const handleMoveStatus = (id: string, newStatus: Inquiry["status"]) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  const handleConvertLead = (inq: Inquiry) => {
    handleMoveStatus(inq.id, "Won");
    setConvertedSuccess(`Lead ${inq.id} (${inq.clientName}) converted to Booking!`);
    setTimeout(() => setConvertedSuccess(null), 4000);
  };

  const handleCreateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInquiry.clientName) return;

    const created: Inquiry = {
      id: `INQ-${200 + inquiries.length + 1}`,
      clientName: newInquiry.clientName,
      email: newInquiry.email || `${newInquiry.clientName.toLowerCase().replace(/\s+/g, "")}@gmail.com`,
      phone: newInquiry.phone,
      eventDate: newInquiry.eventDate || "2026-11-20",
      venue: newInquiry.venue,
      budget: newInquiry.budget,
      source: "Website Form",
      status: "New",
      score: "Hot",
      createdAt: new Date().toISOString().split("T")[0],
      notes: newInquiry.notes,
    };

    setInquiries([created, ...inquiries]);
    setIsDrawerOpen(false);
    setNewInquiry({
      clientName: "",
      email: "",
      phone: "+91 ",
      eventDate: "",
      venue: "Mayor Ramanathan Hall, MRC Nagar, Chennai",
      budget: "₹2,00,000 - ₹3,50,000",
      notes: "Submitted via Website Contact Form",
    });
    setConvertedSuccess(`New Website Inquiry ${created.id} received successfully!`);
    setTimeout(() => setConvertedSuccess(null), 4000);
  };



  const tableColumns: Column<Inquiry>[] = [
    {
      header: "Lead ID",
      accessorKey: "id",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.id}</span>,
    },
    {
      header: "Client Name",
      accessorKey: "clientName",
      cell: (row) => (
        <div>
          <div className="font-bold text-slate-900">{row.clientName}</div>
          <div className="text-[11px] text-slate-500">{row.email}</div>
        </div>
      ),
    },
    {
      header: "Source",
      accessorKey: "source",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold">
          🌐 {row.source}
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
      cell: (row) => <span className="max-w-xs truncate block text-slate-600 font-sans">{row.venue}</span>,
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
      header: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${row.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors shadow-xs"
          >
            <span>WhatsApp</span>
            <span className="material-symbols-outlined text-[12px]">send</span>
          </a>

          {row.status !== "Won" && (
            <button
              onClick={() => handleConvertLead(row)}
              className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] uppercase transition-colors shadow-xs"
            >
              + Convert
            </button>
          )}
        </div>
      ),
    },
  ];

  const websiteInquiries = inquiries.filter((inq) => inq.source === "Website Form");

  return (
    <div className="space-y-6">
      {/* Top Banner & Header */}
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            WEBSITE FORM ENQUIRY CMS &amp; PIPELINE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Website User Inquiries Table
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Displaying lead form submissions submitted by visitors directly on dhilipstudio.com
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* New Website Enquiry Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span>Add Enquiry</span>
          </button>
        </div>
      </div>

      {convertedSuccess && (
        <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-3 rounded-2xl text-xs font-bold animate-pulse flex items-center gap-2 shadow-xs">
          <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span>
          <span>{convertedSuccess}</span>
        </div>
      )}

      {/* TABLE VIEW DISPLAY ONLY */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-slate-900">
            Website User Form Submissions
          </h3>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            Showing {websiteInquiries.length} Website Inquiries
          </span>
        </div>

        <DataTable
          data={websiteInquiries}
          columns={tableColumns}
          searchPlaceholder="Search website user inquiries by name, venue, budget..."
          searchField="clientName"
        />
      </div>

      {/* NEW WEBSITE INQUIRY DRAWER */}
      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Add Website Form Enquiry"
      >
        <form onSubmit={handleCreateInquiry} className="space-y-4 text-slate-900 font-sans text-xs">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Client Name *
            </label>
            <input
              type="text"
              required
              value={newInquiry.clientName}
              onChange={(e) => setNewInquiry({ ...newInquiry, clientName: e.target.value })}
              placeholder="e.g. Sridevi Raman"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={newInquiry.email}
              onChange={(e) => setNewInquiry({ ...newInquiry, email: e.target.value })}
              placeholder="e.g. sridevi@gmail.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="text"
              required
              value={newInquiry.phone}
              onChange={(e) => setNewInquiry({ ...newInquiry, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Target Event Date
            </label>
            <input
              type="date"
              value={newInquiry.eventDate}
              onChange={(e) => setNewInquiry({ ...newInquiry, eventDate: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Venue / Location
            </label>
            <input
              type="text"
              value={newInquiry.venue}
              onChange={(e) => setNewInquiry({ ...newInquiry, venue: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Budget Range
            </label>
            <input
              type="text"
              value={newInquiry.budget}
              onChange={(e) => setNewInquiry({ ...newInquiry, budget: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Inquiry Message / Notes
            </label>
            <textarea
              rows={3}
              value={newInquiry.notes}
              onChange={(e) => setNewInquiry({ ...newInquiry, notes: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider"
            >
              Save Enquiry
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
