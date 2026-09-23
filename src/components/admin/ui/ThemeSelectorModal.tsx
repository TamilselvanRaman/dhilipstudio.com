"use client";

import React, { useState } from "react";
import { DASHBOARD_THEMES, DashboardTheme } from "@/lib/themeEngine";

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeThemeId: string;
  onSelectTheme: (themeId: string) => void;
}

export function ThemeSelectorModal({
  isOpen,
  onClose,
  activeThemeId,
  onSelectTheme,
}: ThemeSelectorModalProps) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filteredThemes = DASHBOARD_THEMES.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.designStyle.toLowerCase().includes(search.toLowerCase()) ||
      t.mainFeel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl bg-[#141416] border border-[#2A2A2E] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#2A2A2E] bg-[#17171A] flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C89B3C] font-bold block">
              DHILIP STUDIO DESIGN SYSTEM
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F2] mt-0.5">
              Select Admin Dashboard Theme (20 Curated Styles)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1F1F23] hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center border border-[#2A2A2E] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-[#141416] border-b border-[#2A2A2E]">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-stone-400 text-sm">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 20 themes by name, style (e.g. Traditional, Editorial, Minimal, Gold)..."
              className="w-full bg-[#1F1F23] border border-[#2A2A2E] rounded-xl pl-9 pr-4 py-2 text-xs text-[#F5F5F2] focus:border-[#C89B3C] focus:outline-none font-sans"
            />
          </div>
        </div>

        {/* Theme Grid */}
        <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {filteredThemes.map((theme) => {
            const isSelected = activeThemeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => {
                  onSelectTheme(theme.id);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 group ${
                  isSelected
                    ? "border-[#C89B3C] bg-[#1F1F23] shadow-lg ring-1 ring-[#C89B3C]"
                    : "border-[#2A2A2E] bg-[#17171A] hover:border-stone-500 hover:bg-[#1C1C20]"
                }`}
              >
                {/* Theme Swatch Graphic Preview */}
                <div
                  className="h-24 rounded-xl p-3 flex flex-col justify-between border border-white/10 relative overflow-hidden"
                  style={{ backgroundColor: theme.bgPrimary }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border border-white/10"
                      style={{
                        backgroundColor: theme.badgeBg,
                        color: theme.badgeText,
                      }}
                    >
                      {theme.designStyle}
                    </span>

                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#C89B3C] text-stone-950 flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </span>
                    )}
                  </div>

                  <div>
                    <span
                      className="text-xs font-bold block"
                      style={{ color: theme.accentColor }}
                    >
                      {theme.name}
                    </span>
                    <span
                      className="text-[10px] block opacity-70"
                      style={{ color: theme.textMuted }}
                    >
                      {theme.mainFeel}
                    </span>
                  </div>
                </div>

                {/* Theme Metadata */}
                <div>
                  <div className="flex items-center justify-between text-xs font-serif font-bold text-[#F5F5F2]">
                    <span>{theme.name}</span>
                    <span className="text-[10px] font-mono text-[#C89B3C]">
                      {isSelected ? "Active Theme" : "Select →"}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-400 font-sans mt-0.5">
                    {theme.mainFeel} · {theme.designStyle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#2A2A2E] bg-[#17171A] flex items-center justify-between text-xs font-mono text-stone-400">
          <span>20 Photography Themes Available</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#1F1F23] hover:bg-stone-800 text-[#F5F5F2] border border-[#2A2A2E]"
          >
            Close Theme Engine
          </button>
        </div>
      </div>
    </div>
  );
}
