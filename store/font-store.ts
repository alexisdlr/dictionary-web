import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FontStore {
  font: 'sans-serif' | 'serif' | 'monospace';
  changeFont: (font: 'sans-serif' | 'serif' | 'monospace') => void;
}

export const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      font: 'sans-serif',
      changeFont: (font) => set({ font: font}),
    }),
    {
      name: "font",
    }
  )
);