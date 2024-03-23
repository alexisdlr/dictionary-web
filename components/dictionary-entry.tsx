import { DictionaryEntry as DictionaryEntryType } from "@/types";
import React from "react";
import Meaning from "./meaning";

const DictionaryEntry = ({ entry }: { entry: DictionaryEntryType }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col gap-2">
        <h3 className="text-6xl font-bold dark:text-white-smoke text-rich-black">
          {entry.word}
        </h3>
        <p className="text-purple">{entry.phonetic}</p>
      </div>

      {entry.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </div>
  );
};

export default DictionaryEntry;
