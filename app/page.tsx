"use client";
import { searchDictionary } from "@/actions/search-dictionary";
import DictionaryEntry from "@/components/dictionary-entry";
import Header from "@/components/header";
import SearchInput from "@/components/search-input";
import { DictionaryEntry as DictionaryEntryType } from "@/types";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState([]);
  const handleSearch = async (query: string) => {
    const data = await searchDictionary(query);
    setResult(data);
  };
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start p-3 md:p-10 mx-auto dark:bg-absolute-dark bg-white">
      <div className="w-full max-w-3xl">
        <Header />
        <div className="w-full my-6 md:my-10 px-2 md:px-4">
          <SearchInput onSearch={handleSearch} />
        </div>
        <main>
          {!result.length && (
            <p className="text-center text-2xl dark:text-white-smoke text-black">
              No results found
            </p>
          )}
          {result.map((entry: DictionaryEntryType) => (
            <DictionaryEntry key={entry.word} entry={entry} />
          ))}
        </main>
      </div>
    </div>
  );
}
