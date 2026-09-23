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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-8 shadow-2xl space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <img src="/letter_logo.png" alt="Dhilip Studio" className="h-12 w-auto mx-auto mb-2 object-contain" />
          <h1 className="font-serif text-2xl font-bold text-slate-900 tracking-wide">
            SEO Specialist Portal
          </h1>
          <p className="text-xs text-slate-500 font-sans">
            Search Growth &amp; Content Optimization System
          </p>
        </div>

        {/* Login Form First */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
              SEO Account Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-sans"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95"
          >
            Sign In To SEO Dashboard
          </button>
        </form>

        {/* Quick Demo Credentials Box BELOW Inputs */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-blue-600 uppercase tracking-wider text-[11px] flex items-center gap-1.5 font-mono">
              <span className="material-symbols-outlined text-sm text-blue-600">key</span>
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
              className="w-full text-left bg-white hover:bg-blue-600 hover:text-white p-3 rounded-xl border border-slate-200 transition-all flex items-center justify-between group cursor-pointer shadow-xs"
            >
              <div>
                <p className="font-bold text-slate-900 group-hover:text-white">Lead SEO Specialist</p>
                <p className="text-[11px] text-slate-500 group-hover:text-blue-100 font-mono">
                  seo@dhilipstudio.com · seo123
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 text-blue-700 group-hover:bg-white group-hover:text-blue-600 rounded-lg font-mono">
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
              className="w-full text-left bg-white hover:bg-blue-600 hover:text-white p-3 rounded-xl border border-slate-200 transition-all flex items-center justify-between group cursor-pointer shadow-xs"
            >
              <div>
                <p className="font-bold text-slate-900 group-hover:text-white">Content Strategist &amp; Writer</p>
                <p className="text-[11px] text-slate-500 group-hover:text-blue-100 font-mono">
                  content@dhilipstudio.com · content123
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 text-blue-700 group-hover:bg-white group-hover:text-blue-600 rounded-lg font-mono">
                Auto-Fill &rarr;
              </span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 text-center text-xs text-slate-500 font-sans">
          Looking for Studio Admin?{" "}
          <Link href="/admin/login" className="text-blue-600 font-bold hover:underline">
            Go to Studio Admin &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
