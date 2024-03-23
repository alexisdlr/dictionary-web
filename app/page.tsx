"use client"
import { searchDictionary } from "@/actions/search-dictionary";
import Header from "@/components/header";
import ResultSearch from "@/components/result-search";
import SearchInput from "@/components/search-input";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState([]);
  const handleSearch = async (query: string) => {
    const data = await searchDictionary(query);
    setResult(data); 
  };
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start p-10 mx-auto dark:bg-absolute-dark bg-white">
      <div className="w-full max-w-3xl">
        <Header />
        <div className="w-full my-10 px-2 md:px-4">
          <SearchInput onSearch={handleSearch} />
        </div>
        <main>
          <ResultSearch data={result} />
        </main>
      </div>
    </div>
  );
}
