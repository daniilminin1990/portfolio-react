import React from "react";
import styled from "styled-components";

// Чтобы не писать всю эту конструкцию ниже, пропишем то же самое в export const Menu
/* type MenuItemsPropsType = {
  // В угловых скобках указываю массив чего должен быть.
  menuItems: Array<string>;
}; */

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;
