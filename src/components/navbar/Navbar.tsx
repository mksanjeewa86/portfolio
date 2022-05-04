import { FaBars, FaTimes } from "../../assets/icons";
import { logo } from "../../assets/images";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MobileSocialIcon } from "./MobileSocialIcon";
import { SocialIcon } from "./SocialIcon";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-full fixed h-[80px] bg-[#0a192f] px-4 flex justify-between items-center text-gray-300 z-50">
      <div>
        <img src={logo} alt="logo" className="w-[50px]" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <MenuItem to="home" name="Home" />
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
        <img src={logo} alt="logo" className="w-[80px] mb-10" />
        <MenuItem
          class="py-6 text-4xl"
          click={handleClick}
          to="home"
          name="Home"
        />
        <MenuItem
          class="py-6 text-4xl"
          click={handleClick}
          to="about"
          name="About"
        />
        <MenuItem
          class="py-6 text-4xl"
          click={handleClick}
          to="history"
          name="Education"
        />
        <MenuItem
          class="py-6 text-4xl"
          click={handleClick}
          to="work"
          name="Work"
        />
        <MenuItem
          class="py-6 text-4xl"
          click={handleClick}
          to="skills"
          name="Skills"
        />
        <MenuItem
          class="py-6 text-4xl"
          click={handleClick}
          to="other"
          name="Other Activiets"
        />
        <MenuItem
          class="py-6 text-4xl"
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
