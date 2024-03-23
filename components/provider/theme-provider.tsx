"use client";

import { useThemeStore } from "@/store/theme-store";
import React, { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { darkMode } = useThemeStore();
  console.log(darkMode)
  return (
    <div className={`${darkMode ? "dark" : ""} w-full h-full transition`}>
      {children}
    </div>
  );
};

export default ThemeProvider;
