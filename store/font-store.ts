import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FontStore {
  font: 'inter' | 'lora' | 'inconsolata';
  changeFont: (font: 'inter' | 'lora' | 'inconsolata') => void;
}

export const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      font: 'inter',
      changeFont: (font) => set({ font: font}),
    }),
    {
      name: "font",
    }
  )
);