"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfiniteMarqueeSection } from "@/components/sections/InfiniteMarqueeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudioStorySection } from "@/components/sections/StudioStorySection";
import { PortfolioCoverflowSection } from "@/components/sections/PortfolioCoverflowSection";
import { ClientReviewsSection } from "@/components/sections/ClientReviewsSection";
import { ExperienceStepsSection } from "@/components/sections/ExperienceStepsSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface flex flex-col font-sans antialiased">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-surface-container-lowest flex-1">
        {/* Section 1: Hero & 3D Panoramic Carousel */}
        <HeroSection />

        {/* Section 2: Dual Infinite Marquee Portfolio Strips */}
        <InfiniteMarqueeSection />

        {/* Section 3: What We Do (8-Card Services Grid & Studio Stats) */}
        <ServicesSection />

        {/* Section 4: Dhilip Studio Story, Vision & Offerings */}
        <StudioStorySection />

        {/* Section 5: Portfolio Single 3D Coverflow Showcase */}
        <PortfolioCoverflowSection />

        {/* Section 6: Client Reviews & Testimonials Slider */}
        <ClientReviewsSection />

        {/* Section 7: Why Couples Choose Us (5-Step Experience) */}
        <ExperienceStepsSection />

        {/* Section 8: Call to Action Booking Banner */}
        <CtaBandSection />
      </main>

      {/* Footer & Studio Details */}
      <Footer topBgColor="bg-[#f6f3ed]" />
    </div>
  );
}
