import { Meaning as MeaningType } from "@/types";
import React from "react";
import Definition from "./definition";

const Meaning = ({ meaning }: { meaning: MeaningType }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-2xl font-bold dark:text-white-smoke text-rich-black my-6 italic">
        {meaning.partOfSpeech}
      </h4>
      <p className="text-silver mb-3">Meaning</p>
      <ul className="px-5">
        {meaning.definitions.map((definition, index) => (
          <Definition key={index} def={definition} />
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-purple mb-3 font-bold">
            <span className="text-rich-black dark:text-silver font-normal">
              Synonyms
            </span>
            : {meaning.synonyms.join(', ')}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Meaning;
