import { Node } from "./Node";
import { history } from "../../assets/documents";

export const Course = () => {
  return (
    <div id="course" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full py-8">
          <ol className="relative border-l border-gray-200">
            {history.course.map((ed: any) => {
              return <Node {...ed} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
