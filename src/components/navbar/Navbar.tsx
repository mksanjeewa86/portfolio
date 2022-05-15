import { FaBars, FaTimes } from "../../assets/icons";
import { logo } from "../../assets/images";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MobileSocialIcon } from "./MobileSocialIcon";
import { SocialIcon } from "./SocialIcon";

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-full fixed h-[80px] bg-[#0a192f] px-4 flex justify-between items-center text-gray-300 z-10">
      <div>
        <img src={logo} alt="logo" className="w-[50px]" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <MenuItem to="/" name="Home" />
        <MenuItem to="about" name="About" />
        <MenuItem to="history" name="Education" />
        <MenuItem to="work" name="Work" />
        <MenuItem to="skills" name="Skills" />
        <MenuItem to="other" name="Other Activities" />
        <MenuItem to="contact" name="Contact" />
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
        <img src={logo} alt="logo" className="w-[60px] mb-10 sm:w-[80px]" />
        <MenuItem type="mobile" click={handleClick} to="/" name="Home" />
        <MenuItem type="mobile" click={handleClick} to="about" name="About" />
        <MenuItem
          type="mobile"
          click={handleClick}
          to="history"
          name="Education"
        />
        <MenuItem type="mobile" click={handleClick} to="work" name="Work" />
        <MenuItem type="mobile" click={handleClick} to="skills" name="Skills" />
        <MenuItem
          type="mobile"
          click={handleClick}
          to="other"
          name="Other Activiets"
        />
        <MenuItem
          type="mobile"
          click={handleClick}
          to="contact"
          name="Contact"
        />
        <MobileSocialIcon />
      </ul>

      {/* social icons */}
      <SocialIcon />
    </nav>
  );
};

export default Navbar;
