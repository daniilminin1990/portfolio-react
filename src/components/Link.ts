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
    bottom: 0;
    left: 0;
    right: 0;
    bottom: 5px;
    z-index: -1;

    /* Значит если в props придет active, который = true и тип его boolean, то примени вот это*/
    ${(props) =>
      props.active === true &&
      css<{ active?: boolean }>`
        height: 10px;
      `}
  }
`;
