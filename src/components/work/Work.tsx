import { Node } from "./Node";
import { work } from "../../assets/documents";
import { IHistory } from "../../types";

export const Work: React.FC = () => {
  return (
    <div id="work" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-4 mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work Experience
          </p>
          <div className="w-full py-8">
            <ol className="relative border-l border-gray-200">
              {work.work.map((ed: IHistory, index: number) => {
                return <Node key={`work_${index}`} {...ed} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
