"use client";
import Image from "next/image";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form className="relative w-full h-12 md:h-16" onSubmit={handleSubmit}>
      <input
        className="w-full h-full px-4 md:px-6 text-sm md:text-lg text-gray-800 bg-white-smoke border-none rounded-xl focus:outline-none foc us:ring-2 focus:ring-purple
        font-bold focus:border-transparent dark:bg-pitch-black dark:text-white
      placeholder-rich-black/40 dark:placeholder-white-smoke/30 dark:ring-purple dark:focus:ring-purple
    "
        placeholder="Search for any word"
        onChange={handleInputChange}
      />
      <div className="absolute w-10 h-full flex items-center right-0 top-0">
        <Image
          src={"/assets/images/icon-search.svg"}
          alt="icon search svg"
          width={20}
          height={20}
        />
      </div>
    </form>
  );
}
