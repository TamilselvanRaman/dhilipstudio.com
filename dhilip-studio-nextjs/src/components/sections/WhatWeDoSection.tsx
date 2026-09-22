"use client";

import React from "react";
import Link from "next/link";

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f5f0] py-20 px-4 sm:px-6 md:px-12 border-b border-stone-300/80 overflow-hidden" id="what-we-do-offer">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= PART 1: WHAT WE DO? ================= */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-stone-200/90">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b88c42]/15 border border-[#b88c42]/40 text-[#b88c42] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b88c42]"></span>
              WHAT WE DO?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight leading-tight">
              Memories Are Created, And That Is What We Do
            </h2>
            <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#b88c42] mt-2">
              Turning fleeting wedding moments into beautifully crafted heirlooms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Block */}
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-stone-900 text-base sm:text-lg leading-snug border-l-4 border-[#b88c42] pl-4 py-1">
                Dhilip Studio never forgets to capture your magical moments, and our team of professional wedding photographers are experts in the same.
              </p>

              <p>
                One of the best things about us is that we highlight and capture subtle emotions in a beautiful way. We turn wedding moments into beautifully crafted photos filled with love, happiness, affection, and magic.
              </p>

              <p>
                You can trust us for professional wedding photography in Chennai. We know where, when, how, and what to capture, planning events well in advance. We cover all important milestones—from wedding invitations to unique traditional rituals at every ceremony.
              </p>

              <p>
                Our team works systematically to capture moments across different parts of the wedding hall simultaneously. With our high-quality{" "}
                <Link href="/gallery" className="text-[#b88c42] font-semibold underline underline-offset-4 hover:text-stone-900 transition-colors">
                  wedding pictures
                </Link>{" "}
                and videos, you can relive every precious moment of your big day.
              </p>

              <p>
                Memories are created, and that is what we do! We capture wonderful moments such as the ceremony, exchange of vows, and dance, as well as smaller details like venue decorations, bridal attire, and candid interactions between guests.
              </p>

              <p>
                With 12+ years of experience and over 500 diverse occasions covered, our Chennai wedding photographers bring complete professionalism, technical mastery, and artistic lighting techniques to make you look your absolute best.
              </p>
            </div>

            {/* Right Visual Image Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp"
                  alt="Dhilip Studio Wedding Photography Coverage"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f3e3a1]">
                    EXPERT CHENNAI WEDDING PHOTOGRAPHERS
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight">
                    Comprehensive Coverage of Every Ritual &amp; Detail
                  </h3>
                  <div className="pt-2 flex items-center gap-4 text-xs text-stone-300 font-mono">
                    <span>12+ Years Experience</span>
                    <span>•</span>
                    <span>500+ Occasions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ================= PART 2: WHAT WE OFFER? ================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b88c42]/15 border border-[#b88c42]/40 text-[#b88c42] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b88c42]"></span>
              WHAT WE OFFER?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight leading-tight">
              Tailored Photography Services &amp; Shoots
            </h2>
            <p className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#b88c42] mt-2">
              Immortalize every milestone of life with creative artistic vision
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Pre-Wedding */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                  <img
                    src="/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg"
                    alt="Pre-Wedding Photography"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#b88c42] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                  </div>
                </div>
                <div className="p-7 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#b88c42] transition-colors">
                    Pre-Wedding Photography
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    A popular photoshoot style providing an opportunity to express your personalities, emotions, and connection in a relaxed outdoor setting. We also incorporate{" "}
                    <Link href="/videos" className="text-[#b88c42] font-semibold underline underline-offset-4 hover:text-stone-900 transition-colors">
                      drone videography
                    </Link>{" "}
                    as part of this experience.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b88c42] group-hover:text-stone-900 transition-colors pt-4 border-t border-stone-100 w-full"
                >
                  <span>View Shoot Monograph</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 2: Candid Wedding */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                  <img
                    src="/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp"
                    alt="Candid Wedding Photography"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#b88c42] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                  </div>
                </div>
                <div className="p-7 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#b88c42] transition-colors">
                    Candid Wedding Photography
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    All robotic poses are gone! Modern couples prefer real-time unscripted emotions captured naturally, and we are recognized as the best candid wedding photographers in Chennai.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b88c42] group-hover:text-stone-900 transition-colors pt-4 border-t border-stone-100 w-full"
                >
                  <span>View Candid Gallery</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 3: Traditional Photography */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                  <img
                    src="/home_Page_images/brahmin-wedding-photography.jpg"
                    alt="Traditional Photography"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#b88c42] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl">auto_stories</span>
                  </div>
                </div>
                <div className="p-7 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#b88c42] transition-colors">
                    Traditional Photography
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Even though candid shots are popular, many still cherish structured family portraits and formal ceremony coverage. We capture all sacred rituals with grace and clarity.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b88c42] group-hover:text-stone-900 transition-colors pt-4 border-t border-stone-100 w-full"
                >
                  <span>View Ritual Gallery</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 4: Maternity Photoshoot */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                  <img
                    src="/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg"
                    alt="Maternity Photoshoot"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#b88c42] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl">pregnant_woman</span>
                  </div>
                </div>
                <div className="p-7 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#b88c42] transition-colors">
                    Maternity Photoshoot
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Expectant parents love celebrating their pregnancy journey. Our{" "}
                    <Link href="/blog" className="text-[#b88c42] font-semibold underline underline-offset-4 hover:text-stone-900 transition-colors">
                      maternity photoshoot Chennai
                    </Link>{" "}
                    covers the emotional phase of motherhood, baby bump closeups, and family anticipation.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b88c42] group-hover:text-stone-900 transition-colors pt-4 border-t border-stone-100 w-full"
                >
                  <span>Explore Maternity Shoots</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 5: Newborn Photoshoot */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                  <img
                    src="/home_Page_images/engagement-photo-studio-chennai.jpg"
                    alt="Newborn Photoshoot"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#b88c42] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl">child_care</span>
                  </div>
                </div>
                <div className="p-7 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#b88c42] transition-colors">
                    Newborn Photoshoot
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    The most trending photoshoot focusing on capturing precious early days, tiny innocent smiles, and tender first moments of your newborn baby&apos;s life in a safe studio environment.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b88c42] group-hover:text-stone-900 transition-colors pt-4 border-t border-stone-100 w-full"
                >
                  <span>View Newborn Gallery</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 6: Birthday Photography */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                  <img
                    src="/home_Page_images/kids-birthday-photographer-chennai.webp"
                    alt="Birthday Photography"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#b88c42] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-xl">cake</span>
                  </div>
                </div>
                <div className="p-7 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#b88c42] transition-colors">
                    Birthday Photography
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Be it a 1st or 100th birthday, you can trust our{" "}
                    <Link href="/gallery" className="text-[#b88c42] font-semibold underline underline-offset-4 hover:text-stone-900 transition-colors">
                      birthday photography in Chennai
                    </Link>{" "}
                    to celebrate the milestone by capturing magical moments, cake smashes, and family joy.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b88c42] group-hover:text-stone-900 transition-colors pt-4 border-t border-stone-100 w-full"
                >
                  <span>View Birthday Gallery</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
