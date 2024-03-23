"use client";
import { useFontStore } from "@/store/font-store";
import { Inter, Lora, Inconsolata } from "@/lib/fonts";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

export default function SwitchFont() {
  const { font, changeFont } = useFontStore();
  return (
    <Menu as="div" className="relative text-left">
      <Menu.Button className="inline-flex w-full gap-x-2 items-center rounded-md text-sm dark:text-white transition-all outline-none border-none font-bold">
        {font.charAt(0).toUpperCase() + font.slice(1)}{" "}
        <Image
          src="/assets/images/icon-arrow-down.svg"
          alt="icon arrow down"
          width={15}
          height={15}
        />
      </Menu.Button>
      
      <Transition
        appear
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[140px] origin-top-right divide-y divide-gray-100 rounded-lg bg-white dark:bg-pitch-black dark:shadow-[0_10px_50px_-15px] dark:shadow-purple dark:text-white ring-1 ring-black/5 focus:outline-none z-10">
          <div className="px-5 py-3 flex flex-col gap-y-3 items-start text-sm">
            <Menu.Item>
              <button
                onClick={() => changeFont("inter")}
                className={Inter.className}
              >
                Inter
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={() => changeFont("lora")}
                className={Lora.className}
              >
                Lora
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={() => changeFont("inconsolata")}
                className={Inconsolata.className}
              >
                Inconsolata
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
