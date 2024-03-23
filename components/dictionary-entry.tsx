import { DictionaryEntry as DictionaryEntryType } from "@/types";
import React from "react";
import Meaning from "./meaning";
import PlayButton from "./play-button";
import Link from "next/link";
import Image from "next/image";

const DictionaryEntry = ({ entry }: { entry: DictionaryEntryType }) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-between gap-4 
      p-2 md:p-4 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-6xl font-bold dark:text-white-smoke text-rich-black">
              {entry.word}
            </h3>
            <p className="text-purple">{entry.phonetic}</p>
          </div>
          <PlayButton audio="" />
        </div>

        {entry.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} />
        ))}
      </div>
      {entry.sourceUrls.length > 0 && (
        <div className="flex flex-col items-start md:flex-row gap-y-2 md:gap-y-0 gap-x-4 md:items-center mt-4">
          <p className="text-silver underline font-normal">Source</p>
          {entry.sourceUrls.map((url, index) => (
            <Link
              key={index}
              href={url}
              className="text-rich-black dark:text-white-smoke underline text-sm flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {url}{" "}
              <Image
                src="/assets/images/icon-new-window.svg"
                alt="external link icon"
                width={15}
                height={15}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default DictionaryEntry;
