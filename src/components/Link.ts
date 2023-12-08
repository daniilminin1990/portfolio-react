import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 5px;
    left: 3px;
    right: 3px;
    z-index: -1;
    height: 0;
    transition: ${theme.animations.transition};
    ${(props) =>
      props.active === true &&
      css<{ active?: boolean }>`
        height: 10px;
      `};
    /* Значит если в props придет active, который = true и тип его boolean, то примени вот это */
  }
`;
