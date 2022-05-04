import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "../../assets/icons";

export const MobileSocialIcon = () => {
  return (
    <div className="flex justify-center p-4 lg:hidden border-t-[1px] border-white border-opacity-20">
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-blue-900 hover:bg-blue-800 mx-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/malakasanjeewa86"
        >
          <FaFacebook size={30} />
        </a>
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-blue-500 hover:bg-blue-400 mx-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mksanjeewa/"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#333333] hover:bg-[#524f4f] mx-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mksanjeewa86"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#35b2ec] hover:bg-[#2c99cc] mx-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/mksanjeewa"
        >
          <FaTwitter size={30} />
        </a>
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#8a3ab9] hover:bg-[#782da3] mx-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/mksanjeewa86/"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};
