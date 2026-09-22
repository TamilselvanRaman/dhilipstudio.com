"use client";

import React from "react";

export default function TeamManager() {
  const team = [
    { id: "TM-1", name: "Dhilip Raman", role: "Lead Principal Photographer & Creative Director", status: "Active" },
    { id: "TM-2", name: "Suresh Kumar", role: "Senior Candid Cinematographer", status: "Active" },
    { id: "TM-3", name: "Anand Raghavan", role: "Lighting Specialist & Colorist", status: "Active" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            STUDIO TEAM &amp; CREW
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Team Members Manager
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Manage studio photographers, cinematographers, and crew profiles.
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Add Team Member
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((t) => (
          <div key={t.id} className="bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#f3e3a1]">{t.id}</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {t.status}
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">{t.name}</h3>
            <p className="text-xs text-stone-400">{t.role}</p>
            <button className="w-full mt-2 py-2 rounded-xl bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-bold transition-all">
              Edit Member Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
