"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@dhilipstudio.com");
  const [password, setPassword] = useState("admin123");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to studio admin dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#121314] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1b1c1c] border border-stone-800 rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <img src="/logo.png" alt="Dhilip Studio" className="h-12 w-auto mx-auto mb-2" />
          <h1 className="font-serif text-2xl font-bold text-white tracking-wide">
            Studio Admin Portal
          </h1>
          <p className="text-xs text-stone-400">
            Operations &amp; Client Management System
          </p>
        </div>

        {/* Quick Demo Credentials Box */}
        <div className="bg-stone-900/90 border border-[#b88c42]/40 rounded-xl p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#f3e3a1] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#b88c42]">key</span>
              <span>Demo Credentials (Click to Fill &amp; Sign In)</span>
            </span>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                setEmail("admin@dhilipstudio.com");
                setPassword("admin123");
                router.push("/admin/dashboard");
              }}
              className="w-full text-left bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 p-2.5 rounded-lg border border-stone-700 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="font-bold text-stone-200 group-hover:text-stone-950">Studio Owner / Super Admin</p>
                <p className="text-[11px] text-stone-400 group-hover:text-stone-900 font-mono">
                  admin@dhilipstudio.com · admin123
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-[#b88c42]/20 group-hover:bg-stone-950 group-hover:text-[#f3e3a1] rounded text-[#f3e3a1]">
                Auto-Fill &rarr;
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setEmail("manager@dhilipstudio.com");
                setPassword("manager123");
                router.push("/admin/dashboard");
              }}
              className="w-full text-left bg-stone-800 hover:bg-[#b88c42] hover:text-stone-950 p-2.5 rounded-lg border border-stone-700 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="font-bold text-stone-200 group-hover:text-stone-950">Studio Operations Manager</p>
                <p className="text-[11px] text-stone-400 group-hover:text-stone-900 font-mono">
                  manager@dhilipstudio.com · manager123
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-[#b88c42]/20 group-hover:bg-stone-950 group-hover:text-[#f3e3a1] rounded text-[#f3e3a1]">
                Auto-Fill &rarr;
              </span>
            </button>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              Username / Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-[#b88c42]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-[#b88c42]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow-lg cursor-pointer"
          >
            Sign In To Studio Admin
          </button>
        </form>

        <div className="pt-4 border-t border-stone-800 text-center text-xs text-stone-400">
          Looking for SEO Portal?{" "}
          <Link href="/seo-admin/login" className="text-[#f3e3a1] font-semibold hover:underline">
            Go to SEO Dashboard &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
