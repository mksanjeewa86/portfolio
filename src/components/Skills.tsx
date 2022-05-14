import { skills } from "../assets/documents";
import { ISkill } from "../types";

export const Skills: React.FC = () => {
  const keys: string[] = Object.keys(skills);
  const values: any = Object.values(skills);

  return (
    <div id="skills" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skillls
          </p>
          <p className="py-4">Some of the technologies I've worked with</p>
        </div>
        {keys.map((element: string, index: number) => {
          return (
            <>
              <div className="uppercase text-xs font-bold border-b-2 border-gray-800">
                {element}
              </div>
              <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8">
                {values[index].map((el: ISkill, ind: number) => {
                  return (
                    <div
                      key={`skill_${ind}`}
                      className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg"
                    >
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                          style={{ width: `${Number(el.level) * 10}%` }}
                        >
                          {`${Number(el.level) * 10}%`}
                        </div>
                      </div>
                      <p className="text-xs p-2 text-blue-400 font-bold italic">
                        {el.name}
                      </p>
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
