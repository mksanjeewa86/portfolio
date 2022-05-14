import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "../../assets/icons";

export const SocialIcon: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.facebook.com/malakasanjeewa86"
          >
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/mksanjeewa/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/mksanjeewa86"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#35b2ec]">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://twitter.com/mksanjeewa"
          >
            Twitter <FaTwitter size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a3ab9]">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.instagram.com/mksanjeewa86/"
          >
            Instagram <FaInstagram size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
