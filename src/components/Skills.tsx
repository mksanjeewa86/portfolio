import { skills } from "../assets/documents";
import { ISkill } from "../types";
import { MasterTitle } from "./common/MasterTitle";

export const Skills: React.FC = () => {
  const keys: string[] = Object.keys(skills);
  const values: any = Object.values(skills);

  return (
    <div id="skills" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-24">
          <MasterTitle name="Skills" />
          <p className="py-4 italic font-mono text-sm">
            Some of the technologies I've worked with
          </p>
        </div>
        {keys.map((element: string, index: number) => {
          return (
            <>
              <div
                key={`${element}_${new Date().getTime()}_${index}`}
                className="uppercase text-xs font-light font-mono border-b-2 border-green-800 border-opacity-50 text-green-200 italic"
              >
                {element}
              </div>
              <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 text-center py-8 font-mono text-sm font-light italic">
                {values[index].map((el: ISkill, ind: number) => {
                  return (
                    <div
                      key={`skill_${new Date().getTime()}_${ind}`}
                      className="hover:scale-110 duration-500 rounded-lg"
                    >
                      <div className="rounded-xl p-1 border-green-200 border-[1px]">
                        <p className="text-white">{el.name}</p>

                        <div className="w-full rounded-full bg-gray-700 mb-1">
                          <div
                            className="bg-green-700 text-xs flex items-center flex-row font-light text-blue-100 text-center p-0.5 leading-none rounded-full"
                            style={{ width: `${Number(el.level) * 10}%` }}
                          >
                            <p className="ml-2 p-[0.5px]">{`${
                              Number(el.level) * 10
                            }%`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
