import { Link } from "react-scroll";

interface MenuI {
  to: string;
  name: string;
  class?: string;
  click?: () => void;
}

export const MenuItem = (menu: MenuI) => {
  return (
    <li className={menu.class}>
      <Link onClick={menu.click} to={menu.to} smooth={true} duration={500}>
        {menu.name}
      </Link>
    </li>
  );
};
