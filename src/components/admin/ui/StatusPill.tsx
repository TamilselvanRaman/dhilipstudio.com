"use client";

import React from "react";

export type StatusType =
  | "New"
  | "Contacted"
  | "Quoted"
  | "Follow-up"
  | "Won"
  | "Lost"
  | "Enquiry"
  | "Confirmed"
  | "Advance Paid"
  | "Completed"
  | "Delivered"
  | "Closed"
  | "Active"
  | "Draft"
  | "Pending"
  | "Paid";

interface StatusPillProps {
  status: StatusType | string;
  size?: "sm" | "md";
}

export function StatusPill({ status, size = "md" }: StatusPillProps) {
  const getStyle = () => {
    switch (status) {
      case "New":
      case "Enquiry":
      case "Pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";

      case "Contacted":
      case "Follow-up":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";

      case "Quoted":
      case "Draft":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";

      case "Confirmed":
      case "Advance Paid":
      case "Paid":
        return "bg-[#C89B3C]/15 text-[#E8C978] border-[#C89B3C]/40 font-bold";

      case "Won":
      case "Completed":
      case "Delivered":
      case "Active":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";

      case "Lost":
      case "Closed":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";

      default:
        return "bg-stone-500/10 text-stone-400 border-stone-500/30";
    }
  };

  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-[10px]"
      : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-full border ${sizeClasses} ${getStyle()}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
      <span>{status}</span>
    </span>
  );
}
