import { MeaningDefinition } from "@/types";
import React from "react";

type DefinitionProps = {
  def: MeaningDefinition;
};

const Definition = ({ def }: DefinitionProps) => {
  return (
    <li className="flex items-center gap-x-4 mt-4">
      <div>
        <div className="size-1 relative bg-purple rounded-full" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-md dark:text-white-smoke text-rich-black">
          {def.definition}
        </p>
        {def.example && (
          <p className="text-sm text-silver mt-2">{`"${def.example}"`}</p>
        )}
      </div>
    </li>
  );
};

export default Definition;
