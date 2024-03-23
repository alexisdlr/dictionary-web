"use client";
import { useThemeStore } from "@/store/theme-store";
import { tailChase } from "ldrs";

tailChase.register();

const Loader = () => {
  const { darkMode } = useThemeStore();
  return (
    <l-tail-chase
      size="40"
      speed="1.75"
      color={`${darkMode ? "white" : "black"}`}
    ></l-tail-chase>
  );
};

export default Loader;
