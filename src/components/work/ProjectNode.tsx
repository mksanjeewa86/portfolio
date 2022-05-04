interface Project {
  name: string;
  period: string;
  tools: string[];
  description: string;
}

export const ProjectNode = (project: Project) => {
  return (
    <div className="p-2 rounded-xl shadow-sm shadow-green-700">
      <div className="italic text-xs">{project.period}</div>
      <div className="font-bold text-sm uppercase text-gray-500 border-b-[1px] border-gray-700">
        {project.name}
      </div>
      <div className="flex justify-center items-center p-2 flex-wrap">
        {project.tools.map((tool: string) => (
          <div className="bg-blue-700 text-gray-400 font-bold p-2 m-1 rounded-xl text-xs hover:scale-110 duration-500">
            {tool}
          </div>
        ))}
      </div>
      <div className="pl-2 pt-2 border-t-[1px] border-gray-700 text-xs text-gray-500">
        {project.description}
      </div>
    </div>
  );
};
