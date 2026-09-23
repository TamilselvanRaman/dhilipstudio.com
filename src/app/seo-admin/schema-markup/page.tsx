"use client";

import React, { useState } from "react";
import { initialSchemas, SchemaMarkupEntry } from "@/lib/adminData";

export default function SchemaMarkupBuilder() {
  const [schemas, setSchemas] = useState<SchemaMarkupEntry[]>(initialSchemas);
  const [selectedType, setSelectedType] = useState<string>("LocalBusiness");
  const [jsonCode, setJsonCode] = useState(initialSchemas[0].rawJson);

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    const found = schemas.find((s) => s.schemaType === type);
    if (found) {
      setJsonCode(found.rawJson);
    } else {
      setJsonCode(
        JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": type,
            name: "Dhilip Studio Wedding Photography",
            url: "https://dhilipstudio.com",
          },
          null,
          2
        )
      );
    }
  };

  return (
    <div className="space-y-6 font-sans text-slate-900">
      <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
            GOOGLE RICH RESULTS STRUCTURED DATA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide mt-1">
            JSON-LD Schema Visual Builder
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Build and validate Google Rich Snippet schemas (LocalBusiness, Event, Article, FAQPage, BreadcrumbList).
          </p>
        </div>

        <a
          href="https://search.google.com/test/rich-results"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shrink-0"
        >
          <span className="material-symbols-outlined text-base">verified</span>
          <span>Google Rich Results Test &rarr;</span>
        </a>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-xs font-mono font-bold text-slate-600 uppercase">Schema Type:</label>
          {["LocalBusiness", "BreadcrumbList", "Article", "Event", "FAQPage", "AggregateRating"].map((type) => (
            <button
              key={type}
              onClick={() => handleSelectType(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedType === type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-600 uppercase font-bold mb-2">
            JSON-LD Code Output Payload ({selectedType})
          </label>
          <textarea
            rows={12}
            value={jsonCode}
            onChange={(e) => setJsonCode(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div className="pt-3 border-t border-slate-200 flex justify-end">
          <button className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer">
            Save Schema &amp; Inject to Header
          </button>
        </div>
      </div>
    </div>
  );
}
