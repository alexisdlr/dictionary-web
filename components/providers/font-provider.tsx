"use client"
import { useFontStore } from "@/store/font-store";
import { ReactNode } from "react";
import { Inter, Lora, Inconsolata } from "@/lib/fonts";

interface FontProviderProps {
  children: ReactNode;
}

const FontProvider = ({ children }: FontProviderProps) => {
  const { font } = useFontStore();

  const selectedFont = () => {
    switch (font) {
      case "sans-serif":
        return Inter.className;
      case "serif":
        return Lora.className;
      case "monospace":
        return Inconsolata.className;
      default:
        return Inter.className;
    }
  };

  return <body className={selectedFont()}>{children}</body>;
};

export default FontProvider;
