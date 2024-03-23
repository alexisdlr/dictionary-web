"use client";

import { useThemeStore } from "@/store/theme-store";
import Image from "next/image";

const SwitchTheme = () => {
  const { toggleDarkMode } = useThemeStore();

  return (
    <div className="flex items-center gap-x-2">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          onClick={toggleDarkMode}
          id="switch"
          type="checkbox"
          className="peer sr-only"
        />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border-none bg-silver dark:bg-purple after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full  after:bg-white after:transition-all after:content-['']  peer-checked:after:translate-x-full peer-checked:after:border-white "></div>
      </label>
      <Image
        src={"/assets/images/icon-moon.svg"}
        alt="Icon moon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default SwitchTheme;
