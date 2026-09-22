"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SeoLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("seo@dhilipstudio.com");
  const [password, setPassword] = useState("seo123");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/seo-admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#121314] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1b1c1c] border border-stone-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#b88c42] text-stone-950 flex items-center justify-center font-bold text-xl font-mono mx-auto mb-2 shadow-lg">
            SEO
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#f3e3a1] tracking-wide">
            SEO Specialist Portal
          </h1>
          <p className="text-xs text-stone-400">
            Search Growth &amp; Content Optimization System
          </p>
        </div>

        {/* Quick Demo Credentials Box */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#f3e3a1] uppercase tracking-wider text-[11px] flex items-center gap-1.5 font-mono">
              <span className="material-symbols-outlined text-sm text-[#b88c42]">key</span>
              <span>Demo SEO Credentials (Click to Fill &amp; Sign In)</span>
            </span>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                setEmail("seo@dhilipstudio.com");
                setPassword("seo123");
                router.push("/seo-admin/dashboard");
              }}
              className="w-full text-left bg-stone-950/80 hover:bg-[#b88c42] hover:text-stone-950 p-3 rounded-xl border border-stone-800 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="font-bold text-[#f3e3a1] group-hover:text-stone-950">Lead SEO Specialist</p>
                <p className="text-[11px] text-stone-400 group-hover:text-stone-900 font-mono">
                  seo@dhilipstudio.com · seo123
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-[#b88c42]/20 group-hover:bg-stone-950 group-hover:text-[#f3e3a1] rounded text-[#f3e3a1]">
                Auto-Fill &rarr;
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setEmail("content@dhilipstudio.com");
                setPassword("content123");
                router.push("/seo-admin/dashboard");
              }}
              className="w-full text-left bg-stone-950/80 hover:bg-[#b88c42] hover:text-stone-950 p-3 rounded-xl border border-stone-800 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="font-bold text-[#f3e3a1] group-hover:text-stone-950">Content Strategist &amp; Writer</p>
                <p className="text-[11px] text-stone-400 group-hover:text-stone-900 font-mono">
                  content@dhilipstudio.com · content123
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
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 font-mono">
              SEO Account Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 font-mono">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-stone-900 border border-stone-700 focus:border-[#b88c42] rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-xl cursor-pointer"
          >
            Sign In To SEO Dashboard
          </button>
        </form>

        <div className="pt-4 border-t border-stone-800 text-center text-xs text-stone-400">
          Looking for Studio Admin?{" "}
          <Link href="/admin/login" className="text-[#f3e3a1] font-semibold hover:underline">
            Go to Studio Admin &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
