"use client";

import React, { useState } from "react";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { initialReviews, ClientReview } from "@/lib/adminData";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

export default function ClientReviewsManager() {
  const [reviews, setReviews] = useState<ClientReview[]>(initialReviews);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form State
  const [clientName, setClientName] = useState("");
  const [eventDate, setEventDate] = useState("2026-08-15");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [clientPhoto, setClientPhoto] = useState("/home_Page_images/engagement-vows.jpg");

  const toggleFeatured = (id: string) => {
    setReviews(
      reviews.map((r) => (r.id === id ? { ...r, featuredOnHome: !r.featuredOnHome } : r))
    );
  };

  const handleOpenNew = () => {
    setClientName("");
    setEventDate("2026-08-15");
    setRating(5);
    setReviewText("");
    setClientPhoto("/home_Page_images/engagement-vows.jpg");
    setIsDrawerOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: ClientReview = {
      id: `REV-${Math.floor(10 + Math.random() * 90)}`,
      clientName: clientName || "Anonymous Couple",
      eventDate,
      rating,
      reviewText: reviewText || "Dhilip Studio captured our sacred moments with utmost perfection!",
      status: "Approved",
      featuredOnHome: true,
    };
    setReviews([newRev, ...reviews]);
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            APPROVAL QUEUE &amp; TESTIMONIALS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Client Reviews &amp; Approval Queue
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Approve/reject submitted client feedback, manage 5-star ratings, and set homepage featured testimonials.
          </p>
        </div>

        <button
          onClick={handleOpenNew}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">rate_review</span>
          <span>+ Add Manual Review</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 space-y-4 shadow-xs transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-base text-slate-900">{rev.clientName}</h3>
                <span className="text-[11px] font-mono text-slate-500">{rev.eventDate}</span>
              </div>
              <div className="text-amber-500 text-sm">
                {"★".repeat(rev.rating)}
              </div>
            </div>

            <p className="text-xs text-slate-600 italic leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
              "{rev.reviewText}"
            </p>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                Status: {rev.status}
              </span>

              <button
                onClick={() => toggleFeatured(rev.id)}
                className={`px-3 py-1 rounded-lg font-mono text-[10px] font-bold uppercase transition-colors border cursor-pointer ${
                  rev.featuredOnHome
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-slate-100 text-slate-600 border-slate-200"
                }`}
              >
                Featured Home: {rev.featuredOnHome ? "YES" : "NO"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Add Verified Client Testimonial"
        subtitle="Publish client feedback and feature 5-star ratings on homepage."
      >
        <form onSubmit={handleSave} className="space-y-4 text-xs font-sans text-slate-900">
          <div>
            <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Couple / Client Name</label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="e.g. Ramkumar & Anitha"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Event Date</label>
              <input
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Star Rating (1-5)</label>
              <CustomDropdown
                value={String(rating)}
                onChange={(val) => setRating(Number(val))}
                theme="blue"
                options={[
                  { value: "5", label: "5 Stars (★★★★★)", icon: "star" },
                  { value: "4", label: "4 Stars (★★★★)", icon: "star" },
                  { value: "3", label: "3 Stars (★★★)", icon: "star" },
                ]}
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-mono text-[11px] uppercase font-bold mb-1">Review Testimonial Text</label>
            <textarea
              rows={3}
              required
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write the client's experience..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <ImageUploadPicker
              label="Couple Portrait / Event Photo (Click or Drag & Drop)"
              value={clientPhoto}
              onChange={setClientPhoto}
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 cursor-pointer shadow-md"
            >
              Publish Testimonial
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}
