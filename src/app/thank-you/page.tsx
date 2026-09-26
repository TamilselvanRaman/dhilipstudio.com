"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name") || "Valued Client";

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="max-w-xl mx-auto text-center px-4 py-12 sm:py-16 space-y-6">
      
      {/* Simple Top Gold Tag */}
      <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#b88c42] bg-[#b88c42]/10 px-4 py-1.5 rounded-full border border-[#b88c42]/20">
        <span className="w-2 h-2 rounded-full bg-[#b88c42] animate-pulse"></span>
        <span>INQUIRY CONFIRMED</span>
      </div>

      {/* Clean Headline & Subtitle */}
      <div className="space-y-2">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Thank You, {name}!
        </h1>

        <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#b88c42]">
          Your wedding story begins here.
        </p>
      </div>

      {/* Simple Summary Text */}
      <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed max-w-md mx-auto">
        We have received your booking inquiry. Our lead director Mr. Dhilip Kumar will personally review your details and reach out within 24 hours.
      </p>

      {/* Booking Ref Badge */}
      <div className="pt-1">
        <span className="inline-block bg-white px-4 py-2 rounded-full border border-stone-200 text-stone-700 font-mono text-xs uppercase tracking-widest font-semibold shadow-xs">
          BOOKING REF: #DS-2026-CONFIRMED
        </span>
      </div>

      {/* Clean 3-Second Redirect Bar & Button */}
      <div className="pt-6 border-t border-stone-200/80 space-y-4 max-w-md mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 font-bold">
          Redirecting to homepage in <span className="text-[#b88c42] font-extrabold">{countdown}s</span>...
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#b88c42] text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
          >
            <span>Go to Homepage Now</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <Suspense fallback={<div className="text-center py-16 font-mono text-xs text-stone-500">Loading Confirmation...</div>}>
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer topBgColor="bg-[#faf8f5]" />
    </div>
  );
}
