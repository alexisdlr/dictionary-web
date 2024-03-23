"use client"
import { useEffect } from 'react';
import { tailChase } from "ldrs";
import { useThemeStore } from '@/store/theme-store';

const DynamicLoader = () => {
  const { darkMode } = useThemeStore();
  useEffect(() => {
    tailChase.register();
  }, []);

  return (
    <l-tail-chase
      size="40"
      speed="1.75"
      color={`${darkMode ? "white" : "black"}`}
    ></l-tail-chase>
  );
};

export default DynamicLoader;
