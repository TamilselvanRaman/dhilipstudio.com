"use client";

import React, { useState } from "react";
import { DataTable, Column } from "@/components/admin/ui/DataTable";
import { initialUsers, UserAccess } from "@/lib/adminData";

export default function UsersManager() {
  const [users, setUsers] = useState<UserAccess[]>(initialUsers);

  const columns: Column<UserAccess>[] = [
    {
      header: "User ID",
      accessorKey: "id",
      cell: (row) => <span className="font-mono text-blue-600 font-bold">{row.id}</span>,
    },
    {
      header: "Name & Email",
      cell: (row) => (
        <div>
          <div className="font-semibold text-slate-900">{row.name}</div>
          <div className="text-[11px] text-slate-500 font-mono">{row.email}</div>
        </div>
      ),
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
          {row.role}
        </span>
      ),
    },
    {
      header: "2FA Protection",
      cell: (row) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
          row.twoFactorEnabled ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-500 border border-slate-200"
        }`}>
          {row.twoFactorEnabled ? "ENABLED (TOTP)" : "DISABLED"}
        </span>
      ),
    },
    {
      header: "Last Login",
      accessorKey: "lastLogin",
      cell: (row) => <span className="font-mono text-slate-500">{row.lastLogin}</span>,
    },
    {
      header: "Permissions Matrix",
      cell: () => (
        <button className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold cursor-pointer">
          Configure Matrix
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            RBAC &amp; SECURITY LOGS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            Users &amp; Role Access Control
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Manage Owner, Manager, Editor, Photographer, and Accountant permissions, 2FA security, and login audit logs.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer">
          <span className="material-symbols-outlined text-base">person_add</span>
          <span>+ Create User</span>
        </button>
      </div>

      <DataTable
        data={users}
        columns={columns}
        searchPlaceholder="Search users by name, email, or role..."
        searchField="name"
      />
    </div>
  );
}
