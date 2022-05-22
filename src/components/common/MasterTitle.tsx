import { title } from "../../types";

export const MasterTitle: React.FC<title> = (title: title) => {
  return (
    <p className="text-3xl text-white inline border-b-2 border-green-200 border-opacity-50 font-bold font-mono">
      {title.name}
    </p>
  );
};
