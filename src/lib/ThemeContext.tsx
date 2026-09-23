"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DASHBOARD_THEMES, DashboardTheme, getThemeById } from "./themeEngine";

interface ThemeContextType {
  activeTheme: DashboardTheme;
  setThemeId: (id: string) => void;
  isThemeModalOpen: boolean;
  openThemeModal: () => void;
  closeThemeModal: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: DASHBOARD_THEMES[0], // Editorial Luxury default
  setThemeId: () => {},
  isThemeModalOpen: false,
  openThemeModal: () => {},
  closeThemeModal: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>("white-blue-editorial");
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dhilip_admin_theme");
    if (saved && DASHBOARD_THEMES.some((t) => t.id === saved)) {
      setActiveThemeId(saved);
    }
  }, []);

  const activeTheme = getThemeById(activeThemeId);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-bg-primary", activeTheme.bgPrimary);
    root.style.setProperty("--theme-bg-surface", activeTheme.bgSurface);
    root.style.setProperty("--theme-bg-surface2", activeTheme.bgSurface2);
    root.style.setProperty("--theme-border", activeTheme.borderSubtle);
    root.style.setProperty("--theme-accent", activeTheme.accentColor);
    root.style.setProperty("--theme-accent-text", activeTheme.accentText);
    root.style.setProperty("--theme-text-primary", activeTheme.textPrimary);
    root.style.setProperty("--theme-text-muted", activeTheme.textMuted);
    root.style.setProperty("--theme-badge-bg", activeTheme.badgeBg);
    root.style.setProperty("--theme-badge-text", activeTheme.badgeText);
  }, [activeTheme]);

  const setThemeId = (id: string) => {
    setActiveThemeId(id);
    localStorage.setItem("dhilip_admin_theme", id);
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setThemeId,
        isThemeModalOpen,
        openThemeModal: () => setIsThemeModalOpen(true),
        closeThemeModal: () => setIsThemeModalOpen(false),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useDashboardTheme() {
  return useContext(ThemeContext);
}
