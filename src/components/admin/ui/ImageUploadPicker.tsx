"use client";

import React, { useState, useRef } from "react";

interface ImageUploadPickerProps {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  accentColor?: "gold" | "blue";
}

const PRESET_ASSETS = [
  { label: "Mandap Wedding", url: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp" },
  { label: "Candid Vows", url: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp" },
  { label: "Brahmin Homam", url: "/home_Page_images/brahmin-wedding-photography.jpg" },
  { label: "Beach Sunset", url: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg" },
  { label: "Engagement Shoot", url: "/home_Page_images/engagement-photo-studio-chennai.jpg" },
  { label: "Maternity Solitude", url: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg" },
  { label: "Newborn Baby", url: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio.jpg" },
  { label: "Birthday Milestone", url: "/home_Page_images/kids-birthday-photographer-chennai.webp" },
  { label: "Studio Logo", url: "/logo.png" },
];

export function ImageUploadPicker({
  value,
  onChange,
  label = "Upload Image / Drag & Drop",
  accentColor = "blue",
}: ImageUploadPickerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isGold = accentColor === "gold";
  const accentText = isGold ? "text-[#b88c42]" : "text-blue-600";
  const accentBorderHover = isGold ? "hover:border-[#b88c42]" : "hover:border-blue-500";
  const dragActiveBorder = isGold ? "border-[#b88c42] bg-[#b88c42]/10" : "border-blue-500 bg-blue-50";
  const focusBorder = isGold ? "focus:border-[#b88c42]" : "focus:border-blue-600";
  const btnClass = isGold
    ? "bg-[#b88c42] hover:bg-[#9e742f] text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (PNG, JPG, WEBP, GIF)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onChange(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center justify-between">
          <label className="block text-[11px] font-mono uppercase font-bold text-slate-700">
            {label}
          </label>
          <button
            type="button"
            onClick={() => setShowPresets(!showPresets)}
            className={`text-[11px] font-mono font-bold ${accentText} hover:underline cursor-pointer`}
          >
            {showPresets ? "Hide Studio Presets" : "Choose Preset Image"}
          </button>
        </div>
      )}

      {/* Preset Asset Selection Grid */}
      {showPresets && (
        <div className="p-3 bg-white border border-slate-200 rounded-xl grid grid-cols-3 sm:grid-cols-5 gap-2 shadow-sm animate-fade-in">
          {PRESET_ASSETS.map((asset, idx) => (
            <div
              key={idx}
              onClick={() => {
                onChange(asset.url);
                setShowPresets(false);
              }}
              className={`group cursor-pointer bg-slate-50 rounded-lg overflow-hidden border border-slate-200 ${accentBorderHover} p-1 text-center space-y-1 transition-all hover:bg-white hover:shadow-md`}
            >
              <div className="h-14 w-full rounded overflow-hidden relative bg-slate-200">
                <img src={asset.url} alt={asset.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-[9px] font-mono text-slate-700 font-semibold block truncate">{asset.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Drag & Drop Upload Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 cursor-pointer transition-all ${
          isDragging
            ? `${dragActiveBorder} scale-[1.01]`
            : "border-slate-300 bg-slate-50/80 hover:bg-white hover:border-blue-400 shadow-2xs"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden relative shadow-2xs">
            {value ? (
              <img
                src={value}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <span className={`material-symbols-outlined text-xl ${isGold ? "text-[#b88c42]" : "text-blue-600"}`}>
                cloud_upload
              </span>
            )}
          </div>

          <div className="min-w-0 text-left">
            <span className="text-xs font-bold text-slate-900 block truncate">
              Click or Drag &amp; Drop Image Here
            </span>
            <span className="text-[10px] font-mono text-slate-500 block truncate">
              Supports PNG, JPG, WEBP, GIF (Auto Preview)
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className={`px-3.5 py-2 rounded-xl ${btnClass} text-xs font-mono font-bold shrink-0 shadow-xs cursor-pointer transition-all`}
        >
          Browse File
        </button>
      </div>

      {/* Manual Input Field fallback */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Or type asset path: /home_Page_images/..."
        className={`w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 ${focusBorder} shadow-2xs`}
      />
    </div>
  );
}
