import { FaGithub } from "../assets/icons";
import { MobileSocialIcon } from "./navbar/MobileSocialIcon";

export const Footer: React.FC = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 w-full flex">
      <div className="mx-auto p-4 flex flex-col justify-center w-full h-full bg-white">
        <MobileSocialIcon />
        <div className="text-center text-black">
          All rights reserved ©︎&nbsp;{new Date().getFullYear()}&nbsp;
          <span className="text-blue-400">Malaka Sanjeewa</span>
        </div>
        <div className="border-b-2 m-4"></div>
        <div className="text-black flex justify-center items-center">
          <div>View code&nbsp;</div>
          <a
            href="https://github.com/mksanjeewa86/portfolio"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
