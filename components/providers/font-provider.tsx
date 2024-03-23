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
      case "inter":
        return Inter.className;
      case "lora":
        return Lora.className;
      case "inconsolata":
        return Inconsolata.className;
      default:
        return Inter.className;
    }
  };

  return <body className={selectedFont()}>{children}</body>;
};

export default FontProvider;
