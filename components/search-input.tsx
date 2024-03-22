import Image from "next/image";
import React from "react";

export default function SearchInput() {
  return (
    <div className="relative w-full h-16">
      <input
        className="w-full h-full px-4 text-lg text-gray-800 bg-white-smoke border-none rounded-xl focus:outline-none foc us:ring-2 focus:ring-purple
      font-bold focus:border-transparent
    "
      />
      <div className="absolute w-10 h-full flex items-center right-0 top-0">
        <Image
          src={"/assets/images/icon-search.svg"}
          alt="icon search svg"
          width={20}
          height={20}
          className=""
        />
      </div>
    </div>
  );
}
