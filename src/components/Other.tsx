import { Node } from "./history/Node";
import { history } from "../assets/documents";
import { IOther } from "../types";

export const Other: React.FC = () => {
  return (
    <div id="other" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Other Activities
          </p>
          <div className="w-full py-8">
            <ol className="relative border-l border-gray-200">
              {history.other.map((ed: IOther, index: number) => {
                return <Node key={`other_${index}`} {...ed} type="other" />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
