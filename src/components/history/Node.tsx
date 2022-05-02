interface educationNode {
  title: string;
  web: string;
  time: string;
  description: string;
}

export const Node = (node: educationNode) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          className="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {node.web !== "" ? (
          <a target="_blank" rel="noreferrer" href={node.web}>
            {node.title}
          </a>
        ) : (
          node.title
        )}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {node.time}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {node.description}
      </p>
    </li>
  );
};
