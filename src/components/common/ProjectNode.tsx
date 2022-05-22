import { Project } from "../../types";

export const ProjectNode: React.FC<Project> = (project: Project) => {
  return (
    <div className="p-2 rounded-xl border-[0.25px] border-emerald-300 font-mono font-light">
      <div className="italic text-xs text-green-500">{project.period}</div>
      <div className="text-sm uppercase text-blue-300 border-b-[1px] border-gray-700">
        {project.name}
      </div>
      <div className="flex justify-center items-center p-2 flex-wrap">
        {project.tools.map((tool: string) => (
          <div className="text-white p-2 min-w-[60px] text-center m-1 rounded-lg text-xs hover:scale-110 duration-500 border-[1px] border-green-500">
            {tool}
          </div>
        ))}
      </div>
      <div className="pl-2 pt-2 border-t-[1px] border-gray-700 text-xs text-emerald-300">
        {project.description}
      </div>
    </div>
  );
};
