import { ProjectNode } from "./ProjectNode";
import { workNode, Project } from "../../types";

export const Node: React.FC<workNode> = (node: workNode) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-green-700">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-600">
        {node.web !== "" ? (
          <a target="_blank" rel="noreferrer" href={node.web}>
            {node.title}
          </a>
        ) : (
          node.title
        )}
      </h3>
      <h2 className="text-blue-500 mb-2 font-bold">{node.post}</h2>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-500 italic">
        {node.time}
      </time>
      <p className="mb-4 text-base font-normal text-gray-400">
        {node.description}
      </p>
      <div className="p-2 bg-gray-800 rounded-xl pl-4 font-bold">
        Projects Involved
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        {node.projects?.map((project: Project) => {
          return <ProjectNode {...project} />;
        })}
      </div>
    </li>
  );
};
