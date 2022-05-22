import { WorkNode } from "./common/WorkNode";
import { work } from "../assets/documents";
import { IHistory } from "../types";
import { MasterTitle } from "./common/MasterTitle";

export const Work: React.FC = () => {
  return (
    <div id="work" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-4 mt-24">
          <MasterTitle name="Work Experience" />
          <div className="w-full py-8">
            <ol className="relative border-l border-gray-200">
              {work.work.map((ed: IHistory, index: number) => {
                return <WorkNode key={`work_${index}`} {...ed} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
