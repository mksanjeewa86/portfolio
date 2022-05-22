import { IMenu } from "../../types";

export const MenuItem: React.FC<IMenu> = (menu: IMenu) => {
  return (
    <li
      className={
        menu.type === "mobile"
          ? "py-4 text-xl sm:text-4xl"
          : menu.active
          ? "underline decoration-green-200 hover:decoration-blue-400 font-bold"
          : ""
      }
    >
      <a href={menu.to}>{menu.name}</a>
    </li>
  );
};
