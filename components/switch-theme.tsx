"use client";

import { useThemeStore } from "@/store/theme-store";

const SwitchTheme = () => {
  const { toggleDarkMode } = useThemeStore();
  const { darkMode } = useThemeStore();

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
      <IconMoon color={darkMode ? "#A445ED" : ""} />
    </div>
  );
};

function IconMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fill="none"
        stroke={props.color || "#838383"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  );
}

export default SwitchTheme;
