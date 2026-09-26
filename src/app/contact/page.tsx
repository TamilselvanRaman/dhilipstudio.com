"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

export default function ContactPage() {
  const router = useRouter();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding Photography",
    date: "",
    location: "Chennai",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryName = formData.name ? encodeURIComponent(formData.name) : "Customer";
    router.push(`/thank-you?name=${queryName}`);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col selection:bg-[#b88c42]/20 selection:text-[#b88c42]">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Top Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#b88c42] bg-[#b88c42]/10 px-3.5 py-1 rounded-full border border-[#b88c42]/20">
              RESERVE YOUR WEDDING DATES
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-stone-900">
              Get In Touch With Dhilip Studio
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              We document candid wedding monographs, Brahmin sacred rituals, pre-wedding beach films, maternity &amp; milestone celebrations across Chennai &amp; Tamil Nadu.
            </p>
          </div>

          {/* Split 2-Column Layout: Left (MAP + DETAILS), Right (DIRECT MESSAGE FORM) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column (MAP + DETAILS) */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
              
              {/* TOP: MAP Embed Frame */}
              <div className="bg-stone-900 rounded-[28px] border border-stone-200/90 shadow-xl overflow-hidden relative h-72 sm:h-80 md:h-[340px] shrink-0">
                {/* Map Skeleton / Spinner Overlay while loading */}
                {!mapLoaded && (
                  <div className="absolute inset-0 z-20 bg-stone-900 text-white flex flex-col items-center justify-center p-6 text-center space-y-3 animate-pulse">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-[#b88c42]/20 border border-[#b88c42]/40 flex items-center justify-center text-[#b88c42] animate-bounce">
                        <span className="material-symbols-outlined text-3xl">location_on</span>
                      </div>
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-[#b88c42]/30 blur-xs"></span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#f3e3a1] block">
                        DHILIP STUDIO PORUR
                      </span>
                      <p className="text-[11px] text-stone-300 font-sans">
                        Loading Interactive Google Map...
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 pt-1">
                      <span className="w-2 h-2 rounded-full bg-[#b88c42] animate-ping"></span>
                      <span className="w-2 h-2 rounded-full bg-[#b88c42] animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-[#b88c42]"></span>
                    </div>
                  </div>
                )}

                <iframe
                  title="Dhilip Studio Porur Google Maps"
                  src="https://maps.google.com/maps?q=Dhilip+Studio+Porur+Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="eager"
                  onLoad={() => setMapLoaded(true)}
                  className={`w-full h-full transition-opacity duration-700 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
                />

                {/* Floating Badge on Map */}
                <div className="absolute top-4 right-4 bg-stone-900/90 text-white px-3 py-1.5 rounded-xl border border-stone-700/80 backdrop-blur-md flex items-center gap-2 text-xs font-mono shadow-lg z-30">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span>PORUR, CHENNAI</span>
                </div>
              </div>

              {/* BOTTOM: Studio Details & Quick Action Cards */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-stone-200/90 shadow-xl flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#b88c42] font-bold block">
                      CHENNAI STUDIO LOCATION
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      OPEN DAILY · 9 AM - 9 PM
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                    Visit Our Porur Studio
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                    No. 4/1, Mandaveli Street, Karambakkam, Porur, Chennai, Tamil Nadu 600116
                  </p>

                  <div className="space-y-2 text-xs text-stone-700 font-sans border-t border-stone-100 pt-4">
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-[#b88c42]">call</span>
                      <span><strong>Phone:</strong> +91 91762 31420</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-[#b88c42]">mail</span>
                      <span><strong>Email:</strong> dhilipstudio@gmail.com</span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919176231420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-md transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.369c-5.18 0-9.4 4.22-9.404 9.4 0 1.656.432 3.273 1.254 4.697l-1.332 4.866 4.981-1.307a9.36 9.36 0 004.5 1.144h.004c5.18 0 9.403-4.22 9.406-9.4a9.34 9.34 0 00-2.753-6.645A9.336 9.336 0 0012.051 3.415z" />
                    </svg>
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href="tel:+919176231420"
                    className="inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full border border-stone-300/80 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>Call Studio</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=13.0377,80.1514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#b88c42] hover:bg-[#9e742f] text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-md transition-all"
                  >
                    <span>Maps</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column (DIRECT MESSAGE FORM) */}
            <div className="lg:col-span-6 order-1 lg:order-2 h-full">
              <div className="bg-white p-6 sm:p-10 rounded-[28px] border border-stone-200/90 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                    Send Us a Direct Message
                  </h2>
                  <p className="text-xs text-stone-500 mb-8 font-sans">
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-mono">
                          YOUR FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand &amp; Priya"
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#b88c42] text-sm bg-stone-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-mono">
                          PHONE / WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98400 00000"
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#b88c42] text-sm bg-stone-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-mono">
                          EVENT TYPE
                        </label>
                        <CustomDropdown
                          value={formData.eventType}
                          onChange={(val) => setFormData({ ...formData, eventType: val })}
                          theme="gold"
                          options={[
                            { value: "Wedding Photography", label: "Wedding Photography", icon: "photo_camera" },
                            { value: "Candid Photography", label: "Candid Photography", icon: "camera" },
                            { value: "Brahmin Wedding Photography", label: "Brahmin Wedding Photography", icon: "auto_awesome" },
                            { value: "Pre/Post-Wedding Shoot", label: "Pre/Post-Wedding Shoot", icon: "favorite" },
                            { value: "Engagement Photography", label: "Engagement Photography", icon: "diamond" },
                            { value: "Maternity Photoshoot", label: "Maternity Photoshoot", icon: "child_care" },
                            { value: "Newborn Baby Photoshoot", label: "Newborn Baby Photoshoot", icon: "face" },
                            { value: "Birthday Photography", label: "Birthday Photography", icon: "cake" },
                          ]}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-mono">
                          TENTATIVE EVENT DATE
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#b88c42] focus:ring-2 focus:ring-[#b88c42]/20 text-sm bg-stone-50/50 hover:bg-white text-stone-800 transition-all font-sans cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-mono">
                        EVENT LOCATION / HALL NAME
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Mayor Ramanathan Hall, Mylapore, Chennai"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#b88c42] text-sm bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-mono">
                        ADDITIONAL MESSAGE / CUSTOM REQUIREMENTS
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your wedding events, duration, or raw silk album preferences..."
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#b88c42] text-sm bg-stone-50/50"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-stone-900 hover:bg-[#b88c42] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      SUBMIT BOOKING INQUIRY &rarr;
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer topBgColor="bg-[#fcfbfa]" />
    </div>
  );
}
