import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

export default function SwitchFont() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full gap-x-2 items-center rounded-md px-4 py-2 text-sm font-medium dark:text-white  focus:outline-none transition-all">
        Font{" "}
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
              <button>Sans serif</button>
            </Menu.Item>
            <Menu.Item>
              <button>Serif</button>
            </Menu.Item>
            <Menu.Item>
              <button>Mono</button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
