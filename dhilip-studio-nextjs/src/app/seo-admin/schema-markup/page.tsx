"use client";

import React, { useState } from "react";

export default function SchemaMarkupBuilder() {
  const [schemaType, setSchemaType] = useState("LocalBusiness");
  const [jsonOutput, setJsonOutput] = useState(
    JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Dhilip Studio Wedding Photography",
        "image": "https://dhilipstudio.com/logo.png",
        "telephone": "+919176231420",
        "email": "dhilipstudio@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 4/1, Mandaveli Street, Karambakkam",
          "addressLocality": "Porur, Chennai",
          "postalCode": "600116",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.0377,
          "longitude": 80.1514
        },
        "url": "https://dhilipstudio.com/"
      },
      null,
      2
    )
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1b1c1c] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f3e3a1] bg-[#b88c42]/10 px-3 py-1 rounded-full border border-[#b88c42]/30 font-bold">
            GOOGLE RICH SNIPPET STRUCTURED DATA
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
            JSON-LD Schema Builder
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Generate and validate Google Rich Result structured schemas (`LocalBusiness`, `Event`, `Article`).
          </p>
        </div>

        <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xl cursor-pointer">
          Validate With Google &rarr;
        </button>
      </div>

      <div className="bg-[#1b1c1c] border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl max-w-4xl">
        <div className="flex items-center gap-3">
          <label className="text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">
            Select Schema Type:
          </label>
          <select
            value={schemaType}
            onChange={(e) => setSchemaType(e.target.value)}
            className="bg-stone-900 text-white font-mono text-xs px-4 py-2.5 rounded-xl border border-stone-700 focus:border-[#b88c42]"
          >
            <option value="LocalBusiness">LocalBusiness (Photography Studio)</option>
            <option value="Event">Event (Wedding Ceremony)</option>
            <option value="Article">Article (Blog Post)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2 font-mono">
            JSON-LD Code Payload Output
          </label>
          <textarea
            rows={14}
            value={jsonOutput}
            onChange={(e) => setJsonOutput(e.target.value)}
            className="w-full bg-slate-950 border border-stone-800 rounded-xl p-4 text-xs font-mono text-[#f3e3a1] focus:outline-none focus:border-[#b88c42]"
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-[#b88c42] hover:bg-[#cca254] text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-xl">
            Save JSON-LD Schema
          </button>
        </div>
      </div>
    </div>
  );
}
