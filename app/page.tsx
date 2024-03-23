"use client";

import { searchDictionary } from "@/actions/search-dictionary";
import DictionaryEntry from "@/components/dictionary-entry";
import Header from "@/components/header";
import Loader from "@/components/loader";
import NotFound from "@/components/not-found";
import SearchInput from "@/components/search-input";
import { DictionaryEntry as DictionaryEntryType } from "@/types";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<DictionaryEntryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const data = await searchDictionary(query);
      // Verificar si el resultado es un objeto de error
      if (data.title && data.message && data.resolution) {
        setError(data);
      } else {
        setResult(data);
        setError(null); // Limpiar el error si no hay ninguno
      }
    } catch (error) {
      console.log(error);
      setError({
        title: "Error",
        message: "An error occurred while fetching data.",
        resolution: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start p-3 md:p-10 mx-auto dark:bg-absolute-dark bg-white">
      <div className="w-full max-w-3xl">
        <Header />
        <div className="w-full my-6 md:my-10 px-2 md:px-4">
          <SearchInput onSearch={handleSearch} />
        </div>
        <main>
          {error && (
           <NotFound error={error} />
          )}
          {!error && !result.length && !loading && (
            <p className="text-left text-2xl dark:text-white-smoke text-black font-semibold px-2 md:px-4">
              Welcome to the dictionary! Search for any word to get started.
            </p>
          )}
          {loading && !error && (
            <div className="flex justify-center items-center h-full w-full dark:text-white-smoke text-black">
              <Loader />
            </div>
          )}
          {!loading &&
            !error &&
            result.map((entry: DictionaryEntryType) => (
              <DictionaryEntry key={entry.word} entry={entry} />
            ))}
        </main>
      </div>
    </div>
  );
}
