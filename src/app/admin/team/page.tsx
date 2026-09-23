"use client";

import React, { useState } from "react";
import { SlideOverDrawer } from "@/components/admin/ui/SlideOverDrawer";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";
import { initialTeam, TeamMember } from "@/lib/adminData";

export default function TeamManager() {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("Lead Wedding Photographer");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [avatar, setAvatar] = useState("/logo.png");

  const handleOpenNew = () => {
    setSelectedMember(null);
    setName("");
    setRole("Lead Wedding Photographer");
    setPhone("+91 98765 43210");
    setAvatar("/logo.png");
    setIsDrawerOpen(true);
  };

  const handleOpenEdit = (mem: TeamMember) => {
    setSelectedMember(mem);
    setName(mem.name);
    setRole(mem.role);
    setPhone(mem.phone);
    setAvatar(mem.avatar);
    setIsDrawerOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMember) {
      setTeam(
        team.map((m) =>
          m.id === selectedMember.id ? { ...m, name, role, phone, avatar } : m
        )
      );
    } else {
      const newMem: TeamMember = {
        id: `TEAM-${Math.floor(10 + Math.random() * 90)}`,
        name,
        role,
        avatar,
        phone,
        specialties: ["Candid Photos", "Drone Cinema"],
        assignedShootsCount: 8,
      };
      setTeam([newMem, ...team]);
    }
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            STUDIO CREW &amp; ASSIGNMENTS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Team Roster &amp; Assignments
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Manage lead photographers, drone pilots, lighting directors, and shoot schedule assignments.
          </p>
        </div>

        <button
          onClick={handleOpenNew}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">person_add</span>
          <span>+ Add Staff Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.id} className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-600 p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">{member.name}</h3>
                  <span className="text-[11px] font-mono text-blue-600 font-bold block">{member.role}</span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-[11px] text-slate-500 font-mono">Phone: {member.phone}</div>
                <div className="flex flex-wrap items-center gap-1 pt-1">
                  {member.specialties.map((spec, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[10px] text-blue-700 font-mono font-semibold">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-700 font-bold">{member.assignedShootsCount} Shoots Assigned</span>
              <button
                onClick={() => handleOpenEdit(member)}
                className="text-blue-600 hover:underline font-bold cursor-pointer"
              >
                Edit &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      <SlideOverDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedMember ? `Edit Staff Member — ${selectedMember.name}` : "Add Staff Member"}
        subtitle="Manage crew role, contact number, and profile picture avatar."
      >
        <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Designation / Role</label>
            <input
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Lead Wedding Photographer"
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-mono text-[11px] uppercase font-bold mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-blue-600 font-mono focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <ImageUploadPicker
              label="Staff Profile Avatar (Click or Drag & Drop)"
              value={avatar}
              onChange={setAvatar}
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              {selectedMember ? "Save Changes" : "Add Staff Member"}
            </button>
          </div>
        </form>
      </SlideOverDrawer>
    </div>
  );
}

