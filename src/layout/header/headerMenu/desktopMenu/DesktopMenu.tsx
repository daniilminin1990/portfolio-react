import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

// Чтобы не писать всю эту конструкцию ниже, пропишем то же самое в export const Menu
/* type MenuItemsPropsType = {
  // В угловых скобках указываю массив чего должен быть.
  menuItems: Array<string>;
}; */

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  );
};
