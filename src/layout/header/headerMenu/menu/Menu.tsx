import React from "react";
import { S } from "../HeaderMenu_Styles";

// const items = ["Home", "Skills", "Works", "Testimony", "Contact"];
const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Skills",
    href: "skills",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Testimony",
    href: "testimony",
  },
  {
    title: "Contacts",
    href: "contacts",
  },
];

// export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
export const Menu: React.FC = () => {
  return (
    <ul>
      {/* {props.menuItems.map((item, index) => { */}
      {items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            {/* <S.NavLink href={`#${item.href}`}> */}
            <S.NavLink to={item.href} smooth={true} activeClass="active" spy={true} offset={-150}>
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
