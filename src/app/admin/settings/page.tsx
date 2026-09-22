"use client";

import React, { useState } from "react";

export default function GeneralStudioSettings() {
  const [phone, setPhone] = useState("+91 91762 31420");
  const [email, setEmail] = useState("dhilipstudio@gmail.com");
  const [address, setAddress] = useState("No. 4/1, Mandaveli Street, Karambakkam, Porur, Chennai-600116");
  const [mapsQuery, setMapsQuery] = useState("13.0377,80.1514");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            STUDIO CONFIGURATION
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            General Studio Settings
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Update studio contact details, WhatsApp integration number, and Google Maps location.
          </p>
        </div>

        {saved && (
          <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 rounded-xl text-xs font-bold animate-pulse">
            ✓ Settings Updated!
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="bg-[#1b1c1c] border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl max-w-3xl">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              WhatsApp &amp; Direct Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b88c42]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              Studio Official Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b88c42]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              Studio Address
            </label>
            <textarea
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b88c42]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              Google Maps Coordinates / Query
            </label>
            <input
              type="text"
              value={mapsQuery}
              onChange={(e) => setMapsQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b88c42]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-stone-800 flex justify-end">
          <button
            type="submit"
            className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-xl transition-all shadow-lg cursor-pointer"
          >
            Save Studio Settings
          </button>
        </div>
      </form>
    </div>
  );
}
