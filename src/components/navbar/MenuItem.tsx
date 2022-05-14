import { Link } from "react-scroll";
import { IMenu } from "../../types";

export const MenuItem: React.FC<IMenu> = (menu: IMenu) => {
  return (
    <li className={menu.class}>
      <Link onClick={menu.click} to={menu.to} smooth={true} duration={500}>
        {menu.name}
      </Link>
    </li>
  );
};
