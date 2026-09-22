"use client";

import React from "react";

export default function UsersManager() {
  const users = [
    { id: "USR-1", name: "Dhilip Raman", email: "admin@dhilipstudio.com", role: "Super Admin" },
    { id: "USR-2", name: "Studio Manager", email: "manager@dhilipstudio.com", role: "Studio Manager" },
    { id: "USR-3", name: "SEO Specialist", email: "seo@dhilipstudio.com", role: "SEO Specialist" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 rounded-2xl shadow-xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1]">
            ACCESS CONTROL
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
            Users &amp; Role Access
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Manage admin accounts, assign roles (Super Admin, Studio Manager, SEO Specialist).
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer">
          + Create User Account
        </button>
      </div>

      <div className="bg-[#1b1c1c] border border-stone-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/80 uppercase tracking-wider text-stone-400 text-[10px] border-b border-stone-800">
              <tr>
                <th className="p-4">User ID</th>
                <th className="p-4">Full Name</th>
                <th className="p-4">Email Address</th>
                <th className="p-4">Assigned Role</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-stone-900/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#f3e3a1]">{u.id}</td>
                  <td className="p-4 font-semibold text-white">{u.name}</td>
                  <td className="p-4 font-mono">{u.email}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b88c42]/20 text-[#f3e3a1] border border-[#b88c42]/40">
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 text-stone-200 text-xs font-semibold transition-all">
                      Edit Permissions
                    </button>
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
