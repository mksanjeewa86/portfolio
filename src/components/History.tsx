import { HistoryNode } from "./common/HistoryNode";
import { MasterTitle } from "./common/MasterTitle";

export const History: React.FC = () => {
  return (
    <div id="history" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
          <div className="pl-4">
            <MasterTitle name="Education" />
            <HistoryNode type="education" />
          </div>
          <div className="pl-4">
            <MasterTitle name="Course" />
            <HistoryNode type="course" />
          </div>
          <div className="pl-4">
            <MasterTitle name="Exam" />
            <HistoryNode type="exams" />
          </div>
        </div>
      </div>
    </div>
  );
};
