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
              <div className="uppercase text-xs font-light font-mono border-b-2 border-green-800 border-opacity-50 text-green-200 italic">
                {element}
              </div>
              <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8">
                {values[index].map((el: ISkill, ind: number) => {
                  return (
                    <div
                      key={`skill_${ind}`}
                      className="hover:scale-110 duration-500 rounded-lg"
                    >
                      <div className="w-full rounded-full bg-gray-700">
                        <div
                          className="bg-green-700 text-xs flex items-center p-1 flex-row font-light text-blue-100 text-center p-0.5 leading-none rounded-full"
                          style={{ width: `${Number(el.level) * 10}%` }}
                        >
                          <p className="text-orange-300 ml-2">{el.name}</p>
                          &nbsp;
                          <p>{`${Number(el.level) * 10}%`}</p>
                        </div>
                      </div>
                      {/* <p className="text-xs font-light p-2 text-green-200 font-mono italic">
                        {el.name}
                      </p> */}
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
