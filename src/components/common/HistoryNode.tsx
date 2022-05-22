import { EducationNode } from "./EducationNode";
import { history } from "../../assets/documents";
import { IHistory, HistoryType } from "../../types";

export const HistoryNode: React.FC<HistoryType> = (type: HistoryType) => {
  return (
    <div id={type.type} className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full py-8">
          <ol className="relative border-l border-gray-200">
            {(type.type === "course" ||
              type.type === "education" ||
              type.type === "exams") &&
              history[type.type].map((ed: IHistory, index: number) => {
                return (
                  <EducationNode
                    key={`${type.type}_${index}`}
                    {...ed}
                    type={type.type}
                  />
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
};
