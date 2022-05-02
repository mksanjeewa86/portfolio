import {
  FaFacebook,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "../assets/icons";
import { logos } from "../assets/images";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-full fixed h-[80px] bg-[#0a192f] px-4 flex justify-between items-center text-gray-300 z-50">
      <div>
        <img src={logos} alt="logo" className="w-[50px]" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="history" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="other" smooth={true} duration={500}>
            Other Activities
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamberger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!toggle ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <img src={logos} alt="logo" className="w-[80px] mb-10" />
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="history" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="other" smooth={true} duration={500}>
            Other Activiets
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
      </ul>

      {/* social icons */}
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
    </nav>
  );
};

export default Navbar;
