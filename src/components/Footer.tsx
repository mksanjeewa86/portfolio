import { FaGithub } from "../assets/icons";
import { MobileSocialIcon } from "./navbar/MobileSocialIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-300 w-full">
      <div className="mx-auto p-4 flex flex-col justify-center w-full h-full bg-white">
        <MobileSocialIcon />
        <div className="text-center text-black">
          All rights reserved ©︎&nbsp;{new Date().getFullYear()}&nbsp;
          <span className="text-blue-400">Malaka Sanjeewa</span>
        </div>
        <div className="border-b-2 m-4"></div>
        <div className="text-black flex justify-center items-center flex-col">
          <div className="font-bold text-lg text-red-300 underline">
            Tech stack of this site
          </div>
          <ul className="flex flex-row text-blue-300">
            <li>React.js</li>
            <li>Typescript</li>
            <li>S3</li>
            <li>CloudFront</li>
            <li>Certificate Manager</li>
            <li>Tailwind CSS</li>
            <li>GitHub</li>
          </ul>
          <div className="flex flex-row">
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
    </footer>
  );
};
