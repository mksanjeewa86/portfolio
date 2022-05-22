import { EducationNode } from "./common/EducationNode";
import { history } from "../assets/documents";
import { IOther } from "../types";
import { MasterTitle } from "./common/MasterTitle";

export const Other: React.FC = () => {
  return (
    <div id="other" className="w-full bg-[#0a192f] text-gray-300 min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-4 mt-20">
          <MasterTitle name="Extra Activities" />
          <div className="w-full py-8">
            <ol className="relative border-l border-gray-200">
              {history.other.map((ed: IOther, index: number) => {
                return (
                  <EducationNode key={`other_${index}`} {...ed} type="other" />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
